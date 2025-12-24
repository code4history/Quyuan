import { QyElement } from '../../base/qy-element.js';
import '@c4h/chuci';
import { CcViewer } from '@c4h/chuci';
import type { QySwiper } from '../swiper/qy-swiper';

/**
 * Wrapper component that delegates to Chuci's cc-viewer
 * while maintaining the qy-viewer interface
 */
export class QyViewer extends QyElement {
  private _swiper?: QySwiper;
  private _currentSlideIndex: number = 0;
  private _currentType: string = "";
  private ccViewer?: CcViewer;

  static get observedAttributes() {
    return ['currentslideindex', 'currenttype']
  }

  get swiper() {
    return this._swiper;
  }
  set swiper(value: QySwiper | undefined) {
    const oldValue = this._swiper;
    if (oldValue !== value) {
      this._swiper = value;
      this.updated(new Map([['swiper', oldValue]]));
    }
  }

  get currentSlideIndex() {
    return this._currentSlideIndex;
  }
  set currentSlideIndex(value: number | undefined) {
    const oldValue = this._currentSlideIndex;
    const newValue = value ?? 0;
    if (oldValue !== newValue) {
      this._currentSlideIndex = newValue;
      this.setAttribute('currentslideindex', String(newValue));
      this.updated(new Map([['currentSlideIndex', oldValue]]));
    }
  }

  get currentType() {
    return this._currentType;
  }
  set currentType(value: string | undefined) {
    const oldValue = this._currentType;
    const newValue = value ?? "";
    if (oldValue !== newValue) {
      this._currentType = newValue;
      if (newValue) {
        this.setAttribute('currenttype', newValue);
      } else {
        this.removeAttribute('currenttype');
      }
      this.updated(new Map([['currentType', oldValue]]));
    }
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal !== newVal) {
      if (name === 'currentslideindex') {
        this._currentSlideIndex = newVal ? Number(newVal) : 0;
        this.updated(new Map([['currentSlideIndex', oldVal ? Number(oldVal) : undefined]]));
      } else if (name === 'currenttype') {
        this._currentType = newVal || "";
        this.updated(new Map([['currentType', oldVal]]));
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  async open(imgUrl: string, type: string, attributes?: Record<string, unknown>) {
    console.log('[qy-viewer] open called with:', { imgUrl, type, attributes });
    this.currentType = type;

    // If cc-viewer not ready yet, wait for it
    if (!this.ccViewer) {
      console.log('[qy-viewer] cc-viewer not ready, waiting...');
      if (!this.ccViewer) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        this.ccViewer = (this.shadowRoot!.querySelector('cc-viewer') as unknown as CcViewer) || undefined;
      }
    }

    if (this.ccViewer) {
      console.log('[qy-viewer] Calling cc-viewer.open');
      this.ccViewer.style.display = 'block'; // Ensure visible
      this.ccViewer.open(imgUrl, type, attributes);
    } else {
      console.warn('[qy-viewer] cc-viewer still not found');
    }
  }

  close() {
    console.log('[qy-viewer] close called');
    this.currentType = '';
    if (this.ccViewer) {
      this.ccViewer.style.display = 'none';
      if ('close' in this.ccViewer && typeof (this.ccViewer as Record<string, unknown>).close === 'function') {
        (this.ccViewer as { close: () => void }).close();
      }
    }
  }

  setSwiper(swiper: QySwiper) {
    console.log('[qy-viewer] setSwiper called');
    this.swiper = swiper;
    if (this.ccViewer && this.ccViewer.setSwiper) {
      console.log('[qy-viewer] Calling cc-viewer.setSwiper');
      this.ccViewer.setSwiper(swiper);
    }
  }

  setCurrentSlideIndex(index: number) {
    console.log('[qy-viewer] setCurrentSlideIndex called with:', index);
    this.currentSlideIndex = index;
    if (this.ccViewer && this.ccViewer.setCurrentSlideIndex) {
      console.log('[qy-viewer] Calling cc-viewer.setCurrentSlideIndex');
      this.ccViewer.setCurrentSlideIndex(index);
    }
  }

  protected async firstUpdated() {
    console.log('[qy-viewer] firstUpdated called');
    console.log('[qy-viewer] Initial Shadow DOM content:', this.shadowRoot?.innerHTML);

    // Force render to ensure shadow DOM is populated
    // this.requestUpdate(); // Lit specific
    // await this.updateComplete; // Lit specific
    this.render();

    console.log('[qy-viewer] Shadow DOM after render:', this.shadowRoot?.innerHTML);

    const event = new CustomEvent('load');
    this.dispatchEvent(event);

    // Wait for cc-viewer to be defined
    console.log('[qy-viewer] Waiting for cc-viewer to be defined...');
    console.log('[qy-viewer] cc-viewer already defined?', !!customElements.get('cc-viewer'));

    await customElements.whenDefined('cc-viewer');
    console.log('[qy-viewer] cc-viewer is defined');

    // Get reference to cc-viewer with a small delay to ensure it's fully initialized
    await new Promise(resolve => setTimeout(resolve, 100));

    this.ccViewer = (this.shadowRoot!.querySelector('cc-viewer') as unknown as CcViewer) || undefined;

    console.log('[qy-viewer] cc-viewer element found:', !!this.ccViewer);
    console.log('[qy-viewer] Final Shadow DOM:', this.shadowRoot?.innerHTML);

    if (this.ccViewer) {
      if (this.swiper && this.ccViewer.setSwiper) {
        console.log('[qy-viewer] Setting swiper on cc-viewer');
        this.ccViewer.setSwiper(this.swiper);
      }
      if (this.currentSlideIndex !== undefined && this.ccViewer.setCurrentSlideIndex) {
        console.log('[qy-viewer] Setting currentSlideIndex on cc-viewer:', this.currentSlideIndex);
        this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex);
      }
    }
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    // super.updated(changedProperties); // QyElement doesn't have updated by default, but we can call it

    // Update cc-viewer when properties change
    if (this.ccViewer) {
      if (changedProperties.has('swiper') && this.ccViewer.setSwiper) {
        this.ccViewer.setSwiper(this.swiper);
      }
      if (changedProperties.has('currentSlideIndex') && this.ccViewer.setCurrentSlideIndex) {
        this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex || 0);
      }
    }
  }

  protected render() {
    // Guard: Do not re-render if cc-viewer already exists.
    // This prevents destroying the cc-viewer instance when attributes change,
    // which would cause state loss and detached element references.
    if (this.shadowRoot?.querySelector('cc-viewer')) {
      return;
    }

    this.updateShadowRoot(this.html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }
        
        cc-viewer {
          --cc-viewer-z-index: var(--qy-viewer-z-index);
        }
      </style>
      <cc-viewer></cc-viewer>
    `);
  }
}

customElements.define('qy-viewer', QyViewer);

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer': QyViewer
  }
}
