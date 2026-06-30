import { Reveal } from "./Reveal";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="section pb-28">
      <Reveal>
        <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-white/[0.04] to-violet/20 p-8 text-center md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contato</p>
          <h2 className="text-4xl font-extrabold text-white md:text-6xl">Vamos construir algo juntos?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Estou em busca da minha primeira oportunidade como Desenvolvedor Frontend Júnior e aberto a projetos, colaborações e desafios que me ajudem a evoluir tecnicamente.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:gabrielsantiagoti02@gmail.com" className="rounded-full bg-white px-6 py-3 font-bold text-ink"><Mail className="mr-2 inline" size={18}/>Email</a>
            <a href="https://github.com/Gabriel-Dias-Santiago" target="_blank" className="glass rounded-full px-6 py-3 font-bold text-white"><Github className="mr-2 inline" size={18}/>GitHub</a>
            <a href="https://www.linkedin.com/in/gabriel-dias-santiago" target="_blank" className="glass rounded-full px-6 py-3 font-bold text-white"><Linkedin className="mr-2 inline" size={18}/>LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
