"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CAPABILITY_ICON_PATHS, CAPABILITY_KEYS } from "@/data/about-sections";
import { useI18n } from "@/lib/I18nContext";
import RevealOnScroll from "./RevealOnScroll";

/* ------------------------------------------------------------------ */
/*  SINGLE CAPABILITY CARD                                             */
/* ------------------------------------------------------------------ */

function CapCard({ index, label }: { index: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setDrawn(true), index * 80);
      return () => clearTimeout(t);
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={ref}
      className="cap-card"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cap-icon-wrap">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cap-svg"
        >
          <path
            d={CAPABILITY_ICON_PATHS[index]}
            className={`cap-path ${drawn ? "cap-drawn" : ""}`}
          />
        </svg>
      </div>
      <h3 className="cap-label">{label}</h3>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export default function CapabilitiesSection() {
  const { t } = useI18n();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .cap-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          border-top: 1px solid var(--color-border-default);
          border-bottom: 1px solid var(--color-border-default);
        }

        .cap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }

        .cap-card {
          text-align: center;
          padding: 40px 16px 32px;
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-default);
          background: rgba(255,255,255,0.02);
          cursor: default;
          transition: border-color 0.4s ease;
        }

        .cap-card:hover {
          border-color: rgba(252,217,64,0.2);
        }

        .cap-icon-wrap {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.4s ease;
        }
        .cap-card:hover .cap-icon-wrap {
          border-color: rgba(252,217,64,0.25);
        }

        .cap-svg { color: var(--color-text-muted); transition: color 0.4s ease; }
        .cap-card:hover .cap-svg { color: var(--color-accent); }

        /* Stroke draw animation */
        .cap-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 1s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .cap-path.cap-drawn { stroke-dashoffset: 0; }

        .cap-label {
          font-size: 0.9rem;
          letter-spacing: -0.01em;
        }

        @media (prefers-reduced-motion: reduce) {
          .cap-path { stroke-dasharray: none !important; stroke-dashoffset: 0 !important; transition: none !important; }
        }
      `}} />

      <section className="cap-section" style={{ background: "var(--color-bg-card)" }}>
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("aboutpage.cap.label")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              {t("aboutpage.cap.title.alt")}{" "}
              <span className="accent">{t("aboutpage.cap.title.accent.alt")}</span>
            </h2>
          </RevealOnScroll>

          <div className="cap-grid">
            {CAPABILITY_KEYS.map((key, i) => (
              <CapCard key={key} index={i} label={t(key)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
