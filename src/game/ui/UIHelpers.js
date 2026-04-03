/**
 * UIHelpers — UI全体で共有される DOM 生成ユーティリティ
 * 大型カードデザイン・画像対応版
 */
import { ItemBlueprints, TraitDefs } from '../data/items.js';

// ===== 品質ティア定義 =====
const QualityTiers = [
  { name: '粗悪',  min: 0,  max: 20,  css: 'q-poor',      icon: '▪', color: '#888' },
  { name: '普通',  min: 21, max: 40,  css: 'q-common',    icon: '▫', color: '#c8bea7' },
  { name: '良品',  min: 41, max: 60,  css: 'q-fine',      icon: '◆', color: '#7daa68' },
  { name: '優品',  min: 61, max: 80,  css: 'q-excellent', icon: '★', color: '#7ab0c4' },
  { name: '極上',  min: 81, max: 100, css: 'q-legendary', icon: '✦', color: '#e8b84b' },
];

// ===== タイプアイコン・カラー =====
const TypeInfo = {
  material:   { icon: '🪨', label: '素材',       css: 'type-material',   emoji: '🪨' },
  equipment:  { icon: '⚔️', label: '装備',       css: 'type-equipment',  emoji: '⚔️' },
  consumable: { icon: '🧪', label: '消耗品',     css: 'type-consumable', emoji: '🧪' },
  accessory:  { icon: '💎', label: 'アクセサリ', css: 'type-accessory',  emoji: '💎' },
};

export function getQualityTier(quality) {
  return QualityTiers.find(t => quality >= t.min && quality <= t.max) || QualityTiers[0];
}

export function getTypeInfo(type) {
  return TypeInfo[type] || TypeInfo.material;
}

// 特性バッジの色CSSクラス
function traitColorClass(traitName) {
  const def = TraitDefs[traitName];
  return def ? `trait-${def.color}` : '';
}

// アイテムの画像URL（将来のカスタム画像パス対応）
function getItemImageUrl(item) {
  const bp = ItemBlueprints[item.blueprintId];
  if (bp && bp.image) return bp.image;
  return null; // 画像未設定
}

// 画像エリアのHTML（画像がない場合は絵文字プレースホルダ）
function renderImageArea(item, typeInfo) {
  const imageUrl = getItemImageUrl(item);
  if (imageUrl) {
    return `<div class="item-card-image"><img src="${imageUrl}" alt="${item.name}" /></div>`;
  }
  // 絵文字フォールバック
  return `<div class="item-card-image item-card-image-placeholder"><span class="item-card-emoji">${typeInfo.emoji}</span></div>`;
}

/**
 * アイテムインスタンスを DOM カード HTMLとして生成（倉庫用）
 */
export function createItemCardHTML(item) {
  const tier = getQualityTier(item.quality);
  const typeInfo = getTypeInfo(item.type);

  const traitsHtml = item.traits
    .map(t => `<span class="trait-badge ${traitColorClass(t)}">${t}</span>`)
    .join('');

  return `
    <div class="item-card ${tier.css} ${typeInfo.css}">
      ${renderImageArea(item, typeInfo)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${typeInfo.icon}</span>
          <span class="item-type-label">${typeInfo.label}</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${item.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${tier.icon} Q: ${item.quality}</span>
          <span class="item-quality-name">${tier.name}</span>
        </div>
        <div class="item-quality-bar">
          <div class="item-quality-fill" style="width:${item.quality}%"></div>
        </div>
        <div class="item-traits">${traitsHtml}</div>
      </div>
    </div>
  `;
}

/**
 * 売値付きのアイテムカード HTML を生成（お店 陳列用）
 */
export function createShopItemCardHTML(item) {
  const tier = getQualityTier(item.quality);
  const typeInfo = getTypeInfo(item.type);

  const traitsHtml = item.traits
    .map(t => `<span class="trait-badge ${traitColorClass(t)}">${t}</span>`)
    .join('');

  return `
    <div class="item-card ${tier.css} ${typeInfo.css} shop-displayable-card" data-uid="${item.uid}">
      ${renderImageArea(item, typeInfo)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${typeInfo.icon}</span>
          <span class="item-type-label">${typeInfo.label}</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${item.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${tier.icon} Q: ${item.quality}</span>
          <span class="item-card-price">💰 ${item.value}G</span>
        </div>
        <div class="item-quality-bar">
          <div class="item-quality-fill" style="width:${item.quality}%"></div>
        </div>
        <div class="item-traits">${traitsHtml}</div>
        <div class="shop-display-hint">🏪 クリックで陳列</div>
      </div>
    </div>
  `;
}

/**
 * 陳列中アイテムのカード（取り下げボタン付き）
 */
export function createDisplayedItemCardHTML(item) {
  const tier = getQualityTier(item.quality);
  const typeInfo = getTypeInfo(item.type);

  const traitsHtml = item.traits
    .map(t => `<span class="trait-badge ${traitColorClass(t)}">${t}</span>`)
    .join('');

  return `
    <div class="item-card ${tier.css} ${typeInfo.css} displayed-glow" data-uid="${item.uid}">
      ${renderImageArea(item, typeInfo)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${typeInfo.icon}</span>
          <span class="item-type-label">${typeInfo.label}</span>
          <span class="displayed-badge">陳列中</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${item.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${tier.icon} Q: ${item.quality}</span>
          <span class="item-card-price">💰 ${item.value}G</span>
        </div>
        <div class="item-traits">${traitsHtml}</div>
      </div>
    </div>
  `;
}
