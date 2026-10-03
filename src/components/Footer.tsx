"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/I18nContext";
import { asset } from "@/lib/basePath";
import { COMPANY, OFFICE, CONTACT } from "@/data/company-info";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="The Butter Duck Home">
              <Image
                src={asset("/assets/logos/tbd-logo-navbar.png")}
                alt="The Butter Duck Co."
                height={32}
                width={110}
                style={{ height: 32, width: "auto" }}
              />
            </Link>
            <p>{t("footer.brand")}</p>
            <div className="footer-social">
              <a href={`mailto:${CONTACT.email}`} aria-label="Email"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
            </div>
            <a href={CONTACT.telegramBot} target="_blank" rel="noopener noreferrer" className="footer-bot">
              <span className="footer-bot-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.3a1.2 1.2 0 0 0-1.62-1.38L2.9 9.6c-.98.38-.97 1.77.02 2.13l4.3 1.56 1.66 5.3c.22.72 1.14.94 1.66.39l2.4-2.5 4.35 3.2c.67.5 1.63.13 1.8-.69zM9.8 14.1l-.5 3.2-1.1-3.6 9.3-6.9z"/></svg></span>
              <span className="footer-bot-text">
                <strong>{t("footer.bot.title")}</strong>
                <small>{t("footer.bot.desc")}</small>
              </span>
            </a>
          </div>

          <div className="footer-col">
            <h4>{t("footer.services")}</h4>
            <Link href="/services#exhibition-design">{t("mega.exhibition")}</Link>
            <Link href="/services#project-management">{t("mega.project")}</Link>
            <Link href="/services#event-design">{t("mega.concept")}</Link>
            <Link href="/services#content-media">{t("mega.media")}</Link>
          </div>

          <div className="footer-col">
            <h4>{t("footer.company")}</h4>
            <Link href="/about">{t("footer.aboutus")}</Link>
            <Link href="/portfolio">{t("nav.portfolio")}</Link>
            <Link href="/contact">{t("footer.contact")}</Link>
          </div>

          <div className="footer-col">
            <h4>{t("footer.getintouch")}</h4>
            <div className="footer-contact-row"><span className="fc-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span><span>{OFFICE.short}</span></div>
            <div className="footer-contact-row"><span className="fc-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><span><a href={CONTACT.phoneTel}>{CONTACT.phone}</a></span></div>
            <div className="footer-contact-row"><span className="fc-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span><span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. License: {COMPANY.license}</p>
          <p style={{ marginTop: 8 }}>
            <Link href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</Link>
            {" | "}
            <Link href="/terms" style={{ color: "inherit", textDecoration: "underline" }}>Terms of Service</Link>
          </p>
          <p className="text-dim" style={{ fontSize: "0.75rem", marginTop: 12, lineHeight: 1.6 }}>
            All third-party trademarks, logos, and brand names displayed on this website are the property of their respective owners and are used solely to identify projects completed by The Butter Duck Company FZC LLC. Their use does not imply endorsement, sponsorship, or affiliation.
          </p>
          <p>{COMPANY.country}</p>
        </div>
      </div>
    </footer>
  );
}
