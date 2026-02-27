import Hero from "@/components/Hero";
import TechStack from "@/components/Techstack";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import { getProjects } from "@/lib/data/project";
import { getExperiences } from "@/lib/data/experience";

export default function HomePage() {
  const experiences = getExperiences();
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />

      <section id="tech-stack" className="py-12 bg-muted/10">
        <TechStack />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 tracking-tight border-l-4 border-primary pl-4">
          Work Experiences
        </h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard index={0} key={exp.id || index} {...exp} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 tracking-tight border-l-4 border-primary pl-4">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id || index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Get in Touch
          </div>
          <h2 className="text-4xl font-extrabold mb-4">Let&apos;s build something together</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-lg">
            Feel free to reach out if you&apos;re looking for a developer, 
            have a question, or just want to connect.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <a 
              href="mailto:yudhasanggrama@gmail.com" 
              className="flex items-center gap-3 group transition-all"
            >
              <div className="p-4 bg-secondary/50 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email Me</p>
                <span className="font-semibold text-lg">yudhasanggrama@gmail.com</span>
              </div>
            </a>
            
            <div className="hidden md:block h-12 w-px bg-border" />
            
            <a 
              href="https://wa.me/6281380401393" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group transition-all"
            >
              <div className="p-4 bg-green-500/10 rounded-2xl group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6 text-green-500 group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Call/WA</p>
                <span className="font-semibold text-lg">+62 813-804-01393</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}