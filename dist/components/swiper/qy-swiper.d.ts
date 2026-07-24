import { CcSwiper, CcSwiperSlide } from '@c4h/chuci';

declare class QySwiper extends CcSwiper {
    private observer?;
    get slides(): QySwiperSlide[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): void;
    protected firstUpdated(): void;
    openViewer(imageUrl: string, imageType: string, slideIndex?: number): Promise<void>;
}
declare class QySwiperSlide extends CcSwiperSlide {
}
export { QySwiper, QySwiperSlide };
