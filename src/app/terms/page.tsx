import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Butter Duck",
  description:
    "Terms of Service for The Butter Duck Company FZC LLC. Legal terms governing website use and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 100 }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>
            Terms of <span className="accent">Service</span>
          </h1>
          <p>Last updated: March 24, 2026</p>
        </div>
      </section>

      <section style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>1. Introduction</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website operated
              by <strong>The Butter Duck Company FZC LLC</strong> (referred to herein as &ldquo;the Company&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p style={{ marginTop: 12 }}>
              By accessing or using this website, you acknowledge that you have read, understood, and agree
              to be bound by these Terms. If you do not agree with any part of these Terms, you must not
              use this website.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>2. Company Information</h2>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
              <li><strong>Legal Name:</strong> The Butter Duck Company FZC LLC</li>
              <li><strong>License Number:</strong> 4426620.01</li>
              <li><strong>Jurisdiction:</strong> UAE Free Zone</li>
              <li><strong>Registered Address:</strong> Marina Plaza, 29th Floor, Dubai Marina, Dubai, UAE</li>
              <li><strong>Email:</strong> <a href="mailto:sales@thebutterduck.com">sales@thebutterduck.com</a></li>
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>3. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the federal laws of the
              United Arab Emirates and the applicable regulations of the relevant UAE Free Zone authority
              under which the Company is licensed. Any matters not covered by the applicable free zone
              regulations shall be subject to UAE federal law.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>4. Dispute Resolution</h2>
            <p>
              Any dispute, controversy, or claim arising out of or in connection with these Terms, or the
              breach, termination, or invalidity thereof, shall be submitted to the exclusive jurisdiction
              of the courts of Dubai, United Arab Emirates, or the Dubai International Financial Centre
              (DIFC) courts, as determined by the Company.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>5. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, photographs, images,
              3D renders, design concepts, illustrations, logos, icons, audio clips, video clips, and software,
              is the exclusive property of The Butter Duck Company FZC LLC or its licensors and is protected
              by applicable intellectual property laws.
            </p>
            <p style={{ marginTop: 12 }}>
              No part of this website may be reproduced, distributed, modified, transmitted, reused, downloaded,
              reposted, or otherwise used in any form or by any means without the prior written consent of
              the Company.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>6. Third-Party Trademarks</h2>
            <p>
              All third-party trademarks, logos, and brand names displayed on this website are the property
              of their respective owners. Their use on this website is solely to identify projects completed
              by The Butter Duck Company FZC LLC and does not imply endorsement, sponsorship, or affiliation
              with the Company unless expressly stated.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>7. Portfolio and Project Images</h2>
            <p>
              Images, renders, and photographs displayed in the portfolio section of this website are
              representative of the Company&apos;s work and capabilities. They are presented for illustrative
              purposes. Actual project specifications, dimensions, materials, configurations, and final
              outcomes may vary from what is depicted. Portfolio content should not be interpreted as a
              guarantee of identical results for future projects.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>8. No Warranties</h2>
            <p>
              This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. The
              Company makes no representations or warranties of any kind, express or implied, regarding
              the accuracy, completeness, reliability, suitability, or availability of the website or the
              information, products, services, or related content contained on the website for any purpose.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by UAE federal law and applicable free zone regulations, the
              Company shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising out of or in connection with your use of this website.
            </p>
            <p style={{ marginTop: 12 }}>
              In no event shall the Company&apos;s total liability to you for all claims arising from the use
              of this website exceed the amount of AED 1,000 (one thousand UAE Dirhams).
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>10. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites or services that are not owned or
              controlled by the Company. We have no control over, and assume no responsibility for, the
              content, privacy policies, or practices of any third-party websites or services.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>11. RFP and Inquiry Form Submissions</h2>
            <p>
              Any information submitted through the request for proposal (RFP) form, contact form, or any
              other inquiry mechanism on this website is for inquiry purposes only. Submission of a form
              does not constitute a binding agreement, contract, or commitment by either party.
            </p>
            <p style={{ marginTop: 12 }}>
              All project engagements are subject to a separate formal agreement between the Company and
              the client, executed independently of any website submission.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>12. Right to Decline Inquiries</h2>
            <p>
              The Company reserves the right, at its sole discretion, to decline any inquiry, request for
              proposal, or potential engagement for any reason, without obligation to provide an explanation.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>13. Indicative Pricing</h2>
            <p>
              Any pricing, cost estimates, or budget ranges shown, discussed, or referenced on this website
              or in any preliminary communications are indicative only and do not constitute a formal offer
              or binding quotation. Final pricing is subject to a formal written proposal issued by the Company.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>14. Modification of Terms</h2>
            <p>
              The Company reserves the right to modify, amend, or update these Terms at any time and without
              prior notice. Changes will be effective immediately upon posting the revised Terms on this
              website. Your continued use of this website following the posting of any changes constitutes
              your acceptance of those changes.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>15. Contact</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p style={{ marginTop: 12 }}>
              <strong>The Butter Duck Company FZC LLC</strong><br />
              Marina Plaza, 29th Floor, Dubai Marina, Dubai, UAE<br />
              Email: <a href="mailto:sales@thebutterduck.com">sales@thebutterduck.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
