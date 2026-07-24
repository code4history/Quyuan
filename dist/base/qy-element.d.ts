/**
 * Base class for Quyuan web components without Lit dependency
 */
export declare abstract class QyElement extends HTMLElement {
    private _shadowRoot;
    private _connected;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void;
    protected firstUpdated(): void;
    protected abstract render(): void;
    protected html(strings: TemplateStringsArray, ...values: any[]): string;
    protected css(strings: TemplateStringsArray, ...values: any[]): string;
    protected updateShadowRoot(content: string): void;
    protected query<T extends HTMLElement>(selector: string): T | null;
    protected queryAll<T extends HTMLElement>(selector: string): NodeListOf<T>;
    protected dispatch(eventName: string, detail?: any): void;
}
