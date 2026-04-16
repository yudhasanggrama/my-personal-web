"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "experiences", label: "Experiences" },
  { id: "educations", label: "Educations" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el =
        id === "hero"
          ? document.getElementById("hero")
          : document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35, rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3.5 select-none">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center justify-end gap-3"
            aria-label={`Navigate to ${label}`}
          >
            {/* Tooltip */}
            <span className="opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[11px] font-semibold text-muted-foreground whitespace-nowrap bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-border/60 shadow-sm pointer-events-none">
              {label}
            </span>

            {/* Dot */}
            <motion.div
              animate={{
                scale: isActive ? 1.4 : 1,
                opacity: isActive ? 1 : 0.35,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isActive
                  ? "bg-gradient-to-br from-indigo-500 to-emerald-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.4)]"
                  : "bg-foreground group-hover:opacity-70"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
