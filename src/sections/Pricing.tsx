import {
  ButtonLink,
  Check,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
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
            layout="split"
            as={headingAs}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {dict.pricing.tiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 80} className="h-full">
              {/* Alla tre korten har samma form: accentlinjen längst upp och
                  den ljusare grunden. Det vanligaste valet skiljs ut av sin
                  etikett, inte av ram, bricka och glöd. */}
              <article className="flex h-full flex-col rounded-sm border border-ink-800 border-t-2 border-t-signal-500 bg-ink-900 p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-medium text-bone-50">
                    {tier.name}
                  </h3>
                  {tier.popular ? (
                    <span className="text-sm text-signal-400">
                      {dict.pricing.popularLabel}
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm text-ink-300">{tier.tagline}</p>

                <div className="mt-8 flex items-baseline gap-2.5">
                  <span className="font-display text-5xl text-bone-50">
                    {tier.price}
                  </span>
                  <span className="text-sm text-ink-400">{tier.priceNote}</span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-ink-400">
                  {tier.for}
                </p>

                <dl className="mt-6 flex items-baseline gap-2 border-y border-ink-800 py-4 text-sm">
                  <dt className="text-ink-400">{dict.pricing.timelineLabel}</dt>
                  <dd className="text-bone-100">{tier.timeline}</dd>
                </dl>

                <p className="mt-6 text-sm text-ink-400">
                  {dict.pricing.includesLabel}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-bone-100">
                      <Check className="mt-0.5 text-signal-600" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={href(locale, "contact")}
                  className="mt-8 w-full"
                >
                  {tier.id === "skala"
                    ? dict.pricing.customCtaLabel
                    : dict.pricing.ctaLabel}
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>

        {showAddons ? (
          <Reveal className="mt-20">
            <h3 className="text-sm text-ink-400">{dict.pricing.addonsTitle}</h3>
            <ul className="mt-5 border-t border-ink-800">
              {dict.pricing.addons.map((addon) => (
                <li
                  key={addon.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-8 gap-y-1 border-b border-ink-800 py-4 sm:grid-cols-[13rem_1fr_auto]"
                >
                  <span className="text-bone-50">{addon.name}</span>
                  <span className="order-last col-span-2 text-sm text-ink-400 sm:order-none sm:col-span-1">
                    {addon.note}
                  </span>
                  <span className="whitespace-nowrap text-bone-100">
                    {addon.price}
                  </span>
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
