import { QyViewerBase } from './qy-viewer-base.js';

export declare class QyViewerYoutube extends QyViewerBase {
    static styles: import('lit').CSSResult;
    open(imgUrl: string): void;
    close(): void;
    renderViewer(): import('lit-html').TemplateResult<1>;
}
