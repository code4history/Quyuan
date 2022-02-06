import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import "./qy-viewer-image";
import "./qy-viewer-panorama";
import "./qy-viewer-youtube";

interface HashKeyTag {
  [index: string]: string
}

const typeHashes = {
  image: "qy-viewer-image",
  panorama: "qy-viewer-panorama",
  youtube: "qy-viewer-youtube"
} as HashKeyTag;

@customElement('qy-viewer')
export class QyViewer extends LitElement {
  open(imgUrl: string, type: string) {
    const targetTag = typeHashes[type];
    const handler = this.shadowRoot!.querySelector(targetTag);
    (handler as any).open(imgUrl);
  }

  protected firstUpdated() {
    const event = new CustomEvent('load')
    this.dispatchEvent(event)
  }

  render() {
    return html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }
        
        qy-viewer-panorama, qy-viewer-image, qy-viewer-youtube {
          --qy-viewer-z-index-each: var(--qy-viewer-z-index);
        }
      </style>
      <qy-viewer-image></qy-viewer-image>
      <qy-viewer-youtube></qy-viewer-youtube>
      <qy-viewer-panorama></qy-viewer-panorama>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer': QyViewer
  }
}