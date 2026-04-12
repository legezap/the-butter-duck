"use client";

import { useEffect, useRef, useState } from "react";

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
  const isVisible = useRef(false);
  const [willChange, setWillChange] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const updatePreference = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", updatePreference);

    // IntersectionObserver — only run rAF when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        setWillChange(entry.isIntersecting);
      },
      { rootMargin: "50px" }
    );
    observer.observe(el);

    const updateTarget = () => {
      if (!el || prefersReducedMotion.current) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerOffset =
        (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
      target.current = -centerOffset * speed;
    };

    const loop = () => {
      if (!isVisible.current) {
        raf.current = requestAnimationFrame(loop);
        return;
      }

      if (prefersReducedMotion.current) {
        if (el) el.style.transform = "";
        raf.current = requestAnimationFrame(loop);
        return;
      }

      updateTarget();

      // Lerp towards target — 0.08 gives silk-like easing
      current.current += (target.current - current.current) * 0.08;

      el.style.transform = `translate3d(0, ${current.current}px, 0) scale(1.03)`;

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      mediaQuery.removeEventListener("change", updatePreference);
      observer.disconnect();
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`${className || ""}${willChange ? " parallax-active" : ""}`}
    >
      {children}
    </div>
  );
}
