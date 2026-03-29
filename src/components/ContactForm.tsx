"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import AmbientDots from "@/components/AmbientDots";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";

const SERVICE_ICONS: React.ReactNode[] = [
  <svg key="s1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  <svg key="s2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>,
  <svg key="s3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>,
  <svg key="s4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
];

const SERVICE_KEYS: { id: string; labelKey: TranslationKey }[] = [
  { id: "exhibition-design", labelKey: "contact.svc.exhibition" },
  { id: "project-management", labelKey: "contact.svc.pm" },
  { id: "event-design", labelKey: "contact.svc.event" },
  { id: "content-media", labelKey: "contact.svc.media" },
];

const BOOTH_SIZE_KEYS: TranslationKey[] = [
  "contact.size.under20",
  "contact.size.20_50",
  "contact.size.50_100",
  "contact.size.100_200",
  "contact.size.200_500",
  "contact.size.500plus",
  "contact.size.notsure",
];

const BUDGET_KEYS: TranslationKey[] = [
  "contact.budget.under50",
  "contact.budget.50_150",
  "contact.budget.150_400",
  "contact.budget.400_1m",
  "contact.budget.1mplus",
  "contact.budget.discuss",
];

function generateRef(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(1000 + Math.random() * 9000));
  return `TBD-${y}${m}${d}-${rand}`;
}


