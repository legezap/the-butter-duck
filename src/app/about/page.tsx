"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatsBlock from "./StatsBlock";
import { asset } from "@/lib/basePath";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";

const valueIcons = ["\u23F0", "\uD83D\uDC41", "\uD83D\uDCCB", "\uD83C\uDFAF", "\uD83D\uDD27", "\uD83C\uDF0D"];
const valueKeys: Array<{ title: TranslationKey; desc: TranslationKey }> = [
  { title: "aboutpage.values.v1.title", desc: "aboutpage.values.v1.desc" },
  { title: "aboutpage.values.v2.title", desc: "aboutpage.values.v2.desc" },
  { title: "aboutpage.values.v3.title", desc: "aboutpage.values.v3.desc" },
  { title: "aboutpage.values.v4.title", desc: "aboutpage.values.v4.desc" },
  { title: "aboutpage.values.v5.title", desc: "aboutpage.values.v5.desc" },
  { title: "aboutpage.values.v6.title", desc: "aboutpage.values.v6.desc" },
];

const capabilityIcons = ["\uD83D\uDDA5", "\uD83C\uDFD7", "\u2699\uFE0F", "\uD83C\uDF99", "\uD83D\uDE9A", "\uD83D\uDD28", "\uD83C\uDFA8", "\uD83C\uDFAC", "\uD83D\uDCBC", "\uD83D\uDCCA", "\uD83D\uDCAC"];
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
                      fontSize: "1.8rem",
                      marginBottom: 16,
                    }}
                  >
                    {valueIcons[i]}
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
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{capabilityIcons[i]}</div>
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
