import { VoxelEntity } from '../engine/VoxelEntity.js';
import { eventBus } from './core/EventBus.js';
import { ParticleSystem } from './ParticleSystem.js';
import * as THREE from 'three';

export class SceneManager {
  constructor(scene, camera, entitiesArray, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.entities = entitiesArray;
    this.renderer = renderer;  // Renderer instance for lighting access
    this.wanderers = [];     // 背景で歩き回るNPC
    this.dayProgress = 0;

    // 日夜サイクルの色定義
    this._skyColors = {
      dawn:    new THREE.Color(0xffcc88),   // 暖かい朝焼け
      noon:    new THREE.Color(0x87ceeb),   // 青空
      sunset:  new THREE.Color(0xff9955),   // 夕焼け
      night:   new THREE.Color(0x1a1a3a),   // 夜空
    };
    this._sunColors = {
      dawn:    new THREE.Color(0xffe8c0),
      noon:    new THREE.Color(0xfff8e8),
      sunset:  new THREE.Color(0xff8844),
      night:   new THREE.Color(0x334466),
    };
    this._tempColor    = new THREE.Color();  // skyColor 補間用
    this._sunTempColor = new THREE.Color();  // sunColor 補間用（毎フレームの new 防止）
  }

  async init() {
    // カメラの固定値設定 (ジオラマ風の斜め見下ろし)
    this.camera.position.set(20, 25, 25);
    this.camera.lookAt(0, 0, 0);

    // パーティクルシステム初期化
    this.particles = new ParticleSystem(this.scene);

    // 背景・お店のロード
    await this.spawnEnvironment();

    // NPC演出: 冒険者派遣/帰還
    eventBus.on('adventurer:return', (d) => this._onAdventurerReturn(d));

    // ショップ外装進化: ランクアップ
    eventBus.on('rank:up', (d) => {
      this._evolveShopExterior(d.rank);
      // 紙吹雪パーティクル
      this.particles.spawnConfetti(50);
    });

    // 売上時コインパーティクル
    eventBus.on('item:sold', () => {
      this.particles.spawnCoinBurst(new THREE.Vector3(-2, 2, 5), 10 + Math.floor(Math.random() * 8));
    });

    // 調合時スターパーティクル
    eventBus.on('item:crafted', (d) => {
      const tier = d.item && d.item.quality >= 81 ? 'q-legendary'
                 : d.item && d.item.quality >= 61 ? 'q-excellent'
                 : d.item && d.item.quality >= 41 ? 'q-fine'
                 : 'q-common';
      const count = tier === 'q-legendary' ? 20 : tier === 'q-excellent' ? 15 : 10;
      this.particles.spawnCraftStars(new THREE.Vector3(6, 1, 0), count, tier);
    });

    // 背景NPC (お客さんが歩き回る)
    await this._spawnWanderers();
  }

  update(dt) {
    // 背景NPC の動き
    for (const w of this.wanderers) {
      w.timer -= dt;
      if (w.timer <= 0) {
        w.targetX = (Math.random() - 0.5) * 30;
        w.targetZ = (Math.random() - 0.5) * 30;
        w.timer = 5 + Math.random() * 8;
      }
      const entity = w.entity;
      if (entity && entity.group) {
        const speed = 1.5 * dt;
        const dx = w.targetX - entity.group.position.x;
        const dz = w.targetZ - entity.group.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0.5) {
          entity.group.position.x += (dx / dist) * speed;
          entity.group.position.z += (dz / dist) * speed;
          entity.group.rotation.y = Math.atan2(dx, dz);
        }
      }
    }

    // 日夜ライティング更新
    this._updateDayNightCycle();

