/* Promtagram 2.0: navigation + temporary compliance lock for personal-data intake. */

document.addEventListener('DOMContentLoaded', function() {
  const CONSENT_VERSION = 'pd-consent-v0.2-2026-08-21';
  const EVIDENCE_QA_COMPLETE = false;
  const PERSONAL_DATA_INTAKE_ENABLED = false;

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

  function addLegalNote(form, submitButton) {
    if (form.querySelector('.legal-note')) return;
    const legalNote = document.createElement('p');
    legalNote.className = 'note legal-note';
    legalNote.innerHTML = 'Документы: <a href="/privacy.html" target="_blank" rel="noopener">Политика обработки персональных данных</a> · <a href="/consent.html" target="_blank" rel="noopener">Согласие на обработку персональных данных</a> · <a href="/marketing-consent.html" target="_blank" rel="noopener">Согласие на рекламные сообщения</a>.';
    if (submitButton) form.insertBefore(legalNote, submitButton);
    else form.appendChild(legalNote);
  }

  document.querySelectorAll('.hero-mini-form').forEach(function(form) {
    const consent = form.querySelector('.check input[type="checkbox"]');
    const consentLabel = form.querySelector('.check span');
    const submitButton = form.querySelector('button[type="submit"]');

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

    addLegalNote(form, submitButton);

    if (!PERSONAL_DATA_INTAKE_ENABLED) {
      form.setAttribute('data-compliance-lock', 'ru-primary-db-required');
      form.querySelectorAll('input, select, textarea').forEach(function(field) {
        field.disabled = true;
        field.removeAttribute('name');
        field.removeAttribute('value');
      });

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Приём заявок временно приостановлен';
        submitButton.setAttribute('aria-disabled', 'true');
      }

      const lock = document.createElement('div');
      lock.className = 'note compliance-lock-note';
      lock.style.margin = '14px 0';
      lock.style.padding = '12px 14px';
      lock.style.border = '1px solid #dfe6f1';
      lock.style.borderRadius = '12px';
      lock.style.background = '#f7f9fd';
      lock.style.textAlign = 'left';
      lock.textContent = 'Онлайн-сбор персональных данных временно отключён до подключения и проверки российской первичной базы данных. Поля формы не отправляются и не сохраняются.';
      form.appendChild(lock);

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }, true);
    }
  });

  // Disable legacy Google Forms handoff while the Russian primary database is not verified.
  document.querySelectorAll('a[href*="docs.google.com/forms"], a[href*="forms.gle"], iframe[src*="docs.google.com/forms"]').forEach(function(node) {
    if (node.tagName === 'IFRAME') {
      node.removeAttribute('src');
      node.setAttribute('title', 'Форма временно отключена');
      node.style.display = 'none';
    } else {
      node.removeAttribute('href');
      node.setAttribute('aria-disabled', 'true');
      node.style.pointerEvents = 'none';
      node.style.opacity = '0.6';
      node.textContent = 'Форма временно отключена';
    }
  });

  window.openFullForm = function() {
    return false;
  };

  document.querySelectorAll('.lead .benefit span').forEach(function(node) {
    if (node.textContent.trim() === 'Без передачи третьим лицам') {
      node.textContent = 'Онлайн-сбор данных временно отключён';
    }
  });

  if (!EVIDENCE_QA_COMPLETE) {
    document.querySelectorAll('.kpi b, .stats b, .metrics b').forEach(function(valueNode) {
      valueNode.textContent = 'на проверке';
    });

    const caseBadge = document.querySelector('.case .pill');
    if (caseBadge) caseBadge.textContent = 'Демо / требует Evidence QA';

    const evidenceHead = document.querySelector('#evidence .head p');
    if (evidenceHead) {
      evidenceHead.textContent = 'Количественные показатели и кейсы показываются как подтверждённые только после проверки первичных источников, методики и права на публичное использование.';
    }

    document.querySelectorAll('.score').forEach(function(scoreCard) {
      if (scoreCard.querySelector('.evidence-demo-note')) return;
      const demo = document.createElement('p');
      demo.className = 'note evidence-demo-note';
      demo.textContent = 'Демонстрационный пример интерфейса. Не является оценкой конкретной компании.';
      scoreCard.appendChild(demo);
    });

    const scanCard = document.querySelector('.scan-left');
    if (scanCard && !scanCard.querySelector('.evidence-demo-note')) {
      const demo = document.createElement('p');
      demo.className = 'note evidence-demo-note';
      demo.style.gridColumn = '1 / -1';
      demo.textContent = 'Демонстрационный пример скоринга. Фактическая оценка формируется только по данным конкретного запроса.';
      scanCard.appendChild(demo);
    }
  }

  const footerBottom = document.querySelector('.footer .bottom');
  if (footerBottom && !footerBottom.querySelector('.legal-footer-links')) {
    const legalLinks = document.createElement('div');
    legalLinks.className = 'legal-footer-links';
    legalLinks.style.marginTop = '10px';
    legalLinks.innerHTML = '<a href="/privacy.html">Политика обработки персональных данных</a> · <a href="/consent.html">Согласие на обработку персональных данных</a> · <a href="/marketing-consent.html">Согласие на рекламные сообщения</a>';
    footerBottom.appendChild(legalLinks);
  }
});
