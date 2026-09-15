/* Shared progressive enhancement. Existing cards, text and links stay in place. */
(()=>{'use strict';
function initCoverflow(section, selector, label){
 const stage=section?.querySelector(selector);
 if(!stage||stage.dataset.coverflowReady)return;
 const cards=Array.from(stage.children);if(!cards.length)return;
 stage.dataset.coverflowReady='1';stage.classList.add('ptg-coverflow-stage');
 stage.tabIndex=0;stage.setAttribute('role','region');stage.setAttribute('aria-roledescription','карусель');stage.setAttribute('aria-label',label+' — стрелки влево и вправо');
 section.classList.add('ptg-has-coverflow');
 section.querySelector('.carousel-controls')?.remove();
 const controls=document.createElement('div');controls.className='ptg-coverflow-controls';
 controls.innerHTML='<button type="button" aria-label="Предыдущая карточка">←</button><span aria-live="polite" aria-atomic="true"></span><button type="button" aria-label="Следующая карточка">→</button>';
 stage.after(controls);const [prev,next]=controls.querySelectorAll('button'),count=controls.querySelector('span');
 let active=0,pointer=null,suppressClick=false,wheelUntil=0;
 function render(){
  const width=Math.min(390,stage.clientWidth*.76),step=width*.72;
  cards.forEach((card,i)=>{
   const d=i-active,a=Math.abs(d);card.classList.add('ptg-cf-item');card.classList.toggle('is-active',d===0);
   card.style.setProperty('--cf-transform',`translateX(-50%) translate3d(${d*step}px,${a?20:0}px,${a?-Math.min(a*85,340):0}px) rotateY(${d===0?0:d<0?52:-52}deg) scale(${a?Math.max(.7,.9-a*.04):1})`);
   card.style.setProperty('--cf-z',String(100-a));card.style.setProperty('--cf-opacity',a>3?'0':a?'.65':'1');
   card.style.pointerEvents=a>3?'none':'';
   card.tabIndex=d===0?0:-1;card.setAttribute('aria-label',`${i+1} / ${cards.length}: ${card.querySelector('h3')?.textContent||label}`);
   card.querySelectorAll('a,button').forEach(link=>link.tabIndex=d===0?0:-1);
   card.setAttribute('aria-current',String(d===0));
  });
  stage.style.setProperty('--cf-width',width+'px');
  stage.style.height=Math.ceil(Math.max(...cards.map(c=>c.offsetHeight))+55)+'px';
  count.textContent=`${active+1} / ${cards.length}`;prev.disabled=active===0;next.disabled=active===cards.length-1;
 }
 function go(i){const n=Math.max(0,Math.min(cards.length-1,i));if(n===active)return;active=n;render();}
 prev.addEventListener('click',()=>go(active-1));next.addEventListener('click',()=>go(active+1));
 stage.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();go(active+(e.key==='ArrowRight'?1:-1));stage.focus({preventScroll:true});}else if(e.key==='Enter'&&e.target===cards[active]&&e.target.tagName!=='A'){e.preventDefault();cards[active].querySelector('a[href]')?.click();}});
 stage.addEventListener('click',e=>{
  if(suppressClick){e.preventDefault();e.stopImmediatePropagation();suppressClick=false;return;}
  const card=e.target.closest('.ptg-cf-item'),i=cards.indexOf(card);if(i<0)return;
  if(i!==active){e.preventDefault();e.stopImmediatePropagation();go(i);stage.focus({preventScroll:true});}
  else if(!e.target.closest('a,button'))card.querySelector('a[href]')?.click();
 },true);
 stage.addEventListener('dragstart',e=>e.preventDefault());
 stage.addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0)return;suppressClick=false;pointer={id:e.pointerId,x:e.clientX,y:e.clientY,dx:0,drag:false};});
 stage.addEventListener('pointermove',e=>{if(!pointer||pointer.id!==e.pointerId)return;pointer.dx=e.clientX-pointer.x;const dy=e.clientY-pointer.y;if(!pointer.drag&&Math.abs(pointer.dx)>12&&Math.abs(pointer.dx)>Math.abs(dy)*1.3){pointer.drag=true;stage.setPointerCapture(e.pointerId);} });
 stage.addEventListener('pointerup',e=>{if(!pointer||pointer.id!==e.pointerId)return;const p=pointer;pointer=null;if(p.drag){suppressClick=true;if(Math.abs(p.dx)>38)go(active+(p.dx<0?1:-1));}if(stage.hasPointerCapture(e.pointerId))stage.releasePointerCapture(e.pointerId);});
 stage.addEventListener('pointercancel',()=>{pointer=null;suppressClick=false;});
 stage.addEventListener('wheel',e=>{if(e.ctrlKey)return;const delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;if(!delta)return;const dir=Math.sign(delta);if(active+dir<0||active+dir>=cards.length)return;e.preventDefault();if(performance.now()<wheelUntil)return;wheelUntil=performance.now()+320;go(active+dir);},{passive:false});
 const resize=new ResizeObserver(render);resize.observe(stage);cards.forEach(c=>resize.observe(c));render();
}
function start(){if(!document.body.classList.contains('reference-home'))return;initCoverflow(document.querySelector('#cases'),'.case-track','Кейсы Promtagram');initCoverflow(document.querySelector('#media'),'.media-grid','Публикации Promtagram');}
// Run after the ordered legacy content builders and their load handlers.
if(document.readyState==='complete')start();else window.addEventListener('load',()=>setTimeout(start,0),{once:true});
})();
