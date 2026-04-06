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
      // お客さんNPC: 来店/退店の3D演出
      this._customerNpcs = [];     // { id, entity, state, timer, targetZ }
      this._customerNpcCount = 0;
      this._customerModels = [
        '/presets/RPG_Characters/Chibi Human.json',
        '/presets/RPG_Characters/Archer.json',
        '/presets/RPG_Characters/Knight.json',
        '/presets/RPG_Characters/Mage.json',
      ];

      eventBus.on('customer:arrived', (d) => this._onCustomerArrived(d));
      eventBus.on('customer:bought', (d) => this._onCustomerLeft(d.customer.id));
      eventBus.on('customer:left', (d) => this._onCustomerLeft(d.customer.id));

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

    // 来客NPC の動き
    for (let i = this._customerNpcs.length - 1; i >= 0; i--) {
      const cn = this._customerNpcs[i];
      const npc = cn.entity;
      if (!npc || !npc.root) {
        this._customerNpcs.splice(i, 1);
        this._customerNpcCount--;
        continue;
      }

      if (cn.state === 'arriving') {
        // 手前 (Z大) から店の前 (targetZ) に向かって歩く
        const speed = 3.0 * dt;
        const dz = cn.targetZ - npc.root.position.z;
        if (Math.abs(dz) > 0.3) {
          npc.root.position.z += Math.sign(dz) * speed;
          npc.root.rotation.y = Math.PI; // カメラに背を向けて (奥へ歩く)
        } else {
          cn.state = 'browsing';
          npc.playAnimation('idle');
          // 店の方を向く
          npc.root.rotation.y = 0;
        }
      } else if (cn.state === 'leaving') {
        // 手前 (Z大) に向かって歩いて退場
        const speed = 4.0 * dt;
        npc.root.position.z += speed;
        npc.root.rotation.y = 0; // カメラの方を向いて歩く
        if (npc.root.position.z > 18) {
          this._removeCustomerNpc(i);
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

    // --- 森: 拠点の周囲を深い森で囲む ---
    // 「ひだまり森の錬金工房」— 拠点の開けた広場 (X:-8~8, Z:-2~8) 以外を
    // 松と広葉樹で密に埋めて、森の中に工房がある雰囲気を出す
    //
    // P = Pine Tree, T = Tree (広葉樹)
    const trees = [
      // ── 遠景 (Z: -25~-14) — 奥の森のスカイライン、密に ──
      { pos: [-24, -24], scale: 1.0, type: 'P' },
      { pos: [-16, -22], scale: 1.1, type: 'P' },
      { pos: [-8,  -24], scale: 0.9, type: 'T' },
      { pos: [-2,  -22], scale: 1.0, type: 'P' },
      { pos: [5,   -23], scale: 1.1, type: 'P' },
      { pos: [12,  -21], scale: 0.9, type: 'T' },
      { pos: [20,  -22], scale: 1.0, type: 'P' },
      { pos: [-20, -18], scale: 0.8, type: 'T' },
      { pos: [-12, -19], scale: 1.0, type: 'P' },
      { pos: [0,   -18], scale: 0.9, type: 'T' },
      { pos: [8,   -19], scale: 1.0, type: 'P' },
      { pos: [16,  -18], scale: 0.8, type: 'P' },
      { pos: [24,  -20], scale: 0.9, type: 'T' },
      // 2列目
      { pos: [-22, -15], scale: 0.9, type: 'P' },
      { pos: [-14, -16], scale: 1.1, type: 'P' },
      { pos: [-6,  -17], scale: 0.8, type: 'T' },
      { pos: [3,   -16], scale: 0.9, type: 'P' },
      { pos: [10,  -15], scale: 1.0, type: 'T' },
      { pos: [18,  -16], scale: 0.9, type: 'P' },

      // ── お店裏の森 (Z: -14~-8) — 建屋の後ろを埋める ──
      { pos: [-18, -12], scale: 0.9, type: 'P' },
      { pos: [-10, -11], scale: 0.8, type: 'T' },
      { pos: [10,  -12], scale: 0.8, type: 'T' },
      { pos: [16,  -11], scale: 0.9, type: 'P' },
      { pos: [-14,  -8], scale: 0.7, type: 'P' },
      { pos: [14,   -9], scale: 0.7, type: 'P' },

      // ── 左の森 (X: -12~-35) — 左サイドを広く密に ──
      { pos: [-16,  -5], scale: 1.0, type: 'P' },
      { pos: [-20,  -2], scale: 0.9, type: 'T' },
      { pos: [-14,   0], scale: 0.8, type: 'P' },
      { pos: [-18,   3], scale: 0.9, type: 'T' },
      { pos: [-22,   1], scale: 1.0, type: 'P' },
      { pos: [-15,   6], scale: 0.8, type: 'P' },
      { pos: [-20,   7], scale: 0.9, type: 'T' },
      { pos: [-12,   9], scale: 0.7, type: 'T' },
      { pos: [-17,  11], scale: 0.9, type: 'P' },
      { pos: [-24,   5], scale: 0.8, type: 'P' },
      { pos: [-26,  -3], scale: 1.0, type: 'T' },
      // 左の奥行き追加
      { pos: [-28,  -8], scale: 0.9, type: 'P' },
      { pos: [-30,   0], scale: 1.0, type: 'P' },
      { pos: [-27,   4], scale: 0.8, type: 'T' },
      { pos: [-32,  -4], scale: 0.9, type: 'T' },
      { pos: [-25,   9], scale: 0.8, type: 'P' },
      { pos: [-30,   7], scale: 1.0, type: 'P' },
      { pos: [-22,  12], scale: 0.7, type: 'T' },
      { pos: [-28,  11], scale: 0.9, type: 'P' },

      // ── 右の森 (X: 12~35) — 右サイドを広く密に ──
      { pos: [16,   -5], scale: 0.9, type: 'P' },
      { pos: [20,   -2], scale: 1.0, type: 'T' },
      { pos: [14,    0], scale: 0.8, type: 'P' },
      { pos: [18,    3], scale: 0.9, type: 'P' },
      { pos: [22,    1], scale: 0.8, type: 'T' },
      { pos: [15,    6], scale: 0.7, type: 'T' },
      { pos: [20,    7], scale: 0.9, type: 'P' },
      { pos: [13,    9], scale: 0.8, type: 'P' },
      { pos: [17,   11], scale: 0.9, type: 'T' },
      { pos: [24,    4], scale: 0.8, type: 'P' },
      { pos: [26,   -4], scale: 1.0, type: 'P' },
      // 右の奥行き追加
      { pos: [28,   -8], scale: 0.9, type: 'P' },
      { pos: [30,    0], scale: 1.0, type: 'T' },
      { pos: [27,    4], scale: 0.8, type: 'P' },
      { pos: [32,   -4], scale: 0.9, type: 'T' },
      { pos: [25,    9], scale: 0.8, type: 'P' },
      { pos: [30,    7], scale: 1.0, type: 'P' },
      { pos: [22,   12], scale: 0.7, type: 'T' },
      { pos: [28,   11], scale: 0.9, type: 'P' },

      // ── 手前 — 左右端だけ軽く (中央は開けたまま) ──
      { pos: [-22,  14], scale: 0.8, type: 'P' },
      { pos: [-28,  13], scale: 0.9, type: 'T' },
      { pos: [22,   14], scale: 0.8, type: 'P' },
      { pos: [28,   13], scale: 0.9, type: 'T' },
    ];

    for (const t of trees) {
      const path = t.type === 'T'
        ? '/presets/RPG_Props/Tree.json'
        : '/presets/RPG_Props/Pine Tree.json';
      await this.loadEntity(path, {
        position: [t.pos[0], 0, t.pos[1]],
        scale: t.scale,
      });
    }

    // --- 岩: 森の地面にアクセント ---
    const rocks = [
      { pos: [-9,  -8],  scale: 0.35 },
      { pos: [10,  -7],  scale: 0.3 },
      { pos: [-6,   6],  scale: 0.25 },
      { pos: [8,    5],  scale: 0.3 },
      { pos: [-16, -14], scale: 0.4 },
      { pos: [18,  -10], scale: 0.35 },
      { pos: [-20,   8], scale: 0.3 },
      { pos: [22,    8], scale: 0.3 },
    ];
    for (const r of rocks) {
      await this.loadEntity('/presets/RPG_Props/Rock.json', {
        position: [r.pos[0], 0, r.pos[1]],
        scale: r.scale,
      });
    }
  }

  /** お客さん来店 — 手前からお店に向かって歩く */
  async _onCustomerArrived(data) {
    if (this._customerNpcCount >= 2) return; // 同時最大2体
    this._customerNpcCount++;

    try {
      const modelPath = this._customerModels[
        Math.floor(Math.random() * this._customerModels.length)
      ];
      // ランダムな X 位置 (-5 ~ 5) から登場、Z=16 (カメラ手前の画面外) から歩く
      const spawnX = -5 + Math.random() * 10;
      const npc = await this.loadEntity(modelPath, {
        position: [spawnX, 0, 16],
        scale: 0.3,
      });
      if (!npc) { this._customerNpcCount--; return; }

      npc.playAnimation('walk');
      this._customerNpcs.push({
        id: data.customer.id,
        entity: npc,
        state: 'arriving',       // arriving → browsing → leaving
        targetZ: 2 + Math.random() * 4, // お店の前 Z:2~6 に到着
        timer: 0,
      });
    } catch (e) {
      this._customerNpcCount--;
    }
  }

  /** お客さん退店 — 購入/タイムアウトで手前に歩いて去る */
  _onCustomerLeft(customerId) {
    const cn = this._customerNpcs.find(c => c.id === customerId);
    if (cn && cn.state !== 'leaving') {
      cn.state = 'leaving';
      if (cn.entity) cn.entity.playAnimation('walk');
    }
  }

  /** 来客NPCのクリーンアップ */
  _removeCustomerNpc(index) {
    const cn = this._customerNpcs[index];
    if (cn.entity) {
      cn.entity.root.visible = false;
      const idx = this.entities.indexOf(cn.entity);
      if (idx !== -1) this.entities.splice(idx, 1);
      cn.entity.removeFrom(this.scene);
      cn.entity.dispose();
    }
    this._customerNpcs.splice(index, 1);
    this._customerNpcCount--;
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
