# Homepage UI patch — 2026-09-15

Status: HOLD / draft. Production unchanged. No merge authorization in this task.
Base main: 99b067fd93a62ccacc0a6432cd95ca4d4cec8043.
Branch: ui/homepage-coverflow-stats-cleanup-20260915-r2.
The originally requested branch already exists: merged PR #55, head 94e27aa3186cdd16538a01052247d280abffcda6. It diverges from current main; main subsequently removed the reverted vNext files. The r2 branch is based on current main and does not rewrite the old branch.
Open overlapping PR found: #4 (old full homepage redesign). Do not combine its redesign with this patch without reviewing the resulting diff.

## Dry run and implementation

- `_includes/site-base.html`: remove the photo archive section and header link; retain recognition and mission; set exactly four requested metrics with the original financing disclaimer; update asset versions. Risk: Liquid replacement boundaries. Expected: four large figures and no archive gap.
- `index.html`, `assets/live-home-fix-20260915.js`: retire the temporary runtime patch. Recognition cleanup remains in site-flow and menu scripts. Risk: duplicated delayed handlers; no global DOM observer is added.
- `assets/site-owner-patch.js`: remove photo data and proofCloud generator, remove obsolete metric rewriting. Other owner changes remain.
- `assets/site-flow.js`: remove obsolete metric rewriting; retain section transitions and recognition cleanup.
- `assets/site-menu-gosneuroset.js/css`: seven existing navigation entries, no photo generator, dark monoline inline SVG with slightly irregular paths; centered final row. Risk: mobile text fit requires visual QA.
- `assets/coverflow.js`, `assets/coverflow-v3.css`: shared progressive enhancement for existing case and publication DOM. Independent state, resize observer, pointer gestures, wheel, keyboard, arrows, active-card links. No autoplay. CSS also establishes numeric dominance in the four metrics. Risk: legacy CSS specificity and layout must be reviewed visually.
- `assets/site-vnext.js`, `assets/site-cases-3x3.js`: preserve existing content builders and their data; prevent delayed rebuilding after carousel initialization.
- `assets/redesign.js`, `_includes/site-base-core.html`: load the shared engine after existing content scripts, stop loading the obsolete case-grid stylesheet, refresh changed script versions. Core SEO and content remain intact.
- `tests/coverflow.cjs`: dependency-free event/state tests for the shared carousel.

## Validation performed

- All JavaScript files parse with `node --check`.
- `node tests/coverflow.cjs` passes: independent state, arrows, keyboard, side-card activation, active-card navigation, drag click suppression, wheel navigation, boundary scroll release, resize arithmetic for all seven requested widths, active tab order.
- Static assertions pass: four exact metric values, no archive HTML/anchor, unchanged core SEO metadata/JSON-LD, unchanged final case data array and publication content scripts.
- Source audit includes all repository CSS/JS and both homepage templates. Archive generation is removed from the template, menu script and owner script. Residual photo selectors only remove legacy nodes; source photos are retained.
- Local preview HTML was expanded from the actual Liquid capture/replace rules for inspection, but NOT rendered in a browser.

## Not verified / review gates

- Visual QA at 360x800, 390x844, 430x932, 768x1024, 1024x768, 1440x900, 1920x1080 is pending.
- Local Chromium is unavailable; the available cloud browser rejected the local preview URL with ERR_BLOCKED_BY_CLIENT. No browser-level pass is claimed.
- Actual pointer/touch behavior, computed layout/overflow, live runtime stability, header/mobile menu, external CTA navigation and 404 checks need browser validation.
- The automated tests use a small DOM test double and validate event/state logic, not a browser's layout or complete runtime load sequence.
- Metrics are supplied by the task author; their supporting Evidence Log was not independently checked. Existing AGENTS.md public-claims and release gates remain HOLD; no READY promotion.
- Existing publication cleanup scripts and case builders remain in place intentionally to preserve the current public content selection. No public links or destinations are invented.

## Review / rollback SOP

1. Review this branch against the recorded base, keeping PR #4 separate.
2. Build with the repository's normal GitHub Pages/Liquid workflow in a review environment.
3. Run the seven viewport checks, then swipe/drag/wheel/keyboard tests; wait beyond all delayed handlers and confirm both carousels retain state and the archive never reappears.
4. Confirm all current case/publication links, forms, header and metadata; close applicable existing release gates.
5. Only after review authorize merge/publication.
6. Rollback by reverting only this PR's merge commit, or its individual commits in reverse order. Do not reset main to the base SHA, which could discard unrelated changes. No rollback commit exists until rollback is actually performed.

## Proposed control-file entry (not written to Drive)

Name: PROMTAGRAM_SITE_UI_PATCH_2026_09_15
Type: SOP / site UI patch
Contour: 12_SOP; 09_Action_Backlog
Drive path: not created; canonical source is this repository document and PR.
Status: HOLD
Purpose: remove archive and modernize homepage navigation, metrics and carousels.
Control workbook: 1tKsshYtOpzr1dqqpNV0RM6dBs2nII4Lr8cREIOXjiVA.
Target: new row in 12_SOP, linked new row in 09_Action_Backlog after sheet/range verification.
Next step: browser QA and review of the draft PR.
