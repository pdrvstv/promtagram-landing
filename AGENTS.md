# Promtagram Landing – Agent Guide

This repository contains the static landing page for **Promtagram**, a laboratory for state support with AI. The site is hosted on GitHub Pages at **https://promtagram.ru**. It is a single‑page application built with vanilla HTML, CSS and a small amount of JavaScript. There is **no** backend, build tool or framework; please keep it that way.

## Technology stack

* **HTML/CSS/JS** – static markup, styles and behaviour.
* **No frameworks** – do not add React, Vite, Tailwind or other build tools.
* **No external dependencies** – avoid CDN links, external fonts, tracking scripts or analytics. Only local assets from the `assets/` folder and verified abstract visuals may be used.

## Production URL

The live site is served from the `main` branch via GitHub Pages:

* **https://promtagram.ru** – production
* **https://pdrvstv.github.io/promtagram-landing/** – GitHub Pages fallback

## Do not modify

Several files and configurations are critical for SEO, domain management and verification. **Do not modify or remove** the following:

* `robots.txt`
* `sitemap.xml`
* `CNAME`
* `site.webmanifest`
* `404.html`
* Yandex verification file(s)
* Google Form URLs – these must remain unchanged
* DNS or GitHub Pages settings
* Pages under SEO clusters: `/frp/`, `/msp/`, `/subsidies/`, `/export/`, `/leasing/`, `/apk/`, `/automation/`

## Visual guidance

When designing new iterations, aim for a **premium, white, Apple‑like aesthetic** with plenty of whitespace and clean typography. Key points:

* **White premium UI** – Use a bright white or very light background throughout. On light sections you may add a subtle abstract emboss pattern (radial and diagonal lines at low opacity) to convey depth. Avoid dark backgrounds except for focused highlights.
* **Large yet balanced hero** – Provide a clear headline and two side‑by‑side cards: a mini‑form for the preliminary audit and an AI‑scan card. Ensure the first screen feels spacious and not overcrowded. The mini‑form collects name, phone, company, region and a short query; it does not directly submit to CRM, instead opens the full Google Form.
* **Clean composition** – Follow simple, disciplined layouts reminiscent of Apple product pages: generous spacing, clear hierarchy and minimal visual noise. Keep cards aligned and consistent in size.
* **Blue accents** – Use a single accent colour (blue) for call‑to‑action buttons and interactive elements. Hover states should be subtle.
* **Abstract marks only** – Do not use official coats of arms or ministry logos without confirmed licence. For trust bands use neutral wordmarks (e.g. “Минпромторг”, “ФРП”) rendered as typographic tiles, or create abstract placeholders.
* **Abstract emboss patterns** – If background texture is needed, implement it via CSS pseudo‑elements with radial and repeating linear gradients. Do not reference the Russian coat of arms or any recognisable state symbols.

## SEO and compliance

The landing maintains a strong SEO baseline with meta tags, canonical URL, structured data and inbound links to cluster pages. Always:

* Preserve structured data (`Organization`, `WebSite`, `Service`, `FAQPage`).
* Keep the FAQ visible with exactly 5 questions and answers.
* Maintain internal links to the cluster pages listed above.
* Avoid forbidden promises (e.g. “гарантируем получение”, “100% одобрение”).
* Use acceptable wording such as “предварительная оценка”, “скоринг применимости”, “карта мер” and “решение принимает оператор программы”.

## Quality assurance checklist

Before opening a pull request:

1. Only edit allowed files (`index.html`, `styles.css`, `script.js`, `README.md`, `AGENTS.md`, files in `docs/`).
2. Verify that Google Form URLs have not changed.
3. Ensure SEO files (`robots.txt`, `sitemap.xml`, etc.) remain untouched.
4. Confirm there is **no iframe** in the hero; the lead form iframe should appear only in the bottom section.
5. Make sure all cluster links (`/frp/`, `/msp/`, etc.) exist in the markup.
6. FAQ list should display 5 questions both visually and in JSON‑LD.
7. Ensure the scripts do not inject primary layout or modify DOM structure.
8. Check that no forbidden claims or official emblems are present.
9. Test on desktop and mobile widths – there should be no horizontal scroll.
10. Verify that any abstract emboss patterns are subtle and non‑recognisable.
11. PR remains open and unmerged until visual QA is completed.
