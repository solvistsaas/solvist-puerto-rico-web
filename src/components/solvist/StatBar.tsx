"use client";

import { AnimatedSection } from "./AnimatedSection";

export function StatBar() {
  return (
    <section
      style={{
        backgroundColor: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <AnimatedSection>
        <div
          className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          <StatItem value="191,929" label="sistemas activos en PR" />
          <Separator />
          <StatItem
            value="$0.27/kWh"
            label="LUMA Energy — 3× más caro que EE.UU."
          />
          <Separator />
          <StatItem value="30% ITC" label="federal hasta 2032" />
        </div>
      </AnimatedSection>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "18px",
          fontWeight: 700,
          color: "#FAFAFA",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "12px",
          fontWeight: 400,
          color: "rgba(250,250,250,0.35)",
          marginTop: "2px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div
      className="hidden md:block"
      style={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        backgroundColor: "rgba(250,250,250,0.15)",
      }}
    />
  );
}
