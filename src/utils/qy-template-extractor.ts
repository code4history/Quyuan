import nunjucks from "nunjucks"

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
  geojson: any,
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

  const featureHandler = (feature: any) => {
    feature.result = {}
    for (const key of Object.keys(options.templates)) {
      feature.result[key] = (compiledTemplates[key] as any).render(feature.properties)
    }
  }

  if (options.geojson.features) {
    options.geojson.features.forEach(featureHandler)
  } else {
    featureHandler(options.geojson)
  }

  return options.geojson;
}