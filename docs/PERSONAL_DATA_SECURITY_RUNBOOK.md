# Personal Data Security Runbook — Promtagram

## Status

`HOLD_LEGAL_DETAILS_REQUIRED`

## Purpose

This runbook controls the personal data contour for the public site and lead form.

## Current data flow

1. Visitor opens https://promtagram.ru.
2. Visitor submits Google Form.
3. Response is written to Google Sheets CRM.
4. Operator reviews the lead and performs preliminary qualification.

## Personal data categories

Possible data categories:

- name;
- phone;
- email;
- company/project name;
- region;
- industry;
- request description;
- documents or comments voluntarily submitted by the user.

## Legal pages

Public working drafts:

- https://promtagram.ru/privacy.html
- https://promtagram.ru/consent.html

Final legal publication requires:

- operator name;
- legal form;
- INN/OGRN where applicable;
- contact email;
- data processing address or contact address;
- responsible person or contact route;
- retention period;
- partner transfer rules;
- final legal review.

## Google Form requirements

The form should include a mandatory consent checkbox with wording similar to:

> Я согласен(на) на обработку персональных данных в соответствии с Политикой обработки персональных данных и Согласием на обработку персональных данных, опубликованными на сайте https://promtagram.ru.

Links:

- https://promtagram.ru/privacy.html
- https://promtagram.ru/consent.html

## Access rules

- Raw responses are confidential.
- Raw CRM must not be public.
- Partners should not receive raw leads unless authorised.
- Do not publish screenshots of leads.
- Do not store CRM exports in the public GitHub repository.
- Use read-only access or controlled exports where possible.

## Data minimisation

Do not request data that is not needed for preliminary qualification.

Avoid collecting:

- passport data;
- bank details;
- tax secrets;
- employee personal data;
- sensitive personal data;
- unnecessary documents at first contact.

## Incident response

If personal data may have leaked:

1. Stop sharing affected files.
2. Remove public links.
3. Review access logs and permissions.
4. Notify project operator.
5. Rotate account credentials if needed.
6. Document what data was affected.
7. Decide whether legal notification is required.

## READY gate

Do not mark the legal/personal-data contour READY until:

- operator details are added;
- privacy and consent pages are reviewed;
- Google Form includes consent wording;
- CRM sharing is checked;
- access control checklist is completed.
