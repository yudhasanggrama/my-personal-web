"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

interface ExpProps {
  image: string;
  title: string;
  company: string;
  tasks: string[];
  techStack: string[];
  date: string;
  index: number;
}

export default function ExperienceCard({ image, title, company, tasks, techStack, date, index }: ExpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative bg-card/40 border-none shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        {/* Decorative Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Logo Container with Animation */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-16 h-16 shrink-0 bg-white rounded-2xl overflow-hidden border border-border shadow-sm flex items-center justify-center p-2 group-hover:border-primary/50 transition-colors duration-300"
            >
              <Image 
                src={image} 
                alt={`${company} logo`} 
                width={64} 
                height={64} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                priority={index === 0}
              />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <motion.h4 
                    className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4 text-primary md:hidden" />
                    {title}
                  </motion.h4>
                  <p className="text-primary/80 font-semibold flex items-center gap-1">
                    {company}
                  </p>
                </div>
                
                <Badge variant="outline" className="mt-2 md:mt-0 flex items-center gap-1.5 py-1 px-3 bg-muted/30 border-primary/20 text-muted-foreground font-medium group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  <Calendar className="w-3 h-3" />
                  {date}
                </Badge>
              </div>
              
              <ul className="space-y-2.5 mb-6">
                {tasks.map((task, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (i * 0.1) }}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed group/item"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                    {task}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="font-medium text-[10px] uppercase tracking-wider bg-primary/5 border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}