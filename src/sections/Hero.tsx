import Image from "next/image";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";
import { site, team } from "@/site.config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const bookHref = site.bookingUrl || href(locale, "contact");
  const signature = team[0];

  return (
    <section className="border-b border-ink-850 bg-ink-950">
      <Container className="pt-20 pb-14 sm:pt-28 sm:pb-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20">
          <div>
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
          </div>

          {/* Signerad notis i stället för en rad påhittad statistik. */}
          <Reveal delay={140}>
            <aside className="border-t border-ink-800 pt-6 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-8">
              <p className="text-sm leading-relaxed text-ink-300">
                {dict.hero.note}
              </p>
              <p className="mt-5 text-sm text-ink-400">
                {signature.name}, {dict.hero.noteRole}
              </p>
            </aside>
          </Reveal>
        </div>
      </Container>

      {site.heroImage ? (
        // Bildbandet går ut i kanterna som ett uppslag. Bilden är dekor,
        // därför tom alt-text; bär den ett budskap ska den beskrivas.
        <Reveal delay={180}>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900 sm:aspect-[2/1] lg:aspect-[21/9]">
            <Image
              src={site.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Dämpar bilden mot den mörka grunden i stället för att låta
                den lysa som ett främmande element. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink-950/25 mix-blend-multiply"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--color-ink-950), transparent)",
              }}
            />
          </div>
        </Reveal>
      ) : null}

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
