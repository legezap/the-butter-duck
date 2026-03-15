"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import Parallax from "@/components/Parallax";
import AutoPlayVideo from "@/components/AutoPlayVideo";
import TrustBar from "@/components/TrustBar";
import { asset } from "@/lib/basePath";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/I18nContext";

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const { t } = useI18n();

  const marqueeItems = [
    t("marquee.exhibition"),
    t("marquee.event"),
    t("marquee.brand"),
    t("marquee.doubledecker"),
    t("marquee.immersive"),
    t("marquee.global"),
  ];

  const services = [
    {
      icon: "\u{1F3D7}\uFE0F",
      title: t("svc.exhibition.title"),
      desc: t("svc.exhibition.desc"),
      link: "/services#exhibition-design",
    },
    {
      icon: "\u{1F4CB}",
      title: t("svc.pm.title"),
      desc: t("svc.pm.desc"),
      link: "/services#project-management",
    },
    {
      icon: "\u{1F3A8}",
      title: t("svc.event.title"),
      desc: t("svc.event.desc"),
      link: "/services#event-design",
    },
    {
      icon: "\u{1F3AC}",
      title: t("svc.media.title"),
      desc: t("svc.media.desc"),
      link: "/services#content-media",
    },
  ];

  const featuredProjects = projects
    .filter((p) => ["microsoft-leap", "nespresso-creatista", "spark-breakbulk"].includes(p.slug))
    .map((p) => ({
      slug: p.slug,
      title: `${p.client} at ${p.event}`,
      client: p.client,
      size: p.size,
      type: p.tags[0],
      image: p.image,
    }));

  const processSteps = [
    { num: "01", title: t("process.step1.title"), desc: t("process.step1.desc") },
    { num: "02", title: t("process.step2.title"), desc: t("process.step2.desc") },
    { num: "03", title: t("process.step3.title"), desc: t("process.step3.desc") },
    { num: "04", title: t("process.step4.title"), desc: t("process.step4.desc") },
  ];

  const testimonials = [
    {
      quote: t("testimonials.1.quote"),
      role: t("testimonials.1.role"),
      company: t("testimonials.1.company"),
    },
    {
      quote: t("testimonials.2.quote"),
      role: t("testimonials.2.role"),
      company: t("testimonials.2.company"),
    },
    {
      quote: t("testimonials.3.quote"),
      role: t("testimonials.3.role"),
      company: t("testimonials.3.company"),
    },
  ];

  return (
    <>
      {/* ========== 1. HERO ========== */}
      <section className="hero">
        <Parallax className="hero-bg">
          <AutoPlayVideo
            src={asset("/assets/hero-video-web.mp4")}
            poster={asset("/assets/photos/hero-microsoft-gitex.jpg")}
            className="hero-bg-img"
          />
        </Parallax>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <RevealOnScroll delay={0.1}>
            <span className="hero-badge">{t("hero.badge")}</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h1>
              {t("hero.title")}{" "}
              <span className="accent">{t("hero.title.accent")}</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <p
              className="hero-sub"
              dangerouslySetInnerHTML={{ __html: t("hero.sub") }}
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.45}>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                {t("hero.cta.start")} <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">
                {t("hero.cta.work")}
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.55}>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={80} suffix="+" />
                </div>
                <div className="label">{t("hero.stat.projects.short")}</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={10} />
                </div>
                <div className="label">{t("hero.stat.countries.short")}</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={100} suffix="%" />
                </div>
                <div className="label">{t("hero.stat.ontime.short")}</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 2. SCROLLING MARQUEE ========== */}
      <div className="scroll-text">
        <div className="scroll-text-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={i % 2 === 0 ? undefined : "accent-word"}>
              {item} &#9670;
            </span>
          ))}
        </div>
      </div>

      {/* ========== 3. TRUST BAR ========== */}
      <TrustBar />

      {/* ========== 4. SERVICES OVERVIEW ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("services.label")}</span>
            <h2 style={{ marginBottom: 56 }}>
              {t("home.services.title")} <span className="accent">{t("home.services.title.accent")}</span>
            </h2>
          </RevealOnScroll>

          <div className="services-grid">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={i * 0.12}>
                <div className="service-card">
                  <div className="service-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link href={svc.link} className="service-link">
                    {t("services.learn")} <span>&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. CINEMATIC DIVIDER — MICROSOFT ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src={asset("/assets/photos/microsoft-leap.jpg")}
            alt="Microsoft booth at LEAP — 700 sqm double decker"
            fill
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2 dangerouslySetInnerHTML={{ __html: t("cine.microsoft") }} />
              <p>{t("cine.microsoft.sub.full")}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 6. FEATURED PROJECTS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("home.featured.label")}</span>
            <h2 style={{ marginBottom: 56 }}>
              {t("home.featured.title")} <span className="accent">{t("home.featured.title.accent")}</span>
            </h2>
          </RevealOnScroll>

          <div className="portfolio-grid">
            {featuredProjects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 0.15}>
                <Link
                  href={`/projects/${project.slug}`}
                  style={{ color: "inherit" }}
                >
                  <div className="project-card">
                    <div className="project-img">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={720}
                        height={450}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="project-body">
                      <div className="project-tags">
                        <span className="tag">{project.type}</span>
                        <span className="tag">{project.size}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-client">{project.client}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/portfolio" className="btn btn-outline">
              {t("portfolio.viewall")} <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 7. OUR PROCESS ========== */}
      <section
        style={{
          padding: "120px 0",
          background: "var(--color-bg-card)",
          borderTop: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("process.label")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 64 }}>
              {t("process.title")} <span className="accent">{t("process.title.accent")}</span>
            </h2>
          </RevealOnScroll>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.12}>
                <div className="process-card">
                  <div className="process-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7b. CINEMATIC DIVIDER — NESPRESSO ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src={asset("/assets/photos/gallery/nespresso-NES-1239.jpg")}
            alt="Nespresso CreatistaPlus launch event — birds eye view"
            fill
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2>
                {t("cine.nespresso.title")}{" "}
                <span className="accent">{t("cine.nespresso.title.accent")}</span>
              </h2>
              <p>{t("cine.nespresso.desc")}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 8. TESTIMONIALS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              {t("testimonials.label")}
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 64 }}>
              {t("testimonials.title")} <span className="accent">{t("testimonials.title.accent")}</span>
            </h2>
          </RevealOnScroll>
          <div className="testimonials-grid">
            {testimonials.map((tm, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <blockquote className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{tm.quote}&rdquo;</p>
                  <footer className="testimonial-footer">
                    <div>
                      <strong>{tm.role}, {tm.company}</strong>
                    </div>
                  </footer>
                </blockquote>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. ABOUT SNAPSHOT ========== */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            {/* Text */}
            <div>
              <RevealOnScroll>
                <span className="section-label">{t("about.label")}</span>
                <h2 style={{ marginBottom: 24 }}>
                  {t("about.title")}{" "}
                  <span className="accent">{t("about.title.accent")}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <p
                  className="text-muted"
                  style={{ lineHeight: 1.8, marginBottom: 16, fontSize: "1.05rem" }}
                >
                  {t("home.about.p1")}
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.25}>
                <p
                  className="text-muted"
                  style={{ lineHeight: 1.8, marginBottom: 36, fontSize: "1.05rem" }}
                >
                  {t("home.about.p2")}
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.35}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/about" className="btn btn-outline">
                    {t("home.about.btn")}
                  </Link>
                  <Link href="/contact" className="btn btn-primary">
                    {t("about.talk")} <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Image */}
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="about-visual">
                <div className="about-img">
                  <Image
                    src={asset("/assets/photos/duck-brand.jpg")}
                    alt="The Butter Duck — the team behind your booth"
                    width={640}
                    height={480}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="about-badge">{t("home.about.badge")}</div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========== 11. CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("home.cta.title")}</h2>
            <p>{t("home.cta.desc")}</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn">
                {t("cta.start")} <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn" style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.3)", color: "var(--color-bg-dark)" }}>
                {t("cta.see")}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
