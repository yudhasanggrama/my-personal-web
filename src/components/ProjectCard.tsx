"use client";

import { ExternalLink, Github, Lock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  repoPrivate: string | boolean;
  demo: string | boolean;
  index?: number;
}

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  repoPrivate,
  demo,
  index = 0,
}: ProjectProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="cursor-pointer group relative flex flex-col h-full rounded-3xl bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
        >
          {/* IMAGE */}
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-muted/5">
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {title}
              </h4>
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            </div>

            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
              {description ||
                "A showcase of my technical expertise and creative problem-solving skills."}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tech.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-wider bg-muted/30 border-transparent hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex gap-6 items-center pt-4 border-t border-border/50 mt-auto">
              {typeof repoPrivate === "string" ? (
                <a
                  href={repoPrivate}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
              ) : (
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                  <Lock className="w-3 h-3" /> Private Repo
                </div>
              )}

              {typeof demo === "string" ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold italic">
                  No Demo
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      {/* ================= DIALOG DETAIL ================= */}
      <DialogContent className="max-w-3xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {/* Large Image */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {typeof repoPrivate === "string" ? (
              <a
                href={repoPrivate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-semibold hover:opacity-80 transition"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            ) : (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                Private Repository
              </div>
            )}

            {typeof demo === "string" ? (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-80 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <div className="text-sm text-muted-foreground italic">
                No Demo Available
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}