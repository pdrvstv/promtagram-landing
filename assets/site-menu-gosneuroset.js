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
function normalizeRecognition(){
 const sections=[...document.querySelectorAll('.reference-home section.ptg-recognition,.reference-home section#recognition,.reference-home section#gosneuroset')];
 const unique=[...new Set(sections)];if(!unique.length)return;
 const keep=unique[0];keep.id='recognition';keep.classList.add('ptg-recognition');
 unique.slice(1).forEach(s=>s.remove());
}
function apply(){if(!document.body.classList.contains('reference-home'))return;squareMenu();normalizeRecognition();syncMenuLinks();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,250);setTimeout(apply,900);},{once:true});
})();