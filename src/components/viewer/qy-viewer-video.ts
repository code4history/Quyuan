import { html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { QyViewerBase } from "./qy-viewer-base";

@customElement("qy-viewer-video")
export class QyViewerVideo extends QyViewerBase {
  @state()
  private videoUrl: string = "";

  @property({ type: Boolean, attribute: 'fit-to-container' })
  fitToContainer: boolean = false;

  static styles = css`
    ${super.styles}
    
    .video-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #000;
    }

    video {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      outline: none;
    }

    video.fit-to-container {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .video-controls {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .video-error {
      color: #fff;
      text-align: center;
      padding: 20px;
    }
  `;

  open(url: string) {
    this.videoUrl = url;
    super.open(url);
  }

  close() {
    // Pause video before closing
    const video = this.shadowRoot?.querySelector("video");
    if (video) {
      video.pause();
    }
    this.videoUrl = "";
    super.close();
  }

  renderViewer() {
    if (!this.videoUrl) {
      return html`<div class="video-error">No video URL provided</div>`;
    }

    return html`
      <div class="video-container">
        <video
          src="${this.videoUrl}"
          controls
          controlsList="nodownload"
          class="${this.fitToContainer ? 'fit-to-container' : ''}"
          @error="${this._handleVideoError}"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  }

  private _handleVideoError(e: Event) {
    const video = e.target as HTMLVideoElement;
    console.error("Video loading error:", video.error);
    this.shadowRoot!.querySelector(".video-container")!.innerHTML = `
      <div class="video-error">
        Failed to load video: ${this.videoUrl}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "qy-viewer-video": QyViewerVideo;
  }
}