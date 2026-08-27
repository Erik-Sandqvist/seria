import Image from "next/image";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";
import { site } from "@/site.config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const bookHref = site.bookingUrl || href(locale, "contact");

  return (
    <section className="relative isolate overflow-hidden border-b border-ink-850 bg-ink-950">
      {site.heroImage ? (
        // Bilden ligger som oskarp fond bakom hela hero — atmosfär, inte
        // motiv. Därför tom alt-text och aria-hidden: det finns inget att
        // beskriva för den som inte ser den.
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* Uppskalad med flit: en blur samlar färg utanför sin egen kant,
              så utan överskott blir bildens ytterkanter urtvättade. */}
          <Image
            src={site.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-150 object-cover blur-xl"
          />
          {/* Hinnan bär läsbarheten. Rubriken ligger i bone-50 och ingressen
              i ink-300 — utan den här ytan faller kontrasten med motivet. */}
          <div className="absolute inset-0 bg-ink-950/85" />
          {/* Drar fonden mot tallgrönt i stället för bildens blå, så accenten
              bär stämningen och inte bara prickar detaljer. Ligger över den
              mörka hinnan: pine-900 är ljusare än ink-950 i grön kanal, så
              hinnan under måste vara tätare för att kontrasten ska hålla. */}
          <div className="absolute inset-0 bg-pine-900/40" />
          {/* Djupnar nedåt så sektionen möter nästa utan att fonden lyser
              igenom i kanten. */}
          <div className="absolute inset-0 bg-gradient-to-b from-pine-900/40 via-transparent to-ink-950" />
        </div>
      ) : null}

      <Container className="pt-20 pb-14 sm:pt-28 sm:pb-16">
        <Reveal>
          <Eyebrow>{dict.hero.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal className="mask-host mt-8">
          <h1 className="max-w-[15ch] font-display text-display text-bone-50">
            <span className="line-mask">
              <span>{dict.hero.titleLead}</span>
            </span>
            <span className="line-mask">
              {/* Betoningen ligger i kursiven, inte i en andra färg. */}
              <span className="italic" style={{ transitionDelay: "110ms" }}>
                {dict.hero.titleAccent}
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={80} className="mt-9">
          <p className="max-w-xl text-lg leading-relaxed text-ink-300">
            {dict.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <ButtonLink href={bookHref} external={Boolean(site.bookingUrl)}>
              {dict.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={href(locale, "pricing")} variant="ghost">
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={200}>
        <Container>
          <div className="flex flex-col gap-3 border-t border-ink-850 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2.5 text-bone-100">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500"
              />
              {dict.hero.availability}
            </p>
            <p className="text-ink-400">{dict.hero.location}</p>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
