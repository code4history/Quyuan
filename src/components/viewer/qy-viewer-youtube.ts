import {html, css} from 'lit';
import {QyViewerBase} from './qy-viewer-base.js';
import {customElement} from "lit/decorators.js";

@customElement('qy-viewer-youtube')
export class QyViewerYoutube extends QyViewerBase {
  static styles = css`
    ${super.styles}

    .iframe{
      position: relative;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `;

  open(imgUrl:string) {
    const iframeEl = this.shadowRoot!.querySelector(".iframe") as HTMLIFrameElement;
    iframeEl.src = imgUrl;

    super.open(imgUrl);
  }

  close() {
    const iframeEl = this.shadowRoot!.querySelector(".iframe") as HTMLIFrameElement;
    iframeEl.src = "";

    super.close();
  }

  renderViewer() {
    return html`<iframe class="iframe">`;
  }
};