(()=>{'use strict';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function cleanupLegacy(){document.querySelectorAll('.ptg-flow-divider').forEach(el=>el.remove());document.querySelectorAll('.reference-home [data-top1000],.reference-home .certificate-strip').forEach(el=>el.remove());}
function markStages(){
  const sections=[...document.querySelectorAll('.reference-home main>section')];
  sections.forEach((section,i)=>{
    if(i===0)return;
    section.classList.add('ptg-stage');
    if(section.dataset.ptgPointer!=='1'){
      section.dataset.ptgPointer='1';
      section.addEventListener('pointermove',e=>{const r=section.getBoundingClientRect();const x=clamp((e.clientX-r.left)/Math.max(1,r.width),0,1);section.style.setProperty('--ptg-pointer',`${(x*100).toFixed(1)}%`);},{passive:true});
      section.addEventListener('pointerleave',()=>section.style.setProperty('--ptg-pointer','50%'),{passive:true});
    }
    const bg=getComputedStyle(section).backgroundColor;const m=bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(m){const lum=(+m[1]*.2126)+(+m[2]*.7152)+(+m[3]*.0722);if(lum<90)section.dataset.dark='1';}
  });
}
let ticking=false;
function render(){ticking=false;const vh=window.innerHeight||800;document.querySelectorAll('.reference-home main>section.ptg-stage').forEach(section=>{const r=section.getBoundingClientRect();const enter=clamp((vh-r.top)/(vh*.46),0,1);const edge=Math.round(enter*100);const lift=(1-enter)*16;const alpha=.90+(enter*.10);section.style.setProperty('--ptg-edge',`${edge}%`);section.style.setProperty('--ptg-lift',`${lift.toFixed(1)}px`);section.style.setProperty('--ptg-alpha',alpha.toFixed(3));});}
function queue(){if(ticking)return;ticking=true;requestAnimationFrame(render);}
function removeCaption(){const needle='Это история лаборатории Promtagram';document.querySelectorAll('p,figcaption,small,div,span').forEach(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();if(t.includes(needle)&&t.includes('отказался от госслужбы'))el.remove();});}
function dedupeGosneuroset(){
  cleanupLegacy();
  document.querySelectorAll('.reference-home #mission article').forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.remove();});
  document.querySelectorAll('.reference-home #achievements article,.reference-home #achievements .achievement-card').forEach(card=>{if((card.textContent||'').includes('Госнейросеть')&&!card.closest('#recognition'))card.remove();});
  document.querySelectorAll('.reference-home .ptg-stats .ptg-stat').forEach(card=>{if((card.textContent||'').includes('Госнейросеть'))card.innerHTML='<strong>6 AI‑агентов</strong><span>специализированных ролей в рабочем контуре анализа и подготовки проекта</span><i></i>';});
}
function apply(){cleanupLegacy();dedupeGosneuroset();removeCaption();markStages();queue();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{apply();setTimeout(apply,220);},{once:true});
window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});
})();