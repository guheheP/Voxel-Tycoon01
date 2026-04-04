/**
 * ToastManager — 画面右下にスタック表示される通知システム
 */
import { eventBus } from '../core/EventBus.js';
import { ItemBlueprints } from '../data/items.js';
import { assetPath } from '../core/assetPath.js';

const MAX_ITEM_ICONS = 5;

export class ToastManager {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);

    // イベント購読
    eventBus.on('item:sold',        (d) => this.show(`${d.item.name} が ${d.price || d.item.value}G で売れました！`, 'gold'));
    eventBus.on('adventurer:return', (d) => this._showAdventurerReturn(d));
    eventBus.on('day:newDay',       (d) => this.show(`${d.day}日目 — 維持費 ${d.rent}G を支払いました`, 'default'));
    eventBus.on('rank:up',          (d) => this.show(`🎉 ランクアップ！ ${d.rank}`, 'special'));
    eventBus.on('recipe:unlocked',  (d) => this.show(`📜 新レシピ解放: ${d.name}`, 'green'));
    eventBus.on('area:unlocked',    (d) => this.show(`🗺️ 新エリア解放: ${d.name}`, 'green'));
    eventBus.on('customer:arrived', (d) => this.show(`${d.customer.icon} ${d.customer.name}が来店！「${d.customer.dialogue}」`, 'default'));
    eventBus.on('customer:left',    (d) => this.show(`${d.customer.name}は帰ってしまった…`, 'red'));
    eventBus.on('customer:bought',  (d) => this.show(`${d.customer.name}が ${d.item.name} を購入！`, 'gold'));
    eventBus.on('adventurer:levelUp', (d) => this.show(`⬆️ ${d.adventurer.name} が Lv.${d.adventurer.level} になった！`, 'special'));
    eventBus.on('adventurer:joined',  (d) => this.show(`🆕 ${d.adventurer.name} が仲間に加わった！`, 'special'));
    eventBus.on('event:triggered',    (d) => this.show(`${d.icon} ${d.name}：${d.description}`, 'special'));
  }

  /**
   * 冒険者帰還トースト — アイテムアイコン付き
   */
  _showAdventurerReturn(d) {
    const items = d.items || [];
    const advName = d.adventurer?.name || '冒険者';

    // テキスト部分
    const textEl = document.createElement('div');
    textEl.className = 'toast-text';
    textEl.textContent = `${advName} が帰還！ ${items.length}個の素材を入手`;

    // アイコン行
    const iconsEl = document.createElement('div');
    iconsEl.className = 'toast-item-icons';

    const showCount = Math.min(items.length, MAX_ITEM_ICONS);
    for (let i = 0; i < showCount; i++) {
      const item = items[i];
      const bp = ItemBlueprints[item.blueprintId];
      const imagePath = bp?.image;

      const wrapper = document.createElement('div');
      wrapper.className = 'toast-item-icon';
      wrapper.title = item.name;

      if (imagePath) {
        const img = document.createElement('img');
        img.src = assetPath(imagePath);
        img.alt = item.name;
        img.loading = 'lazy';
        wrapper.appendChild(img);
      } else {
        // 画像がない場合は名前の頭文字をフォールバック
        wrapper.textContent = (item.name || '?')[0];
      }
      iconsEl.appendChild(wrapper);
    }

    // 省略表示
    if (items.length > MAX_ITEM_ICONS) {
      const more = document.createElement('div');
      more.className = 'toast-item-icon toast-item-more';
      more.textContent = `+${items.length - MAX_ITEM_ICONS}`;
      iconsEl.appendChild(more);
    }

    this.showHtml([textEl, iconsEl], 'green');
  }

  /**
   * プレーンテキストのトーストを表示
   * @param {string} message
   * @param {'default'|'gold'|'green'|'red'|'special'} type
   */
  show(message, type = 'default') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    this._present(toast);
  }

  /**
   * HTMLエレメントを含むリッチなトーストを表示
   * @param {HTMLElement[]} elements
   * @param {'default'|'gold'|'green'|'red'|'special'} type
   */
  showHtml(elements, type = 'default') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    for (const el of elements) {
      toast.appendChild(el);
    }

    this._present(toast);
  }

  /** 内部: トーストをDOMに追加してアニメーション */
  _present(toast) {
    toast.addEventListener('click', () => this._dismiss(toast));
    this.container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('toast-show'));

    // 5秒後に自動消滅（アイコン付きは少し長めに表示）
    setTimeout(() => this._dismiss(toast), 5000);

    // 最大5件まで
    while (this.container.children.length > 5) {
      this._dismiss(this.container.firstChild);
    }
  }

  _dismiss(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.add('toast-hide');
    setTimeout(() => toast.remove(), 300);
  }
}
