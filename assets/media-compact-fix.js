(()=>{'use strict';
const href='/assets/site-grid-fix.css?v=20260914compact';
if(!document.querySelector(`link[href="${href}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);}
function stripMediaVisuals(){
  const grid=document.querySelector('#media .media-grid');
  if(!grid)return;
  grid.querySelectorAll('.article').forEach(card=>{
    card.style.backgroundImage='none';
    card.querySelectorAll('img,picture,svg,video,canvas,.article-art,.media-art,.thumb,.thumbnail,.illustration').forEach(node=>node.remove());
    card.querySelectorAll('[style*="background-image"]').forEach(node=>{node.style.backgroundImage='none';});
  });
  if(!grid.dataset.compactMediaObserver){
    grid.dataset.compactMediaObserver='1';
    new MutationObserver(stripMediaVisuals).observe(grid,{childList:true,subtree:true});
  }
}
stripMediaVisuals();
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',stripMediaVisuals,{once:true});
window.addEventListener('load',()=>{stripMediaVisuals();setTimeout(stripMediaVisuals,120);},{once:true});
})();
