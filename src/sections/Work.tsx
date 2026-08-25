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

export function Work({
  locale,
  dict,
  headingAs,
}: {
  locale: Locale;
  dict: Dictionary;
  headingAs?: "h1" | "h2";
}) {
  const items = dict.work.items;

  return (
    <Section tone="bone">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.work.eyebrow}
            title={dict.work.title}
            lead={dict.work.lead}
            tone="bone"
            as={headingAs}
          />
        </Reveal>

        {items.length === 0 ? (
          <Reveal className="mt-14">
            <div className="rounded-2xl border border-bone-300 bg-bone-50 p-10 sm:p-14">
              <h3 className="font-display text-title text-ink-900">
                {dict.work.emptyState.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-700">
                {dict.work.emptyState.body}
              </p>
              <ButtonLink
                href={href(locale, "contact")}
                variant="onBone"
                className="mt-8"
              >
                {dict.work.emptyState.cta}
                <ArrowRight />
              </ButtonLink>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-14 flex flex-col gap-6">
            {items.map((item, i) => (
              <Reveal as="li" key={item.client} delay={i * 80}>
                <article className="grid gap-8 rounded-2xl border border-bone-300 bg-bone-50 p-8 sm:p-10 lg:grid-cols-[1fr_18rem]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-bone-500">
                      <span className="text-ink-900">{item.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl text-balance text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
                      {item.body}
                    </p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm text-ink-900 underline decoration-signal-500 decoration-2 underline-offset-4"
                      >
                        {dict.work.visitLabel}
                        <ArrowRight />
                      </a>
                    ) : null}
                  </div>

                  <div className="border-t border-bone-300 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone-500">
                      {dict.work.resultsLabel}
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {item.results.map((result) => (
                        <li
                          key={result}
                          className="font-display text-xl text-ink-900"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
}
