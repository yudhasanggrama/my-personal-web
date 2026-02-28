"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle2, School, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface EducationProps {
  id: number;
  image: string;
  title: string;
  degree?: string;
  field: string;
  study?: string;
  date: string;
  description: string;
}

export default function EducationSection({ educationData }: { educationData: EducationProps[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 font-extrabold">Background</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Membangun keahlian teknis melalui pendidikan formal dan proyek pengembangan sistem nyata yang berdampak.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Soft Glow behind card on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-[30px] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-indigo-500/20 via-slate-500/10 to-emerald-500/20 hover:from-indigo-500/40 hover:to-emerald-500/40 transition-all duration-500 shadow-sm">
                <div className="bg-card/90 backdrop-blur-md rounded-[23px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden">
                  
                  {/* Efek Kilauan (Shine) menggunakan Framer Motion agar tidak butuh tailwind config */}
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  {/* Logo Section */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="relative w-24 h-24 shrink-0 bg-white rounded-2xl overflow-hidden p-3 border border-border shadow-sm z-10"
                  >
                    <Image
                      src={edu.image}
                      alt={edu.title}
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-4 z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-indigo-500 transition-colors duration-300 flex items-center gap-2">
                          {edu.title}

                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <div className="text-indigo-500 font-semibold flex items-center gap-2 bg-indigo-500/10 px-3 py-1 rounded-lg text-sm">
                            {edu.degree ? <GraduationCap className="w-4 h-4" /> : <School className="w-4 h-4" />}
                            {edu.degree || edu.field}
                          </div>
                          
                          {edu.study && (
                            <p className="text-muted-foreground font-medium text-sm border-l border-border pl-4">{edu.study}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="shrink-0">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 border border-border text-foreground text-xs font-bold tracking-wider">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                          {edu.date}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {/* Project Achievement - Khusus untuk UNIKOM */}
                    {edu.id === 1 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mt-6 bg-gradient-to-br from-indigo-500/5 to-emerald-500/5 p-5 rounded-2xl border border-indigo-500/10 relative shadow-inner"
                      >
                        <p className="font-bold text-indigo-500 mb-2 flex items-center gap-2 uppercase text-[10px] tracking-[0.2em]">
                          <CheckCircle2 className="w-4 h-4" /> Final Project Highlight
                        </p>
                        <p className="italic text-sm md:text-base text-muted-foreground border-l-2 border-indigo-500/30 pl-4 leading-relaxed">
                          "Developed an order management system for garment manufacturing, handling stocks and production status with black-box testing validation."
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}