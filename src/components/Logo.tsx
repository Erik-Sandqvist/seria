import { cn } from "@/lib/cn";

/**
 * seria-märket: fyra staplar i stigande höjd — en serie.
 * Staplarna står fritt, utan bricka bakom sig; sista stapeln bär
 * signalfärgen och är enda stället accenten syns i sidhuvudet.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 26"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("h-5 w-5", className)}
    >
      <g className="fill-bone-100">
        <rect x="0" y="15" width="3" height="9" />
        <rect x="6" y="11" width="3" height="13" />
        <rect x="12" y="7" width="3" height="17" />
      </g>
      <rect x="18" y="2" width="3" height="22" className="fill-signal-500" />
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
    <span className={cn("inline-flex items-baseline gap-2.5", className)}>
      <LogoMark className={cn("translate-y-0.5", markClassName)} />
      <span className="font-display text-2xl leading-none text-bone-50">
        seria
      </span>
    </span>
  );
}
