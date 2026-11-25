import { QyElement } from '../../base/qy-element.js';
import { CcViewer } from '@c4h/chuci';
import type { MediaItem } from '@c4h/chuci';

// Use this bundle's viewer even when a page has already registered another cc-viewer.
class QyViewerInner extends CcViewer {}
if (!customElements.get('qy-viewer-inner')) {
  customElements.define('qy-viewer-inner', QyViewerInner);
}

/** Wrapper preserving the public qy-viewer interface. */
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
    this.render();
    const viewer = this.ccViewer!;
    this.items = items.slice();
    viewer.style.display = 'block';
    viewer.open(items, index, opts);
    this.currentSlideIndex = viewer.index;
    this.currentType = this.items[viewer.index]?.type ?? '';
  }

  close() {
    this.currentType = '';
    this.ccViewer?.close();
  }

  protected firstUpdated() {
    this.dispatchEvent(new CustomEvent('load'));
  }

  protected render() {
    if (this.ccViewer) return;

    this.updateShadowRoot(this.html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }

        qy-viewer-inner {
          --cc-viewer-z-index: var(--qy-viewer-z-index);
        }
      </style>
      <qy-viewer-inner></qy-viewer-inner>
    `);
    this.ccViewer = this.query<CcViewer>('qy-viewer-inner')!;
    this.ccViewer.addEventListener('cc-viewer-index-change', (event) => {
      const { index } = (event as CustomEvent<{ index: number }>).detail;
      this.currentSlideIndex = index;
      this.currentType = this.items[index]?.type ?? '';
    });
    this.ccViewer.addEventListener('cc-viewer-close', () => {
      this.items = [];
      this.currentType = '';
    });
  }
}

customElements.define('qy-viewer', QyViewer);

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer': QyViewer
  }
}
