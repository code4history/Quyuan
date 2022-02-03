import {html, css, LitElement} from 'lit';
import {customElement,property} from 'lit/decorators.js';
import "font-awesome/css/font-awesome.css"

@customElement('qy-viewer-base')
export class QyViewerBase extends LitElement {
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
      width: 100%;
      height: 80%;
      margin-top: 10%;
      margin-bottom: 10%;
      align-self: center;
      background-color: #000;
    }
  `;

  @property({ type: Boolean, attribute: 'close-backdrop' })
  canBackdropClose = false

  @property({ type: Boolean, attribute: 'show' })
  isShow = false

  open(_imgUrl: string) {
    this.isShow = true;
  }

  close() {
    this.isShow = false;
  }

  renderViewer() {
    return html``;
  }

  render() {
    return html`
      <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.css">
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

declare global {
  interface HTMLElementTagNameMap {
    'qy-viewer-base': QyViewerBase
  }
}