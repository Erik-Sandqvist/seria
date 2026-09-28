import Link from "next/link";
import {
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui/Primitives";
import { BrowserFrame, hostOf, PhoneFrame } from "@/components/ui/DeviceFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { caseHref, href, type Locale } from "@/lib/routes";

type CaseItem = Dictionary["work"]["items"][number];

/**
 * Ett uppdrag i sin helhet: uppdraget, arbetet och utfallet.
 *
 * Sidan är byggd av samma primitiv som resten av sajten — siffrorna får en
 * egen ljus sektion så att de går att läsa på håll, löptexten en smal spalt.
 */
export function CaseStudy({
  locale,
  dict,
  item,
}: {
  locale: Locale;
  dict: Dictionary;
  item: CaseItem;
}) {
  const items = dict.work.items;
  const index = items.findIndex((c) => c.slug === item.slug);
  // Med bara ett case skulle "nästa" peka på sig självt. Då visar vi inget.
  const next = items.length > 1 ? items[(index + 1) % items.length] : null;

  const meta: [string, string][] = [
    [dict.work.roleLabel, item.detail.role],
    [dict.work.durationLabel, item.detail.duration],
    [dict.work.stackLabel, item.detail.stack.join(" · ")],
  ];

  return (
    <>
      <Section tone="ink">
        <Container>
          <Reveal>
            {/* Pilen är roterad, så den inbyggda hover-förskjutningen bär
                den åt vänster — tillbaka, inte framåt. */}
            <Link
              href={href(locale, "work")}
              className="group inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-bone-50"
            >
              <ArrowRight className="rotate-180" />
              {dict.work.backLabel}
            </Link>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-5">
            <Eyebrow>
              {item.client} · {item.sector} · {item.year}
            </Eyebrow>
            <h1 className="max-w-3xl font-display text-title text-balance text-bone-50">
              {item.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-300">
              {item.detail.lead}
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <dl className="grid gap-x-10 gap-y-6 border-t border-ink-800 pt-8 sm:grid-cols-3">
              {meta.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-2">
                  <dt className="text-sm text-ink-400">{label}</dt>
                  <dd className="leading-relaxed text-bone-100">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {item.url ? (
            <Reveal delay={120} className="mt-10">
              <ButtonLink href={item.url} external>
                {dict.work.visitLabel}
                <ArrowRight />
              </ButtonLink>
            </Reveal>
          ) : null}

          {item.images ? (
            <Reveal delay={160} className="mt-16 max-w-4xl">
              <BrowserFrame
                shot={item.images.cover}
                address={item.url ? hostOf(item.url) : undefined}
                sizes="(min-width: 960px) 896px, 100vw"
                priority
              />
            </Reveal>
          ) : null}
        </Container>
      </Section>

      <Section tone="bone">
        <Container>
          <Reveal>
            <h2 className="text-sm text-bone-500">{dict.work.resultsLabel}</h2>
          </Reveal>
          <ul className="mt-8 grid gap-x-10 gap-y-8 border-t border-bone-300 pt-8 sm:grid-cols-3">
            {item.results.map((result, i) => (
              <Reveal as="li" key={result} delay={i * 80}>
                <p className="font-display text-4xl text-balance text-ink-900">
                  {result}
                </p>
              </Reveal>
            ))}
          </ul>

          {item.images?.gallery.length ? (
            <>
              <Reveal className="mt-20">
                <h2 className="text-sm text-bone-500">
                  {dict.work.galleryLabel}
                </h2>
              </Reveal>
              {/* Tolv kolumner: första fönstret tar åtta bredvid telefonens
                  fyra, övriga fönster delar rad med sex var. */}
              <div className="mt-8 border-t border-bone-300 pt-10">
                <div className="grid max-w-5xl gap-x-8 gap-y-14 lg:grid-cols-12">
                  {item.images.gallery.map((shot, i, all) => {
                    const mobile = shot.device === "mobile";
                    // Första fönstret får plats bredvid telefonen, resten delar rad.
                    const first =
                      all.findIndex((s) => s.device === "desktop") === i;
                    const span = mobile
                      ? "lg:col-span-4"
                      : first
                        ? "lg:col-span-8"
                        : "lg:col-span-6";
                    return (
                      <Reveal
                        key={shot.src}
                        delay={(i % 2) * 80}
                        className={span}
                      >
                        <figure className="flex h-full flex-col">
                          <div className="flex flex-1 items-start justify-center">
                            {mobile ? (
                              <PhoneFrame
                                shot={shot}
                                sizes="(min-width: 1024px) 13rem, 55vw"
                                className="w-full max-w-[13rem]"
                              />
                            ) : (
                              <BrowserFrame
                                shot={shot}
                                tone="bone"
                                sizes={
                                  first
                                    ? "(min-width: 1024px) 640px, 100vw"
                                    : "(min-width: 1024px) 480px, 100vw"
                                }
                                className="w-full"
                              />
                            )}
                          </div>
                          <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-ink-700">
                            {shot.caption}
                          </figcaption>
                        </figure>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </>
          ) : null}
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="max-w-3xl">
          {item.detail.sections.map((section, i) => (
            <Reveal key={section.h} delay={i * 60}>
              <section className="border-t border-ink-800 py-10">
                <h2 className="font-display text-2xl text-bone-50">
                  {section.h}
                </h2>
                <div className="mt-5 flex flex-col gap-4">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="leading-relaxed text-ink-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          {next ? (
            <Reveal>
              <Link
                href={caseHref(locale, next.slug)}
                className="group flex items-center justify-between gap-6 border-t border-ink-800 py-8"
              >
                <span className="flex flex-col gap-2">
                  <span className="text-sm text-ink-400">
                    {dict.work.nextLabel}
                  </span>
                  <span className="font-display text-2xl text-bone-50">
                    {next.client}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-ink-400" />
              </Link>
            </Reveal>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
