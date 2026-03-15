"use client";

import CounterAnimation from "@/components/CounterAnimation";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";

const stats: Array<{ target: number; suffix: string; key: TranslationKey }> = [
  { target: 80, suffix: "+", key: "stats.projects" },
  { target: 10, suffix: "", key: "stats.countries" },
  { target: 15, suffix: "+", key: "stats.industries" },
  { target: 100, suffix: "%", key: "stats.ontime" },
];

export default function StatsBlock() {
  const { t } = useI18n();

  return (
    <section className="stats-section">
      <div className="container">
        <RevealOnScroll>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.key}>
                <div className="stat-num">
                  <CounterAnimation target={s.target} suffix={s.suffix} />
                </div>
                <div className="stat-text">{t(s.key)}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
