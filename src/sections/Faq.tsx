import { Container, Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="inkAlt">
      <Container className="grid gap-12 lg:grid-cols-[22rem_1fr]">
        <Reveal>
          <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.title} />
        </Reveal>

        <Reveal delay={80}>
          <ul className="border-t border-ink-800">
            {dict.faq.items.map((item) => (
              <li key={item.q} className="border-b border-ink-800">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg text-bone-50 marker:hidden">
                    <span className="text-balance">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="relative h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-bone-100 group-open:text-bone-100"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-4 bg-current" />
                      <span className="absolute top-0 left-1/2 h-4 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-ink-300">
                    {item.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
