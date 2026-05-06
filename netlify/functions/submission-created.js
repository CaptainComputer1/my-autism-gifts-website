// Event-triggered Netlify Function — fires on every form submission.
// Sends a per-form confirmation email to the submitter via Resend.
// Existing admin notification (separate Netlify Forms feature) is untouched.
// CommonJS chosen over ESM for maximum compatibility with Netlify event-triggered functions.

const { Resend } = require('resend');

let resendClient;
const getResend = () => {
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY);
  return resendClient;
};

const FROM = 'Rob Hodes <info@myautismgifts.com>';
const REPLY_TO = 'info@myautismgifts.com';
const FOOTER_TEXT = '\n\n— Rob\nMy Autism Gifts · Los Angeles, CA\nmyautismgifts.com';
const FOOTER_HTML = '<p style="margin-top:32px;color:#555;font-size:14px;">— Rob<br>My Autism Gifts · Los Angeles, CA<br><a href="https://myautismgifts.com" style="color:#0d7c8b;">myautismgifts.com</a></p>';

const wrap = (bodyHtml) =>
  `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;color:#222;line-height:1.6;">${bodyHtml}${FOOTER_HTML}</div>`;

const greeting = (name) => (name ? `Hi ${name.split(' ')[0]},` : 'Hi there,');

// MY-65 will rename "consultation" → "clarity-call" in the hidden form-name field.
// When that ships, update the key here to match.
const templates = {
  contact: (name) => ({
    subject: 'Thanks for reaching out — Rob will be in touch',
    text: `${greeting(name)}\n\nThanks for your message. Rob has it and will get back to you personally within one business day.\n\nThere's no wrong question and no pressure — looking forward to connecting.${FOOTER_TEXT}`,
    html: wrap(
      `<p>${greeting(name)}</p>
       <p>Thanks for your message. Rob has it and will get back to you personally within one business day.</p>
       <p>There's no wrong question and no pressure — looking forward to connecting.</p>`
    ),
  }),

  consultation: (name) => ({
    subject: 'Your free consultation request is in',
    text: `${greeting(name)}\n\nThank you for sharing your story. Rob has received your intake and reads every one personally.\n\nHe'll be in touch within one business day to confirm your free consultation. If you'd like to lock in a time right now, you can also book directly at https://myautismgifts.com/clarity_call.html.${FOOTER_TEXT}`,
    html: wrap(
      `<p>${greeting(name)}</p>
       <p>Thank you for sharing your story. Rob has received your intake and reads every one personally.</p>
       <p>He'll be in touch within one business day to confirm your free consultation. If you'd like to lock in a time right now, you can also <a href="https://myautismgifts.com/clarity_call.html" style="color:#0d7c8b;">book directly here</a>.</p>`
    ),
  }),

  waitlist: (name) => ({
    subject: "You're on the waiting list",
    text: `${greeting(name)}\n\nYou're on the waiting list for coaching with Rob. We'll let you know the moment new spots open up.\n\nIn the meantime, feel free to explore https://myautismgifts.com — and if anything urgent comes up, you can always reach Rob at info@myautismgifts.com.${FOOTER_TEXT}`,
    html: wrap(
      `<p>${greeting(name)}</p>
       <p>You're on the waiting list for coaching with Rob. We'll let you know the moment new spots open up.</p>
       <p>In the meantime, feel free to explore <a href="https://myautismgifts.com" style="color:#0d7c8b;">myautismgifts.com</a> — and if anything urgent comes up, Rob is at info@myautismgifts.com.</p>`
    ),
  }),
};

exports.handler = async (event) => {
  console.log('[submission-created] handler invoked');

  let payload;
  try {
    ({ payload } = JSON.parse(event.body));
  } catch (err) {
    console.error('[submission-created] failed to parse event.body:', err?.message);
    return { statusCode: 200 };
  }

  const formName = payload?.form_name;
  const data = payload?.data || {};
  const email = (data.email || '').trim();
  const name = (data.name || '').trim();

  console.log('[submission-created] form_name:', formName, 'email:', email, 'has_template:', !!templates[formName]);

  if (!email) {
    console.log('[submission-created] skipping: no email in submission');
    return { statusCode: 200 };
  }
  if (!templates[formName]) {
    console.log('[submission-created] skipping: no template for form_name:', formName);
    return { statusCode: 200 };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[submission-created] FATAL: RESEND_API_KEY env var is not set');
    return { statusCode: 200 };
  }

  const tmpl = templates[formName](name);

  try {
    const result = await getResend().emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: tmpl.subject,
      html: tmpl.html,
      text: tmpl.text,
    });
    console.log('[submission-created] Resend send result:', JSON.stringify(result));
  } catch (err) {
    console.error('[submission-created] Resend FAILED:', err?.message || err, JSON.stringify(err));
  }

  return { statusCode: 200 };
};
