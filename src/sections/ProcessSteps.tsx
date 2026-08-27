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
            layout="split"
            as={headingAs}
          />
        </Reveal>

        {/* Vartannat steg hänger lägre — raden ska läsas som en väg
            framåt, inte som fyra likadana rutor. */}
        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 80}
              className={i % 2 === 1 ? "xl:mt-14" : undefined}
            >
              <div
                className={`flex h-full flex-col border-t pt-5 ${
                  onBone ? "border-bone-300" : "border-ink-800"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className={`font-display text-3xl leading-none ${
                      onBone ? "text-signal-600" : "text-signal-500"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm ${
                      onBone ? "text-bone-500" : "text-ink-400"
                    }`}
                  >
                    {step.when}
                  </span>
                </div>
                <h3
                  className={`mt-5 text-lg font-medium ${
                    onBone ? "text-ink-900" : "text-bone-50"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
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
