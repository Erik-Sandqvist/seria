"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type RailItem = { id: string; number: string; title: string };

/** Läslinjen: den tjänst som passerat en tredjedel ned i vyn är den man läser. */
const READING_LINE = 0.3;

/**
 * Klibbigt register bredvid tjänsterna. Markerar den tjänst man just nu
 * läser, så sidan känns som en plats man rör sig i i stället för en lista
 * som rullar förbi.
 *
 * Registret är dolt under lg. Länkarna fungerar ändå som vanliga
 * ankarlänkar utan JavaScript — bara markeringen kräver skript.
 */
export function ServiceRail({
  items,
  label,
}: {
  items: RailItem[];
  label: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    // Sista blocket som passerat läslinjen vinner. Till skillnad från en
    // IntersectionObserver med smalt band lämnar det aldrig ett glapp där
    // ingen tjänst är markerad.
    const update = () => {
      const line = window.innerHeight * READING_LINE;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav
      aria-label={label}
      className="hidden lg:sticky lg:top-28 lg:block lg:self-start"
    >
      <ol className="flex flex-col">
        {items.map((item) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "flex items-baseline gap-4 border-l py-2.5 pl-4 text-sm transition-colors duration-300",
                  on
                    ? "border-signal-500 text-bone-50"
                    : "border-ink-800 text-ink-400 hover:border-ink-600 hover:text-bone-100",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "transition-colors duration-300",
                    on ? "text-signal-500" : "text-ink-600",
                  )}
                >
                  {item.number}
                </span>
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
