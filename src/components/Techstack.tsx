"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "React Js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Node Js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Express Js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
];

export default function TechStack() {
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-10 bg-background/50">
      <h3 className="text-2xl font-bold mb-10 text-center tracking-tight text-foreground">
        Tech Stack <span className="text-primary">—</span> Tools I Use Everyday
      </h3>
      
      <div 
        className="relative flex overflow-hidden group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 60,
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {duplicatedTech.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center mx-10 shrink-0">
              <div className="relative w-24 h-24 bg-secondary/10 border border-border/50 rounded-2xl flex items-center justify-center mb-4 hover:border-primary/50 transition-all duration-300">
                <Image 
                  src={tech.src} 
                  alt={tech.name} 
                  width={50} 
                  height={50} 
                  className="object-contain"
                  unoptimized // Ditambahkan agar SVG dari CDN lebih cepat dirender
                />
              </div>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}