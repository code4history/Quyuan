import nunjucks from "nunjucks"
import { Feature, FeatureCollection } from 'geojson';

// Nunjucks is not a sandbox. The guards below make the known routes from a
// template to `Function` harder to reach while a Quyuan template renders; they
// do not make templates written by untrusted parties safe to evaluate.
const BLOCKED_NAMES = new Set([
  'constructor',
  '__proto__',
  'prototype',
  '__defineGetter__',
  '__defineSetter__',
  '__lookupGetter__',
  '__lookupSetter__',
  'call',
  'apply',
  'bind',
])

// Values a template must never hold: anything that builds code from a string
// (the Function family) or gives generic access to objects (Object, Reflect).
const BLOCKED_VALUES: ReadonlySet<unknown> = new Set<unknown>([
  Function,
  Object.getPrototypeOf(async function () {}).constructor,
  Object.getPrototypeOf(function* () {}).constructor,
  Object.getPrototypeOf(async function* () {}).constructor,
  Object,
  Reflect,
])

const hasOwn = (obj: object, name: string): boolean =>
  Object.prototype.hasOwnProperty.call(obj, name)

// Normalize a member key once, so the check and the actual lookup see the same
// value (a key object could return a different name on each toString call).
const normalizeKey = (val: unknown): string | symbol =>
  typeof val === 'symbol' ? val : String(val)

interface NunjucksFrame {
  lookup: (name: string) => unknown
}

interface NunjucksContext {
  ctx: Record<string, unknown>
  env: { globals: Record<string, unknown> }
}

interface NunjucksNode {
  typename: string
  value?: unknown
  key?: NunjucksNode
  name?: NunjucksNode
  target?: NunjucksNode
  targets?: NunjucksNode[]
  right?: NunjucksNode
  val?: NunjucksNode
  args?: { children: NunjucksNode[] }
  names?: { children: NunjucksNode[] }
  children?: NunjucksNode[]
}

interface NunjucksParserApi {
  parser: { parse: (src: string) => NunjucksNode }
}

// The Nunjucks compiler writes names into the JavaScript it generates without
// escaping them, so a name must not be able to end the string it lands in.
// Attribute names come from the data and are often not ASCII, so this keeps
// everything a name can hold today that has no meaning in JavaScript: ASCII
// letters, digits, `_` and `$`, plus non-ASCII letters, marks, numbers,
// punctuation and symbols (`名称`, `緯度・経度`, `面積（㎡）`). It leaves out the
// other ASCII characters, separators, and control and format characters.
const SAFE_NAME = /^(?:[\w$]|[^\p{ASCII}\p{C}\p{Z}])+$/u

// The string key of a called member is only escaped for quotes, in the name the
// compiler keeps for its error message.
const UNSAFE_CALLEE_KEY = /[\\\r\n\u2028\u2029]/

const refuseName = (name: unknown): never => {
  throw new Error('The name ' + JSON.stringify(name) + ' is not allowed in templates')
}

const assertSafeName = (name: unknown): void => {
  if (!SAFE_NAME.test(String(name))) refuseName(name)
}

const assertSafeCallee = (node: NunjucksNode | undefined): void => {
  if (node?.typename === 'FunCall') {
    assertSafeCallee(node.name)
  } else if (node?.typename === 'LookupVal') {
    assertSafeCallee(node.target)
    assertSafeCallee(node.val)
  } else if (
    node?.typename === 'Literal' &&
    typeof node.value === 'string' &&
    UNSAFE_CALLEE_KEY.test(node.value)
  ) {
    refuseName(node.value)
  }
}

// The nodes that a template assigns to the render context.
const assignedNodes = (node: NunjucksNode): (NunjucksNode | undefined)[] => {
  switch (node.typename) {
    case 'Set':
      return node.targets ?? []
    case 'Macro':
    case 'Caller':
      return [node.name]
    case 'Import':
      return [node.target]
    case 'FromImport':
      // `{% from "x" import a as b %}` is a Pair whose value is the alias.
      return (node.names?.children ?? []).map((child) =>
        child.typename === 'Pair' ? (child.value as NunjucksNode | undefined) : child
      )
    default:
      return []
  }
}

