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
import ContactSection from "@/components/ContactSection";

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

        <section id="contact" className="py-24 bg-background relative overflow-hidden">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </>
  );
}