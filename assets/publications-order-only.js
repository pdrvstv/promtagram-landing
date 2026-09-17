(()=>{
  'use strict';

  function apply(){
    const recognition=document.querySelector('#recognition');
    const partnership=document.querySelector('#market-recognition');
    const photobank=document.querySelector('#photobank');
    const ecosystem=document.querySelector('#ecosystem');
    const media=document.querySelector('#media');
    const evidence=document.querySelector('#achievements');
    const mission=document.querySelector('#mission');

    // Preserve the pre-v10 recognition/partnership/photobank cluster before ecosystem.
    if(ecosystem&&recognition) ecosystem.parentNode.insertBefore(recognition,ecosystem);
    if(recognition&&partnership) recognition.insertAdjacentElement('afterend',partnership);
    if(partnership&&photobank) partnership.insertAdjacentElement('afterend',photobank);
    else if(recognition&&photobank) recognition.insertAdjacentElement('afterend',photobank);

    // The only retained owner change: Publications immediately precedes Evidence.
    if(media&&evidence) media.insertAdjacentElement('afterend',evidence);
    if(evidence&&mission&&evidence.nextElementSibling!==mission) evidence.insertAdjacentElement('afterend',mission);

    window.ptgRenumberScreens?.();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  window.addEventListener('load',()=>{apply();setTimeout(apply,300);setTimeout(apply,1600);setTimeout(apply,5400);},{once:true});
})();
