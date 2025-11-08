import Reveal from "@/components/UI/Reveal";
import StatChip from "@/module/Home/Components/hero/StatChip";

export default function HeroText() {
  return (
    <Reveal
      className="md:col-span-7 space-y-6 md:space-y-8"
      delay="0ms"
      dur="750ms"
      threshold={0.35}
      rootMargin="0px 0px -12% 0px"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-white/60">Hola, soy</p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight">
        RONALD ISAAC <span className="text-accent">JIMÉNEZ</span><br />
        <span className="text-primary">Desarrollador</span> Full-Stack
      </h1>

      <p className="max-w-xl text-white/80">
        Ingeniero con enfoque en <b>Java/Spring Boot</b> y <b>React + Tailwind</b>. Experiencia con
        <b> MySQL, SQL Server, Oracle, PostgreSQL y MongoDB</b>, CI/CD con Git y DaisyUI.
      </p>

      <div className="pt-2 md:pt-4 flex flex-wrap gap-5 md:gap-6">
        <StatChip value={5} l1="proyectos" l2="completados" delay="150ms" />
        <StatChip value={1} l1="año" l2="de experiencia" delay="250ms" />
      </div>

      <div className="pt-4 md:pt-6 flex gap-4">
        <a href="#projects" className="btn btn-primary normal-case rounded-2xl px-6">Ver proyectos</a>
        <a href="#about" className="btn btn-outline border-secondary/50 text-secondary hover:border-secondary normal-case rounded-2xl px-6">Sobre mí</a>
      </div>
    </Reveal>
  );
}
