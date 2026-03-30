"use client";

import { useMemo } from "react";

function generateDots(count: number, seed: number) {
  let s = seed;
  const rng = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  return Array.from({ length: count }, () => ({
    cx: rng() * 100,
    cy: rng() * 100,
    r: 1 + rng() * 1.5,
    delay: rng() * 8,
    dur: 5 + rng() * 4,
  }));
}

/**
 * Subtle floating gold dots for atmospheric depth on dark sections.
 * Pure CSS animation, no JS dependencies. Renders an absolute-positioned
 * SVG layer meant to sit behind content.
 */
export default function AmbientDots({ count = 18, seed = 42 }: { count?: number; seed?: number }) {
  const dots = useMemo(() => generateDots(count, seed), [count, seed]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .amb-dots { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
        .amb-dots svg { width: 100%; height: 100%; }
        @keyframes ambFloat {
          0%, 100% { opacity: 0.08; transform: translateY(0); }
          50% { opacity: 0.2; transform: translateY(-6px); }
        }
        .amb-dot {
          fill: var(--color-accent, #fcd940);
          opacity: 0.08;
          animation: ambFloat 6s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @media (prefers-reduced-motion: reduce) {
          .amb-dot { animation: none !important; opacity: 0.06; }
        }
      `}} />
      <div className="amb-dots" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {dots.map((d, i) => (
            <circle
              key={i}
              className="amb-dot"
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              style={{ animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s` }}
            />
          ))}
        </svg>
      </div>
    </>
  );
}
