import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Swiper} from "swiper";

import "./slide.js"

@customElement('my-swiper')
export class MySwiper extends LitElement {
    static styles = css`
    div {
      display: flex;
      flex-direction: row;
      gap: 1ch;
    }
  `;

    render() {
        return html`
      <div id="swiper">
        <slot></slot>
      </div>
    `;
    }
}
