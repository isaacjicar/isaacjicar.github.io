import ToolboxGroup from "../components/ToolboxGroup";
import SocialLinksSection from "@/shared/sections/SocialLinksSection";
import Reveal from "@/components/UI/Reveal";

export default function AboutSection({ t }) {
  return (
    <section id="about" className="bg-baseDark text-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">

        <Reveal as="div" dur="700ms">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)] items-center rounded-[32px] bg-neutral/60 border border-white/10 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-[28px] bg-baseDark aspect-[4/5] max-w-sm w-full border border-white/5">
                <img
                  src="/perfil.jpeg"
                  alt="Isaac Jiménez"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

   
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-secondary">
                {t.badge}
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">
                👨‍💻 {t.title}
              </h2>

      
              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/80">
                {t.p1_part1}
                <span className="font-semibold text-accent">{t.p1_tech1}</span>
                {t.p1_part2}
                <span className="font-semibold text-accent">{t.p1_tech2}</span>
                {t.p1_part3}
                <span className="font-semibold text-accent">{t.p1_tech3}</span>
                {t.p1_part4}
              </p>


              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">
                {t.p2}
              </p>


              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">
                {t.p3}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/RonaldIsaac.pdf"
                  className="btn-cta-primary"
                >
                  {t.resumeBtn}
                </a>

                <div className="text-xs md:text-sm text-white/60">
                  {t.langNativeLabel}{" "}
                  <span className="font-semibold">{t.langNativeValue}</span> ·{" "}
                  {t.langEnLabel}{" "}
                  <span className="font-semibold">{t.langEnValue}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

 
        <Reveal as="div" dur="700ms" delay="120ms">
          <div className="mt-16">
            <SocialLinksSection
              id="about-socials"
              eyebrow={t.socialEyebrow}
              title={t.socialTitle}
              description={t.socialDesc}
            />
          </div>
        </Reveal>

     
        <Reveal as="section" dur="700ms" delay="240ms" className="mt-20">
          <p className="eyebrow">{t.toolboxEyebrow}</p>
          <h3 className="section-title">{t.toolboxTitle}</h3>
          <p className="section-subtitle">{t.toolboxDesc}</p>

          <div className="mt-10 rounded-[32px] bg-neutral/70 border border-white/10 p-8 md:p-10 shadow-[0_26px_70px_rgba(0,0,0,0.85)] space-y-10">
            <ToolboxGroup
              title="Lenguajes / Languages"
              items={["Java", "JavaScript", "C++", "C#", "Python"]}
            />
            <ToolboxGroup
              title="Frameworks & Libraries"
              items={[
                "Spring Boot",
                "React",
                "Node.js",
                "Tailwind CSS",
                "DaisyUI",
                "CSS3",
              ]}
            />
            <ToolboxGroup
              title="Databases"
              items={[
                "MySQL",
                "SQL Server",
                "Oracle",
                "PostgreSQL",
                "MongoDB",
              ]}
            />
            <ToolboxGroup
              title="Frontend"
              items={["HTML5", "React + Vite", "Tailwind CSS", "DaisyUI"]}
            />
            <ToolboxGroup
              title="DevOps & Cloud"
              items={[
                "Git & GitHub",
                "Bitbucket",
                "Azure DevOps",
                "Azure App Service",
                "AWS (basic)",
              ]}
            />
            <ToolboxGroup
              title="Soft skills"
              items={[
                "Respect",
                "Communication",
                "Creativity",
                "Teamwork",
              ]}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
