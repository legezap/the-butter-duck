export default function NetworkSignal() {
  const nodes = [
    { cx: 200, cy: 200, r: 10 },          // center
    { cx: 200, cy: 80, r: 5 },
    { cx: 305, cy: 130, r: 5 },
    { cx: 320, cy: 240, r: 5 },
    { cx: 270, cy: 330, r: 5 },
    { cx: 150, cy: 340, r: 5 },
    { cx: 80, cy: 260, r: 5 },
    { cx: 75, cy: 150, r: 5 },
    { cx: 140, cy: 100, r: 5 },
    { cx: 260, cy: 95, r: 5 },
  ];

  const lines = nodes.slice(1).map((n) => ({
    x1: nodes[0].cx, y1: nodes[0].cy, x2: n.cx, y2: n.cy,
  }));

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .ns-orbit, .ns-line, .ns-node, .ns-center { animation: none !important; }
          .ns-line { stroke-dashoffset: 0 !important; }
        }
        .ns-orbit {
          fill: none;
          stroke: #fcd940;
          stroke-opacity: 0.1;
          stroke-dasharray: 6 8;
        }
        .ns-orbit-a { animation: ns-spin 30s linear infinite; transform-origin: 200px 200px; }
        .ns-orbit-b { animation: ns-spin 45s linear infinite reverse; transform-origin: 200px 200px; }
        @keyframes ns-spin { to { transform: rotate(360deg); } }

        .ns-line {
          stroke: #fcd940;
          stroke-opacity: 0.12;
          stroke-width: 1;
          fill: none;
          stroke-dasharray: var(--len);
          stroke-dashoffset: var(--len);
          animation: ns-draw 1.2s ease-out forwards;
        }
        ${lines.map((_, i) => `.ns-line-${i} { animation-delay: ${i * 0.15}s; }`).join('\n        ')}
        @keyframes ns-draw { to { stroke-dashoffset: 0; } }

        .ns-node {
          fill: #fcd940;
          opacity: 0.1;
          animation: ns-pulse 5s ease-in-out infinite;
        }
        ${nodes.slice(1).map((_, i) => `.ns-node-${i + 1} { animation-delay: ${(i + 1) * 0.4}s; }`).join('\n        ')}
        @keyframes ns-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.3); }
        }

        .ns-center {
          fill: #fcd940;
          opacity: 0.15;
          animation: ns-center-pulse 5s ease-in-out infinite;
          transform-origin: 200px 200px;
        }
        @keyframes ns-center-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.5); }
        }
      `}</style>

      {/* Orbital rings */}
      <circle className="ns-orbit ns-orbit-a" cx="200" cy="200" r="100" />
      <circle className="ns-orbit ns-orbit-b" cx="200" cy="200" r="155" />

      {/* Connection lines */}
      {lines.map((l, i) => {
        const len = Math.hypot(l.x2 - l.x1, l.y2 - l.y1);
        return (
          <line
            key={i}
            className={`ns-line ns-line-${i}`}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            style={{ '--len': len } as React.CSSProperties}
          />
        );
      })}

      {/* Outer nodes */}
      {nodes.slice(1).map((n, i) => (
        <circle
          key={i}
          className={`ns-node ns-node-${i + 1}`}
          cx={n.cx} cy={n.cy} r={n.r}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        />
      ))}

      {/* Central node */}
      <circle className="ns-center" cx="200" cy="200" r="10" />
    </svg>
  );
}
