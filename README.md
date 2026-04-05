# 🌿 ひだまり森の錬金工房

Three.js ベースのボクセルレンダリングエンジンで構築した、錬金工房シミュレーションゲーム。
素材を集め、アイテムを調合し、冒険者を育て、ボスを倒して店を大きくしていこう。

## クイックスタート

```bash
npm install
npm run dev
```

http://localhost:3000 で起動します。

---

## 実装済み機能

### 🛒 ショップ経営
- 8段階ランクアップシステム（駆け出しの店 → 伝説のアイテム工房）
- 陳列棚に商品を並べてNPC顧客に自動販売
- 評判・売上・クエスト達成によるランク昇格
- 日替わりランダムイベント、クエスト

### ⚗️ 調合システム
- 素材から装備・消耗品・アクセサリを調合（21種の消耗品を含む全80+レシピ）
- 調合パズルミニゲームによる品質ボーナス
- 素材の特性（トレイト）を引き継ぐシステム（最大3スロット）

### 👥 冒険者システム
- 5名の冒険者（騎士アーサー、狩人ロビン、魔女リリー、盗賊キャット、聖騎士セシル）
- 8エリアへの探索派遣（平原〜時の回廊）
- 装備による探索ボーナス、レベルアップ・EXP成長

### ⚔️ ボスバトルシステム（ATB方式）
- 各エリアにボスが1体存在（7体）
- 冒険者がATBゲージで自動攻撃
- プレイヤーは調合したアイテムをリアルタイムで使用して支援
- 7種のバトルエフェクト: `heal / healfull / revive / buff / debuff / damage / stun`
- ボス撃破で次エリア解放 → 新素材 → 新レシピ → ランクアップ

### ✨ 特性（トレイト）システム
- 34種の特性（コモン〜レジェンダリー）
- 探索系: 成功率・速度・ドロップ数ボーナス
- バトル系: ATK/DEF/SPD/HP強化・先制・再生・ダメージ軽減
- 装備した武器のトレイトがバトル開始時にパッシブ反映

### 🎨 UI
- 品質ランク別アイテムカード（ボーダーカラー）
- 調合タブ素材所持数バッジ
- 派遣成功率グラデーションバー
- バトル中バフ/デバフ・パッシブバッジ表示

---

## 構造

```
src/
├── engine/          ⛔ ボクセルレンダリングエンジン（変更禁止）
├── game/
│   ├── main.js              ゲームエントリポイント
│   ├── BattleSystem.js      ボスバトルロジック（ATB）
│   ├── AdventurerSystem.js  冒険者・探索管理
│   ├── DayCycleSystem.js    日サイクル・ランクアップ管理
│   ├── InventorySystem.js   インベントリ管理
│   ├── ItemSystem.js        調合・アイテム生成
│   ├── ShopSystem.js        販売・顧客処理
│   ├── QuestSystem.js       クエスト進捗管理
│   ├── ReputationSystem.js  評判システム
│   ├── StatsTracker.js      統計追跡
│   ├── core/                EventBus / SaveSystem / AssetLoader
│   ├── data/                config.js / items.js / areas.js / adventurers.js 等
│   └── ui/                  UIManager / BattleScreen / CraftingTab / DispatchTab 等
├── styles/          CSS（_items.css / _battle.css / _tabs.css 等）
public/
├── presets/         ボクセルエンティティJSON（30種+）
└── art/             ゲーム内アイテム画像
docs/
├── BossBattleSystem_Spec.md  ボスバトル仕様書
├── BossBattleSystem_Concept.md  企画書
├── engine-api.md    エンジンAPI（VoxelEntity / AnimationController）
├── entity-format.md  エンティティJSONフォーマット仕様
└── presets.md       利用可能プリセットカタログ
.agent/
└── instructions.md  AIエージェント向けコンテキスト
```

---

## ドキュメント

| ドキュメント | 内容 |
|-------------|------|
| [BossBattleSystem_Spec.md](docs/BossBattleSystem_Spec.md) | ボスバトル仕様・バトルアイテム・特性統合 |
| [engine-api.md](docs/engine-api.md) | VoxelEntity & AnimationController API |
| [entity-format.md](docs/entity-format.md) | エンティティJSON フォーマット仕様 |
| [presets.md](docs/presets.md) | 利用可能プリセット一覧（40種+） |

---

## テックスタック

- **ランタイム**: Vanilla JavaScript (ES Modules)
- **3Dエンジン**: Three.js v0.172+
- **ビルドツール**: Vite 6
