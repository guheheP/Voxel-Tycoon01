/**
 * Renderer — Three.js のシーン・カメラ・ライティング・地面の初期化を集約
 */
import * as THREE from 'three';

export class Renderer {
  constructor(canvasId = 'game-canvas') {
    // モバイル判定
    this._isMobile = window.innerWidth <= 768;

    // --- Canvas & WebGLRenderer ---
    this.canvas = document.getElementById(canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !this._isMobile, // モバイルではアンチエイリアス無効
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = this._isMobile ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.setClearColor(0x87ceeb);

    // --- Scene ---
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x87ceeb, 0.003);

    // --- Camera ---
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);
    this.camera.position.set(0, 20, 30);

    // --- Lighting ---
    this._setupLighting();

    // --- Ground & Grid ---
    this._setupGround();

    // --- Resize ---
    this._onResize = this._onResize.bind(this);
    window.addEventListener('resize', this._onResize);
    this._onResize();
  }

  _setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xc8daf0, 0.8);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x6b8f5e, 0.6);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff8e8, 1.6);
    this.sunLight.position.set(20, 30, 15);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(this._isMobile ? 1024 : 2048, this._isMobile ? 1024 : 2048);
    this.sunLight.shadow.camera.left = -30;
    this.sunLight.shadow.camera.right = 30;
    this.sunLight.shadow.camera.top = 30;
    this.sunLight.shadow.camera.bottom = -30;
    this.sunLight.shadow.bias = -0.001;
    this.scene.add(this.sunLight);
  }

  _setupGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshLambertMaterial({ color: 0x5a9e6f }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const grid = new THREE.GridHelper(40, 40, 0x7db892, 0x6aad80);
    grid.position.y = 0.01;
    grid.material.transparent = true;
    grid.material.opacity = 0.3;
    this.scene.add(grid);
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this._isMobile = w <= 768;

    // モバイルでもキャンバスサイズは設定（WebGLコンテキストの整合性のため）
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this._isMobile ? 1.5 : 2));

    if (this._isMobile) return; // 以降はデスクトップのみ

    // シーンストリップの高さを取得（CSS と同期）
    const stripEl = document.querySelector('.scene-strip');
    this._stripH = stripEl ? stripEl.offsetHeight : 120;

    // カメラのアスペクト比: ストリップのワイド比をFOV調整で自然に見せる
    this.camera.aspect = w / this._stripH;
    this.camera.fov = 20; // ワイドアスペクトに合わせて狭FOVで歪み軽減
    this.camera.updateProjectionMatrix();
  }

  render() {
    if (this._isMobile) return;

    const w = window.innerWidth;
    const stripH = this._stripH || 120;

    // 毎フレーム Scissor/Viewport を再適用（WebGL状態の信頼性確保）
    this.renderer.setScissorTest(true);
    this.renderer.setScissor(0, 0, w, stripH);
    this.renderer.setViewport(0, 0, w, stripH);

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
  }
}
