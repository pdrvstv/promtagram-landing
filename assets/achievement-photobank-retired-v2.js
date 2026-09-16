(()=>{
  'use strict';

  function removeEmbeddedAchievementPhotobank(){
    document.querySelectorAll('.reference-home #achievements .ptg-proof-cloud').forEach(node=>node.remove());
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',removeEmbeddedAchievementPhotobank,{once:true});
  }else{
    removeEmbeddedAchievementPhotobank();
  }

  window.addEventListener('load',()=>{
    removeEmbeddedAchievementPhotobank();
    setTimeout(removeEmbeddedAchievementPhotobank,250);
    setTimeout(removeEmbeddedAchievementPhotobank,900);
  },{once:true});

  const observer=new MutationObserver(()=>removeEmbeddedAchievementPhotobank());
  if(document.documentElement) observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),3000);
})();
