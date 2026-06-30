"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const items = [
  ["Sobre", "#sobre"], ["Stack", "#stack"], ["Projetos", "#projetos"], ["Experiência", "#experiencia"], ["Contato", "#contato"],
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="font-bold tracking-tight text-white">GDS<span className="text-blue-400">.</span></a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {items.map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <a aria-label="GitHub" href="https://github.com/Gabriel-Dias-Santiago" target="_blank" className="hover:text-white"><Github size={18}/></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/gabriel-dias-santiago" target="_blank" className="hover:text-white"><Linkedin size={18}/></a>
          <a aria-label="Email" href="mailto:gabrielsantiagoti02@gmail.com" className="hover:text-white"><Mail size={18}/></a>
        </div>
      </nav>
    </header>
  );
}
