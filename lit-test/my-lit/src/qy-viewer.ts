import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import "./qy-viewer-image";
import "./qy-viewer-panorama";
import "./qy-viewer-youtube";

interface HashKeyTag {
  [index: string]: string
};

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

  render() {
    return html`
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