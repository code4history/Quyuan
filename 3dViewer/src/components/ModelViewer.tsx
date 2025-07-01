import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as SPLAT from 'gsplat';

const ModelViewer = () => {
  const objContainerRef = useRef<HTMLDivElement | null>(null);
  const gsCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isObjLoading, setIsObjLoading] = useState(true);
  const [isGSLoading, setIsGSLoading] = useState(true);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const gsAnimationFrameRef = useRef<number | undefined>(undefined);
  const cleanupRef = useRef<() => void | undefined>(undefined);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;

    const init = async () => {
      if (!objContainerRef.current || !gsCanvasRef.current) {
        return;
      }

      // OBJビューアのセットアップ
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f0f0);

      const camera = new THREE.PerspectiveCamera(
        75,
        objContainerRef.current.clientWidth / objContainerRef.current.clientHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(objContainerRef.current.clientWidth, objContainerRef.current.clientHeight);
      objContainerRef.current.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      camera.position.set(0.53, -0.58, 0.79); 
      controls.target.set(0.16, -0.94, 0.03);
      controls.update();

      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(ambientLight, directionalLight);

      const mtlLoader = new MTLLoader();
      mtlLoader.setPath('https://t.tilemap.jp/3ddata/');

      try {
        const materials = await new Promise<MTLLoader.MaterialCreator>((resolve, reject) => {
          mtlLoader.load('okuman.mtl', resolve, undefined, reject);
        });

        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('https://t.tilemap.jp/3ddata/');

        const object = await new Promise<THREE.Group>((resolve, reject) => {
          objLoader.load('okuman.obj', resolve, undefined, reject);
        });

        const box = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        object.scale.multiplyScalar(3.0 / maxDim);

        const center = new THREE.Vector3();
        box.getCenter(center);
        object.position.sub(center);

        scene.add(object);
        setIsObjLoading(false);

        const animateObj = () => {
          animationFrameRef.current = requestAnimationFrame(animateObj);
          controls.update();
          renderer.render(scene, camera);
        };
        animateObj();
      } catch (error) {
        console.error('OBJ/MTLのロードに失敗:', error);
        setIsObjLoading(false);
      }

      // GSplatのセットアップ
      try {
        const splatScene = new SPLAT.Scene();
        const splatCamera = new SPLAT.Camera();
        const splatRenderer = new SPLAT.WebGLRenderer(gsCanvasRef.current);
        const splatControls = new SPLAT.OrbitControls(splatCamera, gsCanvasRef.current);

        await SPLAT.Loader.LoadAsync('https://t.tilemap.jp/3ddata/okuman.splat', splatScene);

        const animateGSplat = () => {
          gsAnimationFrameRef.current = requestAnimationFrame(animateGSplat);
          splatControls.update();
          splatRenderer.render(splatScene, splatCamera);
        };
        animateGSplat();
        setIsGSLoading(false);
      } catch (error) {
        console.error('Gaussian Splattingのロードに失敗:', error);
        setIsGSLoading(false);
      }

      const handleResize = () => {
        if (objContainerRef.current) {
          const width = objContainerRef.current.clientWidth;
          const height = objContainerRef.current.clientHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      };

      window.addEventListener('resize', handleResize);

      cleanupRef.current = () => {
        window.removeEventListener('resize', handleResize);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (gsAnimationFrameRef.current) {
          cancelAnimationFrame(gsAnimationFrameRef.current);
        }
        renderer.dispose();
        objContainerRef.current?.removeChild(renderer.domElement);
      };
    };

    init();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">館林市・堀工おくまん地蔵尊</h1>

      <div className="flex flex-row justify-center gap-8 px-4 flex-grow">
        <div className="w-1/2 max-w-xl">
          <h2 className="text-xl font-semibold mb-4 text-center">OBJモデル</h2>
          <div
            ref={objContainerRef}
            className="w-full h-[500px] rounded-lg shadow-lg bg-white relative"
          >
            {isObjLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                <div className="text-lg">読み込み中...</div>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/2 max-w-xl">
          <h2 className="text-xl font-semibold mb-4 text-center">Gaussian Splattingモデル</h2>
          <div className="w-full h-[500px] rounded-lg shadow-lg bg-white relative">
            <canvas
              ref={gsCanvasRef}
              className="w-full h-full"
              style={{
                display: 'block',
                touchAction: 'none',
              }}
            />
            {isGSLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                <div className="text-lg">読み込み中...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
