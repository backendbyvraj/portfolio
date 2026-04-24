"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

/** Returns true (dark) or false (light) based on local clock time.
 *  6:00 – 17:59  → light (day)
 *  18:00 – 5:59  → dark  (night)
 */
function isDarkByTime(): boolean {
  const hour = new Date().getHours();
  return hour < 6 || hour >= 18;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // On every page load/refresh → always set theme based on current local time.
    // Manual toggle only lasts for the current session (sessionStorage).
    const sessionOverride = sessionStorage.getItem("theme");
    const isDark = sessionOverride ? sessionOverride === "dark" : isDarkByTime();
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    // sessionStorage → resets automatically on page refresh / tab close
    sessionStorage.setItem("theme", theme);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        border: "1.5px solid var(--color-border)",
        background: "var(--color-bg-card)",
        color: dark ? "#fbbf24" : "#7c3aed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "0.85rem",
        transition: "all 0.25s ease",
        flexShrink: 0,
        outline: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--color-primary)";
        el.style.boxShadow = "0 0 10px rgba(139,92,246,0.35)";
        el.style.transform = "rotate(20deg) scale(1.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--color-border)";
        el.style.boxShadow = "none";
        el.style.transform = "rotate(0deg) scale(1)";
      }}
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
