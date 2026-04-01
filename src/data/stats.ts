import type { TranslationKey } from "@/lib/i18n";

export const STATS: Array<{ target: number; suffix: string; key: TranslationKey }> = [
  { target: 80, suffix: "+", key: "stats.projects" },
  { target: 10, suffix: "", key: "stats.countries" },
  { target: 15, suffix: "+", key: "stats.industries" },
  { target: 98, suffix: "%+", key: "stats.ontime" },
];
