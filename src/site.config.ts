/**
 * Central konfiguration för seria.
 *
 * TODO innan lansering: byt ut allt som är markerat med "BYT UT".
 */
export const site = {
  name: "seria",
  /** Används i <title>, strukturerad data och mejl. */
  legalName: "Seria", // BYT UT till registrerat firmanamn, t.ex. "Seria AB"
  orgNumber: "", // BYT UT: organisationsnummer, visas i footern när det är ifyllt
  url: "https://seria.se", // BYT UT om domänen blir en annan
  email: "hej@seria.se", // BYT UT
  phone: "+46 70 000 00 00", // BYT UT
  city: "Stockholm", // BYT UT till din ort
  country: "Sverige",
  /** Calendly/Cal.com-länk för "Boka ett samtal". Tom sträng = knappen länkar till kontaktsidan. */
  bookingUrl: "", // t.ex. "https://cal.com/seria/30min"
  founded: 2026,
  socials: {
    linkedin: "", // t.ex. "https://linkedin.com/company/seria"
    instagram: "",
    github: "",
  },
  /** Mottagare för kontaktformuläret. Faller tillbaka på site.email. */
  inboxEmail: "",
  /** Visas som "senast uppdaterad" på integritetspolicy och villkor. */
  legalUpdated: "2026-08-26",
  /** Var sajten driftas — nämns i integritetspolicyn. BYT UT vid annan värd. */
  hostingProvider: "Vercel Inc.",
  /** Tjänsten som skickar formulärmejlen. BYT UT om du byter leverantör. */
  emailProvider: "Resend",
} as const;

export const team = [
  {
    name: "Ditt Namn", // BYT UT
    role: { sv: "Grundare · Utvecklare & design", en: "Founder · Developer & design" },
    bio: {
      sv: "Bygger hela kedjan – från första skiss till driftsatt sajt. Bakgrund i webbutveckling med fokus på prestanda, tillgänglighet och sajter som faktiskt gör jobbet efter lansering.",
      en: "Builds the whole chain — from first sketch to production. Background in web development with a focus on performance, accessibility and sites that keep working after launch.",
    },
    initials: "DN", // BYT UT
  },
] as const;
