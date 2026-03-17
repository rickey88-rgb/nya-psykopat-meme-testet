'use client';

import { useEffect, useMemo, useState } from 'react';
import { analysisSteps, archetypes, questions, type Question } from '@/lib/test-data';
import { computeResult, type AnswerMap } from '@/lib/test-engine';

type Phase = 'warning' | 'questions' | 'analysis' | 'paywall' | 'result';

const pulseCheckpoints = new Set([6, 12, 18, 24, 30]);

function StepLabel({ index }: { index: number }) {
  if (index < 6) return <span>Första lagret</span>;
  if (index < 12) return <span>Djupare nu</span>;
  if (index < 18) return <span>Det här börjar bli fel</span>;
  if (index < 24) return <span>Det borde nog ha stoppat här</span>;
  return <span>Sista nivån</span>;
}

function OptionButton({
  option,
  onClick,
  isForced = false,
}: {
  option: Question['options'][number];
  onClick: () => void;
  isForced?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        borderRadius: 22,
        border: '1px solid rgba(191, 28, 44, 0.28)',
        background: 'linear-gradient(180deg, rgba(23, 6, 7, 0.96), rgba(8, 8, 8, 0.92))',
        color: '#f8eded',
        padding: isForced ? '18px 18px' : '16px 18px',
        minHeight: isForced ? 74 : 64,
        boxShadow: '0 0 0 1px rgba(255,255,255,0.02), inset 0 0 26px rgba(111, 8, 16, 0.12)',
        transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
        cursor: 'pointer',
        lineHeight: 1.35,
      }}
    >
      {option.label}
    </button>
  );
}

