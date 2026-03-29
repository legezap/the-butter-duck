"use client";

/**
 * ConnectionSignal — animated orbital nodes for Contact page.
 * Context: "Let's connect." Nodes orbit and pulse, representing
 * communication channels coming together. Inspired by Tegra's
 * signal cards but adapted for exhibition/event industry.
 */

import { useEffect, useRef } from "react";

interface Node {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
}

export default function ConnectionSignal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = window.devicePixelRatio || 1;
    const W = 360;
    const H = 360;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const cx = W / 2;
    const cy = H / 2;

    // Orbital rings
    const rings = [60, 100, 140];

    // Nodes on orbits
    const nodes: Node[] = [
      { angle: 0, radius: 60, speed: 0.008, size: 5, opacity: 0.6 },
      { angle: 2.1, radius: 60, speed: 0.008, size: 3, opacity: 0.3 },
      { angle: 0.8, radius: 100, speed: -0.005, size: 6, opacity: 0.5 },
      { angle: 3.5, radius: 100, speed: -0.005, size: 4, opacity: 0.35 },
      { angle: 1.5, radius: 140, speed: 0.003, size: 4, opacity: 0.4 },
      { angle: 4.2, radius: 140, speed: 0.003, size: 3, opacity: 0.25 },
    ];

    let time = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Draw orbital rings
      rings.forEach((r) => {
        ctx.strokeStyle = "rgba(252, 217, 64, 0.06)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Center pulse
      const pulseR = 8 + Math.sin(time * 0.02) * 2;
      const pulseAlpha = 0.15 + Math.sin(time * 0.02) * 0.05;
      ctx.fillStyle = `rgba(252, 217, 64, ${pulseAlpha})`;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.fillStyle = "rgba(252, 217, 64, 0.4)";
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw nodes
      const nodePositions: { x: number; y: number }[] = [];

      nodes.forEach((node) => {
        if (!prefersReduced) {
          node.angle += node.speed;
        }
        const nx = cx + Math.cos(node.angle) * node.radius;
        const ny = cy + Math.sin(node.angle) * node.radius;
        nodePositions.push({ x: nx, y: ny });

        // Node glow
        ctx.fillStyle = `rgba(252, 217, 64, ${node.opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(nx, ny, node.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = `rgba(252, 217, 64, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connection lines from center to nodes
      nodePositions.forEach((pos, i) => {
        const alpha = nodes[i].opacity * 0.15;
        ctx.strokeStyle = `rgba(252, 217, 64, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      });

      // Cross-connections between same-ring nodes
      for (let i = 0; i < nodePositions.length - 1; i += 2) {
        const a = nodePositions[i];
        const b = nodePositions[i + 1];
        ctx.strokeStyle = "rgba(252, 217, 64, 0.05)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      time++;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        width: 360,
        height: 360,
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />
  );
}
