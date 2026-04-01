import type { TranslationKey } from "@/lib/i18n";

export const VALUE_KEYS: Array<{ title: TranslationKey; desc: TranslationKey }> = [
  { title: "aboutpage.values.v1.title", desc: "aboutpage.values.v1.desc" },
  { title: "aboutpage.values.v2.title", desc: "aboutpage.values.v2.desc" },
  { title: "aboutpage.values.v3.title", desc: "aboutpage.values.v3.desc" },
  { title: "aboutpage.values.v4.title", desc: "aboutpage.values.v4.desc" },
  { title: "aboutpage.values.v5.title", desc: "aboutpage.values.v5.desc" },
  { title: "aboutpage.values.v6.title", desc: "aboutpage.values.v6.desc" },
];

export const VALUE_ICON_PATHS = [
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4v6l4 2",
  "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  "M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2zM8 8h8M8 12h6M8 16h4",
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  "M6 3h12l4 6-10 13L2 9zM2 9h20M10 3l-4 6 6 13 6-13-4-6",
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z",
];

export const CAPABILITY_KEYS: TranslationKey[] = [
  "aboutpage.cap.3d",
  "aboutpage.cap.structural",
  "aboutpage.cap.fabrication",
  "aboutpage.cap.av",
  "aboutpage.cap.logistics",
  "aboutpage.cap.installation",
  "aboutpage.cap.graphic",
  "aboutpage.cap.content",
  "aboutpage.cap.branding",
  "aboutpage.cap.finance",
  "aboutpage.cap.comms",
];

export const CAPABILITY_ICON_PATHS = [
  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12",
  "M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  "M2 3h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 21h8M12 17v4",
  "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  "M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  "M2 2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5",
  "M12 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM8.21 13.89 7 23l5-3 5 3-1.21-9.12",
  "M18 20V10M12 20V4M6 20v-6",
  "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
];
