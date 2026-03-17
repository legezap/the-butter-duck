"use client";
import Link from "next/link";
import { useI18n } from "@/lib/I18nContext";

export default function MobileCTA() {
  const { t } = useI18n();

  return (
    <div className="mobile-cta-bar">
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
