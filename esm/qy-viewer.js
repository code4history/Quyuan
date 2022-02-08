var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./qy-viewer-image";
import "./qy-viewer-panorama";
import "./qy-viewer-youtube";
const typeHashes = {
    image: "qy-viewer-image",
    panorama: "qy-viewer-panorama",
    youtube: "qy-viewer-youtube"
};
let QyViewer = class QyViewer extends LitElement {
    open(imgUrl, type) {
        const targetTag = typeHashes[type];
        const handler = this.shadowRoot.querySelector(targetTag);
        handler.open(imgUrl);
    }
    firstUpdated() {
        const event = new CustomEvent('load');
        this.dispatchEvent(event);
    }
    render() {
        return html `
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
};
QyViewer = __decorate([
    customElement('qy-viewer')
], QyViewer);
export { QyViewer };
