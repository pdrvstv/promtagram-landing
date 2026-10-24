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
function addStyle(href,key){if(document.querySelector(`link[href*="${key}"]`))return;const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);}
function addScript(src,key){if(document.querySelector(`script[src*="${key}"]`))return;const s=document.createElement('script');s.src=src;s.async=false;document.head.appendChild(s);}
addStyle('/assets/site-cases-3x3.css?v=20260914a','site-cases-3x3.css');
addStyle('/assets/site-vnext.css?v=20260914-1758','site-vnext.css');
addStyle('/assets/site-owner-patch.css?v=20260914-2','site-owner-patch.css');
addStyle('/assets/site-menu-gosneuroset.css?v=20260914-1','site-menu-gosneuroset.css');
addScript('/assets/media-proof.js?v=20260914c','media-proof.js');
addScript('/assets/site-cases-3x3.js?v=20260914a','site-cases-3x3.js');
addScript('/assets/media-volga-fix.js?v=20260914a','media-volga-fix.js');
addScript('/assets/media-compact-fix.js?v=20260914a','media-compact-fix.js');
addScript('/assets/site-vnext.js?v=20260914-1758','site-vnext.js');
addScript('/assets/site-owner-patch.js?v=20260917-partnership','site-owner-patch.js');
addScript('/assets/site-menu-gosneuroset.js?v=20260914-1','site-menu-gosneuroset.js');
