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

  open(imgUrl: string, type: string, attributes?: Record<string, any>) {
    this.currentType = type;
    const targetTag = typeHashes[type];
    const handler = this.shadowRoot!.querySelector(targetTag);
    
    // Pass attributes to the viewer if available
    if (handler && attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        (handler as any)[key] = value;
      });
    }
    
    // Update navigation button visibility
    this.updateNavigationButtons();
    
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
    if (!this.swiper) return;
    
    const totalSlides = this.swiper.slides.length;
    if (totalSlides <= 1) return; // No navigation for single slide
    
    // Check if loop is enabled in swiper
    const hasLoop = this.swiper.slider?.params?.loop === true;
    
    if (this.currentSlideIndex <= 0) {
      if (hasLoop) {
        this.currentSlideIndex = totalSlides - 1; // Go to last slide
      } else {
        return; // Can't go previous
      }
    } else {
      this.currentSlideIndex--;
    }
    
    this.navigateToSlide(this.currentSlideIndex);
  }

  private handleNavigateNext() {
    if (!this.swiper) return;
    
    const totalSlides = this.swiper.slides.length;
    if (totalSlides <= 1) return; // No navigation for single slide
    
    // Check if loop is enabled in swiper
    const hasLoop = this.swiper.slider?.params?.loop === true;
    
    if (this.currentSlideIndex >= totalSlides - 1) {
      if (hasLoop) {
        this.currentSlideIndex = 0; // Go to first slide
      } else {
        return; // Can't go next
      }
    } else {
      this.currentSlideIndex++;
    }
    
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
    
    // Gather viewer-specific attributes
    const attributes: Record<string, any> = {};
    if (slide.hasAttribute('fit-to-container')) {
      attributes.fitToContainer = true;
    }
    if (slide.hasAttribute('debug-mode')) {
      attributes.debugMode = true;
    }
    if (slide.hasAttribute('camera-position')) {
      attributes.cameraPosition = slide.getAttribute('camera-position');
    }
    if (slide.hasAttribute('camera-target')) {
      attributes.cameraTarget = slide.getAttribute('camera-target');
    }
    if (slide.hasAttribute('show-texture')) {
      attributes.showTexture = slide.getAttribute('show-texture') === 'true';
    }
    
    this.currentSlideIndex = index;
    this.open(imageUrl, imageType, attributes);
    
    // Update swiper position
    if (this.swiper.slider) {
      this.swiper.slider.slideTo(index);
    }
  }

  private updateNavigationButtons() {
    if (!this.swiper) return;
    
    const totalSlides = this.swiper.slides.length;
    const hasLoop = this.swiper.slider?.params?.loop === true;
    
    // For single slide, hide both buttons
    if (totalSlides <= 1) {
      this.setNavigationVisibility(false, false);
      return;
    }
    
    // For multiple slides with loop, show both
    if (hasLoop) {
      this.setNavigationVisibility(true, true);
      return;
    }
    
    // For multiple slides without loop, check boundaries
    const showPrev = this.currentSlideIndex > 0;
    const showNext = this.currentSlideIndex < totalSlides - 1;
    this.setNavigationVisibility(showPrev, showNext);
  }

  private setNavigationVisibility(showPrev: boolean, showNext: boolean) {
    // Update all viewer instances
    const viewers = [
      this.shadowRoot!.querySelector('qy-viewer-image'),
      this.shadowRoot!.querySelector('qy-viewer-youtube'),
      this.shadowRoot!.querySelector('qy-viewer-panorama'),
      this.shadowRoot!.querySelector('qy-viewer-video'),
      this.shadowRoot!.querySelector('qy-viewer-3dmodel'),
      this.shadowRoot!.querySelector('qy-viewer-gaussian')
    ];
    
    viewers.forEach(viewer => {
      if (viewer) {
        (viewer as any).showPrevButton = showPrev;
        (viewer as any).showNextButton = showNext;
      }
    });
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