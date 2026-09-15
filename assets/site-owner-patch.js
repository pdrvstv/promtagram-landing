(()=>{'use strict';
function removeSections(){
  document.querySelector('.reference-home .ref-structure')?.remove();
  document.querySelector('.reference-home .output-section')?.remove();
  document.querySelector('.reference-home #photobank')?.remove();
  document.querySelectorAll('.reference-home .ptg-proof-cloud').forEach(el=>el.remove());
}
function patchStats(){
  const stats=document.querySelector('.reference-home .ptg-stats');
  const solutions=document.querySelector('.reference-home #solutions');
  if(!stats||!solutions)return;
  if(solutions.nextElementSibling!==stats)solutions.insertAdjacentElement('afterend',stats);
  stats.innerHTML=`<div class="wrap"><div class="ptg-stats-head"><div><div class="eyebrow">02 / PROMTAGRAM В ЦИФРАХ</div><h2>Promtagram<br>в цифрах.</h2></div><p>Четыре ориентира рабочей базы и образовательного контура. Крупно показываем сам показатель, ниже — его точное значение и контекст.</p></div><div class="ptg-stat-grid"><div class="ptg-stat"><strong>≈150</strong><span>кейсов и бизнес-ситуаций изучено в рабочей базе Promtagram</span></div><div class="ptg-stat"><strong>≈65 млрд ₽</strong><span>совокупный объём проектов и финансовых запросов в строках, где сумма указана</span></div><div class="ptg-stat"><strong>≈360 млрд ₽</strong><span>оценочный совокупный оборот объектов с доступными финансовыми показателями</span></div><div class="ptg-stat"><strong>100+</strong><span>сотрудников НКО и АКИ прошли обучающий тренинг по мета-контекстуальному промт-инженирингу для проектной работы</span></div></div><p class="ptg-stats-note">≈150 основано на актуальном CRM-срезе из 146 уникальных объектов и округлено. ≈65 млрд ₽ и ≈360 млрд ₽ — агрегированные ориентиры по заполненным полям рабочей CRM; это не аудированная консолидированная отчётность и не объём фактически привлечённого Promtagram финансирования. 100+ — участники обучающего тренинга, а не число клиентов или профинансированных проектов.</p></div>`;
}
function patchAI(){
  const sec=document.querySelector('.reference-home .ref-ai');
  if(!sec)return;
  sec.classList.add('ptg-ai-route','ptg-ai-owner');
  sec.innerHTML=`<div class="wrap"><div class="ptg-ai-intro"><div class="eyebrow">03 / AI-СИСТЕМА</div><h2>Агенты Promtagram.<br><em>Под руководством Владимира Короля.</em></h2><p>Специализированные ИИ-агенты разбирают данные параллельно. Руководитель системы проверяет критические выводы, выбирает маршрут и принимает финальное решение.</p></div><div class="ptg-ai-map"><div class="ptg-ai-node"><b>01 / ВХОД</b><h3>Запрос бизнеса</h3><p>Цель, сумма, регион, отрасль, сроки, финансовые данные и документы.</p><div class="ptg-institutions"><span>финансирование</span><span>лизинг</span><span>экспорт</span><span>господдержка</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-agent-node"><b>02 / AI-СИСТЕМА</b><h3>Агенты Promtagram</h3><p>Каждый агент отвечает за отдельный слой анализа.</p><div class="ptg-agent-stack"><span class="ptg-agent"><i>◎</i>Агент первичного разбора</span><span class="ptg-agent"><i>▦</i>Агент данных</span><span class="ptg-agent"><i>∑</i>Агент скоринга</span><span class="ptg-agent"><i>⇢</i>Агент маршрута</span><span class="ptg-agent"><i>⬡</i>Агент риск-контроля</span><span class="ptg-agent"><i>≡</i>Агент документов</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-human ptg-manager"><b>03 / РУКОВОДИТЕЛЬ</b><div class="ptg-manager-mark">ВК</div><h3>Владимир Король</h3><p>Руководитель AI-системы Promtagram. Проверяет критические выводы агентов, исключает ложные маршруты, утверждает конструкцию работы и отвечает за финальное решение.</p><div class="ptg-institutions"><span>контроль</span><span>экспертиза</span><span>решение</span></div></div><div class="ptg-ai-arrow">→</div><div class="ptg-ai-node ptg-enterprise"><b>04 / ИСПОЛНЕНИЕ</b><h3>Маршрут для предприятия</h3><p>После решения руководителя формируется практический маршрут по выбранным инструментам и операторам.</p><div class="ptg-factory">⌂</div><div class="ptg-outcomes"><span>финансирование</span><span>лизинг</span><span>субсидии</span><span>гарантии</span><span>экспорт</span><span>реестры</span><span>GR</span></div></div></div></div>`;
}
function renumber(){
  const map=[['ПЯТЬ НАПРАВЛЕНИЙ','01 / ПЯТЬ НАПРАВЛЕНИЙ'],['PROMTAGRAM В ЦИФРАХ','02 / PROMTAGRAM В ЦИФРАХ'],['МЕТОД ЛАБОРАТОРИИ','03 / AI-СИСТЕМА'],['AI-СИСТЕМА','03 / AI-СИСТЕМА'],['ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ','04 / ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ'],['ОСНОВАТЕЛЬ PROMTAGRAM','05 / ОСНОВАТЕЛЬ PROMTAGRAM'],['ПРАКТИКА PROMTAGRAM','06 / ПРАКТИКА PROMTAGRAM'],['ОРИЕНТИРЫ ПО ИНСТРУМЕНТАМ','07 / ОРИЕНТИРЫ ПО ИНСТРУМЕНТАМ'],['ЭКОНОМИКА ПРОЕКТА','08 / ЭКОНОМИКА ПРОЕКТА'],['ЭКСПЕРТИЗА В ДЕЙСТВИИ','09 / ДОКАЗАТЕЛЬСТВА'],['ДОКАЗАТЕЛЬСТВА','09 / ДОКАЗАТЕЛЬСТВА'],['СИСТЕМА ГОСПОДДЕРЖКИ','10 / СИСТЕМА ГОСПОДДЕРЖКИ'],['ПУБЛИКАЦИИ','11 / ПУБЛИКАЦИИ'],['ВОПРОСЫ И ОТВЕТЫ','12 / ВОПРОСЫ И ОТВЕТЫ']];
  document.querySelectorAll('.reference-home .eyebrow').forEach(el=>{const raw=el.textContent.trim();for(const [key,val] of map){if(raw.includes(key)){el.textContent=val;break;}}});
  const caseEye=document.querySelector('.reference-home #cases .eyebrow');if(caseEye)caseEye.textContent='06 / ПРАКТИКА PROMTAGRAM';
  const achEye=document.querySelector('.reference-home #achievements .eyebrow');if(achEye)achEye.textContent='09 / ДОКАЗАТЕЛЬСТВА';
  const ecoEye=document.querySelector('.reference-home #ecosystem .eyebrow');if(ecoEye)ecoEye.textContent='10 / СИСТЕМА ГОСПОДДЕРЖКИ';
  const mediaEye=document.querySelector('.reference-home #media .eyebrow');if(mediaEye)mediaEye.textContent='11 / ПУБЛИКАЦИИ';
}
function patchMenu(){
  const nav=document.querySelector('.reference-home #navigation');
  if(!nav||nav.dataset.ownerMenu==='1')return;
  nav.dataset.ownerMenu='1';
  nav.innerHTML='<a href="/#solutions">Решения</a><a href="/#system">AI-система</a><a href="/#cases">Кейсы</a><a href="/#achievements">Доказательства</a><a href="/#media">Публикации</a><a href="/#founder">О нас</a>';
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');const b=document.querySelector('.menu');if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Открыть меню');}}));
}
function patchCaseCopy(){
  const sec=document.querySelector('.reference-home #cases');if(!sec)return;
  const h=sec.querySelector('.section-heading h2');if(h)h.innerHTML='НАШИ КЕЙСЫ<br>И РЕЗУЛЬТАТЫ';
  const p=sec.querySelector('.section-heading p');if(p)p.textContent='Рабочие кейсы и аналитические разборы из базы Promtagram. Листайте карточки горизонтально — как альбомы.';
  sec.classList.add('ptg-album-carousel');
}
function patchMedia(){
  const sec=document.querySelector('.reference-home #media');if(!sec)return;
  const h=sec.querySelector('.section-heading h2');if(h)h.innerHTML='Сложная экономика.<br>Понятный разбор.';
  const p=sec.querySelector('.section-heading p');if(p)p.textContent='Публичные комментарии о предпринимательстве, инвестициях, инфраструктуре и технологиях.';
  sec.classList.add('ptg-album-carousel');
}
function apply(){if(!document.body.classList.contains('reference-home'))return;removeSections();patchStats();patchAI();renumber();patchMenu();patchCaseCopy();patchMedia();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,250);setTimeout(apply,950);},{once:true});
})();