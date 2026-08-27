import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

type Tone = "ink" | "inkAlt" | "bone";

const toneStyles: Record<Tone, string> = {
  ink: "bg-ink-950 text-bone-100",
  inkAlt: "bg-ink-900 text-bone-100",
  bone: "bg-bone-100 text-ink-900",
};

export function Section({
  id,
  tone = "ink",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-0 py-20 sm:py-28",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

/**
 * Sektionsmarkör: en kort linje och en etikett i vanlig gemen.
 * Medvetet inte versal monospace med brett teckenmellanrum — den
 * varianten sitter på var tredje sajt och säger ingenting.
 */
export function Eyebrow({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  tone?: "ink" | "bone";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.8125rem]",
        tone === "bone" ? "text-bone-500" : "text-ink-400",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-6 shrink-0",
          tone === "bone" ? "bg-signal-600" : "bg-signal-500",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "ink",
  /**
   * "stacked" staplar rubrik och ingress. "split" ställer ingressen bredvid
   * rubriken på stora skärmar — sektionerna ska inte alla ha samma form.
   */
  layout = "stacked",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  tone?: "ink" | "bone";
  layout?: "stacked" | "split";
  /** Undersidor sätter "h1" här; startsidan har sin h1 i hero-sektionen. */
  as?: "h1" | "h2";
  className?: string;
}) {
  const heading = (
    <Heading
      className={cn(
        "font-display text-title text-balance",
        tone === "bone" ? "text-ink-900" : "text-bone-50",
      )}
    >
      {title}
    </Heading>
  );

  const body = lead ? (
    <p
      className={cn(
        "text-lg leading-relaxed",
        layout === "split" ? "max-w-md" : "max-w-2xl",
        tone === "bone" ? "text-ink-700" : "text-ink-300",
      )}
    >
      {lead}
    </p>
  ) : null;

  if (layout === "split") {
    return (
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16",
          className,
        )}
      >
        <div className="flex flex-col gap-4">
          {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
          {heading}
        </div>
        {body ? <div className="lg:pb-2">{body}</div> : null}
      </div>
    );
  }

  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", className)}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      {heading}
      {body}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "onBone";

const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-sm px-5 py-3 text-sm whitespace-nowrap transition-colors duration-200";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-bone-50 text-ink-950 hover:bg-bone-200",
  secondary: "border border-ink-700 text-bone-100 hover:border-bone-300",
  // Textlänk med hårfin accentlinje — accentfärgen bär bara understrykningen.
  ghost:
    "px-0 py-1 text-bone-100 underline decoration-signal-500 decoration-1 underline-offset-[6px] hover:decoration-bone-100",
  onBone: "bg-ink-900 text-bone-50 hover:bg-ink-800",
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(buttonBase, buttonVariants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn(
        "h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("h-4 w-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 8.5 3.5 3.5L13 4.5" />
    </svg>
  );
}
