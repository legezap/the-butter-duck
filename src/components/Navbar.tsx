"use client";

import { useState, useEffect, useCallback, useRef, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/I18nContext";
import { asset } from "@/lib/basePath";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Defer initial check to avoid synchronous setState in effect body
    requestAnimationFrame(handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Defer to avoid synchronous setState in effect body
    requestAnimationFrame(() => {
      setMobileOpen(false);
      setMobileAccordion(null);
    });
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleAccordion = (key: string) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesItems = [
    { icon: "◆", label: t("mega.exhibition"), desc: t("mega.exhibition.desc"), href: "/services#exhibition-design" },
    { icon: "⚙", label: t("mega.project"), desc: t("mega.project.desc"), href: "/services#project-management" },
    { icon: "✨", label: t("mega.concept"), desc: t("mega.concept.desc"), href: "/services#event-design" },
    { icon: "▶", label: t("mega.media"), desc: t("mega.media.desc"), href: "/services#content-media" },
  ];

  const portfolioItems = [
    { label: "LEAP", sub: "700 sqm Double Decker", href: "/projects/microsoft-leap" },
    { label: "Product Launch", sub: "1200 sqm Event", href: "/projects/nespresso-creatista" },
    { label: "Airport Show", sub: "Open Concept", href: "/projects/vanderlande-airport" },
    { label: "Breakbulk ME", sub: "Container Design", href: "/projects/spark-breakbulk" },
    { label: "World of Vape", sub: "Retail Stand", href: "/projects/hoosh-world-of-vape" },
    { label: "ME Coatings Show", sub: "Double Decker", href: "/projects/sipchem-adipec" },
    { label: "Gulfood Manufacturing", sub: "Hanging Signage", href: "/projects/interfood-gulfood" },
    { label: "Intersec", sub: "Compact Design", href: "/projects/altronix-intersec" },
  ];

  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const triggerRefs = useRef<Record<string, HTMLAnchorElement | null>>({
    services: null,
    portfolio: null,
  });

  const keepMega = useCallback(() => {
    clearTimeout(megaTimeoutRef.current);
  }, []);

  const showMega = useCallback((id: string) => {
    keepMega();
    setMegaOpen(id);
  }, [keepMega]);

  const hideMega = useCallback(() => {
    keepMega();
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(null), 200);
  }, [keepMega]);

  const closeMega = useCallback((id?: string) => {
    keepMega();
    setMegaOpen(null);

    if (id) {
      requestAnimationFrame(() => triggerRefs.current[id]?.focus());
    }
  }, [keepMega]);

  const focusMegaItem = useCallback((id: string, target: "first" | "last") => {
    const menu = document.getElementById(`mega-${id}`);
    const items = menu
      ? Array.from(menu.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'))
      : [];

    if (!items.length) return;

    const index = target === "first" ? 0 : items.length - 1;
    items[index]?.focus();
  }, []);

  const focusMegaItemByOffset = useCallback((id: string, offset: number) => {
    const menu = document.getElementById(`mega-${id}`);
    const items = menu
      ? Array.from(menu.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'))
      : [];

    if (!items.length) return;

    const currentIndex = items.findIndex((item) => item === document.activeElement);
    const nextIndex =
      currentIndex === -1
        ? offset > 0
          ? 0
          : items.length - 1
        : (currentIndex + offset + items.length) % items.length;

    items[nextIndex]?.focus();
  }, []);

  const handleTriggerKeyDown = useCallback((id: string) => (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "ArrowDown" || e.key === " ") {
      e.preventDefault();
      showMega(id);
      requestAnimationFrame(() => focusMegaItem(id, "first"));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      showMega(id);
      requestAnimationFrame(() => focusMegaItem(id, "last"));
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeMega();
    }
  }, [closeMega, focusMegaItem, showMega]);

  const handleMenuKeyDown = useCallback((id: string) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusMegaItemByOffset(id, 1);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      focusMegaItemByOffset(id, -1);
      return;
    }

    if (e.key === "Home") {
      e.preventDefault();
      focusMegaItem(id, "first");
      return;
    }

    if (e.key === "End") {
      e.preventDefault();
      focusMegaItem(id, "last");
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeMega(id);
    }
  }, [closeMega, focusMegaItem, focusMegaItemByOffset]);

  const handleMegaBlur = useCallback((e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      keepMega();
      setMegaOpen(null);
    }
  }, [keepMega]);

  useEffect(() => {
    return () => clearTimeout(megaTimeoutRef.current);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar" aria-label="Main navigation">
        <div className="container nav-container">
          <Link href="/" className="logo" aria-label="The Butter Duck Home">
            <Image
              src={asset("/assets/logos/tbd-logo-navbar.png")}
              alt="The Butter Duck Co."
              height={44}
              width={160}
              style={{ height: 44, width: "auto" }}
              priority
            />
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                {t("nav.home")}
              </Link>
            </li>

            <li
              onMouseEnter={() => showMega("services")}
              onMouseLeave={hideMega}
              onFocus={() => showMega("services")}
              onBlur={handleMegaBlur}
            >
              <Link
                href="/services"
                ref={(node) => {
                  triggerRefs.current.services = node;
                }}
                className={isActive("/services") ? "active" : ""}
                aria-expanded={megaOpen === "services"}
                aria-haspopup="menu"
                aria-controls="mega-services"
                onKeyDown={handleTriggerKeyDown("services")}
              >
                {t("nav.services")} <span className="dd-arrow" aria-hidden="true">▾</span>
              </Link>
              <div
                id="mega-services"
                className={`mega-menu${megaOpen === "services" ? " show" : ""}`}
                onMouseEnter={keepMega}
                onMouseLeave={hideMega}
                role="menu"
                onKeyDown={handleMenuKeyDown("services")}
              >
                {servicesItems.map((item) => (
                  <Link href={item.href} className="mega-item" role="menuitem" key={item.href}>
                    <span className="mega-icon">{item.icon}</span>
                    <div className="mega-text">
                      <h4>{item.label}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li
              onMouseEnter={() => showMega("portfolio")}
              onMouseLeave={hideMega}
              onFocus={() => showMega("portfolio")}
              onBlur={handleMegaBlur}
            >
              <Link
                href="/portfolio"
                ref={(node) => {
                  triggerRefs.current.portfolio = node;
                }}
                className={isActive("/portfolio") || pathname.startsWith("/projects") ? "active" : ""}
                aria-expanded={megaOpen === "portfolio"}
                aria-haspopup="menu"
                aria-controls="mega-portfolio"
                onKeyDown={handleTriggerKeyDown("portfolio")}
              >
                {t("nav.portfolio")} <span className="dd-arrow" aria-hidden="true">▾</span>
              </Link>
              <div
                id="mega-portfolio"
                className={`mega-menu portfolio-mm${megaOpen === "portfolio" ? " show" : ""}`}
                onMouseEnter={keepMega}
                onMouseLeave={hideMega}
                role="menu"
                onKeyDown={handleMenuKeyDown("portfolio")}
              >
                {portfolioItems.map((item) => (
                  <Link href={item.href} className="mega-item" role="menuitem" key={item.href} style={{ padding: "8px 12px" }}>
                    <div className="mega-text">
                      <h4 style={{ fontSize: "0.8rem" }}>{item.label}</h4>
                      <p style={{ fontSize: "0.68rem", color: "var(--color-text-dim)", margin: "2px 0 0", lineHeight: 1.2 }}>{item.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/about" className={isActive("/about") ? "active" : ""}>
                {t("nav.about")}
              </Link>
            </li>

            <li>
              <Link href="/contact#rfp-form" className="btn btn-nav btn-primary">
                {t("nav.quote")}
              </Link>
            </li>
          </ul>

          <LanguageSwitcher />

          <button
            className={`burger${mobileOpen ? " open" : ""}`}
            id="burger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mob-backdrop${mobileOpen ? " open" : ""}`}
        id="mobBackdrop"
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} id="mobileMenu">
        <nav>
          <Link href="/">{t("nav.home")}</Link>

          <div className="mob-accordion">
            <button
              className="mob-accordion-btn"
              aria-expanded={mobileAccordion === "services"}
              onClick={() => toggleAccordion("services")}
            >
              {t("nav.services")} <span className="dd-arrow" aria-hidden="true">▾</span>
            </button>
            <div className={`mob-accordion-panel${mobileAccordion === "services" ? " open" : ""}`}>
              {servicesItems.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>

          <div className="mob-accordion">
            <button
              className="mob-accordion-btn"
              aria-expanded={mobileAccordion === "portfolio"}
              onClick={() => toggleAccordion("portfolio")}
            >
              {t("nav.portfolio")} <span className="dd-arrow" aria-hidden="true">▾</span>
            </button>
            <div className={`mob-accordion-panel${mobileAccordion === "portfolio" ? " open" : ""}`}>
              {portfolioItems.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
              <Link href="/portfolio" style={{ marginTop: 8, color: "var(--color-accent)", fontWeight: 600 }}>View All Projects</Link>
            </div>
          </div>

          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/contact#rfp-form" className="btn btn-primary" style={{ marginTop: 16, justifyContent: "center" }}>
            {t("nav.quote")}
          </Link>
        </nav>
      </div>
    </>
  );
}
