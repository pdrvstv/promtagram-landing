(function(){
  function scrollToId(id){
    var el=document.getElementById(id);
    if(el){el.scrollIntoView({behavior:'smooth',block:'start'});}
  }
  function bindScroll(){
    document.querySelectorAll('[data-scroll]').forEach(function(el){
      el.addEventListener('click',function(e){
        e.preventDefault();
        scrollToId(el.getAttribute('data-scroll'));
      });
    });
  }
  function bindLogoFallback(){
    var img=document.getElementById('brandLogo');
    var fallback=document.getElementById('brandFallback');
    if(!img||!fallback)return;
    function show(){img.style.display='none';fallback.style.display='inline-flex';}
    img.addEventListener('error',show);
    if(img.complete&&img.naturalWidth===0)show();
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){bindScroll();bindLogoFallback();});
  } else {bindScroll();bindLogoFallback();}
})();
