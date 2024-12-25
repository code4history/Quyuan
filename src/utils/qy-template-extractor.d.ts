export interface TemplateExtractorOptions {
    geojson: any;
    templates: TemplateType;
}
interface TemplateType {
    [index: string]: string;
}
export declare function templateExtractor(options: TemplateExtractorOptions): any;
export {};
