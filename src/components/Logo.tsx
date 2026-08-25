import { cn } from "@/lib/cn";

/**
 * seria-märket: fyra staplar i stigande höjd — en serie.
 * Sista stapeln bär signalfärgen och fungerar som varumärkets accent.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("h-7 w-7", className)}
    >
      <rect width="32" height="32" rx="8" className="fill-ink-800" />
      <g className="fill-bone-100">
        <rect x="6" y="19" width="4" height="7" rx="1.4" />
        <rect x="12" y="15" width="4" height="11" rx="1.4" />
        <rect x="18" y="11" width="4" height="15" rx="1.4" />
      </g>
      <rect
        x="24"
        y="6"
        width="4"
        height="20"
        rx="1.4"
        className="fill-signal-500"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="font-display text-2xl leading-none tracking-tight text-bone-50">
        seria<span className="text-signal-500">.</span>
      </span>
    </span>
  );
}
