(()=>{'use strict';
const apply=()=>{
  const cards=document.querySelectorAll('.reference-home .ptg-stats .ptg-stat');
  if(cards.length<4)return false;
  const patches=[
    {index:0,value:'2,65',unit:'млрд ₽'},
    {index:2,value:'6',unit:'AI-агентов'}
  ];
  patches.forEach(({index,value,unit})=>{
    const card=cards[index];
    if(!card || card.dataset.unitsPatched==='1')return;
    const strong=card.querySelector('strong');
    const caption=card.querySelector('span');
    if(!strong || !caption)return;
    strong.textContent=value;
    const unitEl=document.createElement('span');
    unitEl.className='ptg-stat-unit';
    unitEl.textContent=unit;
    caption.before(unitEl);
    card.dataset.unitsPatched='1';
  });
  return true;
};
if(!apply()){
  const obs=new MutationObserver(()=>{if(apply())obs.disconnect();});
  obs.observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener('load',()=>apply(),{once:true});
}
})();
