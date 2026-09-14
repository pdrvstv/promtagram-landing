(()=>{'use strict';
const icon=paths=>`<svg viewBox="0 0 48 48" aria-hidden="true">${paths}</svg>`;
const menuItems=[
{n:'01',title:'Решения',meta:'Господдержка и финансирование',href:'#solutions',icon:icon('<path d="M10 12h28v24H10z"/><path d="M15 18h18M15 24h12M15 30h8"/>')},
{n:'02',title:'AI-система',meta:'Агенты Promtagram',href:'#system',icon:icon('<circle cx="24" cy="24" r="6"/><circle cx="11" cy="14" r="3"/><circle cx="37" cy="14" r="3"/><circle cx="11" cy="34" r="3"/><circle cx="37" cy="34" r="3"/><path d="M16 17l4 4M32 17l-4 4M16 31l4-4M32 31l-4-4"/>')},
{n:'03',title:'Госнейросеть',meta:'TOP‑1000 · 2025',href:'#recognition',icon:icon('<path d="M12 9h24v30H12z"/><path d="M18 16h12M18 22h12M18 28h8"/><path d="m28 34 3 3 7-8"/>')},
{n:'04',title:'Кейсы',meta:'Рабочие разборы проектов',href:'#cases',icon:icon('<path d="M9 14h30v24H9z"/><path d="M16 14v-4h16v4M15 21h18M15 28h12"/>')},
{n:'05',title:'Доказательства',meta:'Фото, роли и подтверждения',href:'#achievements',icon:icon('<circle cx="24" cy="20" r="9"/><path d="m17 28-3 11 10-5 10 5-3-11"/><path d="m20 20 3 3 6-7"/>')},
{n:'06',title:'Институты',meta:'Система мер поддержки',href:'#ecosystem',icon:icon('<path d="M7 19h34L24 8 7 19Z"/><path d="M11 22v13M19 22v13M29 22v13M37 22v13M7 39h34"/>')},
{n:'07',title:'Публикации',meta:'Экспертные материалы',href:'#media',icon:icon('<path d="M11 9h26v30H11z"/><path d="M16 15h16M16 21h16M16 27h10M16 33h7"/>')},
{n:'08',title:'Социальные проекты',meta:'Миссия и общественный контур',href:'#mission',icon:icon('<path d="M24 39s-14-8-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 19-14 19Z"/><path d="M24 15v12M18 21h12"/>')}
];
function squareMenu(){
 if(document.querySelector('.ptg-square-menu'))return;
 const hero=document.querySelector('.reference-home .opening-scene');if(!hero)return;
 const section=document.createElement('section');section.className='ptg-square-menu section';section.id='site-map';
 section.innerHTML=`<div class="wrap"><div class="ptg-square-menu-head"><div><div class="ptg-menu-kicker">НАВИГАЦИЯ PROMTAGRAM</div><h2>Весь сайт.<br>На одном экране.</h2></div><p>Выберите раздел. Карта связывает коммерческий, технологический и социальный контуры Promtagram.</p></div><nav class="ptg-square-grid" aria-label="Основные разделы сайта">${menuItems.map((x,i)=>`<a class="ptg-menu-tile" data-menu-color="${i+1}" href="${x.href}"><span class="ptg-menu-num">${x.n}</span><span class="ptg-page-icon"><span class="ptg-page-face">${x.icon}</span></span><span class="ptg-menu-copy"><strong>${x.title}</strong><small>${x.meta}</small></span><span class="ptg-menu-arrow" aria-hidden="true">↗</span></a>`).join('')}</nav></div>`;
 hero.insertAdjacentElement('afterend',section);
}
function closeNav(nav){nav.classList.remove('open');const b=document.querySelector('.menu');if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Открыть меню');}}
function syncMenuLinks(){
 const nav=document.querySelector('.reference-home #navigation');if(!nav)return;
 nav.querySelectorAll('a[href="/#gosneuroset"],a[href="#gosneuroset"]').forEach(a=>a.setAttribute('href','/#recognition'));
 if(![...nav.querySelectorAll('a')].some(a=>['/#recognition','#recognition'].includes(a.getAttribute('href')))){
   const mission=[...nav.querySelectorAll('a')].find(a=>['/#mission','#mission'].includes(a.getAttribute('href')));
   const a=document.createElement('a');a.href='/#recognition';a.textContent='Госнейросеть';a.addEventListener('click',()=>closeNav(nav));
   mission?mission.insertAdjacentElement('beforebegin',a):nav.appendChild(a);
 }
}
function hardDedupeRecognition(){
 const all=[...new Set([...document.querySelectorAll('.reference-home section#recognition,.reference-home section#gosneuroset,.reference-home section.ptg-recognition')])];
 if(all.length){const keep=all.find(s=>s.id==='recognition')||all[0];keep.id='recognition';keep.classList.add('ptg-recognition');all.forEach(s=>{if(s!==keep)s.remove();});}
 document.querySelectorAll('.reference-home [data-top1000],.reference-home .certificate-strip').forEach(el=>el.remove());
 document.querySelectorAll('.reference-home #mission article').forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.remove();});
 document.querySelectorAll('.reference-home .ptg-stats .ptg-stat').forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.innerHTML='<strong>6 AI‑агентов</strong><span>специализированных ролей в рабочем контуре анализа и подготовки проекта</span><i></i>';});
 return document.querySelector('.reference-home #recognition');
}
function placeRecognitionAndPhotobank(){
 const achievements=document.querySelector('.reference-home #achievements');
 const recognition=hardDedupeRecognition();
 const cloud=document.querySelector('.reference-home .ptg-proof-cloud');
 if(!achievements||!recognition||!cloud)return null;
 let photobank=document.querySelector('.reference-home #photobank');
 if(!photobank){
   photobank=document.createElement('section');photobank.id='photobank';photobank.className='section ptg-photobank-section';
   const wrap=document.createElement('div');wrap.className='wrap ptg-photobank-wrap';photobank.appendChild(wrap);wrap.appendChild(cloud);
 }
 if(achievements.nextElementSibling!==recognition)achievements.insertAdjacentElement('afterend',recognition);
 if(recognition.nextElementSibling!==photobank)recognition.insertAdjacentElement('afterend',photobank);
 return photobank;
}
function setupCoverFlow(){
 const photobank=placeRecognitionAndPhotobank();if(!photobank)return;
 const track=photobank.querySelector('.ptg-photo-mosaic');if(!track)return;
 const cards=[...track.querySelectorAll('.ptg-photo')];if(!cards.length)return;
 track.classList.remove('ptg-coverflow');track.classList.add('ptg-itunes-coverflow');track.setAttribute('tabindex','0');track.setAttribute('role','region');track.setAttribute('aria-label','Фотобанк Promtagram — перелистывание обложек');
 const cloud=photobank.querySelector('.ptg-proof-cloud');
 let controls=cloud.querySelector('.ptg-coverflow-controls');
 if(!controls){controls=document.createElement('div');controls.className='ptg-coverflow-controls';controls.innerHTML='<button type="button" class="ptg-cf-prev" aria-label="Предыдущая фотография">←</button><div class="ptg-cf-status" aria-live="polite"></div><button type="button" class="ptg-cf-next" aria-label="Следующая фотография">→</button>';track.insertAdjacentElement('afterend',controls);}
 let position=Number(track.dataset.position||Math.floor((cards.length-1)/2));let dragging=false,startX=0,startPosition=position,lastPointer=0,wheelTimer=0;
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const labelFor=card=>((card.getAttribute('aria-label')||card.querySelector('img')?.alt||'').trim());
 function render(immediate=false){
   position=clamp(position,0,cards.length-1);const w=track.getBoundingClientRect().width||window.innerWidth;const cardW=clamp(w*.29,210,360);const step=cardW*.54;
   cards.forEach((card,i)=>{
     const d=i-position,ad=Math.abs(d),side=d<0?-1:d>0?1:0;
     const x=side===0?0:side*(step+(Math.max(0,ad-1)*cardW*.23));
     const rot=side===0?0:side*-58;const scale=Math.max(.68,1-ad*.105);const z=-Math.min(360,ad*105);const y=Math.min(32,ad*9);
     card.style.transition=immediate?'none':'';card.style.width=`${cardW}px`;card.style.transform=`translate3d(calc(-50% + ${x.toFixed(1)}px),calc(-50% + ${y.toFixed(1)}px),${z.toFixed(1)}px) rotateY(${rot}deg) scale(${scale.toFixed(3)})`;
     card.style.opacity=String(Math.max(.28,1-ad*.17));card.style.zIndex=String(100-Math.round(ad*10));card.style.pointerEvents=ad>3.6?'none':'auto';card.classList.toggle('is-active',ad<.5);
   });
   const active=cards[Math.round(position)];if(active){controls.querySelector('.ptg-cf-status').textContent=`${String(Math.round(position)+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')} — ${labelFor(active)}`;}
   track.dataset.position=String(position);
   if(immediate)requestAnimationFrame(()=>cards.forEach(c=>c.style.transition=''));
 }
 function snap(){position=Math.round(position);render();}
 function go(delta){position=clamp(Math.round(position)+delta,0,cards.length-1);render();}
 if(track.dataset.itunesFlow!=='1'){
   track.dataset.itunesFlow='1';
   controls.querySelector('.ptg-cf-prev').addEventListener('click',()=>go(-1));controls.querySelector('.ptg-cf-next').addEventListener('click',()=>go(1));
   cards.forEach((card,i)=>card.addEventListener('click',e=>{if(Math.abs(position-i)>.45){e.preventDefault();position=i;render();}}));
   track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;dragging=true;startX=e.clientX;lastPointer=e.clientX;startPosition=position;track.classList.add('is-dragging');track.setPointerCapture?.(e.pointerId);});
   track.addEventListener('pointermove',e=>{if(!dragging)return;lastPointer=e.clientX;const cardW=parseFloat(cards[0].style.width)||280;position=clamp(startPosition-(e.clientX-startX)/(cardW*.46),0,cards.length-1);render(true);});
   const end=e=>{if(!dragging)return;dragging=false;track.classList.remove('is-dragging');try{track.releasePointerCapture?.(e.pointerId);}catch(_){}snap();};track.addEventListener('pointerup',end);track.addEventListener('pointercancel',end);
   track.addEventListener('wheel',e=>{const delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;if(!delta)return;const dir=Math.sign(delta);const atStart=position<=.01&&dir<0,atEnd=position>=cards.length-1-.01&&dir>0;if(atStart||atEnd)return;e.preventDefault();position=clamp(position+delta*.0028,0,cards.length-1);render(true);clearTimeout(wheelTimer);wheelTimer=setTimeout(snap,120);},{passive:false});
   track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}if(e.key==='ArrowRight'){e.preventDefault();go(1);}if(e.key==='Home'){e.preventDefault();position=0;render();}if(e.key==='End'){e.preventDefault();position=cards.length-1;render();}});
   window.addEventListener('resize',()=>render(true),{passive:true});
 }
 render(true);
}
function observeLateDuplicates(){if(document.documentElement.dataset.ptgRecognitionWatch==='1')return;document.documentElement.dataset.ptgRecognitionWatch='1';const obs=new MutationObserver(()=>{hardDedupeRecognition();placeRecognitionAndPhotobank();});obs.observe(document.body,{childList:true,subtree:true});setTimeout(()=>obs.disconnect(),5000);}
function apply(){if(!document.body.classList.contains('reference-home'))return;squareMenu();hardDedupeRecognition();syncMenuLinks();placeRecognitionAndPhotobank();setupCoverFlow();observeLateDuplicates();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,220);setTimeout(apply,900);},{once:true});
})();