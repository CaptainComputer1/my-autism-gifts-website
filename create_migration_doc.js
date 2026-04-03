const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat,
  ExternalHyperlink, TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');

// ── Constants ─────────────────────────────────────────────────────────────────
const OUT = "C:\\Users\\seanl\\Documents\\Work\\MAG Website Dev\\MAG_Website_Migration_Document.docx";
const NAVY   = "2A3A56";
const TEAL   = "0f5f74";
const PURPLE = "4A3B63";
const WHITE  = "FFFFFF";
const LGRAY  = "F2F4F8";
const MGRAY  = "D0D5E0";
const BLACK  = "1B1C1D";
const TODAY  = "April 2, 2026";

// Helpers
const border = (color = MGRAY) => ({ style: BorderStyle.SINGLE, size: 1, color });
const borders = (color) => ({ top: border(color), bottom: border(color), left: border(color), right: border(color) });
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function h(text, level, color = BLACK, spaceAfter = 160) {
  return new Paragraph({
    heading: level,
    spacing: { before: level === HeadingLevel.HEADING_1 ? 320 : 240, after: spaceAfter },
    children: [new TextRun({ text, color, bold: true,
      size: level === HeadingLevel.HEADING_1 ? 36 : level === HeadingLevel.HEADING_2 ? 28 : 24,
      font: "Arial" })]
  });
}

function p(text, options = {}) {
  return new Paragraph({
    spacing: { before: 80, after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: BLACK, ...options })]
  });
}

function pBold(text) { return p(text, { bold: true }); }

function li(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: BLACK })]
  });
}

function checkItem(text, done = true) {
  const mark = done ? "✔  " : "○  ";
  const color = done ? "1a6b3a" : "666666";
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    indent: { left: 360 },
    children: [
      new TextRun({ text: mark, font: "Arial", size: 22, color, bold: done }),
      new TextRun({ text, font: "Arial", size: 22, color: done ? BLACK : "666666" })
    ]
  });
}

function divider(color = MGRAY) {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color, space: 1 } },
    children: []
  });
}

function gap(pt = 80) {
  return new Paragraph({ spacing: { before: 0, after: pt }, children: [] });
}

// ── Table helpers ─────────────────────────────────────────────────────────────
function cell(text, width, opts = {}) {
  const { bg = WHITE, bold = false, color = BLACK, align = AlignmentType.LEFT, vAlign = VerticalAlign.CENTER } = opts;
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders: borders(MGRAY),
    shading: { fill: bg, type: ShadingType.CLEAR },
    verticalAlign: vAlign,
    margins: { top: 80, bottom: 80, left: 140, right: 140 },
    children: [new Paragraph({
      alignment: align,
      children: [new TextRun({ text, font: "Arial", size: 20, bold, color })]
    })]
  });
}

function headerCell(text, width) {
  return cell(text, width, { bg: NAVY, bold: true, color: WHITE });
}

function tableRow(cells) { return new TableRow({ children: cells }); }

function makeTable(rows, widths) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: widths,
    rows
  });
}

// ── DOCUMENT CONTENT ─────────────────────────────────────────────────────────

const children = [];

