# Owner revision — 2026-09-14

## Scope

- Replace the conservative zero-only `PROMTAGRAM В ЦИФРАХ` block with explicitly approximate rounded working-base metrics.
- Remove the homepage sections `ФИНАНСОВОЕ СТРУКТУРИРОВАНИЕ` and `ПРЕДМЕТНЫЙ РЕЗУЛЬТАТ` from rendered production.
- Renumber the remaining homepage sections sequentially.
- Rebuild the AI-system block with Russian agent names, symbols and Vladimir Korol as system lead.
- Add a visual proof/photo cloud to `Работа, которую можно проверить.` from the controlled Drive photo archive.
- Refresh the primary navigation to match the surviving sections.

## Evidence / claim rules

- `≈150` is the rounded version of the 146 unique CRM objects in the 14.09.2026 CRM report. It is described as cases/business situations, not confirmed clients.
- `≈65 bn RUB` is the rounded aggregate of project/financial-request values explicitly present in the CRM `Сумма проекта` field. The source field mixes financing needs, project budgets and some public opportunity amounts, so the site calls it an approximate combined volume rather than approved financing.
- `≈360 bn RUB` is the rounded aggregate of available revenue/turnover values in the CRM `Выручка` field. Years and verification levels differ, so it is explicitly labelled an estimate of objects with available financial indicators, not audited consolidated revenue.
- `≈68 bn RUB` is the rounded 2026 appropriation for the federal project `Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы` under Federal Law No. 426-FZ (67,959,609.5 thousand RUB).
- The photo cloud uses selected images from the owner's Drive archive; Gmail screenshots and potentially private material are excluded.

## Technical implementation

The change is isolated in:

- `assets/site-owner-patch.js`
- `assets/site-owner-patch.css`
- two loader lines in `assets/redesign.js`

No CRM, Drive, intake, legal pages, forms or tracking are modified.

## Rollback

Revert this PR. The previous `site-vnext` production layer remains intact beneath the isolated owner patch.
