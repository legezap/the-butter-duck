"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale, type TranslationKey, locales, isRTL, t as translate } from "./i18n";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
  dir: "ltr",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("perduck-lang") as Locale | null;
    if (saved && locales.includes(saved)) {
      setLocaleState(saved);
    } else {
      const browser = navigator.language?.substring(0, 2) as Locale;
      if (locales.includes(browser)) {
        setLocaleState(browser);
      }
    }
  }, []);

  useEffect(() => {
    const dir = isRTL(locale) ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("perduck-lang", l);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translate(key, locale),
    [locale]
  );

  const dir = isRTL(locale) ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
