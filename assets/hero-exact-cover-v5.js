(()=>{
  'use strict';

  const IMAGE='/assets/hero-development-network-v5.webp';
  const hotspots=[
    ['brand','/','Promtagram — на главную'],
    ['about','/#founder','О проекте'],
    ['solutions','/#solutions','Возможности'],
    ['cases','/cases/','Кейсы'],
    ['contacts','/#lead','Контакты'],
    ['contact','/#lead','Связаться'],
    ['lead','/#lead','Оставить заявку'],
    ['more','/#solutions','Узнать больше']
  ];

  function preload(src){
    return new Promise((resolve,reject)=>{
      const image=new Image();
      image.decoding='async';
      image.fetchPriority='high';
      image.onload=()=>resolve();
      image.onerror=()=>reject(new Error('Hero artwork failed to load'));
      image.src=src;
    });
  }

  async function apply(){
    if(!document.body || !document.body.classList.contains('reference-home')) return;
    const hero=document.querySelector('.reference-home .opening-scene');
    if(!hero || hero.dataset.ptgExactCoverV5==='1') return;

    try{
      await preload(IMAGE);

      const frame=document.createElement('div');
      frame.className='ptg-cover-v5-frame';
      frame.innerHTML=`
        <div class="ptg-cover-v5-desktop" aria-label="Promtagram — Ваш партнёр в развитии">
          <div class="ptg-cover-v5-canvas">
            <img src="${IMAGE}" alt="Promtagram — Ваш партнёр в развитии" width="1672" height="941" fetchpriority="high" decoding="async">
          </div>
        </div>
        <div class="ptg-cover-v5-mobile">
          <div class="ptg-cover-v5-mobile-art" aria-hidden="true"><img src="${IMAGE}" alt="" decoding="async"></div>
          <div class="ptg-cover-v5-mobile-inner">
            <div class="ptg-cover-v5-mobile-top">
              <a class="ptg-cover-v5-mobile-brand" href="/" aria-label="Promtagram — на главную">
                <img src="/assets/promtagram-brand.jpg" alt="" width="46" height="46">
                <span>PROMTAGRAM</span>
              </a>
              <a class="ptg-cover-v5-mobile-contact" href="#lead">Связаться</a>
            </div>
            <div class="ptg-cover-v5-copy">
              <div class="ptg-cover-v5-kicker">РОССИЯ БОЛЬШЕ, КОГДА РЕАЛИЗУЮТСЯ ЛЮДИ</div>
              <h1>Promtagram<br>Ваш партнёр<br>в развитии</h1>
              <p>Государственная поддержка, аналитика и сопровождение проектов.</p>
              <div class="ptg-cover-v5-actions">
                <a class="ptg-cover-v5-primary" href="#lead">Оставить заявку <span aria-hidden="true">→</span></a>
                <a class="ptg-cover-v5-secondary" href="#solutions">Узнать больше</a>
              </div>
            </div>
            <div class="ptg-cover-v5-mobile-labels">Регионы · Люди · Проекты · Возможности</div>
          </div>
        </div>`;

      const canvas=frame.querySelector('.ptg-cover-v5-canvas');
      hotspots.forEach(([name,href,label])=>{
        const a=document.createElement('a');
        a.className=`ptg-cover-v5-hotspot ptg-cover-v5-hotspot--${name}`;
        a.href=href;
        a.setAttribute('aria-label',label);
        canvas.appendChild(a);
      });

      hero.replaceChildren(frame);
      hero.className='opening-scene ptg-cover-v5';
      hero.dataset.ptgExactCoverV5='1';
      document.body.classList.add('ptg-cover-v5-ready');
    }catch(error){
      console.error('[Promtagram] exact approved cover v5 was not activated; original hero preserved.',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
