(function(){
  var FORM_PUBLIC_URL='https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform';
  var FORM_EMBED_URL='https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform?embedded=true';

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

  function enhanceHeroLeadForm(){
    var heroCopy=document.querySelector('.hero-copy');
    if(!heroCopy || document.querySelector('.hero-audit-card')) return;

    var actions=heroCopy.querySelector('.hero-actions');
    var trust=heroCopy.querySelector('.trust-line');
    if(actions){actions.remove();}
    if(trust){trust.remove();}

    var card=document.createElement('div');
    card.className='hero-audit-card';
    card.innerHTML=''+
      '<div class="hero-audit-head">'+
        '<span class="audit-badge">Бесплатный первичный аудит</span>'+
        '<h2>Оставьте контакты — проверим, какие меры поддержки могут подойти</h2>'+
        '<p>Заполните короткую форму. Мы используем данные только для связи, первичной квалификации запроса и подготовки предварительного маршрута.</p>'+
      '</div>'+
      '<div class="hero-form-frame">'+
        '<iframe src="'+FORM_EMBED_URL+'" title="Форма бесплатного аудита Promtagram" loading="lazy"></iframe>'+
      '</div>'+
      '<div class="hero-consent-note">'+
        '<span>Нажимая кнопку отправки в форме, вы подтверждаете согласие на обработку контактных данных для связи и предварительного разбора запроса. Предварительная оценка не является гарантией одобрения поддержки.</span>'+
        '<a target="_blank" rel="noopener" href="'+FORM_PUBLIC_URL+'">Открыть форму отдельно</a>'+
      '</div>';

    heroCopy.appendChild(card);
  }

  function insertEconomicsInfographic(){
    if(document.getElementById('support-economics')) return;
    var hero=document.querySelector('.scene-hero');
    if(!hero || !hero.parentNode) return;

    var section=document.createElement('section');
    section.className='scene economics-scene';
    section.id='support-economics';
    section.innerHTML=''+
      '<div class="container economics-wrap">'+
        '<div class="economics-copy">'+
          '<p class="eyebrow dark">Экономика поддержки</p>'+
          '<h2>Когда стоимость денег растёт, господдержка становится управленческим маршрутом</h2>'+
          '<p>Для инвестиционных проектов важны не только продажи, но и цена финансирования, компенсации, субсидии, лизинг и документная готовность. Promtagram помогает предварительно увидеть, где может быть более рациональный путь.</p>'+
        '</div>'+
        '<div class="economics-image-card">'+
          '<img src="assets/support-economics-map.svg" alt="Инфографика: рыночное финансирование и господдержка" loading="lazy">'+
        '</div>'+
      '</div>';

    hero.parentNode.insertBefore(section, hero.nextSibling);
  }

  function init(){
    bindScroll();
    bindLogoFallback();
    enhanceHeroLeadForm();
    insertEconomicsInfographic();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else {
    init();
  }
})();
