import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { QyViewerBase } from "./qy-viewer-base";
import * as SPLAT from "gsplat";

@customElement("qy-viewer-gaussian")
export class QyViewerGaussian extends QyViewerBase {
  @state()
  private splatUrl: string = "";

  @state()
  private isLoading: boolean = true;

  private scene?: SPLAT.Scene;
  private camera?: SPLAT.Camera;
  private renderer?: SPLAT.WebGLRenderer;
  private controls?: SPLAT.OrbitControls;
  private animationId?: number;
  private canvas?: HTMLCanvasElement;

  static styles = css`
    ${super.styles}
    
    .gaussian-container {
      width: 100%;
      height: 100%;
      position: relative;
      background: #000;
    }

    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 1.2rem;
    }

    .error {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #e74c3c;
      text-align: center;
      padding: 20px;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
      touch-action: none;
    }
  `;

  open(url: string) {
    this.splatUrl = url;
    this.isLoading = true;
    super.open(url);
    
    // Wait for render to complete before initializing
    this.updateComplete.then(() => {
      this.initializeViewer();
    });
  }

  close() {
    this.cleanup();
    this.splatUrl = "";
    super.close();
  }

  private cleanup() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = undefined;
    }

    this.scene = undefined;
    this.camera = undefined;
    this.controls = undefined;
  }

  private async initializeViewer() {
    this.canvas = this.shadowRoot?.querySelector("canvas") as HTMLCanvasElement;
    if (!this.canvas) return;

    try {
      // Initialize Gaussian Splatting viewer
      this.scene = new SPLAT.Scene();
      this.camera = new SPLAT.Camera();
      this.renderer = new SPLAT.WebGLRenderer(this.canvas);
      this.controls = new SPLAT.OrbitControls(this.camera, this.canvas);

      // Load splat file
      await SPLAT.Loader.LoadAsync(this.splatUrl, this.scene);

      // Setup resize handler
      const container = this.shadowRoot?.querySelector(".gaussian-container") as HTMLDivElement;
      if (container) {
        const resizeObserver = new ResizeObserver(() => {
          this.handleResize();
        });
        resizeObserver.observe(container);
      }

      // Start animation
      this.animate();
      this.isLoading = false;
      this.requestUpdate();

    } catch (error) {
      console.error("Failed to load Gaussian Splatting model:", error);
      this.isLoading = false;
      this.requestUpdate();
    }
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    
    if (this.controls && this.renderer && this.scene && this.camera) {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }
  };

  private handleResize() {
    const container = this.shadowRoot?.querySelector(".gaussian-container") as HTMLDivElement;
    if (!container || !this.camera || !this.renderer) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Update renderer size
    this.renderer.setSize(width, height);
  }

  renderViewer() {
    if (!this.splatUrl) {
      return html`<div class="error">No splat URL provided</div>`;
    }

    return html`
      <div class="gaussian-container">
        <canvas></canvas>
        ${this.isLoading ? html`<div class="loading">読み込み中...</div>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "qy-viewer-gaussian": QyViewerGaussian;
  }
}