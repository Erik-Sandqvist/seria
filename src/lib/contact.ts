/**
 * Ren logik för kontaktformuläret — validering och mejlinnehåll.
 *
 * Medvetet fri från beroenden (inga imports) så den går att testa direkt med
 * Nodes testkörare. Felen returneras som koder; serveråtgärden översätter dem
 * till text på besökarens språk.
 */

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  locale: string;
};

export type ParseResult =
  | { ok: true; payload: ContactPayload }
  /** Honungsfällan slog till — behandla som lyckad, men skicka inget mejl. */
  | { ok: false; reason: "spam" }
  | { ok: false; reason: "required" | "email" | "tooLong" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS = {
  name: 200,
  email: 200,
  company: 200,
  phone: 40,
  message: 5000,
} as const;

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function parseContact(formData: FormData): ParseResult {
  // Fältet är dolt för människor. Är det ifyllt kommer inskicket från en bot.
  if (field(formData, "website") !== "") {
    return { ok: false, reason: "spam" };
  }

  const payload: ContactPayload = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    company: field(formData, "company"),
    phone: field(formData, "phone"),
    projectType: field(formData, "projectType"),
    budget: field(formData, "budget"),
    message: field(formData, "message"),
    locale: field(formData, "locale") || "sv",
  };

  if (!payload.name || !payload.email || !payload.message) {
    return { ok: false, reason: "required" };
  }
  if (payload.email.length > LIMITS.email || !EMAIL_PATTERN.test(payload.email)) {
    return { ok: false, reason: "email" };
  }
  if (
    payload.name.length > LIMITS.name ||
    payload.company.length > LIMITS.company ||
    payload.phone.length > LIMITS.phone ||
    payload.message.length > LIMITS.message
  ) {
    return { ok: false, reason: "tooLong" };
  }

  return { ok: true, payload };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderContactEmail(
  payload: ContactPayload,
  siteName: string,
): { subject: string; text: string; html: string } {
  const rows: [string, string][] = [
    ["Namn", payload.name],
    ["Mejl", payload.email],
    ["Företag", payload.company || "—"],
    ["Telefon", payload.phone || "—"],
    ["Typ av projekt", payload.projectType || "—"],
    ["Budget", payload.budget || "—"],
    ["Språk på sajten", payload.locale],
  ];

  const subject = `Ny förfrågan: ${payload.name}${
    payload.company ? ` (${payload.company})` : ""
  }`;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Meddelande:",
    payload.message,
  ].join("\n");

  const html = [
    '<div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.6;color:#101416">',
    `<h2 style="margin:0 0 16px">Ny förfrågan via ${escapeHtml(siteName)}</h2>`,
    '<table cellpadding="6" style="border-collapse:collapse;font-size:14px">',
    ...rows.map(
      ([label, value]) =>
        `<tr><td style="color:#7c8a91">${escapeHtml(label)}</td>` +
        `<td><strong>${escapeHtml(value)}</strong></td></tr>`,
    ),
    "</table>",
    '<h3 style="margin:24px 0 8px">Meddelande</h3>',
    `<p style="white-space:pre-wrap;font-size:14px">${escapeHtml(payload.message)}</p>`,
    "</div>",
  ].join("");

  return { subject, text, html };
}