// The other nodes the compiler reads as a name, whatever the parser accepted.
const otherNameNodes = (node: NunjucksNode): (NunjucksNode | undefined)[] => {
  switch (node.typename) {
    case 'For':
    case 'AsyncEach':
    case 'AsyncAll':
      return node.name?.typename === 'Array' ? (node.name.children ?? []) : []
    case 'Macro':
    case 'Caller': {
      // A trailing dict is read as the keyword arguments of the macro.
      const last = node.args?.children[node.args.children.length - 1]
      return last?.typename === 'Dict' || last?.typename === 'KeywordArgs'
        ? (last.children ?? []).map((pair) => pair.key)
        : []
    }
    case 'FromImport':
      return (node.names?.children ?? []).flatMap((child) =>
        child.typename === 'Pair' ? [child.key] : []
      )
    default:
      return []
  }
}

const assertPlainName = (node: NunjucksNode | undefined): void => {
  if (node?.typename !== 'Symbol') {
    throw new Error('Only plain names can be assigned in templates')
  }
}

const assertSafeNode = (node: NunjucksNode): void => {
  if (node.typename === 'Symbol') {
    assertSafeName(node.value)
  } else if (node.typename === 'Is') {
    // A test can be named by a string, as in `x is "string"`, or be called.
    const test = node.right?.name ?? node.right
    if (test?.value !== undefined) assertSafeName(test.value)
  } else if (node.typename === 'FunCall') {
    assertSafeCallee(node.name)
  }
  // Top-level `{% set %}`, `{% macro %}` and `{% import %}` write into the render
  // context, which is a plain object: `{% set __proto__ = [] %}` would replace
  // its prototype.
  for (const assigned of assignedNodes(node)) {
    assertPlainName(assigned)
    if (BLOCKED_NAMES.has(String(assigned?.value))) {
      throw new Error('Assigning to `' + String(assigned?.value) + '` is not allowed in templates')
    }
  }
  otherNameNodes(node).forEach(assertPlainName)
}

const isNode = (value: unknown): value is NunjucksNode =>
  typeof value === 'object' && value !== null && 'typename' in value

// Visits every node. `findAll` only follows a node's declared fields, which
// leave out the body of a `{% set %}` block.
const walkNodes = (value: unknown, visit: (node: NunjucksNode) => void): void => {
  if (Array.isArray(value)) {
    value.forEach((item) => walkNodes(item, visit))
  } else if (isNode(value)) {
    visit(value)
    Object.values(value).forEach((item) => walkNodes(item, visit))
  }
}

// Refuses a template before it compiles if it holds a name that would break out
// of the generated code or an assignment that would reach the context prototype.
const assertSafeTemplate = (templateRaw: string): void => {
  const api = nunjucks as unknown as NunjucksParserApi
  let root: NunjucksNode
  try {
    root = api.parser.parse(templateRaw)
  } catch {
    // Syntax errors are reported by Nunjucks itself when the template renders.
    return
  }
  walkNodes(root, assertSafeNode)
}

interface NunjucksRuntime {
  memberLookup: (obj: unknown, val: unknown) => unknown
  contextOrFrameLookup: (context: unknown, frame: unknown, name: unknown) => unknown
  callWrap: (obj: unknown, name: unknown, context: unknown, args: unknown[]) => unknown
}

interface NunjucksEnvironmentTables {
  filters: Record<string, unknown>
  tests: Record<string, unknown>
  globals: Record<string, unknown>
  getFilter: (name: string) => unknown
  getTest: (name: string) => unknown
  getGlobal: (name: string) => unknown
}

const getNunjucksRuntime = (): NunjucksRuntime | undefined =>
  (nunjucks as unknown as { runtime?: NunjucksRuntime }).runtime

// A fresh environment per template (as `nunjucks.compile` does by default),
// whose filter, test and global tables only answer their own entries. Without
// this, a filter name such as `valueOf` or `constructor` resolves to a method
// inherited from Object.prototype.
const createEnvironment = (): nunjucks.Environment => {
  const env = new nunjucks.Environment()
  const tables = env as unknown as NunjucksEnvironmentTables
  tables.getFilter = function (this: NunjucksEnvironmentTables, name: string) {
    if (!hasOwn(this.filters, name) || !this.filters[name]) {
      throw new Error('filter not found: ' + name)
    }
    return this.filters[name]
  }
  tables.getTest = function (this: NunjucksEnvironmentTables, name: string) {
    if (!hasOwn(this.tests, name) || !this.tests[name]) {
      throw new Error('test not found: ' + name)
    }
    return this.tests[name]
  }
  tables.getGlobal = function (this: NunjucksEnvironmentTables, name: string) {
    if (!hasOwn(this.globals, name) || typeof this.globals[name] === 'undefined') {
      throw new Error('global not found: ' + name)
    }
    return this.globals[name]
  }
  return env
}

