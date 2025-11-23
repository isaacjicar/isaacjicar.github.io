import { useParams, Link, useOutletContext } from "react-router-dom";
import ScrollTopButton from "@/components/UI/ScrollTopButton";
import Reveal from "@/components/UI/Reveal";
import { projectsByLang } from "../data/projects";
import { workDetailTexts } from "@/module/Works/i18n/workDetailTexts";
import { caseStudyExtraByLang } from "@/module/Works/Components/data/caseStudy";
import { useEffect,useState } from "react";


export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const { lang } = useOutletContext();

  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [projectId]);

  const t = workDetailTexts[lang] ?? workDetailTexts.es;

  const allProjects = projectsByLang[lang] ?? projectsByLang.es;
  const baseProject =
    allProjects.find((p) => p.id === projectId) ??
    projectsByLang.es.find((p) => p.id === projectId);

  const extra =
    caseStudyExtraByLang[lang]?.[projectId] ??
    caseStudyExtraByLang.es?.[projectId];

  const suggestedProjects = allProjects
    .filter((p) => p.id !== projectId)
    .slice(0, 3);

  if (!baseProject) {
    return (
      <main className="min-h-dvh bg-baseDark text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="section-subtitle">{t.notFound}</p>
          <Link to="/works" className="btn-cta-main">
            {t.backToProjects}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-baseDark text-white">
      <Reveal>
        <ProjectHero project={baseProject} extra={extra} t={t} lang={lang} />
      </Reveal>

      <Reveal>
        <ProjectMainImage project={baseProject} />
      </Reveal>

      {extra?.sections?.length > 0 && <div id="ux-section" />}

      {extra?.sections?.map((section, index) => (
        <Reveal
          key={section.id}
          as="section"
          dur="700ms"
          delay={`${150 + index * 120}ms`}
          className={
            "mx-auto max-w-6xl px-4 py-12 border-t border-white/10" +
            (index === 0 ? " min-h-[80vh] flex items-center" : "")
          }
        >
          <ProjectSection
            section={section}
            onImageClick={(img) => {
              setLightboxImage(img);
              setLightboxTitle(section.title);
            }}
          />
        </Reveal>
      ))}

      {suggestedProjects.length > 0 && (
        <Reveal
          as="section"
          dur="700ms"
          delay="120ms"
          className="mx-auto max-w-6xl px-4 py-16 border-t border-white/10"
        >
          <MoreProjectsSection projects={suggestedProjects} t={t} />
        </Reveal>
      )}

      {/* 🔍 LIGHTBOX FULLSCREEN */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-backdrop"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-3 -right-3 z-10 rounded-full bg-white/90 text-xs md:text-sm font-semibold px-3 py-1 text-black shadow-lg hover:bg-white"
            >
              ✕ Cerrar
            </button>

            <div className="overflow-hidden rounded-3xl soft-shadow bg-neutral/90">
              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <ScrollTopButton />
    </main>
  );
}





function ProjectHero({ project, extra, t, lang }) {
  const handleScrollToUx = () => {
    const el = document.getElementById("ux-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 space-y-8">
      <p className="eyebrow text-white/60">
        {extra?.category || t.heroCategoryFallback}
      </p>

      <div className="space-y-4">
        <h1 className="section-title text-3xl md:text-5xl">
          {project.title}
        </h1>
        <p className="section-subtitle max-w-2xl">
          {extra?.subtitle || project.desc}
        </p>
      </div>

      <div className="mt-6 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="eyebrow text-accent">{t.briefLabel}</h2>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line">
            {extra?.brief || project.desc}
          </p>
        </div>

        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h3 className="eyebrow text-accent">{t.roleLabel}</h3>
            <ul className="mt-2 space-y-1 text-white/80">
              {extra?.role?.length
                ? extra.role.map((item) => <li key={item}>• {item}</li>)
                : <li>• {t.defaultRoleItem}</li>}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-accent">{t.deliverablesLabel}</h3>
            <ul className="mt-2 space-y-1 text-white/80">
              {extra?.deliverables?.length
                ? extra.deliverables.map((d) => <li key={d}>• {d}</li>)
                : <li>• {t.defaultDeliverableItem}</li>}
            </ul>
          </div>
        </div>
      </div>

      {extra?.sections?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleScrollToUx}
            className="btn-cta-main"
          >
            {lang === "en"
              ? "More about the UI / UX"
              : "Más sobre el diseño UI / UX"}
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectMainImage({ project }) {
  const heroImg = project.heroImg ?? project.img;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="overflow-hidden rounded-3xl soft-shadow bg-neutral/80">
        <img
          src={heroImg}        
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
function ProjectSection({ section, onImageClick }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <p className="eyebrow text-white/60">{section.label}</p>
        <h2 className="mt-3 text-2xl font-semibold">{section.title}</h2>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line">
          {section.body}
        </p>
      </div>

      {section.image && (
        <div
          className="overflow-hidden rounded-3xl soft-shadow bg-neutral/80 card-tilt-hover cursor-zoom-in"
          onClick={() => onImageClick?.(section.image)}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}


function MoreProjectsSection({ projects, t }) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          {t.moreProjectsTitle ?? "Más proyectos que te pueden interesar"}
        </h2>
        <Link
          to="/works"
          className="btn-cta-main"
        >
          {t.viewAllProjects ?? "Ver todos los proyectos"}
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/works/${project.id}`}
            className="group rounded-3xl bg-neutral/70 soft-shadow overflow-hidden flex flex-col hover:bg-neutral/90 transition-colors"
          >
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 md:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4 space-y-2 flex-1 flex flex-col">
              <h3 className="text-sm md:text-base font-semibold">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-white/70 line-clamp-3">
                {project.desc}
              </p>

              {project.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/5 text-[10px] md:text-xs text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
