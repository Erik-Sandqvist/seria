import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Fäller in innehållet när det scrollas in i vy.
 *
 * Ren serverkomponent: all logik ligger i inline-skriptet (se reveal-script.ts),
 * så animationen kostar inget klient-JS och innehållet är läsbart även om
 * skriptet aldrig kör. Vid prefers-reduced-motion neutraliserar CSS:en rörelsen.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      // Inline-skriptet sätter data-reveal innan React hydrerar, så klienten
      // har ett attribut servern aldrig renderade. Det är avsikten — utan den
      // här raden rapporterar React det som en hydreringsavvikelse.
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
