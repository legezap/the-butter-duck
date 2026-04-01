import type { TranslationKey } from "@/lib/i18n";

export const TIMELINE_YEARS = ["2019", "2020", "2021", "2022", "2024", "2025"] as const;

export const TIMELINE_KEYS: Array<{ title: TranslationKey; desc: TranslationKey }> = [
  { title: "aboutpage.tl.2019.title", desc: "aboutpage.tl.2019.desc" },
  { title: "aboutpage.tl.2020.title", desc: "aboutpage.tl.2020.desc" },
  { title: "aboutpage.tl.2021.title", desc: "aboutpage.tl.2021.desc" },
  { title: "aboutpage.tl.2022.title", desc: "aboutpage.tl.2022.desc" },
  { title: "aboutpage.tl.2024.title", desc: "aboutpage.tl.2024.desc" },
  { title: "aboutpage.tl.2025.title", desc: "aboutpage.tl.2025.desc" },
];
