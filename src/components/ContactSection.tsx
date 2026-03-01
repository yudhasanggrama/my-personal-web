"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Clock, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
    const contactLinks = [
        {
        label: "Email me at",
        value: "yudhasanggrama@gmail.com",
        href: "mailto:yudhasanggrama@gmail.com",
        icon: Mail,
        },
        {
        label: "Connect on",
        value: "LinkedIn",
        href: "https://linkedin.com/in/yudhasanggrama",
        icon: Linkedin,
        },
        {
        label: "Check out my code on",
        value: "GitHub",
        href: "https://github.com/yudhasanggrama",
        icon: Github,
        },
    ];

    return (
        <>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            >
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 font-extrabold">Connect</span>
            </motion.h2>
            <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base"
            >
                Feel free to reach out for collaborations or just a friendly chat.
            </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
                <motion.a
                key={index}
                href={link.href}
                target={link.icon !== Mail ? "_blank" : undefined}
                rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                className="group"
                >
                    <Card className="relative bg-card/40 border border-transparent group-hover:border-primary/30 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CardContent className="p-5 flex items-center gap-4 relative z-10">
                                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 text-primary/80">
                                    <link.icon className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold mb-0.5 group-hover:text-primary/70 transition-colors">
                                    {link.label}
                                    </p>
                                    <p className="font-semibold text-sm md:text-base truncate group-hover:text-foreground transition-colors">
                                    {link.value}
                                    </p>
                                </div>
                                
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </CardContent>
                    </Card>
                </motion.a>
            ))}

            {/* Status Card - Dibuat lebih matte/redup */}
            <Card className="bg-card/40 border border-transparent shadow-sm">
                <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Clock className="w-5 h-5 text-emerald-500/80" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold mb-0.5">Currently</p>
                    <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                    <p className="font-semibold text-sm md:text-base text-foreground/90">Available for opportunities</p>
                    </div>
                </div>
                </CardContent>
            </Card>
            </div>
        </div>
        </>
    );
}