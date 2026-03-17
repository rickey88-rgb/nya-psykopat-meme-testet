export function DemonFace({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: compact ? 260 : 340,
        height: compact ? 340 : 440,
        margin: '0 auto',
        filter: 'drop-shadow(0 18px 48px rgba(0,0,0,0.72))',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '4% 16% 14%',
          borderRadius: '46% 46% 54% 54% / 40% 40% 60% 60%',
          background:
            'radial-gradient(circle at 50% 24%, rgba(88,88,88,0.9), rgba(18,18,18,0.98) 38%, rgba(5,5,5,1) 74%)',
          boxShadow:
            'inset 0 -34px 54px rgba(0,0,0,0.92), inset 0 20px 36px rgba(255,255,255,0.06), 0 0 60px rgba(146, 10, 23, 0.24)',
          transform: 'skewY(-1deg)',
          animation: 'pageBreath 7.8s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '24%',
          top: 0,
          width: '20%',
          height: '18%',
          background: 'linear-gradient(180deg, rgba(22,22,22,1), rgba(0,0,0,1))',
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          transform: 'rotate(-20deg)',
          boxShadow: '0 0 18px rgba(0,0,0,0.85)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '24%',
          top: 0,
          width: '20%',
          height: '18%',
          background: 'linear-gradient(180deg, rgba(22,22,22,1), rgba(0,0,0,1))',
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          transform: 'rotate(20deg)',
          boxShadow: '0 0 18px rgba(0,0,0,0.85)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '29%',
          top: '34%',
          width: '15%',
          height: '7%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,80,90,1), rgba(197,10,29,0.95) 40%, rgba(92,0,8,0.9) 70%, transparent 74%)',
          boxShadow: '0 0 26px rgba(214, 28, 47, 0.95), 0 0 62px rgba(214, 28, 47, 0.34)',
          animation: 'eyePulse 2.8s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '29%',
          top: '34%',
          width: '15%',
          height: '7%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,80,90,1), rgba(197,10,29,0.95) 40%, rgba(92,0,8,0.9) 70%, transparent 74%)',
          boxShadow: '0 0 26px rgba(214, 28, 47, 0.95), 0 0 62px rgba(214, 28, 47, 0.34)',
          animation: 'eyePulse 2.8s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '41%',
          top: '42%',
          width: '18%',
          height: '12%',
          background: 'linear-gradient(180deg, rgba(18,18,18,0.9), rgba(0,0,0,1))',
          clipPath: 'polygon(50% 0, 80% 52%, 58% 100%, 42% 100%, 20% 52%)',
          filter: 'drop-shadow(0 7px 16px rgba(0,0,0,0.9))',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '30%',
          top: '60%',
          width: '40%',
          height: '12%',
          borderBottomLeftRadius: '44% 100%',
          borderBottomRightRadius: '44% 100%',
          borderTopLeftRadius: '18% 0',
          borderTopRightRadius: '18% 0',
          background: 'linear-gradient(180deg, rgba(37,6,10,0.4), rgba(0,0,0,1))',
          boxShadow: 'inset 0 -16px 24px rgba(0,0,0,0.95)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '31%',
          top: '17%',
          width: '38%',
          height: '72%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 60%)',
          filter: 'blur(10px)',
          opacity: 0.55,
        }}
      />
    </div>
  );
}
