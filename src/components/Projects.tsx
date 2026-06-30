import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projetos" className="section">
      <Reveal>
        <SectionTitle eyebrow="Projetos" title="Projetos que mostram minha evolução em Frontend." description="Cada card representa um ponto do meu processo: criatividade visual, organização de componentes, responsividade, dados e experiência do usuário." />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="glass card-hover group relative overflow-hidden rounded-[2rem] p-7">
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl transition group-hover:bg-violet/25" />
              <div className="mb-8 h-40 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-slate-950 to-violet/20 p-5">
                <div className="h-full rounded-2xl border border-white/10 bg-black/20" />
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techs.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">{tech}</span>)}
              </div>
              <div className="mt-7 flex gap-3">
                <a href={project.link} target="_blank" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-blue-100"><ArrowUpRight className="mr-1 inline" size={16}/>Ver projeto</a>
                <a href={project.code} target="_blank" className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"><Github className="mr-1 inline" size={16}/>Código</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
