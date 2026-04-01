import type { TranslationKey } from "@/lib/i18n";

export const SERVICE_KEYS: { id: string; labelKey: TranslationKey }[] = [
  { id: "exhibition-design", labelKey: "contact.svc.exhibition" },
  { id: "project-management", labelKey: "contact.svc.pm" },
  { id: "event-design", labelKey: "contact.svc.event" },
  { id: "content-media", labelKey: "contact.svc.media" },
];

export const BOOTH_SIZE_KEYS: TranslationKey[] = [
  "contact.size.under20",
  "contact.size.20_50",
  "contact.size.50_100",
  "contact.size.100_200",
  "contact.size.200_500",
  "contact.size.500plus",
  "contact.size.notsure",
];

export const BUDGET_KEYS: TranslationKey[] = [
  "contact.budget.under50",
  "contact.budget.50_150",
  "contact.budget.150_400",
  "contact.budget.400_1m",
  "contact.budget.1mplus",
  "contact.budget.discuss",
];
