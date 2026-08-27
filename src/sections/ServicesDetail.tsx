import Image from "next/image";
import {
  ArrowRight,
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceRail } from "@/components/ui/ServiceRail";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";
import { href, type Locale } from "@/lib/routes";

/**
 * Bild per tjänst. Nyckeln är tjänstens nummer, samma som ankaret använder:
 * språkoberoende och opåverkat av att titlar skrivs om.
 *
 * Kartan behöver inte vara komplett. Tjänster som saknar nyckel visas utan
 * bild och får hela bredden till texten i stället, så listan ser hel ut även
 * när bara några av tjänsterna är illustrerade.
 */
const serviceImages: Record<string, string> = {
  "01": "/tjenster/webb.jpeg",
  "03": "/tjenster/E-handel.jpeg",
  "04": "/tjenster/design.jpeg",
  "05": "/tjenster/seo.jpeg",
};

/**
 * Tjänstesidans egen vy. Startsidans `Services` är ett kort register som
 * ska gå att skumma förbi — här får varje tjänst i stället plats att
 * argumentera för sig, med ett klibbigt register bredvid som visar var man
 * är. Numret är ankaret: språkoberoende och stabilt även om titlarna byts.
 */
export function ServicesDetail({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const items = dict.services.items.map((service) => ({
    ...service,
    id: `tjanst-${service.number}`,
  }));

  const railItems = items.map(({ id, number, title }) => ({ id, number, title }));

  return (
    <Section id="tjanster">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            lead={dict.services.lead}
            layout="split"
            as="h1"
          />
        </Reveal>

        <div className="mt-20 grid gap-x-16 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <ServiceRail items={railItems} label={dict.services.indexLabel} />

          <ol className="border-t border-ink-800">
            {items.map((service) => {
              const image = serviceImages[service.number];
              return (
              <li key={service.number} id={service.id} className="scroll-mt-28">
                <Reveal>
                  <article className="group border-b border-ink-800 py-14 transition-colors duration-500 hover:bg-ink-900/40">
                    {/* I mobil hamnar numret på egen rad: sida vid sida
                        klämmer det ihop rubriken till en smal spalt. */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5">
                      {/* Numret är sidans taktslag: stort, dämpat, och tar
                          accentfärg när blocket är under pekaren. */}
                      <span
                        aria-hidden="true"
                        className="font-display text-4xl leading-none text-ink-700 transition-colors duration-500 group-hover:text-signal-500 sm:text-5xl lg:text-6xl"
                      >
                        {service.number}
                      </span>
                      <h2 className="font-display text-title text-balance text-bone-50">
                        {service.title}
                      </h2>
                    </div>

                    <div
                      className={cn(
                        "mt-6",
                        image &&
                          "grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start",
                      )}
                    >
                      <div>
                        <p className="max-w-2xl text-lg leading-relaxed text-ink-300">
                          {service.body}
                        </p>

                        <ul className="mt-9 grid max-w-3xl sm:grid-cols-2 sm:gap-x-10">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-baseline gap-3 border-t border-ink-850 py-3 text-sm text-bone-100"
                            >
                              {/* Strecken växer ut när blocket hovras. Enda
                                  rörelsen här, och den drar ögat nedåt i listan. */}
                              <span
                                aria-hidden="true"
                                className="h-px w-3 shrink-0 bg-ink-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-6 group-hover:bg-signal-500"
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <ButtonLink
                          href={href(locale, "contact")}
                          variant="ghost"
                          className="mt-9"
                        >
                          {dict.services.talkLabel}
                          <ArrowRight />
                        </ButtonLink>
                      </div>

                      {image ? (
                        // Bilden illustrerar, den informerar inte: rubriken
                        // säger redan vad tjänsten är. Därför tom alt-text.
                        <figure className="order-first lg:order-none">
                          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-ink-800">
                            <Image
                              src={image}
                              alt=""
                              fill
                              sizes="(min-width: 1024px) 20rem, 100vw"
                              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            />
                            {/* Dämpar bilden mot den mörka grunden och lyfts
                                när blocket hovras, som resten av blockets
                                rörelse. */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 bg-ink-950/35 transition-opacity duration-500 group-hover:opacity-0"
                            />
                          </div>
                        </figure>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
