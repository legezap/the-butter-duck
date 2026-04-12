"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import Parallax from "@/components/Parallax";
import AutoPlayVideo from "@/components/AutoPlayVideo";
import TrustBar from "@/components/TrustBar";
import Marquee from "@/components/Marquee";
import DuckWater from "@/components/DuckWater";
import { asset } from "@/lib/basePath";
import {
  FEATURED_PROJECT_SLUGS,
  HOME_MARQUEE_KEYS,
  HOME_PROCESS_STEPS,
  HOME_SERVICE_ITEMS,
  HOME_TESTIMONIALS,
} from "@/data/home";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/I18nContext";

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

const SERVICE_ICONS = {
  build: (
    <svg key="build" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
  ),
  clipboard: (
    <svg key="clip" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>
  ),
  sparkle: (
    <svg key="sparkle" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>
  ),
  play: (
    <svg key="play" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  ),
} as const;

export default function HomePage() {
  const { t } = useI18n();
  const heroBadge = t("hero.badge");
  const heroTitle = t("hero.title");
  const heroTitleAccent = t("hero.title.accent");
  const normalizeHeroCopy = (value: string) =>
    value.toLowerCase().replace(/\s+/g, " ").trim();
  const fullHeroTitle = [heroTitle, heroTitleAccent].filter(Boolean).join(" ");
  const showHeroBadge = normalizeHeroCopy(heroBadge) !== normalizeHeroCopy(fullHeroTitle);

  const marqueeItems = HOME_MARQUEE_KEYS.map((key) => t(key));

  const services = HOME_SERVICE_ITEMS.map((service) => ({
    icon: SERVICE_ICONS[service.iconKey],
    title: t(service.titleKey),
    desc: t(service.descKey),
    link: service.link,
  }));

  const featuredProjects = projects
    .filter((p) => FEATURED_PROJECT_SLUGS.includes(p.slug as (typeof FEATURED_PROJECT_SLUGS)[number]))
    .map((p) => ({
      slug: p.slug,
      title: `${p.client} at ${p.event}`,
      client: p.client,
      size: p.size,
      type: p.tags[0],
      image: p.image,
    }));

  const processSteps = HOME_PROCESS_STEPS.map((step) => ({
    num: step.num,
    title: t(step.titleKey),
    desc: t(step.descKey),
  }));

  const testimonials = HOME_TESTIMONIALS.map((item) => ({
    quote: t(item.quoteKey),
    role: t(item.roleKey),
    company: t(item.companyKey),
  }));

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
        <div>
          <div className="container hero-content">
            {showHeroBadge ? (
              <span className="hero-badge hero-badge-home">{heroBadge}</span>
            ) : null}

            <h1>
              {heroTitle ? `${heroTitle} ` : ""}
              <span className="accent">{heroTitleAccent}</span>
            </h1>

            <p className="hero-sub">
              {t("hero.sub")
                .split(/(<strong>.*?<\/strong>)/g)
                .map((part, i) => {
                  const match = part.match(/^<strong>(.*)<\/strong>$/);
                  if (match) return <strong key={i}>{match[1]}</strong>;
                  return part;
                })}
            </p>

            <div className="hero-cta">
              <Link href="/contact#rfp-form" className="btn btn-primary btn-lg">
                {t("hero.cta.start")} <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">
                {t("hero.cta.work")}
              </Link>
            </div>

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
                  <CounterAnimation target={98} suffix="%+" />
                </div>
                <div className="label">{t("hero.stat.ontime.short")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. TRUST BAR ========== */}
      <TrustBar />

      {/* ========== 3. SCROLLING MARQUEE ========== */}
      <Marquee items={marqueeItems} speed={1.2} />

      {/* ========== 4. SERVICES OVERVIEW ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("services.label")}</span>
            <h2 className="mb-56">
              {t("home.services.title")} <span className="accent">{t("home.services.title.accent")}</span>
            </h2>
          </RevealOnScroll>

          <div className="services-grid">
            {services.map((svc) => (
              <div key={svc.title} className="service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <Link href={svc.link} className="service-link">
                  {t("services.learn")} <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. CINEMATIC DIVIDER — MICROSOFT ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src={asset("/assets/photos/microsoft-leap.jpg")}
            alt="700 sqm double decker booth at LEAP"
            fill
            loading="lazy"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="cine-divider-content container">
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: t("cine.microsoft") }} />
            <p>{t("cine.microsoft.sub.full")}</p>
          </div>
        </div>
      </section>

      {/* ========== 6. FEATURED PROJECTS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("home.featured.label")}</span>
            <h2 className="mb-56">
              {t("home.featured.title")} <span className="accent">{t("home.featured.title.accent")}</span>
            </h2>
          </RevealOnScroll>

          <div className="portfolio-grid">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
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
                      loading="lazy"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
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
      <section className="section-bg-card">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">
              {t("process.label")}
            </span>
            <h2 className="mb-56">
              {t("process.title")} <span className="accent">{t("process.title.accent")}</span>
            </h2>
          </RevealOnScroll>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card">
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7b. CINEMATIC DIVIDER — NESPRESSO ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src={asset("/assets/photos/gallery/nespresso-NES-1239.jpg")}
            alt="1200 sqm product launch event — birds eye view"
            fill
            loading="lazy"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="cine-divider-content container">
          <div>
            <h2>
              {t("cine.nespresso.title")}{" "}
              <span className="accent">{t("cine.nespresso.title.accent")}</span>
            </h2>
            <p>{t("cine.nespresso.desc")}</p>
          </div>
        </div>
      </section>

      {/* ========== 8. TESTIMONIALS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">
              {t("testimonials.label")}
            </span>
            <h2 className="mb-56">
              {t("testimonials.title")} <span className="accent">{t("testimonials.title.accent")}</span>
            </h2>
          </RevealOnScroll>
          <div className="testimonials-grid">
            {testimonials.map((tm, i) => (
              <blockquote key={i} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{tm.quote}&rdquo;</p>
                <footer className="testimonial-footer">
                  <div>
                    <strong>{tm.role}, {tm.company}</strong>
                  </div>
                </footer>
              </blockquote>
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
              <p
                className="text-muted body-text"
                style={{ marginBottom: 16, fontSize: "1.05rem" }}
              >
                {t("home.about.p1")}
              </p>
              <p
                className="text-muted body-text"
                style={{ marginBottom: 36, fontSize: "1.05rem" }}
              >
                {t("home.about.p2")}
              </p>
              <div className="tag-list">
                <Link href="/about" className="btn btn-outline">
                  {t("home.about.btn")}
                </Link>
                <Link href="/contact#rfp-form" className="btn btn-primary">
                  {t("about.talk")} <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Duck with water effect */}
            <div className="about-visual">
              <DuckWater badge={t("home.about.badge")} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 11. CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("home.cta.title")}</h2>
            <p>{t("home.cta.desc")}</p>
            <div className="flex-center-wrap">
              <Link href="/contact#rfp-form" className="btn">
                {t("cta.start")} <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn btn-outline-dark">
                {t("cta.see")}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
