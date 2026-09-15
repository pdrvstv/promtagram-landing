(()=>{'use strict';
const BUILD='20260915-vnext-1';
const CSS='/assets/homepage-vnext-20260915.css?v='+BUILD;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');

function ensureCss(){
  if(document.querySelector('link[href*="homepage-vnext-20260915.css"]'))return;
  const link=document.createElement('link');link.rel='stylesheet';link.href=CSS;document.head.appendChild(link);
}

function removePhotobank(){
  document.querySelectorAll('.reference-home #photobank,.reference-home .ptg-photobank,.reference-home .ptg-photobank-section').forEach(n=>n.remove());
  document.querySelectorAll('.reference-home a[href="#photobank"],.reference-home a[href="/#photobank"]').forEach(n=>{
    const tile=n.closest('.ptg-menu-tile');(tile||n).remove();
  });
}

function patchStats(){
  const section=document.querySelector('.reference-home .ptg-stats');if(!section)return;
  const grid=section.querySelector('.ptg-stat-grid');if(!grid)return;
  grid.innerHTML=`
    <div class="ptg-stat"><strong>2,65 млрд ₽</strong><span>совокупный объём проектов и финансовых запросов в строках рабочей базы, где указана сумма</span></div>
    <div class="ptg-stat"><strong>≈150</strong><span>кейсов и бизнес-ситуаций реализовано и изучено в рабочей базе</span></div>
    <div class="ptg-stat"><strong>6</strong><span>AI-агентов — специализированных ролей в рабочем контуре анализа и подготовки проектов</span></div>
    <div class="ptg-stat"><strong>+100</strong><span>сотрудников НКО и АКИ прошли обучающий тренинг по мета-контекстуальному промт-инжинирингу для проектной работы</span></div>`;
  const note=section.querySelector('.ptg-stats-note');
  if(note)note.innerHTML='Внутренние рабочие метрики Promtagram. 2,65 млрд ₽ — сумма строк, где денежная потребность или объём проекта указан в базе; это <b>не</b> означает фактически привлечённые средства. ≈150 включает реализованные аналитические и проектные работы, а также изученные бизнес‑ситуации; показатель <b>не равен</b> 150 одобренным кредитам, субсидиям или грантам.';
}

const sketchIcons={
  '#solutions':'<path d="M9.5 13.2c7.8-.7 19.8-.4 29 .1-.5 7.4-.5 15.3-.1 22.7-8.7.5-19.5.6-28.4.1.4-8.3.3-15.1-.5-22.9Z"/><path d="M15 18.3c5.7-.2 12.3-.2 18 .1M14.7 24.2c4.4-.1 8.8 0 13.1.2M15.2 30.1c2.5-.2 5-.1 7.4.1"/>',
  '#system':'<circle cx="24" cy="24" r="5.8"/><circle cx="11.2" cy="14.4" r="2.6"/><circle cx="36.7" cy="14" r="2.8"/><circle cx="11" cy="34.2" r="2.7"/><circle cx="37" cy="34" r="2.5"/><path d="M15.5 17.2 20 21m12.1-3.7-4.2 3.8M15.6 31l4.2-3.6m12.3 3.8-4.1-3.7"/>',
  '#cases':'<path d="M9.6 14.5c8.9-.6 19-.5 28.8.1.2 7.9.1 15.3-.2 23-9 .4-19.5.4-28.4-.2.4-7.8.3-15.5-.2-22.9Z"/><path d="M16 14.3c.1-2 .1-3.2.4-4.1 4.8-.2 10.2-.2 15.3.1.2 1 .3 2.4.2 4.1M15.2 21.4c5.8-.3 12.1-.2 17.9.1M15.1 28.4c3.9-.2 8-.1 12 .1"/>',
  '#achievements':'<circle cx="24" cy="20.5" r="8.8"/><path d="M17.4 28.2c-1.2 3.5-2.2 7.1-3 10.5 3.4-1.4 6.6-3 9.7-4.7 3.1 1.8 6.3 3.3 9.6 4.8-.6-3.5-1.7-7.1-2.9-10.4M19.8 20.2l3.1 3.1 6.2-7"/>',
  '#recognition':'<path d="M12.3 9.6c7.6-.4 15.9-.3 23.5.1.2 9.7.2 19.6-.1 29.2-7.7.3-15.8.2-23.4-.2.3-10 .3-19.4 0-29.1Z"/><path d="M18.2 16.3c3.9-.2 8-.2 11.8 0M18 22.4c4.1-.2 8.1-.1 12 .1M18.1 28.4c2.4-.1 4.8 0 7.1.1M28.5 34l2.8 2.8 6.1-7.2"/>',
  '#media':'<path d="M11.5 9.7c7.9-.4 16.8-.3 25 .2.1 9.4.1 19-.2 28.5-8 .3-16.7.2-24.8-.2.3-9.4.3-19 0-28.5Z"/><path d="M16.2 15.8c5.2-.2 10.7-.1 15.8.1M16 21.9c5.4-.2 10.7-.1 16 .1M16.1 28c3.3-.2 6.7-.1 9.8.1M16 33.8c2.2-.1 4.5-.1 6.7.1"/>',
  '#mission':'<path d="M24.1 39.1C20 36.8 10.2 30.4 10 20.7c-.1-4.8 3.4-8.2 7.6-8.2 2.7 0 5 1.4 6.5 3.8 1.5-2.5 3.8-3.8 6.6-3.8 4.1 0 7.5 3.4 7.4 8.2-.1 9.8-9.7 16.1-14 18.4Z"/><path d="M24 15.6c.1 3.7.1 7.5 0 11.2M18.4 21.2c3.8-.1 7.6-.1 11.3.1"/>'
};

function patchMenu(){
  const menu=document.querySelector('.reference-home .ptg-square-menu');if(!menu)return;
  const copy=menu.querySelector('.ptg-square-menu-head p');if(copy)copy.textContent='Коммерческий, технологический и общественный контуры Promtagram — семь прямых маршрутов по сайту.';
  const tiles=[...menu.querySelectorAll('.ptg-menu-tile')];
  tiles.forEach(tile=>{
    if((tile.getAttribute('href')||'').includes('photobank')){tile.remove();return;}
    const href=tile.getAttribute('href');const body=sketchIcons[href];if(body){
      const face=tile.querySelector('.ptg-page-face');if(face)face.innerHTML=`<svg viewBox="0 0 48 48" aria-hidden="true"><g class="ghost">${body}</g>${body}</svg>`;
    }
  });
  [...menu.querySelectorAll('.ptg-menu-tile')].forEach((tile,i)=>{const n=tile.querySelector('.ptg-menu-num');if(n)n.textContent=String(i+1).padStart(2,'0');});
}

function ensureControls(stage,label){
  const parent=stage.parentElement;let controls=parent.querySelector(':scope > .ptg-vnext-controls');
  if(!controls){controls=document.createElement('div');controls.className='ptg-vnext-controls';controls.innerHTML=`<button type="button" data-flow-prev aria-label="Предыдущая карточка">←</button><span class="ptg-vnext-status" aria-live="polite">${label}</span><button type="button" data-flow-next aria-label="Следующая карточка">→</button>`;stage.insertAdjacentElement('afterend',controls);}
  return controls;
}

function initCoverflow(stage,{cards,label='Листайте карточки'}={}){
  if(!stage||stage.dataset.vnextFlow==='1')return;
  const items=cards?cards(stage):[...stage.children];if(!items.length)return;
  stage.dataset.vnextFlow='1';stage.classList.add('ptg-vnext-stage');stage.setAttribute('tabindex','0');stage.setAttribute('aria-roledescription','карусель');
  const controls=ensureControls(stage,label),prev=controls.querySelector('[data-flow-prev]'),next=controls.querySelector('[data-flow-next]'),status=controls.querySelector('.ptg-vnext-status');
  items.forEach((item,i)=>{item.classList.add('ptg-vnext-card');item.dataset.flowIndex=String(i);item.setAttribute('aria-label',`${i+1} из ${items.length}`);});
  let active=Math.min(1,items.length-1),drag=false,startX=0,delta=0,wheelLock=false;
  const render=()=>{
    const w=Math.max(320,stage.clientWidth),step=Math.min(250,Math.max(116,w*.17));
    items.forEach((item,i)=>{
      const d=i-active,a=Math.abs(d),sg=d<0?-1:1;let x=d*step;if(a>1)x+=sg*(a-1)*28;
      const rot=d===0?0:(d<0?57:-57),z=d===0?150:-Math.min(500,a*125),scale=d===0?1:Math.max(.62,.9-a*.08),op=d===0?1:Math.max(.12,.76-a*.15);
      item.style.setProperty('--ptg-flow-z',String(100-a));item.style.setProperty('--ptg-flow-opacity',op.toFixed(2));item.style.setProperty('--ptg-flow-sat',d===0?'1':'.82');item.style.setProperty('--ptg-flow-bright',d===0?'1':'.9');
      item.style.transform=`translate(-50%,-50%) translate3d(${x}px,${Math.min(34,a*11)}px,${z}px) rotateY(${rot}deg) scale(${scale})`;
      item.classList.toggle('is-active',i===active);item.setAttribute('aria-hidden',a>3?'true':'false');
    });
    status.textContent=`${active+1} / ${items.length} · ${label}`;prev.disabled=active===0;next.disabled=active===items.length-1;
  };
  const go=n=>{active=Math.max(0,Math.min(items.length-1,n));render();};
  prev.addEventListener('click',()=>go(active-1));next.addEventListener('click',()=>go(active+1));
  stage.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();go(active-1)}else if(e.key==='ArrowRight'){e.preventDefault();go(active+1)}});
  items.forEach((item,i)=>item.addEventListener('click',e=>{if(i!==active){e.preventDefault();e.stopPropagation();go(i);}}));
  stage.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;drag=true;startX=e.clientX;delta=0;stage.classList.add('is-dragging');stage.setPointerCapture?.(e.pointerId);});
  stage.addEventListener('pointermove',e=>{if(drag)delta=e.clientX-startX;});
  const end=e=>{if(!drag)return;drag=false;stage.classList.remove('is-dragging');try{stage.releasePointerCapture?.(e.pointerId)}catch(_){ }if(Math.abs(delta)>38)go(active+(delta<0?1:-1));};
  stage.addEventListener('pointerup',end);stage.addEventListener('pointercancel',end);
  stage.addEventListener('wheel',e=>{if(!stage.matches(':hover')&&!stage.matches(':focus'))return;const dir=Math.sign(Math.abs(e.deltaY)>=Math.abs(e.deltaX)?e.deltaY:e.deltaX);if(!dir||wheelLock)return;const can=(dir>0&&active<items.length-1)||(dir<0&&active>0);if(!can)return;e.preventDefault();wheelLock=true;go(active+dir);setTimeout(()=>wheelLock=false,reduced.matches?0:320);},{passive:false});
  window.addEventListener('resize',render,{passive:true});render();
}

