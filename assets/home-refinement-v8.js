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
    ['#market-recognition','14','ОТРАСЛЕВОЕ ПРИЗНАНИЕ'],
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
    label.textContent=`${number} / ${title}`;
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

    screens.forEach(([selector,number,title])=>setLabel(document.querySelector(selector),number,title));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