export default function ContactForm() {
  const { t } = useI18n();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");

  // Form state
  const [service, setService] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDates, setEventDates] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [boothSize, setBoothSize] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Scroll to form when navigated with #rfp-form hash
  useEffect(() => {
    if (window.location.hash === "#rfp-form") {
      setTimeout(() => {
        const el = document.getElementById("rfp-form");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  function validate(): boolean {
    const errs: Record<string, string> = {};

    if (step === 1 && !service) {
      errs.service = t("contact.error.service");
    }
    if (step === 2) {
      if (!eventName.trim()) errs.eventName = t("contact.error.eventName");
    }
    if (step === 3) {
      if (!name.trim()) errs.name = t("contact.error.name");
      if (!email.trim()) errs.email = t("contact.error.email");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errs.email = t("contact.error.emailInvalid");
      if (!company.trim()) errs.company = t("contact.error.company");
    }
    if (step === 4) {
      if (!consent) errs.consent = t("contact.error.consent");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function scrollToForm() {
    const el = document.getElementById("rfp-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function next() {
    if (validate()) {
      setStep((s) => Math.min(s + 1, 4));
      scrollToForm();
    }
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 1));
    scrollToForm();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const ref = generateRef();

    // camelCase field names — n8n Airtable node maps these to Title Case columns
    // Telegram node reads from Airtable output ($json.fields.xxx), not webhook body
    const payload = {
      _subject: `New RFP: ${ref}`,
      reference: ref,
      service,
      eventName,
      eventDates,
      eventLocation,
      boothSize,
      budget,
      name,
      company,
      email,
      phone,
      country,
      notes,
    };

    try {
      const res = await fetch("https://pavellegeza.app.n8n.cloud/webhook/inbound-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setRefCode(ref);
      setSubmitted(true);
    } catch {
      alert(t("contact.error.alert"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">{t("bc.home")}</Link>
            <span className="sep">/</span>
            <span className="current">{t("bc.contact")}</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <AmbientDots seed={91} />
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">{t("contact.hero.label")}</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              {t("contact.title")}
              <br />
              <span className="accent">{t("contact.title.accent")}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>{t("contact.hero.desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            {/* Left — Direct Contact */}
            <RevealOnScroll>
              <div>
                <span className="section-label">{t("contact.direct")}</span>
                <h2 style={{ marginBottom: 40 }}>
                  {t("contact.direct.title")} <span className="accent">{t("contact.direct.title.accent")}</span>
                </h2>

                <div className="contact-item">
                  <div className="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                  <div className="ci-text">
                    <h4>{t("contact.office")}</h4>
                    <p>
                      Marina Plaza, 29th Floor
                      <br />
                      Dubai Marina, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                  <div className="ci-text">
                    <h4>{t("contact.phone.label")}</h4>
                    <a href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F">+971 52 147 7966</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                  <div className="ci-text">
                    <h4>{t("contact.email")}</h4>
                    <a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></div>
                  <div className="ci-text">
                    <h4>{t("contact.social")}</h4>
                    <a
                      href="https://instagram.com/thebutterduck"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @thebutterduck on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — RFP Form */}
            <RevealOnScroll direction="right" delay={0.15}>
              <div id="rfp-form" className="rfp-wrap">
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: "3rem", marginBottom: 16 }}>{"\u2705"}</div>
                    <h3 style={{ marginBottom: 8 }}>{t("contact.success.heading")}</h3>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                      {t("contact.success.reftext")}{" "}
                      <strong style={{ color: "var(--color-accent)" }}>{refCode}</strong>.
                      <br />
                      {t("contact.success.followup")}
                    </p>
                    <Link href="/" className="btn btn-primary">
                      {t("contact.success.home")} <span className="arrow">&rarr;</span>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>

                    {/* Progress Bar */}
                    <div className="rfp-progress">
                      {[1, 2, 3, 4].map((s) => (
                        <div
                          key={s}
                          className={`rfp-bar${s <= step ? " done" : ""}`}
                        />
                      ))}
                    </div>

                    {/* Step Indicator */}
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-dim)",
                        marginBottom: 24,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {t("contact.stepof").replace("{step}", String(step))}
                    </p>

                    {/* Step 1 — Service Selection */}
                    {step === 1 && (
                      <div>
                        <h3 style={{ marginBottom: 20 }}>
                          {t("contact.step1.title")}
                        </h3>
                        <div className="svc-grid">
                          {SERVICE_KEYS.map((opt, i) => (
                            <div
                              key={opt.id}
                              className={`svc-opt${service === opt.id ? " selected" : ""}`}
                              onClick={() => {
                                setService(opt.id);
                                setErrors({});
                              }}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  setService(opt.id);
                                  setErrors({});
                                }
                              }}
                            >
                              <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>
                                {SERVICE_ICONS[i]}
                              </div>
                              <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                                {t(opt.labelKey)}
                              </div>
                            </div>
                          ))}
                        </div>
                        {errors.service && (
                          <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: 12 }}>
                            {errors.service}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Step 2 — Project Details */}
                    {step === 2 && (
                      <div>
                        <h3 style={{ marginBottom: 20 }}>{t("contact.step2.title")}</h3>

                        <div className="form-group">
                          <label htmlFor="eventName">{t("contact.field.eventName")}</label>
                          <input
                            id="eventName"
                            type="text"
                            className="form-input"
                            placeholder={t("contact.field.eventName.placeholder")}
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                          />
                          {errors.eventName && (
                            <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: 4 }}>
                              {errors.eventName}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="eventDates">{t("contact.field.eventDates")}</label>
                          <input
                            id="eventDates"
                            type="text"
                            className="form-input"
                            placeholder={t("contact.field.eventDates.placeholder")}
                            value={eventDates}
                            onChange={(e) => setEventDates(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="eventLocation">{t("contact.field.eventLocation")}</label>
                          <input
                            id="eventLocation"
                            type="text"
                            className="form-input"
                            placeholder={t("contact.field.eventLocation.placeholder")}
                            value={eventLocation}
                            onChange={(e) => setEventLocation(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="boothSize">{t("contact.field.boothSize")}</label>
                          <select
                            id="boothSize"
                            className="form-input"
                            value={boothSize}
                            onChange={(e) => setBoothSize(e.target.value)}
                          >
                            <option value="">{t("contact.field.boothSize.placeholder")}</option>
                            {BOOTH_SIZE_KEYS.map((key) => {
                              const label = t(key);
                              return (
                                <option key={key} value={label}>
                                  {label}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="budget">{t("contact.field.budget")}</label>
                          <select
                            id="budget"
                            className="form-input"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                          >
                            <option value="">{t("contact.field.budget.placeholder")}</option>
                            {BUDGET_KEYS.map((key) => {
                              const label = t(key);
                              return (
                                <option key={key} value={label}>
                                  {label}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3 — Contact Info */}
                    {step === 3 && (
                      <div>
                        <h3 style={{ marginBottom: 20 }}>{t("contact.step3.heading")}</h3>

                        <div className="form-group">
                          <label htmlFor="contactName">{t("contact.field.name")}</label>
                          <input
                            id="contactName"
                            type="text"
                            className="form-input"
                            placeholder={t("contact.field.name.placeholder")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          {errors.name && (
                            <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: 4 }}>
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactCompany">{t("contact.field.company")}</label>
                          <input
                            id="contactCompany"
                            type="text"
                            className="form-input"
                            placeholder={t("contact.field.company.placeholder")}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                          {errors.company && (
                            <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: 4 }}>
                              {errors.company}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactEmail">{t("contact.field.email")}</label>
                          <input
                            id="contactEmail"
                            type="email"
                            className="form-input"
                            placeholder={t("contact.field.email.placeholder")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: 4 }}>
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactPhone">{t("contact.field.phone")}</label>
                          <input
                            id="contactPhone"
                            type="tel"
                            className="form-input"
                            placeholder={t("contact.field.phone.placeholder")}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactCountry">{t("contact.field.country")}</label>
                          <input
                            id="contactCountry"
                            type="text"
                            className="form-input"
                            placeholder={t("contact.field.country.placeholder")}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4 — Notes & Submit */}
                    {step === 4 && (
                      <div>
                        <h3 style={{ marginBottom: 20 }}>
                          {t("contact.step4.title")}
                        </h3>

                        <div className="form-group">
                          <label htmlFor="notes">{t("contact.field.notes")}</label>
                          <textarea
                            id="notes"
                            className="form-input"
                            placeholder={t("contact.field.notes.placeholder")}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                              cursor: "pointer",
                              textTransform: "none",
                              letterSpacing: "0",
                              lineHeight: 1.5,
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={consent}
                              onChange={(e) => {
                                setConsent(e.target.checked);
                                setErrors({});
                              }}
                              style={{ marginTop: 3, accentColor: "#fcd940" }}
                            />
                            {t("contact.consent.form")}
                          </label>
                          {errors.consent && (
                            <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: 4 }}>
                              {errors.consent}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="form-nav">
                      {step > 1 ? (
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={prev}
                        >
                          &larr; {t("contact.back")}
                        </button>
                      ) : (
                        <span />
                      )}

                      {step < 4 ? (
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={next}
                        >
                          {t("contact.next.btn")} <span className="arrow">&rarr;</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={submitting}
                        >
                          {submitting ? t("contact.submit.sending") : t("contact.submit.btn")}{" "}
                          {!submitting && <span className="arrow">&rarr;</span>}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>{t("contact.cta.title")}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>{t("contact.cta.desc")}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <a
              href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
            >
              {t("contact.cta.btn")} <span className="arrow">&rarr;</span>
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
