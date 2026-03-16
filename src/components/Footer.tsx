"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/I18nContext";
import { asset } from "@/lib/basePath";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="The Butter Duck Home">
              <Image
                src={asset("/assets/logos/tbd-logo-horizontal.png")}
                alt="The Butter Duck"
                height={32}
                width={160}
                style={{ height: 32, width: "auto" }}
              />
            </Link>
            <p>{t("footer.brand")}</p>
            <div className="footer-social">
              <a href="https://instagram.com/thebutterduck" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://linkedin.com/company/thebutterduck" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="mailto:hello@thebutterduck.com" aria-label="Email">&#9993;</a>
              <a href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
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
            <div className="footer-contact-row"><span>&#128205;</span><span>Marina Plaza, 29th Floor, Dubai, UAE</span></div>
            <div className="footer-contact-row"><span>&#128222;</span><span><a href="tel:+971521477966">+971 52 147 7966</a></span></div>
            <div className="footer-contact-row"><span>&#9993;</span><span><a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a></span></div>
            <div className="footer-contact-row"><span>&#9993;</span><span><a href="mailto:operations@thebutterduck.com">operations@thebutterduck.com</a></span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Butter Duck Company FZC LLC. All rights reserved. License: 4426620.01</p>
          <p>United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
