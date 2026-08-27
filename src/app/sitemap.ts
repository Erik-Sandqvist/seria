import type { MetadataRoute } from "next";
import { getDictionary } from "@/content";
import { caseHref, href, locales, pageKeys } from "@/lib/routes";
import { site } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cases = locales.flatMap((locale) =>
    getDictionary(locale).work.items.map((item) => ({
      url: `${site.url}${caseHref(locale, item.slug)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales
            .filter((l) =>
              getDictionary(l).work.items.some((c) => c.slug === item.slug),
            )
            .map((l) => [l, `${site.url}${caseHref(l, item.slug)}`]),
        ),
      },
    })),
  );

  const pages = locales.flatMap((locale) =>
    pageKeys.map((page) => ({
      url: `${site.url}${href(locale, page)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}${href(l, page)}`]),
        ),
      },
    })),
  );

  return [...pages, ...cases];
}
