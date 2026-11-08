/* Promtagram Creative Studio — portfolio interactions (isolated stage 3).
 * No dependencies, analytics, forms, or changes to the main site. */
(() => {
  'use strict';

  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-category]'));

  // Keep the existing filter UI accessible and retain a predictable DOM order.
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter || 'all';
      cards.forEach((card) => {
        const visible = selected === 'all' || card.dataset.category === selected;
        card.dataset.hidden = visible ? 'false' : 'true';
      });
      filterButtons.forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
    });
  });

  const modal = document.querySelector('.modal');
  if (!modal) return;

  const imageElement = modal.querySelector('img');
  const caption = modal.querySelector('.modal-caption');
  const closeButton = modal.querySelector('.modal-close');
  const previousButton = modal.querySelector('[data-prev]');
  const nextButton = modal.querySelector('[data-next]');
  const zoomable = Array.from(document.querySelectorAll('img.image-view'));

  if (!imageElement || !caption || !closeButton || !previousButton || !nextButton) return;

  let imageIndex = 0;
  let previouslyFocused = null;
  let previouslyOverflow = '';

  function showImage(requestedIndex) {
    if (!zoomable.length) return;
    imageIndex = ((requestedIndex % zoomable.length) + zoomable.length) % zoomable.length;
    const source = zoomable[imageIndex];
    const url = source.dataset.full || source.currentSrc || source.src;
    imageElement.src = url;
    imageElement.alt = source.alt || 'Просмотр изображения';
    caption.textContent = source.alt || 'Визуальная работа Promtagram';
    previousButton.disabled = zoomable.length < 2;
    nextButton.disabled = zoomable.length < 2;
  }

  function openModal(index, trigger) {
    if (!zoomable.length) return;
    previouslyFocused = trigger;
    previouslyOverflow = document.body.style.overflow;
    showImage(index);
    modal.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeModal() {
    if (!modal.hasAttribute('open')) return;
    modal.removeAttribute('open');
    document.body.style.overflow = previouslyOverflow;
    imageElement.removeAttribute('src');
    if (previouslyFocused && previouslyFocused.isConnected) {
      previouslyFocused.focus();
    }
    previouslyFocused = null;
  }

  zoomable.forEach((img, index) => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-haspopup', 'dialog');
    img.setAttribute('aria-label', 'Увеличить изображение: ' + (img.alt || 'работа'));
    img.addEventListener('click', () => openModal(index, img));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(index, img);
      }
    });
  });

  closeButton.addEventListener('click', closeModal);
  previousButton.addEventListener('click', () => showImage(imageIndex - 1));
  nextButton.addEventListener('click', () => showImage(imageIndex + 1));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  // Dialog keyboard behavior: close, navigate images, and keep focus inside.
  modal.addEventListener('keydown', (event) => {
    if (!modal.hasAttribute('open')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(imageIndex - 1);
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(imageIndex + 1);
      return;
    }
    if (event.key === 'Tab') {
      const controls = [closeButton, previousButton, nextButton].filter((el) => !el.disabled);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!controls.includes(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Defensive fallback for keyboard focus moved outside by browser extensions.
  document.addEventListener('focusin', (event) => {
    if (modal.hasAttribute('open') && !modal.contains(event.target)) {
      closeButton.focus();
    }
  });
})();
