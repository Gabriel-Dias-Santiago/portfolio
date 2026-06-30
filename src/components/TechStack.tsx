import { techs } from "@/data/techs";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function TechStack() {
  return (
    <section id="stack" className="section">
      <Reveal>
        <SectionTitle eyebrow="Stack" title="Tecnologias que uso para criar produtos digitais." description="Sem barras, sem estrelas. Apenas ferramentas que estou usando, estudando e aplicando em projetos reais." />
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech, index) => (
          <Reveal key={tech} delay={index * 0.02}>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white">
              {tech}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
