
(()=>{'use strict';
 const filterButtons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('[data-category]')];
 for(const b of filterButtons)b.addEventListener('click',()=>{const val=b.dataset.filter;for(const c of cards)c.dataset.hidden=val!=='all'&&c.dataset.category!==val?'true':'false';for(const item of filterButtons)item.setAttribute('aria-pressed',item===b?'true':'false');});
 const modal=document.querySelector('.modal');if(!modal)return;
 const zoom=[...document.querySelectorAll('.image-view')];let index=0,lastFocus=null;
 const show=i=>{index=(i+zoom.length)%zoom.length;const el=zoom[index];modal.querySelector('img').src=el.dataset.full||el.src;modal.querySelector('img').alt=el.alt;modal.querySelector('.modal-caption').textContent=el.alt;};
 const close=()=>{modal.removeAttribute('open');document.body.style.overflow='';modal.querySelector('img').removeAttribute('src');if(lastFocus)lastFocus.focus();};
 zoom.forEach((el,i)=>{el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label','Увеличить: '+el.alt);const open=()=>{lastFocus=el;show(i);modal.setAttribute('open','');document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus();};el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}})});
 modal.querySelector('.modal-close').addEventListener('click',close);modal.querySelector('[data-prev]').addEventListener('click',()=>show(index-1));modal.querySelector('[data-next]').addEventListener('click',()=>show(index+1));
 modal.addEventListener('click',e=>{if(e.target===modal)close()});
 document.addEventListener('keydown',e=>{if(!modal.hasAttribute('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1);});
})();
