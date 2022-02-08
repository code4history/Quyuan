"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QyViewerBase = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const qy_viewer_styles_1 = require("./qy-viewer-styles");
class QyViewerBase extends lit_1.LitElement {
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
        return (0, lit_1.html) ``;
    }
    render() {
        return (0, lit_1.html) `
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
QyViewerBase.styles = (0, lit_1.css) `
    ${qy_viewer_styles_1.viewerStyles}
  
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
    (0, decorators_js_1.property)({ type: Boolean, attribute: 'close-backdrop' })
], QyViewerBase.prototype, "canBackdropClose", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean, attribute: 'show' })
], QyViewerBase.prototype, "isShow", void 0);
exports.QyViewerBase = QyViewerBase;
