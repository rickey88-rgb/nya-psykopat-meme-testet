import Image from 'next/image';
import Link from 'next/link';
import { archetypes } from '@/lib/test-data';

const resultNames = [
  archetypes.sadisten.title,
  archetypes.slaktaren.title,
  archetypes.skuggregissoren.title,
  archetypes.asataren.title,
  archetypes.denIhalige.title,
  archetypes.antikrist.title,
];

export default function HomePage() {
  return (
    <main className="page-shell">
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
              'radial-gradient(circle at 50% 14%, rgba(196, 13, 29, 0.38), transparent 26%), linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.72) 58%, rgba(0,0,0,0.95) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
           bottom: 'clamp(360px, 48svh, 480px)',
            width: 'min(112vw, 780px)',
            height: 'min(66svh, 620px)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.98,
            filter: 'drop-shadow(0 28px 80px rgba(0,0,0,0.95))',
          }}
        >
          <Image
            src="/hero-demon-v2.png"
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
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 54%, rgba(0,0,0,0.18) 66%, rgba(0,0,0,0.48) 80%, rgba(0,0,0,0.86) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="glass-panel"
            style={{
              padding: '26px 22px 24px',
              maxWidth: 560,
            }}
          >
            <div className="section-kicker">Psykopattestet</div>
            <h1
              className="section-title"
              style={{
                fontSize: 'clamp(2.7rem, 10vw, 4.75rem)',
                marginTop: 8,
              }}
            >
              Hur mörk
              <br />
              är du egentligen?
            </h1>
            <p
              style={{
                margin: '0 0 22px',
                color: '#e8cbcb',
                lineHeight: 1.6,
                fontSize: '1.05rem',
              }}
            >
              30 brutala frågor. Ett resultat du kanske inte vill se.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="cta-button" href="#morkret">
                Gå ner i mörkret
              </Link>
              <Link className="ghost-button" href="/test">
                Starta testet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="morkret" className="container" style={{ padding: '28px 20px 24px' }}>
        <div className="glass-panel" style={{ padding: '24px 20px' }}>
          <div className="section-kicker">Något kallare än samvete</div>
          <div
            style={{
              display: 'grid',
              gap: 12,
              fontSize: 'clamp(1.25rem, 4.9vw, 1.8rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            <div>Vissa människor bär på något kallare än samvete.</div>
            <div>Vissa njuter av kontroll.</div>
            <div>Vissa känner nästan ingenting alls.</div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 24px' }}>
        <div className="glass-panel" style={{ padding: '24px 20px' }}>
          <div className="section-kicker">Det här är inte ett gulligt personlighetstest</div>
          <h2 className="section-title">
            Det här testet pressar fram den del av dig som helst borde stanna under ytan.
          </h2>
          <p className="section-body" style={{ marginBottom: 0 }}>
            Testet rör sig genom manipulation, känslokyla, maktbegär och rå skuggsida. Inte för att
            förklara bort mörkret — utan för att se hur nära det ligger.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 24px' }}>
        <div className="glass-panel" style={{ padding: '24px 20px' }}>
          <div className="section-kicker">Du borde nog inte göra det här</div>
          <div
            style={{
              fontSize: 'clamp(1.7rem, 6vw, 2.9rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.05em',
              marginBottom: 16,
            }}
          >
            De flesta borde nog inte göra det här testet.
            <br />
            Frågan är om du vågar.
          </div>
          <p className="section-body" style={{ marginBottom: 0 }}>
            Människor som de här finns på riktigt.
            <br />
            <strong style={{ color: '#ffb4b9', fontWeight: 700 }}>
              Vissa ruttnar bakom lås och bom. Andra bär kostym och styr världen.
            </strong>
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 24px' }}>
        <div className="glass-panel" style={{ padding: '24px 20px' }}>
          <div className="section-kicker">Om du går vidare</div>
          <h2 className="section-title">Du kan möta resultat som de här</h2>
          <ul className="list-reset" style={{ display: 'grid', gap: 12, marginTop: 18 }}>
            {resultNames.map((name) => (
              <li
                key={name}
                style={{
                  padding: '14px 16px',
                  borderRadius: 18,
                  border: '1px solid rgba(207, 26, 43, 0.22)',
                  background:
                    'linear-gradient(180deg, rgba(25, 6, 8, 0.94), rgba(8, 8, 8, 0.9))',
                  fontSize: '1.08rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container" style={{ padding: '0 20px 72px' }}>
        <div className="glass-panel" style={{ padding: '28px 20px 24px', textAlign: 'center' }}>
          <div className="section-kicker">Sista steget</div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>
            Vågar du göra testet?
          </h2>
          <p className="section-body" style={{ margin: '0 auto 20px', maxWidth: 560 }}>
            Det finns bara ett sätt att se vad som finns där inne.
          </p>
          <div style={{ display: 'grid', gap: 12, maxWidth: 420, margin: '0 auto' }}>
            <Link className="cta-button" href="/test">
              Starta testet
            </Link>
            <div style={{ color: '#b99191', fontSize: '0.94rem' }}>
              30 frågor · cirka 3 minuter · mörkerprofil efteråt
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}