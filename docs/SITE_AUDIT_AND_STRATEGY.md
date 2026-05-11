# Promtagram Site Audit and Strategy

## Status

`PUBLISHED_HTTPS_STATIC_V0_3 / SEO_CLUSTER_PAGES_APPLIED / INTERNAL_LINKING_REQUIRED / SEARCH_CONSOLE_REQUIRED`

## Production URL

https://promtagram.ru

## Repository

`pdrvstv/promtagram-landing`

## 1. What has already been done

### Domain and hosting

- Custom domain connected: `promtagram.ru`.
- GitHub Pages is the production hosting layer.
- HTTPS is enabled.
- Repository includes `CNAME` with `promtagram.ru`.

### Landing v0.3

- Static GitHub Pages landing implemented.
- Stack remains simple:
  - `index.html`
  - `styles.css`
  - `script.js`
- No backend.
- No React.
- No Apps Script.
- No external libraries.
- Google Form URL remains unchanged.
- CRM flow remains unchanged.

### Design / conversion

Landing contains:

- premium dark hero;
- Promtagram brand area;
- product dashboard: `ИИ-скан поддержки`;
- support route map;
- industry scenarios;
- process and result section;
- evidence / trust discipline section;
- work formats;
- FAQ;
- embedded lead form;
- fallback button to open Google Form separately;
- mobile sticky CTA.

### SEO baseline

Implemented:

- canonical: `https://promtagram.ru/`;
- `robots.txt`;
- `sitemap.xml`;
- Open Graph metadata;
- Twitter Card metadata;
- local `assets/og-cover.svg`;
- JSON-LD structured data:
  - `Organization`;
  - `WebSite`;
  - `Service`;
  - `FAQPage`;
- `robots` meta: `index, follow, max-image-preview:large`;
- `site.webmanifest`;
- branded `404.html`.

### SEO cluster pages

Created:

- `/frp/` — ФРП и займы для производства;
- `/msp/` — поддержка МСП;
- `/subsidies/` — субсидии и компенсации;
- `/export/` — экспортная поддержка и РЭЦ;
- `/leasing/` — лизинг оборудования;
- `/apk/` — господдержка АПК;
- `/automation/` — роботизация и автоматизация.

All pages are included in `sitemap.xml`.

### Documentation

Created or updated:

- `README.md`;
- `docs/SEO_RUNBOOK.md`;
- `docs/SEO_CONTENT_PLAN.md`;
- `docs/SEO_QA_CHECKLIST.md`;
- `docs/DESIGN_BRIEF_V03.md`;
- this document: `docs/SITE_AUDIT_AND_STRATEGY.md`.

## 2. Current strengths

1. Production domain is live with HTTPS.
2. The site is static, lightweight, and easy to maintain.
3. SEO baseline is already better than a typical early MVP.
4. Search architecture has started: main page + cluster pages.
5. Risk QA language is controlled: no guarantee claims.
6. Lead capture is already connected through the existing Google Form.
7. Evidence discipline is visible on the page.
8. The site can be improved incrementally without changing infrastructure.

## 3. Current gaps

### Critical gaps

1. Internal links from the homepage to SEO cluster pages are not yet visible enough.
2. Google Search Console is not confirmed yet.
3. Yandex Webmaster is not confirmed yet.
4. Sitemap has not yet been submitted to search engines.
5. Test lead has not yet been confirmed in CRM.
6. Cluster pages are functional but still thin; they need more proof, examples, FAQ, and conversion blocks.

### Design gaps

1. The page is better than the first raw versions, but still not final premium brand level.
2. Cluster pages are simpler than the main page.
3. No custom illustrative system beyond SVG logo and OG cover.
4. No partner / proof / cases section integrated into the funnel.

### SEO gaps

1. No Search Console data yet.
2. No Yandex query data yet.
3. No indexed-page diagnostics yet.
4. No real search snippets validated.
5. No internal linking hub on homepage.
6. No schema per cluster page yet.
7. No regional / industry long-tail pages yet.

### Conversion gaps

1. No analytics yet.
2. No event tracking.
3. No A/B testing.
4. No separate CTA by segment.
5. Google Form is functional but visually external.

Analytics should not be added until privacy and consent decisions are made.

## 4. Strategy

### Phase 1 — Stabilize production and indexing

Goal: make the current site indexable, crawlable, and operational.

Tasks:

1. Verify public URLs:
   - `/`;
   - `/robots.txt`;
   - `/sitemap.xml`;
   - `/404.html`;
   - `/site.webmanifest`;
   - all cluster pages.
