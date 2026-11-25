// Re-export from Chuci with qy- prefix for backward compatibility
import { CcSwiper } from '@c4h/chuci'
import { CcSwiperSlide } from '@c4h/chuci'

// Create wrapper components with qy- prefix
class QySwiper extends CcSwiper {
  private slidesMutationObserver?: MutationObserver;

  // Override slides getter to look for qy-swiper-slide instead of cc-swiper-slide
  get slides() {
    // Get slides from light DOM
    const lightDomSlides = Array.from(this.querySelectorAll('qy-swiper-slide'));

    // Get slides from shadow DOM (if any were moved there)
    const shadowRoot = this.shadowRoot;
    const divSlides = shadowRoot?.querySelector('#divSlides');
    const shadowDomSlides = divSlides ? Array.from(divSlides.querySelectorAll('qy-swiper-slide')) : [];

    // Combine and ensure they have the expected methods/properties
    const allSlides = [...lightDomSlides, ...shadowDomSlides];

    // Make sure each slide has the expected attributes
    return allSlides.map(slide => {
      // Ensure the slide element has getAttribute method
      if (!slide.getAttribute) {
        console.warn('[qy-swiper] Slide element missing getAttribute method:', slide);
        return slide;
      }
      return slide;
    }) as QySwiperSlide[];
  }

  connectedCallback() {
    // Call parent's connectedCallback immediately
    super.connectedCallback();

    // Set up mutation observer to watch for slide changes
    this.slidesMutationObserver = new MutationObserver((mutations) => {
      const hasSlideChanges = mutations.some(mutation => {
        return Array.from(mutation.addedNodes).some(node =>
          node.nodeName === 'QY-SWIPER-SLIDE'
        ) || Array.from(mutation.removedNodes).some(node =>
          node.nodeName === 'QY-SWIPER-SLIDE'
        );
      });

      if (hasSlideChanges) {
        this.render();
      }
    });

    this.slidesMutationObserver.observe(this, {
      childList: true,
      subtree: false
    });

    // Ensure slides are rendered after they're defined
    customElements.whenDefined('qy-swiper-slide').then(() => {
      if (this.slides.length > 0) {
        this.render();
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.slidesMutationObserver) {
      this.slidesMutationObserver.disconnect();
      this.slidesMutationObserver = undefined;
    }
  }

  // Override render to ensure we're processing qy-swiper-slide elements
  protected render() {
    // Call parent render which will use our overridden slides getter
    super.render();
  }

  // Override firstUpdated to ensure slides are processed
  protected firstUpdated() {
    super.firstUpdated();
  }


  protected viewerTagName(): string {
    return 'qy-viewer';
  }
}

class QySwiperSlide extends CcSwiperSlide { }

// Register with original names
if (!customElements.get('qy-swiper')) {
  customElements.define('qy-swiper', QySwiper)
}

if (!customElements.get('qy-swiper-slide')) {
  customElements.define('qy-swiper-slide', QySwiperSlide)
}

export { QySwiper, QySwiperSlide }

declare global {
  interface HTMLElementTagNameMap {
    'qy-swiper': QySwiper
    'qy-swiper-slide': QySwiperSlide
  }
}
