import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./qy-viewer-image";
import "./qy-viewer-panorama";
import "./qy-viewer-youtube";
import "./qy-viewer-video";
import "./qy-viewer-3dmodel";
import "./qy-viewer-gaussian";

interface HashKeyTag {
  [index: string]: string
}

const typeHashes = {
  image: "qy-viewer-image",
  panorama: "qy-viewer-panorama",
  youtube: "qy-viewer-youtube",
  video: "qy-viewer-video",
  "3dmodel": "qy-viewer-3dmodel",
  gaussian: "qy-viewer-gaussian"
} as HashKeyTag;

@customElement('qy-viewer')
export class QyViewer extends LitElement {
  @property({ type: Object })
  swiper: any;

  @property({ type: Number })
  currentSlideIndex: number = 0;

  @property({ type: String })
  currentType: string = "";

  open(imgUrl: string, type: string) {
    this.currentType = type;
    const targetTag = typeHashes[type];
    const handler = this.shadowRoot!.querySelector(targetTag);
    (handler as any).open(imgUrl);
  }

  protected firstUpdated() {
    const event = new CustomEvent('load')
    this.dispatchEvent(event)
    
    // Listen for navigation events
    this.addEventListener('navigate-prev', this.handleNavigatePrev.bind(this));
    this.addEventListener('navigate-next', this.handleNavigateNext.bind(this));
  }

  private handleNavigatePrev() {
    if (!this.swiper || this.currentSlideIndex <= 0) return;
    
    this.currentSlideIndex--;
    this.navigateToSlide(this.currentSlideIndex);
  }

  private handleNavigateNext() {
    if (!this.swiper || this.currentSlideIndex >= this.swiper.slides.length - 1) return;
    
    this.currentSlideIndex++;
    this.navigateToSlide(this.currentSlideIndex);
  }

  private navigateToSlide(index: number) {
    if (!this.swiper || !this.swiper.slides[index]) return;
    
    // Close current viewer
    const currentTag = typeHashes[this.currentType];
    const currentHandler = this.shadowRoot!.querySelector(currentTag);
    if (currentHandler) {
      (currentHandler as any).close();
    }
    
    // Open new viewer
    const slide = this.swiper.slides[index];
    const imageUrl = slide.imageUrl;
    const imageType = slide.imageType;
    
    this.currentSlideIndex = index;
    this.open(imageUrl, imageType);
    
    // Update swiper position
    if (this.swiper.slider) {
      this.swiper.slider.slideTo(index);
    }
  }

  render() {
    return html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }
        
        qy-viewer-panorama, qy-viewer-image, qy-viewer-youtube, qy-viewer-video,
        qy-viewer-3dmodel, qy-viewer-gaussian {
          --qy-viewer-z-index-each: var(--qy-viewer-z-index);
        }
      </style>
      <qy-viewer-image></qy-viewer-image>
      <qy-viewer-youtube></qy-viewer-youtube>
      <qy-viewer-panorama></qy-viewer-panorama>
      <qy-viewer-video></qy-viewer-video>
      <qy-viewer-3dmodel></qy-viewer-3dmodel>
      <qy-viewer-gaussian></qy-viewer-gaussian>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer': QyViewer
  }
}