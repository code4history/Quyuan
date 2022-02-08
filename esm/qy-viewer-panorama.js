var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css } from 'lit';
import { QyViewerBase } from './qy-viewer-base.js';
import { customElement, property } from "lit/decorators.js";
import PANOLENS from "../vendor/panolens.js";
let QyViewerPanorama = class QyViewerPanorama extends QyViewerBase {
    constructor() {
        super(...arguments);
        this.viewer = null;
        this.panorama = null;
    }
    open(imgUrl) {
        if (!this.viewer) {
            const viewerEl = this.shadowRoot.querySelector(".viewer");
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
};
QyViewerPanorama.styles = css `
    ${(void 0).styles}

    .img_template {
      display: none;
    }
  `;
__decorate([
    property()
], QyViewerPanorama.prototype, "viewer", void 0);
__decorate([
    property()
], QyViewerPanorama.prototype, "panorama", void 0);
QyViewerPanorama = __decorate([
    customElement('qy-viewer-panorama')
], QyViewerPanorama);
export { QyViewerPanorama };
