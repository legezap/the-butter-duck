import type { TranslationKey } from "@/lib/i18n";

export type HomeServiceIconKey = "build" | "clipboard" | "sparkle" | "play";

export const HOME_MARQUEE_KEYS: TranslationKey[] = [
  "marquee.exhibition",
  "marquee.event",
  "marquee.brand",
  "marquee.doubledecker",
  "marquee.immersive",
  "marquee.global",
];

export const HOME_SERVICE_ITEMS: Array<{
  iconKey: HomeServiceIconKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  link: string;
}> = [
  {
    iconKey: "build",
    titleKey: "svc.exhibition.title",
    descKey: "svc.exhibition.desc",
    link: "/services#exhibition-design",
  },
  {
    iconKey: "clipboard",
    titleKey: "svc.pm.title",
    descKey: "svc.pm.desc",
    link: "/services#project-management",
  },
  {
    iconKey: "sparkle",
    titleKey: "svc.event.title",
    descKey: "svc.event.desc",
    link: "/services#event-design",
  },
  {
    iconKey: "play",
    titleKey: "svc.media.title",
    descKey: "svc.media.desc",
    link: "/services#content-media",
  },
];

export const FEATURED_PROJECT_SLUGS = [
  "microsoft-leap",
  "nespresso-creatista",
  "spark-breakbulk",
] as const;

export const HOME_PROCESS_STEPS: Array<{
  num: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}> = [
  { num: "01", titleKey: "process.step1.title", descKey: "process.step1.desc" },
  { num: "02", titleKey: "process.step2.title", descKey: "process.step2.desc" },
  { num: "03", titleKey: "process.step3.title", descKey: "process.step3.desc" },
  { num: "04", titleKey: "process.step4.title", descKey: "process.step4.desc" },
];

export const HOME_TESTIMONIALS: Array<{
  quoteKey: TranslationKey;
  roleKey: TranslationKey;
  companyKey: TranslationKey;
}> = [
  {
    quoteKey: "testimonials.1.quote",
    roleKey: "testimonials.1.role",
    companyKey: "testimonials.1.company",
  },
  {
    quoteKey: "testimonials.2.quote",
    roleKey: "testimonials.2.role",
    companyKey: "testimonials.2.company",
  },
  {
    quoteKey: "testimonials.3.quote",
    roleKey: "testimonials.3.role",
    companyKey: "testimonials.3.company",
  },
];
