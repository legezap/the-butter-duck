export default function BlueprintSignal() {
  const gold = '#fcd940';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100%',
        maxWidth: 420,
        opacity: 0.12,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0 }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.04 }
          50% { opacity: 0.15 }
        }
        @media (prefers-reduced-motion: reduce) {
          .bp-line { animation: none !important; stroke-dashoffset: 0 !important }
          .bp-dot  { animation: none !important; opacity: 0.1 !important }
        }
      `}</style>

      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer booth boundary */}
        <rect
          className="bp-line"
          x="40" y="40" width="320" height="320" rx="2"
          stroke={gold} strokeWidth="1.5"
          strokeDasharray="1280" strokeDashoffset="1280"
          style={{ animation: 'draw 2s ease-out 0s forwards' }}
        />

        {/* L-shaped partition — vertical segment */}
        <line
          className="bp-line"
          x1="200" y1="40" x2="200" y2="260"
          stroke={gold} strokeWidth="1.2"
          strokeDasharray="220" strokeDashoffset="220"
          style={{ animation: 'draw 2s ease-out 0.4s forwards' }}
        />

        {/* L-shaped partition — horizontal segment */}
        <line
          className="bp-line"
          x1="200" y1="260" x2="360" y2="260"
          stroke={gold} strokeWidth="1.2"
          strokeDasharray="160" strokeDashoffset="160"
          style={{ animation: 'draw 2s ease-out 0.8s forwards' }}
        />

        {/* Meeting room */}
        <rect
          className="bp-line"
          x="240" y="80" width="100" height="80" rx="1"
          stroke={gold} strokeWidth="1"
          strokeDasharray="360" strokeDashoffset="360"
          style={{ animation: 'draw 2s ease-out 1.2s forwards' }}
        />

        {/* Reception desk */}
        <line
          className="bp-line"
          x1="80" y1="180" x2="170" y2="180"
          stroke={gold} strokeWidth="1.5"
          strokeDasharray="90" strokeDashoffset="90"
          style={{ animation: 'draw 2s ease-out 1.6s forwards' }}
        />

        {/* Entry opening + arrow */}
        <polyline
          className="bp-line"
          points="40,200 10,200 10,240 40,240"
          stroke={gold} strokeWidth="1"
          strokeDasharray="110" strokeDashoffset="110"
          style={{ animation: 'draw 2s ease-out 2s forwards' }}
        />
        <polyline
          className="bp-line"
          points="22,214 10,220 22,226"
          stroke={gold} strokeWidth="1"
          strokeDasharray="20" strokeDashoffset="20"
          style={{ animation: 'draw 2s ease-out 2.2s forwards' }}
        />

        {/* Node dots at key intersections */}
        {[
          [40, 200],   // entry top
          [40, 240],   // entry bottom
          [200, 260],  // L-partition corner
          [200, 40],   // partition top
          [290, 120],  // meeting room center
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            className="bp-dot"
            cx={cx} cy={cy} r="3"
            fill={gold}
            opacity="0.04"
            style={{
              animation: `pulse 4s ease-in-out ${2.5 + i * 0.3}s infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
