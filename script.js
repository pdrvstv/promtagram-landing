/*
 * Promtagram landing v0.6 script
 *
 * The JavaScript on this page intentionally does not manipulate layout
 * or content: it merely adds small behavioural enhancements, such as
 * smooth scrolling to anchors, logo fallbacks and form wiring.  Avoid
 * injecting primary UI via JS – all structure is in the HTML.
 */

(function(){
  // Public URL for the embedded Google form.  Do not modify.
  var FORM_PUBLIC_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform';

  function scrollToId(id) {
    var el = document.getElementById(id);
    if(el) {
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }

  function bindScroll() {
    document.querySelectorAll('[data-scroll]').forEach(function(el){
      el.addEventListener('click', function(e){
        e.preventDefault();
        var target = el.getAttribute('data-scroll');
        if(target) scrollToId(target);
      });
    });
  }

  // If logo cannot be loaded (e.g. network error), show fallback mark
  function bindLogoFallback() {
    var img = document.getElementById('brandLogo');
    var fallback = document.getElementById('brandFallback');
    if(!img || !fallback) return;
    function showFallback(){
      img.style.display = 'none';
      fallback.style.display = 'inline-flex';
    }
    img.addEventListener('error', showFallback);
    if(img.complete && img.naturalWidth === 0) showFallback();
  }

  // Wire the mini form and full form links to the Google form URL
  function bindHeroForm() {
    var form = document.querySelector('.hero-mini-form');
    if(form) {
      form.action = FORM_PUBLIC_URL;
    }
    var link = document.querySelector('.hero-full-link');
    if(link) {
      link.href = FORM_PUBLIC_URL;
    }
  }

  function init() {
    bindScroll();
    bindLogoFallback();
    bindHeroForm();
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();