"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    label: "Email",
    value: "yudhasanggrama@gmail.com",
    href: "mailto:yudhasanggrama@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/yudhasanggrama",
    href: "https://linkedin.com/in/yudhasanggrama",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@yudhasanggrama",
    href: "https://github.com/yudhasanggrama",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">

      {/* Section tag */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4"
      >
        05 / Contact
      </motion.p>

      {/* Main headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight"
      >
        Let&apos;s Build Something{" "}
        <span className="animated-gradient-text">Great</span>{" "}
        Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Open to new opportunities, freelance projects, and collaborations.
        Feel free to reach out — I&apos;d love to connect!
      </motion.p>

      {/* Primary CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <Button
          size="lg"
          className="rounded-full gap-2 px-10 h-14 text-base shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all"
          onClick={() => window.open("https://wa.me/6281380401393", "_blank")}
        >
          <MessageCircle className="w-5 h-5" />
          Let&apos;s Talk on WhatsApp
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8 max-w-xs mx-auto">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
          or reach me on
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Contact cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-3 mb-12"
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.icon !== Mail ? "_blank" : undefined}
            rel={c.icon !== Mail ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-left"
          >
            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
              <c.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                {c.label}
              </p>
              <p className="text-sm font-semibold truncate">{c.value}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary/60 ml-auto shrink-0 transition-colors" />
          </a>
        ))}
      </motion.div>

      {/* Available status */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-sm font-semibold"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        Currently available for opportunities
      </motion.div>
    </div>
  );
}
