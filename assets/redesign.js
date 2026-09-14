'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Открыть меню');
}
if (menu && navigation) {
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    navigation.classList.toggle('open', !expanded);
    menu.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-label', expanded ? 'Открыть меню' : 'Закрыть меню');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
}
const caseGridStyle = document.createElement('link');
caseGridStyle.rel = 'stylesheet';
caseGridStyle.href = '/assets/site-cases-3x3.css?v=20260914a';
document.head.appendChild(caseGridStyle);
const proofLayer = document.createElement('script');
proofLayer.src = '/assets/media-proof.js?v=20260914c';
proofLayer.async = false;
document.head.appendChild(proofLayer);
const caseGridLayer = document.createElement('script');
caseGridLayer.src = '/assets/site-cases-3x3.js?v=20260914a';
caseGridLayer.async = false;
document.head.appendChild(caseGridLayer);
const mediaVolgaLayer = document.createElement('script');
mediaVolgaLayer.src = '/assets/media-volga-fix.js?v=20260914a';
mediaVolgaLayer.async = false;
document.head.appendChild(mediaVolgaLayer);
const mediaCompactLayer = document.createElement('script');
mediaCompactLayer.src = '/assets/media-compact-fix.js?v=20260914a';
mediaCompactLayer.async = false;
document.head.appendChild(mediaCompactLayer);
