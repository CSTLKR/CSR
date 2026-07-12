/* CryptoStalker (CSR) — simple EN/RU language switcher.
   Any element with data-en (+ data-ru) gets its text swapped.
   Add data-i18n-attr="someAttr" to translate an attribute instead of textContent. */
(function () {
  var STORAGE_KEY = 'csrLang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var value = lang === 'ru' ? el.getAttribute('data-ru') : el.getAttribute('data-en');
      if (value === null) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  window.CSR_setLang = function (lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
    document.dispatchEvent(new CustomEvent('csr:langchange', { detail: { lang: lang } }));
  };

  window.CSR_getLang = getLang;

  document.addEventListener('DOMContentLoaded', function () {
    apply(getLang());
  });
})();
