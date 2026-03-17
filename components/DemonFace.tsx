export function DemonFace({ compact = false }: { compact?: boolean }) {
  const width = compact ? 'min(82vw, 340px)' : 'min(96vw, 660px)';
  const height = compact ? 220 : 360;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width,
        height,
        margin: '0 auto',
        overflow: 'visible',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 22px 60px rgba(0,0,0,0.8))',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-6% -8% 20%',
          background:
            'radial-gradient(circle at 50% 30%, rgba(170, 10, 25, 0.34), rgba(70, 0, 8, 0.18) 34%, rgba(0,0,0,0) 72%)',
          filter: 'blur(22px)',
          opacity: 0.95,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '6%',
          top: '0%',
          width: '24%',
          height: '42%',
          background:
            'linear-gradient(180deg, rgba(24,24,24,1), rgba(0,0,0,1))',
          clipPath:
            'polygon(54% 0, 70% 8%, 88% 20%, 100% 100%, 74% 88%, 58% 60%, 46% 38%, 28% 18%)',
          transform: 'rotate(-18deg)',
          boxShadow:
            '0 0 18px rgba(0,0,0,0.95), 0 0 36px rgba(120, 6, 16, 0.2)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '6%',
          top: '0%',
          width: '24%',
          height: '42%',
          background:
            'linear-gradient(180deg, rgba(24,24,24,1), rgba(0,0,0,1))',
          clipPath:
            'polygon(46% 0, 30% 8%, 12% 20%, 0 100%, 26% 88%, 42% 60%, 54% 38%, 72% 18%)',
          transform: 'rotate(18deg)',
          boxShadow:
            '0 0 18px rgba(0,0,0,0.95), 0 0 36px rgba(120, 6, 16, 0.2)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '8%',
          right: '8%',
          top: '12%',
          height: '80%',
          background:
            'radial-gradient(circle at 50% 10%, rgba(88,88,88,0.3), rgba(12,12,12,0.96) 34%, rgba(0,0,0,1) 74%)',
          clipPath:
            'polygon(8% 100%, 10% 72%, 13% 46%, 21% 22%, 34% 8%, 50% 3%, 66% 8%, 79% 22%, 87% 46%, 90% 72%, 92% 100%)',
          boxShadow:
            'inset 0 -78px 92px rgba(0,0,0,0.98), inset 0 16px 30px rgba(255,255,255,0.05), 0 0 90px rgba(120, 8, 18, 0.16)',
          animation: 'pageBreath 8.2s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '14%',
          right: '14%',
          top: '22%',
          height: '24%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.96), rgba(0,0,0,0.7) 58%, rgba(0,0,0,0))',
          clipPath:
            'polygon(0 42%, 9% 18%, 26% 6%, 40% 10%, 50% 20%, 60% 10%, 74% 6%, 91% 18%, 100% 42%, 86% 60%, 66% 70%, 50% 62%, 34% 70%, 14% 60%)',
          filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.95))',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '21%',
          top: '41%',
          width: '22%',
          height: '12%',
          background:
            'linear-gradient(90deg, rgba(255,15,35,0) 0%, rgba(255,70,82,0.75) 20%, rgba(255,185,185,0.98) 50%, rgba(255,70,82,0.75) 80%, rgba(255,15,35,0) 100%)',
          clipPath:
            'polygon(0 72%, 8% 38%, 30% 18%, 72% 22%, 100% 58%, 82% 84%, 20% 88%)',
          transform: 'rotate(-10deg)',
          boxShadow:
            '0 0 20px rgba(255, 28, 50, 0.95), 0 0 48px rgba(255, 28, 50, 0.42)',
          animation: 'eyePulse 2.3s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '21%',
          top: '41%',
          width: '22%',
          height: '12%',
          background:
            'linear-gradient(270deg, rgba(255,15,35,0) 0%, rgba(255,70,82,0.75) 20%, rgba(255,185,185,0.98) 50%, rgba(255,70,82,0.75) 80%, rgba(255,15,35,0) 100%)',
          clipPath:
            'polygon(100% 72%, 92% 38%, 70% 18%, 28% 22%, 0 58%, 18% 84%, 80% 88%)',
          transform: 'rotate(10deg)',
          boxShadow:
            '0 0 20px rgba(255, 28, 50, 0.95), 0 0 48px rgba(255, 28, 50, 0.42)',
          animation: 'eyePulse 2.3s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '18%',
          top: '35%',
          width: '28%',
          height: '18%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.2))',
          clipPath:
            'polygon(0 50%, 14% 20%, 44% 8%, 100% 14%, 86% 46%, 18% 74%)',
          transform: 'rotate(-6deg)',
          opacity: 0.96,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '18%',
          top: '35%',
          width: '28%',
          height: '18%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.2))',
          clipPath:
            'polygon(100% 50%, 86% 20%, 56% 8%, 0 14%, 14% 46%, 82% 74%)',
          transform: 'rotate(6deg)',
          opacity: 0.96,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '44%',
          top: '24%',
          width: '12%',
          height: '42%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.96), rgba(0,0,0,0.55), rgba(0,0,0,0))',
          clipPath: 'polygon(50% 0, 82% 18%, 66% 100%, 34% 100%, 18% 18%)',
          opacity: 0.88,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '11%',
          bottom: '-2%',
          width: '30%',
          height: '34%',
          background:
            'radial-gradient(circle at 50% 30%, rgba(0,0,0,0.55), rgba(0,0,0,0.92) 60%, rgba(0,0,0,0) 100%)',
          filter: 'blur(12px)',
          opacity: 0.85,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '11%',
          bottom: '-2%',
          width: '30%',
          height: '34%',
          background:
            'radial-gradient(circle at 50% 30%, rgba(0,0,0,0.55), rgba(0,0,0,0.92) 60%, rgba(0,0,0,0) 100%)',
          filter: 'blur(12px)',
          opacity: 0.85,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '22%',
          right: '22%',
          top: '14%',
          height: '62%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 22%, rgba(255,255,255,0.04), transparent 58%)',
          filter: 'blur(16px)',
          opacity: 0.42,
        }}
      />
    </div>
  );
}