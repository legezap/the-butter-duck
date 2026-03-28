"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  /* show after 2s delay for a polished entrance */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  /* parallax tilt on mouse proximity */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / 12);
      mouseY.set((e.clientY - cy) / 12);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, (v) => -v * 0.4), springConfig);
  const rotateY = useSpring(useTransform(mouseX, (v) => v * 0.4), springConfig);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .waf-wrap {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 900;
          perspective: 600px;
        }

        /* Outer pulse ring */
        .waf-pulse {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1.5px solid rgba(37, 211, 102, 0.35);
          animation: wafPulse 2.8s ease-out infinite;
        }
        .waf-pulse-2 {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(37, 211, 102, 0.2);
          animation: wafPulse 2.8s ease-out infinite 1.4s;
        }
        @keyframes wafPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* The button itself */
        .waf-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow:
            0 4px 16px rgba(37, 211, 102, 0.3),
            0 8px 40px rgba(37, 211, 102, 0.15),
            inset 0 1px 1px rgba(255,255,255,0.25);
          text-decoration: none;
          transform-style: preserve-3d;
          transition: box-shadow 0.5s ease;
          will-change: transform;
        }

        .waf-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Glass highlight on hover */
        .waf-btn::after {
          content: '';
          position: absolute;
          top: 4px;
          left: 12px;
          right: 12px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .waf-btn:hover::after {
          opacity: 1;
        }

        .waf-btn:hover {
          box-shadow:
            0 6px 24px rgba(37, 211, 102, 0.45),
            0 12px 48px rgba(37, 211, 102, 0.2),
            inset 0 1px 1px rgba(255,255,255,0.3);
        }

        .waf-btn svg {
          width: 32px;
          height: 32px;
          fill: #fff;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
          position: relative;
          z-index: 1;
        }

        /* Tooltip */
        .waf-tooltip {
          position: absolute;
          right: calc(100% + 16px);
          top: 50%;
          transform: translateY(-50%);
          white-space: nowrap;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(12px);
          color: #fff;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          pointer-events: none;
        }
        .waf-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: rgba(0,0,0,0.85);
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 960px) { .waf-wrap { display: none; } }

        [dir="rtl"] .waf-wrap { right: auto; left: 32px; }
        [dir="rtl"] .waf-tooltip {
          right: auto;
          left: calc(100% + 16px);
        }
        [dir="rtl"] .waf-tooltip::after {
          right: auto;
          left: -6px;
          border-right: none;
          border-bottom: none;
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .waf-pulse, .waf-pulse-2 { animation: none !important; display: none; }
        }
      `,
        }}
      />

      <motion.div
        className="waf-wrap"
        initial={{ opacity: 0, scale: 0.5, y: 40 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="waf-pulse" />
        <div className="waf-pulse-2" />

        <motion.a
          ref={ref}
          href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F"
          className="waf-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{ rotateX, rotateY }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </motion.a>

        {/* Tooltip on hover */}
        <motion.div
          className="waf-tooltip"
          initial={{ opacity: 0, x: 8 }}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
          transition={{ duration: 0.25 }}
        >
          Chat with us
        </motion.div>
      </motion.div>
    </>
  );
}
