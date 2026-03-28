"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { asset } from "@/lib/basePath";
import { useI18n } from "@/lib/I18nContext";

/* ------------------------------------------------------------------ */
/*  LOGO DATA                                                          */
/* ------------------------------------------------------------------ */

const LOGOS = [
  { src: asset("/assets/logos/show-01.png"), alt: "GITEX Global" },
  { src: asset("/assets/logos/show-02.png"), alt: "LEAP" },
  { src: asset("/assets/logos/show-03.png"), alt: "Airport Show" },
  { src: asset("/assets/logos/show-04.png"), alt: "Breakbulk Middle East" },
  { src: asset("/assets/logos/show-05.png"), alt: "Gulfood Manufacturing" },
  { src: asset("/assets/logos/show-06.png"), alt: "Intersec" },
  { src: asset("/assets/logos/show-07.png"), alt: "Middle East Coatings Show" },
  { src: asset("/assets/logos/show-08.png"), alt: "World of Vape" },
  { src: asset("/assets/logos/show-09.png"), alt: "Light Show" },
];

/* ------------------------------------------------------------------ */
/*  SINGLE LOGO                                                        */
/* ------------------------------------------------------------------ */

function LogoItem({ index, isInView }: { index: number; isInView: boolean }) {
  const logo = LOGOS[index];

  return (
    <motion.div
      className="tb2-logo-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      aria-label={logo.alt}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={240}
        height={64}
        className="tb2-img"
        style={{ objectFit: "contain" }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

export default function TrustBar() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tb2-section {
          padding: 100px 0;
          border-bottom: 1px solid var(--color-border-default);
          overflow: hidden;
          position: relative;
        }

        .tb2-label {
          text-align: center;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--color-text-dim);
          margin-bottom: 56px;
          font-family: var(--font-body);
        }

        .tb2-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 72px;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .tb2-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tb2-img {
          width: 260px;
          height: 72px;
          opacity: 0.5;
          transition: opacity 0.4s ease;
        }

        .tb2-logo-wrap:hover .tb2-img {
          opacity: 0.85;
        }

        /* Ambient line */
        .tb2-section::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          transition: opacity 1s ease;
          opacity: 0;
        }
        .tb2-section.tb2-visible::after {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .tb2-grid { gap: 56px; }
          .tb2-img { width: 220px; height: 60px; }
        }

        @media (max-width: 768px) {
          .tb2-section { padding: 64px 0; }
          .tb2-grid { gap: 40px; }
          .tb2-img { width: 180px; height: 52px; }
        }

        @media (max-width: 480px) {
          .tb2-grid { gap: 28px; }
          .tb2-img { width: 150px; height: 44px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tb2-img { transition: none !important; }
        }
      `}} />

      <section
        ref={sectionRef}
        className={`tb2-section${isInView ? " tb2-visible" : ""}`}
      >
        <p className="tb2-label">{t("trust.label")}</p>
        <div className="tb2-grid">
          {LOGOS.map((_, i) => (
            <LogoItem key={i} index={i} isInView={isInView} />
          ))}
        </div>
      </section>
    </>
  );
}
