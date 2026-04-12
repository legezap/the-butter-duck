"use client";

import { useEffect, useRef } from "react";

interface Props {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 1 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const effectiveSpeed = () => (mq.matches ? 0 : speed);

    let raf: number;
    let frameCount = 0;

    const recalcHalfWidth = () => {
      const hw = track.scrollWidth / 2;
      if (hw > 0) halfWidthRef.current = hw;
    };

    const loop = () => {
      const s = effectiveSpeed();
      if (s > 0) {
        // Recalculate halfWidth every 60 frames or if it's still 0
        if (halfWidthRef.current === 0 || frameCount % 60 === 0) {
          recalcHalfWidth();
        }
        frameCount++;

        posRef.current -= s;
        const halfWidth = halfWidthRef.current;
        if (halfWidth > 0 && Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    // Nested rAF to ensure layout is complete before starting
    raf = requestAnimationFrame(() => {
      recalcHalfWidth();
      raf = requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(raf);
  }, [speed]);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="scroll-text">
      <div className="scroll-text-inner" ref={trackRef} style={{ animation: "none" }}>
        {doubled.map((item, i) => (
          <span key={i} className={i % 2 === 0 ? undefined : "accent-word"}>
            {item} &#9670;
          </span>
        ))}
      </div>
    </div>
  );
}
