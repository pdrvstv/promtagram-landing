(()=>{
  'use strict';

  const BUILD='20260917-owner-v10';
  const pages=[
    {sel:'.ptg-stats',n:'01',title:'PROMTAGRAM В ЦИФРАХ',meta:'Ключевые показатели',href:'#stats'},
    {sel:'#solutions',n:'02',title:'ПЯТЬ НАПРАВЛЕНИЙ',meta:'Господдержка и финансирование',href:'#solutions'},
    {sel:'.ref-structure',n:'03',title:'ФИНАНСОВОЕ СТРУКТУРИРОВАНИЕ',meta:'Структура проекта',href:'#financial-structure'},
    {sel:'#system',n:'04',title:'AI-СИСТЕМА',meta:'Агенты Promtagram',href:'#system'},
    {sel:'.ref-process',n:'05',title:'ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ',meta:'От задачи к маршруту',href:'#process'},
    {sel:'#founder',n:'06',title:'ОСНОВАТЕЛЬ PROMTAGRAM',meta:'Владимир Король',href:'#founder'},
    {sel:'#cases',n:'07',title:'ПРАКТИКА PROMTAGRAM',meta:'Кейсы и разборы',href:'#cases'},
    {sel:'#instruments',n:'08',title:'ОРИЕНТИРЫ ПО ИНСТРУМЕНТАМ',meta:'Условия и диапазоны',href:'#instruments'},
    {sel:'#calculator',n:'09',title:'ЭКОНОМИКА ПРОЕКТА',meta:'Расчёт сценариев',href:'#calculator'},
    {sel:'#practice',n:'10',title:'ПРЕДМЕТНЫЙ РЕЗУЛЬТАТ',meta:'Документы для решения',href:'#practice'},
    {sel:'#recognition',n:'11',title:'ДОКУМЕНТЫ И ПРИЗНАНИЕ',meta:'TOP-1000 и подтверждения',href:'#recognition'},
    {sel:'#market-recognition',n:'12',title:'ПАРТНЁРСТВО',meta:'Нейролаб и ТехноБрокер',href:'#market-recognition'},
    {sel:'#photobank',n:'13',title:'ФОТОБАНК / АРХИВ',meta:'Promtagram в работе',href:'#photobank'},
    {sel:'#ecosystem',n:'14',title:'СИСТЕМА ГОСПОДДЕРЖКИ',meta:'Институты и инфраструктура',href:'#ecosystem'},
    {sel:'#media',n:'15',title:'ПУБЛИКАЦИИ',meta:'Экспертные материалы',href:'#media'},
    {sel:'#achievements',n:'16',title:'ДОКАЗАТЕЛЬСТВА',meta:'Роли и проверяемые подтверждения',href:'#achievements'},
    {sel:'#mission',n:'17',title:'НАША МИССИЯ',meta:'Общественный контур',href:'#mission'},
    {sel:'#faq',n:'18',title:'ВОПРОСЫ И ОТВЕТЫ',meta:'Что важно до начала работы',href:'#faq'},
    {sel:'#lead',n:'19',title:'СЛЕДУЮЩИЙ ШАГ',meta:'Обсудить проект',href:'#lead'}
  ];

  const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const icon=(i)=>{
    const variants=[
      '<path d="M10 12h28v24H10z"/><path d="M15 18h18M15 24h12M15 30h8"/>',
      '<circle cx="24" cy="24" r="12"/><path d="M24 12v24M12 24h24"/>',
      '<path d="M9 36 20 13l9 18 10-11"/><path d="M9 36h30"/>',
      '<circle cx="24" cy="24" r="6"/><circle cx="11" cy="14" r="3"/><circle cx="37" cy="14" r="3"/><circle cx="11" cy="34" r="3"/><circle cx="37" cy="34" r="3"/><path d="M16 17l4 4M32 17l-4 4M16 31l4-4M32 31l-4-4"/>',
      '<path d="M9 15h8v8H9zM31 15h8v8h-8zM20 29h8v8h-8z"/><path d="M17 19h14M35 23v6M13 23v10h7"/>',
      '<circle cx="24" cy="17" r="7"/><path d="M12 39c2-9 7-14 12-14s10 5 12 14"/>',
      '<path d="M9 14h30v24H9z"/><path d="M16 14v-4h16v4M15 21h18M15 28h12"/>',
      '<path d="M10 37h28M13 32V20h8v12M25 32V13h8v19"/>',
      '<path d="M12 36 24 12l12 24Z"/><path d="M18 28h12"/>',
      '<path d="M11 10h26v28H11z"/><path d="M16 17h16M16 23h16M16 29h10"/>',
      '<path d="M12 9h24v30H12z"/><path d="M18 16h12M18 22h12M18 28h8"/><path d="m28 34 3 3 7-8"/>',
      '<path d="M10 24h8l4-8 6 16 4-8h6"/><circle cx="24" cy="24" r="17"/>',
      '<rect x="8" y="11" width="32" height="26" rx="3"/><circle cx="18" cy="20" r="4"/><path d="m12 33 8-8 6 6 4-4 6 6"/>',
      '<path d="M8 31h32M12 31V17h24v14M16 17v-6h16v6"/>',
      '<path d="M11 9h26v30H11z"/><path d="M16 15h16M16 21h16M16 27h10M16 33h7"/>',
      '<circle cx="24" cy="20" r="9"/><path d="m17 28-3 11 10-5 10 5-3-11"/><path d="m20 20 3 3 6-7"/>',
      '<path d="M24 39s-14-8-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 19-14 19Z"/><path d="M24 15v12M18 21h12"/>',
      '<circle cx="16" cy="24" r="4"/><circle cx="32" cy="24" r="4"/><path d="M20 24h8M9 13h30v22H9z"/>',
      '<path d="M10 24h24M29 17l7 7-7 7"/><circle cx="13" cy="24" r="4"/>'
    ];
    return `<svg viewBox="0 0 48 48" aria-hidden="true">${variants[i%variants.length]}</svg>`;
  };

  function assignAnchors(){
    const ids=[['.ptg-stats','stats'],['.ref-structure','financial-structure'],['.ref-process','process']];
    ids.forEach(([sel,id])=>{const el=document.querySelector(sel);if(el&&!el.id)el.id=id;});
  }

  function orderSections(){
    const recognition=document.querySelector('#recognition');
    const partnership=document.querySelector('#market-recognition');
    const photobank=document.querySelector('#photobank');
    const ecosystem=document.querySelector('#ecosystem');
    const media=document.querySelector('#media');
    const evidence=document.querySelector('#achievements');
    const mission=document.querySelector('#mission');

    if(ecosystem&&recognition) ecosystem.parentNode.insertBefore(recognition,ecosystem);
    if(recognition&&partnership) recognition.insertAdjacentElement('afterend',partnership);
    if(partnership&&photobank) partnership.insertAdjacentElement('afterend',photobank);
    else if(recognition&&photobank) recognition.insertAdjacentElement('afterend',photobank);
    if(media&&evidence) media.insertAdjacentElement('afterend',evidence);
    if(evidence&&mission&&evidence.nextElementSibling!==mission) evidence.insertAdjacentElement('afterend',mission);
  }

  function partnershipScreen(){
    const sec=document.querySelector('#market-recognition');
    if(!sec)return;
    sec.className='section ptg-market-proof ptg-partnership-v10';
    sec.innerHTML=`<div class="wrap">
      <div class="eyebrow">12 / ПАРТНЁРСТВО</div>
      <div class="ptg-market-proof-head">
        <h2>Promtagram<br><em>в ИИ-экосистеме.</em></h2>
        <p>Два независимых внешних сигнала: публичное включение в карту игроков российского ИИ-рынка и аналитический профиль, сформированный отраслевой командой.</p>
      </div>
      <div class="ptg-market-proof-grid">
        <a class="ptg-market-card ptg-neirolab-card" href="https://neirolab-ai.ru/map?cluster=developers&amp;company=dev-2" target="_blank" rel="noopener noreferrer">
          <div class="ptg-market-card-meta"><span>ЦТИ «НЕЙРОЛАБ» / ПУБЛИЧНАЯ КАРТА</span><span>ПРОВЕРЯЕМО ↗</span></div>
          <div class="ptg-market-mark">N/AI</div>
          <h3>Promtagram на карте игроков ИИ-рынка России</h3>
          <p>Promtagram включён в категорию «Разработчики» на карте ЦТИ «Нейролаб». Карточка доступна во внешнем источнике для независимой проверки.</p>
          <div class="ptg-market-proofline"><span>Разработчики</span><span>Российская ИИ-экосистема</span><span>Публичный источник</span></div>
          <div class="ptg-market-cta">Открыть карточку на карте ↗</div>
        </a>
        <article class="ptg-market-card ptg-techbroker-card">
          <div class="ptg-market-card-meta"><span>ТЕХНОБРОКЕР / ВХОДЯЩЕЕ ПИСЬМО</span><span>10.08.2026</span></div>
          <div class="ptg-mail-window">
            <div class="ptg-mail-bar"><i></i><i></i><i></i></div>
            <div class="ptg-mail-body">
              <div class="ptg-mail-row"><span>Отправитель</span><b>info@tech-broker.ru</b></div>
              <div class="ptg-mail-row"><span>Профиль</span><b>Promtagram AI/GR Project Office</b></div>
              <p class="ptg-mail-quote">По итогам анализа сформирован профиль Promtagram; внутренний пилот описан как действующий операционный контур.</p>
              <small class="ptg-mail-note">Краткое содержание письма. Это внешнее аналитическое профилирование, а не сертификат, госреестр или заявление о публичной аккредитации.</small>
            </div>
          </div>
          <h3>Профиль Promtagram в аналитическом контуре ТехноБрокера</h3>
          <p>Команда просила сообщить фактические неточности, дополнения или ограничения публичного использования профиля. Публично показываем только проверяемый смысл письма без служебной переписки.</p>
          <div class="ptg-techbroker-links"><a href="https://tech-broker.ru/" target="_blank" rel="noopener noreferrer">tech-broker.ru ↗</a><a href="mailto:info@tech-broker.ru">info@tech-broker.ru ↗</a></div>
        </article>
      </div>
    </div>`;
  }

  function founderContacts(){
    const founder=document.querySelector('#founder');
    const layout=founder?.querySelector('.founder-layout');
    const portrait=layout?.querySelector('figure.portrait');
    if(!layout||!portrait)return;
    let visual=layout.querySelector('.ptg-founder-visual');
    if(!visual){
      visual=document.createElement('div');
      visual.className='ptg-founder-visual';
      layout.insertBefore(visual,portrait);
      visual.appendChild(portrait);
    }
    if(!visual.querySelector('.ptg-founder-contacts')){
      const contacts=document.createElement('div');
      contacts.className='ptg-founder-contacts';
      contacts.innerHTML=`
        <div><span>Рабочая почта</span><a href="mailto:info@promtagram.ru">info@promtagram.ru</a></div>
        <div><span>Личная почта</span><a href="mailto:burnsmoneys@gmail.com">burnsmoneys@gmail.com</a></div>
        <div><span>Телефон</span><a href="tel:+79996467667">+7 999 646-76-67</a></div>`;
      visual.appendChild(contacts);
    }
  }

  function setLabel(section,n,title){
    if(!section)return;
    let label=section.querySelector('.ptg-stats-eyebrow,.ptg-photobank-kicker,.eyebrow,.scene-kicker');
    if(!label){
      label=document.createElement('div');
      label.className='eyebrow ptg-auto-screen-label';
      (section.querySelector('.wrap,.closing-content')||section).prepend(label);
    }
    label.textContent=`${n} / ${title}`;
  }

  function renumber(){
    pages.forEach(p=>setLabel(document.querySelector(p.sel),p.n,p.title));
  }

  function fullSiteMap(){
    const map=document.querySelector('#site-map');
    if(!map)return;
    const head=map.querySelector('.ptg-square-menu-head');
    if(head){
      const title=head.querySelector('h2');
      const desc=head.querySelector('p');
      if(title)title.innerHTML='Весь сайт.<br>19 прямых маршрутов.';
      if(desc)desc.textContent='Все экраны главной страницы в фактическом порядке — от цифр и AI-системы до публикаций, доказательств и контакта.';
    }
    const nav=map.querySelector('.ptg-square-grid');
    if(!nav)return;
    nav.innerHTML=pages.map((p,i)=>`<a class="ptg-menu-tile ptg-menu-tile-v10" href="${p.href}"><span class="ptg-menu-num">${p.n}</span><span class="ptg-page-icon"><span class="ptg-page-face">${icon(i)}</span></span><span class="ptg-menu-copy"><strong>${esc(p.title)}</strong><small>${esc(p.meta)}</small></span><span class="ptg-menu-arrow" aria-hidden="true">↗</span></a>`).join('');
  }

  function topNav(){
    const nav=document.querySelector('#navigation');
    if(!nav)return;
    nav.innerHTML=[
      ['#site-map','Навигация'],['#solutions','Решения'],['#system','AI-система'],['#founder','Основатель'],['#cases','Кейсы'],['#market-recognition','Партнёрство'],['#photobank','Фотобанк'],['#media','Публикации'],['#achievements','Доказательства']
    ].map(([href,title])=>`<a href="/${href}">${title}</a>`).join('');
  }

  function verifyOrder(){
    const main=[...document.querySelectorAll('main>section')];
    const evidence=document.querySelector('#achievements');
    const media=document.querySelector('#media');
    const partner=document.querySelector('#market-recognition');
    const photobank=document.querySelector('#photobank');
    document.documentElement.dataset.ptgOwnerV10=(media&&evidence&&main.indexOf(evidence)===main.indexOf(media)+1&&partner&&photobank&&main.indexOf(partner)===main.indexOf(photobank)-1)?'ready':'check';
  }

  function apply(){
    document.documentElement.dataset.ptgOwnerBuild=BUILD;
    assignAnchors();
    orderSections();
    partnershipScreen();
    founderContacts();
    renumber();
    fullSiteMap();
    topNav();
    verifyOrder();
  }

  window.ptgRenumberScreens=()=>{orderSections();renumber();fullSiteMap();verifyOrder();};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
  window.addEventListener('load',()=>{apply();setTimeout(apply,250);setTimeout(apply,1500);setTimeout(apply,5400);},{once:true});
})();
