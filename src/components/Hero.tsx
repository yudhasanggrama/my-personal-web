"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Background Decor (Opsional: Efek cahaya di belakang) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Hi, I&apos;m <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 font-extrabold">Yudha Sanggrama Wijaya</span> 👋
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A Full-Stack Developer with a strong interest in designing and developing modern web applications. 
              I specialize in building reliable, efficient, and user-focused digital products—from 
              initial planning to final production.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <Button 
                size="lg" 
                className="rounded-full gap-2 px-8 h-12 text-base shadow-lg hover:shadow-primary/20 transition-all"
                onClick={() => window.location.href = 'https://wa.me/6281380401393'}
              >
                <MessageCircle className="w-5 h-5" /> Let&apos;s Talk
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full gap-2 px-8 h-12 text-base border-2"
                onClick={() => window.open('https://drive.google.com/file/d/1LWWxztTyNOx0ADRl_WR0BaGJ1bbk4O9G/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5" /> Download CV
              </Button>
            </div>
          </motion.div>

          {/* Image Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Frame Aksen */}
              <div className="absolute inset-0 border-2 border-primary rounded-[2rem] rotate-6 scale-105 opacity-20" />
              <div className="absolute inset-0 border-2 border-primary/50 rounded-[2rem] -rotate-3 scale-100" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/img/profile.jpg"
                  alt="Yudha Profile"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}