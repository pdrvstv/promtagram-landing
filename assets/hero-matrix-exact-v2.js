(()=>{
  'use strict';
  const PARTS=[
    '/assets/hero-exact-v2/part-0.txt?v=20260916-2318',
    '/assets/hero-exact-v2/part-1.txt?v=20260916-2318'
  ];
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

  async function loadPart(url){
    const response=await fetch(url,{cache:'no-store',credentials:'same-origin'});
    if(!response.ok) throw new Error(`Hero part ${response.status}: ${url}`);
    return (await response.text()).replace(/\s+/g,'');
  }

  function loadImage(src){
    return new Promise((resolve,reject)=>{
      const image=new Image();
      image.alt='Promtagram — Ваш партнёр в развитии';
      image.className='ptg-hero-exact-v2-image';
      image.decoding='async';
      image.fetchPriority='high';
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
      const parts=await Promise.all(PARTS.map(loadPart));
      const base64=parts.join('');
      if(!base64.startsWith('/9j/')) throw new Error('Hero asset is not JPEG base64');

      const image=await loadImage('data:image/jpeg;base64,'+base64);
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
      console.error('[Promtagram] exact hero v2 was not activated; original hero preserved.',error);
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',apply,{once:true});
  }else{
    apply();
  }
  window.addEventListener('load',()=>{ if(!document.body.classList.contains('ptg-hero-v2-ready')) apply(); },{once:true});
})();
