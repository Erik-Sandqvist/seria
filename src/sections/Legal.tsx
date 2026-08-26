import { Container, Eyebrow, Section } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { site } from "@/site.config";

type LegalDoc = Dictionary["legal"]["privacy"];

/** Löptextsida för integritetspolicy och villkor — samma mall, olika innehåll. */
export function Legal({
  dict,
  doc,
}: {
  dict: Dictionary;
  doc: LegalDoc;
}) {
  const updated = new Intl.DateTimeFormat(dict.htmlLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(site.legalUpdated));

  return (
    <Section tone="ink">
      <Container className="max-w-3xl">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>
            {dict.legal.updatedLabel} {updated}
          </Eyebrow>
          <h1 className="font-display text-title text-balance text-bone-50">
            {doc.title}
          </h1>
          <p className="text-lg leading-relaxed text-ink-300">{doc.intro}</p>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {doc.sections.map((section, i) => (
            <Reveal key={section.h} delay={i * 50}>
              <section className="border-t border-ink-800 py-8">
                <h2 className="font-display text-2xl text-bone-50">
                  {section.h}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="leading-relaxed text-ink-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
