// Re-export from Chuci with qy- prefix for backward compatibility
import { CcSwiper } from '@c4h/chuci'
import { CcSwiperSlide } from '@c4h/chuci'
import type { QyViewer } from '../viewer/qy-viewer';

// Create wrapper components with qy- prefix
class QySwiper extends CcSwiper {
  private observer?: MutationObserver;

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
    this.observer = new MutationObserver((mutations) => {
      const hasSlideChanges = mutations.some(mutation => {
        return Array.from(mutation.addedNodes).some(node =>
          node.nodeName === 'QY-SWIPER-SLIDE'
        ) || Array.from(mutation.removedNodes).some(node =>
          node.nodeName === 'QY-SWIPER-SLIDE'
        );
      });

      if (hasSlideChanges) {
        console.log('[qy-swiper] Slides changed, re-rendering...');
        this.render();
      }
    });

    this.observer.observe(this, {
      childList: true,
      subtree: false
    });

    // Ensure slides are rendered after they're defined
    customElements.whenDefined('qy-swiper-slide').then(() => {
      console.log('[qy-swiper] qy-swiper-slide defined, checking if re-render needed');
      if (this.slides.length > 0) {
        console.log('[qy-swiper] Re-rendering with slides');
        this.render();
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  // Override render to ensure we're processing qy-swiper-slide elements
  protected render() {
    // Debug: Check if we have slides before rendering
    const slideCount = this.slides.length;
    console.log(`[qy-swiper] Rendering with ${slideCount} slides`);

    if (slideCount === 0) {
      console.warn('[qy-swiper] No slides found during render. Slides might not be initialized yet.');
    }

    // Call parent render which will use our overridden slides getter
    super.render();
  }

  // Override firstUpdated to ensure slides are processed
  protected firstUpdated() {
    console.log('[qy-swiper] firstUpdated called');
    super.firstUpdated();
  }


  async openViewer(imageUrl: string, imageType: string, slideIndex?: number) {
    console.log('[qy-swiper] openViewer called with:', { imageUrl, imageType, slideIndex });

    // Look for qy-viewer instead of cc-viewer
    let qyView = document.querySelector("qy-viewer");
    if (!qyView) {
      console.log('[qy-swiper] Creating qy-viewer element');
      const viewerElement = document.createElement("qy-viewer");
      document.body.appendChild(viewerElement);

      // Wait for custom element to be defined and connected
      await customElements.whenDefined('qy-viewer');

      // Use a small timeout to ensure the element is fully initialized
      qyView = await new Promise((res) => {
        setTimeout(() => {
          res(document.querySelector("qy-viewer"));
        }, 100);
      });
    }

    console.log('[qy-swiper] qy-viewer element found:', !!qyView);

    if (qyView) {
      // Set the swiper reference
      (qyView as unknown as QyViewer).setSwiper(this);

      // Set the current slide index
      if (slideIndex !== undefined) {
        (qyView as unknown as QyViewer).setCurrentSlideIndex(slideIndex);
      }

      // Extract attributes from the slide element
      const slide = this.slides[slideIndex || 0];
      const attributes: Record<string, unknown> = {};
      if (slide) {
        const attributeNames = slide.getAttributeNames();
        attributeNames.forEach((name: string) => {
          attributes[name] = slide.getAttribute(name);
        });
      }

      // Open the viewer
      console.log('[qy-swiper] Calling qy-viewer.open');
      (qyView as unknown as QyViewer).open(imageUrl, imageType, attributes);
    }
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