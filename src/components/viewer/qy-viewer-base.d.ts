import { LitElement } from 'lit';

export declare class QyViewerBase extends LitElement {
    static styles: import('lit').CSSResult;
    canBackdropClose: boolean;
    isShow: boolean;
    open(_imgUrl: string): void;
    close(): void;
    renderViewer(): import('lit-html').TemplateResult<1>;
    render(): import('lit-html').TemplateResult<1>;
}
