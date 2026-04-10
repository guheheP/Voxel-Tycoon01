# 仕様書：ボスバトルシステム — ひだまり森の錬金工房

> **✅ 実装完了 (2025-04)**
> 主要コミット: `e2bf16b` (実装), `48a36e9` (修正), `b09e867` (アイテム追加), `f889c60` (特性統合)

---

## 1. 概要・目的

「エリアに派遣して待つ」という既存ループに加え、各エリアのボスを倒すことで次エリアを解放するマイルストーン型の戦闘システムを追加する。  
プレイヤーは「アイテムを使って支援する」という本作固有の役割を担い、冒険者育成・アイテム調合の動機付けを強化する。

---

## 2. ゲームループへの統合

```
エリア探索（素材収集）
    ↓ レベルアップ・装備
冒険者育成
    ↓ 素材 + 調合
アイテム製作
    ↓ 戦闘アイテムを持ち込む
ボスバトル（ATB）
    ↓ 撃破
次エリア解放 → 新素材 → 新レシピ → ランクアップ
```

- ボス挑戦条件: なし（いつでも挑戦可能）  
- 敗北ペナルティ: なし（無限リトライ可）  
- エリアは現状 **1体1ボス** 構成（plains はチュートリアル扱いでボスなし）

---

## 3. データ設計

### 3-1. AreaDefs への追加（`src/game/data/areas.js`）

```js
// 例: cave エリア
cave: {
  // 既存フィールドはそのまま
  ...
  boss: {
    id: 'boss_cave_golem',
    name: '岩窟ゴーレム',
    icon: '🗿',
    preset: 'Golem',          // presets.md 参照（将来の3Dモデル対応）
    maxHp: 240,
    atk: 18,
    def: 8,
    spd: 60,                  // ATBゲージ蓄積速度（100で1秒）
    rewards: {
      unlockArea: 'forest',   // 撃破時に解放するエリアID
      expBonus: 5,            // 参加冒険者全員に与える追加EXP
    },
    phases: [
      { hpThreshold: 0.5, abilityId: 'rage' },  // HP50%以下で怒り状態
    ],
  },
}
```

全ボス一覧（areas.js に追記）:

| エリア | ボスID | 名前 | maxHp | atk | def | spd |
|--------|--------|------|-------|-----|-----|-----|
| cave | boss_cave_golem | 岩窟ゴーレム | 240 | 18 | 8 | 60 |
| forest | boss_forest_treant | 森の番人ツリーアント | 380 | 22 | 12 | 50 |
| volcano | boss_volcano_ifrit | 炎帝イフリート | 520 | 35 | 10 | 80 |
| deep_sea | boss_sea_kraken | 深海の悪魔クラーケン | 680 | 40 | 15 | 70 |
| dragon_nest | boss_elder_dragon | 古竜ヴェルムドラゴ | 900 | 55 | 20 | 65 |
| sky_tower | boss_sky_titan | 天空巨神スカイタイタン | 1100 | 65 | 25 | 75 |
| time_corridor | boss_time_lord | 時を支配する者 | 1400 | 80 | 30 | 90 |

### 3-2. 冒険者ステータスの追加（`src/game/data/adventurers.js`）

```js
// AdventurerDefs・UnlockableAdventurers に追加
{
  id: 'adv_knight',
  // 既存フィールド...
  battle: {
    maxHp: 120,
    atk: 22,
    def: 15,
    spd: 70,           // ATBゲージ速度
    abilityId: 'shield_bash',  // 固有スキル（将来拡張用、初期実装では未使用）
  },
}
```

各冒険者のバトルステータス:

| 冒険者 | maxHp | atk | def | spd | 特徴 |
|--------|-------|-----|-----|-----|------|
| アーサー（騎士）| 120 | 22 | 15 | 70 | バランス型 |
| ロビン（狩人）  | 90  | 28 | 8  | 90 | アタッカー型 |
| リリー（魔女）  | 80  | 35 | 5  | 75 | 高火力・低耐久 |
| キャット（盗賊）| 100 | 25 | 10 | 100 | 高速型 |
| セシル（聖騎士）| 140 | 18 | 20 | 60 | タンク型 |

