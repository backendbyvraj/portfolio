"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaUsers, FaStar, FaClock } from "react-icons/fa";

const stats = [
  { icon: <FaCode />, value: 50, suffix: "+", label: "Projects Completed", color: "#8b5cf6" },
  { icon: <FaUsers />, value: 25, suffix: "+", label: "Happy Clients", color: "#06b6d4" },
  { icon: <FaStar />, value: 40, suffix: "+", label: "5-Star Reviews", color: "#f59e0b" },
  { icon: <FaClock />, value: 4, suffix: "+", label: "Years Experience", color: "#10b981" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and restart count-up every time element enters view
          if (intervalRef.current) clearInterval(intervalRef.current);
          setCount(0);
          let start = 0;
          const step = Math.ceil(target / 50);
          intervalRef.current = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(intervalRef.current!);
            } else {
              setCount(start);
            }
          }, 35);
        } else {
          // Reset to 0 when scrolled out so next entry starts fresh
          if (intervalRef.current) clearInterval(intervalRef.current);
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: "4rem 0",
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="stats-grid"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card"
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* BG glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 0%, ${stat.color}10, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.4rem",
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>
              {/* Value */}
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  textShadow: `0 0 20px ${stat.color}60`,
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
