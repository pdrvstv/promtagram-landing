(()=>{'use strict';
const removeHrefs=new Set([
'https://a24.press/news/economy/2025-12-30/astrahanskaya-oblast-zanyala-vtoroe-mesto-v-rossii-po-realizatsii-natsproekta-po-podderzhke-msp-206735',
'https://a24.press/news/misc/2025-12-12/astrahanskaya-oblast-zanyala-vtoroe-mesto-sredi-regionov-rossii-po-kachestvu-investitsionnoy-karty-205720'
]);
function apply(){const media=document.querySelector('#media'),grid=media&&media.querySelector('.media-grid');if(!grid)return;grid.querySelectorAll('a.article[href]').forEach(a=>{if(removeHrefs.has(a.href))a.remove();});if(!grid.querySelector('[data-volga-proof]')){const card=document.createElement('article');card.className='article';card.dataset.volgaProof='1';card.setAttribute('aria-label','Газета ВОЛГА — публикация с комментарием Владимира Короля');card.innerHTML='<div class="source">Газета «ВОЛГА» · региональная пресса</div><h3>Комментарий Владимира Короля в газете «ВОЛГА»</h3><p>Материал регионального издания с экспертным комментарием Владимира Короля.</p><span class="article-link">Публикация в СМИ</span>';const rg=grid.querySelector('a.article[href*="rg.ru/"]');if(rg)rg.insertAdjacentElement('afterend',card);else grid.prepend(card);}}
apply();if(document.readyState==='complete')apply();else window.addEventListener('load',apply,{once:true});
})();
