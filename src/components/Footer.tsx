import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Primitives";
import type { Dictionary } from "@/content";
import { href, type Locale, type PageKey } from "@/lib/routes";
import { site } from "@/site.config";

const footerNav: { page: PageKey; key: keyof Dictionary["nav"] }[] = [
  { page: "services", key: "services" },
  { page: "pricing", key: "pricing" },
  { page: "process", key: "process" },
  { page: "work", key: "work" },
  { page: "about", key: "about" },
  { page: "contact", key: "contact" },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">
              {dict.footer.tagline}
            </p>
            {socials.length > 0 ? (
              <ul className="flex gap-4">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400 transition-colors hover:text-signal-500"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-label={dict.footer.navTitle} className="flex flex-col gap-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-ink-400">
              {dict.footer.navTitle}
            </h2>
            {footerNav.map((item) => (
              <Link
                key={item.page}
                href={href(locale, item.page)}
                className="text-sm text-bone-100 transition-colors hover:text-signal-500"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-ink-400">
              {dict.footer.contactTitle}
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-bone-100 transition-colors hover:text-signal-500"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-sm text-bone-100 transition-colors hover:text-signal-500"
            >
              {site.phone}
            </a>
            <p className="text-sm text-ink-400">
              {site.city}, {site.country}
            </p>
            {site.orgNumber ? (
              <p className="text-sm text-ink-400">Org.nr {site.orgNumber}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-850 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {dict.footer.rights}
          </p>
          <nav aria-label={dict.footer.legalTitle} className="flex gap-5">
            <Link
              href={href(locale, "privacy")}
              className="transition-colors hover:text-signal-500"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={href(locale, "terms")}
              className="transition-colors hover:text-signal-500"
            >
              {dict.footer.terms}
            </Link>
          </nav>
          <p className="font-mono uppercase tracking-[0.16em]">
            {dict.footer.builtWith}
          </p>
        </div>
      </Container>
    </footer>
  );
}
