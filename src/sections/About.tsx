import { Container, Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/routes";
import { site, team } from "@/site.config";

export function About({
  locale,
  dict,
  headingAs,
}: {
  locale: Locale;
  dict: Dictionary;
  headingAs?: "h1" | "h2";
}) {
  return (
    <>
      <Section tone="ink">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={dict.about.eyebrow}
              title={dict.about.title}
              lead={dict.about.lead}
              as={headingAs}
            />
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal className="flex flex-col gap-5">
              {dict.about.story.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-lg leading-relaxed text-ink-300"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ink-400">
                {dict.about.valuesTitle}
              </h3>
              <dl className="mt-6 flex flex-col">
                {dict.about.values.map((value) => (
                  <div
                    key={value.title}
                    className="border-t border-ink-800 py-5 last:border-b"
                  >
                    <dt className="text-bone-50">{value.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-400">
                      {value.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="inkAlt">
        <Container>
          <Reveal>
            <h2 className="font-display text-title text-bone-50">
              {dict.about.teamTitle}
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((member, i) => (
              <Reveal as="li" key={member.name} delay={i * 90}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-ink-800 bg-ink-950 p-8">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-800 font-display text-xl text-signal-500"
                  >
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-bone-50">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400">
                      {member.role[locale]}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-300">
                    {member.bio[locale]}
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-auto text-sm text-signal-500 underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
