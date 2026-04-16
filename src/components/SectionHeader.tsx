"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;       // e.g. "01"
  label: string;        // e.g. "Work"
  accent: string;       // e.g. "Experiences" — gets animated gradient
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  label,
  accent,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${isCenter ? "text-center" : ""}`}
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3 ${
          isCenter ? "text-center" : ""
        }`}
      >
        {number} / {label}
      </p>
      <h2
        className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
          isCenter ? "text-center" : ""
        }`}
      >
        {label}{" "}
        <span className="animated-gradient-text">{accent}</span>
      </h2>
      {description && (
        <p
          className={`text-muted-foreground mt-3 text-sm md:text-base leading-relaxed ${
            isCenter ? "mx-auto max-w-xl text-center" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
