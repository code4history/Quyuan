"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QySwiper = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const qy_swiper_styles_1 = require("./qy-swiper-styles");
const SwiperLibrary = require("swiper");
let QySwiper = class QySwiper extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.hasThumb = false;
        this.autoplay = false;
    }
    static get styles() {
        return qy_swiper_styles_1.swiperStyles;
    }
    get slides() {
        var _a, _b;
        return [
            ...Array.from(this.querySelectorAll('qy-swiper-slide')),
            ...Array.from((_b = (_a = this.divSlides) === null || _a === void 0 ? void 0 : _a.querySelectorAll('qy-swiper-slide')) !== null && _b !== void 0 ? _b : [])
        ];
    }
    openViewer(imageUrl, imageType) {
        return __awaiter(this, void 0, void 0, function* () {
            let qyView = document.querySelector("qy-viewer");
            if (!qyView) {
                const viewerElement = document.createElement("qy-viewer");
                document.body.appendChild(viewerElement);
                qyView = yield new Promise((res) => {
                    viewerElement.addEventListener("load", () => {
                        res(document.querySelector("qy-viewer"));
                    });
                });
            }
            qyView.open(imageUrl, imageType);
        });
    }
    firstUpdated() {
        // Core library features at https://swiperjs.com/api/#custom-build
        console.log(`firstUpdate: ${this.slides.length}`);
        SwiperLibrary.Swiper.use([
            SwiperLibrary.Navigation,
            SwiperLibrary.Pagination,
            SwiperLibrary.Scrollbar,
            SwiperLibrary.Autoplay,
            SwiperLibrary.Thumbs,
            SwiperLibrary.Keyboard
        ]);
        this.slider = new SwiperLibrary.Swiper(this.divContainer, {
            navigation: {
                prevEl: this.divPrevious,
                nextEl: this.divNext,
            },
            pagination: this.hasThumb ? {} : {
                el: this.divPagination
            },
            autoplay: this.autoplay ? {
                delay: 5000,
                disableOnInteraction: false,
                reverseDirection: false,
                stopOnLastSlide: false,
                waitForTransition: true,
            } : false,
            thumbs: this.hasThumb ? {
                swiper: new SwiperLibrary.Swiper(this.divGallery, {
                    spaceBetween: 10,
                    slidesPerView: Math.min(Math.max(4, this.slides.length), 8),
                    watchSlidesProgress: true,
                }),
            } : {},
            preventClicks: false,
            preventClicksPropagation: true,
            loop: this.slides.length >= 2
        });
    }
    render() {
        return (0, lit_1.html) `
      <style>
        :host {
          display: block;
          --swiper-theme-color: var(--lit-slider-theme-color);
          --swiper-navigation-color: var(--lit-slider-navigation-color);
          --swiper-gallery-height: 0px;
          --swiper-slider-margin-bottom: 0px;
          --swiper-navigation-size: 30px;
          --swiper-navigation-color: blue;
        }

        :host([hasThumb]) {
          --swiper-slider-margin-bottom: 10px;
          --swiper-gallery-height: calc(100px - var(--swiper-slider-margin-bottom));
        }

        #divContainer {
          height: calc(100% - calc(var(--swiper-gallery-height)) - var(--swiper-slider-margin-bottom));
          margin-bottom: var(--swiper-slider-margin-bottom);
        }

        #divGallery {
          height: var(--swiper-gallery-height);
        }

        .gallery-thumbs .swiper-slide {
          height: 100%;
          opacity: 0.25;
          transition: 200ms;
          cursor: pointer;
        }

        .gallery-thumbs .swiper-slide-thumb-active {
          opacity: 1;
        }

        .gallery-thumb {
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }

        .swiper-wrapper {
          text-align: center;
        }

        .swiper-slide {
          background-color: white;
          height: 200px;
        }

        img.viewer {
          object-fit: contain;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }

        img.viewer {
          object-fit: contain;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }

        img.viewer.w-caption {
          height: calc(100% - 10px - 1.5rem);
        }

        .slider-caption {
          padding: 5px;
          margin: 0;
          line-height: 1.5em;
          background: #000000;
          color: #ffffff;
          font-size: 0.6rem;
          font-weight: 700;
        }
      </style>
      <div id='divContainer' class='swiper-container gallery-top'>
        <div id='divSlides' class='swiper-wrapper'>
          ${this.slides.map(slide => {
            return (0, lit_1.html) `
              <div class='swiper-slide'>
                <img src="${slide.thumbnailUrl}" onclick="this.getRootNode().host.openViewer('${slide.imageUrl}', '${slide.imageType}')" class="viewer${slide.caption !== "" ? ` w-caption` : ""}">
                ${slide.caption !== "" ? (0, lit_1.html) `<p class="slider-caption">${slide.caption}</p>` : ""}
              </div>
            `;
        })}
        </div>

        <div id='divPagination' class='swiper-pagination'></div>
        <div id='divPrevious' class='swiper-button-prev'></div>
        <div id='divNext' class='swiper-button-next'></div>
      </div>
      <div id='divGallery' class='swiper-container gallery-thumbs'>
        <div class='swiper-wrapper'>
          ${this.slides.map((_, index) => (0, lit_1.html) `
            <div class='swiper-slide gallery-thumb'
              @click=${() => { var _a; return (_a = this.slider) === null || _a === void 0 ? void 0 : _a.slideTo(index); }}
            ></div>
          `)}
        </div>
      </div>
      <qy-viewer id="qyViewer"></qy-viewerid>
    `;
    }
};
__decorate([
    (0, decorators_js_1.property)({ type: Boolean, reflect: true })
], QySwiper.prototype, "hasThumb", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean, reflect: true })
], QySwiper.prototype, "autoplay", void 0);
__decorate([
    (0, decorators_js_1.query)('#divContainer')
], QySwiper.prototype, "divContainer", void 0);
__decorate([
    (0, decorators_js_1.query)('#divSlides')
], QySwiper.prototype, "divSlides", void 0);
__decorate([
    (0, decorators_js_1.query)('#divGallery')
], QySwiper.prototype, "divGallery", void 0);
__decorate([
    (0, decorators_js_1.query)('#divPagination')
], QySwiper.prototype, "divPagination", void 0);
__decorate([
    (0, decorators_js_1.query)('#divPrevious')
], QySwiper.prototype, "divPrevious", void 0);
__decorate([
    (0, decorators_js_1.query)('#divNext')
], QySwiper.prototype, "divNext", void 0);
QySwiper = __decorate([
    (0, decorators_js_1.customElement)('qy-swiper')
], QySwiper);
exports.QySwiper = QySwiper;
