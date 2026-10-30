import nunjucks from "nunjucks"
import { Feature, FeatureCollection } from 'geojson';

// Nunjucks is not a sandbox. This blocks the known prototype-walking routes to
// `Function` while a Quyuan template renders; it does not make untrusted
// templates safe.
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

const OBJECT_PROTOTYPE_NAMES = new Set(Object.getOwnPropertyNames(Object.prototype))

const isInheritedFromObjectPrototype = (name: string, value: unknown): boolean => {
  if (!OBJECT_PROTOTYPE_NAMES.has(name)) {
    return false
  }
  return value === (Object.prototype as Record<string, unknown>)[name]
}

interface NunjucksRuntime {
  memberLookup: (obj: unknown, val: unknown) => unknown
  contextOrFrameLookup: (context: unknown, frame: unknown, name: unknown) => unknown
}

const getNunjucksRuntime = (): NunjucksRuntime | undefined =>
  (nunjucks as unknown as { runtime?: NunjucksRuntime }).runtime

let memberGuardInstalled = false

// Swaps `runtime.memberLookup` / `runtime.contextOrFrameLookup` for the
// duration of `render`. A nested call leaves the outer guard in place.
function runWithMemberGuard<T>(render: () => T): T {
  const runtime = getNunjucksRuntime()
  if (memberGuardInstalled || !runtime) {
    return render()
  }

  const originalMemberLookup = runtime.memberLookup
  const originalContextOrFrameLookup = runtime.contextOrFrameLookup

  runtime.memberLookup = (obj, val) => {
    if (BLOCKED_NAMES.has(String(val))) {
      return undefined
    }
    return originalMemberLookup(obj, val)
  }

  runtime.contextOrFrameLookup = (context, frame, name) => {
    const key = String(name)
    if (BLOCKED_NAMES.has(key)) {
      return undefined
    }
    const value = originalContextOrFrameLookup(context, frame, name)
    if (isInheritedFromObjectPrototype(key, value)) {
      return undefined
    }
    return value
  }

  memberGuardInstalled = true
  try {
    return render()
  } finally {
    runtime.memberLookup = originalMemberLookup
    runtime.contextOrFrameLookup = originalContextOrFrameLookup
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
    compiledTemplates[key] = nunjucks.compile(templateRaw)
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