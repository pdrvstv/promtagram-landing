# Security Policy — Promtagram Landing

## Scope

This repository contains the public static site for `promtagram.ru`. Security review covers the site code, public assets, form handoff, legal pages and any data-routing configuration committed to this repository.

## Sensitive data

Do **not** commit:

- personal data from leads or clients;
- passwords, API keys, access tokens, cookies or session data;
- private CRM exports;
- passport, banking, contract or other confidential client documents;
- unredacted incident evidence containing personal data.

Use synthetic/non-sensitive test data for site and intake tests.

## Personal-data intake

The public site must not be treated as READY for personal-data collection unless the current RF-compliance gate is closed. As of the 21.08.2026 audit:

- the historical Google Forms handoff is **HOLD** as a production primary intake;
- the actual personal-data operator and Russian primary database must be confirmed;
- consent must be standalone, actively selected and evidentially logged;
- subsequent foreign-service processing must have a documented lawful role.

See `docs/RF_COMPLIANCE_AUDIT_2026-08.md`.

## Reporting a security or privacy issue

A verified operator/security contact must be published before this document is treated as final external incident-contact guidance. Until that contact is confirmed, do not invent or reuse an address from historical Promtagram/Promtify materials.

For repository-level vulnerabilities, use the repository's private security-reporting mechanism if enabled, or notify the repository owner through an authenticated private channel. Do not publish exploit details or personal data in a public issue.

## Incident handling baseline

When a suspected leak, accidental public file, form-routing error or unauthorized disclosure is found:

1. stop the affected data flow where safely possible;
2. preserve minimal technical evidence without copying unnecessary personal data;
3. identify the affected system, time window and data categories;
4. restrict access and rotate exposed credentials if any;
5. record the incident in the internal Risk QA / incident register;
6. assess notification duties under applicable law with the confirmed operator;
7. remediate, test and document rollback/recovery steps before reopening the flow.

## Dependency posture

The landing should remain dependency-light. Avoid third-party tracking, external scripts, CDN fonts and embedded widgets unless their security/privacy impact has been reviewed and explicitly approved.

## Release gate

Do not merge a change that introduces a new data collector, analytics/tracking system, external processor or form backend without updating:

- the data-flow map;
- privacy policy and consent where required;
- `10_Data_Quality` / `06_Risk_QA` controls;
- the operator's required regulatory documentation/notifications where applicable.

Status: **HOLD for final external contact details** until the current operator and contact channel are verified.
