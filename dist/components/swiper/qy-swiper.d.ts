import { CcSwiper, CcSwiperSlide } from '@c4h/chuci';
declare class QySwiper extends CcSwiper {
    private slidesMutationObserver?;
    get slides(): QySwiperSlide[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): void;
    protected firstUpdated(): void;
    protected viewerTagName(): string;
}
declare class QySwiperSlide extends CcSwiperSlide {
}
export { QySwiper, QySwiperSlide };
declare global {
    interface HTMLElementTagNameMap {
        'qy-swiper': QySwiper;
        'qy-swiper-slide': QySwiperSlide;
    }
}
