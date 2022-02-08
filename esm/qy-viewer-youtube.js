var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css } from 'lit';
import { QyViewerBase } from './qy-viewer-base.js';
import { customElement } from "lit/decorators.js";
let QyViewerYoutube = class QyViewerYoutube extends QyViewerBase {
    open(imgUrl) {
        const iframeEl = this.shadowRoot.querySelector(".iframe");
        iframeEl.src = imgUrl;
        super.open(imgUrl);
    }
    close() {
        const iframeEl = this.shadowRoot.querySelector(".iframe");
        iframeEl.src = "";
        super.close();
    }
    renderViewer() {
        return html `<iframe class="iframe">`;
    }
};
QyViewerYoutube.styles = css `
    ${(void 0).styles}

    .iframe{
      position: relative;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `;
QyViewerYoutube = __decorate([
    customElement('qy-viewer-youtube')
], QyViewerYoutube);
export { QyViewerYoutube };
;
