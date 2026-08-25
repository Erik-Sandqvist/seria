import {
  ArrowRight,
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";

export function Services({
  locale,
  dict,
  /** På startsidan visar vi ett urval och länkar vidare till tjänstesidan. */
  limit,
  showCta = false,
  headingAs,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
  showCta?: boolean;
  headingAs?: "h1" | "h2";
}) {
  const items = limit ? dict.services.items.slice(0, limit) : dict.services.items;

  return (
    <Section id="tjanster">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            lead={dict.services.lead}
            as={headingAs}
          />
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service, i) => (
            <Reveal as="li" key={service.number} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col gap-4 bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-[0.16em] text-ink-400">
                    {service.number}
                  </span>
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-ink-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-signal-500 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-2xl text-bone-50">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-300">
                  {service.body}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border border-ink-800 px-3 py-1 text-xs text-ink-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        {showCta ? (
          <Reveal className="mt-10 flex justify-start">
            <ButtonLink href={href(locale, "services")} variant="secondary">
              {dict.services.allLabel}
              <ArrowRight />
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
