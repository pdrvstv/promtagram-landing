(()=>{'use strict';
const SPRITE='/assets/menu-icons-3d-sprite.webp?v=20260915-1905';
const positions=[['0%','0%'],['100%','0%'],['0%','33.333%'],['100%','33.333%'],['0%','66.667%'],['100%','66.667%'],['0%','100%'],['100%','100%']];
function apply(){
  const faces=[...document.querySelectorAll('.reference-home .ptg-square-grid .ptg-page-face')];
  if(faces.length<8)return false;
  faces.slice(0,8).forEach((face,i)=>{
    if(face.dataset.icon3d==='1')return;
    const [x,y]=positions[i];
    face.dataset.icon3d='1';
    face.style.opacity='1';
    face.innerHTML=`<span class="ptg-icon3d" aria-hidden="true" style="width:76%;aspect-ratio:1;display:block;border-radius:24%;background-image:url('${SPRITE}');background-size:200% 400%;background-position:${x} ${y};background-repeat:no-repeat;filter:drop-shadow(0 10px 20px rgba(31,55,72,.10));"></span>`;
  });
  return true;
}
function boot(){
  if(apply())return;
  const observer=new MutationObserver(()=>{if(apply())observer.disconnect();});
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>{apply();observer.disconnect();},2000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
window.addEventListener('load',()=>{apply();setTimeout(apply,300);setTimeout(apply,900);},{once:true});
})();
