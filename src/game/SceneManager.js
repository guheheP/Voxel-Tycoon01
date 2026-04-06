import { VoxelEntity } from '../engine/VoxelEntity.js';
import { eventBus } from './core/EventBus.js';
import { ParticleSystem } from './ParticleSystem.js';
import { assetPath } from './core/assetPath.js';
import * as THREE from 'three';

export class SceneManager {
  constructor(scene, camera, entitiesArray, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.entities = entitiesArray;
    this.renderer = renderer;  // Renderer instance for lighting access
    this.wanderers = [];     // 背景で歩き回るNPC
    this.returningNpcs = []; // 帰還アニメーション中のNPC
    this.dayProgress = 0;

    // JSON定義キャッシュ — 同じファイルを何度もfetch+parseしない
    this._entityDefCache = new Map();

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
    // カメラ設定 — 正面やや上からの対称パノラマ構図
    this.camera.position.set(0, 12, 25);
    this.camera.lookAt(0, 1, -2);

    // パーティクルシステム初期化
    this._isMobile = window.innerWidth <= 768;
    this.particles = new ParticleSystem(this.scene);
    if (this._isMobile) {
      ParticleSystem.MAX_PARTICLES = 80;
    }

    // 背景・お店のロード
    await this.spawnEnvironment();

    // NPC演出・パーティクルエフェクト（デスクトップのみ — モバイルではスキップ）
    if (!this._isMobile) {
      // NPC演出: 冒険者派遣/帰還
      eventBus.on('adventurer:return', (d) => this._onAdventurerReturn(d));

      // ショップ外装進化: ランクアップ
      eventBus.on('rank:up', (d) => {
        this._evolveShopExterior(d.rank);
        // 紙吹雪パーティクル
        this.particles.spawnConfetti(50);
      });

      // 売上時コインパーティクル（スロットリング: 2秒間隔）
      this._lastCoinBurstTime = 0;
      this._coinBurstPos = new THREE.Vector3(0, 3, -3);
      eventBus.on('item:sold', () => {
        const now = performance.now();
        if (now - this._lastCoinBurstTime < 2000) return;
        this._lastCoinBurstTime = now;
        this.particles.spawnCoinBurst(this._coinBurstPos, 8);
      });

      // 調合時スターパーティクル
      this._craftStarPos = new THREE.Vector3(7, 2, -3);
      eventBus.on('item:crafted', (d) => {
        const tier = d.item && d.item.quality >= 81 ? 'q-legendary'
                   : d.item && d.item.quality >= 61 ? 'q-excellent'
                   : d.item && d.item.quality >= 41 ? 'q-fine'
                   : 'q-common';
        const count = tier === 'q-legendary' ? 15 : tier === 'q-excellent' ? 10 : 8;
        this.particles.spawnCraftStars(this._craftStarPos, count, tier);
      });

      // 背景NPC (お客さんが歩き回る)
      await this._spawnWanderers();
    } // end: デスクトップのみのビジュアル演出
  }

  update(dt) {
    // 帰還中NPC の処理
    for (let i = this.returningNpcs.length - 1; i >= 0; i--) {
      const npcState = this.returningNpcs[i];
      const npc = npcState.entity;
      
      if (!npc || !npc.root) {
        this.returningNpcs.splice(i, 1);
        this._returnNpcCount = Math.max(0, (this._returnNpcCount || 0) - 1);
        continue;
      }
      
      if (npcState.state === 'walking') {
        // 歩行中 (約 4.5 units / sec = 往時の 0.15 / 33ms に相当)
        npc.root.position.x -= 4.5 * dt;
        npc.root.rotation.y = Math.PI / 2;
        if (npc.root.position.x <= 2) {
          npcState.state = 'idle';
          npcState.timer = 3.0; // 3秒待機
          npc.playAnimation('idle');
        }
      } else if (npcState.state === 'idle') {
        // 待機後、クリーンアップ
        npcState.timer -= dt;
        if (npcState.timer <= 0) {
          npc.root.visible = false;
          const idx = this.entities.indexOf(npc);
          if (idx !== -1) this.entities.splice(idx, 1);
          npc.removeFrom(this.scene);
          npc.dispose();
          this.returningNpcs.splice(i, 1);
          this._returnNpcCount = Math.max(0, (this._returnNpcCount || 0) - 1);
        }
      }
    }

    // 背景NPC の動き
    for (const w of this.wanderers) {
      w.timer -= dt;
      if (w.timer <= 0) {
        // お店前の広場内を歩き回る
        w.targetX = -6 + Math.random() * 12; // -6 ~ 6
        w.targetZ = 1 + Math.random() * 7;   //  1 ~ 8
        w.timer = 5 + Math.random() * 8;
      }
      const entity = w.entity;
      if (entity && entity.root) {
        const speed = 1.5 * dt;
        const dx = w.targetX - entity.root.position.x;
        const dz = w.targetZ - entity.root.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0.5) {
          entity.root.position.x += (dx / dist) * speed;
          entity.root.position.z += (dz / dist) * speed;
          entity.root.rotation.y = Math.atan2(dx, dz);
        }
      }
    }

