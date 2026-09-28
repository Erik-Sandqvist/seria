import Image from "next/image";
import { cn } from "@/lib/cn";

export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** Adressen utan protokoll och avslutande snedstreck, för adressfältet. */
export function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/**
 * Skärmbild i ett nedtonat webbläsarfönster. Ramen är medvetet neutral —
 * tre prickar och ett adressfält — så att det är sajten som syns, inte ramen.
 */
export function BrowserFrame({
  shot,
  address,
  sizes,
  priority,
  tone = "ink",
  className,
}: {
  shot: Shot;
  address?: string;
  sizes: string;
  priority?: boolean;
  tone?: "ink" | "bone";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)]",
        tone === "ink"
          ? "border-ink-800 bg-ink-900"
          : "border-bone-300 bg-bone-50",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "flex items-center gap-3 border-b px-4 py-2.5",
          tone === "ink" ? "border-ink-800" : "border-bone-300",
        )}
      >
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                tone === "ink" ? "bg-ink-700" : "bg-bone-300",
              )}
            />
          ))}
        </span>
        {address ? (
          <span
            className={cn(
              "mx-auto max-w-full truncate rounded px-3 py-0.5 font-mono text-[0.6875rem]",
              tone === "ink"
                ? "bg-ink-850 text-ink-400"
                : "bg-bone-200 text-bone-500",
            )}
          >
            {address}
          </span>
        ) : null}
        {/* Speglar prickarnas bredd så att adressfältet hamnar i mitten. */}
        <span className="w-[2.625rem]" />
      </div>
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Skärmbild i en enkel telefonram. */
export function PhoneFrame({
  shot,
  sizes,
  className,
}: {
  shot: Shot;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[2.25rem] border border-bone-300 bg-ink-950 p-2 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)]",
        className,
      )}
    >
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        sizes={sizes}
        className="block h-auto w-full rounded-[1.75rem]"
      />
    </div>
  );
}
