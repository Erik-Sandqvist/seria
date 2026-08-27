import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { revealScript } from "@/lib/reveal-script";
import { isLocale, locales } from "@/lib/routes";
import { site } from "@/site.config";
import "../globals.css";

// Egna variabelnamn (…-src) så att @theme kan lägga på reservtypsnitt.
// Pekade båda på samma namn skuggade next/font hela reservkedjan.
// Serif i rubrik mot grotesk i brödtext — samma gjutare (Instrument),
// så paret är avsiktligt och inte hopplockat.
const display = Instrument_Serif({
  variable: "--font-display-src",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const body = Instrument_Sans({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#12171a",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html
      lang={dict.htmlLang}
      className={`${display.variable} ${body.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Reveal-animationerna slås på först när JavaScript finns.
            Utan skriptet visas allt innehåll direkt — se globals.css. */}
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
