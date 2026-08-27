export const locales = ["sv", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sv";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Sidnycklar → slug per språk. Tom sträng = startsidan. */
export const pageSlugs = {
  home: { sv: "", en: "" },
  services: { sv: "tjanster", en: "services" },
  pricing: { sv: "priser", en: "pricing" },
  process: { sv: "process", en: "process" },
  work: { sv: "case", en: "work" },
  about: { sv: "om-oss", en: "about" },
  contact: { sv: "kontakt", en: "contact" },
  privacy: { sv: "integritetspolicy", en: "privacy" },
  terms: { sv: "villkor", en: "terms" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof pageSlugs;
export const pageKeys = Object.keys(pageSlugs) as PageKey[];

/** Bygger en absolut sökväg, t.ex. href("sv", "priser") → "/sv/priser". */
export function href(locale: Locale, page: PageKey): string {
  const slug = pageSlugs[page][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/** Slår upp vilken sida en slug motsvarar i ett givet språk. */
export function pageFromSlug(locale: Locale, segments: string[] | undefined): PageKey | null {
  if (!segments || segments.length === 0) return "home";
  if (segments.length > 1) return null;
  const slug = segments[0];
  return pageKeys.find((key) => pageSlugs[key][locale] === slug) ?? null;
}

/**
 * Sökväg till en enskild casesida: /sv/case/<slug> ↔ /en/work/<slug>.
 * Sluggen är språkneutral, så samma post finns på samma slug i båda språken.
 */
export function caseHref(locale: Locale, slug: string): string {
  return `${href(locale, "work")}/${slug}`;
}

/** Motsvarande sökväg i det andra språket – används av språkväxlaren. */
export function alternatePath(page: PageKey, target: Locale): string {
  return href(target, page);
}
