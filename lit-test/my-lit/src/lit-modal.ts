//import { html, css, LitElement } from 'lit-element';
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-modal')
export class LitModal extends LitElement {
  static styles = css`
    :host {
      display: flex;
      padding: 25px;
      color: var(--lit-modal-text-color, #000);
    }

    .backdrop {
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: var(--lit-modal-backdrop-color, #00000040) !important;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .modal {
      background-color: var(--lit-modal-background-color, #fefefe);
      margin: auto;
      padding: 20px;
      border: 1px solid var(--lit-modal-border-color, #888);
      border-radius: var(--lit-modal-border-radius, '5px');
      width: 80%;
    }

    .btn-close {
      color: var(--lit-modal-btn-color, #aaaaaa);
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .btn-close:hover,
    .btn-close:focus {
      color: var(--lit-modal-text-color, #000);
      text-decoration: none;
      cursor: pointer;
    }
  `;

  @property({ type: Boolean, attribute: 'close-backdrop' })
  canBackdropClose = false

  @property({ type: Boolean, attribute: 'show' })
  isShow = false

  setModalShow(value: boolean) {
    this.isShow = value;
  }

  onBackdropClick(e: any) {
    if (e.target.nodeName === 'DIV' && e.target.className === 'backdrop') {
      return this.canBackdropClose ? this.setModalShow(false) : null;
    }
    return null;
  }

  render() {
    return html`
      <slot
        name="modal-open"
        @click="${() => this.setModalShow(true)}"
      ></slot>
      <div
        class="backdrop"
        @click="${this.onBackdropClick}"
        style="${this.isShow ? 'display: flex' : 'display: none'}"
      >
        <div class="modal">
          <slot
            name="modal-close"
            class=".btn-close"
            @click="${() => this.setModalShow(false)}"
          ></slot>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
