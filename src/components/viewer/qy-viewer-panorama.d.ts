import { QyViewerBase } from './qy-viewer-base.js';

export declare class QyViewerPanorama extends QyViewerBase {
    static styles: import('lit').CSSResult;
    imgUrl: string;
    open(imgUrl: string): void;
    close(): void;
    renderViewer(): import('lit-html').TemplateResult<1>;
}
