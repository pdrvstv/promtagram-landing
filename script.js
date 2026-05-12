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

  function enhanceSupportContour(){
    var trust=document.querySelector('.trust-strip .container');
    if(!trust || trust.querySelector('.institution-logos')) return;

    var grid=trust.querySelector('.contour-grid');
    var title=trust.querySelector('.strip-title');
    if(!grid) return;

    grid.querySelectorAll('article').forEach(function(article){
      var heading=article.querySelector('h3');
      if(heading && heading.textContent.trim().toLowerCase().indexOf('институт')!==-1){
        article.remove();
      }
    });

    var institutions=[
      ['МП','Минпромторг'],['ФРП','ФРП'],['МСП','Корпорация МСП'],['Банк','МСП Банк'],['РЭЦ','РЭЦ'],['ГИС','ГИСП'],['МЭР','Минэкономразвития'],['МСХ','Минсельхоз']
    ];
    var logos=document.createElement('div');
    logos.className='institution-logos';
    logos.setAttribute('aria-label','Ключевые институты и контуры поддержки');
    logos.innerHTML=institutions.map(function(item){
      return '<span class="institution-mark"><b>'+item[0]+'</b><em>'+item[1]+'</em></span>';
    }).join('');

    if(title && title.nextSibling){trust.insertBefore(logos,title.nextSibling);} else {trust.insertBefore(logos,grid);}
  }

  function insertPremiumLayoutStyles(){
    if(document.getElementById('premium-layout-v05')) return;
    var style=document.createElement('style');
    style.id='premium-layout-v05';
    style.textContent=''+
      '.scene-hero{padding:86px 0 72px}.hero-grid{grid-template-columns:1fr 1fr;gap:24px 28px;align-items:stretch}.hero-copy{display:contents}.hero-copy>.eyebrow,.hero-copy>h1,.hero-copy>.sub{grid-column:1/-1}.hero-copy>h1{max-width:1120px}.hero-copy>.sub{max-width:920px;margin-bottom:10px}.hero-audit-card{grid-column:1;margin-top:0;max-width:none;height:100%;min-height:430px;display:flex;flex-direction:column}.hero-mini-form{margin-top:auto}.dashboard{grid-column:2;align-self:stretch;min-height:430px;height:100%;display:flex;flex-direction:column}.dash-list{margin-top:16px}.risk-row{margin-top:auto}.trust-strip{background:radial-gradient(900px 460px at 80% 0%,rgba(47,94,219,.22),transparent 60%),linear-gradient(180deg,#08111f,#101f36);color:#eef5ff;border:0;padding:70px 0}.trust-strip .strip-title{font-size:clamp(30px,3.2vw,46px);letter-spacing:-.04em;color:#fff;margin-bottom:22px}.institution-logos{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 24px}.institution-mark{display:flex!important;align-items:center;gap:10px;min-height:58px;padding:10px 14px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:rgba(255,255,255,.07);color:#dceaff;font-weight:800;letter-spacing:-.01em;white-space:normal}.institution-mark b{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.12);color:#fff;font-size:12px;font-style:normal}.institution-mark em{font-style:normal;line-height:1.15}.trust-strip .contour-grid{grid-template-columns:1fr 1fr;gap:14px}.trust-strip .contour-grid article{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:26px;padding:24px;box-shadow:none}.trust-strip .contour-grid h3{color:#fff;font-size:18px}.trust-strip .contour-grid p{color:#bfd0e8}.economics-scene{background:#fff}.scene-map,.scene-light{background:#f5f5f7}.scene-white{background:#fff}.scene-trust{background:#0f1a2b}.support-links-grid a,.pack-grid article,.industry-grid article,.route-card,.demo,.faq-list details{box-shadow:0 18px 42px rgba(15,27,42,.055)}@media(max-width:1040px){.hero-grid{grid-template-columns:1fr}.hero-audit-card,.dashboard{grid-column:1;min-height:auto}.hero-copy{display:block}.hero-copy>.sub{margin-bottom:0}.trust-strip .contour-grid{grid-template-columns:1fr}.institution-logos{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.scene-hero{padding:54px 0}.institution-logos{grid-template-columns:1fr}.hero-audit-card,.dashboard{border-radius:24px}}';
    document.head.appendChild(style);
  }

  function init(){
    bindScroll();
    bindLogoFallback();
    enhanceHeroLeadForm();
    insertEconomicsInfographic();
    enhanceSupportContour();
    insertPremiumLayoutStyles();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else {
    init();
  }
})();
