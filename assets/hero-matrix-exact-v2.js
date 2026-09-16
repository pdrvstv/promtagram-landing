(()=>{
  'use strict';
  const HERO_IMAGE='https://drive.google.com/thumbnail?id=1kEQyuf0TgboeWsZ0ArNJFfI5CXPtvrj-&sz=w2000';
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
      image.className='ptg-hero-exact-v2-image';
      image.decoding='async';
      image.fetchPriority='high';
      image.referrerPolicy='no-referrer';
      image.onload=()=>resolve(image);
      image.onerror=()=>reject(new Error('Hero image did not decode'));
      image.src=src;
      if(image.complete && image.naturalWidth && image.naturalHeight) resolve(image);
    });
  }

  async function apply(){
    if(!document.body || !document.body.classList.contains('reference-home')) return;
    const hero=document.querySelector('.reference-home .opening-scene');
    if(!hero || hero.dataset.ptgHeroV2==='1') return;

    try{
      const image=await loadImage(HERO_IMAGE);
      if(!image.naturalWidth || !image.naturalHeight) throw new Error('Hero image has zero dimensions');

      const frame=document.createElement('div');
      frame.className='ptg-hero-exact-v2-frame';
      frame.appendChild(image);

      hotspots.forEach(([name,href,label])=>{
        const a=document.createElement('a');
        a.className=`ptg-hero-hotspot ptg-hero-hotspot--${name}`;
        a.href=href;
        a.setAttribute('aria-label',label);
        frame.appendChild(a);
      });

      hero.replaceChildren(frame);
      hero.className='opening-scene ptg-hero-exact-v2';
      hero.dataset.ptgHeroV2='1';
      document.body.classList.add('ptg-hero-v2-ready');
    }catch(error){
      console.error('[Promtagram] exact hero was not activated; original hero preserved.',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  window.addEventListener('load',()=>{if(!document.body.classList.contains('ptg-hero-v2-ready')) apply();},{once:true});
})();