let memberGuardInstalled = false

// Swaps `runtime.memberLookup`, `runtime.contextOrFrameLookup` and
// `runtime.callWrap` for the duration of `render`. A nested call leaves the
// outer guard in place.
function runWithMemberGuard<T>(render: () => T): T {
  const runtime = getNunjucksRuntime()
  if (memberGuardInstalled || !runtime) {
    return render()
  }

  const originalMemberLookup = runtime.memberLookup
  const originalContextOrFrameLookup = runtime.contextOrFrameLookup
  const originalCallWrap = runtime.callWrap

  runtime.memberLookup = (obj, val) => {
    if (obj === undefined || obj === null || BLOCKED_VALUES.has(obj)) {
      return undefined
    }
    const key = normalizeKey(val)
    if (typeof key === 'string' && BLOCKED_NAMES.has(key)) {
      return undefined
    }
    if (BLOCKED_VALUES.has((obj as Record<string | symbol, unknown>)[key])) {
      return undefined
    }
    return originalMemberLookup(obj, key)
  }

  // Only names set in the template (the frame), the template data's own
  // properties and the environment's own globals are visible. Inherited
  // properties of the render context are not, even if its prototype changes.
  runtime.contextOrFrameLookup = (context, frame, name) => {
    const key = String(name)
    if (BLOCKED_NAMES.has(key)) {
      return undefined
    }
    let value = (frame as NunjucksFrame).lookup(key)
    if (value === undefined) {
      const { ctx, env } = context as NunjucksContext
      if (hasOwn(ctx, key)) {
        value = ctx[key]
      } else if (hasOwn(env.globals, key)) {
        value = env.globals[key]
      }
    }
    if (BLOCKED_VALUES.has(value)) {
      return undefined
    }
    return value
  }

  runtime.callWrap = (obj, name, context, args) => {
    if (BLOCKED_VALUES.has(obj)) {
      throw new Error('Unable to call `' + String(name) + '`, which is not allowed in templates')
    }
    return originalCallWrap(obj, name, context, args)
  }

  memberGuardInstalled = true
  try {
    return render()
  } finally {
    runtime.memberLookup = originalMemberLookup
    runtime.contextOrFrameLookup = originalContextOrFrameLookup
    runtime.callWrap = originalCallWrap
    memberGuardInstalled = false
  }
}

// param: geojson
// {
//   ...,
//   "features": [
//     {
//       ...,
//       "properties": {
//         "type": "jizo"
//       }
//     }
//   ],
//   ...
// }

// param: templates
// {
//   "pin": "{{{type}}}.png",
// }

// return: embed geojson
// {
//   ...,
//   "features": [
//     {
//       ...,
//       "properties": {
//         "type": "jizo"
//       },
//       "results": {
//         "ping": "jizo.png"
//       }
//     }
//   ],
//   ...
// }

export interface TemplateExtractorOptions {
  geojson: FeatureCollection | Feature,
  templates: TemplateType
}

interface CompiledTemplateType {
  [index: string]: nunjucks.Template
}

interface TemplateType {
  [index: string]: string
}

export function templateExtractor(options: TemplateExtractorOptions) {
  const compiledTemplates = {} as CompiledTemplateType
  for (const [key, templateRaw] of Object.entries(options.templates)) {
    assertSafeTemplate(templateRaw)
    compiledTemplates[key] = nunjucks.compile(templateRaw, createEnvironment())
  }

  const featureHandler = (feature: Feature) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (feature as any).result = {}
    for (const key of Object.keys(options.templates)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (feature as any).result[key] = compiledTemplates[key].render(feature.properties || {})
    }
  }

  runWithMemberGuard(() => {
    if ('features' in options.geojson) {
      options.geojson.features.forEach(featureHandler)
    } else {
      featureHandler(options.geojson as Feature)
    }
  })

  return options.geojson;
}