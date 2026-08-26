"use client";

import { useEffect } from "react";
import { ButtonLink, Container } from "@/components/ui/Primitives";
import { getDictionary } from "@/content";
import { defaultLocale, href } from "@/lib/routes";

/**
 * Fångar renderingsfel inuti språksegmentet. Utan params här faller texten
 * tillbaka på standardspråket, precis som not-found.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const dict = getDictionary(defaultLocale);

  useEffect(() => {
    console.error("[sidfel]", error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center">
      <Container className="py-32">
        <p className="font-mono text-xs tracking-[0.22em] text-signal-500 uppercase">
          Fel
        </p>
        <h1 className="mt-4 font-display text-title text-bone-50">
          Något gick snett.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-ink-300">
          Sidan kunde inte visas. Försök igen — kvarstår det får du gärna höra
          av dig så tittar vi på det.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-signal-500 px-6 py-3 text-sm font-medium whitespace-nowrap text-ink-950 transition-colors duration-200 hover:bg-signal-400"
          >
            Försök igen
          </button>
          <ButtonLink href={href(defaultLocale, "home")} variant="secondary">
            {dict.notFound.cta}
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
