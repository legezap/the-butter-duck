"use client";

/**
 * BlueprintSignal — animated floor-plan grid for Homepage hero.
 * Context: Exhibition stand design & build. The animation subtly draws
 * a floor-plan outline, suggesting technical precision and architectural thinking.
 * Positioned absolutely in the hero, behind content.
 */

import { useEffect, useRef } from "react";

export default function BlueprintSignal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = window.devicePixelRatio || 1;
    const W = 480;
    const H = 480;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // Floor plan segments (relative coordinates 0-1)
    const segments = [
      // Outer walls
      { x1: 0.1, y1: 0.1, x2: 0.9, y2: 0.1 },
      { x1: 0.9, y1: 0.1, x2: 0.9, y2: 0.9 },
      { x1: 0.9, y1: 0.9, x2: 0.1, y2: 0.9 },
      { x1: 0.1, y1: 0.9, x2: 0.1, y2: 0.1 },
      // Internal walls
      { x1: 0.1, y1: 0.45, x2: 0.55, y2: 0.45 },
      { x1: 0.55, y1: 0.1, x2: 0.55, y2: 0.65 },
      { x1: 0.55, y1: 0.65, x2: 0.9, y2: 0.65 },
      // Reception desk
      { x1: 0.2, y1: 0.6, x2: 0.4, y2: 0.6 },
      { x1: 0.4, y1: 0.6, x2: 0.4, y2: 0.75 },
      // Meeting room
      { x1: 0.65, y1: 0.2, x2: 0.8, y2: 0.2 },
      { x1: 0.8, y1: 0.2, x2: 0.8, y2: 0.4 },
      { x1: 0.8, y1: 0.4, x2: 0.65, y2: 0.4 },
    ];

    // Dimension markers
    const dims = [
      { x: 0.5, y: 0.05, label: "12m" },
      { x: 0.95, y: 0.5, label: "10m" },
      { x: 0.47, y: 0.42, label: "5.4m" },
    ];

    let progress = 0;
    const speed = prefersReduced ? 100 : 0.003;

    if (prefersReduced) progress = 1;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(252, 217, 64, 0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 10; i++) {
        const x = (i / 10) * W;
        const y = (i / 10) * H;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Floor plan lines (draw progressively)
      const totalSegments = segments.length;
      const drawnSegments = progress * totalSegments;

      segments.forEach((seg, i) => {
        if (i > drawnSegments) return;

        const segProgress = Math.min(1, drawnSegments - i);
        const x1 = seg.x1 * W;
        const y1 = seg.y1 * H;
        const x2 = x1 + (seg.x2 * W - x1) * segProgress;
        const y2 = y1 + (seg.y2 * H - y1) * segProgress;

        ctx.strokeStyle = i < 4
          ? "rgba(252, 217, 64, 0.2)"   // outer walls — brighter
          : "rgba(252, 217, 64, 0.12)"; // internal — subtler
        ctx.lineWidth = i < 4 ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Corner markers (appear after walls drawn)
      if (progress > 0.4) {
        const cornerAlpha = Math.min(1, (progress - 0.4) * 3) * 0.25;
        ctx.fillStyle = `rgba(252, 217, 64, ${cornerAlpha})`;
        const corners = [
          [0.1, 0.1], [0.9, 0.1], [0.9, 0.9], [0.1, 0.9],
        ];
        corners.forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.arc(cx * W, cy * H, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Dimension labels (appear last)
      if (progress > 0.7) {
        const dimAlpha = Math.min(1, (progress - 0.7) * 3) * 0.2;
        ctx.font = "10px 'DM Sans', sans-serif";
        ctx.fillStyle = `rgba(252, 217, 64, ${dimAlpha})`;
        ctx.textAlign = "center";
        dims.forEach((d) => {
          ctx.fillText(d.label, d.x * W, d.y * H);
        });
      }

      if (progress < 1) {
        progress += speed;
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    // Delay start for dramatic effect
    const startDelay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(draw);
    }, prefersReduced ? 0 : 800);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 480,
        height: 480,
        opacity: 0.6,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}
