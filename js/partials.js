/* Inject shared header and footer from partials/ at page load.
   Synchronous XHR keeps the injected DOM ready before any downstream
   script (e.g. main.js) queries it — so nav-marking and form handlers
   work without a race condition. Fast enough for local files. */
(function () {
  var placeholders = document.querySelectorAll('[data-include]');
  placeholders.forEach(function (el) {
    var name = el.getAttribute('data-include');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'partials/' + name + '.html', false); // false = synchronous
    try {
      xhr.send(null);
      if (xhr.status === 200 || xhr.status === 0 /* file:// */) {
        el.outerHTML = xhr.responseText;
      }
    } catch (e) {
      /* Leave placeholder empty if fetch fails — preferable to a JS error */
    }
  });
})();
