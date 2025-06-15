import {html, css, LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import { viewerStyles } from './qy-viewer-styles'

export class QyViewerBase extends LitElement {
  static styles = css`
    ${viewerStyles}
  
    .backdrop {
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      z-index: 10;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }

    .close:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .close > i {
      color: #fff;
      font-size: 24px;
    }
    
    .viewer {
      position: absolute;
      width: 90%;
      height: 85%;
      inset: 0px;
      margin: auto;
      align-self: center;
      background-color: #000;
    }

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
      z-index: 10;
    }

    .nav-button:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }

    .nav-button:disabled,
    .nav-button.hidden {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }

    .nav-button.prev {
      left: 20px;
    }

    .nav-button.next {
      right: 20px;
    }

    .nav-button::before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
    }

    .nav-button.prev::before {
      border-width: 10px 15px 10px 0;
      border-color: transparent #fff transparent transparent;
      margin-right: 5px;
    }

    .nav-button.next::before {
      border-width: 10px 0 10px 15px;
      border-color: transparent transparent transparent #fff;
      margin-left: 5px;
    }
  `;

  @property({ type: Boolean, attribute: 'close-backdrop' })
  canBackdropClose = false

  @property({ type: Boolean, attribute: 'show' })
  isShow = false

  @state()
  showPrevButton = true

  @state()
  showNextButton = true

  open(_imgUrl: string) {
    this.isShow = true;
  }

  close() {
    this.isShow = false;
  }

  renderViewer() {
    return html``;
  }

  handlePrev() {
    const event = new CustomEvent('navigate-prev', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  handleNext() {
    const event = new CustomEvent('navigate-next', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <style>
        .backdrop {
          z-index: var(--qy-viewer-z-index-each);
        }
      </style>
      <div
        class="backdrop"
        style="${this.isShow ? 'visibility: visible' : 'visibility: hidden'}"
      >
        <div class="close" @click="${() => this.close()}">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <button 
          class="nav-button prev ${!this.showPrevButton ? 'hidden' : ''}" 
          @click="${this.handlePrev}"
          aria-label="Previous"
          ?disabled="${!this.showPrevButton}">
        </button>
        <button 
          class="nav-button next ${!this.showNextButton ? 'hidden' : ''}" 
          @click="${this.handleNext}"
          aria-label="Next"
          ?disabled="${!this.showNextButton}">
        </button>
        <div class="viewer">${this.renderViewer()}</div>
      </div>
    `;
  }
}