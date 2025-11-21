import Reveal from "@/components/UI/Reveal";
import WorkCard from "./WorkCard";
import { projectsByLang } from "../data/projects";

export default function WorksGrid({ t, lang }) {
  const projects = projectsByLang[lang] ?? projectsByLang.es;

  return (
    <section className="bg-baseDark text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal
          as="header"
          className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="section-title text-2xl md:text-3xl">
              {t.gridTitle}
            </h2>
            <p className="mt-2 section-subtitle max-w-xl">{t.gridDesc}</p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={`${120 * index}ms`}>
              <div id={project.id} className="scroll-mt-32">
                <WorkCard
                  project={project}
                  delay={`${120 * index}ms`}
                  ctaLabel={t.cardCta}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
