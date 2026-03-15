"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { asset } from "@/lib/basePath";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";

const services: Array<{
  id: string;
  labelKey: TranslationKey;
  titleKey: TranslationKey;
  image: string;
  reverse: boolean;
  bulletKeys: TranslationKey[];
}> = [
  {
    id: "exhibition-design",
    labelKey: "servicespage.exhibition.label",
    titleKey: "servicespage.exhibition.title",
    image: asset("/assets/photos/microsoft-leap.jpg"),
    reverse: false,
    bulletKeys: [
      "servicespage.exhibition.b1",
      "servicespage.exhibition.b2",
      "servicespage.exhibition.b3",
      "servicespage.exhibition.b4",
      "servicespage.exhibition.b5",
      "servicespage.exhibition.b6",
    ],
  },
  {
    id: "project-management",
    labelKey: "servicespage.pm.label",
    titleKey: "servicespage.pm.title",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
    reverse: true,
    bulletKeys: [
      "servicespage.pm.b1",
      "servicespage.pm.b2",
      "servicespage.pm.b3",
      "servicespage.pm.b4",
      "servicespage.pm.b5",
      "servicespage.pm.b6",
    ],
  },
  {
    id: "event-design",
    labelKey: "servicespage.event.label",
    titleKey: "servicespage.event.title",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    reverse: false,
    bulletKeys: [
      "servicespage.event.b1",
      "servicespage.event.b2",
      "servicespage.event.b3",
      "servicespage.event.b4",
      "servicespage.event.b5",
      "servicespage.event.b6",
    ],
  },
  {
    id: "content-media",
    labelKey: "servicespage.media.label",
    titleKey: "servicespage.media.title",
    image: asset("/assets/photos/gallery/nespresso-NES-135.jpg"),
    reverse: true,
    bulletKeys: [
      "servicespage.media.b1",
      "servicespage.media.b2",
      "servicespage.media.b3",
      "servicespage.media.b4",
      "servicespage.media.b5",
      "servicespage.media.b6",
    ],
  },
];

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">{t("bc.home")}</Link>
            <span className="sep">/</span>
            <span className="current">{t("bc.services")}</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("servicespage.label")}</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              {t("servicespage.title")}
              <br />
              <span className="accent">{t("servicespage.title.accent")}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>{t("servicespage.hero.desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Sticky Anchor Nav */}
      <nav className="anchor-nav" aria-label="Service navigation">
        <div className="anchor-nav-inner">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="anchor-link">
              {t(s.labelKey)}
            </a>
          ))}
        </div>
      </nav>

      {/* Service Detail Sections */}
      <section>
        <div className="container">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className={`service-detail${s.reverse ? " reverse" : ""}`}
            >
              <RevealOnScroll className="sd-text" delay={0.1}>
                <span className="section-label">{t(s.labelKey)}</span>
                <h2>{t(s.titleKey)}</h2>
                <ul>
                  {s.bulletKeys.map((bk) => (
                    <li key={bk}>{t(bk)}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 32 }}>
                  <Link href="/contact" className="btn btn-primary">
                    {t("servicespage.quote")} <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll
                className="sd-visual"
                direction={s.reverse ? "left" : "right"}
                delay={0.2}
              >
                <Image
                  src={s.image}
                  alt={t(s.titleKey)}
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("servicespage.cta.title")}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>{t("servicespage.cta.desc")}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link href="/contact" className="btn btn-lg">
              {t("servicespage.cta.btn")} <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
