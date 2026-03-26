"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import { asset } from "@/lib/basePath";
import { useI18n } from "@/lib/I18nContext";

const events = [
  { icon: "\u25C6", nameKey: "defencepage.events.idex", descKey: "defencepage.events.idex.desc", locKey: "defencepage.events.idex.loc" },
  { icon: "\u2708", nameKey: "defencepage.events.wds", descKey: "defencepage.events.wds.desc", locKey: "defencepage.events.wds.loc" },
  { icon: "\u2605", nameKey: "defencepage.events.singapore", descKey: "defencepage.events.singapore.desc", locKey: "defencepage.events.singapore.loc" },
  { icon: "\u2690", nameKey: "defencepage.events.dsa", descKey: "defencepage.events.dsa.desc", locKey: "defencepage.events.dsa.loc" },
  { icon: "\u2699", nameKey: "defencepage.events.indo", descKey: "defencepage.events.indo.desc", locKey: "defencepage.events.indo.loc" },
  { icon: "\u2666", nameKey: "defencepage.events.others", descKey: "defencepage.events.others.desc", locKey: "defencepage.events.others.loc" },
] as const;

const standTypes = [
  { icon: "\u25A0", nameKey: "defencepage.stands.turnkey", descKey: "defencepage.stands.turnkey.desc" },
  { icon: "\u25B2", nameKey: "defencepage.stands.double", descKey: "defencepage.stands.double.desc" },
  { icon: "\u25CF", nameKey: "defencepage.stands.upgrade", descKey: "defencepage.stands.upgrade.desc" },
  { icon: "\u2605", nameKey: "defencepage.stands.display", descKey: "defencepage.stands.display.desc" },
] as const;

const processSteps = [
  { nameKey: "defencepage.process.s1", descKey: "defencepage.process.s1.desc" },
  { nameKey: "defencepage.process.s2", descKey: "defencepage.process.s2.desc" },
  { nameKey: "defencepage.process.s3", descKey: "defencepage.process.s3.desc" },
  { nameKey: "defencepage.process.s4", descKey: "defencepage.process.s4.desc" },
  { nameKey: "defencepage.process.s5", descKey: "defencepage.process.s5.desc" },
] as const;

const localBenefits = [
  "defencepage.local.b1",
  "defencepage.local.b2",
  "defencepage.local.b3",
  "defencepage.local.b4",
  "defencepage.local.b5",
  "defencepage.local.b6",
] as const;

const agencyBenefits = [
  "defencepage.agency.b1",
  "defencepage.agency.b2",
  "defencepage.agency.b3",
  "defencepage.agency.b4",
  "defencepage.agency.b5",
] as const;

