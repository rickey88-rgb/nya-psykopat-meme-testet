import Image from 'next/image';
import Link from 'next/link';

const traitBlocks = [
  {
    title: 'Boldness',
    text: 'Confidence under pressure, low fear, social dominance, and comfort with intensity or risk.',
  },
  {
    title: 'Meanness',
    text: 'Emotional detachment, reduced empathy, callousness, and a more exploitative interpersonal style.',
  },
  {
    title: 'Disinhibition',
    text: 'Impulsivity, weak restraint, reactive decision-making, and difficulty controlling urges or behavior.',
  },
];

const reportItems = [
  'Overall profile summary',
  'Trait-based interpretation',
  'Structured personal feedback',
  'Instant private result view',
];

export default function HomePage() {
  return (
    <main className="page-shell" style={{ textAlign: 'center' }}>
      <section
        style={{
          minHeight: '100svh',
          display: 'grid',
          alignItems: 'end',
          position: 'relative',
          padding: '28px 0 42px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 14%, rgba(91, 117, 148, 0.16), transparent 24%), radial-gradient(circle at 50% 0%, rgba(71, 88, 112, 0.18), transparent 36%), linear-gradient(180deg, rgba(7,10,15,0.18), rgba(5,8,13,0.62) 58%, rgba(4,6,10,0.92) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 'clamp(280px, 38svh, 380px)',
            width: 'min(112vw, 780px)',
            height: 'min(66svh, 620px)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.9,
            filter: 'drop-shadow(0 24px 70px rgba(0,0,0,0.82))',
          }}
        >
          <Image
            src="/hero-psychopath-v1.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 54%, rgba(5,8,14,0.14) 66%, rgba(4,7,12,0.46) 80%, rgba(3,5,9,0.88) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="glass-panel"
            style={{
              padding: '28px 22px 24px',
              maxWidth: 580,
              textAlign: 'center',
              background:
                'linear-gradient(180deg, rgba(10,14,20,0.68), rgba(7,10,16,0.82))',
              border: '1px solid rgba(133, 148, 170, 0.16)',
              boxShadow:
                '0 18px 48px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 14px',
                borderRadius: 999,
                border: '1px solid rgba(150, 165, 186, 0.18)',
                background: 'rgba(255,255,255,0.04)',
                color: '#aab7c9',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Official Psychopath Test
            </div>

            <div
              className="section-kicker"
              style={{ color: '#9eabbf', letterSpacing: '0.16em' }}
            >
              Research-Informed Self-Assessment
            </div>

            <h1
              className="section-title"
              style={{
                fontSize: 'clamp(2.7rem, 10vw, 4.75rem)',
                marginTop: 8,
                letterSpacing: '-0.06em',
              }}
            >
              PSYCHOPATH
              <br />
              TEST
            </h1>

            <p
              style={{
                margin: '0 0 22px',
                color: '#c7d1de',
                lineHeight: 1.62,
                fontSize: '1.05rem',
              }}
            >
              Take a structured psychopath test inspired by modern trait research.
              Explore emotional detachment, interpersonal style, impulsivity, and
              psychopathy-related characteristics in a more serious private format.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Link className="cta-button" href="/test">
                Start the Test
              </Link>
            </div>

            <div
              style={{
                marginTop: 12,
                color: '#93a1b6',
                fontSize: '0.9rem',
                lineHeight: 1.5,
              }}
            >
              30 questions · about 3 minutes · instant profile
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="container" style={{ padding: '28px 20px 24px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(9,14,22,0.76), rgba(5,8,14,0.88))',
            border: '1px solid rgba(112, 129, 156, 0.14)',
          }}
        >
          <div className="section-kicker" style={{ color: '#98a7bd' }}>
            What this test measures
          </div>

          <h2 className="section-title" style={{ marginBottom: 14 }}>
            A more structured look at psychopathy-related traits
          </h2>

          <p
            className="section-body"
            style={{
              margin: '0 auto',
              maxWidth: 650,
              color: '#c8d1de',
            }}
          >
            This assessment is designed to feel more serious than a typical
            personality quiz. It focuses on psychopathy-related tendencies such as
            emotional coldness, dominance, manipulative style, impulse control,
            and reduced guilt or empathy.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 24px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(8,13,21,0.78), rgba(4,7,12,0.9))',
            border: '1px solid rgba(112, 129, 156, 0.14)',
          }}
        >
          <div className="section-kicker" style={{ color: '#98a7bd' }}>
            Core dimensions
          </div>

          <div
            style={{
              display: 'grid',
              gap: 14,
              marginTop: 14,
            }}
          >
            {traitBlocks.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '18px 16px',
                  borderRadius: 22,
                  border: '1px solid rgba(118, 133, 158, 0.18)',
                  background:
                    'linear-gradient(180deg, rgba(12, 18, 28, 0.95), rgba(7, 11, 18, 0.92))',
                  boxShadow:
                    '0 10px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.03)',
                }}
              >
                <div
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: '#eef2f7',
                    marginBottom: 8,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    color: '#c4cfdd',
                    fontSize: '0.98rem',
                    lineHeight: 1.58,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 24px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(8,13,21,0.8), rgba(4,7,12,0.92))',
            border: '1px solid rgba(112, 129, 156, 0.14)',
          }}
        >
          <div className="section-kicker" style={{ color: '#98a7bd' }}>
            How the assessment is framed
          </div>

          <h2 className="section-title">
            Designed to feel direct, private, and psychologically focused
          </h2>

          <p className="section-body" style={{ marginBottom: 0, color: '#c8d1de' }}>
            The goal is not shock value. The goal is a sharper self-assessment
            experience that feels structured and revealing. The questions are meant
            to probe interpersonal style, emotional detachment, behavioral control,
            and how you relate to pressure, risk, and other people.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 24px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(8,13,21,0.8), rgba(4,7,12,0.92))',
            border: '1px solid rgba(112, 129, 156, 0.14)',
          }}
        >
          <div className="section-kicker" style={{ color: '#98a7bd' }}>
            What your result includes
          </div>

          <h2 className="section-title">A clean, profile-based result</h2>

          <ul
            className="list-reset"
            style={{
              display: 'grid',
              gap: 12,
              marginTop: 18,
            }}
          >
            {reportItems.map((item) => (
              <li
                key={item}
                style={{
                  padding: '15px 18px',
                  borderRadius: 22,
                  border: '1px solid rgba(118, 133, 158, 0.18)',
                  background:
                    'linear-gradient(180deg, rgba(11, 17, 27, 0.95), rgba(6, 10, 16, 0.92))',
                  boxShadow:
                    '0 10px 24px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.03)',
                  fontSize: '1.02rem',
                  letterSpacing: '0.01em',
                  fontWeight: 600,
                  color: '#e8edf4',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 72px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '28px 20px 24px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(8,13,21,0.82), rgba(4,7,12,0.94))',
            border: '1px solid rgba(112, 129, 156, 0.14)',
          }}
        >
          <div className="section-kicker" style={{ color: '#98a7bd' }}>
            Final step
          </div>

          <h2 className="section-title" style={{ marginBottom: 10 }}>
            Start the assessment
          </h2>

          <p
            className="section-body"
            style={{ margin: '0 auto 20px', maxWidth: 580, color: '#c8d1de' }}
          >
            This psychopath test is presented as a research-informed
            self-assessment experience. It is intended for personal insight and
            reflection and does not provide a clinical diagnosis.
          </p>

          <div style={{ display: 'grid', gap: 12, maxWidth: 420, margin: '0 auto' }}>
            <Link className="cta-button" href="/test">
              Start the Test
            </Link>
            <div style={{ color: '#93a1b6', fontSize: '0.94rem' }}>
              30 questions · about 3 minutes · instant profile
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}