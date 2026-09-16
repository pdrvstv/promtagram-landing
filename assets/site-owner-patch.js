(()=>{'use strict';
const driveThumb=id=>`https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
const proofImages=[
  {id:'1OR3j0hqvj-UyQdZJe8dMTFrkUw6UjUz3',label:'Лекция и работа с аудиторией'},
  {id:'12odWb1jDPV_iS3aZS15fxNFIL77dSvvE',label:'Анонс лекции Владимира Короля'},
  {id:'1m6_53ioKvQ8T8OFy9xWh9HX9fz6z4uJ6',label:'Каспийский медиафорум'},
  {id:'1spgWNkdYIkfS6XizUBqvDhZDTmTDyyMF',label:'Программа о нейросетях для НКО'},
  {id:'14Zky33oG2lL4OPeylv9cBK-0KlyAAsGE',label:'Профессиональное мероприятие'},
  {id:'1RNQwDNuSFtr1zVBbVv7ZyTMMXqzlSYs5',label:'Публичные материалы Promtagram'},
  {id:'1KP0CeRm5H6M3KppbKKv1CmLujaNZeu7I',label:'Профессиональный контур Promtagram'},
  {id:'1kWHCwEGSxXiU7GKbQ94_9VjEmf2EQ_Z_',label:'Работа с государственной повесткой'}
];
function removeSections(){document.querySelector('.reference-home .ref-structure')?.remove();document.querySelector('.reference-home .output-section')?.remove();}
function patchAI(){
  const sec=document.querySelector('.reference-home .ref-ai');if(!sec)return;
  sec.classList.add('ptg-ai-route','ptg-ai-owner');
  sec.innerHTML=`<div class="wrap"><div class="ptg-ai-intro"><div class="eyebrow">03 / AI-СИСТЕМА</div><h2>Агенты Promtagram.<br><em>Под руководством Владимира Короля.</em></h2><p>Специализированные ИИ-агенты разбирают данные параллельно. Руководитель системы проверяет критические выводы, выбирает маршрут и принимает финальное решение.</p></div><div class="ptg-ai-map"><div class="ptg-ai-node"><b>01 / ВХОД</b><h3>Запрос бизнеса</h3><p>Цель, сумма, регион, отрасль, сроки, финансовые данные и документы.</p><div class="ptg-institutions"><span>финансирование</span><span>лизинг</span><span>экспорт</span><span>господдержка</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-agent-node"><b>02 / AI-СИСТЕМА</b><h3>Агенты Promtagram</h3><p>Каждый агент отвечает за отдельный слой анализа.</p><div class="ptg-agent-stack"><span class="ptg-agent"><i>◎</i>Агент первичного разбора</span><span class="ptg-agent"><i>▦</i>Агент данных</span><span class="ptg-agent"><i>∑</i>Агент скоринга</span><span class="ptg-agent"><i>⇢</i>Агент маршрута</span><span class="ptg-agent"><i>⬡</i>Агент риск-контроля</span><span class="ptg-agent"><i>≡</i>Агент документов</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-human ptg-manager"><b>03 / РУКОВОДИТЕЛЬ</b><div class="ptg-manager-mark">ВК</div><h3>Владимир Король</h3><p>Руководитель AI-системы Promtagram. Проверяет критические выводы агентов, исключает ложные маршруты, утверждает конструкцию работы и отвечает за финальное решение.</p><div class="ptg-institutions"><span>контроль</span><span>экспертиза</span><span>решение</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-enterprise"><b>04 / ИСПОЛНЕНИЕ</b><h3>Маршрут для предприятия</h3><p>После решения руководителя формируется практический маршрут по выбранным инструментам и операторам.</p><div class="ptg-factory">⌂</div><div class="ptg-outcomes"><span>финансирование</span><span>лизинг</span><span>субсидии</span><span>гарантии</span><span>экспорт</span><span>реестры</span><span>GR</span></div></div></div></div>`;
}
function renumber(){window.ptgRenumberScreens?.();}
function patchMenu(){const nav=document.querySelector('.reference-home #navigation');if(!nav||nav.dataset.ownerMenu==='1')return;nav.dataset.ownerMenu='1';nav.innerHTML='<a href="/#solutions">Решения</a><a href="/#system">AI-система</a><a href="/#cases">Кейсы</a><a href="/#achievements">Доказательства</a><a href="/#media">Публикации</a><a href="/#mission">Миссия</a><a href="/#founder">О нас</a>';nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');const b=document.querySelector('.menu');if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Открыть меню');}}));}
function proofCloud(){
  const sec=document.querySelector('.reference-home #achievements');if(!sec)return;
  const wrap=sec.querySelector('.wrap');if(!wrap)return;
  let box=wrap.querySelector('.ptg-proof-cloud');
  if(!box){box=document.createElement('div');box.className='ptg-proof-cloud';const grid=wrap.querySelector('.achievement-grid');if(grid)grid.insertAdjacentElement('afterend',box);else wrap.appendChild(box);}
  box.innerHTML=`<div class="ptg-proof-cloud-head"><div><span>ФОТОБАНК / АРХИВ</span><h3>Promtagram<br>в работе.</h3></div></div><div class="ptg-photo-mosaic" aria-label="Фотобанк Promtagram">${proofImages.map((x,i)=>`<a class="ptg-photo" href="https://drive.google.com/file/d/${x.id}/view" target="_blank" rel="noopener noreferrer" aria-label="${x.label}"><img src="${driveThumb(x.id)}" alt="${x.label}" loading="lazy"><span>${String(i+1).padStart(2,'0')} / ${x.label}</span></a>`).join('')}</div><a class="ptg-archive-link" href="https://drive.google.com/drive/folders/1WpJ2cv6BjcWu0bj7n_F9Ysb0toy1OEBW" target="_blank" rel="noopener noreferrer">Открыть весь фотобанк ↗</a>`;
}
function removeUnwantedCaption(){const needle='Это история лаборатории Promtagram';document.querySelectorAll('p,figcaption,small,div,span').forEach(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();if(t.includes(needle)&&t.includes('отказался от госслужбы'))el.remove();});}
function dedupeGosneuroset(){
  document.querySelectorAll('.reference-home [data-top1000],.reference-home .certificate-strip').forEach(el=>el.remove());
  const stats=[...document.querySelectorAll('.reference-home .ptg-stats .ptg-stat')];
  stats.forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.innerHTML='<strong>6 AI‑агентов</strong><span>специализированных ролей в рабочем контуре анализа и подготовки проекта</span><i></i>';});
  document.querySelectorAll('.reference-home #mission article').forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.remove();});
  document.querySelectorAll('.reference-home #achievements article,.reference-home #achievements .achievement-card').forEach(card=>{if((card.textContent||'').includes('Госнейросеть')&&!card.closest('#recognition'))card.remove();});
}
function patchCaseCopy(){const p=document.querySelector('.reference-home #cases .section-heading p');if(p)p.textContent='Рабочие кейсы и аналитические разборы из базы Promtagram. Сумма в карточке — исходная потребность бизнеса, если прямо не указано иное.';}
function apply(){if(!document.body.classList.contains('reference-home'))return;removeSections();patchAI();renumber();patchMenu();dedupeGosneuroset();proofCloud();removeUnwantedCaption();patchCaseCopy();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,220);setTimeout(apply,900);},{once:true});
})();