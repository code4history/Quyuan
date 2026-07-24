import { QyElement } from './base/qy-element.js'

export class QyQuyuan extends QyElement {
  private _hasThumb = false
  private _autoplay = false

  static get observedAttributes() {
    return ['hasthumb', 'autoplay']
  }

  get hasThumb(): boolean {
    return this._hasThumb
  }

  set hasThumb(val: boolean) {
    if (this._hasThumb !== val) {
      this._hasThumb = val
      this.toggleAttribute('hasthumb', val)
      this.render()
    }
  }

  get autoplay(): boolean {
    return this._autoplay
  }

  set autoplay(val: boolean) {
    if (this._autoplay !== val) {
      this._autoplay = val
      this.toggleAttribute('autoplay', val)
      this.render()
    }
  }

  attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null) {
    if (name === 'hasthumb') {
      this._hasThumb = newVal !== null
    } else if (name === 'autoplay') {
      this._autoplay = newVal !== null
    }
    super.attributeChangedCallback(name, _oldVal, newVal)
  }

  protected render() {
    this.updateShadowRoot(this.html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div style="border: 1px solid black" class="wrapper">
        <div>HasThumb: ${this._hasThumb ? "true" : "false"}</div><br>
        <div>AutoPlay: ${this._autoplay ? "true" : "false"}</div>
      </div>
    `)
  }
}

customElements.define('qy-quyuan', QyQuyuan)