2. Add internal links from the homepage to all cluster pages.
3. Confirm Google Search Console.
4. Confirm Yandex Webmaster.
5. Submit sitemap to both systems.
6. Request indexing for homepage and cluster pages.
7. Submit one test lead and confirm it appears in CRM.

Status target:

`INDEXING_SUBMITTED / CRM_TEST_REQUIRED`

### Phase 2 — Strengthen conversion and trust

Goal: make the site commercially credible.

Tasks:

1. Add trust/proof block:
   - public sources;
   - reconstructed cases;
   - demo cases;
   - evidence status labels.
2. Improve work formats:
   - preliminary scoring;
   - support map and document route;
   - partner route / support package.
3. Create a clearer lead magnet:
   - `Карта предварительного скоринга`;
   - `Чек-лист документов для господдержки`;
   - `Маршрут ФРП / МСП / РЭЦ`.
4. Improve lead section copy.
5. Reduce iframe friction where possible.

Status target:

`CONVERSION_LAYER_V0_4_READY`

### Phase 3 — Expand SEO clusters

Goal: turn the site into a topical authority hub around AI-assisted government support navigation.

Tasks:

1. Expand each cluster page from thin page to 800–1500 words of useful, risk-safe content.
2. Add FAQ per cluster page.
3. Add Service / Breadcrumb structured data per cluster page.
4. Add internal links between related clusters:
   - `/frp/` ↔ `/automation/` ↔ `/leasing/`;
   - `/msp/` ↔ `/subsidies/`;
   - `/export/` ↔ `/msp/`;
   - `/apk/` ↔ `/leasing/` ↔ `/subsidies/`.
4. Add future pages only after Risk QA:
   - `/regions/`;
   - `/documents/`;
   - `/cases/`;
   - `/partners/`;
   - `/invest-plan/`.

Status target:

`SEO_AUTHORITY_LAYER_V0_5`

### Phase 4 — Analytics and CRM intelligence

Goal: connect traffic to lead quality.

Tasks:

1. Decide analytics policy:
   - no analytics;
   - privacy-safe analytics;
   - Google Analytics / Яндекс Метрика with consent.
2. Add UTM handling.
3. Add hidden form fields only if Google Form allows safe implementation.
4. Track source page manually:
   - main;
   - frp;
   - msp;
   - subsidies;
   - export;
   - leasing;
   - apk;
   - automation.
5. Add lead scoring columns in CRM if not already present.

Status target:

`TRAFFIC_TO_CRM_ATTRIBUTION_READY`

### Phase 5 — Brand and design maturity

Goal: bring the site from MVP to strong public brand asset.

Tasks:

1. Redesign v0.4 with stronger visual system.
2. Improve cluster page templates.
3. Add original diagrams:
   - support route map;
   - document route;
   - risk matrix;
   - scoring pipeline.
4. Add brandbook-aligned icons and SVG motifs.
5. Add public proof library only with clear source labels.

Status target:

`PUBLIC_BRAND_SITE_V0_4`

## 5. Immediate next tasks

Priority order:

1. Add homepage internal linking block to cluster pages.
2. Verify public access to all cluster pages.
3. Add Google Search Console.
4. Add Yandex Webmaster.
5. Submit sitemap.
6. Submit test lead and verify CRM.
7. Expand `/frp/` as the first full SEO cluster page.
8. Expand `/subsidies/` as the second full SEO cluster page.
9. Add proof/evidence assets.
10. Decide analytics policy.

## 6. Risk policy

Do not use:

- guaranteed support claims;
- promises of approval;
- “money from the state” claims;
- claims about special access or connections;
- fake cases;
- official state symbols or third-party protected logos.

Use:

- preliminary evaluation;
- applicability scoring;
- possible support map;
- document route;
- risk check;
- operator decision disclaimer;
- evidence labels.

## 7. READY definition

The site can be marked `READY_PUBLIC_LANDING` only after:

1. HTTPS is stable.
2. Main page works.
3. Cluster pages work.
4. Sitemap works.
5. Google Search Console is connected.
6. Yandex Webmaster is connected.
7. Sitemap is submitted.
8. Test lead appears in CRM.
9. Visual QA passed.
10. Risk QA passed.

Until then, status remains:

`PUBLISHED_HTTPS_STATIC_V0_3 / SEO_CLUSTER_PAGES_APPLIED / QA_REQUIRED`
