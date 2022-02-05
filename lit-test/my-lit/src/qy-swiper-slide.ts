import { css, html, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js'
import { QyViewer } from './qy-viewer'

@customElement('qy-swiper-slide')
export class QySwiperSlide extends LitElement {
  @property({ type: String, reflect: true }) thumbnailUrl = ""
  @property({ type: String, reflect: true }) imageUrl = ""
  @property({ type: String, reflect: true }) imageType = ""
  @property({ type: Object }) qySwiper = {}

  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    `
  }

  static qyViewer: QyViewer

  showViewer() {
    QySwiperSlide.qyViewer!.open(this.imageUrl, this.imageType)
  }

  protected render() {
    return html`
      <img src="${this.thumbnailUrl}" @click=${() => this.showViewer()} class="viewer">
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-swiper-slide': QySwiperSlide
  }
}