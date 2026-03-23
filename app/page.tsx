import Image from 'next/image';
import Link from 'next/link';

const resultLevels = [
  'Within Normal Range',
  'Mild Red Flags',
  'Emotionally Cold',
  'Manipulative Profile',
  'Dark Triad Profile',
  'Apex Psychopathy Profile',
];

export default function HomePage() {
  return (
    <main className="page-shell" data-page="psychopath-home" style={{ textAlign: 'center' }}>
      <section
        className="hero-section"
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
              'radial-gradient(circle at 50% 14%, rgba(146, 22, 34, 0.18), transparent 24%), radial-gradient(circle at 50% 0%, rgba(47, 72, 110, 0.22), transparent 36%), linear-gradient(180deg, rgba(4,8,14,0.22), rgba(3,7,13,0.72) 58%, rgba(2,4,8,0.96) 100%)',
          }}
        />

        <div
          className="hero-figure"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 'clamp(280px, 38svh, 380px)',
            width: 'min(112vw, 780px)',
            height: 'min(66svh, 620px)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.98,
            filter: 'drop-shadow(0 28px 80px rgba(0,0,0,0.95))',
          }}
        >
          <Image
            className="hero-image"
            src="/hero-psychopath-v1.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 90vw, 100vw"
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
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 54%, rgba(4,8,14,0.16) 66%, rgba(3,6,12,0.52) 80%, rgba(2,4,8,0.9) 100%)',
          }}
        />

        <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="glass-panel hero-card"
            style={{
              padding: '26px 22px 24px',
              maxWidth: 560,
              textAlign: 'center',
              background:
                'linear-gradient(180deg, rgba(10,16,26,0.72), rgba(6,10,18,0.84))',
              border: '1px solid rgba(120, 138, 165, 0.16)',
              boxShadow:
                '0 18px 48px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            <div
              className="section-kicker"
              style={{ color: '#9eabbf', letterSpacing: '0.16em' }}
            >
              Research-Inspired Assessment
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
                color: '#c4cfdd',
                lineHeight: 1.6,
                fontSize: '1.05rem',
              }}
            >
              Inspired by research on psychopathy, dark personality traits, and
              projective perception. Explore manipulation, emotional coldness,
              conscience, and control.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link className="cta-button" href="/test">
                Start the Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="morkret" className="container" style={{ padding: '28px 20px 24px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(9,14,22,0.78), rgba(5,8,14,0.9))',
            border: '1px solid rgba(112, 129, 156, 0.14)',
          }}
        >
          <div className="section-kicker" style={{ color: '#98a7bd' }}>
            What this test explores
          </div>
          <div
            style={{
              marginTop: 10,
              display: 'grid',
              gap: 12,
              fontSize: 'clamp(1.25rem, 4.9vw, 1.8rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#eef2f7',
            }}
          >
            <div>Some people are charming without warmth.</div>
            <div>Some treat vulnerability as leverage.</div>
            <div>Some feel far less guilt than they should.</div>
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
            Not just another personality quiz
          </div>
          <h2 className="section-title">
            This test is built to feel sharp, uncomfortable, and psychologically revealing.
          </h2>
          <p className="section-body" style={{ marginBottom: 0, color: '#c8d1de' }}>
            It moves through manipulation, emotional detachment, dominance, impulse control, and
            interpersonal strategy. Inspired by scientific personality testing — but designed as a
            dark, high-impact self-assessment.
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
            Why it hits harder
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 'clamp(1.7rem, 6vw, 2.9rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.05em',
              marginBottom: 16,
              color: '#f2f5f9',
            }}
          >
            Psychopathy is not always loud.
            <br />
            Sometimes it looks polished.
          </div>
          <p className="section-body" style={{ marginBottom: 0, color: '#c8d1de' }}>
            People with these patterns do exist in real life. Some end up behind bars. Others wear
            tailored suits, stay calm under pressure, and learn exactly how to use people.
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
            Possible result levels
          </div>
          <h2 className="section-title">You may face a profile like one of these</h2>
          <ul className="list-reset" style={{ display: 'grid', gap: 14, marginTop: 18 }}>
            {resultLevels.map((name) => {
              const isWorst = name === 'Apex Psychopathy Profile';

              return (
                <li
                  key={name}
                  style={{
                    padding: isWorst ? '16px 18px' : '15px 18px',
                    borderRadius: 22,
                    border: isWorst
                      ? '1px solid rgba(186, 48, 60, 0.52)'
                      : '1px solid rgba(118, 133, 158, 0.18)',
                    background: isWorst
                      ? 'linear-gradient(180deg, rgba(28, 10, 14, 0.96), rgba(10, 8, 12, 0.96))'
                      : 'linear-gradient(180deg, rgba(11, 17, 27, 0.95), rgba(6, 10, 16, 0.92))',
                    boxShadow: isWorst
                      ? '0 12px 34px rgba(78, 8, 14, 0.32), inset 0 1px 0 rgba(255,255,255,0.04)'
                      : '0 10px 24px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.03)',
                    fontSize: '1.05rem',
                    letterSpacing: '0.015em',
                    fontWeight: isWorst ? 700 : 600,
                    color: isWorst ? '#f4d7da' : '#e8edf4',
                    fontFamily:
                      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {isWorst ? (
                    <div style={{ display: 'grid', gap: 4 }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: '#d78b92',
                          fontWeight: 800,
                        }}
                      >
                        Highest Severity
                      </span>
                      <span>{name}</span>
                    </div>
                  ) : (
                    name
                  )}
                </li>
              );
            })}
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
            style={{ margin: '0 auto 20px', maxWidth: 560, color: '#c8d1de' }}
          >
            Inspired by research on psychopathy, dark personality traits, and projective
            perception. This test is for self-reflection and entertainment only and does not
            provide a clinical diagnosis.
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1024px) {
  [data-page="psychopath-home"] .hero-section {
    min-height: 100svh !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  [data-page="psychopath-home"] .hero-content {
    display: flex;
    justify-content: center;
    width: 100%;
    transform: translateY(-130px);
  }

  [data-page="psychopath-home"] .hero-card {
    max-width: 620px !important;
    margin: 0 auto !important;
    padding: 30px 28px 28px !important;
  }

  [data-page="psychopath-home"] .hero-figure {
    left: 50% !important;
    transform: translateX(-50%) !important;
   bottom: clamp(155px, 15vh, 240px) !important;
    width: min(84vw, 980px) !important;
    height: min(78svh, 760px) !important;
    filter: drop-shadow(0 38px 110px rgba(0, 0, 0, 0.98)) !important;
  }

  [data-page="psychopath-home"] .hero-image {
    object-fit: contain !important;
    object-position: center top !important;
  }
}

@media (min-width: 1280px) {
  [data-page="psychopath-home"] .hero-section {
    min-height: 100svh !important;
  }

  [data-page="psychopath-home"] .hero-content {
    transform: translateY(-30px);
  }

 [data-page="psychopath-home"] .hero-content {
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateY(-30px);
}
}
          `,
        }}
      />
    </main>
  );
}