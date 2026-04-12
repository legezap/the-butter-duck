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
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email">&#9993;</a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
            </div>
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