// ── COVER ─────────────────────────────────────────────────────────────────────
children.push(
  new Paragraph({
    spacing: { before: 480, after: 120 },
    children: [new TextRun({ text: "My Autism Gifts", font: "Arial", size: 48, bold: true, color: NAVY })]
  }),
  new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [new TextRun({ text: "Website Migration", font: "Arial", size: 36, bold: true, color: PURPLE })]
  }),
  new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [new TextRun({ text: "WordPress / Elementor  →  Static HTML + Netlify", font: "Arial", size: 24, color: TEAL })]
  }),
  divider(NAVY),
  new Paragraph({
    spacing: { before: 80, after: 40 },
    children: [
      new TextRun({ text: "Prepared for:  ", font: "Arial", size: 22, bold: true, color: BLACK }),
      new TextRun({ text: "Rob Hodes, My Autism Gifts", font: "Arial", size: 22, color: BLACK })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [
      new TextRun({ text: "Prepared by:   ", font: "Arial", size: 22, bold: true, color: BLACK }),
      new TextRun({ text: "Sean L.", font: "Arial", size: 22, color: BLACK })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [
      new TextRun({ text: "Date:              ", font: "Arial", size: 22, bold: true, color: BLACK }),
      new TextRun({ text: TODAY, font: "Arial", size: 22, color: BLACK })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [
      new TextRun({ text: "Staging URL:  ", font: "Arial", size: 22, bold: true, color: BLACK }),
      new TextRun({ text: "https://my-autism-gifts.netlify.app", font: "Arial", size: 22, color: TEAL })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 480 },
    children: [
      new TextRun({ text: "GitHub Repo:  ", font: "Arial", size: 22, bold: true, color: BLACK }),
      new TextRun({ text: "https://github.com/CaptainComputer1/my-autism-gifts-website", font: "Arial", size: 22, color: TEAL })
    ]
  }),
  new Paragraph({ children: [new PageBreak()] })
);

// ── SECTION 1: PROJECT SUMMARY ───────────────────────────────────────────────
children.push(
  h("1. Project Summary", HeadingLevel.HEADING_1, NAVY),
  p("My Autism Gifts is transitioning from a WordPress/Elementor website to a hand-coded static HTML/CSS/JavaScript site hosted on Netlify. The live site at myautismgifts.com remains fully operational on WordPress throughout the build. Once all content, forms, and DNS are ready, a simple IONOS DNS record change completes the cutover."),
  p("The static site offers several advantages over the current WordPress setup:"),
  li("No WordPress hosting fees, plugin maintenance, or security updates"),
  li("Faster page loads (no PHP, no database, no bloated page builder)"),
  li("Free hosting on Netlify with automatic deploys from GitHub"),
  li("WCAG AAA contrast compliance throughout"),
  li("Netlify Forms for contact and consultation submissions — no plugin required"),
  li("Full ownership of the codebase — no vendor lock-in"),
  gap(),
  h("2. Completed Work", HeadingLevel.HEADING_1, NAVY),
  p("All items below have been implemented, committed to GitHub, and are live on the Netlify staging site."),
  gap(40)
);

// Completed work checklist
const completedItems = [
  ["Site Structure", "Five pages created: Welcome, About Your Coach, Services, Connect, Consultation"],
  ["Brand Design System", "Full CSS design system with brand tokens (navy, teal, purple), typography (Vidaloka + Roboto), spacing scale, and responsive layout"],
  ["Images Migrated", "All 9 images downloaded from WordPress CDN and added to the repo — site no longer depends on the live WordPress server for images"],
  ["Logo Sizing", "Header logo 52px, footer logo 48px, both maintain original aspect ratio on all pages"],
  ["Testimonials Carousel", "All 8 real client testimonials from Elementor exported and added as an accessible, keyboard-navigable carousel with autoplay (respects prefers-reduced-motion)"],
  ["Calendly Booking Links", "All four pricing card buttons link directly to the correct Calendly event URLs with corrected American spelling (Enroll Now)"],
  ["WCAG AAA Contrast", "All text and UI elements upgraded to 7:1 contrast ratio (AAA) against their backgrounds. New --color-secondary-dark token (#0f5f74) added for teal text on white"],
  ["Free Consultation Nav Button", "Fixed CSS specificity bug that caused near-black text on the dark purple button. Now correctly shows white text (contrast ~12:1)"],
  ["Consultation Page Rename", "intake.html renamed to consultation.html. All five pages updated. Footer nav updated to Consultation"],
  ["Netlify Forms", "Contact form (connect.html) and Consultation intake form wired with netlify attribute, hidden form-name fields, and honeypot spam protection. Custom success messages shown after submission"],
  ["netlify.toml", "Publish directory and security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy) configured"],
  ["Accessibility", "ARIA roles, labels, skip-link, aria-current, aria-hidden, and keyboard navigation implemented throughout"],
];

for (const [title, detail] of completedItems) {
  children.push(new Paragraph({
    spacing: { before: 60, after: 30 },
    indent: { left: 200 },
    children: [
      new TextRun({ text: "✔  ", font: "Arial", size: 22, bold: true, color: "1a6b3a" }),
      new TextRun({ text: title + " — ", font: "Arial", size: 22, bold: true, color: BLACK }),
      new TextRun({ text: detail, font: "Arial", size: 22, color: "444444" })
    ]
  }));
}
children.push(gap(), new Paragraph({ children: [new PageBreak()] }));

// ── SECTION 3: PENDING ITEMS ──────────────────────────────────────────────────
children.push(
  h("3. Pending Items Before Launch", HeadingLevel.HEADING_1, NAVY),
  p("The following items are required or recommended before switching the live domain to the new site. Owner column indicates who takes the action."),
  gap(40)
);

children.push(makeTable([
  tableRow([
    headerCell("Item", 3600),
    headerCell("Owner", 1200),
    headerCell("Priority", 1200),
    headerCell("Notes", 3360)
  ]),
  tableRow([cell("Real client testimonials — names, quotes, and photos", 3600), cell("Rob", 1200, {bold:true,color:PURPLE}), cell("High", 1200, {color:"a05000"}), cell("Current carousel uses real names/quotes from Elementor export. Photos are initials placeholders — swap in real headshots if available.", 3360)]),
  tableRow([cell("Hero headline choice", 3600), cell("Rob", 1200, {bold:true,color:PURPLE}), cell("High", 1200, {color:"a05000"}), cell("Three candidates (A/B/C) are in MAG_Copy_Drafts.md. Rob to pick one before launch.", 3360)]),
  tableRow([cell("Refund and no-show policy", 3600), cell("Rob", 1200, {bold:true,color:PURPLE}), cell("High", 1200, {color:"a05000"}), cell("Services page has a placeholder. Rob to decide policy wording before publishing.", 3360)]),
  tableRow([cell("Netlify form notifications", 3600), cell("Sean", 1200, {bold:true,color:TEAL}), cell("High", 1200, {color:"a05000"}), cell("After first deploy with forms, configure email notifications in Netlify dashboard so Rob receives submissions.", 3360)]),
  tableRow([cell("DNS cutover (IONOS)", 3600), cell("Sean + Rob", 1200, {bold:true,color:NAVY}), cell("Launch", 1200, {color:"1a6b3a"}), cell("Change A/CNAME records in IONOS to point to Netlify. ~5 min downtime window. Coordinate timing with Rob.", 3360)]),
  tableRow([cell("DMARC DNS record upgrade", 3600), cell("Sean", 1200, {bold:true,color:TEAL}), cell("Medium", 1200, {color:"666666"}), cell("Edit _dmarc TXT record in IONOS dashboard from p=none to p=quarantine for stronger email security.", 3360)]),
  tableRow([cell("WordPress uqokxuwa account", 3600), cell("Sean", 1200, {bold:true,color:TEAL}), cell("Medium", 1200, {color:"666666"}), cell("Check wp-admin/users.php manually — unknown account found during audit. Remove if not legitimate.", 3360)]),
  tableRow([cell("Netlify Visual Editor (optional)", 3600), cell("Sean", 1200, {bold:true,color:TEAL}), cell("Low", 1200, {color:"999999"}), cell("Requires stackbit.config.ts and npm packages. Allows Rob to edit content visually. Can be done post-launch.", 3360)]),
  tableRow([cell("WordPress decommission", 3600), cell("Rob", 1200, {bold:true,color:PURPLE}), cell("Post-launch", 1200, {color:"999999"}), cell("Cancel WordPress/Elementor hosting after confirming new site is stable. Keep IONOS domain registration active.", 3360)]),
], [3600, 1200, 1200, 3360]));

children.push(gap(), new Paragraph({ children: [new PageBreak()] }));

// ── SECTION 4: COST ESTIMATE ──────────────────────────────────────────────────
children.push(
  h("4. Cost Estimate", HeadingLevel.HEADING_1, NAVY),
  p("The following estimate covers the work completed to date and the remaining tasks required to bring the site to launch. All work is billed at a flat project rate broken into clearly defined phases."),
  gap(40)
);

children.push(makeTable([
  tableRow([
    headerCell("Phase", 2400),
    headerCell("Description", 4560),
    headerCell("Est. Hours", 1200),
    headerCell("Rate", 1200),
    headerCell("Amount", 1200 - 200)
  ]),
  tableRow([
    cell("Phase 1 — Complete", 2400, {bg: "F0FFF4", bold:true, color:NAVY}),
    cell("Full static site build: 5 pages, design system, images, testimonials carousel, Calendly links, WCAG AAA contrast, nav fix, consultation rename, Netlify Forms, netlify.toml, accessibility pass", 4560),
    cell("24", 1200, {align: AlignmentType.CENTER}),
    cell("$85/hr", 1200, {align: AlignmentType.CENTER}),
    cell("$2,040", 1000, {align: AlignmentType.RIGHT, bold:true})
  ]),
  tableRow([
    cell("Phase 2 — Launch Prep", 2400, {bg: LGRAY, bold:true, color:NAVY}),
    cell("Netlify form notifications setup, DNS cutover coordination, DMARC record update, WordPress uqokxuwa account investigation and removal", 4560),
    cell("3", 1200, {align: AlignmentType.CENTER}),
    cell("$85/hr", 1200, {align: AlignmentType.CENTER}),
    cell("$255", 1000, {align: AlignmentType.RIGHT, bold:true})
  ]),
  tableRow([
    cell("Phase 3 — Post-Launch", 2400, {bg: LGRAY, bold:true, color:NAVY}),
    cell("30-day monitoring, minor copy updates (testimonials/headline/policy once Rob decides), WordPress decommission confirmation", 4560),
    cell("2", 1200, {align: AlignmentType.CENTER}),
    cell("$85/hr", 1200, {align: AlignmentType.CENTER}),
    cell("$170", 1000, {align: AlignmentType.RIGHT, bold:true})
  ]),
  tableRow([
    cell("Netlify Visual Editor (optional)", 2400, {color:"777777"}),
    cell("stackbit.config.ts setup and npm package integration to enable Rob to edit content without a developer", 4560, {color:"777777"}),
    cell("4", 1200, {align: AlignmentType.CENTER, color:"777777"}),
    cell("$85/hr", 1200, {align: AlignmentType.CENTER, color:"777777"}),
    cell("$340", 1000, {align: AlignmentType.RIGHT, color:"777777"})
  ]),
  tableRow([
    cell("TOTAL (excl. optional)", 2400, {bg: NAVY, bold:true, color:WHITE}),
    cell("Phases 1–3", 4560, {bg: NAVY, color: "CCDDEE"}),
    cell("29 hrs", 1200, {bg: NAVY, color: WHITE, align: AlignmentType.CENTER}),
    cell("", 1200, {bg: NAVY}),
    cell("$2,465", 1000, {bg: NAVY, bold:true, color:WHITE, align: AlignmentType.RIGHT})
  ]),
], [2400, 4560, 1200, 1200, 1000]));

children.push(
  gap(80),
  p("Note: Phase 1 work is complete and is invoiceable now. Phases 2–3 will be billed upon completion. The Netlify Visual Editor is optional and quoted separately.", { italics: true, color: "666666" }),
  gap(), new Paragraph({ children: [new PageBreak()] })
);

// ── SECTION 5: SERVICE AGREEMENT ─────────────────────────────────────────────
children.push(
  h("5. Service Agreement", HeadingLevel.HEADING_1, NAVY),
  p("This agreement is between Sean L. (Developer) and Rob Hodes / My Autism Gifts (Client) for website development and migration services as described in this document."),
  gap(40),
  h("Scope of Work", HeadingLevel.HEADING_2, NAVY),
  p("Developer will design, build, and deploy the static website described in Sections 1–4. Work not described in this document (additional pages, new features, branding changes, third-party integrations) will be quoted separately before work begins."),
  gap(40),
  h("Payment Terms", HeadingLevel.HEADING_2, NAVY),
  li("Phase 1 ($2,040) is invoiced upon delivery of this document and due within 14 days."),
  li("Phases 2 and 3 will be invoiced upon completion and due within 14 days of invoice."),
  li("Optional work (Netlify Visual Editor) requires written approval and a 50% deposit before work begins."),
  li("Invoices unpaid after 30 days accrue 1.5% monthly interest."),
  gap(40),
  h("Revisions", HeadingLevel.HEADING_2, NAVY),
  p("Up to two rounds of revisions per page are included in the Phase 1 price. Additional revisions are billed at the standard rate of $85/hour in 30-minute increments."),
  gap(40),
  h("Intellectual Property", HeadingLevel.HEADING_2, NAVY),
  p("Upon receipt of full payment for each phase, Client owns all code, content, and design assets delivered in that phase. Developer retains no license to use Client's brand, imagery, or copy for any other purpose."),
  gap(40),
  h("Hosting and DNS", HeadingLevel.HEADING_2, NAVY),
  p("The website is hosted on Netlify under the Developer's account during development. Prior to launch, the site will be transferred to a Netlify account in Client's name, or remain under Developer's account with Client as an admin collaborator — Client's choice. IONOS domain registration remains entirely under Client's control."),
  gap(40),
  h("Warranties and Limitations", HeadingLevel.HEADING_2, NAVY),
  p("Developer warrants that the delivered site will function correctly in current versions of Chrome, Firefox, Safari, and Edge. Developer is not responsible for third-party service outages (Netlify, IONOS, Calendly, Google Fonts, Kit/ConvertKit). Client is responsible for providing accurate content, approvals, and timely feedback. Developer is not liable for business losses arising from website downtime, form delivery failures, or DNS propagation delays."),
  gap(40),
  h("Termination", HeadingLevel.HEADING_2, NAVY),
  p("Either party may terminate this agreement with 7 days written notice. Work completed to the date of termination is billable at the standard rate. All completed deliverables will be handed over to Client upon final payment."),
  gap(80)
);

// Signature block
children.push(
  divider(MGRAY),
  gap(40),
  p("By proceeding with payment or written approval, both parties agree to the terms above."),
  gap(80),
  makeTable([
    tableRow([
      new TableCell({ borders: noBorders, width: { size: 4200, type: WidthType.DXA },
        children: [
          new Paragraph({ children: [new TextRun({ text: "Developer", font: "Arial", size: 20, bold: true, color: BLACK })]}),
          new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: MGRAY } },
            spacing: { before: 600, after: 60 }, children: [] }),
          new Paragraph({ children: [new TextRun({ text: "Sean L.   |   Date: _______________", font: "Arial", size: 18, color: "777777" })] })
        ]
      }),
      new TableCell({ borders: noBorders, width: { size: 360, type: WidthType.DXA }, children: [new Paragraph({ children: [] })] }),
      new TableCell({ borders: noBorders, width: { size: 4800, type: WidthType.DXA },
        children: [
          new Paragraph({ children: [new TextRun({ text: "Client", font: "Arial", size: 20, bold: true, color: BLACK })]}),
          new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: MGRAY } },
            spacing: { before: 600, after: 60 }, children: [] }),
          new Paragraph({ children: [new TextRun({ text: "Rob Hodes, My Autism Gifts   |   Date: ___________", font: "Arial", size: 18, color: "777777" })] })
        ]
      }),
    ])
  ], [4200, 360, 4800])
);

// ── BUILD DOCUMENT ────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: BLACK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1296, bottom: 1440, left: 1296 }
      }
    },
    headers: {
      default: new Header({ children: [
        new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: NAVY, space: 6 } },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "My Autism Gifts — Website Migration", font: "Arial", size: 18, color: NAVY, bold: true }),
            new TextRun({ text: "\t" + TODAY, font: "Arial", size: 18, color: "888888" })
          ]
        })
      ]})
    },
    footers: {
      default: new Footer({ children: [
        new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: MGRAY, space: 6 } },
          spacing: { before: 120 },
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({ text: "Confidential", font: "Arial", size: 16, color: "AAAAAA" }),
            new TextRun({ text: "\tPage ", font: "Arial", size: 16, color: "AAAAAA" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "AAAAAA" }),
            new TextRun({ text: " of ", font: "Arial", size: 16, color: "AAAAAA" }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Arial", size: 16, color: "AAAAAA" }),
          ]
        })
      ]})
    },
    children
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(OUT, buf);
  console.log("Written: " + OUT);
}).catch(e => console.error(e));
