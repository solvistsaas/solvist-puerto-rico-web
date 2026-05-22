"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "El problema", href: "#problema" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Auditoría", href: "#audit" },
];

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(5,5,5,0.88)" : "rgba(5,5,5,0.42)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            style={{
              width: "3px",
              height: "28px",
              backgroundColor: "#EB8C3D",
              borderRadius: "2px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "22px",
                color: "#FAFAFA",
                letterSpacing: "0",
              }}
            >
              SOLVIST
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "rgba(250,250,250,0.42)",
                marginTop: "3px",
                letterSpacing: "0.08em",
                fontWeight: 500,
              }}
            >
              by Nokvu
            </span>
          </div>
        </div>

        {/* Center links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(250,250,250,0.72)",
                padding: "6px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "color 0.2s ease, background 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(250,250,250,1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(250,250,250,0.72)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 36,
              height: 36,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 6,
            }}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "#FAFAFA",
                borderRadius: 1,
                transition: "all 0.2s",
                transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
              }}
            />
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "#FAFAFA",
                borderRadius: 1,
                transition: "all 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "#FAFAFA",
                borderRadius: 1,
                transition: "all 0.2s",
                transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              overflow: "hidden",
              backgroundColor: "rgba(5,5,5,0.95)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "rgba(250,250,250,0.7)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
