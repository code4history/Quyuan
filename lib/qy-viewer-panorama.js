"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QyViewerPanorama = void 0;
const lit_1 = require("lit");
const qy_viewer_base_js_1 = require("./qy-viewer-base.js");
const decorators_js_1 = require("lit/decorators.js");
const panolens_js_1 = require("../vendor/panolens.js");
let QyViewerPanorama = class QyViewerPanorama extends qy_viewer_base_js_1.QyViewerBase {
    constructor() {
        super(...arguments);
        this.viewer = null;
        this.panorama = null;
    }
    open(imgUrl) {
        if (!this.viewer) {
            const viewerEl = this.shadowRoot.querySelector(".viewer");
            this.viewer = new panolens_js_1.default.Viewer({ container: viewerEl });
        }
        this.panorama = new panolens_js_1.default.ImagePanorama(imgUrl);
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
QyViewerPanorama.styles = (0, lit_1.css) `
    ${(void 0).styles}

    .img_template {
      display: none;
    }
  `;
__decorate([
    (0, decorators_js_1.property)()
], QyViewerPanorama.prototype, "viewer", void 0);
__decorate([
    (0, decorators_js_1.property)()
], QyViewerPanorama.prototype, "panorama", void 0);
QyViewerPanorama = __decorate([
    (0, decorators_js_1.customElement)('qy-viewer-panorama')
], QyViewerPanorama);
exports.QyViewerPanorama = QyViewerPanorama;
