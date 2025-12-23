import nunjucks from "nunjucks"
import { Feature, FeatureCollection } from 'geojson';

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

  if ('features' in options.geojson) {
    options.geojson.features.forEach(featureHandler)
  } else {
    featureHandler(options.geojson as Feature)
  }

  return options.geojson;
}