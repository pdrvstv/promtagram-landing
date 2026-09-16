(()=>{
  'use strict';

  // Full-resolution approved artwork. No thumbnail endpoint and no JPEG recompression.
  const HERO_IMAGE='https://drive.google.com/uc?export=view&id=1NUNgSEG6dpx3EYdIKu-dncOkEgHLrP6A';
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

  function loadImage(src){
    return new Promise((resolve,reject)=>{
      const image=new Image();
      image.alt='Promtagram — Ваш партнёр в развитии';
      image.decoding='async';
      image.fetchPriority='high';
      image.referrerPolicy='no-referrer';
      image.onload=()=>resolve(image);
      image.onerror=()=>reject(new Error('High-resolution hero image did not decode'));
      image.src=src;
      if(image.complete && image.naturalWidth && image.naturalHeight) resolve(image);
    });
  }

  function makeDesktopCanvas(image){
    const canvas=document.createElement('div');
    canvas.className='ptg-hero-v3-desktop-canvas';

    image.className='ptg-hero-v3-desktop-image';
    canvas.appendChild(image);

    hotspots.forEach(([name,href,label])=>{
      const a=document.createElement('a');
      a.className=`ptg-hero-hotspot ptg-hero-hotspot--${name}`;
      a.href=href;
      a.setAttribute('aria-label',label);
      canvas.appendChild(a);
    });
    return canvas;
  }

  function makeMobileCanvas(){
    const mobile=document.createElement('div');
    mobile.className='ptg-hero-v3-mobile';
    mobile.innerHTML=`
      <div class="ptg-hero-v3-mobile-art" aria-hidden="true">
        <img src="${HERO_IMAGE}" alt="" decoding="async">
      </div>
      <div class="ptg-hero-v3-mobile-content">
        <div class="ptg-hero-v3-kicker">РОССИЯ БОЛЬШЕ, КОГДА РЕАЛИЗУЮТСЯ ЛЮДИ</div>
        <h1>Promtagram<br>Ваш партнёр<br>в развитии</h1>
        <p>Государственная поддержка, аналитика и сопровождение проектов.</p>
        <div class="ptg-hero-v3-actions">
          <a class="ptg-hero-v3-primary" href="#lead">Оставить заявку <span aria-hidden="true">→</span></a>
          <a class="ptg-hero-v3-secondary" href="#solutions">Узнать больше</a>
        </div>
        <div class="ptg-hero-v3-mobile-ribbon">Регионы · Люди · Проекты · Возможности</div>
      </div>`;
    return mobile;
  }

  async function apply(){
    if(!document.body || !document.body.classList.contains('reference-home')) return;
    const hero=document.querySelector('.reference-home .opening-scene');
    if(!hero || hero.dataset.ptgHeroV3==='1') return;

    try{
      const image=await loadImage(HERO_IMAGE);
      if(image.naturalWidth<1600 || image.naturalHeight<900){
        throw new Error(`Unexpected hero source size ${image.naturalWidth}x${image.naturalHeight}`);
      }

      const frame=document.createElement('div');
      frame.className='ptg-hero-v3-frame';
      frame.appendChild(makeDesktopCanvas(image));
      frame.appendChild(makeMobileCanvas());

      hero.replaceChildren(frame);
      hero.className='opening-scene ptg-hero-exact-v3';
      hero.dataset.ptgHeroV3='1';
      document.body.classList.add('ptg-hero-v3-ready');
    }catch(error){
      console.error('[Promtagram] high-resolution responsive hero was not activated; original hero preserved.',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  window.addEventListener('load',()=>{if(!document.body.classList.contains('ptg-hero-v3-ready')) apply();},{once:true});
})();
