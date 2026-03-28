"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatsBlock from "./StatsBlock";
import { asset } from "@/lib/basePath";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";

/* Premium SVG icons for values */
const ValueIcon = ({ index }: { index: number }) => {
  const icons = [
    // Deadlines Are Sacred — clock
    <svg key="clock" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    // Senior Eyes Only — eye
    <svg key="eye" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    // Transparent Pricing — receipt/document
    <svg key="receipt" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="14" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>,
    // Design with Purpose — crosshair/target
    <svg key="target" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    // Build Quality — diamond
    <svg key="diamond" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M10 3l-4 6 6 13 6-13-4-6"/></svg>,
    // Global Reach — globe
    <svg key="globe" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  ];
  return icons[index];
};
const valueKeys: Array<{ title: TranslationKey; desc: TranslationKey }> = [
  { title: "aboutpage.values.v1.title", desc: "aboutpage.values.v1.desc" },
  { title: "aboutpage.values.v2.title", desc: "aboutpage.values.v2.desc" },
  { title: "aboutpage.values.v3.title", desc: "aboutpage.values.v3.desc" },
  { title: "aboutpage.values.v4.title", desc: "aboutpage.values.v4.desc" },
  { title: "aboutpage.values.v5.title", desc: "aboutpage.values.v5.desc" },
  { title: "aboutpage.values.v6.title", desc: "aboutpage.values.v6.desc" },
];

/* Premium SVG icons for capabilities */
const CapIcon = ({ index }: { index: number }) => {
  const icons = [
    // 3D Design — cube
    <svg key="cube" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    // Structural Engineering — layers
    <svg key="layers" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    // Fabrication Management — settings/gear
    <svg key="gear" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    // AV Integration — monitor/speaker
    <svg key="av" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    // Logistics & Freight — truck
    <svg key="truck" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    // On-Site Installation — tool/wrench
    <svg key="tool" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    // Graphic Production — pen tool
    <svg key="pen" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    // Content Production — film
    <svg key="film" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>,
    // Branding — award
    <svg key="award" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    // Financial Evaluation — bar chart
    <svg key="chart" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    // Communication — message circle
    <svg key="msg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  ];
  return icons[index];
};
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

const timelineYears = ["2019", "2020", "2021", "2022", "2024", "2025"] as const;
const timelineKeys: Array<{ title: TranslationKey; desc: TranslationKey }> = [
  { title: "aboutpage.tl.2019.title", desc: "aboutpage.tl.2019.desc" },
  { title: "aboutpage.tl.2020.title", desc: "aboutpage.tl.2020.desc" },
  { title: "aboutpage.tl.2021.title", desc: "aboutpage.tl.2021.desc" },
  { title: "aboutpage.tl.2022.title", desc: "aboutpage.tl.2022.desc" },
  { title: "aboutpage.tl.2024.title", desc: "aboutpage.tl.2024.desc" },
  { title: "aboutpage.tl.2025.title", desc: "aboutpage.tl.2025.desc" },
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">{t("bc.home")}</Link>
            <span className="sep">/</span>
            <span className="current">{t("bc.about")}</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("aboutpage.hero.label")}</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              {t("aboutpage.title")}
              <br />
              <span className="accent">{t("aboutpage.title.accent")}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>{t("aboutpage.hero.desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Story */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll className="sd-text">
              <span className="section-label">{t("aboutpage.story.label")}</span>
              <h2>
                {t("aboutpage.story.title.alt")}{" "}
                <span className="accent">{t("aboutpage.story.title.accent.alt")}</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                {t("aboutpage.story.p1")}
              </p>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                {t("aboutpage.story.p2")}
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="right" className="about-visual">
              <div className="about-img">
                <Image
                  src={asset("/assets/photos/duck-brand.jpg")}
                  alt="The Butter Duck UAE HQ"
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <span className="about-badge">{t("aboutpage.story.badge")}</span>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("aboutpage.values.label")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>
              {t("aboutpage.values.title.alt")} <span className="accent">{t("aboutpage.values.title.accent.alt")}</span>
            </h2>
          </RevealOnScroll>
          <div className="values-grid">
            {valueKeys.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.08}>
                <div className="value-card">
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(252,217,64,0.1) 0%, rgba(252,217,64,0.03) 100%)",
                      border: "1px solid rgba(252,217,64,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      color: "var(--color-accent)",
                    }}
                  >
                    <ValueIcon index={i} />
                  </div>
                  <h3>{t(v.title)}</h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    {t(v.desc)}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--color-bg-card)",
          borderTop: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("aboutpage.cap.label")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              {t("aboutpage.cap.title.alt")} <span className="accent">{t("aboutpage.cap.title.accent.alt")}</span>
            </h2>
          </RevealOnScroll>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
            }}
          >
            {capabilityKeys.map((key, i) => (
              <RevealOnScroll key={key} delay={i * 0.06} direction="scale" style={{ height: "100%" }}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "36px 16px",
                    border: "1px solid var(--color-border-default)",
                    borderRadius: "var(--radius-default)",
                    transition: "all 0.6s var(--ease-out)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                    color: "var(--color-text-muted)",
                  }}><CapIcon index={i} /></div>
                  <h3 style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>{t(key)}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("aboutpage.track.label.alt")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>
              {t("aboutpage.track.title.alt")} <span className="accent">{t("aboutpage.track.title.accent.alt")}</span>
            </h2>
          </RevealOnScroll>
          <div className="timeline">
            {timelineKeys.map((tl, i) => (
              <RevealOnScroll key={timelineYears[i]} delay={i * 0.1}>
                <div className="tl-item">
                  <h3>{timelineYears[i]} — {t(tl.title)}</h3>
                  <p>{t(tl.desc)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBlock />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("aboutpage.cta")}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>{t("aboutpage.cta.desc")}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link href="/contact#rfp-form" className="btn btn-lg">
              {t("aboutpage.cta.btn")} <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
