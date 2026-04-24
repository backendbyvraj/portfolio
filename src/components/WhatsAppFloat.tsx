"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919726053886?text=Hi%20Vraj%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!";

export default function WhatsAppFloat() {
  const [wiggle, setWiggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wiggleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Show button after slight delay on mount
    const showTimer = setTimeout(() => setVisible(true), 800);

    const handleScroll = () => {
      setWiggle(false);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      if (wiggleTimer.current) clearTimeout(wiggleTimer.current);

      scrollTimer.current = setTimeout(() => {
        setWiggle(true);
        wiggleTimer.current = setTimeout(() => setWiggle(false), 1000);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(showTimer);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      if (wiggleTimer.current) clearTimeout(wiggleTimer.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes wa-entrance {
          0%   { opacity: 0; transform: scale(0) rotate(-180deg); }
          70%  { transform: scale(1.15) rotate(8deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes wa-wiggle {
          0%   { transform: rotate(0deg)   scale(1); }
          10%  { transform: rotate(-18deg) scale(1.15); }
          25%  { transform: rotate(18deg)  scale(1.18); }
          40%  { transform: rotate(-14deg) scale(1.15); }
          55%  { transform: rotate(14deg)  scale(1.12); }
          70%  { transform: rotate(-8deg)  scale(1.08); }
          85%  { transform: rotate(6deg)   scale(1.04); }
          100% { transform: rotate(0deg)   scale(1); }
        }
        @keyframes wa-pulse-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .wa-float-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.25);
          transition: box-shadow 0.2s ease, background 0.2s ease, opacity 0.4s ease, transform 0.4s ease;
          opacity: 0;
          transform: scale(0);
          text-decoration: none;
        }
        .wa-float-btn.wa-visible {
          animation: wa-entrance 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .wa-float-btn.wa-wiggle {
          animation: wa-wiggle 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
        }
        .wa-float-btn:hover {
          background: #1ebe5d;
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.65), 0 3px 12px rgba(0,0,0,0.3);
          transform: scale(1.1) !important;
        }
        .wa-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          animation: wa-pulse-ring 1.8s ease-out infinite;
          pointer-events: none;
        }
        .wa-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: #1a1a2e;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 8px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.02em;
        }
        .wa-tooltip::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #1a1a2e;
        }
        .wa-float-btn:hover .wa-tooltip {
          opacity: 1;
        }
      `}</style>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`wa-float-btn${visible ? " wa-visible" : ""}${wiggle ? " wa-wiggle" : ""}`}
      >
        <span className="wa-pulse-ring" />
        <span className="wa-tooltip">Chat on WhatsApp</span>

        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.44-1.77A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.45 11.45 0 0 1-5.84-1.6l-.42-.25-4.42 1.05 1.08-4.3-.27-.44A11.47 11.47 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.28-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.39.26-.73.09-.34-.17-1.43-.53-2.72-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83s1.22 3.28 1.39 3.51c.17.23 2.4 3.67 5.82 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.31-.23-.65-.4z"/>
        </svg>
      </a>
    </>
  );
}
