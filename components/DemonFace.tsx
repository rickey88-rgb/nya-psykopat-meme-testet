export function DemonFace({ compact = false }: { compact?: boolean }) {
  const width = compact ? 'min(84vw, 360px)' : 'min(96vw, 720px)';
  const height = compact ? 250 : 390;

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
        filter: 'drop-shadow(0 28px 80px rgba(0,0,0,0.9))',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-8% -10% 10%',
          background:
            'radial-gradient(circle at 50% 24%, rgba(170, 9, 23, 0.42), rgba(98, 0, 8, 0.16) 28%, rgba(0,0,0,0) 68%)',
          filter: 'blur(26px)',
          opacity: 0.95,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '18%',
          right: '18%',
          bottom: '-2%',
          height: '46%',
          background:
            'radial-gradient(circle at 50% 10%, rgba(12,12,12,0.96), rgba(0,0,0,0.98) 56%, rgba(0,0,0,0) 100%)',
          filter: 'blur(10px)',
          opacity: 0.95,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '1%',
          top: '-2%',
          width: '27%',
          height: '54%',
          background: 'linear-gradient(180deg, rgba(34,34,34,0.92), rgba(3,3,3,1))',
          clipPath:
            'polygon(44% 0, 24% 10%, 10% 28%, 7% 46%, 14% 61%, 26% 74%, 44% 98%, 66% 100%, 72% 78%, 63% 52%, 56% 28%)',
          transform: 'rotate(-18deg)',
          boxShadow: '0 0 28px rgba(0,0,0,0.96)',
          opacity: 0.98,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '11%',
          width: '18%',
          height: '30%',
          background: 'linear-gradient(180deg, rgba(16,16,16,0.95), rgba(0,0,0,1))',
          clipPath: 'polygon(52% 0, 20% 100%, 84% 80%)',
          transform: 'rotate(-28deg)',
          opacity: 0.82,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '1%',
          top: '-2%',
          width: '27%',
          height: '54%',
          background: 'linear-gradient(180deg, rgba(34,34,34,0.92), rgba(3,3,3,1))',
          clipPath:
            'polygon(56% 0, 76% 10%, 90% 28%, 93% 46%, 86% 61%, 74% 74%, 56% 98%, 34% 100%, 28% 78%, 37% 52%, 44% 28%)',
          transform: 'rotate(18deg)',
          boxShadow: '0 0 28px rgba(0,0,0,0.96)',
          opacity: 0.98,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '10%',
          top: '11%',
          width: '18%',
          height: '30%',
          background: 'linear-gradient(180deg, rgba(16,16,16,0.95), rgba(0,0,0,1))',
          clipPath: 'polygon(48% 0, 80% 100%, 16% 80%)',
          transform: 'rotate(28deg)',
          opacity: 0.82,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '17%',
          right: '17%',
          top: '11%',
          height: '78%',
          background:
            'radial-gradient(circle at 50% 12%, rgba(96,96,96,0.36), rgba(20,20,20,0.98) 30%, rgba(2,2,2,1) 74%)',
          clipPath:
            'polygon(8% 100%, 9% 76%, 12% 48%, 20% 20%, 34% 5%, 50% 0, 66% 5%, 80% 20%, 88% 48%, 91% 76%, 92% 100%, 68% 94%, 50% 90%, 32% 94%)',
          boxShadow:
            'inset 0 -90px 100px rgba(0,0,0,0.98), inset 0 18px 28px rgba(255,255,255,0.05), 0 0 80px rgba(100, 8, 16, 0.18)',
          animation: 'pageBreath 8s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '16%',
          right: '16%',
          top: '20%',
          height: '25%',
          background:
            'linear-gradient(180deg, rgba(26,26,26,0.92), rgba(0,0,0,0.96))',
          clipPath:
            'polygon(0 58%, 8% 26%, 22% 8%, 40% 14%, 50% 24%, 60% 14%, 78% 8%, 92% 26%, 100% 58%, 82% 74%, 62% 78%, 50% 72%, 38% 78%, 18% 74%)',
          boxShadow: '0 12px 22px rgba(0,0,0,0.9)',
          opacity: 0.98,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '17%',
          top: '32%',
          width: '29%',
          height: '19%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.98), rgba(0,0,0,0.72))',
          clipPath: 'polygon(0 54%, 18% 18%, 48% 0, 100% 10%, 84% 56%, 18% 86%)',
          transform: 'rotate(-7deg)',
          opacity: 0.98,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '17%',
          top: '32%',
          width: '29%',
          height: '19%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.98), rgba(0,0,0,0.72))',
          clipPath: 'polygon(100% 54%, 82% 18%, 52% 0, 0 10%, 16% 56%, 82% 86%)',
          transform: 'rotate(7deg)',
          opacity: 0.98,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '29%',
          top: '42%',
          width: '11%',
          height: '7%',
          background:
            'radial-gradient(circle at 52% 50%, rgba(255,245,220,1) 0, rgba(255,120,120,0.98) 18%, rgba(220,20,35,0.98) 46%, rgba(90,0,8,0.76) 74%, transparent 82%)',
          clipPath: 'polygon(0 74%, 18% 18%, 64% 0, 100% 34%, 82% 82%, 20% 100%)',
          transform: 'rotate(-10deg)',
          boxShadow: '0 0 18px rgba(255, 24, 45, 0.96), 0 0 44px rgba(255, 24, 45, 0.5)',
          animation: 'eyePulse 2.4s ease-in-out infinite',
          zIndex: 3,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '29%',
          top: '42%',
          width: '11%',
          height: '7%',
          background:
            'radial-gradient(circle at 48% 50%, rgba(255,245,220,1) 0, rgba(255,120,120,0.98) 18%, rgba(220,20,35,0.98) 46%, rgba(90,0,8,0.76) 74%, transparent 82%)',
          clipPath: 'polygon(100% 74%, 82% 18%, 36% 0, 0 34%, 18% 82%, 80% 100%)',
          transform: 'rotate(10deg)',
          boxShadow: '0 0 18px rgba(255, 24, 45, 0.96), 0 0 44px rgba(255, 24, 45, 0.5)',
          animation: 'eyePulse 2.4s ease-in-out infinite',
          zIndex: 3,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '27%',
          top: '38.5%',
          width: '15%',
          height: '11%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,36,52,0.2), rgba(255,0,0,0) 76%)',
          filter: 'blur(8px)',
          opacity: 0.95,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '27%',
          top: '38.5%',
          width: '15%',
          height: '11%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,36,52,0.2), rgba(255,0,0,0) 76%)',
          filter: 'blur(8px)',
          opacity: 0.95,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '45%',
          top: '26%',
          width: '10%',
          height: '34%',
          background:
            'linear-gradient(180deg, rgba(20,20,20,0.96), rgba(0,0,0,0.9), rgba(0,0,0,0))',
          clipPath: 'polygon(50% 0, 84% 14%, 68% 100%, 32% 100%, 16% 14%)',
          opacity: 0.96,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '46%',
          top: '13%',
          width: '8%',
          height: '18%',
          background: 'linear-gradient(180deg, rgba(90,10,16,0.42), rgba(0,0,0,0))',
          clipPath: 'polygon(50% 0, 70% 16%, 54% 100%, 46% 100%, 30% 16%)',
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '20%',
          right: '20%',
          bottom: '1%',
          height: '32%',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.92) 56%, rgba(0,0,0,1))',
          filter: 'blur(12px)',
          opacity: 0.96,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '8%',
          right: '8%',
          bottom: '-2%',
          height: '28%',
          background:
            'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.65), rgba(0,0,0,0.98) 60%, rgba(0,0,0,0) 100%)',
          filter: 'blur(14px)',
          opacity: 0.92,
        }}
      />
    </div>
  );
}