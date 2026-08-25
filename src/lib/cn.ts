type ClassValue = string | false | null | undefined;

/** Minimal klass-sammanfogare. Ingen extra dependency behövs för det här. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