**実際の戦闘ATB速度はレベルボーナスで加算:**
```
実効spd = 基本spd + (level-1) × 2
```

### 3-3. アイテムの戦闘効果（`src/game/data/items.js`）

`consumable` 型のアイテムに `battleEffect` フィールドを追加:

```js
potion:         { ..., battleEffect: { type: 'heal',     target: 'ally',  value: 40 } },
elixir:         { ..., battleEffect: { type: 'heal',     target: 'ally',  value: 90 } },
stamina_drink:  { ..., battleEffect: { type: 'buff',     target: 'ally',  stat: 'spd', amount: 30, duration: 15 } },
strength_potion:{ ..., battleEffect: { type: 'buff',     target: 'ally',  stat: 'atk', amount: 20, duration: 20 } },
spirit_potion:  { ..., battleEffect: { type: 'buff',     target: 'ally',  stat: 'def', amount: 15, duration: 20 } },
deep_elixir:    { ..., battleEffect: { type: 'heal',     target: 'all',   value: 60 } },
panacea:        { ..., battleEffect: { type: 'healfull', target: 'all' } },
dragon_potion:  { ..., battleEffect: { type: 'buff',     target: 'all',   stat: 'atk', amount: 30, duration: 20 } },
divine_elixir:  { ..., battleEffect: { type: 'revive',   target: 'ally',  value: 50 } },
enchant_scroll: { ..., battleEffect: { type: 'debuff',   target: 'enemy', stat: 'def', amount: -15, duration: 20 } },
```

**`battleEffect` の型定義（全7種）:**

| type | target | 効果 | 追加フィールド |
|------|--------|------|--------------|
| `heal` | ally / all | HP回復 | `value: number` |
| `healfull` | ally / all | HP全回復 | — |
| `revive` | ally | 戦闘不能から復活 | `value: number`（復活HP） |
| `buff` | ally / all | ステータス上昇 | `stat`, `amount`, `duration` |
| `debuff` | enemy | ボスのステータス低下 | `stat`, `amount`, `duration` |
| **`damage`** ✅ NEW | enemy | ボスへの固定ダメージ | `value: number` |
| **`stun`** ✅ NEW | enemy | ボスのATBゲージ停止 | `duration: number`（秒） |

```ts
type BattleEffectTarget = 'ally' | 'all' | 'enemy';
type BattleEffect =
  | { type: 'heal',     target: BattleEffectTarget, value: number }
  | { type: 'healfull', target: BattleEffectTarget }
  | { type: 'revive',   target: BattleEffectTarget, value: number }
  | { type: 'buff',     target: BattleEffectTarget, stat: 'atk'|'def'|'spd', amount: number, duration: number }
  | { type: 'debuff',   target: BattleEffectTarget, stat: 'atk'|'def'|'spd', amount: number, duration: number }
  | { type: 'damage',   target: 'enemy', value: number }   // ✅ 実装済み
  | { type: 'stun',     target: 'enemy', duration: number }; // ✅ 実装済み
```

**実装済みバトルアイテム一覧（全21種）:**

