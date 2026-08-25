import { Container, Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

export function ProcessSteps({
  dict,
  tone = "bone",
  headingAs,
}: {
  dict: Dictionary;
  tone?: "bone" | "ink";
  headingAs?: "h1" | "h2";
}) {
  const onBone = tone === "bone";

  return (
    <Section tone={onBone ? "bone" : "ink"}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.process.eyebrow}
            title={dict.process.title}
            lead={dict.process.lead}
            tone={onBone ? "bone" : "ink"}
            as={headingAs}
          />
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 90}>
              <div
                className={`flex h-full flex-col gap-4 border-t pt-6 ${
                  onBone ? "border-bone-300" : "border-ink-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.18em] ${
                      onBone ? "text-bone-500" : "text-ink-400"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="rounded-full bg-signal-500 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-950">
                    {step.when}
                  </span>
                </div>
                <h3
                  className={`font-display text-2xl ${
                    onBone ? "text-ink-900" : "text-bone-50"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    onBone ? "text-ink-700" : "text-ink-300"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
