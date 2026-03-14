"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

interface RenderRealityProps {
  renders: string[];
  photos: string[];
}

export default function RenderReality({ renders, photos }: RenderRealityProps) {
  if (renders.length === 0) return null;

  // Pair renders with photos (use as many pairs as we have renders)
  const pairs = renders.map((render, i) => ({
    render,
    photo: photos[i] || photos[0], // fallback to first photo if not enough
  }));

  return (
    <section className="section-pad">
      <div className="container">
        <RevealOnScroll>
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>
            Render vs Reality
          </span>
          <h2 style={{ textAlign: "center", marginBottom: 56 }}>
            From <span className="accent">Design</span> to Build
          </h2>
        </RevealOnScroll>
        <div className="rvr-grid">
          {pairs.map((pair, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="rvr-pair">
                <div className="rvr-side">
                  <Image
                    src={pair.render}
                    alt={`Design render ${i + 1}`}
                    width={800}
                    height={500}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span className="rvr-label render">Design Render</span>
                </div>
                <div className="rvr-side">
                  <Image
                    src={pair.photo}
                    alt={`Final build ${i + 1}`}
                    width={800}
                    height={500}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span className="rvr-label reality">Final Build</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
