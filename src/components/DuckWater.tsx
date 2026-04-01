"use client";

import Image from "next/image";
import { asset } from "@/lib/basePath";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  badge?: string;
}

export default function DuckWater({ badge }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`duck-water-wrap${isInView ? " in-view" : ""}`}
    >
      {/* Duck image */}
      <div className="duck-float">
        <Image
          src={asset("/assets/photos/duck-brand.jpg")}
          alt="The Butter Duck — the team behind your booth"
          width={640}
          height={480}
          loading="lazy"
          className="duck-img"
        />
      </div>

      {/* Water surface */}
      <div className="duck-water">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="duck-wave duck-wave-1"
        >
          <path d="M0,60 C150,20 350,100 600,60 C850,20 1050,100 1200,60 L1200,120 L0,120 Z" />
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="duck-wave duck-wave-2"
        >
          <path d="M0,80 C200,40 400,110 600,70 C800,30 1000,100 1200,60 L1200,120 L0,120 Z" />
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="duck-wave duck-wave-3"
        >
          <path d="M0,50 C100,90 300,30 500,70 C700,110 900,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Shadow under duck */}
      <div className="duck-shadow" />

      {/* Badge */}
      {badge && <div className="about-badge">{badge}</div>}

      <style dangerouslySetInnerHTML={{ __html: `
        .duck-water-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: linear-gradient(180deg, #f5c518 0%, #fcd940 50%, #e5b800 100%);
          aspect-ratio: 4/3;
        }

        /* Duck float animation */
        .duck-float {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100%;
          transform: translateY(40px);
          opacity: 0;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease;
        }
        .in-view .duck-float {
          transform: translateY(0);
          opacity: 1;
          animation: duckBob 4s ease-in-out 0.8s infinite;
        }
        .duck-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Bobbing animation */
        @keyframes duckBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(0.5deg); }
          50% { transform: translateY(-2px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-0.5deg); }
        }

        /* Water container */
        .duck-water {
          position: absolute;
          bottom: 0;
          left: -5%;
          right: -5%;
          height: 35%;
          z-index: 4;
          pointer-events: none;
        }

        /* Wave layers */
        .duck-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
        }
        .duck-wave-1 path {
          fill: rgba(252, 217, 64, 0.7);
        }
        .duck-wave-2 path {
          fill: rgba(229, 195, 56, 0.5);
        }
        .duck-wave-3 path {
          fill: rgba(0, 0, 0, 0.15);
        }

        .duck-wave-1 {
          animation: waveMove1 6s ease-in-out infinite;
        }
        .duck-wave-2 {
          animation: waveMove2 8s ease-in-out infinite;
        }
        .duck-wave-3 {
          animation: waveMove3 7s ease-in-out infinite;
        }

        @keyframes waveMove1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
        }
        @keyframes waveMove2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20%); }
        }
        @keyframes waveMove3 {
          0%, 100% { transform: translateX(-10%); }
          50% { transform: translateX(-30%); }
        }

        /* Shadow underneath */
        .duck-shadow {
          position: absolute;
          bottom: 28%;
          left: 20%;
          right: 20%;
          height: 12px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 2;
          animation: shadowPulse 4s ease-in-out 0.8s infinite;
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(1); opacity: 0.6; }
          25% { transform: scaleX(0.9); opacity: 0.4; }
          75% { transform: scaleX(0.85); opacity: 0.35; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .in-view .duck-float { animation: none; }
          .duck-wave-1, .duck-wave-2, .duck-wave-3 { animation: none; }
          .duck-shadow { animation: none; }
        }
      `}} />
    </div>
  );
}
