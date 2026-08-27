import { ButtonLink, Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";
import { site } from "@/site.config";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const bookHref = site.bookingUrl || href(locale, "contact");

  return (
    <section className="border-t border-pine-500/25 bg-pine-900">
      <Container className="py-24 sm:py-32">
        <Reveal className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <h2 className="max-w-2xl font-display text-title text-balance text-bone-50">
            {dict.ctaBand.title}
          </h2>

          <div>
            <p className="max-w-md text-lg leading-relaxed text-bone-300">
              {dict.ctaBand.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <ButtonLink href={bookHref} external={Boolean(site.bookingUrl)}>
                {dict.ctaBand.primary}
              </ButtonLink>
              <ButtonLink href={href(locale, "contact")} variant="ghost">
                {dict.ctaBand.secondary}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
