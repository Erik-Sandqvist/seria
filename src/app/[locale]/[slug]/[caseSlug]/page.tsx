import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/content";
import { buildCaseMetadata, caseJsonLd } from "@/lib/metadata";
import { isLocale, locales, pageSlugs } from "@/lib/routes";
import { CaseStudy } from "@/sections/CaseStudy";
import { CtaBand } from "@/sections/CtaBand";

/**
 * Enskilt case: /sv/case/<slug> och /en/work/<slug>.
 *
 * Ligger under [slug] i stället för en egen mapp eftersom casesidans slug
 * skiljer sig mellan språken ("case" mot "work"). Vi kontrollerar därför att
 * mellansegmentet verkligen är casesidan i just det språket.
 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).work.items.map((item) => ({
      locale,
      slug: pageSlugs.work[locale],
      caseSlug: item.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/[slug]/[caseSlug]">): Promise<Metadata> {
  const { locale, slug, caseSlug } = await params;
  if (!isLocale(locale) || slug !== pageSlugs.work[locale]) return {};
  return buildCaseMetadata(locale, caseSlug);
}

export default async function CasePage({
  params,
}: PageProps<"/[locale]/[slug]/[caseSlug]">) {
  const { locale, slug, caseSlug } = await params;
  if (!isLocale(locale)) notFound();
  if (slug !== pageSlugs.work[locale]) notFound();

  const dict = getDictionary(locale);
  const item = dict.work.items.find((c) => c.slug === caseSlug);
  if (!item) notFound();

  const jsonLd = caseJsonLd(locale, caseSlug);

  return (
    <PageShell locale={locale} page="work">
      <CaseStudy locale={locale} dict={dict} item={item} />
      <CtaBand locale={locale} dict={dict} />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </PageShell>
  );
}
