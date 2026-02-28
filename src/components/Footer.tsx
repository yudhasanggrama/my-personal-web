import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "About Me", href: "#hero" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ],
  socials: [
    { name: "GitHub", href: "https://github.com/yudhasanggrama", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/yudhasanggrama/", icon: Linkedin },
    { name: "Email", href: "mailto:yudhasanggrama@gmail.com", icon: Mail },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t pt-16 pb-8 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              Yudha <span className="text-primary">Sanggrama</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Fullstack Developer passionate about building impactful applications 
              and continuously learning modern web technologies.
            </p>
            <div className="flex gap-3 pt-2">
              {footerLinks.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary text-sm flex items-center group transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:yudhasanggrama@gmail.com" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                yudhasanggrama@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/yudhasanggrama/" 
                target="_blank" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                linkedin.com/in/yudhasanggrama
              </a>
              <a 
                href="https://github.com/yudhasanggrama" 
                target="_blank" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                github.com/yudhasanggrama
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Yudha Sanggrama. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with 
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> 
            using <span className="font-semibold text-foreground">Next.js</span> & 
            <span className="font-semibold text-foreground">TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}