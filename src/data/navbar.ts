import type { TranslationKey } from "@/lib/i18n";

export const SERVICE_MENU_ITEMS: {
  icon: string;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  href: string;
}[] = [
  { icon: "◆", labelKey: "mega.exhibition", descKey: "mega.exhibition.desc", href: "/services#exhibition-design" },
  { icon: "⚙", labelKey: "mega.project", descKey: "mega.project.desc", href: "/services#project-management" },
  { icon: "✨", labelKey: "mega.concept", descKey: "mega.concept.desc", href: "/services#event-design" },
  { icon: "▶", labelKey: "mega.media", descKey: "mega.media.desc", href: "/services#content-media" },
];

export const PORTFOLIO_MENU_ITEMS: {
  label: string;
  sub: string;
  href: string;
}[] = [
  { label: "LEAP", sub: "700 sqm Double Decker", href: "/projects/microsoft-leap" },
  { label: "Product Launch", sub: "1200 sqm Event", href: "/projects/nespresso-creatista" },
  { label: "Airport Show", sub: "Open Concept", href: "/projects/vanderlande-airport" },
  { label: "Breakbulk ME", sub: "Container Design", href: "/projects/spark-breakbulk" },
  { label: "World of Vape", sub: "Retail Stand", href: "/projects/hoosh-world-of-vape" },
  { label: "ME Coatings Show", sub: "Double Decker", href: "/projects/sipchem-adipec" },
  { label: "Gulfood Manufacturing", sub: "Hanging Signage", href: "/projects/interfood-gulfood" },
  { label: "Intersec", sub: "Compact Design", href: "/projects/altronix-intersec" },
];
