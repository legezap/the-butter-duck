"use client";

import { useI18n } from "@/lib/I18nContext";
import { locales, localeNames } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="lang-switcher" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          className={`lang-btn${l === locale ? " active" : ""}`}
          onClick={() => setLocale(l)}
          aria-label={`Switch to ${localeNames[l]}`}
          aria-pressed={l === locale}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
