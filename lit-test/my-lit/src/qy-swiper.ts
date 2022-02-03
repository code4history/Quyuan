import {html, css, LitElement, PropertyValues} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {Swiper} from "swiper";

import  "./qy-slide.js";

@customElement('qy-swiper')
export class QySwiper extends LitElement {
  static styles = css`
    .swiper-container {
      width: 200px;
      height: 100px;
    }
    
    .swiper-slider {
      width: 150px;
      height: 200px;
    }
  `;

  containerRef: Ref<HTMLDivElement> = createRef();

  wrapperRef: Ref<HTMLDivElement> = createRef();

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    console.log("Swiper: firstUpdated");
    this.querySelectorAll("qy-slide").forEach((node) => {
      console.log(node.shadowChild());
      this.shadowRoot!.querySelector(".swiper-wrapper")!.appendChild(node.shadowChild());
    });

    new Swiper(this.containerRef.value as HTMLDivElement, {
      // ここからオプション
      loop: true,
      direction: 'horizontal',
      /*pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      }*/
    });
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("Swiper: connectedCallback");


    /*this.childNodes.forEach((node ) => {
      console.log(node);
      console.log((node as any).shadowChildren());
    })*/
  }

  render() {
    return html`
      <link rel="stylesheet" href="node_modules/swiper/swiper.min.css">
      <div class="swiper-container" ${ref(this.containerRef)}>
        <div class="swiper-wrapper" ${ref(this.wrapperRef)}>
          <!--slot></slot-->
        </div>
      </div>
    `;
  }
}
