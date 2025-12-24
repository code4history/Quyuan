import { QyElement } from '../../base/qy-element.js';
import { QySwiper } from '../swiper/qy-swiper';

/**
 * Wrapper component that delegates to Chuci's cc-viewer
 * while maintaining the qy-viewer interface
 */
export declare class QyViewer extends QyElement {
    private _swiper?;
    private _currentSlideIndex;
    private _currentType;
    private ccViewer?;
    static get observedAttributes(): string[];
    get swiper(): QySwiper | undefined;
    set swiper(value: QySwiper | undefined);
    get currentSlideIndex(): number | undefined;
    set currentSlideIndex(value: number | undefined);
    get currentType(): string | undefined;
    set currentType(value: string | undefined);
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    open(imgUrl: string, type: string, attributes?: Record<string, unknown>): Promise<void>;
    close(): void;
    setSwiper(swiper: QySwiper): void;
    setCurrentSlideIndex(index: number): void;
    protected firstUpdated(): Promise<void>;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    protected render(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-viewer': QyViewer;
    }
}
