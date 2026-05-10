(function(){
  function scrollToId(id){
    var el=document.getElementById(id);
    if(el){el.scrollIntoView({behavior:'smooth',block:'start'});}
  }

  function bindScroll(){
    document.querySelectorAll('[data-scroll]').forEach(function(el){
      el.addEventListener('click',function(e){
        e.preventDefault();
        var target=el.getAttribute('data-scroll');
        if(target){scrollToId(target);}
      });
    });
  }

  function bindLogoFallback(){
    var img=document.getElementById('brandLogo');
    var fallback=document.getElementById('brandFallback');
    if(!img||!fallback)return;

    function showFallback(){
      img.style.display='none';
      fallback.style.display='inline-flex';
    }

    img.addEventListener('error',showFallback);
    if(img.complete && img.naturalWidth===0){showFallback();}
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){
      bindScroll();
      bindLogoFallback();
    });
  } else {
    bindScroll();
    bindLogoFallback();
  }
})();
