import { css, html, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('qy-swiper-slide')
export class QySwiperSlide extends LitElement {
  @property({ type: String, reflect: true }) thumbnailUrl = ""
  @property({ type: String, reflect: true }) imageUrl = ""
  @property({ type: String, reflect: true }) imageType = ""

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
    `
  }

  protected render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-swiper-slide': QySwiperSlide
  }
}