export default function DefencePage() {
  const { t } = useI18n();

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">{t("bc.home")}</Link>
            <span className="sep">/</span>
            <Link href="/services">{t("bc.services")}</Link>
            <span className="sep">/</span>
            <span className="current">{t("defencepage.hero.label")}</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" style={{ minHeight: "80vh" }}>
        <div className="hero-bg">
          <Image
            src={asset("/assets/photos/hero-green-corridor.jpg")}
            alt="Exhibition stand corridor with dramatic green lighting"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <RevealOnScroll>
              <div className="hero-badge">{t("defencepage.hero.label")}</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1>
                {t("defencepage.title")} <span className="accent">{t("defencepage.title.accent")}</span>
                <br />
                {t("defencepage.title.suffix")}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="hero-sub">{t("defencepage.hero.desc")}</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="hero-cta">
                <Link href="/contact#rfp-form" className="btn btn-primary btn-lg">
                  {t("defencepage.cta.proposal")} <span className="arrow">&rarr;</span>
                </Link>
                <a href="#why-local" className="btn btn-outline btn-lg">
                  {t("defencepage.cta.why")} <span className="arrow">&darr;</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Events We Cover */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">{t("defencepage.events.label")}</span>
              <h2>
                {t("defencepage.events.title")} <span className="accent">{t("defencepage.events.accent")}</span>
              </h2>
              <p>{t("defencepage.events.desc")}</p>
            </div>
          </RevealOnScroll>
          <div className="services-grid">
            {events.map((ev) => (
              <RevealOnScroll key={ev.nameKey}>
                <div className="service-card">
                  <div className="service-icon" aria-hidden="true">{ev.icon}</div>
                  <h3>{t(ev.nameKey)}</h3>
                  <p>{t(ev.descKey)}</p>
                  <span className="service-link">{t(ev.locKey)}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Production */}
      <section id="why-local">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll className="about-text">
              <span className="section-label">{t("defencepage.local.label")}</span>
              <h2>
                {t("defencepage.local.title")} <span className="accent">{t("defencepage.local.accent")}</span> {t("defencepage.local.suffix")}
              </h2>
              <p>{t("defencepage.local.p1")}</p>
              <p>{t("defencepage.local.p2")}</p>
              <ul style={{ marginTop: 24, listStyle: "none", padding: 0 }}>
                {localBenefits.map((bk) => (
                  <li
                    key={bk}
                    style={{
                      padding: "8px 0 8px 28px",
                      position: "relative",
                      color: "var(--text-muted)",
                      fontSize: "0.92rem",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>&#10003;</span>
                    {t(bk)}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll className="about-visual" direction="right">
              <div className="about-img">
                <Image
                  src={asset("/assets/photos/ik-group-adipec.jpg")}
                  alt="Exhibition stand at ADIPEC built by PerDuck"
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="about-badge">{t("defencepage.local.label")}</div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Stand Types */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">{t("defencepage.stands.label")}</span>
              <h2>
                {t("defencepage.stands.title")} <span className="accent">{t("defencepage.stands.accent")}</span>
              </h2>
              <p>{t("defencepage.stands.desc")}</p>
            </div>
          </RevealOnScroll>
          <div className="services-grid">
            {standTypes.map((st) => (
              <RevealOnScroll key={st.nameKey}>
                <div className="service-card">
                  <div className="service-icon" aria-hidden="true">{st.icon}</div>
                  <h3>{t(st.nameKey)}</h3>
                  <p>{t(st.descKey)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">{t("defencepage.process.label")}</span>
              <h2>
                {t("defencepage.process.title")} <span className="accent">{t("defencepage.process.accent")}</span>
              </h2>
              <p>{t("defencepage.process.desc")}</p>
            </div>
          </RevealOnScroll>
          <div className="timeline">
            {processSteps.map((step) => (
              <RevealOnScroll key={step.nameKey}>
                <div className="tl-item">
                  <h3>{t(step.nameKey)}</h3>
                  <p>{t(step.descKey)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <RevealOnScroll>
              <div className="stat-item">
                <CounterAnimation target={80} suffix="+" />
                <div className="stat-text">{t("hero.stat.projects")}</div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="stat-item">
                <CounterAnimation target={6} />
                <div className="stat-text">{t("hero.stat.countries")}</div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="stat-item">
                <CounterAnimation target={700} suffix=" sqm" />
                <div className="stat-text">{t("hero.stat.sqm")}</div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="stat-item">
                <CounterAnimation target={98} suffix="%" />
                <div className="stat-text">{t("hero.stat.ontime")}</div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Agency Partner */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="about-grid" style={{ direction: "rtl" }}>
            <RevealOnScroll className="about-text" style={{ direction: "ltr" }}>
              <span className="section-label">{t("defencepage.agency.label")}</span>
              <h2>
                {t("defencepage.agency.title")} <span className="accent">{t("defencepage.agency.accent")}</span>
              </h2>
              <p>{t("defencepage.agency.p1")}</p>
              <p>{t("defencepage.agency.p2")}</p>
              <ul style={{ marginTop: 24, listStyle: "none", padding: 0 }}>
                {agencyBenefits.map((bk) => (
                  <li
                    key={bk}
                    style={{
                      padding: "8px 0 8px 28px",
                      position: "relative",
                      color: "var(--text-muted)",
                      fontSize: "0.92rem",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>&#10003;</span>
                    {t(bk)}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll className="about-visual" direction="left" style={{ direction: "ltr" }}>
              <div className="about-img">
                <Image
                  src={asset("/assets/photos/microsoft-leap.jpg")}
                  alt="Microsoft LEAP exhibition pavilion built by PerDuck"
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="about-badge">{t("defencepage.agency.label")}</div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("defencepage.cta.title")}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>{t("defencepage.cta.desc")}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact#rfp-form" className="btn btn-primary btn-lg">
                {t("defencepage.cta.proposal")} <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
