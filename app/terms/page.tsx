import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="page-shell" style={{ minHeight: '100svh', padding: '32px 0 64px' }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <section
          className="glass-panel"
          style={{
            padding: '30px 22px 26px',
            background: 'linear-gradient(180deg, rgba(10,16,26,0.78), rgba(6,10,18,0.9))',
            border: '1px solid rgba(120, 138, 165, 0.16)',
          }}
        >
          <div className="section-kicker" style={{ color: '#9eabbf' }}>
            Legal
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 4rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.05em',
              margin: '10px 0 14px',
            }}
          >
            Terms of Use
          </h1>

          <p style={{ color: '#93a1b6', margin: '0 0 24px', lineHeight: 1.7 }}>
            Last updated: March 23, 2026
          </p>

          <div style={{ display: 'grid', gap: 22, color: '#d7dee9', lineHeight: 1.75 }}>
            <section>
              <h2 style={sectionTitleStyle}>Acceptance of Terms</h2>
              <p style={paragraphStyle}>
                By accessing or using Official Psychopath Test, you agree to these Terms of Use. If
                you do not agree, do not use the site.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Nature of the Service</h2>
              <p style={paragraphStyle}>
                Official Psychopath Test is provided as a research-inspired entertainment and
                self-reflection experience. It is not a medical, psychiatric, or clinical service
                and does not provide diagnosis, treatment, or professional advice.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Eligibility</h2>
              <p style={paragraphStyle}>
                You may use the site only if you are legally permitted to do so in your
                jurisdiction. By using the service, you confirm that you meet any applicable legal
                age requirements.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Purchases</h2>
              <p style={paragraphStyle}>
                Certain parts of the service may require payment to access a full result or premium
                content. Prices, features, and availability may change at any time without notice.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Payments and Billing</h2>
              <p style={paragraphStyle}>
                Payments are processed through Stripe or other payment providers used by the site.
                By completing a purchase, you authorize the applicable charge for the selected
                service.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>No Clinical Reliance</h2>
              <p style={paragraphStyle}>
                Results, profiles, and written analyses are not medical findings and should not be
                treated as professional mental health conclusions. Do not rely on this site for
                diagnosis, emergency decisions, or treatment decisions.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Acceptable Use</h2>
              <p style={paragraphStyle}>You agree not to:</p>
              <ul style={listStyle}>
                <li>use the site for unlawful purposes,</li>
                <li>attempt to interfere with or damage the service,</li>
                <li>copy, scrape, reproduce, or resell the content without permission,</li>
                <li>misrepresent purchases, access rights, or payment status.</li>
              </ul>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Intellectual Property</h2>
              <p style={paragraphStyle}>
                The site, branding, text, designs, graphics, result structures, and related content
                are owned by Official Psychopath Test or used with permission and may not be copied
                or reused without authorization.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Disclaimer of Warranties</h2>
              <p style={paragraphStyle}>
                The service is provided on an “as is” and “as available” basis without guarantees of
                uninterrupted access, error-free performance, or specific personal outcomes.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Limitation of Liability</h2>
              <p style={paragraphStyle}>
                To the maximum extent permitted by law, Official Psychopath Test will not be liable
                for indirect, incidental, special, consequential, or punitive damages arising from
                your use of the service.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Changes</h2>
              <p style={paragraphStyle}>
                We may update these terms from time to time. Continued use of the site after updates
                means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={paragraphStyle}>
                Questions about these terms can be sent to:
                <br />
                <a
                  href="mailto:support@officialpsychopathtest.com"
                  style={{ color: '#dce6f5', textDecoration: 'none' }}
                >
                  support@officialpsychopathtest.com
                </a>
              </p>
            </section>
          </div>

          <div
            style={{
              marginTop: 28,
              paddingTop: 18,
              borderTop: '1px solid rgba(120, 138, 165, 0.14)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link className="ghost-button" href="/">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

const sectionTitleStyle = {
  margin: '0 0 8px',
  fontSize: '1.1rem',
  color: '#f1f5fb',
  letterSpacing: '-0.02em',
};

const paragraphStyle = {
  margin: 0,
};

const listStyle = {
  margin: '10px 0 0 18px',
  padding: 0,
  display: 'grid',
  gap: 8,
};