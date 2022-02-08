var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from "lit";
let QyQuyuan = class QyQuyuan extends LitElement {
    constructor() {
        super(...arguments);
        this.hasThumb = false;
        this.autoplay = false;
    }
    render() {
        return html `
      <style>
        :host {
          display: block;  /* or display: block; */
        }
      </style>
      <div style="border: 1px solid black" class="wrapper">
        <div>HasThumb: ${this.hasThumb ? "true" : "false"}</div><br>
        <div>AutoPlay: ${this.autoplay ? "true" : "false"}</div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean, reflect: true })
], QyQuyuan.prototype, "hasThumb", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], QyQuyuan.prototype, "autoplay", void 0);
QyQuyuan = __decorate([
    customElement('qy-quyuan')
], QyQuyuan);
export { QyQuyuan };
