import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, locales, pageKeys, pageFromSlug, pageSlugs } from "@/lib/routes";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageKeys
      .filter((page) => pageSlugs[page][locale] !== "")
      .map((page) => ({ locale, slug: pageSlugs[page][locale] })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = pageFromSlug(locale, [slug]);
  if (!page) return {};
  return buildMetadata(locale, page);
}

export default async function SubPage({ params }: PageProps<"/[locale]/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const page = pageFromSlug(locale, [slug]);
  if (!page || page === "home") notFound();

  return <PageShell locale={locale} page={page} />;
}
