"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function Parallax({ children, className, speed = 25 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const current = useRef(0);
  const target = useRef(0);
  const raf = useRef<number>(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const updatePreference = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", updatePreference);

    const updateTarget = () => {
      if (!ref.current || prefersReducedMotion.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerOffset =
        (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
      target.current = -centerOffset * speed;
    };

    const loop = () => {
      if (!ref.current || prefersReducedMotion.current) {
        if (ref.current && prefersReducedMotion.current) {
          ref.current.style.transform = "";
        }
        raf.current = requestAnimationFrame(loop);
        return;
      }

      updateTarget();

      // Lerp towards target — 0.08 gives silk-like easing
      current.current += (target.current - current.current) * 0.08;

      ref.current.style.transform = `translate3d(0, ${current.current}px, 0) scale(1.03)`;

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
