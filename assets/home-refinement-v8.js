(()=>{
  'use strict';

  function setLabel(section,number,title){
    if(!section)return;
    let label=section.querySelector('.ptg-stats-eyebrow,.ptg-photobank-kicker,.eyebrow,.scene-kicker');
    if(!label){
      label=document.createElement('div');
      label.className='eyebrow ptg-auto-screen-label';
      const host=section.querySelector('.wrap,.closing-content')||section;
      host.prepend(label);
    }
    const next=`${number} / ${title}`;
    if(label.textContent!==next)label.textContent=next;
  }

  function apply(){
    const mobileTagline=document.querySelector('.ptg-static-cover-v6-mobile-copy > p');
    if(mobileTagline) mobileTagline.textContent='Инвестиции, господдержка и GR с помощью ИИ';

    const canvas=document.querySelector('.ptg-static-cover-v6-canvas');
    if(canvas&&!canvas.querySelector('.ptg-static-cover-v8-tagline')){
      const tagline=document.createElement('div');
      tagline.className='ptg-static-cover-v8-tagline';
      tagline.textContent='Инвестиции, господдержка и GR с помощью ИИ';
      canvas.appendChild(tagline);
    }

    const aliases=[['.opening-scene','cover'],['.ptg-stats','stats'],['.ref-structure','financial-structure'],['.ref-process','process']];
    aliases.forEach(([selector,id])=>{const el=document.querySelector(selector);if(el)el.id=id;});
    const pages=window.ptgHomePages||[];
    const main=document.querySelector('main');
    const nodes=pages.filter(p=>p.href!=='#cover').map(p=>document.querySelector(p.href)).filter(Boolean);
    // Only move nodes whose next section is wrong; repeat calls do not churn the DOM.
    for(let i=nodes.length-2;i>=0;i--){
      let next=nodes[i].nextElementSibling;
      while(next&&next.tagName!=='SECTION')next=next.nextElementSibling;
      if(next!==nodes[i+1])main.insertBefore(nodes[i],nodes[i+1]);
    }
    pages.filter(p=>p.href!=='#cover').forEach(p=>setLabel(document.querySelector(p.href),p.n,p.meta));
    const nav=document.querySelector('#navigation');
    if(nav&&!nav.dataset.complete){
      nav.innerHTML='<a href="/#site-map">Все разделы</a>'+pages.map(p=>`<a href="/${p.href}"><span>${p.n}</span> ${p.title}</a>`).join('');
      nav.dataset.complete='true';
      nav.addEventListener('click',event=>{
        if(!event.target.closest('a'))return;
        nav.classList.remove('open');
        const button=document.querySelector('.menu');
        button?.setAttribute('aria-expanded','false');
        button?.setAttribute('aria-label','Открыть меню');
      });
    }

  }

  window.ptgRenumberScreens=apply;
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  window.addEventListener("load",()=>{apply();setTimeout(apply,1200);},{once:true});
})();
