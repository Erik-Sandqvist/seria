import { ArrowRight, ButtonLink, Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";
import { site } from "@/site.config";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const bookHref = site.bookingUrl || href(locale, "contact");

  return (
    <section className="relative overflow-hidden border-t border-ink-850 bg-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(45rem 22rem at 50% 120%, rgba(255,90,31,0.20), transparent 65%)",
        }}
      />
      <Container className="relative py-24 sm:py-32">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl font-display text-title text-balance text-bone-50">
            {dict.ctaBand.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-300">
            {dict.ctaBand.body}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <ButtonLink href={bookHref} external={Boolean(site.bookingUrl)}>
              {dict.ctaBand.primary}
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href={href(locale, "contact")} variant="secondary">
              {dict.ctaBand.secondary}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
