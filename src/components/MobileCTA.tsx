"use client";
import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <Link href="/contact" className="btn btn-primary">
        Get a Quote
      </Link>
      <a
        href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa"
      >
        WhatsApp
      </a>
    </div>
  );
}
