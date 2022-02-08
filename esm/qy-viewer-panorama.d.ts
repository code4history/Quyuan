import { QyViewerBase } from './qy-viewer-base.js';
export declare class QyViewerPanorama extends QyViewerBase {
    static styles: import("lit").CSSResult;
    viewer: any;
    panorama: any;
    open(imgUrl: string): void;
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-viewer-panorama': QyViewerPanorama;
    }
}
