import { LitElement, TemplateResult } from 'lit';
import { QySwiper } from '../swiper/qy-swiper';

/**
 * Wrapper component that delegates to Chuci's cc-viewer
 * while maintaining the qy-viewer interface
 */
export declare class QyViewer extends LitElement {
    private _swiper?;
    private _currentSlideIndex;
    private _currentType;
    private ccViewer?;
    get swiper(): QySwiper | undefined;
    set swiper(value: QySwiper | undefined);
    get currentSlideIndex(): number | undefined;
    set currentSlideIndex(value: number | undefined);
    get currentType(): string | undefined;
    set currentType(value: string | undefined);
    open(imgUrl: string, type: string, attributes?: Record<string, unknown>): Promise<void>;
    setSwiper(swiper: QySwiper): void;
    setCurrentSlideIndex(index: number): void;
    protected firstUpdated(): Promise<void>;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-viewer': QyViewer;
    }
}
