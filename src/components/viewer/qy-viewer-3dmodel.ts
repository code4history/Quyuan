import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { QyViewerBase } from "./qy-viewer-base";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

@customElement("qy-viewer-3dmodel")
export class QyViewer3DModel extends QyViewerBase {
  @state()
  private modelUrl: string = "";

  @state()
  private materialUrl: string = "";

  @state()
  private isLoading: boolean = true;

  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;
  private controls?: OrbitControls;
  private animationId?: number;
  private container?: HTMLDivElement;

  static styles = css`
    ${super.styles}
    
    .model-container {
      width: 100%;
      height: 100%;
      position: relative;
      background: #f0f0f0;
    }

    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #666;
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
    }
  `;

  open(url: string) {
    // URL format: "model.obj|material.mtl" or just "model.obj"
    const parts = url.split("|");
    this.modelUrl = parts[0];
    this.materialUrl = parts[1] || "";
    this.isLoading = true;
    super.open(url);
    
    // Wait for render to complete before initializing Three.js
    this.updateComplete.then(() => {
      this.initializeViewer();
    });
  }

  close() {
    this.cleanup();
    this.modelUrl = "";
    this.materialUrl = "";
    super.close();
  }

  private cleanup() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
      this.renderer = undefined;
    }

    if (this.controls) {
      this.controls.dispose();
      this.controls = undefined;
    }

    this.scene = undefined;
    this.camera = undefined;
  }

  private async initializeViewer() {
    this.container = this.shadowRoot?.querySelector(".model-container") as HTMLDivElement;
    if (!this.container) return;

    try {
      // Setup scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xf0f0f0);

      // Setup camera
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      // Setup renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(this.renderer.domElement);

      // Setup controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;

      // Setup lights
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      this.scene.add(ambientLight, directionalLight);

      // Load model
      await this.loadModel();

      // Setup resize handler
      const resizeObserver = new ResizeObserver(() => {
        this.handleResize();
      });
      resizeObserver.observe(this.container);

      // Start animation
      this.animate();
      
    } catch (error) {
      console.error("Failed to initialize 3D viewer:", error);
      this.isLoading = false;
      this.requestUpdate();
    }
  }

  private async loadModel() {
    const objLoader = new OBJLoader();

    try {
      // Load materials if provided
      if (this.materialUrl) {
        const mtlLoader = new MTLLoader();
        const basePath = this.materialUrl.substring(0, this.materialUrl.lastIndexOf("/") + 1);
        mtlLoader.setPath(basePath);
        
        const materials = await new Promise<MTLLoader.MaterialCreator>((resolve, reject) => {
          const filename = this.materialUrl.substring(this.materialUrl.lastIndexOf("/") + 1);
          mtlLoader.load(filename, resolve, undefined, reject);
        });
        
        materials.preload();
        objLoader.setMaterials(materials);
      }

      // Load OBJ
      const basePath = this.modelUrl.substring(0, this.modelUrl.lastIndexOf("/") + 1);
      objLoader.setPath(basePath);
      
      const object = await new Promise<THREE.Group>((resolve, reject) => {
        const filename = this.modelUrl.substring(this.modelUrl.lastIndexOf("/") + 1);
        objLoader.load(filename, resolve, undefined, reject);
      });

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      object.scale.multiplyScalar(3.0 / maxDim);

      const center = new THREE.Vector3();
      box.getCenter(center);
      object.position.sub(center.multiplyScalar(object.scale.x));

      this.scene!.add(object);

      // Position camera
      this.camera!.position.set(3, 3, 3);
      this.camera!.lookAt(0, 0, 0);
      this.controls!.update();

      this.isLoading = false;
      this.requestUpdate();

    } catch (error) {
      console.error("Failed to load 3D model:", error);
      this.isLoading = false;
      this.requestUpdate();
      throw error;
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
    if (!this.container || !this.camera || !this.renderer) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  renderViewer() {
    if (!this.modelUrl) {
      return html`<div class="error">No model URL provided</div>`;
    }

    return html`
      <div class="model-container">
        ${this.isLoading ? html`<div class="loading">読み込み中...</div>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "qy-viewer-3dmodel": QyViewer3DModel;
  }
}