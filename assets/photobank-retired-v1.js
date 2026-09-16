(()=>{
  'use strict';
  const DRIVE='https://drive.google.com/drive/folders/1WpJ2cv6BjcWu0bj7n_F9Ysb0toy1OEBW';

  function retirePhotobank(){
    document.querySelectorAll('.reference-home #photobank,.reference-home section.ptg-photobank').forEach(node=>node.remove());

    document.querySelectorAll('.reference-home .ptg-square-menu a[href="#photobank"]').forEach(link=>{
      link.href=DRIVE;
      link.target='_blank';
      link.rel='noopener noreferrer';
      link.setAttribute('aria-label','Фотобанк Promtagram — открыть архив на Google Drive');
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',retirePhotobank,{once:true});
  }else{
    retirePhotobank();
  }

  window.addEventListener('load',()=>{
    retirePhotobank();
    setTimeout(retirePhotobank,300);
    setTimeout(retirePhotobank,1000);
  },{once:true});

  const observer=new MutationObserver(()=>retirePhotobank());
  if(document.documentElement) observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),2500);
})();
