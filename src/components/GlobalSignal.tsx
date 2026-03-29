export default function GlobalSignal() {
  const count = 9;
  const lines = Array.from({ length: count }, (_, i) => {
    const angle = -90 + (i * 180) / (count - 1); // -90° to +90° (semi-circle fan)
    const rad = (angle * Math.PI) / 180;
    const len = 120;
    const x2 = 200 + Math.cos(rad) * len;
    const y2 = 200 + Math.sin(rad) * len;
    const delay = i * 0.3;
    return { x2, y2, delay };
  });

  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract signal radiating from Dubai to ten countries"
      className="w-full h-auto"
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .gs-line, .gs-dot, .gs-arc, .gs-center { animation: none !important; }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes dotFade {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.25; }
        }
        @keyframes arcSweep {
          0% { opacity: 0.12; stroke-dashoffset: 220; }
          60% { opacity: 0.04; }
          100% { opacity: 0; stroke-dashoffset: 0; }
        }
        @keyframes centerGlow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* Radar arc */}
      <path
        d="M 80 200 A 120 120 0 0 1 320 200"
        fill="none"
        stroke="#fcd940"
        strokeWidth="0.5"
        strokeDasharray="220"
        className="gs-arc"
        style={{ animation: "arcSweep 4s ease-in-out infinite" }}
      />

      {/* Radiating lines */}
      {lines.map((l, i) => (
        <line
          key={`l${i}`}
          x1={200}
          y1={200}
          x2={l.x2}
          y2={l.y2}
          stroke="#fcd940"
          strokeWidth="0.8"
          className="gs-line"
          style={{ animation: `linePulse 3s ${l.delay}s ease-in-out infinite` }}
        />
      ))}

      {/* Outer dots */}
      {lines.map((l, i) => (
        <circle
          key={`d${i}`}
          cx={l.x2}
          cy={l.y2}
          r={2.2}
          fill="#fcd940"
          className="gs-dot"
          style={{ animation: `dotFade 3s ${l.delay + 0.5}s ease-in-out infinite` }}
        />
      ))}

      {/* Center dot — UAE */}
      <circle
        cx={200}
        cy={200}
        r={4}
        fill="#fcd940"
        className="gs-center"
        style={{ animation: "centerGlow 4s ease-in-out infinite" }}
      />
    </svg>
  );
}
