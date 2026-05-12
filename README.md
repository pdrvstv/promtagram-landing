# Promtagram Landing

## Production
- Production URL: https://promtagram.ru
- Backup GitHub Pages URL: https://pdrvstv.github.io/promtagram-landing/
- Positioning: Promtagram — Лаборатория господдержки с ИИ.
- Current version: `PUBLISHED_PR_V0_5_REVIEW`

## Product focus
Предварительный скоринг мер господдержки, карта возможных программ, маршрут документов и проверка рисков для бизнеса.

## Stack
- static `index.html`
- static `styles.css`
- minimal `script.js` (smooth scroll + minor enhancement only)
- GitHub Pages deploy from repository root

## Form URLs (must stay unchanged)
- Public: https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform
- Embedded: https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform?embedded=true

## SEO baseline
- Keep canonical, robots meta, Open Graph, Twitter Card.
- Keep JSON-LD blocks: Organization, WebSite, Service, FAQPage.
- Keep homepage links to SEO clusters: `/frp/`, `/msp/`, `/subsidies/`, `/export/`, `/leasing/`, `/apk/`, `/automation/`.
- Preserve sitemap compatibility and static routing.

## Verification/static files: do not remove
- `robots.txt`
- `sitemap.xml`
- `404.html`
- `site.webmanifest`
- `CNAME`
- `yandex_a15fea0a8c8d9b7c.html`

## QA checklist before merge
1. Hero has full-width headline and two equal-height cards.
2. No big form iframe in hero.
3. Bottom lead section contains embedded form and fallback open button.
4. Google Form URLs unchanged.
5. FAQ section has 5 questions and matches FAQPage JSON-LD.
6. No forbidden claims about guaranteed approvals.
7. SEO cluster links present and working.
8. No horizontal scroll on mobile.
9. script.js does not inject primary layout.

## Status rule
Status can be `READY` only after visual QA and CRM test lead confirmation.
