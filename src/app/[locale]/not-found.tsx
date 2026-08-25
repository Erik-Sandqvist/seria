import { ButtonLink, Container } from "@/components/ui/Primitives";
import { getDictionary } from "@/content";
import { defaultLocale, href } from "@/lib/routes";

/**
 * Not-found renderas utan tillgång till params, så den faller tillbaka på
 * standardspråket. Den ligger inuti [locale] för att ärva rot-layouten.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <main className="flex flex-1 items-center">
      <Container className="py-32">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-500">
          {dict.notFound.code}
        </p>
        <h1 className="mt-4 font-display text-title text-bone-50">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-ink-300">
          {dict.notFound.body}
        </p>
        <ButtonLink href={href(defaultLocale, "home")} className="mt-8">
          {dict.notFound.cta}
        </ButtonLink>
      </Container>
    </main>
  );
}
