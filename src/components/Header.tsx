"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [homeActive, setActive] = useState("Home");

  // On the homepage the clicked section is highlighted; sub-pages highlight their own link.
  const active =
    pathname === "/" ? homeActive
    : pathname.startsWith("/projects") ? "Projects"
    : pathname.startsWith("/about") ? "About"
    : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sliding hover pill: glides to whichever link is hovered, then back to the active one.
  const linksRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const movePill = (el: HTMLElement | null) => {
    const pill = pillRef.current;
    if (!pill) return;
    if (!el) { pill.style.opacity = "0"; return; }
    pill.style.opacity = "1";
    pill.style.width = `${el.offsetWidth}px`;
    pill.style.transform = `translateX(${el.offsetLeft}px)`;
  };
  const resetPill = () =>
    movePill(linksRef.current?.querySelector<HTMLElement>(".hd-link-active") ?? null);
  useEffect(() => { resetPill(); });

  const handleNav = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <header className={`hd ${scrolled || menuOpen ? "hd-scrolled" : ""}`}>
      <nav className="hd-bar">
        <Link href="/#home" onClick={() => handleNav("Home")} className="hd-logo" aria-label="Vraj Dev Studio — home">
          <span className="hd-logo-mark">V</span>
          <span className="hd-logo-text">
            <span className="serif">Vraj</span> Dev Studio
          </span>
        </Link>

        <ul className="hd-links" ref={linksRef} onMouseLeave={resetPill}>
          <span ref={pillRef} className="hd-pill" aria-hidden="true" />
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleNav(link.label)}
                onMouseEnter={(e) => movePill(e.currentTarget)}
                className={`hd-link ${active === link.label ? "hd-link-active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hd-right">
          <ThemeToggle />
          <Link href="/#contact" onClick={() => handleNav("Contact")} className="btn btn-primary hd-cta">
            Hire me <FaArrowRight className="btn-arrow" />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hd-burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="hd-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNav(link.label)}
                  className={`hd-menu-link ${active === link.label ? "hd-link-active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/#contact" onClick={() => handleNav("Contact")} className="btn btn-primary" style={{ width: "100%" }}>
            Hire me <FaArrowRight className="btn-arrow" />
          </Link>
        </div>
      )}

      <style>{`
        .hd {
          position: fixed;
          top: 14px;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 1rem;
          pointer-events: none;
        }
        .hd-bar, .hd-menu {
          pointer-events: auto;
          max-width: 1280px;
          margin: 0 auto;
          border: 1px solid transparent;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .hd-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          height: 60px;
          padding: 0 0.6rem 0 1.1rem;
          border-radius: 999px;
        }
        .hd-scrolled .hd-bar, .hd-menu {
          background: var(--header-scrolled-bg);
          border-color: var(--color-border);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          box-shadow: 0 10px 40px -12px rgba(0, 0, 0, 0.35);
        }
        .hd-logo { display: flex; align-items: center; gap: 0.6rem; color: var(--color-text); font-weight: 600; letter-spacing: -0.02em; }
        .hd-logo-mark {
          width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center;
          font-family: var(--font-display), Georgia, serif; font-style: italic; font-size: 1.15rem;
          color: #fff; background: var(--gradient-primary);
          box-shadow: 0 6px 18px -6px var(--color-primary);
        }
        .hd-logo-text { font-size: 1rem; }
        .hd-logo-text .serif { font-size: 1.15rem; }
        .hd-links { position: relative; display: flex; align-items: center; gap: 0.15rem; list-style: none; }
        .hd-pill {
          position: absolute; left: 0; top: 0; height: 100%; border-radius: 999px;
          background: var(--color-bg-input); box-shadow: inset 0 0 0 1px var(--color-border);
          opacity: 0; pointer-events: none;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), width 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s;
        }
        .hd-link {
          position: relative; z-index: 1;
          display: block; padding: 0.45rem 0.9rem; border-radius: 999px;
          font-size: 0.9rem; color: var(--color-text-muted);
          transition: color 0.2s, background 0.2s;
        }
        .hd-link:hover { color: var(--color-text); }
        .hd-link-active { color: var(--color-text); }
        .hd-menu .hd-link-active { background: var(--color-bg-input); }
        .hd-right { display: flex; align-items: center; gap: 0.5rem; }
        .hd-cta { padding: 0.6rem 1.15rem; font-size: 0.88rem; }
        .hd-burger {
          display: none; width: 42px; height: 42px; border-radius: 50%;
          align-items: center; justify-content: center;
          background: var(--color-bg-input); border: 1px solid var(--color-border);
          color: var(--color-text); font-size: 1.35rem; cursor: pointer;
        }
        .hd-menu {
          margin-top: 0.5rem;
          border-radius: 22px;
          padding: 0.75rem;
        }
        .hd-menu ul { list-style: none; margin-bottom: 0.75rem; }
        .hd-menu-link {
          display: block; padding: 0.8rem 1rem; border-radius: 14px;
          font-size: 1rem; color: var(--color-text-muted);
        }
        @media (max-width: 860px) {
          .hd-links, .hd-cta { display: none; }
          .hd-burger { display: inline-flex; }
        }
      `}</style>
    </header>
  );
}
