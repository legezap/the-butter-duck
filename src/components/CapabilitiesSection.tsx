"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";
import RevealOnScroll from "./RevealOnScroll";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const capabilityKeys: TranslationKey[] = [
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

/* Single-path SVGs for draw animation */
const CAP_PATHS = [
  // 3D Design — cube
  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12",
  // Structural Engineering — layers
  "M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  // Fabrication — gear
  "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  // AV — monitor
  "M2 3h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 21h8M12 17v4",
  // Logistics — truck
  "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  // Installation — wrench
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  // Graphic — pen tool
  "M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  // Content — film
  "M2 2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5",
  // Branding — award
  "M12 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM8.21 13.89 7 23l5-3 5 3-1.21-9.12",
  // Finance — bar chart
  "M18 20V10M12 20V4M6 20v-6",
  // Communication — message
  "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
];

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
            d={CAP_PATHS[index]}
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
            {capabilityKeys.map((key, i) => (
              <CapCard key={key} index={i} label={t(key)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
