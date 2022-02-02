import {html, css} from 'lit';
import {QyViewerBase} from './qy-viewer-base.js';
import {customElement,property} from "lit/decorators.js";
import Viewer from "viewerjs";

@customElement('qy-viewer-image')
export class QyViewerImage extends QyViewerBase {
  static styles = css`
    ${super.styles}

    .img_template {
      display: none;
    }
  `

  @property()
  viewer = null as any

  open(imgUrl:string) {
    const imgEl = this.shadowRoot!.querySelector(".img_template") as HTMLImageElement;
    imgEl.src = imgUrl;
    this.viewer = new Viewer(imgEl, {
      inline: true,
      navbar: false,
      toolbar: false,
      backdrop: false,
      title: false
    });

    super.open(imgUrl);
  }

  close() {
    const imgEl = this.shadowRoot!.querySelector(".img_template") as HTMLImageElement;
    imgEl.src = "";

    const viewer = this.viewer as Viewer;
    viewer.destroy();
    this.viewer = null as any;

    super.close();
  }

  renderViewer() {
    return html`<img class="img_template">`;
  }

  render() {
    return html`
      <link rel="stylesheet" href="node_modules/viewerjs/dist/viewer.css">
      ${super.render()}
    `;
  }
};