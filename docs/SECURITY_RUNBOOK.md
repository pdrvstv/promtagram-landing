# Security Runbook — promtagram.ru

## Status

`SECURITY_BASELINE_V0_1`

## Scope

- Public website: https://promtagram.ru
- Repository: `pdrvstv/promtagram-landing`
- Domain/DNS: Reg.ru
- Lead capture: Google Form
- CRM response storage: Google Sheets / Drive
- Webmaster tools: Google Search Console, Yandex Webmaster

## Current architecture

The public site is static GitHub Pages. There is no custom backend, no user account system, no internal cabinet, no database on the website, and no payment processing.

## Highest risks

1. Compromise of GitHub account or repository write access.
2. Compromise of Reg.ru account or DNS zone.
3. Compromise of Google account that owns Forms/Sheets/Drive.
4. Public sharing of CRM response spreadsheet.
5. Missing or incomplete personal data policy and consent.
6. Publishing secrets or client data in the public repository.
7. Overly permissive partner access to Drive/CRM.

## Mandatory account controls

- Enable 2FA for GitHub.
- Enable 2FA for Reg.ru.
- Enable 2FA for Google account owning Forms/Sheets/Drive.
- Enable 2FA for Yandex account used in Webmaster.
- Use unique passwords.
- Avoid shared passwords in chat, email, documents or screenshots.
- Review recovery emails and phone numbers.

## GitHub controls

- Keep repository free of secrets and client data.
- Do not store CRM exports in public repository.
- Use PRs or documented commits for major changes.
- Enable branch protection for `main` when feasible.
- Limit write access.
- Review GitHub Pages settings after domain or repo changes.

## Google Forms / Sheets controls

- Form edit access only to authorised operators.
- Response spreadsheet must not be public.
- Disable public viewing of responses.
- Do not expose emails/phones to other respondents.
- Partner access must be read-only or through controlled exports.
- Review sharing settings monthly.

## DNS controls

- Keep required GitHub Pages A records.
- Keep `www` CNAME to `pdrvstv.github.io`.
- Do not add DNS records without a logged reason.
- Keep Google/Yandex verification records documented.
- Check domain after every DNS change.

## Site controls

- Use HTTPS only.
- Keep `robots.txt` and `sitemap.xml` public.
- Keep `.well-known/security.txt` public.
- Keep privacy and consent pages public.
- Avoid third-party scripts unless explicitly approved.
- Use `rel="noopener"` for external links.
- Avoid collecting unnecessary personal data.

## Incident response

1. Freeze changes.
2. Identify affected account or file.
3. Revoke suspicious access.
4. Rotate passwords/tokens.
5. Review GitHub commit history and Drive sharing.
6. Check DNS records.
7. Check Google Form and CRM sheet sharing.
8. Document incident and corrective actions.

## Review cadence

- Weekly during launch.
- Monthly after stabilisation.
- Immediately after adding partners, analytics, new forms, CRM exports or new operators.
