var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let QySwiperSlide = class QySwiperSlide extends LitElement {
    constructor() {
        super(...arguments);
        this.thumbnailUrl = "";
        this.imageUrl = "";
        this.imageType = "";
        this.caption = "";
    }
    static get styles() {
        return css `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
    `;
    }
    render() {
        return html ``;
    }
};
__decorate([
    property({ type: String, reflect: true })
], QySwiperSlide.prototype, "thumbnailUrl", void 0);
__decorate([
    property({ type: String, reflect: true })
], QySwiperSlide.prototype, "imageUrl", void 0);
__decorate([
    property({ type: String, reflect: true })
], QySwiperSlide.prototype, "imageType", void 0);
__decorate([
    property({ type: String, reflect: true })
], QySwiperSlide.prototype, "caption", void 0);
QySwiperSlide = __decorate([
    customElement('qy-swiper-slide')
], QySwiperSlide);
export { QySwiperSlide };
