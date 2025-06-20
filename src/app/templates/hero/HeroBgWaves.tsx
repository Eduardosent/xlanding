'use client';

export default function HeroBgWaves() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '150px',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          width: '200%', // más ancho para animar el movimiento
          height: '100%',
          display: 'block',
          animation: 'waveMove 10s linear infinite',
        }}
      >
        <path
          fill="rgba(255, 255, 255, 0.2)"
          d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,106.7C840,117,960,139,1080,138.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      <style jsx>{`
        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
