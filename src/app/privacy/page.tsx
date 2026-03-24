import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Butter Duck",
  description:
    "Privacy Policy for The Butter Duck Company FZC LLC. How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 100 }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>
            Privacy <span className="accent">Policy</span>
          </h1>
          <p>Last updated: March 24, 2026</p>
        </div>
      </section>

      <section style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>1. Introduction</h2>
            <p>
              The Butter Duck Company FZC LLC (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              is committed to protecting your privacy and personal data. This Privacy Policy explains how
              we collect, use, store, and protect information when you visit our website or submit inquiries
              through our forms.
            </p>
            <p style={{ marginTop: 12 }}>
              This policy applies to all visitors of our website regardless of location, including residents
              of the UAE, European Economic Area (EEA), and the United Kingdom.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>2. Company Information</h2>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
              <li><strong>Legal Name:</strong> The Butter Duck Company FZC LLC</li>
              <li><strong>License Number:</strong> 4426620.01</li>
              <li><strong>Jurisdiction:</strong> UAE Free Zone</li>
              <li><strong>Registered Address:</strong> Marina Plaza, 29th Floor, Dubai Marina, Dubai, UAE</li>
              <li><strong>Data Contact:</strong> <a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a></li>
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>3. Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul style={{ marginTop: 12, lineHeight: 2 }}>
              <li><strong>Contact information:</strong> name, email address, phone number, company name, job title</li>
              <li><strong>Project information:</strong> event details, booth size, budget range, timelines, and service requirements submitted via our RFP form</li>
              <li><strong>Technical data:</strong> IP address, browser type, device type, pages visited, and referring URL (collected automatically via analytics tools when enabled)</li>
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>4. How We Collect Data</h2>
            <p>We collect personal data through:</p>
            <ul style={{ marginTop: 12, lineHeight: 2 }}>
              <li>Our Request for Proposal (RFP) form on the Contact page</li>
              <li>Direct email correspondence</li>
              <li>WhatsApp messages initiated by you</li>
              <li>Analytics cookies (when enabled and consented to)</li>
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>5. Purpose of Data Processing</h2>
            <p>We process your personal data for the following purposes:</p>
            <ul style={{ marginTop: 12, lineHeight: 2 }}>
              <li>To respond to your inquiries and provide project proposals</li>
              <li>To communicate with you about potential or ongoing projects</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations under UAE law</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>6. Legal Basis for Processing</h2>
            <p>We process your data on the following legal bases:</p>
            <ul style={{ marginTop: 12, lineHeight: 2 }}>
              <li><strong>Consent:</strong> when you submit a form or contact us voluntarily</li>
              <li><strong>Legitimate interest:</strong> to respond to business inquiries and improve our services</li>
              <li><strong>Legal obligation:</strong> where required by UAE law or applicable regulations</li>
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which
              it was collected, or as required by applicable law. Form submissions and inquiry data are
              retained for up to 24 months from the date of last contact. You may request deletion at any
              time by contacting us.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>9. Third-Party Services</h2>
            <p>Our website may use the following third-party services that process data on our behalf:</p>
            <ul style={{ marginTop: 12, lineHeight: 2 }}>
              <li><strong>Form processing:</strong> Formspree (for RFP form submissions)</li>
              <li><strong>Analytics:</strong> Google Analytics (when enabled)</li>
              <li><strong>Hosting:</strong> GitHub Pages / Vercel</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Each third-party service operates under its own privacy policy. We encourage you to review
              their respective policies.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>10. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies for functionality and analytics purposes.
              Essential cookies are necessary for the website to function. Analytics cookies are only
              activated with your consent.
            </p>
            <p style={{ marginTop: 12 }}>
              You can control cookie settings through your browser. Disabling cookies may affect some
              website functionality.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>11. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul style={{ marginTop: 12, lineHeight: 2 }}>
              <li><strong>Access:</strong> request a copy of your personal data</li>
              <li><strong>Rectification:</strong> request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> request deletion of your data</li>
              <li><strong>Restriction:</strong> request limitation of processing</li>
              <li><strong>Portability:</strong> request transfer of your data in a structured format</li>
              <li><strong>Objection:</strong> object to processing based on legitimate interest</li>
              <li><strong>Withdraw consent:</strong> withdraw previously given consent at any time</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a>.
              We will respond within 30 days.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>12. International Data Transfers</h2>
            <p>
              Your data may be processed in the United Arab Emirates. If you are located outside the UAE,
              by using our website and submitting information, you consent to the transfer of your data to
              the UAE. We ensure appropriate safeguards are in place for any international data transfers
              in accordance with applicable data protection laws.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>13. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed at individuals under the age of 18. We do not
              knowingly collect personal data from children. If we become aware that we have collected
              data from a child, we will take steps to delete it promptly.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &ldquo;Last updated&rdquo; date. Continued use of our website after changes
              constitutes acceptance of the revised policy.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>15. Applicable Law</h2>
            <p>
              This Privacy Policy is governed by UAE Federal Decree-Law No. 45 of 2021 on the Protection
              of Personal Data (PDPL) and applicable free zone regulations. For individuals in the EEA,
              the General Data Protection Regulation (EU) 2016/679 (GDPR) also applies to the extent
              required.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>16. Contact</h2>
            <p>For any questions or requests regarding this Privacy Policy or your personal data:</p>
            <p style={{ marginTop: 12 }}>
              <strong>The Butter Duck Company FZC LLC</strong><br />
              Marina Plaza, 29th Floor, Dubai Marina, Dubai, UAE<br />
              Email: <a href="mailto:hello@thebutterduck.com">hello@thebutterduck.com</a><br />
              Phone: <a href="tel:+971521477966">+971 52 147 7966</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
