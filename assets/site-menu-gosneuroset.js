(()=>{'use strict';
const icon=p=>`<svg viewBox="0 0 48 48" aria-hidden="true">${p}</svg>`;
const menuItems=[
{n:'01',title:'Решения',meta:'Господдержка и финансирование',href:'#solutions',icon:icon('<path d="M10 12h28v24H10z"/><path d="M15 18h18M15 24h12M15 30h8"/>')},
{n:'02',title:'AI-система',meta:'Агенты Promtagram',href:'#system',icon:icon('<circle cx="24" cy="24" r="6"/><circle cx="11" cy="14" r="3"/><circle cx="37" cy="14" r="3"/><circle cx="11" cy="34" r="3"/><circle cx="37" cy="34" r="3"/><path d="M16 17l4 4M32 17l-4 4M16 31l4-4M32 31l-4-4"/>')},
{n:'03',title:'Кейсы',meta:'Рабочие разборы проектов',href:'#cases',icon:icon('<path d="M9 14h30v24H9z"/><path d="M16 14v-4h16v4M15 21h18M15 28h12"/>')},
{n:'04',title:'Доказательства',meta:'Роли и подтверждения',href:'#achievements',icon:icon('<circle cx="24" cy="20" r="9"/><path d="m17 28-3 11 10-5 10 5-3-11"/><path d="m20 20 3 3 6-7"/>')},
{n:'05',title:'Признание',meta:'Документы · TOP‑1000',href:'#recognition',icon:icon('<path d="M12 9h24v30H12z"/><path d="M18 16h12M18 22h12M18 28h8"/><path d="m28 34 3 3 7-8"/>')},
{n:'06',title:'Публикации',meta:'Экспертные материалы',href:'#media',icon:icon('<path d="M11 9h26v30H11z"/><path d="M16 15h16M16 21h16M16 27h10M16 33h7"/>')},
{n:'07',title:'Миссия',meta:'Общественный контур',href:'#mission',icon:icon('<path d="M24 39s-14-8-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 19-14 19Z"/><path d="M24 15v12M18 21h12"/>')}
];
function squareMenu(){
  if(document.querySelector('.ptg-square-menu'))return;
  const hero=document.querySelector('.reference-home .opening-scene');if(!hero)return;
  const s=document.createElement('section');s.className='ptg-square-menu section';s.id='site-map';
  s.innerHTML=`<div class="wrap"><div class="ptg-square-menu-head"><div><div class="ptg-menu-kicker">НАВИГАЦИЯ PROMTAGRAM</div><h2>Весь сайт.<br>На одном экране.</h2></div><p>Коммерческий, технологический и общественный контуры Promtagram — семь прямых маршрутов по сайту.</p></div><nav class="ptg-square-grid" aria-label="Основные разделы сайта">${menuItems.map((x,i)=>`<a class="ptg-menu-tile" data-menu-color="${i+1}" href="${x.href}"><span class="ptg-menu-num">${x.n}</span><span class="ptg-page-icon"><span class="ptg-page-face">${x.icon}</span></span><span class="ptg-menu-copy"><strong>${x.title}</strong><small>${x.meta}</small></span><span class="ptg-menu-arrow" aria-hidden="true">↗</span></a>`).join('')}</nav></div>`;
  hero.insertAdjacentElement('afterend',s);
}
function cleanupOld(){document.querySelectorAll('.reference-home .ptg-proof-cloud,.reference-home .ptg-photo-mosaic,.reference-home [data-top1000],.reference-home .certificate-strip').forEach(n=>n.remove());}
function dedupeRecognition(){const list=[...document.querySelectorAll('.reference-home section#recognition,.reference-home section#gosneuroset,.reference-home section.ptg-recognition')];if(!list.length)return null;const keep=list[0];keep.id='recognition';keep.classList.add('ptg-recognition');list.slice(1).forEach(n=>n.remove());return keep;}
function placeRecognition(){const achievements=document.querySelector('.reference-home #achievements'),recognition=dedupeRecognition(),ecosystem=document.querySelector('.reference-home #ecosystem');if(!recognition)return;if(achievements){achievements.insertAdjacentElement('afterend',recognition);}else if(ecosystem){ecosystem.parentNode.insertBefore(recognition,ecosystem);}}
function syncTopNav(){const nav=document.querySelector('.reference-home #navigation');if(!nav)return;nav.querySelectorAll('a[href="/#gosneuroset"],a[href="#gosneuroset"]').forEach(a=>a.href='/#recognition');}
function apply(){if(!document.body.classList.contains('reference-home'))return;squareMenu();cleanupOld();placeRecognition();syncTopNav();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();window.addEventListener('load',()=>{apply();setTimeout(apply,250);setTimeout(apply,900)},{once:true});
})();
