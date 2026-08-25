import type { MetadataRoute } from "next";
import { href, locales, pageKeys } from "@/lib/routes";
import { site } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
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
}
