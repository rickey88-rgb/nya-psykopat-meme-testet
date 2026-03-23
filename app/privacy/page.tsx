import Link from 'next/link';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p style={{ color: '#93a1b6', margin: '0 0 24px', lineHeight: 1.7 }}>
            Last updated: March 23, 2026
          </p>

          <div style={{ display: 'grid', gap: 22, color: '#d7dee9', lineHeight: 1.75 }}>
            <section>
              <h2 style={sectionTitleStyle}>Overview</h2>
              <p style={paragraphStyle}>
                Official Psychopath Test respects your privacy. This policy explains what
                information may be collected when you use the site, how it is used, and how you can
                contact us about it.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Information We May Collect</h2>
              <p style={paragraphStyle}>
                We may collect information you provide directly, such as your email address if you
                contact support. We may also collect limited technical information such as browser
                type, device information, IP address, basic usage data, and payment-related status
                information needed to operate the service.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Test Responses</h2>
              <p style={paragraphStyle}>
                Your test responses may be processed to generate your result. Some information may
                be temporarily stored in your browser to allow the test and post-purchase result
                flow to function properly.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Payments</h2>
              <p style={paragraphStyle}>
                Payments are processed by Stripe. We do not store your full card details on this
                website. When you make a purchase, payment information is handled through Stripe’s
                checkout and related systems.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>How We Use Information</h2>
              <p style={paragraphStyle}>We may use collected information to:</p>
              <ul style={listStyle}>
                <li>operate and improve the site,</li>
                <li>deliver purchased results and related access,</li>
                <li>respond to support requests,</li>
                <li>monitor performance, fraud, misuse, or technical issues,</li>
                <li>comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Cookies and Local Storage</h2>
              <p style={paragraphStyle}>
                The site may use cookies, local storage, or similar browser technologies to remember
                progress, support checkout return flows, improve functionality, and understand
                general site usage.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Data Sharing</h2>
              <p style={paragraphStyle}>
                We may share limited information with trusted service providers when needed to run
                the site, process payments, host infrastructure, prevent fraud, or provide support.
                We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Data Retention</h2>
              <p style={paragraphStyle}>
                We keep information only as long as reasonably necessary for business, legal,
                security, and operational purposes.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Your Rights</h2>
              <p style={paragraphStyle}>
                Depending on your location, you may have rights relating to access, correction,
                deletion, restriction, objection, or portability of your personal data. To make a
                request, contact us at the email below.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={paragraphStyle}>
                For privacy questions, support requests, or data-related inquiries, contact:
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