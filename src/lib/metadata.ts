import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { caseHref, href, locales, type Locale, type PageKey } from "@/lib/routes";
import { site } from "@/site.config";

/** Bygger metadata för en sida, inklusive hreflang-alternativ för båda språken. */
export function buildMetadata(locale: Locale, page: PageKey): Metadata {
  const dict = getDictionary(locale);
  const { title, description } = dict.pages[page];
  const path = href(locale, page);

  const languages = Object.fromEntries(
    locales.map((l) => [getDictionary(l).htmlLang, href(l, page)]),
  );

  // Rot-layouten har en titelmall ("%s — seria"), så undersidor skickar bara
  // sitt eget namn. Startsidan sätter hela titeln absolut.
  const fullTitle = page === "home" ? title : `${title} — ${site.name}`;

  // Filkonventionen opengraph-image ärvs inte ner till undersidorna, så vi
  // pekar ut den uttryckligen. metadataBase gör sökvägen absolut.
  const images = [
    {
      url: `/${locale}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: `${site.name} — ${dict.hero.titleLead} ${dict.hero.titleAccent}`,
    },
  ];

  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages: { ...languages, "x-default": href("sv", page) },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: dict.htmlLang.replace("-", "_"),
      title: fullTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}

/** JSON-LD som beskriver byrån för sökmotorer. */
export function organizationJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: dict.pages.home.description,
    areaServed: site.country,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "SE",
    },
    foundingDate: String(site.founded),
    priceRange: "SEK 14900–",
    sameAs: Object.values(site.socials).filter(Boolean),
  };
}

/** Metadata för en enskild casesida. Sluggen är gemensam för båda språken. */
export function buildCaseMetadata(locale: Locale, slug: string): Metadata {
  const dict = getDictionary(locale);
  const item = dict.work.items.find((c) => c.slug === slug);
  if (!item) return {};

  const path = caseHref(locale, slug);
  // Rot-layoutens mall lägger på " — seria", så titeln håller sig kort och
  // scanbar i fliken. Den fulla rubriken går till delningskorten i stället.
  const title = `${item.client} · ${dict.work.eyebrow}`;
  const fullTitle = `${item.client} — ${item.title}`;

  // Bara de språk som faktiskt har caset får ett hreflang-alternativ.
  const translated = locales.filter((l) =>
    getDictionary(l).work.items.some((c) => c.slug === slug),
  );
  const languages: Record<string, string> = Object.fromEntries(
    translated.map((l) => [getDictionary(l).htmlLang, caseHref(l, slug)]),
  );
  if (translated.includes("sv")) languages["x-default"] = caseHref("sv", slug);

  const images = [
    {
      url: `/${locale}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: fullTitle,
    },
  ];

  return {
    title,
    description: item.body,
    alternates: { canonical: path, languages },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: dict.htmlLang.replace("-", "_"),
      title: fullTitle,
      description: item.body,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: item.body,
      images,
    },
  };
}

/** JSON-LD som beskriver ett case för sökmotorer. */
export function caseJsonLd(locale: Locale, slug: string) {
  const dict = getDictionary(locale);
  const item = dict.work.items.find((c) => c.slug === slug);
  if (!item) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    headline: item.title,
    description: item.detail.lead,
    inLanguage: dict.htmlLang,
    url: `${site.url}${caseHref(locale, slug)}`,
    dateCreated: item.year,
    about: item.sector,
    creator: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    sourceOrganization: { "@type": "Organization", name: item.client },
    ...(item.url ? { sameAs: item.url } : {}),
  };
}
