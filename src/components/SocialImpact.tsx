import { Reveal } from "./Reveal";
import { HeartHandshake } from "lucide-react";

export function SocialImpact() {
  return (
    <section className="section">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet/20 blur-3xl" />
          <HeartHandshake className="mb-5 text-blue-400" size={34} />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">Impacto Social</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Tecnologia também é sobre pessoas.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
            Aos 18 anos participei voluntariamente do projeto Rompe Jugo, iniciativa voltada ao combate ao trabalho análogo à escravidão em um povoado. Essa experiência fortaleceu minha responsabilidade, empatia, colaboração e compromisso com impacto positivo.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
