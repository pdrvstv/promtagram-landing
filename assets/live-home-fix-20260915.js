(()=>{'use strict';
const BUILD='20260915-0241';
function enforce(){
  document.documentElement.dataset.ptgBuild=BUILD;
  const recognitions=[...document.querySelectorAll('#recognition,.ptg-recognition')];
  let recognition=recognitions[0]||null;
  recognitions.slice(1).forEach(n=>n.remove());
  const photobank=document.querySelector('#photobank');
  if(recognition&&photobank&&recognition.nextElementSibling!==(document.querySelector('#market-recognition')||photobank)){
    photobank.parentNode.insertBefore(recognition,document.querySelector('#market-recognition')||photobank);
  }
  document.querySelectorAll('[data-top1000],.certificate-strip').forEach(n=>n.remove());
  document.querySelectorAll('#mission article,.ptg-mission article').forEach(card=>{
    if((card.textContent||'').includes('Госнейросеть')) card.remove();
  });
  const stats=[...document.querySelectorAll('.ptg-stats .ptg-stat')];
  stats.forEach(card=>{
    if((card.textContent||'').includes('TOP‑1000')||(card.textContent||'').includes('Госнейросеть')){
      card.innerHTML='<strong>6 AI‑агентов</strong><span>специализированных ролей в рабочем контуре анализа и подготовки проекта</span><i></i>';
      card.style.setProperty('--fill','58%');
    }
  });
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enforce,{once:true}); else enforce();
window.addEventListener('load',enforce,{once:true});
const obs=new MutationObserver(enforce);obs.observe(document.documentElement,{childList:true,subtree:true});setTimeout(()=>obs.disconnect(),5000);
})();
