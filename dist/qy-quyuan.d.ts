import { QyElement } from './base/qy-element.js';

export declare class QyQuyuan extends QyElement {
    private _hasThumb;
    private _autoplay;
    static get observedAttributes(): string[];
    get hasThumb(): boolean;
    set hasThumb(val: boolean);
    get autoplay(): boolean;
    set autoplay(val: boolean);
    attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null): void;
    protected render(): void;
}
