"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  MONOCHROME SVG LOGOS — clean, premium, white-on-dark               */
/* ------------------------------------------------------------------ */

function IKGroupLogo() {
  return (
    <svg viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <circle cx="24" cy="26" r="21" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <text x="14" y="33" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="19" fill="rgba(255,255,255,0.95)">IK</text>
      <text x="54" y="33" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="600" fontSize="17" letterSpacing="4" fill="rgba(255,255,255,0.6)">GROUP</text>
    </svg>
  );
}

function MicrosoftLogo() {
  const s = 10;
  const g = 1.5;
  const ox = 6;
  const oy = 15;
  const c = "rgba(255,255,255,0.7)";
  return (
    <svg viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <rect x={ox} y={oy} width={s} height={s} fill={c} rx="1" />
      <rect x={ox+s+g} y={oy} width={s} height={s} fill={c} rx="1" opacity="0.85" />
      <rect x={ox} y={oy+s+g} width={s} height={s} fill={c} rx="1" opacity="0.85" />
      <rect x={ox+s+g} y={oy+s+g} width={s} height={s} fill={c} rx="1" opacity="0.6" />
      <text x="38" y="32" fontFamily="'Segoe UI', 'DM Sans', Arial, sans-serif" fontWeight="300" fontSize="16.5" fill="rgba(255,255,255,0.85)" letterSpacing="0.3">Microsoft</text>
    </svg>
  );
}

function SparkLogisticsLogo() {
  return (
    <svg viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <polygon points="16,6 9,27 18,27 12,46 30,20 20,20 26,6" fill="rgba(255,255,255,0.7)" />
      <text x="38" y="28" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="16" fill="rgba(255,255,255,0.9)">spark</text>
      <text x="38" y="42" fontFamily="'DM Sans', Arial, sans-serif" fontWeight="400" fontSize="9" letterSpacing="2.5" fill="rgba(255,255,255,0.4)">LOGISTICS</text>
    </svg>
  );
}

function AltronixLogo() {
  return (
    <svg viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <polygon points="22,6 6,44 38,44" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinejoin="round" />
      <line x1="14" y1="32" x2="30" y2="32" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" />
      <text x="46" y="34" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="600" fontSize="18" fill="rgba(255,255,255,0.85)">Altronix</text>
    </svg>
  );
}

function VanderlandeLogo() {
  return (
    <svg viewBox="0 0 220 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <text x="110" y="30" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="15" letterSpacing="4" fill="rgba(255,255,255,0.85)" textAnchor="middle">VANDERLANDE</text>
      <rect x="20" y="40" width="180" height="1.5" rx="0.75" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

function AbsolutSkandicLogo() {
  return (
    <svg viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <polygon points="14,20 22,9 30,20" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="16" y="20" width="12" height="12" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
      <rect x="20" y="23" width="4" height="5.5" fill="rgba(255,255,255,0.3)" />
      <text x="40" y="22" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="700" fontSize="10.5" letterSpacing="2" fill="rgba(255,255,255,0.75)">ABSOLUT</text>
      <text x="40" y="37" fontFamily="'DM Sans', Arial, sans-serif" fontWeight="400" fontSize="10.5" letterSpacing="2.5" fill="rgba(255,255,255,0.45)">SKANDIC</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const BRAND_NAMES = [
  "IK Group",
  "Microsoft",
  "Spark Logistics",
  "Altronix",
  "Vanderlande",
  "Absolut Skandic",
];

const LOGO_COMPONENTS = [
  IKGroupLogo,
  MicrosoftLogo,
  SparkLogisticsLogo,
  AltronixLogo,
  VanderlandeLogo,
  AbsolutSkandicLogo,
];

const FLOAT_PHASES = [0, 1.2, 2.4, 3.6, 0.8, 2.0];

/* ------------------------------------------------------------------ */
/*  SINGLE LOGO ITEM                                                   */
/* ------------------------------------------------------------------ */

function LogoItem({ index, isInView }: { index: number; isInView: boolean }) {
  const LogoSvg = LOGO_COMPONENTS[index];
  const brandName = BRAND_NAMES[index];
  const floatPhase = FLOAT_PHASES[index];

  return (
    <motion.div
      className="tb2-logo-wrap"
      initial={{ opacity: 0, y: 50, scale: 0.85 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.85 }
      }
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15,
      }}
      aria-label={brandName}
    >
      <motion.div
        className="tb2-logo-inner"
        animate={
          isInView
            ? { y: [0, -4, 0, 4, 0] }
            : {}
        }
        transition={{
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatPhase,
        }}
        whileHover={{
          y: -10,
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <LogoSvg />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

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
          width: 220px;
          height: 56px;
        }

        .tb2-logo-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }

        .tb2-svg {
          width: 100%;
          height: 100%;
          display: block;
          transition: filter 0.5s ease;
        }

        /* Hover: subtle glow */
        .tb2-logo-inner:hover .tb2-svg {
          filter: drop-shadow(0 0 12px rgba(255,255,255,0.08));
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
          .tb2-logo-wrap { width: 180px; height: 48px; }
        }

        @media (max-width: 768px) {
          .tb2-section { padding: 64px 0; }
          .tb2-grid { gap: 40px; }
          .tb2-logo-wrap { width: 160px; height: 44px; }
        }

        @media (max-width: 480px) {
          .tb2-grid { gap: 28px; }
          .tb2-logo-wrap { width: 130px; height: 36px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tb2-svg { transition: none !important; }
        }
      `}} />

      <section
        ref={sectionRef}
        className={`tb2-section${isInView ? " tb2-visible" : ""}`}
      >
        <p className="tb2-label">Trusted by Industry Leaders</p>
        <motion.div className="tb2-grid" style={{ y }}>
          {LOGO_COMPONENTS.map((_, i) => (
            <LogoItem key={i} index={i} isInView={isInView} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
