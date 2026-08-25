import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/content";
import { organizationJsonLd } from "@/lib/metadata";
import type { Locale, PageKey } from "@/lib/routes";
import { views } from "@/views";

/** Gemensamt skal för alla sidor: header, vy, footer och strukturerad data. */
export function PageShell({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const dict = getDictionary(locale);
  const View = views[page];

  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-signal-500 focus:px-5 focus:py-3 focus:text-sm focus:text-ink-950"
      >
        {locale === "sv" ? "Hoppa till innehållet" : "Skip to content"}
      </a>

      <Header locale={locale} nav={dict.nav} current={page} />

      <main id="innehall" className="flex-1">
        <View locale={locale} dict={dict} />
      </main>

      <Footer locale={locale} dict={dict} />

      {page === "home" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(locale)),
          }}
        />
      ) : null}
    </>
  );
}
