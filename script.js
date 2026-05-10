(function(){
  function go(id){
    var el=document.getElementById(id);
    if(el){el.scrollIntoView({behavior:'smooth',block:'start'});}
  }
  document.querySelectorAll('[data-scroll]').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var id=btn.getAttribute('data-scroll');
      if(id){go(id);}    
    });
  });
  var img=document.getElementById('brandLogo');
  var fb=document.getElementById('brandFallback');
  if(img&&fb){
    function show(){img.style.display='none';fb.style.display='inline-flex';}
    img.addEventListener('error',show);
    if(img.complete&&img.naturalWidth===0){show();}
  }
})();