| アイテムID | Rank | 効果 | 素材 |
|-----------|------|------|------|
| herb_tea | 1 | heal ally 20 | ハーブ+花びら |
| potion | 1 | heal ally 40 | ハーブ+スライムゼリー |
| antidote_basic | 1 | buff def+5 (15s) | 虫の殻+スライムゼリー |
| **mud_ball** ✅NEW | 1 | debuff enemy spd-10 (10s) | 粘土+スライムゼリー |
| antidote | 2 | buff def+10 (20s) | ハーブ+毒草 |
| stamina_drink | 2 | buff spd+30 (15s) | キノコ+スライムゼリー |
| **iron_spike** ✅NEW | 2 | damage enemy 35 | 鉄鉱石+骨 |
| elixir | 3 | heal ally 90 | ハーブ+水晶+スライムゼリー |
| strength_potion | 3 | buff atk+20 (20s) | キノコ+妖精の粉 |
| magic_ink | 3 | debuff enemy spd-15 (15s) | 水晶+花びら |
| **weakness_draught** ✅NEW | 3 | debuff enemy atk-20 (20s) | 毒草+キノコ+スライムゼリー |
| spirit_potion | 4 | buff def+15 (20s) | 霊の欠片+ハーブ+妖精の粉 |
| enchant_scroll | 4 | debuff enemy def-15 (20s) | 水晶+妖精の粉+霊の欠片 |
| **thunder_bomb** ✅NEW | 4 | stun enemy 8s | 雷石+溶岩コア |
| deep_elixir | 5 | heal all 60 | 深海の真珠+黒蓮+ハーブ |
| lotus_perfume | 5 | buff all spd+25 (20s) | 黒蓮+花びら+妖精の粉 |
| **revival_herb** ✅NEW | 5 | revive ally HP60 | 黒蓮+霊の欠片+ハーブ |
| sage_stone | 6 | heal all 100 | 水晶+ムーンストーン+霊の欠片 |
| dragon_potion | 6 | buff all atk+30 (20s) | 竜の鱗+黒蓮+火石 |
| divine_elixir | 7 | revive ally HP50 | エーテルの精髄+世界樹の樹液+深海の真珠 |
| panacea | 8 | healfull all | 世界樹の樹液+不死鳥の灰+始原の宝石 |

### 3-4. config.js への追加（`src/game/data/config.js`）✅

```js
bossBattle: {
  atbFillRate: 1.0,         // ATBゲージ基準速度係数
  itemCooldownSeconds: 5,   // アイテム使用後クールダウン（秒）
  // ダメージ = max(1, 攻撃側atk + atkBuff - 防御側def - dmgReduction)
},
```

### 3-5. 特性（トレイト）のバトル統合（`src/game/data/items.js`）✅ NEW

武器に付いたトレイトが `BattleSystem.startBattle()` で冒険者のバトルステータスに反映される。

| TraitDefs エフェクトキー | 効果 | 代表特性 |
|------------------------|------|---------|
| `battleAtk` | ATKボーナス | 攻撃力+1 (+8), 攻撃力+2 (+16), 攻撃力+3 (+28), 武神 (+15) |
| `battleDef` | DEFボーナス | 防御力+1 (+5), 防御力+2 (+10), 防御力+3 (+18), 体力強化 (+3) |
| `battleSpd` | SPDボーナス（ATB充填速度） | 雷撃 (+20), 疾走 (+18), 武神 (+15) |
| `battleHp` | 最大HPボーナス | HP回復+ (+20), HP回復++ (+40), 体力強化 (+30), 不死鳥 (+30) |
| `startAtb` | バトル開始時ATBゲージ初期値（最大50） | 先制 (+25), 疾走 (+15), 武神 (+20) |
| `battleRegen` | 毎秒HP自動回復 | 再生 (+2/秒), 不死鳥 (+4/秒) |
| `battleDmgReduction` | 被ダメージ軽減（固定値） | 鉄壁 (-4), 不死鳥 (-0) |

**BattleState 冒険者オブジェクトへの追加フィールド:**
```js
{
  regen: number,         // 毎秒回復HP（再生・不死鳥トレイト由来）
  dmgReduction: number,  // 被ダメ軽減値（鉄壁トレイト由来）
  atbGauge: number,      // 初期値が 0 でない場合あり（先制・疾走トレイト由来）
}
```

---

## 4. 新規システム設計

### 4-1. BattleSystem（`src/game/BattleSystem.js`）

戦闘ロジック専用クラス。SceneManager・UIとは疎結合。EventBus 経由で状態を通知する。

