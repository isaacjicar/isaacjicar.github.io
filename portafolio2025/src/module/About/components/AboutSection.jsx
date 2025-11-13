// src/module/About/Components/AboutSection.jsx
import ToolboxGroup from "../components/ToolboxGroup";
import SocialLinksSection from "@/shared/sections/SocialLinksSection";
import Reveal from "@/components/UI/Reveal";

const AVATAR_URL =
  "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-baseDark text-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* 1) CARD PRINCIPAL SOBRE MÍ CON REVEAL */}
        <Reveal as="div" dur="700ms">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)] items-center rounded-[32px] bg-neutral/60 border border-white/10 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
            {/* Foto */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-[28px] bg-baseDark aspect-[4/5] max-w-sm w-full border border-white/5">
                <img
                  src={AVATAR_URL}
                  alt="Isaac Jiménez"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#4C9FB3]">
                ISAAC JIMÉNEZ · INGENIERO EN DESARROLLO DE SOFTWARE
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">
                👨‍💻 Full-Stack Software Engineer
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/80">
                Soy ingeniero en desarrollo de software full-stack y disfruto
                convertir necesidades reales de negocio en productos digitales
                claros, escalables y bien diseñados. Trabajo principalmente con{" "}
                <span className="font-semibold text-[#4CB393]">
                  Java / Spring Boot
                </span>{" "}
                y{" "}
                <span className="font-semibold text-[#4CB393]">C# / .NET</span>{" "}
                en el backend, y con{" "}
                <span className="font-semibold text-[#4CB393]">
                  React + Vite + Tailwind CSS
                </span>{" "}
                en el frontend.
              </p>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">
                He trabajado con bases de datos como{" "}
                <span className="font-semibold">
                  MySQL, SQL Server, Oracle, PostgreSQL
                </span>{" "}
                y también con <span className="font-semibold">MongoDB</span>. Me
                gusta mantener el código limpio, versionado con{" "}
                <span className="font-semibold">Git</span> y automatizar
                despliegues usando flujos de{" "}
                <span className="font-semibold">CI/CD</span>.
              </p>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">
                Actualmente estudio{" "}
                <span className="font-semibold">
                  Ingeniería en Desarrollo de Software en la Universidad
                  Cenfotec
                </span>{" "}
                (2024&nbsp;–&nbsp;presente). Además de la parte técnica, valoro
                mucho el <span className="font-semibold">respeto</span>, la{" "}
                <span className="font-semibold">comunicación clara</span>, la{" "}
                <span className="font-semibold">creatividad</span> y el{" "}
                <span className="font-semibold">trabajo en equipo</span>.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/cv-isaac-jimenez.pdf"
                  className="inline-flex items-center justify-center rounded-full bg-[#4CB393] px-7 py-3 text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-[#0b1020] shadow-[0_10px_0_rgba(0,0,0,0.5)] transition hover:translate-y-[2px] hover:shadow-[0_6px_0_rgba(0,0,0,0.5)]"
                >
                  Resume
                </a>

                <div className="text-xs md:text-sm text-white/60">
                  Español: <span className="font-semibold">Nativo</span> ·
                  Inglés: <span className="font-semibold">B2</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2) SECCIÓN DE REDES CON REVEAL (LLAMANDO AL COMPONENTE) */}
        <Reveal as="div" dur="700ms" delay="120ms">
          <div className="mt-16">
            <SocialLinksSection
              id="about-socials"
              eyebrow="Conectemos"
              title="¿Dónde puedes encontrarme?"
              description="Estoy abierto a proyectos freelance, colaboraciones y oportunidades laborales. Puedes escribirme por correo o contactarme en mis redes."
            />
          </div>
        </Reveal>

        {/* 3) TOOLBOX / HABILIDADES CON REVEAL */}
        <Reveal as="section" dur="700ms" delay="240ms" className="mt-20">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Toolbox
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl font-black">
            Tecnologías y habilidades que uso en mis proyectos
          </h3>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-white/80">
            En cada proyecto combino bases sólidas de backend, interfaces
            modernas en frontend y buenas prácticas de colaboración.
          </p>

          <div className="mt-10 rounded-[32px] bg-neutral/70 border border-white/10 p-8 md:p-10 shadow-[0_26px_70px_rgba(0,0,0,0.85)] space-y-10">
            <ToolboxGroup
              title="Lenguajes"
              items={["Java", "JavaScript", "C++", "C#", "Python"]}
            />
            <ToolboxGroup
              title="Frameworks & Librerías"
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
              title="Bases de datos"
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
                "AWS (básico)",
              ]}
            />
            <ToolboxGroup
              title="Habilidades blandas"
              items={[
                "Respeto",
                "Comunicación",
                "Creatividad",
                "Trabajo en equipo",
              ]}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
