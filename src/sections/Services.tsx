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
            layout="split"
            as={headingAs}
          />
        </Reveal>

        {/* Register, inte kortrutnät: numret, tjänsten och vad som ingår
            står på samma rad och läses uppifrån och ned. */}
        <ul className="mt-16 border-t border-ink-800">
          {items.map((service, i) => (
            <Reveal as="li" key={service.number} delay={i * 70}>
              <article className="grid gap-x-10 gap-y-4 border-b border-ink-800 py-9 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,14rem)]">
                <span
                  aria-hidden="true"
                  className="font-display text-2xl leading-none text-ink-600 md:pt-1"
                >
                  {service.number}
                </span>

                <div>
                  <h3 className="text-xl font-medium text-bone-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-300">
                    {service.body}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-400 md:flex-col md:gap-y-2 md:pt-1.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        {showCta ? (
          <Reveal className="mt-10">
            <ButtonLink href={href(locale, "services")} variant="ghost">
              {dict.services.allLabel}
              <ArrowRight />
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
