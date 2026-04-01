import { asset } from "@/lib/basePath";
import type { TranslationKey } from "@/lib/i18n";

export type ServiceDefinition = {
  id: string;
  labelKey: TranslationKey;
  titleKey: TranslationKey;
  image: string;
  reverse: boolean;
  bulletKeys: TranslationKey[];
};

export const SERVICES: ServiceDefinition[] = [
  {
    id: "exhibition-design",
    labelKey: "servicespage.exhibition.label",
    titleKey: "servicespage.exhibition.title",
    image: asset("/assets/photos/microsoft-leap.jpg"),
    reverse: false,
    bulletKeys: [
      "servicespage.exhibition.b1",
      "servicespage.exhibition.b2",
      "servicespage.exhibition.b3",
      "servicespage.exhibition.b4",
      "servicespage.exhibition.b5",
      "servicespage.exhibition.b6",
    ],
  },
  {
    id: "project-management",
    labelKey: "servicespage.pm.label",
    titleKey: "servicespage.pm.title",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
    reverse: true,
    bulletKeys: [
      "servicespage.pm.b1",
      "servicespage.pm.b2",
      "servicespage.pm.b3",
      "servicespage.pm.b4",
      "servicespage.pm.b5",
      "servicespage.pm.b6",
    ],
  },
  {
    id: "event-design",
    labelKey: "servicespage.event.label",
    titleKey: "servicespage.event.title",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    reverse: false,
    bulletKeys: [
      "servicespage.event.b1",
      "servicespage.event.b2",
      "servicespage.event.b3",
      "servicespage.event.b4",
      "servicespage.event.b5",
      "servicespage.event.b6",
    ],
  },
  {
    id: "content-media",
    labelKey: "servicespage.media.label",
    titleKey: "servicespage.media.title",
    image: asset("/assets/photos/gallery/nespresso-NES-135.jpg"),
    reverse: true,
    bulletKeys: [
      "servicespage.media.b1",
      "servicespage.media.b2",
      "servicespage.media.b3",
      "servicespage.media.b4",
      "servicespage.media.b5",
      "servicespage.media.b6",
    ],
  },
];
