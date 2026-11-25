import { QyElement } from '../../base/qy-element.js';
import { MediaItem } from '@c4h/chuci';
/** Wrapper preserving the public qy-viewer interface. */
export declare class QyViewer extends QyElement {
    private _currentSlideIndex;
    private _currentType;
    private ccViewer?;
    private items;
    static get observedAttributes(): string[];
    get currentSlideIndex(): number | undefined;
    set currentSlideIndex(value: number | undefined);
    get currentType(): string | undefined;
    set currentType(value: string | undefined);
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    open(items: MediaItem[], index: number, opts?: {
        loop?: boolean;
    }): Promise<void>;
    close(): void;
    protected firstUpdated(): void;
    protected render(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-viewer': QyViewer;
    }
}
