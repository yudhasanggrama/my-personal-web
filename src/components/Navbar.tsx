"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toogle";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Efek ketika navbar di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tech", href: "#tech-stack" },
    { name: "Experiences", href: "#experiences" },
    { name: "Educations", href: "#educations" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact"}
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? "border-b bg-background/70 backdrop-blur-xl py-2" 
        : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo dengan animasi hover */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Image 
              src="/img/ysw_logo.jpg" 
              alt="Logo" 
              width={80} 
              height={32} 
              className="rounded-lg shadow-sm border border-border/50" 
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center gap-2 mr-6 bg-secondary/20 p-1 rounded-full border border-border/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
                {/* Pill Background Effect */}
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l pl-6">
            <ThemeToggle />
            <Button 
              size="sm" 
              className="rounded-full gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
              onClick={() => window.open('https://wa.me/6281380401393', '_blank')}
            >
              <MessageCircle className="w-4 h-4" /> Let's Talk
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left mb-8">Navigation</SheetTitle>
              <div className="flex flex-col gap-2 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="flex items-center justify-between text-lg font-semibold p-4 rounded-2xl hover:bg-primary/5 hover:text-primary transition-all group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                   className="mt-8"
                >
                  <Button 
                    className="w-full rounded-2xl py-6 gap-2"
                    onClick={() => window.open('https://wa.me/6281380401393', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5" /> Let's Connect
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

// Ikon tambahan untuk mobile menu
function ArrowUpRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}