import { LitElement } from 'lit';
import * as SwiperLibrary from 'swiper';
export declare class QySwiper extends LitElement {
    hasThumb: boolean;
    autoplay: boolean;
    private readonly divContainer;
    private readonly divSlides?;
    private readonly divGallery;
    private readonly divPagination;
    private readonly divPrevious;
    private readonly divNext;
    slider?: SwiperLibrary.Swiper;
    static get styles(): import("lit").CSSResult;
    get slides(): import("./qy-swiper-slide").QySwiperSlide[];
    openViewer(imageUrl: string, imageType: string): Promise<void>;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-swiper': QySwiper;
    }
}
