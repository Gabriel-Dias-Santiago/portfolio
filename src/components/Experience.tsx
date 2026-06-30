import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const jobs = [
  {
    company: "Finnet",
    role: "Tecnologia / Segurança da Informação",
    text: "Atuação em ambiente corporativo de tecnologia, apoiando automações internas, administração de ambientes Linux, documentação técnica e melhoria de processos operacionais.",
    bullets: ["Desenvolvimento de automações internas com Python", "Atuação com Linux em ambiente corporativo", "Produção de documentação técnica", "Colaboração com times multidisciplinares"]
  },
  {
    company: "Freelancer",
    role: "Comunicação Digital",
    text: "Experiência com comunicação visual, gestão de conteúdo, relacionamento com clientes e construção de presença digital para pequenos negócios.",
    bullets: ["Comunicação visual", "Organização de conteúdo", "Relacionamento com clientes"]
  }
];

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <Reveal><SectionTitle eyebrow="Experiência" title="Vivência profissional em tecnologia e comunicação." /></Reveal>
      <div className="space-y-5">
        {jobs.map((job) => (
          <Reveal key={job.company}>
            <div className="glass rounded-[2rem] p-7">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div><h3 className="text-2xl font-bold text-white">{job.company}</h3><p className="text-blue-300">{job.role}</p></div>
              </div>
              <p className="mt-4 leading-7 text-muted">{job.text}</p>
              <ul className="mt-5 grid gap-2 md:grid-cols-2">
                {job.bullets.map((b) => <li key={b} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">• {b}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
