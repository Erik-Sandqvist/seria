"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ArrowRight, ButtonLink, Container } from "@/components/ui/Primitives";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";
import { alternatePath, href, type Locale, type PageKey } from "@/lib/routes";
import { site } from "@/site.config";

const navItems: { page: PageKey; key: keyof Dictionary["nav"] }[] = [
  { page: "services", key: "services" },
  { page: "pricing", key: "pricing" },
  { page: "process", key: "process" },
  { page: "work", key: "work" },
  { page: "about", key: "about" },
];

export function Header({
  locale,
  nav,
  current,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  current: PageKey;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lås bakgrundsscroll när mobilmenyn är öppen.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const otherLocale: Locale = locale === "sv" ? "en" : "sv";
  const bookHref = site.bookingUrl || href(locale, "contact");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-ink-800 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6 py-4">
        <Link
          href={href(locale, "home")}
          aria-label={site.name}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav aria-label={nav.menu} className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.page}
              href={href(locale, item.page)}
              aria-current={current === item.page ? "page" : undefined}
              className={cn(
                "text-sm transition-colors",
                current === item.page
                  ? "text-bone-50"
                  : "text-ink-300 hover:text-bone-50",
              )}
            >
              {nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={alternatePath(current, otherLocale)}
            className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400 transition-colors hover:text-bone-50"
          >
            {locale === "sv" ? "EN" : "SV"}
          </Link>
          <ButtonLink
            href={bookHref}
            external={Boolean(site.bookingUrl)}
            className="px-5 py-2.5"
          >
            {nav.cta}
            <ArrowRight />
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex items-center gap-2 text-sm text-bone-100 lg:hidden"
        >
          <span className="font-mono text-xs uppercase tracking-[0.16em]">
            {open ? nav.close : nav.menu}
          </span>
          <span className="relative flex h-4 w-5 flex-col justify-center">
            <span
              className={cn(
                "absolute h-px w-5 bg-bone-100 transition-transform duration-300",
                open ? "rotate-45" : "-translate-y-1",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-bone-100 transition-transform duration-300",
                open ? "-rotate-45" : "translate-y-1",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-ink-800 bg-ink-950 lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {[...navItems, { page: "contact" as PageKey, key: "contact" as const }].map(
            (item) => (
              <Link
                key={item.page}
                href={href(locale, item.page)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ink-850 py-4 font-display text-2xl text-bone-50"
              >
                {nav[item.key]}
                <ArrowRight className="h-4 w-4 text-ink-400" />
              </Link>
            ),
          )}
          <div className="mt-6 flex items-center justify-between">
            <Link
              href={alternatePath(current, otherLocale)}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400"
            >
              {nav.switchTo}
            </Link>
            <ButtonLink
              href={bookHref}
              external={Boolean(site.bookingUrl)}
              className="px-5 py-2.5"
            >
              {nav.cta}
              <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
