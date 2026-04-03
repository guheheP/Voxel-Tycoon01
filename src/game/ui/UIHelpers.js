/**
 * UIHelpers — UI全体で共有される DOM 生成ユーティリティ
 * 品質ティア・タイプアイコン・特性カラー対応版
 */
import { TraitDefs } from '../data/items.js';

// ===== 品質ティア定義 =====
const QualityTiers = [
  { name: '粗悪',  min: 0,  max: 20,  css: 'q-poor',      icon: '▪' },
  { name: '普通',  min: 21, max: 40,  css: 'q-common',    icon: '▫' },
  { name: '良品',  min: 41, max: 60,  css: 'q-fine',      icon: '◆' },
  { name: '優品',  min: 61, max: 80,  css: 'q-excellent', icon: '★' },
  { name: '極上',  min: 81, max: 100, css: 'q-legendary', icon: '✦' },
];

// ===== タイプアイコン・カラー =====
const TypeInfo = {
  material:   { icon: '🪨', label: '素材',       css: 'type-material' },
  equipment:  { icon: '⚔️', label: '装備',       css: 'type-equipment' },
  consumable: { icon: '🧪', label: '消耗品',     css: 'type-consumable' },
  accessory:  { icon: '💎', label: 'アクセサリ', css: 'type-accessory' },
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

/**
 * アイテムインスタンスを DOM カード HTMLとして生成
 */
export function createItemCardHTML(item) {
  const tier = getQualityTier(item.quality);
  const typeInfo = getTypeInfo(item.type);

  const traitsHtml = item.traits
    .map(t => `<span class="trait-badge ${traitColorClass(t)}">${t}</span>`)
    .join('');

  return `
    <div class="item-card ${tier.css} ${typeInfo.css}">
      <div class="item-card-type-strip">
        <span class="item-type-icon">${typeInfo.icon}</span>
        <span class="item-type-label">${typeInfo.label}</span>
      </div>
      <div class="item-card-header">
        <span class="item-name">${item.name}</span>
        <span class="item-quality">${tier.icon} Q: ${item.quality}</span>
      </div>
      <div class="item-quality-bar">
        <div class="item-quality-fill" style="width:${item.quality}%"></div>
      </div>
      <div class="item-traits">${traitsHtml}</div>
    </div>
  `;
}

/**
 * 売値付きのアイテムカード HTML を生成（お店用）
 */
export function createShopItemCardHTML(item) {
  const tier = getQualityTier(item.quality);
  const typeInfo = getTypeInfo(item.type);

  return `
    <div class="item-card ${tier.css} ${typeInfo.css}">
      <div class="item-card-type-strip">
        <span class="item-type-icon">${typeInfo.icon}</span>
        <span class="item-type-label">${typeInfo.label}</span>
      </div>
      <div class="item-card-header">
        <span class="item-name">${item.name}</span>
        <span class="item-quality">${tier.icon} ${item.value}G</span>
      </div>
      <div class="item-quality-bar">
        <div class="item-quality-fill" style="width:${item.quality}%"></div>
      </div>
      <button class="btn btn-display-item" data-uid="${item.uid}">🏪 お店に出す</button>
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
    <div class="item-card ${tier.css} ${typeInfo.css} displayed-glow">
      <div class="item-card-type-strip">
        <span class="item-type-icon">${typeInfo.icon}</span>
        <span class="item-type-label">${typeInfo.label}</span>
      </div>
      <div class="item-card-header">
        <span class="item-name">${item.name}</span>
        <span class="item-quality">${tier.icon} ${item.value}G</span>
      </div>
      <div class="item-traits">${traitsHtml}</div>
    </div>
  `;
}
