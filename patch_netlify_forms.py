import re

BASE = r"C:\Users\seanl\Documents\Work\MAG Website Dev"

# ── Contact form in connect.html ─────────────────────────────────────────────
with open(BASE + r"\connect.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add netlify attrs + change action to success URL
html = html.replace(
    'class="contact-form"\n          action="#"\n          method="post"\n          aria-label="Contact form"\n          novalidate',
    'class="contact-form"\n          name="contact"\n          action="/connect.html?sent=true"\n          method="post"\n          aria-label="Contact form"\n          netlify\n          netlify-honeypot="bot-field"\n          novalidate'
)

# 2. Insert hidden form-name + honeypot immediately after the <form ...> opening tag
html = html.replace(
    'aria-label="Contact form"\n          netlify\n          netlify-honeypot="bot-field"\n          novalidate\n        >',
    'aria-label="Contact form"\n          netlify\n          netlify-honeypot="bot-field"\n          novalidate\n        >\n          <input type="hidden" name="form-name" value="contact" />\n          <p style="display:none" aria-hidden="true"><label>Skip this field<input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>'
)

# 3. Add success banner just before the <form> (inside the contact-form-section__inner div)
SUCCESS_BANNER_CONTACT = '''        <div id="contact-success" class="form-success-banner" role="alert" aria-live="polite" style="display:none">
          <p><strong>Message sent!</strong> Rob will get back to you personally within one business day.</p>
        </div>

        '''
html = html.replace(
    '<form\n          class="contact-form"',
    SUCCESS_BANNER_CONTACT + '<form\n          class="contact-form"'
)

# 4. Add inline JS at end (before </body>) to show success banner
SUCCESS_JS_CONTACT = '''  <script>
    (function () {
      if (window.location.search.indexOf('sent=true') !== -1) {
        var banner = document.getElementById('contact-success');
        if (banner) { banner.style.display = 'block'; }
        var form = document.querySelector('.contact-form');
        if (form) { form.style.display = 'none'; }
      }
    }());
  </script>'''
html = html.replace('  <script src="js/main.js"></script>\n</body>', '  <script src="js/main.js"></script>\n' + SUCCESS_JS_CONTACT + '\n</body>')

with open(BASE + r"\connect.html", "w", encoding="utf-8") as f:
    f.write(html)
print("connect.html updated")

# ── Consultation/intake form in consultation.html ────────────────────────────
with open(BASE + r"\consultation.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add netlify attrs + change action to success URL
html = html.replace(
    'class="intake-form"\n          action="#"\n          method="post"\n          aria-label="Client intake form"\n          novalidate',
    'class="intake-form"\n          name="consultation"\n          action="/consultation.html?sent=true"\n          method="post"\n          aria-label="Consultation intake form"\n          netlify\n          netlify-honeypot="bot-field"\n          novalidate'
)

# 2. Insert hidden form-name + honeypot immediately after opening tag
html = html.replace(
    'aria-label="Consultation intake form"\n          netlify\n          netlify-honeypot="bot-field"\n          novalidate\n        >',
    'aria-label="Consultation intake form"\n          netlify\n          netlify-honeypot="bot-field"\n          novalidate\n        >\n          <input type="hidden" name="form-name" value="consultation" />\n          <p style="display:none" aria-hidden="true"><label>Skip this field<input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>'
)

# 3. Add success banner before the form
SUCCESS_BANNER_INTAKE = '''        <div id="intake-success" class="form-success-banner" role="alert" aria-live="polite" style="display:none">
          <p><strong>Thank you!</strong> Rob has received your story and will be in touch within one business day to confirm your free consultation.</p>
        </div>

        '''
html = html.replace(
    '<form\n          class="intake-form"',
    SUCCESS_BANNER_INTAKE + '<form\n          class="intake-form"'
)

# 4. Inline JS for success state
SUCCESS_JS_INTAKE = '''  <script>
    (function () {
      if (window.location.search.indexOf('sent=true') !== -1) {
        var banner = document.getElementById('intake-success');
        if (banner) { banner.style.display = 'block'; }
        var form = document.querySelector('.intake-form');
        if (form) { form.style.display = 'none'; }
        window.scrollTo(0, 0);
      }
    }());
  </script>'''
html = html.replace('  <script src="js/main.js"></script>\n</body>', '  <script src="js/main.js"></script>\n' + SUCCESS_JS_INTAKE + '\n</body>')

with open(BASE + r"\consultation.html", "w", encoding="utf-8") as f:
    f.write(html)
print("consultation.html updated")

print("Done.")