function QuestionCard({
  question,
  index,
  onAnswer,
}: {
  question: Question;
  index: number;
  onAnswer: (optionId: string) => void;
}) {
  return (
    <section className="glass-panel" style={{ padding: '22px 18px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <div className="section-kicker"><StepLabel index={index} /></div>
        <div style={{ color: '#ff8c97', fontSize: '0.92rem', fontWeight: 700 }}>Fråga {index + 1} / {questions.length}</div>
      </div>

      <h1 style={{ fontSize: 'clamp(1.75rem, 6.5vw, 2.4rem)', lineHeight: 1.02, letterSpacing: '-0.04em', margin: '0 0 22px' }}>
        {question.prompt}
      </h1>

      <div style={{ display: 'grid', gap: 12 }}>
        {question.options.map((option) => (
          <OptionButton key={option.id} option={option} onClick={() => onAnswer(option.id)} isForced={question.type === 'forced'} />
        ))}
      </div>
    </section>
  );
}

function AnalysisPanel({ done, stepIndex }: { done: boolean; stepIndex: number }) {
  return (
    <section className="glass-panel" style={{ padding: '32px 22px', minHeight: 460, display: 'grid', alignContent: 'center', gap: 18, position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '12% auto 12% 50%',
          width: 14,
          transform: 'translateX(-50%)',
          borderRadius: 999,
          background: 'linear-gradient(180deg, rgba(51,0,5,0.12), rgba(116,0,12,0.5), rgba(255,33,60,0.2))',
          boxShadow: '0 0 28px rgba(183, 17, 37, 0.22)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            borderRadius: 999,
            background: 'linear-gradient(180deg, rgba(255,39,66,0.35), rgba(144,7,18,0.92) 45%, rgba(44,0,3,0.96))',
            boxShadow: '0 0 35px rgba(214, 28, 47, 0.38)',
            animation: 'bloodFill 4.8s ease forwards',
            transformOrigin: 'bottom',
          }}
        />
      </div>
      <div className="section-kicker" style={{ textAlign: 'center' }}>Analys pågår</div>
      <div style={{ textAlign: 'center', fontSize: 'clamp(1.85rem, 7vw, 3rem)', lineHeight: 1.02, letterSpacing: '-0.05em' }}>
        {analysisSteps[Math.min(stepIndex, analysisSteps.length - 1)]}
      </div>
      <div style={{ display: 'grid', gap: 10, maxWidth: 420, width: '100%', margin: '0 auto' }}>
        {analysisSteps.map((step, idx) => (
          <div
            key={step}
            style={{
              padding: '12px 14px',
              borderRadius: 16,
              border: idx <= stepIndex ? '1px solid rgba(216, 42, 59, 0.38)' : '1px solid rgba(255,255,255,0.05)',
              background: idx <= stepIndex ? 'rgba(55, 7, 10, 0.72)' : 'rgba(12,12,12,0.72)',
              color: idx <= stepIndex ? '#ffe5e7' : '#8b7777',
              animation: idx === stepIndex && !done ? 'textBlink 0.85s linear infinite' : undefined,
            }}
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}

function PaywallPanel({ onUnlock }: { onUnlock: () => void }) {
  return (
    <section className="glass-panel" style={{ padding: '28px 20px 24px', textAlign: 'center' }}>
      <div className="section-kicker">Mörkerprofilen väntar</div>
      <div style={{ fontSize: 'clamp(2rem, 7.8vw, 3.2rem)', lineHeight: 0.98, letterSpacing: '-0.05em', margin: '12px 0 14px' }}>
        Vi har sett tillräckligt.
        <br />
        Vi vet något om dig nu.
        <br />
        Frågan är om du vill veta det själv.
      </div>
      <p style={{ color: '#d8bbbb', lineHeight: 1.65, margin: '0 auto 18px', maxWidth: 560 }}>
        Din mörkerprofil är klar. Lås upp ditt fulla resultat och se vad testet såg i dig.
      </p>
      <div style={{ display: 'grid', gap: 12, maxWidth: 420, margin: '0 auto 18px' }}>
        <div style={{ padding: '14px 16px', borderRadius: 18, border: '1px solid rgba(204, 31, 47, 0.22)', background: 'rgba(18, 7, 8, 0.84)' }}>
          Resultatnamn · brutal domtext · fyra mörka sektioner
        </div>
      </div>
      <button className="cta-button" style={{ width: '100%', maxWidth: 420 }} onClick={onUnlock}>
        Lås upp mitt resultat — 39 kr
      </button>
      <div style={{ marginTop: 12, color: '#9f7f7f', fontSize: '0.88rem' }}>Demo-läge: byt denna knapp mot Stripe när du vill.</div>
    </section>
  );
}

function ResultCard({ answers }: { answers: AnswerMap }) {
  const computed = useMemo(() => computeResult(questions, answers), [answers]);
  const profile = computed.profile;

  return (
    <section className="glass-panel" style={{ padding: '28px 20px 26px' }}>
      <div className="section-kicker">Ditt resultat</div>
      <div style={{ marginTop: 10, marginBottom: 20 }}>
        <div style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', lineHeight: 0.95, letterSpacing: '-0.06em', textTransform: 'uppercase' }}>
          {profile.title}
        </div>
        <div style={{ color: '#ff8d98', marginTop: 8, fontWeight: 700 }}>{profile.tag}</div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#bda0a0', fontSize: '0.88rem', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Mörkernivå</div>
        <div style={{ position: 'relative', height: 26, borderRadius: 999, overflow: 'hidden', background: 'rgba(25, 7, 9, 0.86)', border: '1px solid rgba(209, 34, 51, 0.2)' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: `${computed.progressPercent}%`,
              background: 'linear-gradient(90deg, rgba(116, 7, 15, 1), rgba(191, 18, 35, 0.95), rgba(255, 69, 84, 0.8))',
              boxShadow: computed.progressPercent > 82 ? '0 0 38px rgba(214, 28, 47, 0.44)' : '0 0 24px rgba(214, 28, 47, 0.2)',
            }}
          />
        </div>
      </div>

      <p style={{ color: '#eed7d7', lineHeight: 1.75, fontSize: '1.04rem' }}>{profile.intro}</p>
      {profile.main.map((paragraph) => (
        <p key={paragraph} style={{ color: '#ccb0b0', lineHeight: 1.78 }}>{paragraph}</p>
      ))}

      <div style={{ display: 'grid', gap: 14, marginTop: 22 }}>
        {[
          ['Din mörkaste sida', profile.darkest],
          ['Vad andra missar hos dig', profile.hidden],
          ['Det som gör dig farligare än de flesta', profile.danger],
          ['Om sanningen om dig kom ut', profile.truth],
        ].map(([title, body]) => (
          <div key={title} style={{ padding: '16px 16px 18px', borderRadius: 18, border: '1px solid rgba(201, 28, 46, 0.22)', background: 'linear-gradient(180deg, rgba(24, 6, 8, 0.94), rgba(8, 8, 8, 0.92))' }}>
            <div style={{ color: '#ff8993', fontSize: '0.84rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 8 }}>{title}</div>
            <div style={{ color: '#e5d0d0', lineHeight: 1.68 }}>{body}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 22, padding: '18px 16px', borderRadius: 20, border: '1px solid rgba(220, 42, 59, 0.28)', background: 'linear-gradient(180deg, rgba(61, 8, 12, 0.9), rgba(18, 5, 6, 0.9))', color: '#fff3f3', lineHeight: 1.6, fontWeight: 700 }}>
        {profile.share}
      </div>
    </section>
  );
}

export function TestExperience() {
  const [phase, setPhase] = useState<Phase>('warning');
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [pulseToken, setPulseToken] = useState(0);
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    if (phase !== 'analysis') return;

    const timeouts = [
      setTimeout(() => setAnalysisStep(1), 1200),
      setTimeout(() => setAnalysisStep(2), 2600),
      setTimeout(() => setAnalysisStep(3), 4100),
      setTimeout(() => setPhase('paywall'), 5100),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [phase]);

  const currentQuestion = questions[questionIndex];
  const progress = ((questionIndex) / questions.length) * 100;

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));

    const nextIndex = questionIndex + 1;
    if (pulseCheckpoints.has(nextIndex)) {
      setPulseToken(Date.now());
    }

    if (nextIndex >= questions.length) {
      setQuestionIndex(nextIndex);
      setAnalysisStep(0);
      setTimeout(() => setPhase('analysis'), 140);
      return;
    }

    setQuestionIndex(nextIndex);
  };

  const restart = () => {
    setAnswers({});
    setQuestionIndex(0);
    setAnalysisStep(0);
    setPhase('warning');
  };

  return (
    <div className="page-shell" style={{ minHeight: '100svh', padding: '20px 0 40px', position: 'relative' }}>
      {pulseToken > 0 && (
        <div
          key={pulseToken}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            border: '12px solid rgba(214, 28, 47, 0.66)',
            boxShadow: 'inset 0 0 60px rgba(214, 28, 47, 0.35), 0 0 80px rgba(214, 28, 47, 0.24)',
            animation: 'pulseFlash 720ms ease-out forwards',
            zIndex: 50,
          }}
        />
      )}

      <div className="container" style={{ maxWidth: 720 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
          <div>
            <div className="section-kicker">Psykopattestet</div>
            <div style={{ color: '#e8d1d1', marginTop: 4 }}>Mörkt meme-test · mobil först</div>
          </div>
          {phase !== 'warning' && phase !== 'result' && (
            <button className="ghost-button" style={{ minHeight: 48, padding: '12px 16px' }} onClick={restart}>
              Börja om
            </button>
          )}
        </div>

        {phase === 'warning' && (
          <section className="glass-panel" style={{ padding: '30px 20px 24px', textAlign: 'center' }}>
            <div className="section-kicker">Sista chansen att backa</div>
            <div style={{ fontSize: 'clamp(2rem, 7vw, 3rem)', lineHeight: 0.98, letterSpacing: '-0.05em', margin: '12px 0 16px' }}>
              Varning.
              <br />
              Det här testet är mörkt av en anledning.
            </div>
            <p style={{ color: '#dbc3c3', lineHeight: 1.72, margin: '0 auto 20px', maxWidth: 560 }}>
              Vissa frågor är råa. Vissa svar kommer kännas fel. Vissa resultat känns värre än man tror.
              <br />
              Fortsätt bara om du verkligen vill veta.
            </p>
            <button className="cta-button" style={{ width: '100%' }} onClick={() => setPhase('questions')}>
              Starta testet
            </button>
          </section>
        )}

        {phase === 'questions' && currentQuestion && (
          <>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, color: '#a88787', fontSize: '0.92rem' }}>
                <span>Dina svar registreras</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div style={{ height: 10, borderRadius: 999, overflow: 'hidden', background: 'rgba(23, 6, 8, 0.88)', border: '1px solid rgba(207, 26, 43, 0.16)' }}>
                <div style={{ width: `${Math.max(4, progress)}%`, height: '100%', background: 'linear-gradient(90deg, rgba(126, 10, 20, 0.95), rgba(216, 31, 47, 0.88))', boxShadow: '0 0 22px rgba(214, 28, 47, 0.22)' }} />
              </div>
            </div>
            <QuestionCard question={currentQuestion} index={questionIndex} onAnswer={handleAnswer} />
          </>
        )}

        {phase === 'analysis' && <AnalysisPanel done={false} stepIndex={analysisStep} />}
        {phase === 'paywall' && <PaywallPanel onUnlock={() => setPhase('result')} />}
        {phase === 'result' && (
          <>
            <ResultCard answers={answers} />
            <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
              <button className="ghost-button" onClick={restart}>Kör testet igen</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
