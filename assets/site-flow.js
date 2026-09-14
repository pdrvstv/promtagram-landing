(()=>{'use strict';
function removeTop1000Duplicates(){
  document.querySelectorAll('.reference-home [data-top1000], .reference-home .certificate-strip').forEach(el=>el.remove());
}
function addDividers(){
  const main=document.querySelector('main'); if(!main)return;
  const sections=[...main.children].filter(el=>el.tagName==='SECTION');
  sections.forEach((section,i)=>{
    if(i===sections.length-1)return;
    const next=sections[i+1];
    if(section.nextElementSibling&&section.nextElementSibling.classList.contains('ptg-flow-divider'))return;
    const d=document.createElement('div');
    d.className='ptg-flow-divider'; d.setAttribute('aria-hidden','true');
    const s=getComputedStyle(section), n=getComputedStyle(next);
    const dark=/rgb\((?:[0-4]?\d|5[0-5]),\s*(?:[0-4]?\d|5[0-5]),\s*(?:[0-4]?\d|5[0-5])\)/.test(s.backgroundColor)||/rgb\((?:[0-4]?\d|5[0-5]),\s*(?:[0-4]?\d|5[0-5]),\s*(?:[0-4]?\d|5[0-5])\)/.test(n.backgroundColor);
    if(dark)d.dataset.tone='dark';
    section.insertAdjacentElement('afterend',d);
  });
}
function revealSections(){
  if(!('IntersectionObserver'in window))return;
  document.documentElement.classList.add('ptg-motion-ready');
  const sections=[...document.querySelectorAll('main>section')];
  sections.forEach((s,i)=>{if(i>0)s.classList.add('ptg-pending');});
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('ptg-pending');e.target.classList.add('ptg-in-view');io.unobserve(e.target);}}),{rootMargin:'0px 0px -8% 0px',threshold:.08});
  sections.slice(1).forEach(s=>io.observe(s));
}
function apply(){removeTop1000Duplicates();addDividers();revealSections();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
window.addEventListener('load',()=>{removeTop1000Duplicates();addDividers();},{once:true});
})();