```js
export class BattleSystem {
  constructor(adventurerSystem, inventorySystem) { ... }

  /** 戦闘開始
   * @param {string} areaId
   * @param {string[]} adventurerIds  参加する冒険者ID（最大5名）
   * @param {object[]} battleItems    持ち込みアイテムインスタンスの配列
   */
  startBattle(areaId, adventurerIds, battleItems) { ... }

  /** ゲームループから毎フレーム呼ぶ（ATBゲージ進行・行動判定）
   * @param {number} dt  デルタ秒
   */
  update(dt) { ... }

  /** プレイヤーがアイテムを使用
   * @param {string} itemUid       使用するアイテムのUID
   * @param {string|null} targetAdvId  対象冒険者ID（heal/buff時）
   */
  useItem(itemUid, targetAdvId = null) { ... }

  /** 現在の戦闘状態を返す → UIが参照 */
  getState() { ... }  // → BattleState

  dispose() { this._unsub?.(); }
}
```

**BattleState オブジェクト:**
```js
{
  phase: 'idle' | 'fighting' | 'win' | 'lose',
  boss: {
    id, name, icon, hp, maxHp,
    atkGauge: 0~100,   // ATBゲージ現在値
    activeBuffs: [],   // [{ stat, amount, remainingSec }]
  },
  adventurers: [{
    id, name, icon,
    hp, maxHp,
    atbGauge: 0~100,
    status: 'active' | 'dead',
    activeBuffs: [],
  }],
  log: [{ time, message }],   // 最新30件
}
```

**発火する EventBus イベント:**

| イベント | タイミング | ペイロード |
|---------|-----------|----------|
| `battle:start`  | 戦闘開始時 | `BattleState` |
| `battle:tick`   | 毎フレーム | `BattleState` |
| `battle:win`    | 勝利時 | `{ rankIndex }` |
| `battle:lose`   | 敗北時 | `{ reason: 'wipeout' \| 'flee' }` |
| `battle:command` | プレイヤー操作 | `{ action: 'useItem', uid } \| { action: 'flee' }` |
| `battle:se:heal` / `:buff` / `:debuff` / `:revive` / `:damage` / `:stun` | SE発火用 | — |
| `battle:requestStart` | UpgradeTabからボス挑戦開始要求 | `{ rankIndex, bossId }` |

### 4-2. main.js への統合（`src/game/main.js`）

```js
eventBus.on('battle:win', ({ areaId }) => {
  const boss = AreaDefs[areaId]?.boss;
  const unlockAreaId = boss?.rewards?.unlockArea;
  if (unlockAreaId && AreaDefs[unlockAreaId]) {
    AreaDefs[unlockAreaId].unlocked = true;
    saveData.defeatedBosses.push(areaId);
    eventBus.emit('area:unlocked', { areaId: unlockAreaId });
  }
});
```

---

## 5. UI設計

### 5-1. バトル画面（`src/game/ui/BattleScreen.js`）

全画面オーバーレイ（既存 UIManager の上に重ねる）として実装。  
バトル中は DayCycleSystem の時間進行を一時停止（`game:pause` イベントを利用）。

```
┌──────────────────────────────────────────────────────────┐
│  [逃げる ✕]                                               │
│                                                          │
│         ┌───────────────────────────────┐                │
│         │   ボスアイコン / 3Dモデル      │                │
│         │   🗿 岩窟ゴーレム              │                │
│         │   HP ████████████░░░░ 180/240 │                │
│         │   ATB ░░░░░░░░░░░░░░░░        │                │
│         └───────────────────────────────┘                │
│                                                          │
│  ── 冒険者陣営 ──────────────────────────────────────    │
│  ┌────────┐  ┌────────┐  ┌────────┐                      │
│  │🛡️ アーサー│  │🏹 ロビン│  │🧙 リリー│                      │
│  │HP ██░░ │  │HP ████ │  │HP █░░░ │                      │
│  │ATB ███░│  │ATB ███░│  │ATB ██░░│                      │
│  └────────┘  └────────┘  └────────┘                      │
│                                                          │
│  ── アイテムスロット ────────────────────────────────    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │🧪 回復薬  │ │💪 活力薬 │ │  （空）  │ │  （空）  │    │
│  │  [使う]  │ │  [使う]  │ │          │ │          │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
│                                                          │
│  ── バトルログ ──────────────────────────────────────    │
│  アーサーがゴーレムに 17 ダメージ！                       │
│  ゴーレムの一撃！ アーサーに 12 ダメージ。                │
└──────────────────────────────────────────────────────────┘
```

