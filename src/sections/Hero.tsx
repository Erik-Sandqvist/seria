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

  return (
    <section className="relative overflow-hidden border-b border-ink-850 bg-ink-950">
      {/* Dekorativ bakgrund: mjukt sken uppe till höger + hårfint rutnät. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 78% -10%, rgba(255,90,31,0.16), transparent 60%), radial-gradient(40rem 24rem at 10% 110%, rgba(31,122,111,0.14), transparent 62%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(70% 60% at 50% 30%, #000 40%, transparent 100%)",
        }}
      />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <Reveal className="flex flex-col gap-8">
          <Eyebrow>{dict.hero.eyebrow}</Eyebrow>

          <h1 className="max-w-4xl font-display text-display text-balance text-bone-50">
            {dict.hero.titleLead}{" "}
            <span className="text-signal-500">{dict.hero.titleAccent}</span>
          </h1>

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

        <Reveal delay={140}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-4">
            {dict.hero.stats.map((stat) => (
              // flex-col-reverse låter värdet stå överst visuellt medan
              // dt/dd behåller sin ordning i märkspråket.
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-1 bg-ink-950 px-5 py-6"
              >
                <dt className="text-sm text-ink-400">{stat.label}</dt>
                <dd className="font-display text-3xl text-bone-50">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
