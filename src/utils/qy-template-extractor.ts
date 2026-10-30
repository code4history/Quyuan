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
  value?: unknown
  name?: NunjucksNode
  target?: NunjucksNode
  targets?: NunjucksNode[]
  names?: { children: NunjucksNode[] }
  findAll: (type: unknown) => NunjucksNode[]
}

interface NunjucksParserApi {
  parser: { parse: (src: string) => NunjucksNode }
  nodes: Record<'Set' | 'Macro' | 'Import' | 'FromImport' | 'Pair', unknown>
}

// Top-level `{% set %}`, `{% macro %}` and `{% import %}` write into the render
// context, which is a plain object: `{% set __proto__ = [] %}` would replace
// its prototype. Refuse such templates before they render.
const assertNoBlockedAssignment = (templateRaw: string): void => {
  const api = nunjucks as unknown as NunjucksParserApi
  let root: NunjucksNode
  try {
    root = api.parser.parse(templateRaw)
  } catch {
    // Syntax errors are reported by Nunjucks itself when the template renders.
    return
  }
  const names: unknown[] = []
  for (const node of root.findAll(api.nodes.Set)) {
    for (const target of node.targets ?? []) names.push(target.value)
  }
  for (const node of root.findAll(api.nodes.Macro)) names.push(node.name?.value)
  for (const node of root.findAll(api.nodes.Import)) names.push(node.target?.value)
  for (const node of root.findAll(api.nodes.FromImport)) {
    for (const child of node.names?.children ?? []) {
      // `{% from "x" import a as b %}` is a Pair whose value is the alias.
      names.push(
        child instanceof (api.nodes.Pair as new () => unknown)
          ? (child.value as NunjucksNode | undefined)?.value
          : child.value
      )
    }
  }
  for (const name of names) {
    if (BLOCKED_NAMES.has(String(name))) {
      throw new Error('Assigning to `' + String(name) + '` is not allowed in templates')
    }
  }
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
    assertNoBlockedAssignment(templateRaw)
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