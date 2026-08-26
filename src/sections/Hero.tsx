import {
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";
import { site } from "@/site.config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const bookHref = site.bookingUrl || href(locale, "contact");
  const services = dict.services.items.map((item) => item.title);
  // Listan dubbleras så att bandet kan loopa sömlöst vid -50 %.
  const ticker = [...services, ...services];

  return (
    <section className="relative overflow-hidden border-b border-ink-850 bg-ink-950">
      {/* Dekorativ bakgrund: drivande sken uppe till höger + hårfint rutnät. */}
      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[52rem] rounded-full opacity-[0.17] blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-signal-500) 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(75% 65% at 45% 32%, #000 35%, transparent 100%)",
        }}
      />

      <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
        <Reveal className="flex flex-col gap-7">
          <Eyebrow>{dict.hero.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal className="mask-host mt-7">
          <h1 className="max-w-4xl font-display text-display text-bone-50">
            <span className="line-mask">
              <span>{dict.hero.titleLead}</span>
            </span>{" "}
            <span className="line-mask is-inline">
              <span
                className="text-signal-500"
                style={{ transitionDelay: "110ms" }}
              >
                {dict.hero.titleAccent}
              </span>
              <span aria-hidden="true" className="sweep" />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={80} className="mt-9 flex flex-col gap-8">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl">
            {dict.hero.lead}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href={bookHref} external={Boolean(site.bookingUrl)}>
              {dict.hero.primaryCta}
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href={href(locale, "pricing")} variant="secondary">
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={140}>
        <Container>
          <dl className="grid grid-cols-2 gap-px border-t border-ink-800 bg-ink-800 sm:grid-cols-4">
            {dict.hero.stats.map((stat) => (
              // flex-col-reverse låter värdet stå överst visuellt medan
              // dt/dd behåller sin ordning i märkspråket.
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-1 bg-ink-950 py-7 pr-5"
              >
                <dt className="text-sm text-ink-400">{stat.label}</dt>
                <dd className="font-display text-3xl text-bone-50">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Reveal>

      {/* Tjänsteband — enda rörelsen på sajten som aldrig stannar. */}
      <div className="mt-2 overflow-hidden border-t border-ink-850 bg-ink-900/60 py-4">
        <div className="ticker-track" aria-hidden="true">
          {ticker.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="px-7 font-mono text-xs whitespace-nowrap text-ink-400 uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
