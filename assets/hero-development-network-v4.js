(()=>{
  'use strict';
  const ART='https://drive.google.com/uc?export=view&id=1NUNgSEG6dpx3EYdIKu-dncOkEgHLrP6A';

  const icons={
    factory:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 40V20l12 7V16l12 7V10l12 7v23H6Z"/><path d="M13 34h5m6 0h5m6 0h3M10 20V9h7v15"/></svg>',
    ruble:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 39V9h11c7 0 11 4 11 10s-4 10-11 10H17m0 0h15M17 34h12"/></svg>',
    gear:'<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="7"/><path d="M24 7v5m0 24v5M7 24h5m24 0h5M12 12l4 4m16 16 4 4m0-24-4 4M16 32l-4 4"/><circle cx="24" cy="24" r="15"/></svg>',
    chart:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 39h34M10 35l9-11 8 6 11-16"/><path d="M31 14h7v7"/></svg>',
    box:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 6 17 9-17 9-17-9 17-9Z"/><path d="M7 15v18l17 9 17-9V15M24 24v18"/></svg>',
    ai:'<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="11" y="11" width="26" height="26" rx="5"/><path d="M18 29V19h7a5 5 0 0 1 0 10h-7Zm15 0V19M7 18h4m26 0h4M7 30h4m26 0h4M18 7v4m12-4v4m-12 26v4m12-4v4"/></svg>'
  };

  function card(cls,label,icon){
    return `<div class="ptg-v4-node ${cls}" aria-hidden="true"><span>${icon}</span><b>${label}</b></div>`;
  }

  function apply(){
    if(!document.body?.classList.contains('reference-home')) return;
    const hero=document.querySelector('.reference-home .opening-scene');
    if(!hero || hero.dataset.ptgHeroV4==='1') return;

    hero.innerHTML=`
      <div class="ptg-v4-shell">
        <div class="ptg-v4-copy">
          <div class="ptg-v4-kicker">РОССИЯ БОЛЬШЕ, КОГДА РЕАЛИЗУЮТСЯ ЛЮДИ</div>
          <h1><span>Promtagram</span><strong>Ваш партнёр<br>в развитии</strong></h1>
          <p>Государственная поддержка, аналитика и сопровождение проектов для бизнеса, промышленности и технологических команд.</p>
          <div class="ptg-v4-actions">
            <a class="ptg-v4-primary" href="#lead">Оставить заявку <span aria-hidden="true">→</span></a>
            <a class="ptg-v4-secondary" href="#solutions">Узнать больше</a>
          </div>
          <div class="ptg-v4-meta"><span>Промышленность</span><i></i><span>Финансирование</span><i></i><span>ИИ</span></div>
        </div>

        <div class="ptg-v4-art" aria-hidden="true">
          <div class="ptg-v4-aura"></div>
          <img class="ptg-v4-art-source" src="${ART}" alt="" decoding="async" fetchpriority="high">
          <svg class="ptg-v4-matrix" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M16 22 C35 20 43 32 56 42 S78 58 88 36"/>
            <path d="M9 67 C29 58 42 62 52 53 S69 37 82 18"/>
            <path d="M26 87 C42 74 57 76 67 63 S84 54 94 66"/>
            <path d="M20 42 C38 48 47 48 58 43 S75 26 92 28"/>
          </svg>
          <div class="ptg-v4-core-dot"></div>
          ${card('n1','Промышленность',icons.factory)}
          ${card('n2','Финансирование',icons.ruble)}
          ${card('n3','Оборудование',icons.gear)}
          ${card('n4','Рост',icons.chart)}
          ${card('n5','Экспорт',icons.box)}
          ${card('n6','ИИ-система',icons.ai)}
        </div>
      </div>
      <div class="ptg-v4-bottom"><span>Promtagram · лаборатория ИИ и господдержки</span><a href="#solutions">Листайте вниз ↓</a></div>`;

    hero.className='opening-scene ptg-hero-development-v4';
    hero.dataset.ptgHeroV4='1';
    document.body.classList.add('ptg-hero-v4-ready');
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
