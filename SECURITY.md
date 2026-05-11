# Security Policy — Promtagram Landing

## Scope

This policy applies to the public static website:

- https://promtagram.ru
- repository: `pdrvstv/promtagram-landing`

The current website is a static GitHub Pages landing page. It does not include a custom backend, user accounts, payment processing, or a private cabinet.

## Main security principles

- No secrets, tokens, private keys, CRM exports, personal data dumps, or client files must be stored in this public repository.
- Google Forms and Google Sheets access must be controlled in Google Workspace/Drive, not in this repository.
- DNS records and domain settings must be changed only after explicit operator review.
- Destructive changes must be avoided. Use pull requests or documented commits for significant updates.

## Reporting security issues

If you find a security issue related to the public site, use the contact route published on the website or submit an issue privately through the project operator.

Do not disclose personal data, tokens, or exploit details publicly.

## Current risk model

Lower risk:

- static HTML/CSS/JS;
- no custom server;
- no database on the website;
- no login system.

Higher risk:

- GitHub account compromise;
- Reg.ru/DNS account compromise;
- Google account compromise;
- public exposure of Google Sheets CRM;
- wrong sharing settings on Google Form/Drive;
- missing or incorrect personal data policy/consent.

## Required controls

- 2FA for GitHub, Reg.ru, Google, Yandex and Google Search Console accounts.
- Minimal access to Google Form and CRM Sheet.
- No public access to form responses.
- Regular review of Drive sharing settings.
- Published privacy policy and consent text for personal data processing.
- Sitemap and webmaster ownership verification controlled by the project operator.

## Status

`SECURITY_BASELINE_V0_1`
