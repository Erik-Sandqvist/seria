import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container, Eyebrow } from "@/components/ui/Primitives";
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

/**
 * Foten är byggd kring mejladressen, inte kring en länkstapel. Det är det
 * enda någon egentligen letar efter här nere, så den får bära rubrikgraden
 * och är samtidigt det som gör foten till mer än en avslutning.
 *
 * Sidorna ligger vågrätt i två spalter i stället för lodrätt i en. Sex
 * länkar staplade under varandra var det som gjorde foten dubbelt så hög
 * som den behövde vara.
 */
export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="border-t border-ink-850 bg-ink-950">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="min-w-0">
            <Eyebrow>{dict.footer.contactTitle}</Eyebrow>

            <a
              href={`mailto:${site.email}`}
              // 30 px och inte större: mejladressen ska leda foten, men inte
              // konkurrera med sektionsrubrikerna en bit upp på sidan.
              className="mt-5 block font-display text-3xl break-words text-bone-50 underline decoration-signal-500 decoration-1 underline-offset-[10px] transition-colors hover:decoration-bone-50"
            >
              {site.email}
            </a>

            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-400">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-bone-100"
              >
                {site.phone}
              </a>
              <span aria-hidden="true">·</span>
              <span>
                {site.city}, {site.country}
              </span>
              {site.orgNumber ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Org.nr {site.orgNumber}</span>
                </>
              ) : null}
            </p>
          </div>

          <nav
            aria-label={dict.footer.navTitle}
            className="grid shrink-0 grid-cols-2 gap-x-12 gap-y-2.5 text-sm sm:grid-cols-3 md:grid-cols-2"
          >
            {footerNav.map((item) => (
              <Link
                key={item.page}
                href={href(locale, item.page)}
                className="nav-link w-fit text-bone-100 transition-colors hover:text-bone-50"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-ink-850 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-400">
            <p>
              © {year} {site.legalName}. {dict.footer.rights}
            </p>

            <nav
              aria-label={dict.footer.legalTitle}
              className="flex items-center gap-x-6"
            >
              <Link
                href={href(locale, "privacy")}
                className="transition-colors hover:text-bone-50"
              >
                {dict.footer.privacy}
              </Link>
              <Link
                href={href(locale, "terms")}
                className="transition-colors hover:text-bone-50"
              >
                {dict.footer.terms}
              </Link>
            </nav>

            {socials.length > 0 ? (
              <ul className="flex items-center gap-x-5">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="capitalize transition-colors hover:text-bone-50"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            <p>{dict.footer.builtWith}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