**アイテム使用フロー:**
1. アイテムの「使う」ボタンをクリック
2. `heal`/`buff`（`target: 'ally'`）→ 対象選択モードに入り、冒険者カードをクリックして発動
3. `heal`/`buff`（`target: 'all'`）または `debuff`（`target: 'enemy'`）→ 即時発動
4. 使用後はインベントリから消費し、スロットは空に

### 5-2. 戦闘前の準備画面

バトル画面の前に「アイテム持ち込み & 参加冒険者確認」画面を挟む:
- 現在パーティ全員が自動参加（選択不可、将来拡張で選択制）
- インベントリからアイテムを最大4スロットにドラッグまたはクリックで装填
- 「出撃」ボタンで battleItems を確定し `BattleSystem.startBattle()` を呼ぶ

### 5-3. DispatchTab への追加（`src/game/ui/DispatchTab.js`）

各エリアカードに討伐状態を表示:

```html
<!-- 未討伐 -->
<button class="boss-btn boss-btn--challenge">⚔ ボス討伐</button>

<!-- 討伐済 -->
<span class="boss-btn boss-btn--cleared">✓ 討伐済</span>
```

ボタンクリック → UIManager 経由でバトル準備画面を開く。

---

## 6. セーブデータ変更

**バージョン: v4 → v5**

```js
// 追加フィールドのみ
defeatedBosses: [],   // 撃破済みエリアIDの配列 例: ['cave', 'forest']
```

マイグレーション（SaveSystem.js）:
```js
case 4:  // v4 → v5
  data.defeatedBosses = [];
  data.version = 5;
  // fallthrough
```

ロード時に `defeatedBosses` に含まれるエリアのボスを撃破済み扱いにし、対応する `unlockArea` を解放する。

---

## 7. 実装ステップ（推奨順序）

| # | 作業 | ファイル |
|---|------|---------|
| 1 | データ追加 | `areas.js` / `adventurers.js` / `items.js` / `config.js` |
| 2 | BattleSystem 実装 | `src/game/BattleSystem.js`（新規） |
| 3 | main.js 統合 | `src/game/main.js` |
| 4 | SaveSystem 対応 | `src/game/core/SaveSystem.js` |
| 5 | BattleScreen UI | `src/game/ui/BattleScreen.js`（新規） |
| 6 | DispatchTab 修正 | `src/game/ui/DispatchTab.js` |

---

## 8. スコープ外（将来課題）

- ボスの3Dモデル表示（`presets.md` / Boxel Voxel Engine 使用）
- ~~攻撃アイテム（爆弾・魔法攻撃系）~~ ✅ `damage` / `stun` エフェクトとして実装済み
- ボス固有スキルの演出（フェーズ移行アニメーション）
- 複数ウェーブ型ボス
- ~~バトルBGM / SE~~ ✅ プロシージャルサウンドマネージャにて実装済み
- 参加冒険者の選択制
- PvP / マルチボス

---

## 9. 検証チェックリスト

1. `npm run dev` で起動、コンソールエラーなし
2. DispatchTab → cave エリアに「ボス討伐」ボタンが表示される
3. 準備画面でアイテムをスロットにセットできる
4. バトル画面が開き、ATBゲージがリアルタイムで進行する
5. 冒険者が自動攻撃し、ボス HP が減る
6. ポーションを使うと対象冒険者の HP が回復する
7. バフアイテムを使うと冒険者カードにバフアイコンが表示される
8. ボスを倒すと「次のエリア解放」トースト + DispatchTab に新エリアが出現
9. セーブ → ロード → 討伐済みフラグが維持され、エリアが解放されたまま
10. 敗北（全冒険者 HP=0）→ ペナルティなし、再挑戦ボタンから再開可能
