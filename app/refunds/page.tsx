import Link from 'next/link';

export default function RefundsPage() {
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
            Refund Policy
          </h1>

          <p style={{ color: '#93a1b6', margin: '0 0 24px', lineHeight: 1.7 }}>
            Last updated: March 23, 2026
          </p>

          <div style={{ display: 'grid', gap: 22, color: '#d7dee9', lineHeight: 1.75 }}>
            <section>
              <h2 style={sectionTitleStyle}>Digital Purchase Policy</h2>
              <p style={paragraphStyle}>
                Official Psychopath Test provides digital content and instant-access result pages.
                Because access is delivered immediately after purchase, refunds are generally not
                offered once the full result has been unlocked.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>When a Refund May Be Considered</h2>
              <p style={paragraphStyle}>Refund requests may be reviewed in limited cases such as:</p>
              <ul style={listStyle}>
                <li>duplicate charges,</li>
                <li>technical failure that prevented access to the purchased result,</li>
                <li>clearly accidental multiple purchases of the same product.</li>
              </ul>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>How to Request Help</h2>
              <p style={paragraphStyle}>
                If you believe there was a payment error or technical issue, contact support with a
                description of the problem and the email or payment details connected to the
                purchase.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Review Process</h2>
              <p style={paragraphStyle}>
                Each request is reviewed individually. Submitting a request does not guarantee a
                refund. We may ask for additional information needed to investigate the issue.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Chargebacks</h2>
              <p style={paragraphStyle}>
                If you experience a genuine billing problem, please contact support first so we have
                a chance to resolve it quickly.
              </p>
            </section>

            <section>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={paragraphStyle}>
                Refund and billing questions can be sent to:
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