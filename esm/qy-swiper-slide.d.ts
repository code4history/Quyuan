import { LitElement } from 'lit';
export declare class QySwiperSlide extends LitElement {
    thumbnailUrl: string;
    imageUrl: string;
    imageType: string;
    caption: string;
    static get styles(): import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qy-swiper-slide': QySwiperSlide;
    }
}
