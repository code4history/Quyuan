import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {MyElement} from "./my-element";


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('x-modal2')
export class MyModal2 extends LitElement {
  static styles = css`
    .wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: gray;
      opacity: 0;
      visibility: hidden;
      transform: scale(1.1);
      transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
      z-index: 1;
    }
    .visible {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
    }
    .modal {
      font-family: Helvetica;
      font-size: 14px;
      padding: 10px 10px 5px 10px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 2px;
      min-width: 300px;
    }
    .title {
      font-size: 18px;
    }
    .button-container {
      text-align: right;
    }
    button {
      min-width: 80px;
      background-color: #848e97;
      border-color: #848e97;
      border-style: solid;
      border-radius: 2px;
      padding: 3px;
      color:white;
      cursor: pointer;
    }
    button:hover {
      background-color: #6c757d;
      border-color: #6c757d;
    }
  `
  set visible(value: boolean) {
    if (value) {
      this.setAttribute("visible", "");
    } else {
      this.removeAttribute("visible");
    }
  }

  @property()
  get visible() {
    return this.hasAttribute("visible");
  }

  set title(value: string) {
    this.setAttribute('title', value);
  }

  @property()
  get title() {
    return this.getAttribute('title') as string;
  }

  connectedCallback() {
    super.connectedCallback();
    this.render();
    this._attachEventHandlers();
  }

  _attachEventHandlers() {
    const cancelButton = this.shadowRoot.querySelector(".cancel");
    cancelButton.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent("cancel"))
      this.removeAttribute("visible");
    });
    const okButton = this.shadowRoot.querySelector(".ok");
    okButton.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent("ok"))
      this.removeAttribute("visible");
    });
  }

  static get observedAttributes() {
    return ["visible", "title"];
  }

  attributeChangedCallback(name: string, _oldValue: any, _newValue: any) {
    if (name === "title" && this.shadowRoot) {
      this.shadowRoot.querySelector(".title").textContent = newValue;
    }
    if (name === "visible" && this.shadowRoot) {
      if (newValue === null) {
        this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
        this.dispatchEvent(new CustomEvent("close"));
      } else {
        this.shadowRoot.querySelector(".wrapper").classList.add("visible");
        this.dispatchEvent(new CustomEvent("open"))
      }
    }
  }

  render() {
    const wrapperClass = this.visible ? "wrapper visible" : "wrapper";
    return html`
      <div class='${wrapperClass}'>
        <div class='modal'>
          <span class='title'>${this.title}</span>
          <div class='content'>
            <slot></slot>
          </div>
          <div class='button-container'>
            <button class='cancel'>Cancel</button>
            <button class='ok'>Okay</button>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-modal2': MyModal2
  }
}


    /*
class Modal extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this._render();
        this._attachEventHandlers();
    }
    static get observedAttributes() {
        return ["visible", "title"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "title" && this.shadowRoot) {
            this.shadowRoot.querySelector(".title").textContent = newValue;
        }
        if (name === "visible" && this.shadowRoot) {
            if (newValue === null) {
                this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
                this.dispatchEvent(new CustomEvent("close"));
            } else {
                this.shadowRoot.querySelector(".wrapper").classList.add("visible");
                this.dispatchEvent(new CustomEvent("open"))
            }
        }
    }

    _render() {
            const wrapperClass = this.visible ? "wrapper visible" : "wrapper";
        const container = document.createElement("div");
        container.innerHTML = `
          <style>
            .wrapper {
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: gray;
              opacity: 0;
              visibility: hidden;
              transform: scale(1.1);
              transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
              z-index: 1;
            }
            .visible {
              opacity: 1;
              visibility: visible;
              transform: scale(1);
              transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
            }
            .modal {
              font-family: Helvetica;
              font-size: 14px;
              padding: 10px 10px 5px 10px;
              background-color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              border-radius: 2px;
              min-width: 300px;
            }
            .title {
              font-size: 18px;
            }
            .button-container {
              text-align: right;
            }
            button {
              min-width: 80px;
              background-color: #848e97;
              border-color: #848e97;
              border-style: solid;
              border-radius: 2px;
              padding: 3px;
              color:white;
              cursor: pointer;
            }
            button:hover {
              background-color: #6c757d;
              border-color: #6c757d;
            }
          </style>
          <div class='${wrapperClass}'>
            <div class='modal'>
              <span class='title'>${this.title}</span>
              <div class='content'>
                <slot></slot>
              </div>
              <div class='button-container'>
                <button class='cancel'>Cancel</button>
                <button class='ok'>Okay</button>
              </div>
            </div>
          </div>`;

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(container);
    }

    _attachEventHandlers() {
        const cancelButton = this.shadowRoot.querySelector(".cancel");
        cancelButton.addEventListener('click', e => {
            this.dispatchEvent(new CustomEvent("cancel"))
            this.removeAttribute("visible");
        });
        const okButton = this.shadowRoot.querySelector(".ok");
        okButton.addEventListener('click', e => {
            this.dispatchEvent(new CustomEvent("ok"))
            this.removeAttribute("visible");
        });
    }
}
window.customElements.define('x-modal', Modal);*/