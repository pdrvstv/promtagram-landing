(()=>{'use strict';
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');

/* V07 visual layer: loaded separately so the stable base remains reversible. */
const v07Css=document.createElement('link');
v07Css.rel='stylesheet';
v07Css.href='/assets/v07-engineering.css?v=20260913-v07';
document.head.appendChild(v07Css);

/* Existing case carousel behaviour. */
document.querySelectorAll('.case-carousel').forEach(root=>{
  const track=root.querySelector('.case-track'),cards=[...track.querySelectorAll('.case-cover')],prev=root.querySelector('[data-prev]'),next=root.querySelector('[data-next]'),label=root.querySelector('.carousel-position');
  if(!track||!prev||!next||!label||!cards.length)return;
  let current=0,frame=0;
  function sync(){
    const center=track.scrollLeft+track.clientWidth/2;let best=Infinity;
    cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft+c.offsetWidth/2-center);if(d<best){best=d;current=i;}});
    cards.forEach((c,i)=>{c.classList.toggle('is-active',i===current);c.classList.toggle('is-before',i<current);c.classList.toggle('is-after',i>current);});
    label.textContent=(current+1)+' / '+cards.length;prev.disabled=current===0;next.disabled=current===cards.length-1;frame=0;
  }
  function move(delta){const c=cards[Math.max(0,Math.min(cards.length-1,current+delta))];track.scrollTo({left:c.offsetLeft+c.offsetWidth/2-track.clientWidth/2,behavior:reduced.matches?'auto':'smooth'});}
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  track.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(sync);},{passive:true});
  track.addEventListener('keydown',e=>{if(e.target!==track)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
  window.addEventListener('resize',sync);sync();
});

document.querySelectorAll('.marquee-toggle').forEach(button=>{
  const wrap=button.closest('.wrap');const marquee=wrap&&wrap.querySelector('.marquee');if(!marquee)return;
  button.addEventListener('click',()=>{const paused=marquee.classList.toggle('is-paused');button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Продолжить ленту':'Приостановить ленту';});
});

/* Flagship complex case: sales + deal structure + financing + support contour. */
document.querySelectorAll('.case-carousel .case-track').forEach(track=>{
  if(track.querySelector('.v07-case-flagship'))return;
  const card=document.createElement('article');
  card.className='case-cover v07-case-flagship';
  card.dataset.v07Index='CASE / 00';
  card.innerHTML=`<div class="case-cover-art" data-v07-parallax data-v07-speed="0.16"><img src="/assets/theme-dossier.webp" alt="Инженерная схема комплексного проекта" loading="lazy"><span>АНОНИМИЗИРОВАННЫЙ КЕЙС</span></div><div class="case-cover-copy"><div class="case-amount">Комплексный проект<small>от задачи продаж — к структурированной сделке</small></div><h3>Не искали одну меру поддержки. Собрали работающий контур.</h3><p>Разобрали продукт и рынок сбыта, сформировали коммерческую логику сделки, связали потребность в финансировании с параметрами проекта и подготовили контур взаимодействия с институтами развития.</p><div class="v07-flow"><span>Сбыт</span><span>Структура сделки</span><span>Финансирование</span><span>Господдержка</span><span>GR-контур</span></div><div class="v07-case-grid"><div class="v07-metric"><b>01</b><span>Потребность<br>и экономика</span></div><div class="v07-metric"><b>02</b><span>Каналы сбыта<br>и партнёры</span></div><div class="v07-metric"><b>03</b><span>Сделка<br>и источники</span></div><div class="v07-metric"><b>04</b><span>Меры поддержки<br>и сопровождение</span></div></div><a href="/cases/">Смотреть логику кейсов ↗</a></div>`;
  track.prepend(card);
});

/* Restrained scroll parallax. It moves only technical artwork, never text. */
if(!reduced.matches){
  const targets=[...document.querySelectorAll('[data-v07-parallax]')];
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  const update=()=>{
    const vh=window.innerHeight;
    targets.forEach(el=>{
      const r=el.getBoundingClientRect();
      const speed=parseFloat(el.dataset.v07Speed||'.10');
      const center=r.top+r.height/2;
      const delta=clamp((center-vh/2)*speed,-28,28);
      el.style.setProperty('--v07-parallax-y',`${delta.toFixed(2)}px`);
    });
    const hero=document.querySelector('.opening-scene .scene-background');
    if(hero){const r=hero.getBoundingClientRect();const delta=clamp((r.top+r.height/2-vh/2)*.045,-22,22);hero.style.setProperty('--v07-hero-y',`${delta.toFixed(2)}px`);}
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

  document.querySelectorAll('.reference-home .solution-card .solution-art,.reference-home .structure-art,.reference-home .ref-ai img,.reference-home .portrait img').forEach((el,i)=>{
    el.dataset.v07Parallax='';el.dataset.v07Speed=i%2?.08:'.12';
  });
}

if('IntersectionObserver' in window&&!reduced.matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('arrived');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.reference-home .section').forEach(section=>observer.observe(section));
}
})();
