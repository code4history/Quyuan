import { LitElement } from 'lit';

export declare class QyViewer extends LitElement {
    open(imgUrl: string, type: string): void;
    protected firstUpdated(): void;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-viewer': QyViewer;
    }
}
