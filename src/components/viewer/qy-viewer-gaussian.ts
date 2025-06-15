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

  private scene?: any;
  private camera?: any;
  private renderer?: any;
  private controls?: any;
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

    if (this.renderer && typeof this.renderer.dispose === 'function') {
      this.renderer.dispose();
    }

    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.controls = undefined;
  }

  private getCameraDebugInfo(): string {
    if (!this.camera || !this.camera.position) return "Camera info unavailable";
    const pos = this.camera.position;
    return `${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}`;
  }

  private getTargetDebugInfo(): string {
    if (!this.controls || !this.controls.target) return "Target info unavailable";
    const target = this.controls.target;
    return `${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}`;
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

      // Import gsplat using the proven API approach
      const SPLAT = await import('gsplat');
      
      // Setup GSplat components using the working approach from 3dViewer
      this.scene = new SPLAT.Scene();
      this.camera = new SPLAT.Camera();
      this.renderer = new SPLAT.WebGLRenderer(this.canvas);
      this.controls = new SPLAT.OrbitControls(this.camera, this.canvas);

      // Parse camera position and target if provided
      if (this.cameraPosition) {
        const [x, y, z] = this.cameraPosition.split(',').map(Number);
        if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
          this.camera.position.set(x, y, z);
        }
      }

      if (this.cameraTarget) {
        const [x, y, z] = this.cameraTarget.split(',').map(Number);
        if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
          this.controls.target.set(x, y, z);
        }
      }
      
      this.controls.update();

      // Load the splat file
      await SPLAT.Loader.LoadAsync(this.splatUrl, this.scene);

      // Start render loop
      const animate = () => {
        this.animationId = requestAnimationFrame(animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        
        if (this.debugMode) {
          this.updateDebugInfo();
        }
      };
      animate();

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


  private handleResize() {
    const container = this.shadowRoot?.querySelector(".gaussian-container") as HTMLDivElement;
    if (!container || !this.renderer || !this.camera) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Update renderer size
    if (typeof this.renderer.setSize === 'function') {
      this.renderer.setSize(width, height);
    }
    
    // Update camera aspect ratio
    if (typeof this.camera.aspect !== 'undefined') {
      this.camera.aspect = width / height;
      if (typeof this.camera.updateProjectionMatrix === 'function') {
        this.camera.updateProjectionMatrix();
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