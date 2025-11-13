// ProjectsSection.jsx
import Reveal from "@/components/UI/Reveal";
import FeatureCard from "@/module/Home/Components/projects/FeatureCard";

const projects = [
  {
    title: "Billetera Digital",
    desc: "Pagos presenciales, biometría, cupones, panel de comercios.",
    icon: "💳",
    to: "/works#wallet",
  },
  {
    title: "Facturación Mueblería",
    desc: "Backend Spring Boot + Front React/Tailwind con inventario y usuarios.",
    icon: "🧾",
    to: "/works#muebleria-service",
  },
  {
    title: "Mueblería JC — Sitio web freelance",
    desc: "Tienda web full-stack con autenticación JWT, panel admin y catálogo.",
    icon: "🪑",
    to: "/works#muebleria-freelance",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
      {/* Header */}
      <div className="mb-10 md:mb-12">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Proyectos</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-black leading-tight">
          <span className="text-accent">Proyectos</span> destacados
        </h2>
        <p className="mt-4 max-w-3xl text-white/80">
          Una selección de trabajos recientes construidos con Spring Boot y React.
        </p>
      </div>

      <div className="grid gap-8 md:gap-10 xl:gap-12 md:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={`${150 + idx * 120}ms`} dur="700ms">
            <FeatureCard {...p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <a href="/works" className="btn btn-secondary rounded-2xl normal-case px-6">
          Ver todos los proyectos
        </a>
      </div>
    </section>
  );
}
