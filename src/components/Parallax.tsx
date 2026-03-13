"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function Parallax({ children, className, speed = 40 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const update = useCallback(() => {
    if (!ref.current || prefersReducedMotion.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 0 when element center is at viewport center, -1 to 1 range roughly
    const centerOffset =
      (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
    setOffset(-centerOffset * speed);
    ticking.current = false;
  }, [speed]);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(update);
    }
  }, [update]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount so initial position is correct
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll, update]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: prefersReducedMotion.current
          ? undefined
          : `translate3d(0, ${offset}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
