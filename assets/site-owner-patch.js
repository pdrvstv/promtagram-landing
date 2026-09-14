(()=>{'use strict';
const driveThumb=id=>`https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
const proofImages=[
  {id:'1OR3j0hqvj-UyQdZJe8dMTFrkUw6UjUz3',label:'Лекция и работа с аудиторией',cls:'wide'},
  {id:'12odWb1jDPV_iS3aZS15fxNFIL77dSvvE',label:'Анонс лекции Владимира Короля',cls:'square'},
  {id:'1m6_53ioKvQ8T8OFy9xWh9HX9fz6z4uJ6',label:'Каспийский медиафорум',cls:'wide'},
  {id:'1spgWNkdYIkfS6XizUBqvDhZDTmTDyyMF',label:'Программа о нейросетях для НКО',cls:'tall'},
  {id:'14Zky33oG2lL4OPeylv9cBK-0KlyAAsGE',label:'Профессиональное мероприятие',cls:'tall'},
  {id:'1RNQwDNuSFtr1zVBbVv7ZyTMMXqzlSYs5',label:'Публичные материалы Promtagram',cls:'square'},
  {id:'1KP0CeRm5H6M3KppbKKv1CmLujaNZeu7I',label:'Госнейросеть / профессиональный контур',cls:'square'},
  {id:'1kWHCwEGSxXiU7GKbQ94_9VjEmf2EQ_Z_',label:'Работа с государственной повесткой',cls:'wide'}
];
function removeSections(){
  document.querySelector('.reference-home .ref-structure')?.remove();
  document.querySelector('.reference-home .output-section')?.remove();
}
function patchStats(){
  const stats=document.querySelector('.reference-home .ptg-stats');
  const solutions=document.querySelector('.reference-home #solutions');
  if(!stats||!solutions)return;
  if(solutions.nextElementSibling!==stats)solutions.insertAdjacentElement('afterend',stats);
  stats.innerHTML=`<div class="wrap"><div class="ptg-stats-head"><div><div class="eyebrow">02 / PROMTAGRAM В ЦИФРАХ</div><h2>Масштаб изученной<br>базы.</h2></div><p>Округлённый управленческий срез рабочей базы Promtagram. Это оценка масштаба изученных бизнес-ситуаций, а не отчёт о фактически привлечённом финансировании.</p></div><div class="ptg-stat-grid"><div class="ptg-stat" style="--fill:76%"><strong>≈150</strong><span>кейсов и бизнес-ситуаций изучено в рабочей базе</span><i></i></div><div class="ptg-stat" style="--fill:65%"><strong>≈65 млрд ₽</strong><span>совокупный объём проектов и финансовых запросов в строках, где сумма указана</span><i></i></div><div class="ptg-stat" style="--fill:82%"><strong>≈360 млрд ₽</strong><span>оценочный совокупный оборот объектов с доступными финансовыми показателями</span><i></i></div><div class="ptg-stat" style="--fill:68%"><strong>≈68 млрд ₽</strong><span>бюджет на господдержку бизнеса в 2026 году — федеральный проект МСП</span><i></i></div></div><p class="ptg-stats-note">≈150 основано на актуальном CRM-срезе из 146 уникальных объектов и округлено. ≈65 млрд ₽ и ≈360 млрд ₽ — агрегированные ориентиры по заполненным полям рабочей CRM: в массиве смешаны разные годы, типы объектов и уровни верификации, поэтому это не аудированная отчётность и не результат Promtagram. ≈68 млрд ₽ — ассигнования федерального проекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы» на 2026 год по Федеральному закону № 426-ФЗ.</p></div>`;
}
function patchAI(){
  const sec=document.querySelector('.reference-home .ref-ai');
  if(!sec)return;
  sec.classList.add('ptg-ai-route','ptg-ai-owner');
  sec.innerHTML=`<div class="wrap"><div class="ptg-ai-intro"><div class="eyebrow">03 / AI-СИСТЕМА</div><h2>Агенты Promtagram.<br><em>Под руководством Владимира Короля.</em></h2><p>Специализированные ИИ-агенты разбирают данные параллельно. Руководитель системы проверяет критические выводы, выбирает маршрут и принимает финальное решение.</p></div><div class="ptg-ai-map"><div class="ptg-ai-node"><b>01 / ВХОД</b><h3>Запрос бизнеса</h3><p>Цель, сумма, регион, отрасль, сроки, финансовые данные и документы.</p><div class="ptg-institutions"><span>финансирование</span><span>лизинг</span><span>экспорт</span><span>господдержка</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-agent-node"><b>02 / AI-СИСТЕМА</b><h3>Агенты Promtagram</h3><p>Каждый агент отвечает за отдельный слой анализа.</p><div class="ptg-agent-stack"><span class="ptg-agent"><i>◎</i>Агент первичного разбора</span><span class="ptg-agent"><i>▦</i>Агент данных</span><span class="ptg-agent"><i>∑</i>Агент скоринга</span><span class="ptg-agent"><i>⇢</i>Агент маршрута</span><span class="ptg-agent"><i>⬡</i>Агент риск-контроля</span><span class="ptg-agent"><i>≡</i>Агент документов</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-human ptg-manager"><b>03 / РУКОВОДИТЕЛЬ</b><div class="ptg-manager-mark">ВК</div><h3>Владимир Король</h3><p>Руководитель AI-системы Promtagram. Проверяет критические выводы агентов, исключает ложные маршруты, утверждает конструкцию работы и отвечает за финальное решение.</p><div class="ptg-institutions"><span>контроль</span><span>экспертиза</span><span>решение</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-enterprise"><b>04 / ИСПОЛНЕНИЕ</b><h3>Маршрут для предприятия</h3><p>После решения руководителя формируется практический маршрут по выбранным инструментам и операторам.</p><div class="ptg-factory">⌂</div><div class="ptg-outcomes"><span>финансирование</span><span>лизинг</span><span>субсидии</span><span>гарантии</span><span>экспорт</span><span>реестры</span><span>GR</span></div></div></div></div>`;
}
function renumber(){
  const map=[
    ['ПЯТЬ НАПРАВЛЕНИЙ','01 / ПЯТЬ НАПРАВЛЕНИЙ'],
    ['PROMTAGRAM В ЦИФРАХ','02 / PROMTAGRAM В ЦИФРАХ'],
    ['МЕТОД ЛАБОРАТОРИИ','03 / AI-СИСТЕМА'],
    ['AI-СИСТЕМА','03 / AI-СИСТЕМА'],
    ['ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ','04 / ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ'],
    ['ОСНОВАТЕЛЬ PROMTAGRAM','05 / ОСНОВАТЕЛЬ PROMTAGRAM'],
    ['ПРАКТИКА PROMTAGRAM','06 / ПРАКТИКА PROMTAGRAM'],
    ['ОРИЕНТИРЫ ПО ИНСТРУМЕНТАМ','07 / ОРИЕНТИРЫ ПО ИНСТРУМЕНТАМ'],
    ['ЭКОНОМИКА ПРОЕКТА','08 / ЭКОНОМИКА ПРОЕКТА'],
    ['ЭКСПЕРТИЗА В ДЕЙСТВИИ','09 / ДОКАЗАТЕЛЬСТВА'],
    ['ДОКАЗАТЕЛЬСТВА','09 / ДОКАЗАТЕЛЬСТВА'],
    ['СИСТЕМА ГОСПОДДЕРЖКИ','10 / СИСТЕМА ГОСПОДДЕРЖКИ'],
    ['ПУБЛИКАЦИИ','11 / ПУБЛИКАЦИИ'],
    ['ВОПРОСЫ И ОТВЕТЫ','12 / ВОПРОСЫ И ОТВЕТЫ']
  ];
  document.querySelectorAll('.reference-home .eyebrow').forEach(el=>{
    const raw=el.textContent.trim();
    for(const [key,val] of map){if(raw.includes(key)){el.textContent=val;break;}}
  });
  const caseEye=document.querySelector('.reference-home #cases .eyebrow');if(caseEye)caseEye.textContent='06 / ПРАКТИКА PROMTAGRAM';
  const achEye=document.querySelector('.reference-home #achievements .eyebrow');if(achEye)achEye.textContent='09 / ДОКАЗАТЕЛЬСТВА';
  const ecoEye=document.querySelector('.reference-home #ecosystem .eyebrow');if(ecoEye)ecoEye.textContent='10 / СИСТЕМА ГОСПОДДЕРЖКИ';
}
function patchMenu(){
  const nav=document.querySelector('.reference-home #navigation');
  if(!nav||nav.dataset.ownerMenu==='1')return;
  nav.dataset.ownerMenu='1';
  nav.innerHTML='<a href="/#solutions">Решения</a><a href="/#system">AI-система</a><a href="/#cases">Кейсы</a><a href="/#achievements">Доказательства</a><a href="/#media">Публикации</a><a href="/#founder">О нас</a>';
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');const b=document.querySelector('.menu');if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Открыть меню');}}));
}
function proofCloud(){
  const sec=document.querySelector('.reference-home #achievements');if(!sec)return;
  const wrap=sec.querySelector('.wrap');if(!wrap||wrap.querySelector('.ptg-proof-cloud'))return;
  const grid=wrap.querySelector('.achievement-grid');
  const box=document.createElement('div');box.className='ptg-proof-cloud';
  box.innerHTML=`<div class="ptg-proof-cloud-head"><div><span>ФОТОАРХИВ / ПОДТВЕРЖДЕНИЯ</span><h3>Документы, выступления<br>и рабочие события.</h3></div><p>Выборка из рабочего фотоархива Promtagram. Оригиналы сохранены в Google Drive; публикация изображения не заменяет отдельную проверку факта, который оно иллюстрирует.</p></div><div class="ptg-photo-mosaic">${proofImages.map((x,i)=>`<a class="ptg-photo ${x.cls}" href="https://drive.google.com/file/d/${x.id}/view" target="_blank" rel="noopener noreferrer"><img src="${driveThumb(x.id)}" alt="${x.label}" loading="lazy"><span>${String(i+1).padStart(2,'0')} / ${x.label}</span></a>`).join('')}</div><a class="ptg-archive-link" href="https://drive.google.com/drive/folders/1WpJ2cv6BjcWu0bj7n_F9Ysb0toy1OEBW" target="_blank" rel="noopener noreferrer">Открыть фотоархив Promtagram ↗</a>`;
  if(grid)grid.insertAdjacentElement('afterend',box);else wrap.appendChild(box);
}
function patchCaseCopy(){const p=document.querySelector('.reference-home #cases .section-heading p');if(p)p.textContent='Рабочие кейсы и аналитические разборы из базы Promtagram. Сумма в карточке — исходная потребность бизнеса, если прямо не указано иное.';}
function apply(){if(!document.body.classList.contains('reference-home'))return;removeSections();patchStats();patchAI();renumber();patchMenu();proofCloud();patchCaseCopy();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,250);setTimeout(apply,950);setTimeout(apply,1500);},{once:true});
})();