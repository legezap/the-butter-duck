"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/I18nContext";

export default function MobileCTA() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Find the hero CTA button block on the page
    const heroCta = document.querySelector(".hero-cta");
    if (!heroCta) {
      // Not on homepage — always show the bar
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show mobile bar only when hero CTA is NOT visible
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-cta-bar${visible ? "" : " hidden"}`}>
      <Link href="/contact#rfp-form" className="btn btn-primary">
        {t("mobile.quote")}
      </Link>
      <a
        href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa"
      >
        {t("mobile.whatsapp")}
      </a>
    </div>
  );
}
