"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";
import RevealOnScroll from "./RevealOnScroll";

/* ------------------------------------------------------------------ */
/*  VALUE DATA                                                         */
/* ------------------------------------------------------------------ */

const valueKeys: Array<{ title: TranslationKey; desc: TranslationKey }> = [
  { title: "aboutpage.values.v1.title", desc: "aboutpage.values.v1.desc" },
  { title: "aboutpage.values.v2.title", desc: "aboutpage.values.v2.desc" },
  { title: "aboutpage.values.v3.title", desc: "aboutpage.values.v3.desc" },
  { title: "aboutpage.values.v4.title", desc: "aboutpage.values.v4.desc" },
  { title: "aboutpage.values.v5.title", desc: "aboutpage.values.v5.desc" },
  { title: "aboutpage.values.v6.title", desc: "aboutpage.values.v6.desc" },
];

/* ------------------------------------------------------------------ */
/*  SVG ICON PATHS  (single-path for draw animation)                   */
/* ------------------------------------------------------------------ */

const ICON_PATHS = [
  // Clock — Deadlines Are Sacred
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4v6l4 2",
  // Eye — Senior Eyes Only
  "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  // Receipt — Transparent Pricing
  "M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2zM8 8h8M8 12h6M8 16h4",
  // Target — Design with Purpose
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  // Diamond — Build Quality
  "M6 3h12l4 6-10 13L2 9zM2 9h20M10 3l-4 6 6 13 6-13-4-6",
  // Globe — Global Reach
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z",
];

/* ------------------------------------------------------------------ */
/*  SINGLE VALUE CARD                                                  */
/* ------------------------------------------------------------------ */

function ValueCard({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });
  const [drawn, setDrawn] = useState(false);

  /* trigger SVG draw after card enters viewport */
  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setDrawn(true), index * 120);
      return () => clearTimeout(t);
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={cardRef}
      className="vs-card"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Icon area */}
      <div className="vs-icon-wrap">
        <svg
          className="vs-svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d={ICON_PATHS[index]}
            className={`vs-path ${drawn ? "vs-drawn" : ""}`}
          />
        </svg>
      </div>

      {/* Text */}
      <h3 className="vs-title">{title}</h3>
      <p className="vs-desc">{desc}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export default function ValuesSection() {
  const { t } = useI18n();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .vs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .vs-card {
          position: relative;
          padding: 48px 32px 40px;
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-large, 20px);
          background: var(--color-bg-card);
          cursor: default;
          transition: border-color 0.4s ease;
        }

        .vs-card:hover {
          border-color: rgba(252, 217, 64, 0.35);
        }

        /* Icon wrapper */
        .vs-icon-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .vs-icon-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(252, 217, 64, 0.12);
          background: linear-gradient(135deg, rgba(252, 217, 64, 0.06) 0%, transparent 60%);
        }

        /* SVG icon */
        .vs-svg {
          position: relative;
          z-index: 1;
          color: var(--color-accent);
        }

        /* Stroke draw animation */
        .vs-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          transition: stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .vs-path.vs-drawn {
          stroke-dashoffset: 0;
        }

        .vs-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .vs-desc {
          color: var(--color-text-muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .vs-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }

        @media (max-width: 600px) {
          .vs-grid { grid-template-columns: 1fr; gap: 20px; }
          .vs-card { padding: 36px 24px 32px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-path { stroke-dasharray: none !important; stroke-dashoffset: 0 !important; transition: none !important; }
        }
      `,
        }}
      />

      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span
              className="section-label"
              style={{ textAlign: "center", display: "block" }}
            >
              {t("aboutpage.values.label")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              {t("aboutpage.values.title.alt")}{" "}
              <span className="accent">
                {t("aboutpage.values.title.accent.alt")}
              </span>
            </h2>
          </RevealOnScroll>

          <div className="vs-grid">
            {valueKeys.map((v, i) => (
              <ValueCard
                key={v.title}
                index={i}
                title={t(v.title)}
                desc={t(v.desc)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
