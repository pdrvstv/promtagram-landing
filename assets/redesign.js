'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Открыть меню');
}
if (menu && navigation) {
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    navigation.classList.toggle('open', !expanded);
    menu.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-label', expanded ? 'Открыть меню' : 'Закрыть меню');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
}

// Site-wide thematic visual routing.
// Preserve founder photography, Promtagram identity and official support-institution marks.
(() => {
  const protectedImage = img => {
    const src = (img.getAttribute('src') || '').toLowerCase();
    return src.includes('vladimir-korol') ||
      src.includes('promtagram-brand') ||
      src.endsWith('/logo.svg') || src.endsWith('/logo.webp') ||
      src.includes('/org-') || src.includes('/industry-') ||
      src.includes('economic-drafting') || src.includes('support-economics-map');
  };

  const setImage = (img, src) => {
    if (!img || protectedImage(img)) return;
    if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    img.removeAttribute('srcset');
  };

  const visuals = {
    hero: '/assets/matrix-hero.webp',
    industry: '/assets/matrix-production.webp',
    export: '/assets/matrix-export.webp',
    investment: '/assets/matrix-finance.webp',
    analysis: '/assets/matrix-ai.webp',
    equipment: '/assets/matrix-production.webp',
    structure: '/assets/matrix-registry.webp',
    registry: '/assets/matrix-registry.webp'
  };

  setImage(document.querySelector('.opening-scene .scene-background'), visuals.hero);
  const solutionVisuals = [visuals.investment, visuals.equipment, visuals.export, visuals.analysis, visuals.registry];
  document.querySelectorAll('.solution-card .solution-art').forEach((img, i) => setImage(img, solutionVisuals[i % solutionVisuals.length]));
  setImage(document.querySelector('.ref-structure figure img'), visuals.investment);
  setImage(document.querySelector('.ref-ai img'), visuals.analysis);
  setImage(document.querySelector('.structure-art'), visuals.structure);
  setImage(document.querySelector('.journal-art'), visuals.analysis);
  setImage(document.querySelector('.closing-scene .scene-background'), visuals.hero);

  const caseVisuals = [visuals.industry, visuals.analysis, visuals.export, visuals.investment, visuals.investment, visuals.industry, visuals.industry, visuals.registry];
  document.querySelectorAll('.case-cover-art img').forEach((img, i) => setImage(img, caseVisuals[i % caseVisuals.length]));

  const detailVisual = document.querySelector('.case-detail-visual img');
  if (detailVisual) {
    const classes = document.body.classList;
    let src = visuals.industry;
    if (classes.contains('case-automation-model')) src = visuals.analysis;
    if (classes.contains('case-export-model')) src = visuals.export;
    if (classes.contains('case-contract-financing') || classes.contains('case-working-capital') || classes.contains('case-new-properties')) src = visuals.investment;
    setImage(detailVisual, src);
  }

  const fallback = [visuals.hero, visuals.industry, visuals.investment, visuals.export, visuals.analysis, visuals.registry];
  let fallbackIndex = 0;
  document.querySelectorAll('img').forEach(img => {
    if (protectedImage(img)) return;
    const src = (img.getAttribute('src') || '').toLowerCase();
    const legacy = src.includes('meeting-natural') || src.includes('production-natural') || src.includes('blueprint-system') || src.includes('opening-scene') || src.includes('closing-scene');
    if (legacy) setImage(img, fallback[fallbackIndex++ % fallback.length]);
  });
})();
