---
description: ひだまり森の錬金工房 — AI Agent Context & Rules
---

# ひだまり森の錬金工房 — プロジェクトコンテキスト

## プロジェクト概要

Canvas2D ピクセルアート風サイドビューで構築した錬金工房シミュレーションゲーム。
プレイヤーは素材を集め、アイテムを調合して販売し、冒険者を育て、ボスを倒してランクアップしていく。

## テックスタック

- **ランタイム**: Vanilla JavaScript (ES Modules)
- **描画**: HTML5 Canvas 2D（メインシーン・バトル画面ともに2D）
- **ビルドツール**: Vite
- **アセット**: `public/art/` ゲーム画像

## 必読ドキュメント

**コードを書く前に必ず以下を読むこと:**

1. `docs/BossBattleSystem_Spec.md` — ボスバトルシステム仕様（実装済み）

## プロジェクト構造

```
src/
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
│   ├── CustomerSystem.js        NPC顧客スポーン・購買行動
│   ├── AutoCraftSystem.js       オート調合システム
│   ├── CollectionSystem.js      図鑑システム
│   ├── core/
│   │   ├── EventBus.js          全体イベントバス（publish/subscribe）
│   │   ├── SaveSystem.js        セーブ/ロード（localStorage）
│   │   ├── SoundManager.js      BGM / SE
│   │   └── assetPath.js         アセットパス解決
│   ├── data/
│   │   ├── config.js            GameConfig（全ゲームパラメータ）
│   │   ├── items.js             ItemBlueprints / Recipes / TraitDefs
│   │   ├── areas.js             AreaDefs（エリア・ドロップテーブル・ボス・traitPool）
│   │   ├── adventurers.js       AdventurerDefs / UnlockableAdventurers
│   │   ├── quests.js            クエスト定義
│   │   ├── upgrades.js          ランクアップグレード定義
│   │   └── events.js            ランダムイベント定義
│   └── ui/
│       ├── MainSceneCanvas.js   2Dサイドビュー・メインシーン描画
│       ├── BattleCanvas.js      2Dバトル画面キャンバス描画
│       ├── UIManager.js         メインUI統括・ステータスバー・ランク進捗
│       ├── BattleScreen.js      バトル全画面オーバーレイ
│       ├── BattlePrepScreen.js  バトル準備画面
│       ├── CraftingTab.js       調合タブ・レシピ選択・素材バッジ
│       ├── CraftingPuzzle.js    調合パズルミニゲーム
│       ├── DispatchTab.js       冒険者派遣タブ・成功率バー
│       ├── UpgradeTab.js        ランクアップ・ボス挑戦ボタン
│       ├── ShopTab.js           陳列棚管理
│       ├── InventoryTab.js      インベントリ表示
│       ├── StatsTab.js          統計・実績
│       ├── QuestTab.js          クエストタブ
│       ├── UIHelpers.js         共通HTML生成関数（createItemCardHTML 等）
│       ├── TitleScreen.js       タイトル画面
│       ├── GameOverScreen.js    ゲームオーバー画面
│       ├── TutorialSystem.js    チュートリアル
│       ├── ToastManager.js      トースト通知
│       ├── GameTooltip.js       共通ツールチップ
│       └── SettingsPanel.js     設定パネル
├── styles/
│   ├── _items.css   アイテムカード・品質ランク別ボーダー
│   ├── _battle.css  バトル画面・バフバッジ・パッシブバッジ・スタン演出
│   ├── _tabs.css    各タブUI・成功率バー・素材バッジ
│   └── ...
public/
└── art/items/       ゲーム内アイテム画像
docs/                ドキュメント群
.agent/              AIエージェント向けコンテキスト（このファイル）
```

## 描画の基本

メインシーンとバトル画面はどちらも HTML5 Canvas 2D で描画する。
内部は低解像度ピクセルアートで描画し、CSS の `image-rendering: pixelated` で拡大表示する。

```javascript
// MainSceneCanvas の例
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
// ピクセル単位で矩形描画
ctx.fillRect(x, y, w, h);
```

`requestAnimationFrame` でループし、`document.hidden` の時はスキップする。
イベントは `eventBus.on('customer:arrived', ...)` 等でサブスクライブし、`dispose()` で必ず解除すること。

---

## ゲーム固有ルール

### 1. EventBus のリスナー管理
`eventBus.on()` の戻り値（unsub関数）を必ず保存し、`dispose()` で呼ぶこと。

```javascript
// ✅ 正しいパターン
this._unsub = eventBus.on('day:newDay', () => this._onNewDay());
dispose() { this._unsub?.(); }

// ❌ NG — リスナーが残り続ける
eventBus.on('day:newDay', () => this._onNewDay());
```

### 2. データの変更場所
- アイテム定義・レシピ・特性 → `src/game/data/items.js`
- エリア・ボス・traitPool → `src/game/data/areas.js`
- ゲームパラメータ → `src/game/data/config.js`
- 冒険者定義 → `src/game/data/adventurers.js`

コード内にマジックナンバーを書かず、必ず `GameConfig` から参照すること。

### 3. セーブ形式変更時のルール
`SaveSystem.js` の `SAVE_VERSION` を上げ、`_migrate()` にマイグレーション処理を追加すること。

### 4. BattleSystem のトレイト参照
`TraitDefs` は `src/game/data/items.js` からインポートすること。
`BattleSystem.startBattle()` で装備トレイトのバトル効果（`battleAtk` 等）を計算する。

### 5. dispose() を必ず呼ぶ
ゲームシステムクラスは `dispose()` メソッドで EventBus リスナーを解除すること。
Canvas シーン（MainSceneCanvas / BattleCanvas）は `requestAnimationFrame` を `cancelAnimationFrame` で止めること。

---

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # プロダクションビルド
```
