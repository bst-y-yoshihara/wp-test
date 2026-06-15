/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./blocks/accordion-block/view.js ***!
  \****************************************/
/**
 * 実際のホームページ側で実行されるJavaScript
 */
document.addEventListener('DOMContentLoaded', () => {
  // ページ内にあるすべてのアコーディオンヘッダー（ボタン）を取得
  const accordionHeaders = document.querySelectorAll('.custom-accordion-block .accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const block = header.parentElement; // 親の .custom-accordion-block

      // is-open クラスがあれば消し、なければつける
      block.classList.toggle('is-open');

      // アクセシビリティ（支援技術）用の設定も切り替える
      const isOpen = block.classList.contains('is-open');
      header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map