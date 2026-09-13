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

// 2026-09-13: site-wide thematic visual routing.
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
    industry: '/assets/theme-production.webp',
    export: '/assets/theme-export.webp',
    investment: '/assets/theme-dossier.webp',
    analysis: '/assets/ref-analysis.webp',
    equipment: '/assets/ref-machine.webp',
    structure: '/assets/structure.webp'
  };

  // Homepage: fixed semantic mapping.
  setImage(document.querySelector('.opening-scene .scene-background'), visuals.industry);
  const solutionVisuals = [visuals.investment, visuals.equipment, visuals.export, visuals.industry, visuals.structure];
  document.querySelectorAll('.solution-card .solution-art').forEach((img, i) => setImage(img, solutionVisuals[i % solutionVisuals.length]));
  setImage(document.querySelector('.ref-structure figure img'), visuals.investment);
  setImage(document.querySelector('.ref-ai img'), visuals.analysis);
  setImage(document.querySelector('.structure-art'), visuals.structure);
  setImage(document.querySelector('.journal-art'), visuals.investment);
  setImage(document.querySelector('.closing-scene .scene-background'), visuals.industry);

  // Cases and detailed materials: industrial/investment/export rotation.
  const caseVisuals = [visuals.industry, visuals.equipment, visuals.export, visuals.investment, visuals.analysis, visuals.structure];
  document.querySelectorAll('.case-cover-art img,.case-detail-visual img').forEach((img, i) => setImage(img, caseVisuals[i % caseVisuals.length]));

  // Any remaining legacy editorial photo gets a relevant thematic replacement.
  const fallback = [visuals.industry, visuals.investment, visuals.export, visuals.equipment, visuals.analysis, visuals.structure];
  let fallbackIndex = 0;
  document.querySelectorAll('img').forEach(img => {
    if (protectedImage(img)) return;
    const src = (img.getAttribute('src') || '').toLowerCase();
    const legacy = src.includes('meeting-natural') || src.includes('production-natural') || src.includes('blueprint-system') || src.includes('opening-scene') || src.includes('closing-scene');
    if (legacy) setImage(img, fallback[fallbackIndex++ % fallback.length]);
  });
})();
