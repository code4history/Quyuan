import {html, css} from 'lit';
import {QyViewerBase} from './qy-viewer-base.js';
import {customElement,property} from "lit/decorators.js";
import {ImagePanorama} from "./panolens";

@customElement('qy-viewer-image')
export class QyViewerImage extends QyViewerBase {
    static styles = css`
    ${super.styles}

    .img_template {
      display: none;
    }
  `