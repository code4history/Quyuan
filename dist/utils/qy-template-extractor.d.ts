import { Feature, FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

export interface TemplateExtractorOptions {
    geojson: FeatureCollection | Feature;
    templates: TemplateType;
}
interface TemplateType {
    [index: string]: string;
}
export declare function templateExtractor(options: TemplateExtractorOptions): FeatureCollection< Geometry, GeoJsonProperties> | Feature< Geometry, GeoJsonProperties>;
export {};
