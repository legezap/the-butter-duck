"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import Parallax from "@/components/Parallax";
import ImageGallery from "@/components/ImageGallery";
import RenderReality from "@/components/RenderReality";
import NeuralSection from "@/components/NeuralSection";
import { useI18n } from "@/lib/I18nContext";
import type { Project } from "@/data/projects";

interface ProjectContentProps {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export default function ProjectContent({ project, prev, next }: ProjectContentProps) {
  const { t, locale } = useI18n();
  const isAr = locale === "ar";

  // Locale-aware project content
  const overview = (isAr && project.overview_ar) || project.overview;
  const challenge = (isAr && project.challenge_ar) || project.challenge;
  const solution = (isAr && project.solution_ar) || project.solution;
  const features = (isAr && project.features_ar) || project.features;
  const results = (isAr && project.results_ar) || project.results;

  // Separate renders from photos
  const renders = project.gallery.filter((img) => img.includes("-render-"));
  const photos = project.gallery.filter((img) => !img.includes("-render-"));

  const FEATURE_ICONS = [
    <svg key="f0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    <svg key="f1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    <svg key="f2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    <svg key="f3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://thebutterduck.com" },
                { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://thebutterduck.com/portfolio" },
                { "@type": "ListItem", position: 3, name: `${project.client} ${project.event}`, item: `https://thebutterduck.com/projects/${project.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: `${project.client} ${project.event} Exhibition Stand`,
              description: overview,
              creator: { "@type": "Organization", name: "The Butter Duck" },
              image: project.image,
              locationCreated: { "@type": "Place", name: project.location },
            },
          ]),
        }}
      />

      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">{t("bc.home")}</Link>
            <span className="sep">/</span>
            <Link href="/portfolio">{t("bc.portfolio")}</Link>
            <span className="sep">/</span>
            <span className="current">
              {project.client} {project.event}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <Parallax className="hero-bg">
          <Image
            src={project.image}
            alt={`${project.client} ${project.event}`}
            fill
            priority
            className="hero-bg-img"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <RevealOnScroll>
              <span className="hero-badge">{((isAr && project.tags_ar) || project.tags).join(" / ")}</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1>
                {project.client}
                <br />
                <span className="accent">{project.event}</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="hero-sub">
                {project.size} &bull; {project.location}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="sd-text">
              <span className="section-label">{t("case.overview")}</span>
              <h2>{t("case.overview.title")}</h2>
              <p>{overview}</p>
            </div>
            <div
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px",
                }}
              >
                <h3 style={{ marginBottom: 24 }}>
                  {t("case.specs.title")} <span className="accent">{t("case.specs.title.accent")}</span>
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("case.specs.client")}
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("case.specs.event")}
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.event}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("case.specs.location")}
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("case.specs.size")}
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.size}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("case.specs.type")}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginTop: 8,
                      }}
                    >
                      {((isAr && project.tags_ar) || project.tags).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <NeuralSection
        label={t("case.challenge")}
        title={t("case.challenge.title")}
        text={challenge}
        variant="challenge"
      />

      {/* Solution */}
      <NeuralSection
        label={t("case.solution")}
        title={t("case.solution.title")}
        text={solution}
        variant="solution"
      />

      {/* Gallery */}
      {photos.length > 0 && (
        <ImageGallery
          images={photos}
          alt={`${project.client} ${project.event}`}
        />
      )}

      {/* Render vs Reality */}
      {renders.length > 0 && (
        <RenderReality renders={renders} photos={photos} />
      )}

      {/* Key Features */}
      <section
        style={{
          padding: "72px 0",
          background: "var(--color-bg-card)",
          borderTop: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("case.features")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              {t("case.features.title")} <span className="accent">{t("case.features.title.accent")}</span>
            </h2>
          </RevealOnScroll>
          <div className="services-grid">
            {features.map((feature, i) => (
              <div key={feature.title} className="service-card">
                <div className="service-icon">
                  {FEATURE_ICONS[i % FEATURE_ICONS.length]}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 800 }}>
          <RevealOnScroll>
            <span className="section-label">{t("case.results")}</span>
            <h2 style={{ marginBottom: 32 }}>
              {t("case.results.title")} <span className="accent">{t("case.results.title.accent")}</span>
            </h2>
          </RevealOnScroll>
          <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {results.map((result, i) => (
              <li
                key={i}
                style={{
                  padding: "20px 24px 20px 52px",
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-default)",
                  borderRadius: "var(--radius-default)",
                  position: "relative",
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 20,
                    top: 20,
                    color: "var(--color-accent)",
                    fontWeight: 700,
                  }}
                >
                  &#10003;
                </span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-num">
                  <CounterAnimation
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="stat-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("case.cta")}</h2>
            <p>{t("case.cta.desc")}</p>
            <Link href="/contact#rfp-form" className="btn btn-lg">
              {t("cta.start")} <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section
        style={{
          padding: "56px 0",
          borderTop: "1px solid var(--color-border-default)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="btn btn-ghost"
            >
              <span className="arrow" style={{ transform: "rotate(180deg)" }}>
                &rarr;
              </span>{" "}
              {prev.client} {prev.event}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="btn btn-ghost"
              style={{ marginLeft: "auto" }}
            >
              {next.client} {next.event}{" "}
              <span className="arrow">&rarr;</span>
            </Link>
          ) : (
            <Link
              href="/portfolio"
              className="btn btn-ghost"
              style={{ marginLeft: "auto" }}
            >
              {t("case.allprojects")} <span className="arrow">&rarr;</span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
