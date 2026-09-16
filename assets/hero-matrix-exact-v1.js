(()=>{
  'use strict';
  const HERO_SRC='/assets/hero-matrix-exact-v1.webp?v=20260916-hero-matrix';
  function applyHero(){
    const hero=document.querySelector('.reference-home .opening-scene');
    if(!hero || hero.dataset.ptgHeroMatrixExact==='1') return;
    hero.dataset.ptgHeroMatrixExact='1';
    hero.classList.add('ptg-hero-matrix-exact');
    hero.insertAdjacentHTML('beforeend', `
      <div class="ptg-hero-matrix-frame" aria-label="Promtagram — Ваш партнёр в развитии">
        <img class="ptg-hero-matrix-image" src="${HERO_SRC}" width="1672" height="941" alt="Promtagram. Ваш партнёр в развитии. Государственная поддержка, аналитика и сопровождение проектов." fetchpriority="high" decoding="async">
        <h1 class="ptg-hero-sr">Promtagram — Ваш партнёр в развитии</h1>
        <p class="ptg-hero-sr">Государственная поддержка, аналитика и сопровождение проектов.</p>
        <a class="ptg-hero-hotspot ptg-hs-logo" href="/" aria-label="Promtagram — на главную"></a>
        <a class="ptg-hero-hotspot ptg-hs-about" href="#founder" aria-label="О проекте"></a>
        <a class="ptg-hero-hotspot ptg-hs-solutions" href="#solutions" aria-label="Возможности"></a>
        <a class="ptg-hero-hotspot ptg-hs-cases" href="/cases/" aria-label="Кейсы"></a>
        <a class="ptg-hero-hotspot ptg-hs-contact" href="#lead" aria-label="Контакты"></a>
        <a class="ptg-hero-hotspot ptg-hs-contact-top" href="#lead" aria-label="Связаться"></a>
        <a class="ptg-hero-hotspot ptg-hs-apply" href="#lead" aria-label="Оставить заявку"></a>
        <a class="ptg-hero-hotspot ptg-hs-more" href="#solutions" aria-label="Узнать больше"></a>
      </div>`);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyHero,{once:true});
  else applyHero();
  window.addEventListener('load',applyHero,{once:true});
})();
