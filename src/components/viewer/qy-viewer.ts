import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@c4h/chuci';

/**
 * Wrapper component that delegates to Chuci's cc-viewer
 * while maintaining the qy-viewer interface
 */
@customElement('qy-viewer')
export class QyViewer extends LitElement {
  private _swiper?: any;
  private _currentSlideIndex: number = 0;
  private _currentType: string = "";
  private ccViewer?: any;

  @property({ type: Object })
  get swiper() {
    return this._swiper;
  }
  set swiper(value: any) {
    const oldValue = this._swiper;
    this._swiper = value;
    this.requestUpdate('swiper', oldValue);
  }

  @property({ type: Number })
  get currentSlideIndex() {
    return this._currentSlideIndex;
  }
  set currentSlideIndex(value: number | undefined) {
    const oldValue = this._currentSlideIndex;
    this._currentSlideIndex = value ?? 0;
    this.requestUpdate('currentSlideIndex', oldValue);
  }

  @property({ type: String })
  get currentType() {
    return this._currentType;
  }
  set currentType(value: string | undefined) {
    const oldValue = this._currentType;
    this._currentType = value ?? "";
    this.requestUpdate('currentType', oldValue);
  }

  async open(imgUrl: string, type: string, attributes?: Record<string, any>) {
    console.log('[qy-viewer] open called with:', { imgUrl, type, attributes });
    this.currentType = type;
    
    // If cc-viewer not ready yet, wait for it
    if (!this.ccViewer) {
      console.log('[qy-viewer] cc-viewer not ready, waiting...');
      await this.updateComplete;
      this.ccViewer = this.shadowRoot!.querySelector('cc-viewer');
    }
    
    if (this.ccViewer) {
      console.log('[qy-viewer] Calling cc-viewer.open');
      this.ccViewer.open(imgUrl, type, attributes);
    } else {
      console.warn('[qy-viewer] cc-viewer still not found');
    }
  }

  setSwiper(swiper: any) {
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
    this.requestUpdate();
    await this.updateComplete;
    
    console.log('[qy-viewer] Shadow DOM after requestUpdate:', this.shadowRoot?.innerHTML);
    
    const event = new CustomEvent('load');
    this.dispatchEvent(event);
    
    // Wait for cc-viewer to be defined
    console.log('[qy-viewer] Waiting for cc-viewer to be defined...');
    console.log('[qy-viewer] cc-viewer already defined?', !!customElements.get('cc-viewer'));
    
    await customElements.whenDefined('cc-viewer');
    console.log('[qy-viewer] cc-viewer is defined');
    
    // Get reference to cc-viewer with a small delay to ensure it's fully initialized
    await new Promise(resolve => setTimeout(resolve, 100));
    
    this.ccViewer = this.shadowRoot!.querySelector('cc-viewer');
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
    super.updated(changedProperties);
    
    // Update cc-viewer when properties change
    if (this.ccViewer) {
      if (changedProperties.has('swiper') && this.ccViewer.setSwiper) {
        this.ccViewer.setSwiper(this.swiper);
      }
      if (changedProperties.has('currentSlideIndex') && this.ccViewer.setCurrentSlideIndex) {
        this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex);
      }
    }
  }

  render() {
    return html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }
        
        cc-viewer {
          --cc-viewer-z-index: var(--qy-viewer-z-index);
        }
      </style>
      <cc-viewer></cc-viewer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer': QyViewer
  }
}