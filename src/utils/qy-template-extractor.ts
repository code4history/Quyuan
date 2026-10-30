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

const OBJECT_PROTOTYPE_NAMES = new Set(Object.getOwnPropertyNames(Object.prototype))

const isInheritedFromObjectPrototype = (name: string, value: unknown): boolean => {
  if (!OBJECT_PROTOTYPE_NAMES.has(name)) {
    return false
  }
  return value === (Object.prototype as Record<string, unknown>)[name]
}

const hasOwn = (obj: object, name: string): boolean =>
  Object.prototype.hasOwnProperty.call(obj, name)

// Normalize a member key once, so the check and the actual lookup see the same
// value (a key object could return a different name on each toString call).
const normalizeKey = (val: unknown): string | symbol =>
  typeof val === 'symbol' ? val : String(val)

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

  runtime.contextOrFrameLookup = (context, frame, name) => {
    const key = String(name)
    if (BLOCKED_NAMES.has(key)) {
      return undefined
    }
    const value = originalContextOrFrameLookup(context, frame, key)
    if (isInheritedFromObjectPrototype(key, value) || BLOCKED_VALUES.has(value)) {
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