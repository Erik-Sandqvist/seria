import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { href, locales, type Locale, type PageKey } from "@/lib/routes";
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
