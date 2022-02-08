import { LitElement } from 'lit';
import "./qy-viewer-image";
import "./qy-viewer-panorama";
import "./qy-viewer-youtube";
export declare class QyViewer extends LitElement {
    open(imgUrl: string, type: string): void;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-viewer': QyViewer;
    }
}
