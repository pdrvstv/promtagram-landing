(()=>{'use strict';
const el=(sel,root=document)=>root.querySelector(sel);
function updateStats(){
  const grid=el('.ptg-stats .ptg-stat-grid');
  if(!grid)return;
  grid.innerHTML=`
    <div class="ptg-stat" style="--fill:72%"><strong>2,65 млрд ₽</strong><span>совокупный объём проектов и финансовых запросов в строках, где сумма указана</span><i></i></div>
    <div class="ptg-stat" style="--fill:68%"><strong>≈150</strong><span>кейсов и бизнес-ситуаций реализовано и изучено в рабочей базе</span><i></i></div>
    <div class="ptg-stat" style="--fill:58%"><strong>6 AI‑агентов</strong><span>специализированных ролей в рабочем контуре анализа и подготовки проекта</span><i></i></div>
    <div class="ptg-stat" style="--fill:48%"><strong>НКО + гранты</strong><span>обучение, проектирование, грантовая методология и социальные инициативы</span><i></i></div>`;
  const note=el('.ptg-stats .ptg-stats-note');
  if(note)note.innerHTML='Внутренние рабочие метрики Promtagram. 2,65 млрд ₽ — сумма строк, где денежная потребность или объём проекта указан в базе; это <b>не</b> означает фактически привлечённые средства. ≈150 включает реализованные аналитические и проектные работы, а также изученные бизнес‑ситуации; показатель <b>не равен</b> 150 одобренным кредитам, субсидиям или грантам.';
}
function navigation(){
  const nav=el('#navigation');
  if(nav&&!nav.querySelector('a[href="/#mission"]')){
    const about=nav.querySelector('a[href="/#founder"]');
    const a=document.createElement('a');a.href='/#mission';a.textContent='Миссия';
    if(about)about.insertAdjacentElement('afterend',a);else nav.appendChild(a);
  }
}
function cleanupLegacy(){
  document.querySelectorAll('.reference-home [data-top1000],.reference-home .certificate-strip').forEach(n=>n.remove());
  document.querySelectorAll('.reference-home #mission article').forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.remove();});
}
function boot(){updateStats();navigation();cleanupLegacy();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
window.addEventListener('load',boot,{once:true});
})();