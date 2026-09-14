(()=>{'use strict';
const icon=(paths)=>`<svg viewBox="0 0 48 48" aria-hidden="true">${paths}</svg>`;
const menuItems=[
  {n:'01',title:'Решения',meta:'Господдержка и финансирование',href:'#solutions',icon:icon('<path d="M10 12h28v24H10z"/><path d="M15 18h18M15 24h12M15 30h8"/>')},
  {n:'02',title:'AI-система',meta:'Агенты Promtagram',href:'#system',icon:icon('<circle cx="24" cy="24" r="6"/><circle cx="11" cy="14" r="3"/><circle cx="37" cy="14" r="3"/><circle cx="11" cy="34" r="3"/><circle cx="37" cy="34" r="3"/><path d="M16 17l4 4M32 17l-4 4M16 31l4-4M32 31l-4-4"/>')},
  {n:'03',title:'Госнейросеть',meta:'TOP‑1000 · 2025',href:'#gosneuroset',icon:icon('<path d="M12 9h24v30H12z"/><path d="M18 16h12M18 22h12M18 28h8"/><path d="m28 34 3 3 7-8"/>')},
  {n:'04',title:'Кейсы',meta:'Рабочие разборы проектов',href:'#cases',icon:icon('<path d="M9 14h30v24H9z"/><path d="M16 14v-4h16v4M15 21h18M15 28h12"/>')},
  {n:'05',title:'Доказательства',meta:'Фото, роли и подтверждения',href:'#achievements',icon:icon('<circle cx="24" cy="20" r="9"/><path d="m17 28-3 11 10-5 10 5-3-11"/><path d="m20 20 3 3 6-7"/>')},
  {n:'06',title:'Институты',meta:'Система мер поддержки',href:'#ecosystem',icon:icon('<path d="M7 19h34L24 8 7 19Z"/><path d="M11 22v13M19 22v13M29 22v13M37 22v13M7 39h34"/>')},
  {n:'07',title:'Публикации',meta:'Экспертные материалы',href:'#media',icon:icon('<path d="M11 9h26v30H11z"/><path d="M16 15h16M16 21h16M16 27h10M16 33h7"/>')},
  {n:'08',title:'О нас',meta:'Основатель и контакты',href:'#founder',icon:icon('<circle cx="24" cy="17" r="7"/><path d="M11 39c1-9 6-14 13-14s12 5 13 14"/>')}
];
function squareMenu(){
  if(document.querySelector('.ptg-square-menu'))return;
  const hero=document.querySelector('.reference-home .opening-scene');
  if(!hero)return;
  const section=document.createElement('section');
  section.className='ptg-square-menu section';
  section.id='site-map';
  section.innerHTML=`<div class="wrap"><div class="ptg-square-menu-head"><div><div class="ptg-menu-kicker">НАВИГАЦИЯ PROMTAGRAM</div><h2>Весь сайт.<br>На одном экране.</h2></div><p>Выберите раздел. Квадратная карта связывает решения, AI‑систему, проектные достижения, кейсы и доказательный контур.</p></div><nav class="ptg-square-grid" aria-label="Основные разделы сайта">${menuItems.map(x=>`<a class="ptg-menu-tile" href="${x.href}"><span class="ptg-menu-num">${x.n}</span><span class="ptg-page-icon"><span class="ptg-page-face">${x.icon}</span></span><span class="ptg-menu-copy"><strong>${x.title}</strong><small>${x.meta}</small></span><span class="ptg-menu-arrow" aria-hidden="true">↗</span></a>`).join('')}</nav></div>`;
  hero.insertAdjacentElement('afterend',section);
}
function gosneurosetScreen(){
  const cases=document.querySelector('.reference-home #cases');
  if(!cases)return;
  let section=document.querySelector('.reference-home #gosneuroset');
  if(!section){
    section=document.createElement('section');
    section.id='gosneuroset';
    section.className='ptg-gosneuroset section';
    section.innerHTML=`<div class="wrap ptg-gos-layout"><div class="ptg-gos-copy"><div class="ptg-gos-kicker">PROMTAGRAM / ПРОЕКТНОЕ ДОСТИЖЕНИЕ</div><div class="ptg-gos-rank">TOP‑1000</div><h2>«Госнейросеть»</h2><p class="ptg-gos-lead">Концепция ИИ‑ассистента для навигации по государственной поддержке вошла в число TOP‑1000 проектов форума «Сильные идеи для нового времени» в 2025 году.</p><div class="ptg-gos-actions"><a class="ptg-gos-primary" href="/achievements/gosneuroset-top1000/">Открыть памятный сертификат ↗</a><a href="https://asi.ru/news/205008/" target="_blank" rel="noopener noreferrer">Контекст отбора АСИ ↗</a></div><p class="ptg-gos-note">Памятный сертификат оформлен Promtagram для фиксации достижения и не является официальным дипломом организаторов форума.</p></div><a class="ptg-gos-sheet" href="/achievements/gosneuroset-top1000/" aria-label="Открыть памятный сертификат проекта Госнейросеть"><span class="ptg-gos-sheet-mark">PROMTAGRAM</span><span class="ptg-gos-sheet-top">TOP‑1000</span><span class="ptg-gos-sheet-title">ГОСНЕЙРОСЕТЬ</span><span class="ptg-gos-sheet-year">2025</span><span class="ptg-gos-sheet-arrow">↗</span></a></div>`;
  }
  if(cases.previousElementSibling!==section)cases.parentNode.insertBefore(section,cases);
  document.querySelectorAll('.reference-home .achievement-grid [data-top1000]').forEach(card=>card.remove());
}
function closeNav(nav){nav.classList.remove('open');const b=document.querySelector('.menu');if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Открыть меню');}}
function syncMenuLinks(){
  const nav=document.querySelector('.reference-home #navigation');
  if(!nav||nav.dataset.gosLink==='1')return;
  const cases=[...nav.querySelectorAll('a')].find(a=>a.getAttribute('href')==='/#cases'||a.getAttribute('href')==='#cases');
  if(cases){const a=document.createElement('a');a.href='/#gosneuroset';a.textContent='Госнейросеть';a.addEventListener('click',()=>closeNav(nav));cases.insertAdjacentElement('beforebegin',a);}
  nav.dataset.gosLink='1';
}
function apply(){if(!document.body.classList.contains('reference-home'))return;squareMenu();gosneurosetScreen();syncMenuLinks();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,180);setTimeout(apply,800);},{once:true});
})();