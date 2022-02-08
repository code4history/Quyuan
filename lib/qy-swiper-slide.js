"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QySwiperSlide = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
let QySwiperSlide = class QySwiperSlide extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.thumbnailUrl = "";
        this.imageUrl = "";
        this.imageType = "";
        this.caption = "";
    }
    static get styles() {
        return (0, lit_1.css) `
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
        return (0, lit_1.html) ``;
    }
};
__decorate([
    (0, decorators_js_1.property)({ type: String, reflect: true })
], QySwiperSlide.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String, reflect: true })
], QySwiperSlide.prototype, "imageUrl", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String, reflect: true })
], QySwiperSlide.prototype, "imageType", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String, reflect: true })
], QySwiperSlide.prototype, "caption", void 0);
QySwiperSlide = __decorate([
    (0, decorators_js_1.customElement)('qy-swiper-slide')
], QySwiperSlide);
exports.QySwiperSlide = QySwiperSlide;
