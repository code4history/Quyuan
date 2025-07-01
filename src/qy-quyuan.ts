import { customElement, property } from 'lit/decorators.js'
import {html, LitElement} from "lit"

@customElement('qy-quyuan')
export class QyQuyuan extends LitElement {
  @property({ type: Boolean, reflect: true }) hasThumb = false
  @property({ type: Boolean, reflect: true }) autoplay = false

  render() {
    return html`
      <style>
        :host {
          display: block;  /* or display: block; */
        }
      </style>
      <div style="border: 1px solid black" class="wrapper">
        <div>HasThumb: ${ this.hasThumb ? "true" : "false" }</div><br>
        <div>AutoPlay: ${ this.autoplay ? "true" : "false" }</div>
      </div>
    `
  }
}