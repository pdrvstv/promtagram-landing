(()=>{
  'use strict';

  const screens=[
    ['.ptg-stats','02','PROMTAGRAM В ЦИФРАХ'],
    ['#solutions','03','ПЯТЬ НАПРАВЛЕНИЙ'],
    ['.ref-structure','04','ФИНАНСОВОЕ СТРУКТУРИРОВАНИЕ'],
    ['#system','05','AI-СИСТЕМА'],
    ['.ref-process','06','ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ'],
    ['#founder','07','ОСНОВАТЕЛЬ PROMTAGRAM'],
    ['#cases','08','ПРАКТИКА PROMTAGRAM'],
    ['#instruments','09','ОРИЕНТИРЫ ПО ИНСТРУМЕНТАМ'],
    ['#calculator','10','ЭКОНОМИКА ПРОЕКТА'],
    ['#practice','11','ПРЕДМЕТНЫЙ РЕЗУЛЬТАТ'],
    ['#achievements','12','ДОКАЗАТЕЛЬСТВА'],
    ['#recognition','13','ДОКУМЕНТЫ И ПРИЗНАНИЕ'],
    ['#market-recognition','14','ПАРТНЁРСТВО'],
    ['#photobank','15','ФОТОБАНК / АРХИВ'],
    ['#ecosystem','16','СИСТЕМА ГОСПОДДЕРЖКИ'],
    ['#media','17','ПУБЛИКАЦИИ'],
    ['#mission','18','НАША МИССИЯ'],
    ['#faq','19','ВОПРОСЫ И ОТВЕТЫ'],
    ['#lead','20','СЛЕДУЮЩИЙ ШАГ']
  ];

  function setLabel(section,number,title){
    if(!section)return;
    let label=section.querySelector('.ptg-stats-eyebrow,.ptg-photobank-kicker,.eyebrow,.scene-kicker');
    if(!label){
      label=document.createElement('div');
      label.className='eyebrow ptg-auto-screen-label';
      const host=section.querySelector('.wrap,.closing-content')||section;
      host.prepend(label);
    }
    const next=`${number} / ${title}`;
    if(label.textContent!==next)label.textContent=next;
  }

  function apply(){
    const mobileTagline=document.querySelector('.ptg-static-cover-v6-mobile-copy > p');
    if(mobileTagline) mobileTagline.textContent='Инвестиции, господдержка и GR с помощью ИИ';

    const canvas=document.querySelector('.ptg-static-cover-v6-canvas');
    if(canvas&&!canvas.querySelector('.ptg-static-cover-v8-tagline')){
      const tagline=document.createElement('div');
      tagline.className='ptg-static-cover-v8-tagline';
      tagline.textContent='Инвестиции, господдержка и GR с помощью ИИ';
      canvas.appendChild(tagline);
    }

    let number=1;
    document.querySelectorAll('main > section').forEach(section=>{
      if(section.id==='site-map'||section.classList.contains('opening-scene')||getComputedStyle(section).display==='none')return;
      const item=screens.find(([selector])=>section.matches(selector));
      if(item)setLabel(section,String(++number).padStart(2,'0'),item[2]);
    });
    document.querySelectorAll('.ptg-menu-tile').forEach(link=>{
      const target=document.querySelector(link.getAttribute('href'));
      const label=target?.querySelector('.eyebrow,.ptg-stats-eyebrow,.ptg-photobank-kicker');
      const num=link.querySelector('.ptg-menu-num');
      if(num&&label)num.textContent=label.textContent.split(' / ')[0];
    });
  }

  window.ptgRenumberScreens=apply;
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  window.addEventListener("load",()=>{apply();setTimeout(apply,1200);},{once:true});
})();
