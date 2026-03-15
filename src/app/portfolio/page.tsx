"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/I18nContext";

export default function PortfolioPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">{t("bc.home")}</Link>
            <span className="sep">/</span>
            <span className="current">{t("bc.portfolio")}</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("portfoliopage.label")}</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              {t("portfolio.title")}
              <br />
              <span className="accent">{t("portfolio.title.accent")}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>{t("portfoliopage.desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 0.1}>
                <Link
                  href={`/projects/${project.slug}`}
                  style={{ display: "block", color: "inherit" }}
                >
                  <article className="project-card">
                    <div className="project-img">
                      <Image
                        src={project.image}
                        alt={`${project.client} — ${project.event}`}
                        width={720}
                        height={450}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="project-body">
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3>{project.client}</h3>
                      <p className="project-client">{project.event}</p>
                      <p>{project.overview.slice(0, 120)}&hellip;</p>
                      <div className="project-specs">
                        <div className="spec">
                          <strong>{project.size}</strong>
                          {t("portfoliopage.spec.footprint")}
                        </div>
                        <div className="spec">
                          <strong>{project.location}</strong>
                          {t("portfoliopage.spec.location")}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("portfoliopage.cta.title")}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>{t("portfoliopage.cta.desc")}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link href="/contact" className="btn btn-lg">
              {t("portfoliopage.cta.btn")} <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
