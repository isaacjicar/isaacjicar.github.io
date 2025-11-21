
import { Link } from "react-router-dom";
import Reveal from "@/components/UI/Reveal";
import FeatureCard from "@/module/Home/Components/projects/FeatureCard";

const projectsByLang = {
  es: [
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
  ],
  en: [
    {
      title: "Digital Wallet",
      desc: "In-person payments, biometrics, coupons, merchant dashboard.",
      icon: "💳",
      to: "/works#wallet",
    },
    {
      title: "Furniture Billing System",
      desc: "Spring Boot backend + React/Tailwind frontend with inventory and users.",
      icon: "🧾",
      to: "/works#muebleria-service",
    },
    {
      title: "Mueblería JC — Freelance website",
      desc: "Full-stack store with JWT authentication, admin panel and catalog.",
      icon: "🪑",
      to: "/works#muebleria-freelance",
    },
  ],
};

export default function ProjectsSection({ t, lang }) {
  const projects = projectsByLang[lang] ?? projectsByLang.es;

  return (
    <section id="projects" className="section-shell-wide">

      <div className="mb-10 md:mb-12">
        <p className="eyebrow">{t.projectsTag}</p>

        <h2 className="section-title">
          <span className="text-accent">{t.projectsTitleAccent}</span>{" "}
          {t.projectsTitleRest}
        </h2>

        <p className="section-subtitle">{t.projectsDesc}</p>
      </div>

      <div className="grid gap-8 md:gap-10 xl:gap-12 md:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={`${150 + idx * 120}ms`} dur="700ms">
            <FeatureCard {...p} ctaLabel={t.projectsCardMore} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/works" className="btn-section-secondary">
          {t.projectsBtnAll}
        </Link>
      </div>
    </section>
  );
}
