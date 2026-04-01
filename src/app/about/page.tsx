"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import AmbientDots from "@/components/AmbientDots";
import ValuesSection from "@/components/ValuesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import StatsBlock from "./StatsBlock";
import { asset } from "@/lib/basePath";
import { useI18n } from "@/lib/I18nContext";
import { TIMELINE_YEARS, TIMELINE_KEYS } from "@/data/timeline";

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
        <AmbientDots seed={55} />
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("aboutpage.hero.label")}</span>
            <h1>
              {t("aboutpage.title")}
              <br />
              <span className="accent">{t("aboutpage.title.accent")}</span>
            </h1>
            <p>{t("aboutpage.hero.desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Story */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="sd-text">
              <span className="section-label">{t("aboutpage.story.label")}</span>
              <h2>
                {t("aboutpage.story.title.alt")}{" "}
                <span className="accent">{t("aboutpage.story.title.accent.alt")}</span>
              </h2>
              <p className="body-text" style={{ marginBottom: 16 }}>
                {t("aboutpage.story.p1")}
              </p>
              <p className="body-text">
                {t("aboutpage.story.p2")}
              </p>
            </div>
            <div className="about-visual">
              <div className="about-img">
                <Image
                  src={asset("/assets/photos/duck-brand.jpg")}
                  alt="The Butter Duck UAE HQ"
                  width={720}
                  height={540}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <span className="about-badge">{t("aboutpage.story.badge")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid — Holographic Depth Cards */}
      <ValuesSection />

      {/* Capabilities Grid — 3D Tilt + Draw Animation */}
      <CapabilitiesSection />

      {/* Timeline */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label section-header-center">
              {t("aboutpage.track.label.alt")}
            </span>
            <h2 className="section-title-center" style={{ marginBottom: 16 }}>
              {t("aboutpage.track.title.alt")} <span className="accent">{t("aboutpage.track.title.accent.alt")}</span>
            </h2>
          </RevealOnScroll>
          <div className="timeline">
            {TIMELINE_KEYS.map((tl, i) => (
              <div key={TIMELINE_YEARS[i]} className="tl-item">
                <h3>{TIMELINE_YEARS[i]} — {t(tl.title)}</h3>
                <p>{t(tl.desc)}</p>
              </div>
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
            <p>{t("aboutpage.cta.desc")}</p>
            <Link href="/contact#rfp-form" className="btn btn-lg">
              {t("aboutpage.cta.btn")} <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
