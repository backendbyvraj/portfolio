"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
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
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 1.5rem",
        transition: "all 0.3s ease",
        background: scrolled
          ? "var(--header-scrolled-bg)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(139, 92, 246, 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          height: "70px",
        }}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNav("Home")}
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <span className="gradient-text">Vraj</span>
          <span style={{ color: "var(--color-text)", marginLeft: "0.3rem" }}>
            Dev Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleNav(link.label)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color:
                    active === link.label
                      ? "var(--color-primary-light)"
                      : "var(--color-text-muted)",
                  background:
                    active === link.label
                      ? "rgba(139, 92, 246, 0.12)"
                      : "transparent",
                  border:
                    active === link.label
                      ? "1px solid rgba(139, 92, 246, 0.3)"
                      : "1px solid transparent",
                  transition: "all 0.3s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  if (active !== link.label) {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-text)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link.label) {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-text-muted)";
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => handleNav("Contact")}
              style={{ padding: "0.55rem 1.4rem", fontSize: "0.88rem" }}
            >
              Hire Me
            </a>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile right-side: theme toggle + hamburger */}
        <div style={{ display: "none", alignItems: "center", gap: "0.5rem" }} className="mobile-right">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "var(--color-text)",
              cursor: "pointer",
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.2rem",
            }}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "var(--mobile-menu-bg)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--color-border)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNav(link.label)}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color:
                      active === link.label
                        ? "var(--color-primary-light)"
                        : "var(--color-text-muted)",
                    background:
                      active === link.label
                        ? "rgba(139, 92, 246, 0.1)"
                        : "transparent",
                    transition: "all 0.25s",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: "0.5rem" }}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => handleNav("Contact")}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-right {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
