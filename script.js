(function(){
  var FORM_PUBLIC_URL='https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform';

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
        '<h2>Проверьте меры поддержки за 1 минуту</h2>'+
        '<p>Оставьте контакты и кратко опишите запрос. Для отправки используется защищённая форма Promtagram, связанная с CRM.</p>'+
      '</div>'+
      '<form class="hero-mini-form" action="'+FORM_PUBLIC_URL+'" method="get" target="_blank">'+
        '<label><span>Имя</span><input name="name" autocomplete="name" placeholder="Иван" required></label>'+
        '<label><span>Телефон</span><input name="phone" autocomplete="tel" inputmode="tel" placeholder="+7" required></label>'+
        '<label><span>Компания</span><input name="company" autocomplete="organization" placeholder="ООО / ИП"></label>'+
        '<label><span>Запрос</span><select name="support_interest"><option>Льготное финансирование</option><option>Субсидии и компенсации</option><option>ФРП / производство</option><option>Лизинг оборудования</option><option>АПК / переработка</option><option>Экспорт / РЭЦ</option><option>Автоматизация / роботизация</option></select></label>'+
        '<button class="btn btn-primary hero-submit" type="submit">Оставить заявку на аудит</button>'+
        '<a class="hero-form-link" target="_blank" rel="noopener" href="'+FORM_PUBLIC_URL+'">Открыть полную форму</a>'+
      '</form>'+
      '<p class="hero-consent-note">Нажимая кнопку, вы переходите к форме отправки заявки и подтверждаете согласие на обработку контактных данных для связи и предварительного разбора запроса. Предварительная оценка не является гарантией одобрения поддержки.</p>';

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
          '<h2>Стоимость капитала определяет траекторию бизнеса</h2>'+
          '<p>Когда рыночное финансирование становится дорогим, бизнесу нужен не набор случайных программ, а понятный маршрут: ставка, субсидия, компенсация, лизинг, документы и риск-контроль.</p>'+
        '</div>'+
        '<div class="economics-board" aria-label="Сравнение рыночного финансирования и господдержки">'+
          '<article><span>Рыночный контур</span><strong>18–30%+</strong><p>дорогие деньги, давление на маржу, отложенные инвестиции</p></article>'+
          '<div class="economics-route"><b>Promtagram</b><small>скоринг → карта мер → документы → риски</small></div>'+
          '<article><span>Контур поддержки</span><strong>до 0%</strong><p>по отдельным программам, плюс возможные компенсации и лизинговые механики</p></article>'+
        '</div>'+
        '<p class="economics-disclaimer">Демо-сравнение. Конкретная ставка, субсидия или компенсация зависит от программы, региона, компании, документов и решения оператора меры.</p>'+
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
