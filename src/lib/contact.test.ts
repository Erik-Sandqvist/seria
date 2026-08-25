import assert from "node:assert/strict";
import { test } from "node:test";
import { escapeHtml, parseContact, renderContactEmail } from "./contact.ts";

function form(fields: Record<string, string>): FormData {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.append(key, value);
  return data;
}

const valid = {
  name: "Anna Andersson",
  email: "anna@foretaget.se",
  message: "Vi behöver en ny sajt till hösten.",
  locale: "sv",
};

test("godkänner ett komplett inskick", () => {
  const result = parseContact(form({ ...valid, company: "Företaget AB" }));
  assert.equal(result.ok, true);
  assert.equal(result.payload.name, "Anna Andersson");
  assert.equal(result.payload.company, "Företaget AB");
  assert.equal(result.payload.locale, "sv");
});

test("trimmar blanksteg runt fälten", () => {
  const result = parseContact(form({ ...valid, name: "  Anna  " }));
  assert.equal(result.ok, true);
  assert.equal(result.payload.name, "Anna");
});

test("faller tillbaka på svenska när språk saknas", () => {
  const result = parseContact(form({ ...valid, locale: "" }));
  assert.equal(result.ok, true);
  assert.equal(result.payload.locale, "sv");
});

test("kräver namn, mejl och meddelande", () => {
  for (const missing of ["name", "email", "message"]) {
    const result = parseContact(form({ ...valid, [missing]: "   " }));
    assert.equal(result.ok, false);
    assert.equal(result.reason, "required");
  }
});

test("avvisar mejladresser som inte ser ut som mejladresser", () => {
  for (const email of ["anna", "anna@", "@foretaget.se", "anna@foretaget", "a b@c.se"]) {
    const result = parseContact(form({ ...valid, email }));
    assert.equal(result.ok, false, `${email} skulle ha avvisats`);
    assert.equal(result.reason, "email");
  }
});

test("avvisar orimligt långa fält", () => {
  const result = parseContact(form({ ...valid, message: "x".repeat(5001) }));
  assert.equal(result.ok, false);
  assert.equal(result.reason, "tooLong");
});

test("flaggar inskick där honungsfällan är ifylld", () => {
  const result = parseContact(form({ ...valid, website: "https://spam.example" }));
  assert.equal(result.ok, false);
  assert.equal(result.reason, "spam");
});

test("honungsfällan väger tyngre än övrig validering", () => {
  const result = parseContact(form({ website: "spam" }));
  assert.equal(result.ok, false);
  assert.equal(result.reason, "spam");
});

test("escapar html i mejlet", () => {
  assert.equal(
    escapeHtml('<script>alert("hej")</script>'),
    "&lt;script&gt;alert(&quot;hej&quot;)&lt;/script&gt;",
  );
});

test("bygger mejl med ämne, text och escapad html", () => {
  const parsed = parseContact(
    form({
      ...valid,
      company: "Företaget AB",
      message: "<b>Hej</b> & välkommen",
      budget: "15 000 – 30 000 kr",
    }),
  );
  assert.equal(parsed.ok, true);

  const mail = renderContactEmail(parsed.payload, "seria.se");
  assert.equal(mail.subject, "Ny förfrågan: Anna Andersson (Företaget AB)");
  assert.match(mail.text, /Budget: 15 000 – 30 000 kr/);
  assert.match(mail.text, /<b>Hej<\/b> & välkommen/);
  assert.match(mail.html, /&lt;b&gt;Hej&lt;\/b&gt; &amp; välkommen/);
  assert.doesNotMatch(mail.html, /<b>Hej<\/b>/);
});

test("utelämnar företag ur ämnesraden när det saknas", () => {
  const parsed = parseContact(form(valid));
  assert.equal(parsed.ok, true);
  assert.equal(
    renderContactEmail(parsed.payload, "seria.se").subject,
    "Ny förfrågan: Anna Andersson",
  );
});

test("visar tankstreck för tomma valfria fält", () => {
  const parsed = parseContact(form(valid));
  assert.equal(parsed.ok, true);
  const mail = renderContactEmail(parsed.payload, "seria.se");
  assert.match(mail.text, /Telefon: —/);
  assert.match(mail.text, /Företag: —/);
});
