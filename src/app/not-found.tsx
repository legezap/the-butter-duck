"use client";

import Link from "next/link";
import { useI18n } from "@/lib/I18nContext";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 16 }}>
          4<span className="accent">0</span>4
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", marginBottom: 40 }}>
          {t("notfound.desc")}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            {t("notfound.home")} <span className="arrow">&rarr;</span>
          </Link>
          <Link href="/portfolio" className="btn btn-outline">
            {t("notfound.work")}
          </Link>
        </div>
      </div>
    </section>
  );
}
