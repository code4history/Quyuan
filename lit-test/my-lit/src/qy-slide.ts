import {html, css, LitElement, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('qy-slide')
export class QySlide extends LitElement {
  static styles = css`
    div {
      border: 2px solid red;
      width: 200px;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1ch;
    }
  `;

  @property({type: String})
  title = '';

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    console.log("Slide: firstUpdated");
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("Slide: connectedCallback");
  }

  repeat() {
    return this.title.repeat(5);
  }

  shadowChild() {
    return this.shadowRoot!.querySelector("div");
  }

  render() {
    return html`<div class="swiper-slider">${this.repeat()}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qy-slide': QySlide
  }
}