/**
 * ToastManager — 画面右下にスタック表示される通知システム
 */
import { eventBus } from '../core/EventBus.js';

export class ToastManager {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);

    // イベント購読
    eventBus.on('item:sold',        (d) => this.show(`${d.item.name} が ${d.price || d.item.value}G で売れました！`, 'gold'));
    eventBus.on('adventurer:return', (d) => this.show(`${d.adventurer.name} が帰還！ ${d.items ? d.items.length : 0}個の素材を入手`, 'green'));
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
   * トーストを表示
   * @param {string} message
   * @param {'default'|'gold'|'green'|'red'|'special'} type
   */
  show(message, type = 'default') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // クリックで消す
    toast.addEventListener('click', () => this._dismiss(toast));

    this.container.appendChild(toast);

    // アニメーション開始
    requestAnimationFrame(() => toast.classList.add('toast-show'));

    // 4秒後に自動消滅
    setTimeout(() => this._dismiss(toast), 4000);

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