    // パーティクル更新
    if (this.particles) {
      this.particles.update(dt);

      // 環境パーティクル自動生成（約3秒ごと）
      this._ambientTimer = (this._ambientTimer || 0) + dt;
      if (this._ambientTimer >= 3) {
        this._ambientTimer = 0;
        const count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) {
          this.particles.spawnAmbientParticle(this.dayProgress);
        }
      }
    }
  }

  /** dayProgressを外部から設定 (0.0~1.0) */
  setDayProgress(progress) {
    this.dayProgress = progress;
  }

  _updateDayNightCycle() {
    if (!this.renderer) return;
    const p = this.dayProgress; // 0=朝 → 0.5=昼 → 0.8=夕方 → 1.0=夜

    // 空・霧の色補間
    let skyColor;
    let sunColor;
    let sunIntensity;
    let ambientIntensity;

    if (p < 0.15) {
      // 夜明け → 朝 (0.0~0.15)
      const t = p / 0.15;
      skyColor = this._tempColor.lerpColors(this._skyColors.night, this._skyColors.dawn, t);
      sunColor = this._sunTempColor.lerpColors(this._sunColors.night, this._sunColors.dawn, t);
      sunIntensity = 0.4 + t * 0.8;
      ambientIntensity = 0.3 + t * 0.3;
    } else if (p < 0.5) {
      // 朝 → 昼 (0.15~0.5)
      const t = (p - 0.15) / 0.35;
      skyColor = this._tempColor.lerpColors(this._skyColors.dawn, this._skyColors.noon, t);
      sunColor = this._sunTempColor.lerpColors(this._sunColors.dawn, this._sunColors.noon, t);
      sunIntensity = 1.2 + t * 0.4;
      ambientIntensity = 0.6 + t * 0.2;
    } else if (p < 0.75) {
      // 昼 → 夕方 (0.5~0.75)
      const t = (p - 0.5) / 0.25;
      skyColor = this._tempColor.lerpColors(this._skyColors.noon, this._skyColors.sunset, t);
      sunColor = this._sunTempColor.lerpColors(this._sunColors.noon, this._sunColors.sunset, t);
      sunIntensity = 1.6 - t * 0.6;
      ambientIntensity = 0.8 - t * 0.2;
    } else {
      // 夕方 → 夜 (0.75~1.0)
      const t = (p - 0.75) / 0.25;
      skyColor = this._tempColor.lerpColors(this._skyColors.sunset, this._skyColors.night, t);
      sunColor = this._sunTempColor.lerpColors(this._sunColors.sunset, this._sunColors.night, t);
      sunIntensity = 1.0 - t * 0.6;
      ambientIntensity = 0.6 - t * 0.3;
    }

    // 適用
    if (this.renderer.renderer) {
      this.renderer.renderer.setClearColor(skyColor);
    }
    if (this.scene.fog) {
      this.scene.fog.color.copy(skyColor);
    }
    if (this.renderer.sunLight) {
      this.renderer.sunLight.color.copy(sunColor);
      this.renderer.sunLight.intensity = sunIntensity;
    }
    if (this.renderer.ambientLight) {
      this.renderer.ambientLight.intensity = ambientIntensity;
    }
    if (this.renderer.hemiLight) {
      this.renderer.hemiLight.intensity = 0.3 + ambientIntensity * 0.5;
    }
  }

  async loadEntity(path, options = {}) {
    try {
      const res = await fetch(path);
      const def = await res.json();
      const entity = new VoxelEntity(def, options);
      entity.addTo(this.scene);
      this.entities.push(entity);
      return entity;
    } catch (err) {
      console.error('[SceneManager] Failed to load entity:', path, err);
      return null;
    }
  }

  async spawnEnvironment() {
    // お店の建屋 (中央)
    await this.loadEntity('/presets/RPG_Props/House.json', {
      position: [0, 0, -5],
      scale: 1.0,
      rotation: 0
    });

    // お店のカウンター・陳列棚
    await this.loadEntity('/presets/RPG_Props/Chest.json', {
      position: [-2, 0, 5],
      scale: 0.6,
      rotation: Math.PI / 4,
    });
    await this.loadEntity('/presets/RPG_Props/Barrel.json', {
      position: [2, 0, 5],
      scale: 0.5,
    });

    // クラフト設備 (お店の横)
    await this.loadEntity('/presets/RPG_Props/Anvil.json', {
      position: [6, 0, 0],
      scale: 0.6,
      rotation: -Math.PI / 4,
    });
    await this.loadEntity('/presets/RPG_Props/Campfire.json', {
      position: [-6, 0, -2],
      scale: 0.6,
    });

    // 背景の木・岩等の装飾
    const decorations = [
      { path: 'Pine Tree.json', pos: [-15, -15], scale: 1.0 },
      { path: 'Pine Tree.json', pos: [12, -10], scale: 0.8 },
      { path: 'Pine Tree.json', pos: [10, 15], scale: 0.9 },
      { path: 'Pine Tree.json', pos: [-18, 8], scale: 0.7 },
      { path: 'Rock.json', pos: [8, 12], scale: 0.6 },
      { path: 'Rock.json', pos: [-10, 10], scale: 0.5 },
      { path: 'Rock.json', pos: [15, -5], scale: 0.4 },
    ];

    for (const dec of decorations) {
      await this.loadEntity(`/presets/RPG_Props/${dec.path}`, {
        position: [dec.pos[0], 0, dec.pos[1]],
        scale: dec.scale,
      });
    }

    // 店主NPC
    const shopkeeper = await this.loadEntity('/presets/RPG_Characters/King.json', {
      position: [0, 0, 3],
      scale: 0.5,
    });
    if (shopkeeper) {
      shopkeeper.playAnimation('idle');
    }
  }

  async _spawnWanderers() {
    const wandererDefs = [
      { path: 'Chibi Human.json', x: -8, z: 8 },
      { path: 'Cat.json', x: 10, z: 10 },
      { path: 'Dog.json', x: -12, z: -8 },
    ];

    for (const def of wandererDefs) {
      try {
        const entity = await this.loadEntity(`/presets/RPG_Characters/${def.path}`, {
          position: [def.x, 0, def.z],
          scale: 0.4,
        });
        if (entity) {
          entity.playAnimation('walk');
          this.wanderers.push({
            entity,
            targetX: def.x,
            targetZ: def.z,
            timer: Math.random() * 3,
          });
        }
      } catch (e) {
        console.warn('[SceneManager] Wanderer load failed:', e);
      }
    }
  }

  async _onAdventurerReturn(data) {
    // 帰還エフェクト: NPCの同時数を制限
    if (this._returnNpcCount >= 2) return;
    this._returnNpcCount = (this._returnNpcCount || 0) + 1;

    try {
      const npc = await this.loadEntity('/presets/RPG_Characters/Knight.json', {
        position: [18, 0, 0],
        scale: 0.5,
      });
      if (!npc) { this._returnNpcCount--; return; }
      npc.playAnimation('walk');

      // 歩いてお店に向かう
      const walkInterval = setInterval(() => {
        if (npc.group) {
          npc.group.position.x -= 0.15;
          npc.group.rotation.y = Math.PI / 2;
          if (npc.group.position.x <= 4) {
            clearInterval(walkInterval);
            npc.playAnimation('idle');
            // 3秒後に消える
            setTimeout(() => {
              npc.group.visible = false;
              const idx = this.entities.indexOf(npc);
              if (idx !== -1) this.entities.splice(idx, 1);
              npc.removeFrom(this.scene);
              this._returnNpcCount--;
            }, 3000);
          }
        }
      }, 33);
    } catch (e) {
      this._returnNpcCount--;
      // NPC演出はベストエフォート
    }
  }

  /** ショップ外装進化 — ランクに応じた装飾追加 */
  async _evolveShopExterior(rankData) {
    const rankIndex = rankData?.index;
    if (rankIndex === undefined) return;

    // ランク別の装飾定義
    const decorationsByRank = {
      1: [
        // バナー（看板）を店の両脇に
        { path: 'Banner.json', pos: [-4, 0, 3], scale: 0.6, rot: 0 },
        { path: 'Banner.json', pos: [4, 0, 3], scale: 0.6, rot: 0 },
        // フェンスでお店の前を整備
        { path: 'Fence.json', pos: [-5, 0, 7], scale: 0.5, rot: 0 },
        { path: 'Fence.json', pos: [5, 0, 7], scale: 0.5, rot: 0 },
      ],
      2: [
        // 街灯を設置
        { path: 'Street Light.json', pos: [-7, 0, 5], scale: 0.7, rot: 0 },
        { path: 'Street Light.json', pos: [7, 0, 5], scale: 0.7, rot: 0 },
        // 井戸を設置
        { path: 'Well.json', pos: [-8, 0, -3], scale: 0.5, rot: Math.PI / 4 },
      ],
      3: [
        // 木を追加して庭を整える
        { path: 'Tree.json', pos: [-5, 0, -8], scale: 0.7, rot: 0 },
        { path: 'Tree.json', pos: [5, 0, -8], scale: 0.6, rot: 0 },
        // 追加の宝箱（在庫力UP演出）
        { path: 'Chest.json', pos: [4, 0, 5], scale: 0.5, rot: -Math.PI / 6 },
        // 街灯追加
        { path: 'Street Light.json', pos: [0, 0, 8], scale: 0.7, rot: 0 },
      ],
      4: [
        // テント（VIP向け特設コーナー）
        { path: 'Tent.json', pos: [10, 0, 4], scale: 0.5, rot: -Math.PI / 4 },
        // 追加のバナーと装飾
        { path: 'Banner.json', pos: [-3, 0, 8], scale: 0.5, rot: Math.PI / 4 },
        { path: 'Banner.json', pos: [3, 0, 8], scale: 0.5, rot: -Math.PI / 4 },
        { path: 'Street Light.json', pos: [-10, 0, 0], scale: 0.7, rot: 0 },
        { path: 'Street Light.json', pos: [10, 0, 0], scale: 0.7, rot: 0 },
      ],
    };

    const decorations = decorationsByRank[rankIndex];
    if (!decorations) return;

    for (const dec of decorations) {
      try {
        const entity = await this.loadEntity(`/presets/RPG_Props/${dec.path}`, {
          position: dec.pos,
          scale: dec.scale,
          rotation: dec.rot,
        });

        // 出現アニメーション（下から浮き上がる）
        if (entity && entity.group) {
          const targetY = entity.group.position.y;
          entity.group.position.y = -3;
          entity.group.scale.set(0, 0, 0);

          const startTime = performance.now();
          const animDuration = 800;
          const popAnim = () => {
            const elapsed = performance.now() - startTime;
            const t = Math.min(1, elapsed / animDuration);
            // Ease-out bounce
            const ease = 1 - Math.pow(1 - t, 3);
            entity.group.position.y = -3 + (targetY + 3) * ease;
            entity.group.scale.setScalar(dec.scale * ease);
            if (t < 1) requestAnimationFrame(popAnim);
          };
          requestAnimationFrame(popAnim);
        }
      } catch (e) {
        console.warn('[SceneManager] Shop decoration failed:', e);
      }
    }
  }
}
