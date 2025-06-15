import { html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { QyViewerBase } from "./qy-viewer-base";

@customElement("qy-viewer-gaussian")
export class QyViewerGaussian extends QyViewerBase {
  @state()
  private splatUrl: string = "";

  @state()
  private isLoading: boolean = true;

  @property({ type: Boolean, attribute: 'debug-mode' })
  debugMode: boolean = false;

  @property({ type: String, attribute: 'camera-position' })
  cameraPosition: string = "3,3,3";

  @property({ type: String, attribute: 'camera-target' })
  cameraTarget: string = "0,0,0";

  private viewer?: any; // gsplat viewer instance
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

    .debug-info {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px;
      font-family: monospace;
      font-size: 12px;
      border-radius: 4px;
      pointer-events: none;
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

    if (this.viewer) {
      // Cleanup gsplat viewer if it has cleanup methods
      if (typeof this.viewer.dispose === 'function') {
        this.viewer.dispose();
      }
      this.viewer = undefined;
    }
  }

  private getCameraDebugInfo(): string {
    // Return placeholder for now since gsplat API is unclear
    return "Camera info unavailable";
  }

  private getTargetDebugInfo(): string {
    // Return placeholder for now since gsplat API is unclear
    return "Target info unavailable";
  }

  private updateDebugInfo() {
    // Force update to refresh debug display
    this.requestUpdate();
  }

  private async initializeViewer() {
    this.canvas = this.shadowRoot?.querySelector("canvas") as HTMLCanvasElement;
    if (!this.canvas) return;

    try {
      const container = this.shadowRoot?.querySelector(".gaussian-container") as HTMLDivElement;
      if (!container) return;

      // Dynamically import gsplat to handle potential issues
      const SPLAT = await import('gsplat');
      
      // Try to create viewer with various approaches
      try {
        // Approach 1: Direct viewer creation if available
        if (SPLAT.Viewer) {
          this.viewer = new SPLAT.Viewer({
            canvas: this.canvas,
            url: this.splatUrl
          });
        } 
        // Approach 2: Manual setup
        else {
          const scene = new SPLAT.Scene();
          const camera = new SPLAT.Camera();
          const renderer = new SPLAT.WebGLRenderer(this.canvas);
          const controls = new SPLAT.OrbitControls(camera, this.canvas);
          
          await SPLAT.Loader.LoadAsync(this.splatUrl, scene);
          
          this.viewer = { scene, camera, renderer, controls };
          
          // Start render loop
          const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
          };
          animate();
        }
      } catch (error) {
        console.error("Error setting up gsplat viewer:", error);
        throw error;
      }

      // Setup resize handler
      const resizeObserver = new ResizeObserver(() => {
        this.handleResize();
      });
      resizeObserver.observe(container);

      this.isLoading = false;
      this.requestUpdate();

    } catch (error) {
      console.error("Failed to load Gaussian Splatting model:", error);
      this.isLoading = false;
      this.requestUpdate();
    }
  }

  private animate = () => {
    // Animation is now handled inside initializeViewer
    if (this.debugMode) {
      this.updateDebugInfo();
    }
  };

  private handleResize() {
    const container = this.shadowRoot?.querySelector(".gaussian-container") as HTMLDivElement;
    if (!container || !this.viewer) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Update renderer size if available
    if (this.viewer.renderer && typeof this.viewer.renderer.setSize === 'function') {
      this.viewer.renderer.setSize(width, height);
    }
    
    // Update camera aspect if available
    if (this.viewer.camera && typeof this.viewer.camera.aspect !== 'undefined') {
      this.viewer.camera.aspect = width / height;
      if (typeof this.viewer.camera.updateProjectionMatrix === 'function') {
        this.viewer.camera.updateProjectionMatrix();
      }
    }
  }

  renderViewer() {
    if (!this.splatUrl) {
      return html`<div class="error">No splat URL provided</div>`;
    }

    return html`
      <div class="gaussian-container">
        <canvas></canvas>
        ${this.isLoading ? html`<div class="loading">読み込み中...</div>` : ""}
        ${!this.isLoading && this.debugMode ? html`
          <div class="debug-info">
            Camera Position: ${this.getCameraDebugInfo()}<br>
            Camera Target: ${this.getTargetDebugInfo()}<br>
            Controls: Rotate (drag), Zoom (scroll), Pan (right-drag)
          </div>
        ` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "qy-viewer-gaussian": QyViewerGaussian;
  }
}