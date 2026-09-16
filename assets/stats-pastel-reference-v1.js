(()=>{'use strict';
const svg={
 chart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V11M12 19V6M19 19V3"/></svg>',
 doc:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h5M10 16h5"/></svg>',
 people:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2M5 10a2.4 2.4 0 1 0 0 4.8M19 10a2.4 2.4 0 1 1 0 4.8"/></svg>',
 cap:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-5 9 5-9 5zM7 12v5c3 2 7 2 10 0v-5M21 9v6"/></svg>',
 leaf:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21c4-8 8-12 14-16M8 13c-4 0-6-3-5-7 5-1 8 1 8 5M13 9c0-4 3-7 8-7 1 5-1 8-6 9"/></svg>'
};
function render(){
 const section=document.querySelector('.ptg-stats');
 if(!section||section.dataset.pastelReference==='1')return;
 section.dataset.pastelReference='1';
 section.classList.add('ptg-stats-pastel');
 section.innerHTML=`<div class="ptg-stats-shell">
   <div class="ptg-stats-top">
     <div>
       <div class="ptg-stats-eyebrow">02 / PROMTAGRAM В ЦИФРАХ</div>
       <h2 class="ptg-stats-title">База кейсов.<br>Без приукрашивания.</h2>
       <p class="ptg-stats-lead">Рабочая база Promtagram: проекты, финансовые запросы, аналитические и проектные ситуации. Цифры сопровождаем пояснением, чтобы не смешивать объём проанализированных задач с фактически полученным финансированием.</p>
     </div>
     <aside class="ptg-stats-aside" aria-hidden="true">
       <div class="ptg-stats-side-note">Данные<br>создают<br>возможности</div>
     </aside>
   </div>
   <div class="ptg-stat-grid">
     <article class="ptg-stat-card">
       <div class="ptg-stat-icon">${svg.chart}</div>
       <div class="ptg-stat-number">2,65</div>
       <div class="ptg-stat-unit">млрд ₽</div>
       <hr class="ptg-stat-divider">
       <p class="ptg-stat-copy">совокупный объём проектов и финансовых запросов в строках, где сумма указана</p>
     </article>
     <article class="ptg-stat-card">
       <div class="ptg-stat-icon">${svg.doc}</div>
       <div class="ptg-stat-number">≈150</div>
       <div class="ptg-stat-unit" aria-hidden="true">&nbsp;</div>
       <hr class="ptg-stat-divider">
       <p class="ptg-stat-copy">кейсов и бизнес-ситуаций реализовано и изучено в рабочей базе</p>
     </article>
     <article class="ptg-stat-card">
       <div class="ptg-stat-icon">${svg.people}</div>
       <div class="ptg-stat-number">6</div>
       <div class="ptg-stat-unit">AI-агентов</div>
       <hr class="ptg-stat-divider">
       <p class="ptg-stat-copy">специализированных ролей в рабочем контуре анализа и подготовки проекта</p>
     </article>
     <article class="ptg-stat-card">
       <div class="ptg-stat-icon">${svg.cap}</div>
       <div class="ptg-stat-number">+100</div>
       <div class="ptg-stat-unit" aria-hidden="true">&nbsp;</div>
       <hr class="ptg-stat-divider">
       <p class="ptg-stat-copy">сотрудников НКО прошли обучающий тренинг по мета-контекстуальному промт-инженирингу в проектной работе</p>
     </article>
   </div>
   <div class="ptg-stats-note-box">
     <div class="ptg-stats-info">i</div>
     <div class="ptg-stats-note-rule"></div>
     <p class="ptg-stats-note-text">Внутренние рабочие метрики Promtagram. 2,65 млрд ₽ — сумма строк, где денежная потребность или объём проекта указан в базе; это <strong>не</strong> означает фактически привлечённые средства. ≈150 включает реализованные аналитические и проектные работы, а также изученные бизнес‑ситуации; показатель <strong>не равен</strong> 150 одобренным кредитам, субсидиям или грантам.</p>
   </div>
 </div>`;
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render,{once:true}); else render();
})();
