import {html, css, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import { viewerStyles } from './qy-viewer-styles'

export class QyViewerBase extends LitElement {
  static styles = css`
    ${viewerStyles}
  
    .backdrop {
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 1;
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