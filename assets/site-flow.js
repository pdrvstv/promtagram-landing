(()=>{'use strict';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

function markStages(){
  const sections=[...document.querySelectorAll('.reference-home main>section')];
  sections.forEach((section,i)=>{
    if(i===0)return;
    section.classList.add('ptg-stage');
    if(section.dataset.ptgPointer==='1')return;
    section.dataset.ptgPointer='1';
    section.addEventListener('pointermove',e=>{
      const r=section.getBoundingClientRect();
      const x=clamp((e.clientX-r.left)/Math.max(1,r.width),0,1);
      section.style.setProperty('--ptg-pointer',`${(x*100).toFixed(1)}%`);
    },{passive:true});
    section.addEventListener('pointerleave',()=>section.style.setProperty('--ptg-pointer','50%'),{passive:true});
    const bg=getComputedStyle(section).backgroundColor;
    const m=bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if(m){
      const lum=(+m[1]*.2126)+(+m[2]*.7152)+(+m[3]*.0722);
      if(lum<90)section.dataset.dark='1';
    }
  });
}

let ticking=false;
function render(){
  ticking=false;
  const vh=window.innerHeight||800;
  document.querySelectorAll('.reference-home main>section.ptg-stage').forEach(section=>{
    const r=section.getBoundingClientRect();
    const enter=clamp((vh-r.top)/(vh*.46),0,1);
    section.style.setProperty('--ptg-edge',`${Math.round(enter*100)}%`);
    section.style.setProperty('--ptg-lift',`${((1-enter)*16).toFixed(1)}px`);
    section.style.setProperty('--ptg-alpha',(.90+(enter*.10)).toFixed(3));
  });
}
function queue(){if(ticking)return;ticking=true;requestAnimationFrame(render);}
function boot(){
  if(!document.body.classList.contains('reference-home'))return;
  markStages();
  queue();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
window.addEventListener('scroll',queue,{passive:true});
window.addEventListener('resize',queue,{passive:true});
})();
