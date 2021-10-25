require("./handlebars_helper.js");
const Handlebars = require("handlebars");
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

const templateExtractor = ({ geojson, templates, options }) => {
  const handlebars = !options || !options.nunjucks;
  const compiledTemplates = {};
  for (const [key, templateRaw] of Object.entries(templates)) {
    compiledTemplates[key] = handlebars ?
        Handlebars.compile(templateRaw) :
        nunjucks.compile(templateRaw);
  }

  geojson.features.forEach((feature) => {
    for (const key of Object.keys(templates)) {
      feature.result = {};
      feature.result[key] = handlebars ?
          compiledTemplates[key](feature.properties) :
          compiledTemplates[key].render(feature.properties);
    }
  });
  return geojson;
};

module.exports = templateExtractor
