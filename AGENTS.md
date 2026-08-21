# Promtagram Landing – Agent Guide

This repository contains the static landing page for **Promtagram**, a laboratory for state support with AI. The site is hosted on GitHub Pages at **https://promtagram.ru**. It is a single-page application built with vanilla HTML, CSS and a small amount of JavaScript. There is no backend, build tool or framework; keep it that way unless a separately approved architecture migration requires a backend for a compliant intake.

## Technology stack

* **HTML/CSS/JS** – static markup, styles and behaviour.
* **No frameworks** – do not add React, Vite, Tailwind or other build tools without an approved architecture change.
* **No external dependencies** – avoid CDN links, external fonts, tracking scripts or analytics. Only local assets from the `assets/` folder and verified abstract visuals may be used.

## Production URL

The live site is served from the `main` branch via GitHub Pages:

* **https://promtagram.ru** – production
* **https://pdrvstv.github.io/promtagram-landing/** – GitHub Pages fallback

## Do not modify casually

Several files and configurations are critical for SEO, domain management and verification. Do not modify or remove without a dedicated task and verification:

* `robots.txt`
* `sitemap.xml`
* `CNAME`
* `site.webmanifest`
* `404.html`
* Yandex verification file(s)
* DNS or GitHub Pages settings
* Pages under SEO clusters: `/frp/`, `/msp/`, `/subsidies/`, `/export/`, `/leasing/`, `/apk/`, `/automation/`

The historical Google Form URLs must not be changed accidentally. **However, they are not protected from an explicitly approved RF-compliance migration.** As of the 21.08.2026 audit, Google Forms is HOLD as a production primary intake until a Russian primary database and the lawful subsequent-processing route are confirmed.

## Visual guidance

When designing new iterations, aim for a premium white product aesthetic with whitespace, disciplined alignment and clear typography.

* **White premium UI** – bright white or very light backgrounds, subtle abstract patterns only.
* **Large yet balanced hero** – clear headline and balanced cards without overcrowding.
* **Clean composition** – consistent spacing, hierarchy and card sizing.
* **Blue accents** – one primary accent for CTA and interactive elements.
* **Abstract marks only** – do not use official coats of arms or ministry logos without confirmed rights.
* **Abstract emboss patterns** – CSS-only neutral patterns; no recognisable state symbols.

## SEO and product-claim compliance

Always:

* Preserve structured data (`Organization`, `WebSite`, `Service`, `FAQPage`).
* Keep the FAQ visible with exactly 5 questions and answers unless a separately approved SEO change updates both visible content and JSON-LD.
* Maintain internal links to the cluster pages listed above.
* Avoid forbidden promises such as “гарантируем получение” or “100% одобрение”.
* Use safer wording such as “предварительная оценка”, “скоринг применимости”, “карта мер” and “решение принимает оператор программы”.
* Treat quantitative KPI, SLA and case results as **HOLD** unless they have an Evidence Log entry with source, period, calculation method, owner, public-use rights, grade and last-check date.
* Demo scores (for example 78/100 or 82/100) must be explicitly labelled as demonstrations unless calculated from the current user's data by an approved method.

## Personal-data compliance gate

Before a site version that collects personal data can be marked READY:

1. The exact personal-data operator is confirmed: legal name/FIO, INN/OGRN(OGRNIP where applicable), address and contact for data-subject requests.
2. The operator's Roskomnadzor notification/registry status and declared processing architecture are checked and updated where required.
3. The primary recording, systematisation, accumulation, storage, update and extraction of Russian citizens' personal data collected via the Internet use a confirmed database in Russia unless a statutory exception is documented.
4. Any subsequent use of Google Workspace or another foreign service has a documented lawful role; cross-border-transfer requirements are checked where applicable.
5. `privacy.html` matches the actual lifecycle, processors, retention and deletion process.
6. `consent.html` is a standalone consent; the checkbox is not preselected.
7. The actual intake stores evidence of consent: consent version, timestamp, source, request ID and active opt-in.
8. Advertising consent is separate and voluntary; refusal does not block the main application.
9. A test request validates the full route using non-sensitive test data; the test record is then removed according to the test procedure.

## Legal files

* `privacy.html` – personal data processing policy.
* `consent.html` – standalone personal-data consent.
* `marketing-consent.html` – separate advertising/informational opt-in; do not activate until separate consent evidence can be stored.
* `docs/RF_COMPLIANCE_AUDIT_2026-08.md` – current legal/technical audit and BLOCKERS.
* `docs/EVIDENCE_QA_SITE_CLAIMS_2026-08.md` – public-claims evidence gate.

Never fill operator details from historical web pages, old entities or assumptions. Use verified current legal data only.

## Quality assurance checklist

Before opening or merging a pull request:

1. Only intended files are changed; SEO/domain/verification files remain untouched unless explicitly in scope.
2. Confirm no accidental changes to intake URLs or data routing.
3. Confirm there is no unlabelled guarantee of state support or approval.
4. Check that unverified KPI/case numbers are hidden, removed or clearly marked as unverified/demo.
5. Verify the consent checkbox is not preselected in both static HTML and runtime behaviour.
6. Verify legal links are visible without depending solely on JavaScript when the final static patch is prepared.
7. Verify consent evidence is written to the approved intake.
8. Verify operator and Russian primary database are confirmed before READY.
9. Test desktop/mobile layout with no horizontal overflow.
10. PR remains draft/HOLD until visual QA, Evidence QA and legal BLOCKERS are closed.

## Status rule

A PR may be marked `READY` only after visual QA, Evidence QA, consent-flow test and closure of the operator/localisation/data-route BLOCKERS. HOLD must never be promoted to READY automatically.
