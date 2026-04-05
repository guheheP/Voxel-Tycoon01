---
description: ひだまり森の錬金工房 — AI Agent Context & Rules
---

# ひだまり森の錬金工房 — プロジェクトコンテキスト

## プロジェクト概要

Three.js ベースのカスタム **ボクセルレンダリングエンジン** で構築した錬金工房シミュレーションゲーム。
プレイヤーは素材を集め、アイテムを調合して販売し、冒険者を育て、ボスを倒してランクアップしていく。

## テックスタック

- **ランタイム**: Vanilla JavaScript (ES Modules)
- **3Dエンジン**: Three.js (v0.172+)
- **ビルドツール**: Vite
- **アセット**: `public/presets/` ボクセルエンティティJSON、`public/art/` ゲーム画像

## 必読ドキュメント

**コードを書く前に必ず以下を読むこと:**

1. `docs/engine-api.md` — VoxelEntity & AnimationController API リファレンス
2. `docs/entity-format.md` — エンティティJSONフォーマット仕様
3. `docs/presets.md` — 利用可能なプリセット全カタログ + コード例
4. `docs/BossBattleSystem_Spec.md` — ボスバトルシステム仕様（実装済み）

## プロジェクト構造

```
src/
├── engine/                      ⛔ 変更禁止 — ボクセルエンジン
│   ├── VoxelEntity.js
│   └── AnimationController.js
├── game/                        ✅ ゲームロジック（ここに実装する）
│   ├── main.js                  エントリポイント・システム初期化・ゲームループ
│   ├── BattleSystem.js          ボスバトルロジック（ATB方式）
│   ├── AdventurerSystem.js      冒険者管理・探索・ドロップ処理
│   ├── DayCycleSystem.js        日サイクル・ランクアップ・ボス解放フラグ管理
│   ├── InventorySystem.js       インベントリ管理
│   ├── ItemSystem.js            調合（craftItem）・アイテムインスタンス生成
│   ├── ShopSystem.js            陳列・販売・顧客処理
│   ├── QuestSystem.js           クエスト進捗追跡
│   ├── ReputationSystem.js      評判ポイント管理
│   ├── RandomEventSystem.js     日替わりランダムイベント
│   ├── StatsTracker.js          統計・実績管理
│   ├── ParticleSystem.js        パーティクルエフェクト
│   ├── SceneManager.js          Three.jsシーン・カメラ管理
│   ├── CustomerSystem.js        NPC顧客スポーン・購買行動
│   ├── core/
│   │   ├── EventBus.js          全体イベントバス（publish/subscribe）
│   │   ├── SaveSystem.js        セーブ/ロード（localStorage、現バージョン v5）
│   │   └── assetPath.js         アセットパス解決
│   ├── data/
│   │   ├── config.js            GameConfig（全ゲームパラメータ）
│   │   ├── items.js             ItemBlueprints / Recipes / TraitDefs
│   │   ├── areas.js             AreaDefs（エリア・ドロップテーブル・ボス・traitPool）
│   │   ├── adventurers.js       AdventurerDefs / UnlockableAdventurers
│   │   ├── quests.js            クエスト定義
│   │   ├── upgrades.js          ランクアップグレード定義
│   │   ├── customers.js         顧客タイプ定義
│   │   └── events.js            ランダムイベント定義
│   └── ui/
│       ├── UIManager.js         メインUI統括・ステータスバー・ランク進捗
│       ├── BattleScreen.js      バトル全画面オーバーレイ・パッシブバッジ表示
│       ├── CraftingTab.js       調合タブ・レシピ選択・素材バッジ
│       ├── CraftingPuzzle.js    調合パズルミニゲーム
│       ├── DispatchTab.js       冒険者派遣タブ・成功率バー
│       ├── UpgradeTab.js        ランクアップ・ボス挑戦ボタン
│       ├── ShopTab.js           陳列棚管理
│       ├── InventoryTab.js      インベントリ表示
│       ├── StatsTab.js          統計・実績
│       ├── UIHelpers.js         共通HTML生成関数（createItemCardHTML 等）
│       ├── TitleScreen.js       タイトル画面
│       ├── GameOverScreen.js    ゲームオーバー画面
│       ├── TutorialSystem.js    チュートリアル
│       ├── ToastManager.js      トースト通知
│       └── SettingsPanel.js     設定パネル
├── styles/
│   ├── _items.css   アイテムカード・品質ランク別ボーダー
│   ├── _battle.css  バトル画面・バフバッジ・パッシブバッジ・スタン演出
│   ├── _tabs.css    各タブUI・成功率バー・素材バッジ
│   └── ...
public/
├── presets/         ボクセルエンティティJSON（40種+）
└── art/items/       ゲーム内アイテム画像
docs/                ドキュメント群
.agent/              AIエージェント向けコンテキスト（このファイル）
```

## エンジン基本操作（変更なし）

```javascript
import { VoxelEntity } from '../engine/VoxelEntity.js';

const def = await fetch('/presets/RPG_Characters/Knight.json').then(r => r.json());
const knight = new VoxelEntity(def, { position: [0, 0, 0], scale: 0.6 });
knight.addTo(scene);
knight.playAnimation('walk');
knight.update(dt);       // ⚠ 毎フレーム必須
knight.removeFrom(scene);
knight.dispose();        // ⚠ 削除時必須（GPU メモリリーク防止）
```

---

## ゲーム固有ルール

### 1. `src/engine/` は変更禁止
エンジンは別プロジェクトと共有のテスト済みコード。変更しないこと。

### 2. EventBus のリスナー管理
`eventBus.on()` の戻り値（unsub関数）を必ず保存し、`dispose()` で呼ぶこと。

```javascript
// ✅ 正しいパターン
this._unsub = eventBus.on('day:newDay', () => this._onNewDay());
dispose() { this._unsub?.(); }

// ❌ NG — リスナーが残り続ける
eventBus.on('day:newDay', () => this._onNewDay());
```

### 3. データの変更場所
- アイテム定義・レシピ・特性 → `src/game/data/items.js`
- エリア・ボス・traitPool → `src/game/data/areas.js`
- ゲームパラメータ → `src/game/data/config.js`
- 冒険者定義 → `src/game/data/adventurers.js`

コード内にマジックナンバーを書かず、必ず `GameConfig` から参照すること。

### 4. セーブ形式変更時のルール
`SaveSystem.js` の `SAVE_VERSION` を上げ、`_migrate()` にマイグレーション処理を追加すること。
現在のバージョン: **v5**

### 5. BattleSystem のトレイト参照
`TraitDefs` は `src/game/data/items.js` からインポートすること。
`BattleSystem.startBattle()` で装備トレイトのバトル効果（`battleAtk` 等）を計算する。

### 6. dispose() を必ず呼ぶ
VoxelEntity を削除する時は **必ず** `entity.dispose()` を呼ぶこと。
ゲームシステムクラスも同様に `dispose()` メソッドでEventBusリスナーを解除すること。

---

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # プロダクションビルド
```
