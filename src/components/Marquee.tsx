"use client";

import { useEffect, useRef } from "react";

interface Props {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 1 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf: number;
    const loop = () => {
      posRef.current -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
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
