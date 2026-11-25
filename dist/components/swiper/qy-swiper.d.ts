import { CcSwiper, CcSwiperSlide } from '@c4h/chuci';
declare class QySwiper extends CcSwiper {
    get slides(): QySwiperSlide[];
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
