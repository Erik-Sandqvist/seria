"use client";

import { useEffect, useState } from "react";
import { CrossIcon } from "@/components/ui/CrossIcon";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";

/**
 * Mock: en banner som glider upp nedtill och hälsar, och som kryssas bort
 * med det handritade krysset.
 *
 * Utan JavaScript renderas den osynlig och utanför träffytan, så ingen kan
 * fastna med en banner som inte går att stänga. Avvisningen lever bara i
 * komponentens läge — den kommer alltså tillbaka vid omladdning, vilket är
 * praktiskt så länge det är en mock. Ska den ligga kvar är det en rad
 * sessionStorage i onDismiss.
 */
export function HelloBanner({
  banner,
  closeLabel,
}: {
  banner: Dictionary["banner"];
  closeLabel: string;
}) {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Vänta en stund efter första målningen. Sätts läget i samma bildruta
  // hinner övergången aldrig visas — bannern bara står där.
  useEffect(() => {
    const id = window.setTimeout(() => setShown(true), 700);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDismissed(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (dismissed) return null;

  return (
    <aside
      aria-label={banner.label}
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 rounded-sm border border-ink-700 bg-ink-900 p-6 shadow-2xl",
        "sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[22rem]",
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label={closeLabel}
        // Träffytan är större än strecken: -m-2 p-2 ger 40×40 utan att
        // knappen tar mer plats i layouten.
        className="absolute top-4 right-4 -m-2 p-2 text-ink-400 transition-colors hover:text-bone-50"
      >
        <CrossIcon className="h-6 w-6" />
      </button>

      <p className="pr-10 font-display text-4xl text-bone-50">{banner.title}</p>
      <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-ink-300">
        {banner.body}
      </p>
    </aside>
  );
}
