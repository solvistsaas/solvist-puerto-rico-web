"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{
        backgroundColor: scrolled
          ? "rgba(5, 5, 5, 0.85)"
          : "rgba(5, 5, 5, 0.6)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "background-color 0.3s, border-color 0.3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: nokvu logo */}
        <div className="flex items-center gap-2">
          <div
            style={{
              width: "3px",
              height: "20px",
              backgroundColor: "#EB8C3D",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "20px",
              color: "#FAFAFA",
              letterSpacing: "-0.01em",
            }}
          >
            Nokvu
          </span>
        </div>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#problema"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(250,250,250,0.5)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(250,250,250,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(250,250,250,0.5)")
            }
          >
            El problema
          </a>
          <a
            href="#solucion"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(250,250,250,0.5)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(250,250,250,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(250,250,250,0.5)")
            }
          >
            Solución
          </a>
          <a
            href="#plataforma"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(250,250,250,0.5)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(250,250,250,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(250,250,250,0.5)")
            }
          >
            Plataforma
          </a>
        </div>

        {/* Right: CTA button */}
        <a
          href="#demo"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(250,250,250,0.7)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "8px",
            padding: "8px 18px",
            transition: "all 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            e.currentTarget.style.color = "#FAFAFA";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "rgba(250,250,250,0.7)";
          }}
        >
          Agendar demo
        </a>
      </div>
    </motion.nav>
  );
}
