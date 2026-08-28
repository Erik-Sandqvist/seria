import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

/**
 * Dekorlinje: en enda dragen kurva som löper bakom sektionens innehåll och
 * binder ihop de två textkolumnerna. Ren dekor — den bär ingen information,
 * därför aria-hidden och ingen text.
 *
 * preserveAspectRatio="none" låter kurvan följa sektionens proportioner i
 * stället för sina egna, så den ramar in innehållet lika bra i en hög som i
 * en bred sektion. vector-effect håller då strecket lika tunt oavsett hur
 * mycket koordinatsystemet töjs.
 *
 * Döljs under md: i en smal, hög sektion pressas öglorna ihop i sidled och
 * kurvan blir en klump i stället för en linje.
 */
export function DrawnLine({ className }: { className?: string }) {
  return (
    <Reveal
      className={cn(
        "draw-host pointer-events-none absolute inset-0 -z-10 hidden md:block",
        "text-signal-500/30",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* pathLength="1" normerar kurvans längd till 1, så att
            stroke-dasharray i CSS:en kan räknas i andelar. Geometrin nedan
            får ändras fritt utan att animationen behöver mätas om. */}
        <path
          className="draw-path"
          pathLength="1"
          d="M92 44C40 60 8 130 24 196c14 56 72 72 156 66 120-8 250-18 380-12 80 4 130-40 160-100 36-72 110-110 188-98 78 12 124 80 110 150-14 70-88 90-182 86-94-4-168-16-216 0-54 18-42 84-30 142 12 56 20 90-30 116-74 38-188 20-298 24-102 4-188 40-200 106-10 56 66 88 174 86 124-2 234-36 360-56 134-22 264 20 384 30 102 8 170-36 216-96"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Reveal>
  );
}
