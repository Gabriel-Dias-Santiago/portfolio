import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { BadgeCheck, Code2, MessageSquare, Sparkles } from "lucide-react";

const points = [
  [BadgeCheck, "Experiência real em tecnologia"],
  [Code2, "Base técnica sólida"],
  [MessageSquare, "Boa comunicação"],
  [Sparkles, "Interesse em UI/UX"],
];

export function About() {
  return (
    <section id="sobre" className="section">
      <Reveal>
        <SectionTitle eyebrow="Sobre" title="Construindo interfaces com propósito." description="Sou estudante de Sistemas de Informação na FIAP e estou direcionando minha carreira para Desenvolvimento Frontend. Já tive experiência profissional em ambiente corporativo de tecnologia, atuando com Linux, automação de processos, documentação técnica e melhoria de fluxos internos." />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-4">
        {points.map(([Icon, text]) => (
          <Reveal key={String(text)}>
            <div className="glass card-hover rounded-3xl p-5">
              {/* @ts-expect-error icon type */}
              <Icon className="mb-4 text-blue-400" />
              <p className="font-semibold text-white">{text as string}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
