"use client";

import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .waf-wrap {
          position: fixed; bottom: 32px; right: 32px; z-index: 900;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .waf-wrap.visible { opacity: 1; transform: translateY(0); }

        .waf-btn {
          position: relative; display: flex; align-items: center;
          justify-content: center; width: 60px; height: 60px;
          border-radius: 50%; text-decoration: none;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 2px 10px rgba(37,211,102,0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .waf-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 16px rgba(37,211,102,0.3);
        }
        .waf-btn svg { width: 30px; height: 30px; fill: #fff; }

        .waf-tooltip {
          position: absolute; right: calc(100% + 14px); top: 50%;
          transform: translateY(-50%); white-space: nowrap;
          background: rgba(0,0,0,0.8); color: #fff;
          font-size: 0.8rem; font-weight: 500; padding: 8px 14px;
          border-radius: 8px; pointer-events: none;
          opacity: 0; transition: opacity 0.2s ease;
        }
        .waf-tooltip.show { opacity: 1; }
        .waf-tooltip::after {
          content: ''; position: absolute; right: -5px; top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 10px; height: 10px; background: rgba(0,0,0,0.8);
        }

        @media (max-width: 960px) { .waf-wrap { display: none; } }
        [dir="rtl"] .waf-wrap { right: auto; left: 32px; }
        [dir="rtl"] .waf-tooltip { right: auto; left: calc(100% + 14px); }
        [dir="rtl"] .waf-tooltip::after { right: auto; left: -5px; }
        @media (prefers-reduced-motion: reduce) {
          .waf-wrap, .waf-btn, .waf-tooltip { transition: none !important; }
        }
      `}} />

      <div className={`waf-wrap${visible ? " visible" : ""}`}>
        <a
          href="https://wa.me/971521477966?text=Hi%2C%20I%27m%20interested%20in%20an%20exhibition%20stand.%20Can%20we%20discuss%3F"
          className="waf-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </a>
        <div className={`waf-tooltip${hovered ? " show" : ""}`}>Chat with us</div>
      </div>
    </>
  );
}
