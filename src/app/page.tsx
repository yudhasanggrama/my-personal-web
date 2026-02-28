"use client" // Tambahkan ini di baris pertama
import Hero from "@/components/Hero";
import TechStack from "@/components/Techstack";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { Clock, Github, Linkedin, Mail, Send } from "lucide-react";
import { getProjects } from "@/lib/data/project";
import { getExperiences } from "@/lib/data/experience";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import EducationSection from "@/components/Education";
import { getEducation } from "@/lib/data/education";

export default function HomePage() {
  const experiences = getExperiences();
  const projects = getProjects();
  const educationData = getEducation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Hero />

        <section id="tech-stack" className="py-12 bg-muted/10">
          <TechStack />
        </section>

        <section id="experiences" className="py-20 container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 tracking-tight border-l-4 border-primary pl-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 font-extrabold">Experiences</span>
          </h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard index={index} key={exp.id || index} {...exp} />
            ))}
          </div>
        </section>

        <section id="educations" className="py-12 bg-muted/10">
          <EducationSection educationData={educationData} />
        </section>

        <section id="project" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 tracking-tight border-l-4 border-primary pl-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 font-extrabold">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id || index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-background transition-colors duration-500">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500 font-extrabold">Connect</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Feel free to reach out for collaborations, mentoring, or just a friendly chat
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a 
                href="mailto:yudhasanggrama@gmail.com"
                className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 transition-all hover:from-indigo-500/40 hover:to-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] group"
              >
                <div className="bg-card p-5 rounded-[15px] flex items-center gap-4 h-full transition-colors group-hover:bg-card/80">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Mail className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold mb-0.5">Email me at</p>
                    <p className="font-semibold text-sm md:text-base truncate group-hover:text-indigo-500 transition-colors">yudhasanggrama@gmail.com</p>
                  </div>
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/yudhasanggrama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-500/10 transition-all hover:from-blue-500/40 hover:to-blue-500/20 hover:scale-[1.01] active:scale-[0.99] group"
              >
                <div className="bg-card p-5 rounded-[15px] flex items-center gap-4 h-full transition-colors group-hover:bg-card/80">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold mb-0.5">Connect on</p>
                    <p className="font-semibold text-sm md:text-base group-hover:text-blue-500 transition-colors">LinkedIn</p>
                  </div>
                </div>
              </a>
              <a 
                href="https://github.com/yudhasanggrama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[1px] rounded-2xl bg-gradient-to-r from-slate-500/20 to-slate-500/10 transition-all hover:from-slate-500/40 hover:to-slate-500/20 hover:scale-[1.01] active:scale-[0.99] group"
              >
                <div className="bg-card p-5 rounded-[15px] flex items-center gap-4 h-full transition-colors group-hover:bg-card/80">
                  <div className="p-3 bg-slate-500/10 rounded-xl">
                    <Github className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold mb-0.5">Check out my code on</p>
                    <p className="font-semibold text-sm md:text-base group-hover:text-slate-400 transition-colors">GitHub</p>
                  </div>
                </div>
              </a>
              <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-500/10">
                <div className="bg-card p-5 rounded-[15px] flex items-center gap-4 h-full">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Clock className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold mb-0.5">Currently</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <p className="font-semibold text-sm md:text-base">Available for opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}