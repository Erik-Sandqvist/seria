import Link from "next/link";
import {
  ArrowRight,
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Primitives";
import { BrowserFrame, hostOf } from "@/components/ui/DeviceFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { caseHref, href, type Locale } from "@/lib/routes";

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
            layout="split"
            as={headingAs}
          />
        </Reveal>

        {items.length === 0 ? (
          <Reveal className="mt-14">
            <div className="max-w-3xl border-t-2 border-ink-900 pt-8">
              <h3 className="font-display text-3xl text-ink-900 sm:text-4xl">
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
              </ButtonLink>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-14 border-t border-bone-300">
            {items.map((item, i) => (
              <Reveal as="li" key={item.slug} delay={i * 70}>
                <article className="grid gap-x-12 gap-y-8 border-b border-bone-300 py-10 lg:grid-cols-[1fr_16rem]">
                  {item.images ? (
                    <Link
                      href={caseHref(locale, item.slug)}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="group block lg:col-span-2"
                    >
                      <BrowserFrame
                        shot={item.images.cover}
                        address={item.url ? hostOf(item.url) : undefined}
                        sizes="(min-width: 1152px) 1088px, 100vw"
                        tone="bone"
                        className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1"
                      />
                    </Link>
                  ) : null}
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-sm text-bone-500">
                      <span className="text-ink-900">{item.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl text-balance text-ink-900">
                      <Link
                        href={caseHref(locale, item.slug)}
                        className="underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors hover:decoration-signal-500"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
                      {item.body}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
                      <Link
                        href={caseHref(locale, item.slug)}
                        className="group inline-flex items-center gap-2 text-sm text-ink-900 underline decoration-signal-500 decoration-1 underline-offset-[6px]"
                      >
                        {dict.work.caseLabel}
                        <ArrowRight />
                      </Link>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-sm text-ink-700 transition-colors hover:text-ink-900"
                        >
                          {dict.work.visitLabel}
                          <ArrowRight />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="border-t border-bone-300 pt-6 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-8">
                    <p className="text-sm text-bone-500">
                      {dict.work.resultsLabel}
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {item.results.map((result) => (
                        <li
                          key={result}
                          className="font-display text-2xl text-ink-900"
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
