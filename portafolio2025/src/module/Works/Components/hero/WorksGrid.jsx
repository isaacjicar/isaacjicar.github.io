// WorksGrid.jsx
import Reveal from "@/components/UI/Reveal";
import WorkCard from "./WorkCard";
import { projects } from "../data/projects";

export default function WorksGrid() {
  return (
    <section className="bg-baseDark text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal
          as="header"
          className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Proyectos destacados
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-xl">
              Una selección de trabajos que mezclan desarrollo fullstack,
              experiencia real de negocio, diseño y experimentación técnica.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={`${120 * index}ms`}>
              {/* ESTE DIV ES EL ANCLA */}
              <div id={project.id} className="scroll-mt-32">
                <WorkCard project={project} delay={`${120 * index}ms`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
