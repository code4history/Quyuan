import { QyElement } from '../../base/qy-element.js';
import '@c4h/chuci';
import { CcViewer } from '@c4h/chuci';
import type { MediaItem } from '@c4h/chuci';

/**
 * Wrapper component that delegates to Chuci's cc-viewer
 * while maintaining the qy-viewer interface
 */
export class QyViewer extends QyElement {
  private _currentSlideIndex: number = 0;
  private _currentType: string = "";
  private ccViewer?: CcViewer;
  private items: MediaItem[] = [];

  static get observedAttributes() {
    return ['currentslideindex', 'currenttype']
  }

  get currentSlideIndex() {
    return this._currentSlideIndex;
  }
  set currentSlideIndex(value: number | undefined) {
    const newValue = value ?? 0;
    if (this._currentSlideIndex !== newValue) {
      this._currentSlideIndex = newValue;
      this.setAttribute('currentslideindex', String(newValue));
    }
  }

  get currentType() {
    return this._currentType;
  }
  set currentType(value: string | undefined) {
    const newValue = value ?? "";
    if (this._currentType !== newValue) {
      this._currentType = newValue;
      if (newValue) {
        this.setAttribute('currenttype', newValue);
      } else {
        this.removeAttribute('currenttype');
      }
    }
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal !== newVal) {
      if (name === 'currentslideindex') {
        this._currentSlideIndex = newVal ? Number(newVal) : 0;
      } else if (name === 'currenttype') {
        this._currentType = newVal || "";
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  async open(items: MediaItem[], index: number, opts?: { loop?: boolean }) {
    if (!this.ccViewer) {
      await customElements.whenDefined('cc-viewer');
      this.ccViewer = this.shadowRoot!.querySelector('cc-viewer') as CcViewer;
    }

    this.items = items.slice();
    this.ccViewer.style.display = 'block';
    this.ccViewer.open(items, index, opts);
    this.currentSlideIndex = this.ccViewer.index;
    this.currentType = this.items[this.ccViewer.index]?.type ?? '';
  }

  close() {
    this.currentType = '';
    this.ccViewer?.close();
  }

  protected firstUpdated() {
    this.ccViewer = this.shadowRoot!.querySelector('cc-viewer') as CcViewer;
    this.ccViewer.addEventListener('cc-viewer-index-change', (event) => {
      const { index } = (event as CustomEvent<{ index: number }>).detail;
      this.currentSlideIndex = index;
      this.currentType = this.items[index]?.type ?? '';
    });
    this.ccViewer.addEventListener('cc-viewer-close', () => {
      this.items = [];
      this.currentType = '';
    });
    this.dispatchEvent(new CustomEvent('load'));
  }

  protected render() {
    // Keep the inner viewer alive when compatibility attributes change.
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
