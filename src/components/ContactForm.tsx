"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const SERVICE_OPTIONS = [
  { id: "exhibition-design", label: "Exhibition Design & Build", icon: "\uD83C\uDFD7" },
  { id: "project-management", label: "Project Management", icon: "\uD83D\uDCCB" },
  { id: "event-design", label: "Conceptual Event Design", icon: "\uD83C\uDFAD" },
  { id: "content-media", label: "Content & Media Production", icon: "\uD83C\uDFAC" },
];

const BOOTH_SIZES = [
  "Under 20 sqm",
  "20 – 50 sqm",
  "50 – 100 sqm",
  "100 – 200 sqm",
  "200 – 500 sqm",
  "500+ sqm",
  "Not sure yet",
];

const BUDGETS = [
  "Under AED 50,000",
  "AED 50,000 – 150,000",
  "AED 150,000 – 400,000",
  "AED 400,000 – 1,000,000",
  "AED 1,000,000+",
  "Let\u2019s discuss",
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

  function validate(): boolean {
    const errs: Record<string, string> = {};

    if (step === 1 && !service) {
      errs.service = "Please select a service";
    }
    if (step === 2) {
      if (!eventName.trim()) errs.eventName = "Event name is required";
    }
    if (step === 3) {
      if (!name.trim()) errs.name = "Your name is required";
      if (!email.trim()) errs.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errs.email = "Please enter a valid email";
      if (!company.trim()) errs.company = "Company name is required";
    }
    if (step === 4) {
      if (!consent) errs.consent = "Please agree to proceed";
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
      const res = await fetch("https://formspree.io/f/xwpkpbjn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setRefCode(ref);
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email us directly at hello@thebutterduck.com");
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
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Contact</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">Get in Touch</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              Let&apos;s Build Something
              <br />
              <span className="accent">Exceptional</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>
              Whether you need a full exhibition build or just want to explore
              ideas, we&apos;re here to help. Fill out the RFP form or reach out
              directly.
            </p>
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
                <span className="section-label">Direct Contact</span>
                <h2 style={{ marginBottom: 40 }}>
                  Reach Us <span className="accent">Directly</span>
                </h2>

                <div className="contact-item">
                  <div className="ci-icon">{"\uD83D\uDCCD"}</div>
                  <div className="ci-text">
                    <h4>Office</h4>
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
                    <h4>Phone / WhatsApp</h4>
                    <a href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F">+971 52 147 7966</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">{"\u2709\uFE0F"}</div>
                  <div className="ci-text">
                    <h4>Email</h4>
                    <a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">{"\uD83D\uDCF1"}</div>
                  <div className="ci-text">
                    <h4>Social</h4>
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
              <div className="rfp-wrap">
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: "3rem", marginBottom: 16 }}>{"\u2705"}</div>
                    <h3 style={{ marginBottom: 8 }}>Request Received!</h3>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                      Your reference code is{" "}
                      <strong style={{ color: "var(--color-accent)" }}>{refCode}</strong>.
                      <br />
                      We&apos;ll be in touch within 24 hours.
                    </p>
                    <Link href="/" className="btn btn-primary">
                      Back to Home <span className="arrow">&rarr;</span>
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
                      Step {step} of 4
                    </p>

                    {/* Step 1 — Service Selection */}
                    {step === 1 && (
                      <div>
                        <h3 style={{ marginBottom: 20 }}>
                          What do you need?
                        </h3>
                        <div className="svc-grid">
                          {SERVICE_OPTIONS.map((opt) => (
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
                                {opt.label}
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
                        <h3 style={{ marginBottom: 20 }}>Project Details</h3>

                        <div className="form-group">
                          <label htmlFor="eventName">Event / Exhibition Name *</label>
                          <input
                            id="eventName"
                            type="text"
                            className="form-input"
                            placeholder="e.g. GITEX Global 2026"
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
                          <label htmlFor="eventDates">Event Dates</label>
                          <input
                            id="eventDates"
                            type="text"
                            className="form-input"
                            placeholder="e.g. 14–18 Oct 2026"
                            value={eventDates}
                            onChange={(e) => setEventDates(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="eventLocation">Location / Venue</label>
                          <input
                            id="eventLocation"
                            type="text"
                            className="form-input"
                            placeholder="e.g. DWTC, Dubai"
                            value={eventLocation}
                            onChange={(e) => setEventLocation(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="boothSize">Booth Size</label>
                          <select
                            id="boothSize"
                            className="form-input"
                            value={boothSize}
                            onChange={(e) => setBoothSize(e.target.value)}
                          >
                            <option value="">Select size...</option>
                            {BOOTH_SIZES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="budget">Budget Range</label>
                          <select
                            id="budget"
                            className="form-input"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                          >
                            <option value="">Select range...</option>
                            {BUDGETS.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3 — Contact Info */}
                    {step === 3 && (
                      <div>
                        <h3 style={{ marginBottom: 20 }}>Your Details</h3>

                        <div className="form-group">
                          <label htmlFor="contactName">Full Name *</label>
                          <input
                            id="contactName"
                            type="text"
                            className="form-input"
                            placeholder="John Smith"
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
                          <label htmlFor="contactCompany">Company *</label>
                          <input
                            id="contactCompany"
                            type="text"
                            className="form-input"
                            placeholder="Acme Corp"
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
                          <label htmlFor="contactEmail">Email *</label>
                          <input
                            id="contactEmail"
                            type="email"
                            className="form-input"
                            placeholder="john@acme.com"
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
                          <label htmlFor="contactPhone">Phone</label>
                          <input
                            id="contactPhone"
                            type="tel"
                            className="form-input"
                            placeholder="+971 50 000 0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactCountry">Country</label>
                          <input
                            id="contactCountry"
                            type="text"
                            className="form-input"
                            placeholder="UAE"
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
                          Anything Else?
                        </h3>

                        <div className="form-group">
                          <label htmlFor="notes">Additional Notes</label>
                          <textarea
                            id="notes"
                            className="form-input"
                            placeholder="Tell us about your vision, special requirements, or anything we should know..."
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
                            I agree that The Butter Duck may contact me
                            regarding this enquiry. My data will not be shared
                            with third parties.
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
                          &larr; Back
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
                          Continue <span className="arrow">&rarr;</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={submitting}
                        >
                          {submitting ? "Sending..." : "Submit Request"}{" "}
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
            <h2>Prefer a Quick Chat?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>
              Drop us a WhatsApp message and we&apos;ll get back to you within
              the hour.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <a
              href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
            >
              WhatsApp Us <span className="arrow">&rarr;</span>
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
