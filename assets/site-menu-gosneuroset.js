(()=>{'use strict';
const icon=p=>`<svg viewBox="0 0 48 48" aria-hidden="true">${p}</svg>`;
const menuItems=[
{n:'01',title:'Решения',meta:'Господдержка и финансирование',href:'#solutions',icon:icon('<path d="M10 12h28v24H10z"/><path d="M15 18h18M15 24h12M15 30h8"/>')},
{n:'02',title:'AI-система',meta:'Агенты Promtagram',href:'#system',icon:icon('<circle cx="24" cy="24" r="6"/><circle cx="11" cy="14" r="3"/><circle cx="37" cy="14" r="3"/><circle cx="11" cy="34" r="3"/><circle cx="37" cy="34" r="3"/><path d="M16 17l4 4M32 17l-4 4M16 31l4-4M32 31l-4-4"/>')},
{n:'03',title:'Кейсы',meta:'Рабочие разборы проектов',href:'#cases',icon:icon('<path d="M9 14h30v24H9z"/><path d="M16 14v-4h16v4M15 21h18M15 28h12"/>')},
{n:'04',title:'Доказательства',meta:'Роли и подтверждения',href:'#achievements',icon:icon('<circle cx="24" cy="20" r="9"/><path d="m17 28-3 11 10-5 10 5-3-11"/><path d="m20 20 3 3 6-7"/>')},
{n:'05',title:'Признание',meta:'Документы · TOP‑1000',href:'#recognition',icon:icon('<path d="M12 9h24v30H12z"/><path d="M18 16h12M18 22h12M18 28h8"/><path d="m28 34 3 3 7-8"/>')},
{n:'06',title:'Фотобанк',meta:'Архив Promtagram',href:'#photobank',icon:icon('<rect x="8" y="11" width="32" height="26" rx="3"/><circle cx="18" cy="20" r="4"/><path d="m12 33 8-8 6 6 4-4 6 6"/>')},
{n:'07',title:'Публикации',meta:'Экспертные материалы',href:'#media',icon:icon('<path d="M11 9h26v30H11z"/><path d="M16 15h16M16 21h16M16 27h10M16 33h7"/>')},
{n:'08',title:'Миссия',meta:'Общественный контур',href:'#mission',icon:icon('<path d="M24 39s-14-8-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 19-14 19Z"/><path d="M24 15v12M18 21h12"/>')}
];

function squareMenu(){
  if(document.querySelector('.ptg-square-menu'))return;
  const hero=document.querySelector('.reference-home .opening-scene');
  if(!hero)return;
  const section=document.createElement('section');
  section.className='ptg-square-menu section';
  section.id='site-map';
  section.innerHTML=`<div class="wrap"><div class="ptg-square-menu-head"><div><div class="ptg-menu-kicker">НАВИГАЦИЯ PROMTAGRAM</div><h2>Весь сайт.<br>На одном экране.</h2></div><p>Коммерческий, технологический и общественный контуры Promtagram — восемь прямых маршрутов по сайту.</p></div><nav class="ptg-square-grid" aria-label="Основные разделы сайта">${menuItems.map((x,i)=>`<a class="ptg-menu-tile" data-menu-color="${i+1}" href="${x.href}"><span class="ptg-menu-num">${x.n}</span><span class="ptg-page-icon"><span class="ptg-page-face">${x.icon}</span></span><span class="ptg-menu-copy"><strong>${x.title}</strong><small>${x.meta}</small></span><span class="ptg-menu-arrow" aria-hidden="true">↗</span></a>`).join('')}</nav></div>`;
  hero.insertAdjacentElement('afterend',section);
}

function setupCoverFlow(){
  const stage=document.querySelector('#photobank .ptg-coverflow-stage');
  if(!stage||stage.dataset.ready==='1')return;
  const shell=stage.closest('.ptg-coverflow-shell');
  if(!shell)return;
  const cards=[...stage.querySelectorAll('.ptg-cf-card')];
  const count=shell.querySelector('.ptg-coverflow-count');
  const prev=shell.querySelector('[data-cf-prev]');
  const next=shell.querySelector('[data-cf-next]');
  if(!cards.length||!count||!prev||!next)return;
  stage.dataset.ready='1';
  let active=Math.min(2,cards.length-1),drag=false,startX=0,deltaX=0,wheelLock=false;

  const render=()=>{
    const width=Math.max(320,shell.clientWidth);
    const step=Math.min(250,Math.max(116,width*.165));
    cards.forEach((card,i)=>{
      const d=i-active,a=Math.abs(d),side=d<0?-1:1;
      let x=d*step;
      if(a>1)x+=side*(a-1)*22;
      const rot=d===0?0:(d<0?58:-58);
      const z=d===0?150:-Math.min(500,a*125);
      const y=Math.min(38,a*12);
      const scale=d===0?1:Math.max(.60,.89-a*.08);
      const opacity=d===0?1:Math.max(.12,.78-a*.16);
      card.style.setProperty('--cf-zindex',String(100-a));
      card.style.setProperty('--cf-opacity',opacity.toFixed(2));
      card.style.setProperty('--cf-sat',d===0?'1.02':'.76');
      card.style.setProperty('--cf-bright',d===0?'1':'.84');
      card.style.transform=`translate(-50%,-50%) translate3d(${x}px,${y}px,${z}px) rotateY(${rot}deg) scale(${scale})`;
      card.classList.toggle('is-active',i===active);
      card.setAttribute('aria-current',i===active?'true':'false');
    });
    count.textContent=`${active+1} / ${cards.length}`;
    prev.disabled=active===0;
    next.disabled=active===cards.length-1;
  };
  const go=n=>{active=Math.max(0,Math.min(cards.length-1,n));render();};

  prev.addEventListener('click',()=>go(active-1));
  next.addEventListener('click',()=>go(active+1));
  stage.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'){e.preventDefault();go(active-1);}
    if(e.key==='ArrowRight'){e.preventDefault();go(active+1);}
  });
  cards.forEach((card,i)=>card.addEventListener('click',e=>{if(i!==active){e.preventDefault();go(i);}}));
  shell.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;
    drag=true;startX=e.clientX;deltaX=0;
    shell.setPointerCapture?.(e.pointerId);
  });
  shell.addEventListener('pointermove',e=>{if(drag)deltaX=e.clientX-startX;});
  const end=e=>{
    if(!drag)return;
    drag=false;
    try{shell.releasePointerCapture?.(e.pointerId);}catch(_){ }
    if(Math.abs(deltaX)>38)go(active+(deltaX<0?1:-1));
  };
  shell.addEventListener('pointerup',end);
  shell.addEventListener('pointercancel',end);
  shell.addEventListener('wheel',e=>{
    const raw=Math.abs(e.deltaY)>=Math.abs(e.deltaX)?e.deltaY:e.deltaX;
    const dir=Math.sign(raw);
    if(!dir||wheelLock)return;
    const can=(dir>0&&active<cards.length-1)||(dir<0&&active>0);
    if(!can)return;
    e.preventDefault();wheelLock=true;go(active+dir);
    setTimeout(()=>wheelLock=false,320);
  },{passive:false});
  window.addEventListener('resize',render,{passive:true});
  render();
}

function syncTopNav(){
  const nav=document.querySelector('.reference-home #navigation');
  if(!nav)return;
  nav.querySelectorAll('a[href="/#gosneuroset"],a[href="#gosneuroset"]').forEach(a=>a.href='/#recognition');
}

function boot(){
  if(!document.body.classList.contains('reference-home'))return;
  squareMenu();
  setupCoverFlow();
  syncTopNav();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
