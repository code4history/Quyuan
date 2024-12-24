import { css, html } from 'lit';
import { QyViewerBase } from './qy-viewer-base.js';
import { customElement, property } from 'lit/decorators.js';


@customElement('qy-viewer-panorama')
export class QyViewerPanorama extends QyViewerBase {
  static styles = css`
    ${super.styles}

    .iframe{
      position: relative;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `;

  @property({ type: String })
  imgUrl = '';

  open(imgUrl: string) {

    const iframeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>A-Frame Panorama</title>
          <style>
          html,body {
            width:100%;
            height:100vh;
            overflow: hidden;
          }
          .a-enter-vr, .a-enter-ar {
            display: none;
          }
          </style>
          <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
        </head>
        <body>
          <a-scene embedded xr-mode-ui="enabled: false; XRMode: false;">
            <a-sky src="${imgUrl}" rotation="0 -90 0"></a-sky>
            <a-entity camera look-controls="reverseMouseDrag: true"></a-entity>
          </a-scene>
        </body>
      </html>
    `;

    const iframeEl = this.shadowRoot!.querySelector(".iframe") as HTMLIFrameElement;
    iframeEl.srcdoc = iframeHtml;
  
    super.open(imgUrl);
  }

  close() {
    const iframeEl = this.shadowRoot!.querySelector(".iframe") as HTMLIFrameElement;
    iframeEl.srcdoc = "";

    super.close();
  }

  renderViewer() {
    return html`<iframe class="iframe">`;
  }
}