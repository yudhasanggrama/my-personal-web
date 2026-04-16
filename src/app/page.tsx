"use client"
import Hero from "@/components/Hero";
import TechStack from "@/components/Techstack";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/data/project";
import { getExperiences } from "@/lib/data/experience";
import Navbar from "@/components/Navbar";
import EducationSection from "@/components/Education";
import { getEducation } from "@/lib/data/education";
import ContactSection from "@/components/ContactSection";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  const experiences = getExperiences();
  const projects = getProjects();
  const educationData = getEducation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        <Hero />

        {/* ── Tech Stack ── */}
        <section id="tech-stack" className="py-16 bg-muted/10">
          <TechStack />
        </section>

        {/* ── Experiences ── */}
        <section id="experiences" className="py-24 bg-background relative">
          {/* Subtle left-side tint */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader
              number="02"
              label="Work"
              accent="Experiences"
              description="A journey through roles that shaped my technical skills and professional outlook."
            />
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <ExperienceCard index={index} key={exp.id || index} {...exp} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="educations" className="py-16 bg-muted/10 relative overflow-hidden">
          <EducationSection educationData={educationData} />
        </section>

        {/* ── Projects ── */}
        <section id="project" className="py-24 bg-background relative overflow-hidden">
          {/* Subtle dot-grid pattern */}
          <div className="absolute inset-0 hero-dot-grid opacity-[0.035] pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <SectionHeader
              number="04"
              label="Featured"
              accent="Projects"
              description="A selection of things I've built — from full-stack web apps to production-ready systems."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id || index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-emerald-500/10 blur-[100px]" />
          </div>
          {/* Top border accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <ContactSection />
        </section>

        <Footer />
      </main>
    </>
  );
}
