import { QyViewerBase } from './qy-viewer-base.js';
export declare class QyViewerImage extends QyViewerBase {
    static styles: import("lit").CSSResult;
    viewer: any;
    open(imgUrl: string): void;
    close(): void;
    renderViewer(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
