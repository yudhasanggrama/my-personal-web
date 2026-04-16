"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Layers, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ROLES = ["Full-Stack Developer", "Frontend Developer", "Backend Developer"];

function useTypewriter(texts: string[], typingSpeed = 75, pauseMs = 1800) {
  const [display, setDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pauseMs);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % texts.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, texts, typingSpeed, pauseMs]);

  return display;
}

const stats = [
  { icon: Layers, value: "4+", label: "Experiences" },
  { icon: FolderGit2, value: "6+", label: "Projects Built" },
];

export default function Hero() {
  const roleText = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative w-full py-24 lg:py-36 overflow-hidden"
    >
      {/* ── Animated Aurora Blobs ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* ── Dot-grid overlay ── */}
      <div className="absolute inset-0 -z-10 hero-dot-grid pointer-events-none opacity-[0.04]" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 leading-tight">
              Hi, I&apos;m{" "}
              <span className="animated-gradient-text italic">
                Yudha Sanggrama Wijaya
              </span>{" "}
              👋
            </h1>

            {/* Typewriter role */}
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6 h-8 flex items-center gap-1 justify-center md:justify-start">
              <span>{roleText}</span>
              <span className="w-[2px] h-6 bg-primary/70 animate-blink ml-0.5 rounded-full" />
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              A Full-Stack Developer passionate about designing and building
              modern web applications — from initial planning to final
              production.
            </p>

            {/* ── Stats row ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center md:justify-start gap-6 mt-8 mb-6"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-1.5 text-foreground">
                    <Icon className="w-4 h-4 text-primary/70" />
                    <span className="text-2xl font-extrabold animated-gradient-text">
                      {value}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ── CTA Button ── */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full gap-2 px-8 h-12 text-base border-2 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1LWWxztTyNOx0ADRl_WR0BaGJ1bbk4O9G/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Download className="w-5 h-5" /> Download CV
              </Button>
            </div>
          </motion.div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Rotating gradient ring */}
            <div className="absolute inset-[-6px] rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-emerald-500 opacity-30 blur-sm animate-spin-slow" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] rotate-6 scale-105" />
              <div className="absolute inset-0 border-2 border-primary/40 rounded-[2rem] -rotate-3 scale-100" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/img/profile.jpg"
                  alt="Yudha Profile"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
