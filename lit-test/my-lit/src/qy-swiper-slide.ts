import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('qy-swiper-slide')
export class QySwiperSlide extends LitElement {
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
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-swiper-slide': QySwiperSlide
  }
}