var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { viewerStyles } from './qy-viewer-styles';
export class QyViewerBase extends LitElement {
    constructor() {
        super(...arguments);
        this.canBackdropClose = false;
        this.isShow = false;
    }
    open(_imgUrl) {
        this.isShow = true;
    }
    close() {
        this.isShow = false;
    }
    renderViewer() {
        return html ``;
    }
    render() {
        return html `
      <style>
        .backdrop {
          z-index: var(--qy-viewer-z-index-each);
        }
      </style>
      <div
        class="backdrop"
        style="${this.isShow ? 'visibility: visible' : 'visibility: hidden'}"
      >
        <div class="close" @click="${() => this.close()}">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="viewer">${this.renderViewer()}</div>
      </div>
    `;
    }
}
QyViewerBase.styles = css `
    ${viewerStyles}
  
    .backdrop {
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }

    .close {
      position: absolute;
      right: 0;
      top: 0;
      margin: 10px;
      cursor: pointer;
    }

    .close > i {
      color: #fff;
      font-size: 30px;
    }
    
    .viewer {
      position: absolute;
      width: 100%;
      height: 80%;
      inset: 0px;
      margin: auto;
      align-self: center;
      background-color: #000;
    }
  `;
__decorate([
    property({ type: Boolean, attribute: 'close-backdrop' })
], QyViewerBase.prototype, "canBackdropClose", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show' })
], QyViewerBase.prototype, "isShow", void 0);
