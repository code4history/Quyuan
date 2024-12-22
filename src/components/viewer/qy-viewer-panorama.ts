import {css} from 'lit';
import {QyViewerBase} from './qy-viewer-base.js';
import {customElement,property} from "lit/decorators.js";
import PANOLENS from "../../../vendor/panolens.js";

@customElement('qy-viewer-panorama')
export class QyViewerPanorama extends QyViewerBase {
  static styles = css`
    ${super.styles}

    .img_template {
      display: none;
    }
  `
  @property()
  viewer = null as any

  @property()
  panorama = null as any

  open(imgUrl:string) {
    if (!this.viewer) {
      const viewerEl = this.shadowRoot!.querySelector(".viewer");
      this.viewer = new PANOLENS.Viewer({ container: viewerEl });
    }

    this.panorama = new PANOLENS.ImagePanorama(imgUrl);
    this.viewer.add(this.panorama);
    this.viewer.setPanorama(this.panorama);

    super.open(imgUrl);
  }

  close() {
    this.panorama.dispose();
    this.viewer.remove(this.panorama);
    this.panorama = null;

    super.close();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer-panorama': QyViewerPanorama
  }
}