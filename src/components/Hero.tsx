"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-hero-grid bg-[size:48px_48px] pt-28">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/30 blur-[90px]" />
      <div className="absolute right-10 top-48 h-80 w-80 rounded-full bg-violet/20 blur-[110px]" />
      <div className="section relative flex min-h-[80vh] items-center">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            React • TypeScript • UI • Experiência do Usuário
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }} className="gradient-text text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Gabriel Dias Santiago
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }} className="mt-5 text-2xl font-semibold text-white md:text-3xl">
            Frontend Developer Júnior
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3 }} className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Desenvolvedor Frontend em início de carreira, estudante de Sistemas de Informação na FIAP, criando interfaces modernas, responsivas e intuitivas com React, TypeScript e foco em experiência do usuário.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .4 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#projetos" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-blue-500">Ver Projetos</a>
            <a href="https://github.com/Gabriel-Dias-Santiago" target="_blank" className="glass rounded-full px-6 py-3 font-semibold text-white transition hover:bg-white/10"><Github className="mr-2 inline" size={18}/>GitHub</a>
            <a href="https://www.linkedin.com/in/gabriel-dias-santiago" target="_blank" className="glass rounded-full px-6 py-3 font-semibold text-white transition hover:bg-white/10"><Linkedin className="mr-2 inline" size={18}/>LinkedIn</a>
            <a href="/Gabriel_Dias_Santiago_Frontend_CV.pdf" className="glass rounded-full px-6 py-3 font-semibold text-white transition hover:bg-white/10"><Download className="mr-2 inline" size={18}/>Currículo</a>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-8 hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:block">
          <p className="text-sm text-muted">currently building</p>
          <p className="mt-2 text-xl font-bold">interfaces people enjoy</p>
        </motion.div>
        <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"><ArrowDown className="animate-bounce" /></a>
      </div>
    </section>
  );
}
