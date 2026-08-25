"use server";

import { getDictionary } from "@/content";
import { parseContact, renderContactEmail } from "@/lib/contact";
import { isLocale, type Locale } from "@/lib/routes";
import { site } from "@/site.config";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const rawLocale = String(formData.get("locale") ?? "sv");
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "sv";
  const t = getDictionary(locale).contact.form;

  const parsed = parseContact(formData);

  if (!parsed.ok) {
    switch (parsed.reason) {
      // Botar ska tro att det gick vägen — inget mejl skickas.
      case "spam":
        return { status: "success" };
      case "required":
        return { status: "error", message: t.errorRequired };
      case "email":
        return { status: "error", message: t.errorEmail };
      default:
        return { status: "error", message: t.errorGeneric };
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = site.inboxEmail || site.email;
  const { subject, text, html } = renderContactEmail(parsed.payload, site.url);

  if (!apiKey || !from) {
    // Utan mejlkonfiguration är det bättre att vara ärlig mot besökaren än att
    // låtsas att meddelandet gick fram. I utveckling loggas det i stället.
    if (process.env.NODE_ENV !== "production") {
      console.info(
        "[kontaktformulär] RESEND_API_KEY eller CONTACT_FROM_EMAIL saknas.\n" + text,
      );
    }
    return { status: "error", message: t.errorNotConfigured };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.payload.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[kontaktformulär] Resend svarade med fel:", error);
      return { status: "error", message: t.errorGeneric };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[kontaktformulär] Kunde inte skicka:", err);
    return { status: "error", message: t.errorGeneric };
  }
}
