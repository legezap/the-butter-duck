"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useI18n } from "@/lib/I18nContext";
import type { TranslationKey } from "@/lib/i18n";

const SERVICE_KEYS: { id: string; labelKey: TranslationKey; icon: string }[] = [
  { id: "exhibition-design", labelKey: "contact.svc.exhibition", icon: "\uD83C\uDFD7" },
  { id: "project-management", labelKey: "contact.svc.pm", icon: "\uD83D\uDCCB" },
  { id: "event-design", labelKey: "contact.svc.event", icon: "\uD83C\uDFAD" },
  { id: "content-media", labelKey: "contact.svc.media", icon: "\uD83C\uDFAC" },
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

const STORAGE_KEY = "tbd-rfp-draft";
const DRAFT_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

// Fields that contain PII — stored separately so we can warn or skip
const PII_FIELDS = ["name", "email", "phone"];

interface DraftEnvelope {
  ts: number;           // timestamp when saved
  data: Record<string, string>;
}

function loadDraft(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const envelope: DraftEnvelope = JSON.parse(raw);
    // Expire after 24h — don't leave PII sitting forever
    if (Date.now() - envelope.ts > DRAFT_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return envelope.data || {};
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

function saveDraft(data: Record<string, string>) {
  if (typeof window === "undefined") return;
  try {
    const envelope: DraftEnvelope = { ts: Date.now(), data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
  } catch { /* quota exceeded — ignore */ }
}

function clearDraft() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
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
  const [draftRestored, setDraftRestored] = useState(false);

  // Restore saved draft on mount + scroll to form if hash present
  useEffect(() => {
    const d = loadDraft();
    if (Object.keys(d).length > 0) {
      if (d.service) setService(d.service);
      if (d.eventName) setEventName(d.eventName);
      if (d.eventDates) setEventDates(d.eventDates);
      if (d.eventLocation) setEventLocation(d.eventLocation);
      if (d.boothSize) setBoothSize(d.boothSize);
      if (d.budget) setBudget(d.budget);
      if (d.name) setName(d.name);
      if (d.company) setCompany(d.company);
      if (d.email) setEmail(d.email);
      if (d.phone) setPhone(d.phone);
      if (d.country) setCountry(d.country);
      if (d.notes) setNotes(d.notes);
      if (d.step) setStep(Number(d.step) || 1);
      setDraftRestored(true);
    }

    // Scroll to form when navigated with #rfp-form hash
    if (window.location.hash === "#rfp-form") {
      setTimeout(() => {
        const el = document.getElementById("rfp-form");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  function handleClearDraft() {
    clearDraft();
    setService(""); setEventName(""); setEventDates(""); setEventLocation("");
    setBoothSize(""); setBudget(""); setName(""); setCompany("");
    setEmail(""); setPhone(""); setCountry(""); setNotes("");
    setConsent(false); setStep(1); setDraftRestored(false); setErrors({});
  }

  // Auto-save draft on every change
  const persistDraft = useCallback(() => {
    saveDraft({
      service, eventName, eventDates, eventLocation, boothSize, budget,
      name, company, email, phone, country, notes, step: String(step),
    });
  }, [service, eventName, eventDates, eventLocation, boothSize, budget,
      name, company, email, phone, country, notes, step]);

  useEffect(() => { persistDraft(); }, [persistDraft]);

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

  function next() {
    if (validate()) setStep((s) => Math.min(s + 1, 4));
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const ref = generateRef();

    // Field names match Airtable "Inbound Leads" columns exactly
    // so n8n can pass through without remapping
    const payload = {
      _subject: `New RFP: ${ref}`,
      "Reference": ref,
      "Service": service,
      "Event Name": eventName,
      "Event Dates": eventDates,
      "Event Location": eventLocation,
      "Booth Size": boothSize,
      "Budget Range": budget,
      "Contact Name": name,
      "Company": company,
      "Email": email,
      "Phone": phone,
      "Country": country,
      "Notes": notes,
      "Status": "New",
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
      clearDraft();
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
                  <div className="ci-icon">{"\uD83D\uDCCD"}</div>
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
                  <div className="ci-icon">{"\uD83D\uDCDE"}</div>
                  <div className="ci-text">
                    <h4>{t("contact.phone.label")}</h4>
                    <a href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F">+971 52 147 7966</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">{"\u2709\uFE0F"}</div>
                  <div className="ci-text">
                    <h4>{t("contact.email")}</h4>
                    <a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">{"\uD83D\uDCF1"}</div>
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
                    {/* Draft restored notice */}
                    {draftRestored && (
                      <div style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        background: "rgba(252,217,64,0.1)", border: "1px solid rgba(252,217,64,0.3)",
                        borderRadius: 8, padding: "10px 16px", marginBottom: 16, fontSize: "0.8rem",
                      }}>
                        <span style={{ color: "var(--color-text-muted)" }}>
                          {"\uD83D\uDCBE"} Draft restored from your last visit
                        </span>
                        <button
                          type="button"
                          onClick={handleClearDraft}
                          style={{
                            background: "none", border: "none", color: "var(--color-accent)",
                            cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, padding: "2px 8px",
                          }}
                        >
                          Clear
                        </button>
                      </div>
                    )}

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
                          {SERVICE_KEYS.map((opt) => (
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
                                {opt.icon}
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
