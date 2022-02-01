import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-slide')
export class Slide extends LitElement {
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

    repeat() {
        return this.title.repeat(5);
    }

    render() {
        return html`<div>${this.repeat()}</div>`;
    }
}