    // 日夜ライティング更新
    this._updateDayNightCycle();

    // パーティクル更新
    if (this.particles) {
      this.particles.update(dt);

      // 環境パーティクル自動生成（モバイル: 6秒、デスクトップ: 3秒）
      const ambientInterval = this._isMobile ? 6 : 3;
      this._ambientTimer = (this._ambientTimer || 0) + dt;
      if (this._ambientTimer >= ambientInterval) {
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
      let def = this._entityDefCache.get(path);
      if (!def) {
        const res = await fetch(assetPath(path));
        def = await res.json();
        this._entityDefCache.set(path, def);
      }
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
    // ================================================================
    // 「森の開けた広場にあるお店」ジオラマ
    //
    //  カメラ: [0, 12, 25] → lookAt [0, 1, -2]  (正面対称構図)
    //
    //  ワールド座標メモ:
    //    Z 大 = カメラ手前 (画面下部)
    //    Z 小 = カメラ奥   (画面上部)
    //    X 正 = 画面右,  X 負 = 画面左
    //
    //  レイヤー:
    //    遠景 (Z: -20~-12) — 大きめの木で森のスカイライン
    //    中景 (Z: -12~-2)  — お店、設備、左右に木
    //    前景 (Z: -2~10)   — 小物、NPC活動域、端に木
    // ================================================================

    // --- お店の建屋 (中央奥) ---
    await this.loadEntity('/presets/RPG_Props/House.json', {
      position: [0, 0, -5],
      scale: 1.0,
    });

    // --- 店の周辺小物 (中景) ---
    await this.loadEntity('/presets/RPG_Props/Barrel.json', {
      position: [4, 0, -1],
      scale: 0.45,
    });
    await this.loadEntity('/presets/RPG_Props/Chest.json', {
      position: [-4, 0, -1],
      scale: 0.5,
      rotation: Math.PI / 6,
    });
    await this.loadEntity('/presets/RPG_Props/Anvil.json', {
      position: [7, 0, -3],
      scale: 0.5,
      rotation: -Math.PI / 4,
    });
    await this.loadEntity('/presets/RPG_Props/Campfire.json', {
      position: [-3, 0, 3],
      scale: 0.5,
    });

    // --- 木: 弧状に配置して「森の中の広場」感を出す ---
    const trees = [
      // 遠景 — 森のスカイライン (大きめ)
      { pos: [-14, -18], scale: 1.1 },
      { pos: [-6,  -20], scale: 1.0 },
      { pos: [4,   -19], scale: 1.1 },
      { pos: [13,  -17], scale: 0.9 },
      // 中景左 — お店の左側
      { pos: [-14, -10], scale: 0.9 },
      { pos: [-18,  -5], scale: 1.0 },
      { pos: [-12,  -3], scale: 0.7 },
      // 中景右 — お店の右側
      { pos: [14,  -10], scale: 0.9 },
      { pos: [18,   -6], scale: 0.8 },
      { pos: [12,   -2], scale: 0.7 },
      // 前景左端 — パノラマ左のフレーミング
      { pos: [-17,   4], scale: 0.9 },
      { pos: [-14,   9], scale: 0.8 },
      // 前景右端 — パノラマ右のフレーミング
      { pos: [16,    3], scale: 0.8 },
      { pos: [14,    8], scale: 0.9 },
      // 遠景端 — パノラマの左右を埋めて途切れ感を消す
      { pos: [-22, -12], scale: 0.8 },
      { pos: [22,  -13], scale: 0.7 },
    ];
    for (const t of trees) {
      await this.loadEntity('/presets/RPG_Props/Pine Tree.json', {
        position: [t.pos[0], 0, t.pos[1]],
        scale: t.scale,
      });
    }

    // --- 岩: アクセント (小さめ、地面に自然に散らす) ---
    const rocks = [
      { pos: [-9,  -8], scale: 0.35 },
      { pos: [10,  -7], scale: 0.3 },
      { pos: [-6,   6], scale: 0.25 },
      { pos: [8,    5], scale: 0.3 },
    ];
    for (const r of rocks) {
      await this.loadEntity('/presets/RPG_Props/Rock.json', {
        position: [r.pos[0], 0, r.pos[1]],
        scale: r.scale,
      });
    }
  }

  async _spawnWanderers() {
    // 広場を歩く村人 1体のみ（シーンをすっきり保つ）
    try {
      const entity = await this.loadEntity('/presets/RPG_Characters/Chibi Human.json', {
        position: [2, 0, 3],
        scale: 0.3,
      });
      if (entity) {
        entity.playAnimation('walk');
        this.wanderers.push({
          entity,
          targetX: 2,
          targetZ: 3,
          timer: Math.random() * 3,
        });
      }
    } catch (e) {
      console.warn('[SceneManager] Wanderer load failed:', e);
    }
  }

  async _onAdventurerReturn(data) {
    // 帰還エフェクト: NPCの同時数を制限
    if (this._returnNpcCount >= 2) return;
    this._returnNpcCount = (this._returnNpcCount || 0) + 1;

    try {
      const npc = await this.loadEntity('/presets/RPG_Characters/Knight.json', {
        position: [20, 0, 2],
        scale: 0.3,
      });
      if (!npc) { this._returnNpcCount--; return; }
      
      npc.playAnimation('walk');
      
      this.returningNpcs.push({
        entity: npc,
        state: 'walking',
        timer: 0,
      });
    } catch (e) {
      this._returnNpcCount--;
      // NPC演出はベストエフォート
    }
  }

  /** ショップ外装進化 — ランクに応じた装飾追加 */
  async _evolveShopExterior(rankData) {
    const rankIndex = rankData?.index;
    if (rankIndex === undefined) return;

    // ランク別の装飾定義 — お店 [0,0,-5] の周囲に配置
    // 広場 (X:-6~6, Z:1~8) は NPC 動線なので避ける
    const decorationsByRank = {
      1: [
        // バナー（看板）を店の入口脇に
        { path: 'Banner.json', pos: [-3, 0, -2], scale: 0.5, rot: 0 },
        { path: 'Banner.json', pos: [3, 0, -2], scale: 0.5, rot: 0 },
        // フェンスで広場を囲む
        { path: 'Fence.json', pos: [-7, 0, 2], scale: 0.4, rot: Math.PI / 2 },
        { path: 'Fence.json', pos: [7, 0, 2], scale: 0.4, rot: Math.PI / 2 },
      ],
      2: [
        // 街灯を対称配置
        { path: 'Street Light.json', pos: [-8, 0, -1], scale: 0.5, rot: 0 },
        { path: 'Street Light.json', pos: [8, 0, -1], scale: 0.5, rot: 0 },
        // 井戸
        { path: 'Well.json', pos: [-8, 0, -6], scale: 0.4, rot: Math.PI / 4 },
      ],
      3: [
        // 庭木を店の裏手に
        { path: 'Tree.json', pos: [-6, 0, -9], scale: 0.6, rot: 0 },
        { path: 'Tree.json', pos: [6, 0, -9], scale: 0.5, rot: 0 },
        // 前方の街灯
        { path: 'Street Light.json', pos: [0, 0, 8], scale: 0.5, rot: 0 },
      ],
      4: [
        // テント（お店横の特設コーナー）
        { path: 'Tent.json', pos: [10, 0, -3], scale: 0.4, rot: -Math.PI / 4 },
        // 装飾バナー
        { path: 'Banner.json', pos: [-6, 0, 5], scale: 0.4, rot: Math.PI / 4 },
        { path: 'Banner.json', pos: [6, 0, 5], scale: 0.4, rot: -Math.PI / 4 },
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
        if (entity && entity.root) {
          const targetY = entity.root.position.y;
          entity.root.position.y = -3;
          entity.root.scale.set(0, 0, 0);

          const startTime = performance.now();
          const animDuration = 800;
          const popAnim = () => {
            const elapsed = performance.now() - startTime;
            const t = Math.min(1, elapsed / animDuration);
            // Ease-out bounce
            const ease = 1 - Math.pow(1 - t, 3);
            entity.root.position.y = -3 + (targetY + 3) * ease;
            entity.root.scale.setScalar(dec.scale * ease);
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
