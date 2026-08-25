import {
  ArrowRight,
  ButtonLink,
  Check,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";
import { href, type Locale } from "@/lib/routes";

export function Pricing({
  locale,
  dict,
  showAddons = true,
  headingAs,
}: {
  locale: Locale;
  dict: Dictionary;
  showAddons?: boolean;
  headingAs?: "h1" | "h2";
}) {
  return (
    <Section id="priser" tone="ink">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.pricing.eyebrow}
            title={dict.pricing.title}
            lead={dict.pricing.lead}
            as={headingAs}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {dict.pricing.tiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 90} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8",
                  tier.popular
                    ? "border-signal-500 bg-ink-900"
                    : "border-ink-800 bg-ink-950",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-3xl text-bone-50">
                    {tier.name}
                  </h3>
                  {tier.popular ? (
                    <span className="rounded-full bg-signal-500 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-950">
                      {dict.pricing.popularLabel}
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm text-ink-300">{tier.tagline}</p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-bone-50">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
                    {tier.priceNote}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-ink-400">
                  {tier.for}
                </p>

                <dl className="mt-6 flex items-center gap-2 border-y border-ink-800 py-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400">
                    {dict.pricing.timelineLabel}
                  </dt>
                  <dd className="text-sm text-bone-100">{tier.timeline}</dd>
                </dl>

                <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink-400">
                  {dict.pricing.includesLabel}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-bone-100">
                      <Check className="mt-0.5 text-signal-500" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={href(locale, "contact")}
                  variant={tier.popular ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {tier.id === "skala"
                    ? dict.pricing.customCtaLabel
                    : dict.pricing.ctaLabel}
                  <ArrowRight />
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>

        {showAddons ? (
          <Reveal className="mt-20">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ink-400">
              {dict.pricing.addonsTitle}
            </h3>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
              {dict.pricing.addons.map((addon) => (
                <li
                  key={addon.name}
                  className="flex flex-col gap-1 bg-ink-950 p-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-bone-50">{addon.name}</span>
                    <span className="font-mono text-sm whitespace-nowrap text-signal-500">
                      {addon.price}
                    </span>
                  </div>
                  <span className="text-sm text-ink-400">{addon.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <Reveal>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-400">
            {dict.pricing.footnote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
