import type { Locale } from "@/lib/routes";
import sv, { type Dictionary } from "./sv";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = { sv, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}


export type { Dictionary };
