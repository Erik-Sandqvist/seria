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
        "font-mono text-xs uppercase tracking-[0.22em]",
        tone === "bone" ? "text-bone-500" : "text-signal-500",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "ink",
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  tone?: "ink" | "bone";
  align?: "left" | "center";
  /** Undersidor sätter "h1" här; startsidan har sin h1 i hero-sektionen. */
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Heading
        className={cn(
          "font-display text-title text-balance",
          tone === "bone" ? "text-ink-900" : "text-bone-50",
        )}
      >
        {title}
      </Heading>
      {lead ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            tone === "bone" ? "text-ink-700" : "text-ink-300",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "onBone";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-signal-500 text-ink-950 hover:bg-signal-400",
  secondary:
    "border border-ink-700 text-bone-100 hover:border-bone-300 hover:bg-ink-800",
  ghost: "text-bone-100 hover:text-signal-500",
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
      className={cn("h-3.5 w-3.5", className)}
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
