/**
 * BattleScene3D — バトル画面に3Dボクセルキャラを表示するミニシーン
 *
 * バトルヘッダー領域に小型のThree.jsキャンバスを配置し、
 * ボスと冒険者のVoxelEntityを表示・アニメーションする。
 */
import * as THREE from 'three';
import { VoxelEntity } from '../../engine/VoxelEntity.js';
import { assetPath } from '../core/assetPath.js';
import { AdventurerDefs, UnlockableAdventurers } from '../data/adventurers.js';

// 全冒険者定義のプリセットマップ
const _advPresets = {};
for (const def of [...AdventurerDefs, ...UnlockableAdventurers]) {
  if (def.preset) _advPresets[def.id] = def.preset;
}

// 定義キャッシュ（ページ内で共有）
const _defCache = new Map();

async function loadDef(path) {
  if (_defCache.has(path)) return _defCache.get(path);
  try {
    const res = await fetch(assetPath(path));
    const def = await res.json();
    _defCache.set(path, def);
    return def;
  } catch {
    return null;
  }
}

export class BattleScene3D {
  constructor() {
    this.canvas = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.entities = [];
    this.bossEntity = null;
    this.advEntities = [];
    this._animId = null;
    this._disposed = false;
  }

  /**
   * シーンを初期化してコンテナに配置
   * @param {HTMLElement} container - 3Dキャンバスの親要素
   * @param {object} bossDef - ボス定義 (preset, icon, name)
   * @param {Array} adventurers - 冒険者配列 [{ id, name, icon }]
   */
  async init(container, bossDef, adventurers) {
    if (!container || !bossDef?.preset) return;

    // キャンバス生成
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'battle-3d-canvas';
    container.appendChild(this.canvas);

    // レンダラー
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    const w = container.clientWidth;
    const h = container.clientHeight;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // シーン
    this.scene = new THREE.Scene();

    // ライティング
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xfff0dd, 0.8);
    dirLight.position.set(3, 8, 5);
    this.scene.add(dirLight);

    // カメラ（やや見下ろし）
    this.camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 200);
    this.camera.position.set(0, 6, 14);
    this.camera.lookAt(0, 1, 0);

    // ボスを読み込み（中央奥）
    const bossDfn = await loadDef(bossDef.preset);
    if (bossDfn && !this._disposed) {
      this.bossEntity = new VoxelEntity(bossDfn, { scale: 1.8, skipEdges: true });
      this.bossEntity.root.position.set(0, 0, -3);
      this.bossEntity.addTo(this.scene);
      this.entities.push(this.bossEntity);
      if (this.bossEntity.animController && bossDfn.animations?.idle) {
        this.bossEntity.playAnimation('idle', { loop: true });
      }
    }

    // 冒険者を読み込み（手前に横一列）
    const advCount = Math.min(adventurers.length, 5);
    const spacing = 3;
    const startX = -((advCount - 1) * spacing) / 2;

    for (let i = 0; i < advCount; i++) {
      const adv = adventurers[i];
      const presetPath = _advPresets[adv.id];
      if (!presetPath) continue;
      const advDfn = await loadDef(presetPath);
      if (!advDfn || this._disposed) continue;

      const entity = new VoxelEntity(advDfn, { scale: 1.2, skipEdges: true });
      entity.root.position.set(startX + i * spacing, 0, 3);
      entity.root.rotation.y = Math.PI; // ボスの方を向く
      entity.addTo(this.scene);
      this.entities.push(entity);
      this.advEntities.push({ id: adv.id, entity });

      if (entity.animController && advDfn.animations?.idle) {
        entity.playAnimation('idle', { loop: true });
      }
    }

    // アニメーションループ開始
    this._startLoop();
  }

  _startLoop() {
    const animate = () => {
      if (this._disposed) return;
      this._animId = requestAnimationFrame(animate);

      const dt = 1 / 60;
      for (const e of this.entities) {
        e.update(dt);
      }

      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  /** ボスのヒットリアクション */
  animateBossHit() {
    if (!this.bossEntity) return;
    const root = this.bossEntity.root;
    const origX = root.position.x;
    let t = 0;
    const shake = () => {
      if (this._disposed) return;
      t += 0.05;
      root.position.x = origX + Math.sin(t * 20) * 0.3 * Math.max(0, 1 - t);
      if (t < 1) requestAnimationFrame(shake);
      else root.position.x = origX;
    };
    shake();
  }

  /** 冒険者のヒットリアクション */
  animateAdvHit(advId) {
    const ae = this.advEntities.find(a => a.id === advId);
    if (!ae) return;
    const root = ae.entity.root;
    const origZ = root.position.z;
    let t = 0;
    const recoil = () => {
      if (this._disposed) return;
      t += 0.06;
      root.position.z = origZ + Math.sin(t * 15) * 0.2 * Math.max(0, 1 - t);
      if (t < 1) requestAnimationFrame(recoil);
      else root.position.z = origZ;
    };
    recoil();
  }

  /** ボスのHP割合に応じた演出（低HPで赤く光る） */
  updateBossHpVisual(hpRatio) {
    if (!this.bossEntity) return;
    // 低HPで揺れ速度を上げる（将来拡張用）
  }

  dispose() {
    this._disposed = true;
    if (this._animId) cancelAnimationFrame(this._animId);

    for (const e of this.entities) {
      e.removeFrom(this.scene);
    }
    this.entities = [];
    this.advEntities = [];
    this.bossEntity = null;

    // Three.js リソース解放
    if (this.scene) {
      this.scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      this.scene = null;
    }
    this.camera = null;

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.remove();
    }
    this.canvas = null;
  }
}