function patchCases(){
  const s=document.querySelector('.reference-home #cases');if(!s)return;
  const eyebrow=s.querySelector('.section-heading .eyebrow'),h=s.querySelector('.section-heading h2');
  if(eyebrow)eyebrow.textContent='06 / ПРАКТИКА PROMTAGRAM';if(h)h.innerHTML='НАШИ КЕЙСЫ<br>И РЕЗУЛЬТАТЫ';
  const root=s.querySelector('.case-carousel'),stage=s.querySelector('.case-track');if(!root||!stage)return;
  root.classList.add('ptg-vnext-flow');root.classList.remove('case-grid-mode');stage.classList.remove('case-grid-3x3');
  root.querySelectorAll('.carousel-controls').forEach(n=>n.remove());
  initCoverflow(stage,{cards:node=>[...node.querySelectorAll(':scope > .case-cover')],label:'кейсы Promtagram'});
}

function patchMedia(){
  const s=document.querySelector('.reference-home #media');if(!s)return;
  const eyebrow=s.querySelector('.section-heading .eyebrow'),h=s.querySelector('.section-heading h2'),p=s.querySelector('.section-heading p');
  if(eyebrow)eyebrow.textContent='11 / ПУБЛИКАЦИИ';if(h)h.innerHTML='Сложная экономика.<br>Понятный разбор.';if(p)p.textContent='Публичные комментарии о предпринимательстве, инвестициях, инфраструктуре и технологиях.';
  const stage=s.querySelector('.media-grid');if(!stage)return;stage.parentElement.classList.add('ptg-vnext-flow');
  initCoverflow(stage,{cards:node=>[...node.querySelectorAll(':scope > .article')],label:'публикации Promtagram'});
}

function apply(){
  if(!document.body.classList.contains('reference-home'))return;document.documentElement.dataset.ptgVnext=BUILD;ensureCss();removePhotobank();patchStats();patchMenu();patchCases();patchMedia();
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,250);setTimeout(apply,900);},{once:true});
const guard=new MutationObserver(()=>{removePhotobank();patchMenu();});guard.observe(document.documentElement,{subtree:true,childList:true});setTimeout(()=>guard.disconnect(),4500);
})();
