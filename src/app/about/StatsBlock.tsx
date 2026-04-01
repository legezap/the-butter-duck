"use client";

import CounterAnimation from "@/components/CounterAnimation";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useI18n } from "@/lib/I18nContext";
import { STATS } from "@/data/stats";

export default function StatsBlock() {
  const { t } = useI18n();

  return (
    <section className="stats-section">
      <div className="container">
        <RevealOnScroll>
          <div className="stats-grid">
            {STATS.map((s) => (
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
