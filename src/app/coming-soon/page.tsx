"use client";

import { useEffect, useState } from "react";

// ─── LAUNCH TIME: April 24, 2026 at 2:00 PM IST ──────────────────────────────
const LAUNCH = new Date("2026-04-24T14:00:00+05:30");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH.getTime() - Date.now());
  const h = Math.floor(diff / 1000 / 3600);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { h, m, s, done: diff <= 0 };
}

export default function ComingSoon() {
  const [time, setTime] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      const t = getTimeLeft();
      setTime(t);
      if (t.done) {
        clearInterval(id);
        // Auto-redirect to home once launched
        window.location.href = "/";
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: #0a0a0f;
          color: #f1f5f9;
          min-height: 100vh;
          overflow: hidden;
        }

        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-25px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,20px)} }
        @keyframes pulse  { 0%,100%{opacity:.7} 50%{opacity:1} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin   { to{transform:rotate(360deg)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 30px rgba(139,92,246,0.4)} 50%{box-shadow:0 0 60px rgba(139,92,246,0.8),0 0 100px rgba(6,182,212,0.3)} }

        .cs-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
          text-align: center;
        }

        .cs-orb1 {
          position: fixed; top: -15%; right: -10%;
          width: 50vmax; height: 50vmax; border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%);
          pointer-events: none;
          animation: float1 8s ease-in-out infinite;
        }
        .cs-orb2 {
          position: fixed; bottom: -10%; left: -8%;
          width: 40vmax; height: 40vmax; border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: float2 7s ease-in-out infinite;
        }

        .cs-logo {
          font-size: 1.1rem; font-weight: 800; letter-spacing: -0.02em;
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s ease both;
        }
        .cs-logo .grad {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 50px;
          padding: 0.4rem 1rem;
          font-size: 0.78rem; font-weight: 700;
          color: #a78bfa; letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .cs-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #8b5cf6;
          animation: pulse 2s infinite;
        }

        .cs-title {
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          font-weight: 900; line-height: 1.1;
          margin-bottom: 1rem;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .cs-title .grad {
          background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-sub {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #94a3b8; max-width: 480px;
          line-height: 1.7; margin-bottom: 3rem;
          animation: fadeUp 0.6s 0.3s ease both;
        }

        /* ── Countdown blocks ── */
        .cs-countdown {
          display: flex; gap: 1rem; align-items: center;
          margin-bottom: 3rem;
          animation: fadeUp 0.6s 0.4s ease both;
        }

        .cs-unit {
          display: flex; flex-direction: column; align-items: center;
          background: rgba(139,92,246,0.07);
          border: 1.5px solid rgba(139,92,246,0.2);
          border-radius: 16px;
          padding: 1.2rem 1.6rem;
          min-width: 90px;
          animation: glowPulse 3s ease-in-out infinite;
        }
        .cs-unit:nth-child(3) { animation-delay: 0.5s; }
        .cs-unit:nth-child(5) { animation-delay: 1s; }

        .cs-num {
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 900; line-height: 1;
          background: linear-gradient(135deg, #a78bfa, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          font-variant-numeric: tabular-nums;
        }
        .cs-label {
          font-size: 0.68rem; font-weight: 700;
          color: #64748b; letter-spacing: 0.12em;
          text-transform: uppercase; margin-top: 0.4rem;
        }

        .cs-sep {
          font-size: 2.5rem; font-weight: 900;
          color: rgba(139,92,246,0.5);
          animation: pulse 1s ease-in-out infinite;
          margin-bottom: 1.2rem;
        }

        /* ── Progress bar ── */
        .cs-progress-wrap {
          width: 100%; max-width: 400px;
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s 0.5s ease both;
        }
        .cs-progress-label {
          display: flex; justify-content: space-between;
          font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .cs-progress-bar {
          height: 6px; background: rgba(139,92,246,0.1);
          border-radius: 50px; overflow: hidden;
        }
        .cs-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          border-radius: 50px;
          transition: width 1s linear;
        }

        /* ── Social row ── */
        .cs-socials {
          display: flex; gap: 0.75rem;
          animation: fadeUp 0.6s 0.6s ease both;
        }
        .cs-social-link {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.2);
          color: #94a3b8; font-size: 1rem;
          text-decoration: none;
          transition: all 0.25s;
        }
        .cs-social-link:hover {
          background: rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.5);
          color: #a78bfa;
          transform: translateY(-3px);
        }

        .cs-footer {
          position: fixed; bottom: 1.5rem;
          font-size: 0.75rem; color: #334155;
          animation: fadeUp 0.6s 0.7s ease both;
        }

        /* Spinner when launched */
        .cs-spinner {
          width: 48px; height: 48px;
          border: 3px solid rgba(139,92,246,0.2);
          border-top-color: #8b5cf6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }

        @media (max-width: 480px) {
          .cs-unit { min-width: 72px; padding: 1rem 1rem; }
          .cs-countdown { gap: 0.6rem; }
        }
      `}</style>

      <div className="cs-wrap">
        <div className="cs-orb1" />
        <div className="cs-orb2" />

        {/* Logo */}
        <div className="cs-logo">
          <span className="grad">Vraj</span>
          <span style={{ color: "#f1f5f9", marginLeft: "0.3rem" }}>Dev Studio</span>
        </div>

        {/* Badge */}
        <div className="cs-badge">
          <span className="cs-badge-dot" />
          Launching Today
        </div>

        {/* Title */}
        <h1 className="cs-title">
          Something <span className="grad">Amazing</span><br />is Coming
        </h1>

        {/* Subtitle */}
        <p className="cs-sub">
          My portfolio is getting the final touches.
          Be ready to see some seriously cool work at <strong style={{ color: "#a78bfa" }}>2:00 PM IST</strong>.
        </p>

        {/* Countdown */}
        {mounted && (
          time.done ? (
            <div style={{ marginBottom: "3rem" }}>
              <div className="cs-spinner" />
              <p style={{ color: "#a78bfa", fontWeight: 700, fontSize: "1.1rem" }}>
                We&apos;re live! Redirecting...
              </p>
            </div>
          ) : (
            <div className="cs-countdown">
              <div className="cs-unit">
                <span className="cs-num">{pad(time.h)}</span>
                <span className="cs-label">Hours</span>
              </div>
              <div className="cs-sep">:</div>
              <div className="cs-unit">
                <span className="cs-num">{pad(time.m)}</span>
                <span className="cs-label">Mins</span>
              </div>
              <div className="cs-sep">:</div>
              <div className="cs-unit">
                <span className="cs-num">{pad(time.s)}</span>
                <span className="cs-label">Secs</span>
              </div>
            </div>
          )
        )}

        {/* Progress bar */}
        {mounted && !time.done && (() => {
          const total = LAUNCH.getTime() - new Date("2026-04-24T00:00:00+05:30").getTime();
          const elapsed = total - Math.max(0, LAUNCH.getTime() - Date.now());
          const pct = Math.min(100, (elapsed / total) * 100).toFixed(1);
          return (
            <div className="cs-progress-wrap">
              <div className="cs-progress-label">
                <span>Progress</span>
                <span>{pct}%</span>
              </div>
              <div className="cs-progress-bar">
                <div className="cs-progress-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })()}

        {/* Socials */}
        <div className="cs-socials">
          <a href="https://github.com/backendbyvraj" target="_blank" rel="noopener noreferrer"
            className="cs-social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/pandya-vraj-b800b819b" target="_blank" rel="noopener noreferrer"
            className="cs-social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z"/>
            </svg>
          </a>
          <a href="https://wa.me/919726053886" target="_blank" rel="noopener noreferrer"
            className="cs-social-link" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.61.71.22 1.35.19 1.86.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34zm-5.4 7.4h-.02a9.89 9.89 0 0 1-5.03-1.37l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.1 12.02C2.1 6.55 6.57 2.1 12.08 2.1a9.85 9.85 0 0 1 9.85 9.86c-.01 5.47-4.47 9.82-9.86 9.82zM20.52 3.49A11.82 11.82 0 0 0 12.07 0C5.46 0 .1 5.36.1 11.97a11.87 11.87 0 0 0 1.59 5.97L0 24l6.23-1.63a11.9 11.9 0 0 0 5.83 1.49h.01C18.6 23.86 24 18.5 24 11.89a11.8 11.8 0 0 0-3.48-8.4z"/>
            </svg>
          </a>
          <a href="mailto:pandyavraj234@gmail.com"
            className="cs-social-link" aria-label="Email">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

        <p className="cs-footer">
          © 2026 Vraj Dev Studio · Surat, India
        </p>
      </div>
    </>
  );
}
