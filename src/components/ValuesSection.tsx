"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { VALUE_ICON_PATHS, VALUE_KEYS } from "@/data/about-sections";
import { useI18n } from "@/lib/I18nContext";
import RevealOnScroll from "./RevealOnScroll";

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
            d={VALUE_ICON_PATHS[index]}
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
            {VALUE_KEYS.map((v, i) => (
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
