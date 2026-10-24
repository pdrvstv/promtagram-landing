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


## Static editorial article release scope (owner authorization 2026-10-25)

The site-wide RF personal-data / marketing evidence HOLD remains in force for existing forms, intake, unverified site claims and compliance-sensitive landing content. Do **not** change those controls or mark the entire site as legally READY.

The owner explicitly authorized **independent, automated publication of new, static, human-useful editorial content** in `/articles/<slug>/`. The following *narrow exception* to the general PR HOLD applies only when **all** conditions are met:

1. The PR changes only an individual `articles/<slug>/index.html`, the existing `articles/index.html` listing, and append-only article `<loc>` entries in `sitemap.xml`, with optional article-only QA workflow updates. The initial adoption of this policy is a separate documentation-only PR.
2. The article is genuinely static: no forms, iframe intake, analytics, inline executable JavaScript, advertising scripts, third-party trackers, submission endpoints, cookies, or collection of personal data. Existing `/leasing/` or other service pages must never be modified by an article PR, and links must not introduce a new form or automated transfer of visitor data.
3. Independent editor SEO-M5 has actually reviewed the precise ARTICLE_ID draft and current primary source evidence; high-stakes claims (legal/financial/tax) show date, jurisdiction and limits; no unverified Promtagram KPIs/case outcomes; mathematical examples are labeled illustrations.
4. Verify unique slug and intent, canonical URL, the `<title>`/description/H1 and JSON-LD, both sitemap and index, mobile layout, accessibility, links and HTML safety. No protected files are changed other than an append-only article entry in `sitemap.xml`.
5. A separate branch and PR carry exact diff evidence. All article CI checks and any other required repo checks pass; the PR is mergeable, protected branch settings are respected, and the merge uses an expected commit SHA. **Never directly push to main.**
6. Following merge, verify the actual public article URL, canonical, listing and sitemap. Only then write `PUBLISHED_VERIFIED`; search indexation requires actual Google/Yandex evidence. Errors cause a scoped revert PR and `BLOCKED`.
7. If a PR includes **any** personal-data intake, compliance form, legal policy changes, DNS/CNAME/robots, unverified claims on other pages, third-party embeds, or broad template changes, this exception is void and the normal complete RF compliance/evidence HOLD applies. An article-only release never establishes consent compliance for pre-existing forms or sitewide legal READY.

Thus, for a qualifying article-only PR, editorial + article-specific legal QA, scoped visual/mobile QA, passing CI and live release verification satisfy the release gate; the unrelated intake-related checklist items do not represent a reason to mislabel or automatically promote the separate site-wide HOLD. `SEO-M5` may approve/merge these qualifying PRs under this standing owner authorization without per-article requests, with auditable before/after and rollback. If categorization is uncertain, fail closed.
