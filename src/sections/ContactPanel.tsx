import { ArrowRight, Container, Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/sections/ContactForm";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/routes";
import { site } from "@/site.config";

export function ContactPanel({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section tone="ink">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={dict.contact.eyebrow}
              title={dict.contact.title}
              lead={dict.contact.lead}
              as="h1"
            />
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-ink-400">
              {dict.contact.directTitle}
            </h2>
            <dl className="mt-6 flex flex-col">
              <div className="flex items-baseline justify-between gap-4 border-t border-ink-800 py-4">
                <dt className="text-sm text-ink-400">
                  {dict.contact.emailLabel}
                </dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-bone-50 transition-colors hover:text-signal-500"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-ink-800 py-4">
                <dt className="text-sm text-ink-400">
                  {dict.contact.phoneLabel}
                </dt>
                <dd>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-bone-50 transition-colors hover:text-signal-500"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              {site.bookingUrl ? (
                <div className="flex items-baseline justify-between gap-4 border-y border-ink-800 py-4">
                  <dt className="text-sm text-ink-400">
                    {dict.contact.bookLabel}
                  </dt>
                  <dd>
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bone-50 transition-colors hover:text-signal-500"
                    >
                      {dict.contact.bookCta}
                      <ArrowRight />
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-6 text-sm text-ink-400">
              {dict.contact.responseNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <ContactForm locale={locale} t={dict.contact.form} />
        </Reveal>
      </Container>
    </Section>
  );
}
