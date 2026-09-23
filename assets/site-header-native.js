/* Keep anchor destinations below the sticky bar as fonts/viewport change. */
(() => {
  'use strict';
  const header = document.querySelector('.ptg-site-header');
  if (!header) return;
  const updateHeight = () => {
    const height = `${Math.ceil(header.getBoundingClientRect().height)}px`;
    document.documentElement.style.setProperty('--ptg-header-height', height);
    document.body.style.setProperty('--ptg-header-height', height);
  };
  updateHeight();
  if ('ResizeObserver' in window) new ResizeObserver(updateHeight).observe(header);
  else window.addEventListener('resize', updateHeight, { passive: true });
})();
