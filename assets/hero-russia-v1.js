(()=>{
  'use strict';
  function applyHero(){
    const hero=document.querySelector('.reference-home .opening-scene');
    if(!hero||hero.dataset.ptgRussiaHero==='1')return;
    hero.dataset.ptgRussiaHero='1';
    hero.classList.add('ptg-hero-russia');
    hero.innerHTML=`<div class="wrap opening-content">
      <div class="ptg-hero-russia-kicker">РОССИЯ БОЛЬШЕ, КОГДА РЕАЛИЗУЮТСЯ ЛЮДИ</div>
      <h1>Promtagram<span>Ваш партнёр<br>в развитии</span></h1>
      <p class="ptg-hero-russia-copy">Государственная поддержка, аналитика<br class="desktop-break"> и сопровождение проектов.</p>
      <div class="ptg-hero-russia-actions">
        <a class="button" href="#lead">Оставить заявку <span aria-hidden="true">→</span></a>
        <a class="ptg-hero-secondary" href="#solutions">Узнать больше</a>
      </div>
      <div class="ptg-hero-russia-emblem" aria-hidden="true"></div>
      <aside class="ptg-hero-russia-rail" aria-label="Направления Promtagram"><span>Регионы</span><span>Люди</span><span>Проекты</span><span>Возможности</span></aside>
      <div class="ptg-hero-russia-bottom"><span>Promtagram · лаборатория ИИ и господдержки</span><a href="#solutions">Листайте вниз ↓</a></div>
    </div>`;
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyHero,{once:true});else applyHero();
  window.addEventListener('load',applyHero,{once:true});
})();
