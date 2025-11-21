import Reveal from "@/components/UI/Reveal";
import CapabilityCard from "./CapabilityCard";

const capabilitiesByLang = {
  es: [
    {
      icon: "🛠️",
      title: "Backend (Java/Spring)",
      items: [
        "APIs REST con Spring Boot",
        "CRUD, paginación y filtros",
        "DTO/Mapper (MapStruct)",
        "Validaciones y manejo de errores",
      ],
    },
    {
      icon: "⚛️",
      title: "Frontend (React)",
      items: [
        "React + Vite",
        "Tailwind CSS + DaisyUI",
        "Formularios y validación",
        "Animaciones/micro-interacciones",
      ],
    },
    {
      icon: "🗄️",
      title: "Bases de datos",
      items: [
        "SQL Server, MySQL, PostgreSQL, Oracle",
        "ORM JPA/Hibernate",
        "MongoDB (Mongoose)",
        "Vistas, SP y consultas",
      ],
    },
    {
      icon: "☁️",
      title: "DevOps & Cloud",
      items: [
        "Git (GitHub/Bitbucket)",
        "CI/CD (GitHub Actions / Azure DevOps)",
        "Despliegue en Azure App Service",
        "Entornos dev/stg/prod",
      ],
    },
    {
      icon: "🔐",
      title: "Seguridad & Auth",
      items: [
        "JWT y roles",
        "CORS y buenas prácticas",
        "Encriptado de contraseñas (BCrypt)",
        "OWASP (nivel básico)",
      ],
    },
    {
      icon: "🏗️",
      title: "Arquitectura & Calidad",
      items: [
        "Arquitectura por capas / limpia",
        "Pruebas unitarias (JUnit)",
        "Swagger / OpenAPI",
        "Revisión y estándares de código",
      ],
    },
  ],
  en: [
    {
      icon: "🛠️",
      title: "Backend (Java/Spring)",
      items: [
        "REST APIs with Spring Boot",
        "CRUD, pagination and filters",
        "DTO/Mapper (MapStruct)",
        "Validation and error handling",
      ],
    },
    {
      icon: "⚛️",
      title: "Frontend (React)",
      items: [
        "React + Vite",
        "Tailwind CSS + DaisyUI",
        "Forms and validation",
        "Animations / micro-interactions",
      ],
    },
    {
      icon: "🗄️",
      title: "Databases",
      items: [
        "SQL Server, MySQL, PostgreSQL, Oracle",
        "ORM JPA/Hibernate",
        "MongoDB (Mongoose)",
        "Views, stored procedures and queries",
      ],
    },
    {
      icon: "☁️",
      title: "DevOps & Cloud",
      items: [
        "Git (GitHub/Bitbucket)",
        "CI/CD (GitHub Actions / Azure DevOps)",
        "Deployment on Azure App Service",
        "Dev/stg/prod environments",
      ],
    },
    {
      icon: "🔐",
      title: "Security & Auth",
      items: [
        "JWT and roles",
        "CORS and best practices",
        "Password hashing (BCrypt)",
        "OWASP (basic level)",
      ],
    },
    {
      icon: "🏗️",
      title: "Architecture & Quality",
      items: [
        "Layered / clean architecture",
        "Unit tests (JUnit)",
        "Swagger / OpenAPI",
        "Code review and standards",
      ],
    },
  ],
};

export default function CapabilitiesSection({ t, lang }) {
  const capabilities = capabilitiesByLang[lang] ?? capabilitiesByLang.es;

  return (
    <section id="capabilities" className="section-shell-wide">
      <div className="mb-10 md:mb-12">
        <p className="eyebrow">{t.capabilitiesTag}</p>

        <h2 className="section-title">
          {t.capabilitiesTitlePrefix && (
            <>
              {t.capabilitiesTitlePrefix}{" "}
            </>
          )}
          <span className="text-accent">
            {t.capabilitiesTitleHighlight}
          </span>
          {t.capabilitiesTitleSuffix && (
            <>
              {" "}{t.capabilitiesTitleSuffix}
            </>
          )}
        </h2>

        <p className="section-subtitle">{t.capabilitiesDesc}</p>
      </div>

      <div className="grid gap-8 md:gap-10 xl:gap-12 md:grid-cols-3">
        {capabilities.map((c, idx) => (
          <Reveal key={c.title} delay={`${120 + idx * 100}ms`} dur="700ms">
            <CapabilityCard {...c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}