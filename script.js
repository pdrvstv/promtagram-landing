/* Promtagram 2.0 script: minimal navigation, form handoff and compliance safeguards. */

document.addEventListener('DOMContentLoaded', function() {
  const FULL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform';
  const CONSENT_VERSION = 'pd-consent-v0.2-2026-08-21';
  const EVIDENCE_QA_COMPLETE = false;

  // Smooth scroll for internal anchors.
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Compliance hardening for both mini forms.
  // The source HTML historically had pre-selected consent checkboxes. We explicitly
  // reset them and require a separate active action by the user.
  document.querySelectorAll('.hero-mini-form').forEach(function(form) {
    const consent = form.querySelector('.check input[type="checkbox"]');
    const consentLabel = form.querySelector('.check span');

    if (consent) {
      consent.checked = false;
      consent.defaultChecked = false;
      consent.required = true;
      consent.name = 'pd_consent';
      consent.value = CONSENT_VERSION;
      consent.setAttribute('aria-label', 'Согласие на обработку персональных данных');
    }

    if (consentLabel) {
      consentLabel.textContent = 'Я согласен на обработку персональных данных';
    }

    const legalNote = document.createElement('p');
    legalNote.className = 'note legal-note';
    legalNote.innerHTML = 'Перед продолжением ознакомьтесь с <a href="/consent.html" target="_blank" rel="noopener">согласием на обработку персональных данных</a> и <a href="/privacy.html" target="_blank" rel="noopener">политикой обработки данных</a>. Согласие не распространяется на рекламные рассылки.';

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      form.insertBefore(legalNote, submitButton);
    } else {
      form.appendChild(legalNote);
    }
  });

  // Avoid an absolute "no third parties" promise while the production handoff uses
  // an external full-form service and the processor/localisation map is under legal review.
  document.querySelectorAll('.lead .benefit span').forEach(function(node) {
    if (node.textContent.trim() === 'Без передачи третьим лицам') {
      node.textContent = 'Только в пределах заявленных целей обработки';
    }
  });

  // Evidence red-team gate. Current numeric marketing KPIs and the displayed case
  // have no public primary evidence attached in the repository. Until Evidence QA is
  // completed, do not render them as verified performance facts.
  if (!EVIDENCE_QA_COMPLETE) {
    document.querySelectorAll('.kpi b, .stats b, .metrics b').forEach(function(valueNode) {
      valueNode.textContent = 'на проверке';
    });

    const caseBadge = document.querySelector('.case .pill');
    if (caseBadge) {
      caseBadge.textContent = 'Демо / требует Evidence QA';
    }

    const evidenceHead = document.querySelector('#evidence .head p');
    if (evidenceHead) {
      evidenceHead.textContent = 'Показатели и кейсы публикуются как подтверждённые только после проверки первичных источников и права на публичное использование.';
    }

    document.querySelectorAll('.score').forEach(function(scoreCard) {
      const demo = document.createElement('p');
      demo.className = 'note';
      demo.textContent = 'Демонстрационный пример интерфейса. Не является оценкой конкретной компании.';
      scoreCard.appendChild(demo);
    });

    const scanCard = document.querySelector('.scan-left');
    if (scanCard) {
      const demo = document.createElement('p');
      demo.className = 'note';
      demo.style.gridColumn = '1 / -1';
      demo.textContent = 'Демонстрационный пример скоринга. Фактическая оценка формируется только по данным конкретного запроса.';
      scanCard.appendChild(demo);
    }
  }

  // Surface legal documents from the footer without changing SEO-critical files.
  const footerBottom = document.querySelector('.footer .bottom');
  if (footerBottom) {
    const legalLinks = document.createElement('div');
    legalLinks.className = 'legal-footer-links';
    legalLinks.style.marginTop = '10px';
    legalLinks.innerHTML = '<a href="/privacy.html">Политика обработки персональных данных</a> · <a href="/consent.html">Согласие на обработку персональных данных</a>';
    footerBottom.appendChild(legalLinks);
  }

  // Mini forms do not transmit entered fields. They only hand the user off to the
  // current full form URL; no personal data is appended to the URL.
  window.openFullForm = function() {
    window.open(FULL_FORM_URL, '_blank', 'noopener');
  };
});
