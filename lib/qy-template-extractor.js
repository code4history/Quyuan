"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateExtractor = void 0;
const nunjucks_1 = require("nunjucks");
function templateExtractor(options) {
    const compiledTemplates = {};
    for (const [key, templateRaw] of Object.entries(options.templates)) {
        compiledTemplates[key] = nunjucks_1.default.compile(templateRaw);
    }
    const featureHandler = (feature) => {
        feature.result = {};
        for (const key of Object.keys(options.templates)) {
            feature.result[key] = compiledTemplates[key].render(feature.properties);
        }
    };
    if (options.geojson.features) {
        options.geojson.features.forEach(featureHandler);
    }
    else {
        featureHandler(options.geojson);
    }
    return options.geojson;
}
exports.templateExtractor = templateExtractor;
