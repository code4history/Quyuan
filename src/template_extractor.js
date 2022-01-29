const nunjucks = require("nunjucks");

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

const template_extractor = ({ geojson, templates, options }) => {
  const compiledTemplates = {};
  for (const [key, templateRaw] of Object.entries(templates)) {
    compiledTemplates[key] = nunjucks.compile(templateRaw);
  }

  geojson.features.forEach((feature) => {
    feature.result = {};
    for (const key of Object.keys(templates)) {
      feature.result[key] = compiledTemplates[key].render(feature.properties);
    }
  });
  return geojson;
};

module.exports = template_extractor
