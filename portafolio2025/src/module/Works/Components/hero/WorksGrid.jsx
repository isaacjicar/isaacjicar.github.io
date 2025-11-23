import Reveal from "@/components/UI/Reveal";
import WorkCard from "./WorkCard";
import { projectsByLang } from "../data/projects";

export default function WorksGrid({ t, lang }) {
  const projects = projectsByLang[lang] ?? projectsByLang.es;

  return (
    <section className="bg-baseDark text-white">
      <div className="section-shell">
        <Reveal
          as="header"
          className="section-header-split"
        >
          <div>
            <h2 className="section-title text-2xl md:text-3xl">
              {t.gridTitle}
            </h2>
            <p className="mt-2 section-subtitle max-w-xl">{t.gridDesc}</p>
          </div>
        </Reveal>

        <div className="cards-grid-3">
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
