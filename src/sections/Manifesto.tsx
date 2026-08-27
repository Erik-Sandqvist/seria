import { Container, Eyebrow, Section } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

export function Manifesto({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="inkAlt">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <Reveal>
            {/* Rubriken följer med i sidled medan punkterna rullar förbi. */}
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{dict.manifesto.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-display text-title text-balance text-bone-50">
                {dict.manifesto.title}
              </h2>
            </div>
          </Reveal>

          <div>
            <Reveal delay={60}>
              <p className="max-w-2xl text-xl leading-relaxed text-bone-100">
                {dict.manifesto.lead}
              </p>
            </Reveal>

            <ul className="mt-14">
              {dict.manifesto.pillars.map((pillar, i) => (
                <Reveal as="li" key={pillar.title} delay={80 + i * 70}>
                  <div className="grid gap-x-8 gap-y-2 border-t border-ink-800 py-8 sm:grid-cols-[2.5rem_1fr]">
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl leading-none text-ink-600"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-bone-50">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 max-w-xl leading-relaxed text-ink-300">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
