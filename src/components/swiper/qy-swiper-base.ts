import { html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { swiperStyles } from './qy-swiper-styles'
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar, Autoplay, Thumbs, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

@customElement('qy-swiper')
export class QySwiper extends LitElement {
  @property({ type: Boolean, reflect: true }) hasThumb = false
  @property({ type: Boolean, reflect: true }) autoplay = false

  @query('#divContainer') private readonly divContainer!: HTMLDivElement
  @query('#divSlides') private readonly divSlides?: HTMLDivElement
  @query('#divGallery') private readonly divGallery!: HTMLDivElement
  @query('#divPagination') private readonly divPagination!: HTMLDivElement
  @query('#divPrevious') private readonly divPrevious!: HTMLDivElement
  @query('#divNext') private readonly divNext!: HTMLDivElement

  slider?: Swiper

  static get styles() {
    return swiperStyles
  }

  get slides() {
    return [
      ...Array.from(this.querySelectorAll('qy-swiper-slide')),
      ...Array.from(this.divSlides?.querySelectorAll('qy-swiper-slide') ?? [])
    ]
  }

  async openViewer(imageUrl: string, imageType: string, slideIndex?: number) {
    let qyView = document.querySelector("qy-viewer")
    if (!qyView) {
      const viewerElement = document.createElement("qy-viewer")
      document.body.appendChild(viewerElement)
      qyView = await new Promise((res) => {
        viewerElement.addEventListener("load", () => {
          res(document.querySelector("qy-viewer"))
        })
      })
    }
    
    // Store current swiper reference and slide index in viewer
    (qyView as any).swiper = this;
    (qyView as any).currentSlideIndex = slideIndex ?? this.slider?.activeIndex ?? 0;
    
    // Get the slide element to extract attributes
    const slide = this.slides[slideIndex ?? this.slider?.activeIndex ?? 0];
    const attributes: Record<string, any> = {};
    
    // Check for viewer-specific attributes
    if (slide?.hasAttribute('fit-to-container')) {
      attributes.fitToContainer = true;
    }
    if (slide?.hasAttribute('debug-mode')) {
      attributes.debugMode = true;
    }
    if (slide?.hasAttribute('camera-position')) {
      attributes.cameraPosition = slide.getAttribute('camera-position');
    }
    if (slide?.hasAttribute('camera-target')) {
      attributes.cameraTarget = slide.getAttribute('camera-target');
    }
    if (slide?.hasAttribute('show-texture')) {
      attributes.showTexture = slide.getAttribute('show-texture') === 'true';
    }
    
    (qyView as any).open(imageUrl, imageType, attributes)
  }

  protected firstUpdated() {
    // Core library features at https://swiperjs.com/api/#custom-build
    const slidesLoop = this.slides.length >= 2
    this.slider = new Swiper(this.divContainer, {
      modules: [Navigation, Pagination, Scrollbar, Autoplay, Thumbs, Keyboard],
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
        swiper: new Swiper(this.divGallery, {
          spaceBetween: 10,
          slidesPerView: Math.min(Math.max(4, this.slides.length), 8),
          watchSlidesProgress: true,
        }),
      } : {},
      preventClicks: false,
      preventClicksPropagation: true,
      loop: slidesLoop
    })
  }

  protected render() {
    return html`
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
            return html`
              <div class='swiper-slide'>
                <img src="${slide.thumbnailUrl}" onclick="this.getRootNode().host.openViewer('${slide.imageUrl}', '${slide.imageType}', ${this.slides.indexOf(slide)})" class="viewer${slide.caption !== "" ? ` w-caption` : ""}">
                ${slide.caption !== "" ? html`<p class="slider-caption">${slide.caption}</p>` : ""}
              </div>
            `
          })}
        </div>

        <div id='divPagination' class='swiper-pagination'></div>
        <div id='divPrevious' class='swiper-button-prev'></div>
        <div id='divNext' class='swiper-button-next'></div>
      </div>
      <div id='divGallery' class='swiper-container gallery-thumbs'>
        <div class='swiper-wrapper'>
          ${this.slides.map((_, index) => html`
            <div class='swiper-slide gallery-thumb'
              @click=${() => this.slider?.slideTo(index)}
            ></div>
          `)}
        </div>
      </div>
      <qy-viewer id="qyViewer"></qy-viewerid>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-swiper': QySwiper
  }
}