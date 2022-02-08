import nunjucks from "nunjucks";
export function templateExtractor(options) {
    const compiledTemplates = {};
    for (const [key, templateRaw] of Object.entries(options.templates)) {
        compiledTemplates[key] = nunjucks.compile(templateRaw);
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
