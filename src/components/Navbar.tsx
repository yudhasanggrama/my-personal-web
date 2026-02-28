"use client"
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toogle";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const navLinks = [
    { name: "Tech", href: "#tech-stack" },
    { name: "Experiences", href: "#experiences" },
    { name: "Educations", href: "#educations" },
    { name: "Projects", href: "#project" },
    { name: "Concact", href: "#contact"}
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/img/ysw_logo.jpg" alt="Logo" width={100} height={40} className="rounded" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 border-l pl-6">
            <ThemeToggle />
            <Button size="sm" className="rounded-full gap-2" onClick={() => window.location.href='https://wa.me/6281380401393'}>
              <MessageCircle className="w-4 h-4" /> Let's Talk
            </Button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon"><Menu /></Button></SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-bold">{link.name}</Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}