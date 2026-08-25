import { Container, Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

export function Manifesto({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="inkAlt">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.manifesto.eyebrow}
            title={dict.manifesto.title}
            lead={dict.manifesto.lead}
          />
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 md:grid-cols-3">
          {dict.manifesto.pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 90}>
              <div className="flex h-full flex-col gap-3 bg-ink-900 p-8">
                <span className="font-mono text-xs text-signal-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-bone-50">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-300">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
