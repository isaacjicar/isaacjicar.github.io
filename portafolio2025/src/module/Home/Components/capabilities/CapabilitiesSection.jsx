import Reveal from "@/components/UI/Reveal";
import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: "🛠️",
    title: "Backend (Java/Spring)",
    items: [
      "APIs REST con Spring Boot",
      "CRUD, paginación y filtros",
      "DTO/Mapper (MapStruct)",
      "Validaciones y manejo de errores"
    ],
  },
  {
    icon: "⚛️",
    title: "Frontend (React)",
    items: [
      "React + Vite",
      "Tailwind CSS + DaisyUI",
      "Formularios y validación",
      "Animaciones/micro-interacciones"
    ],
  },
  {
    icon: "🗄️",
    title: "Bases de datos",
    items: [
      "SQL Server, MySQL, PostgreSQL, Oracle",
      "ORM JPA/Hibernate",
      "MongoDB (Mongoose)",
      "Vistas, SP y consultas"
    ],
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud",
    items: [
      "Git (GitHub/Bitbucket)",
      "CI/CD (GitHub Actions / Azure DevOps)",
      "Despliegue en Azure App Service",
      "Entornos dev/stg/prod"
    ],
  },
  {
    icon: "🔐",
    title: "Seguridad & Auth",
    items: [
      "JWT y roles",
      "CORS y buenas prácticas",
      "Encriptado de contraseñas (BCrypt)",
      "OWASP (nivel básico)"
    ],
  },
  {
    icon: "🏗️",
    title: "Arquitectura & Calidad",
    items: [
      "Arquitectura por capas / limpia",
      "Pruebas unitarias (JUnit)",
      "Swagger / OpenAPI",
      "Revisión y estándares de código"
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
      <div className="mb-10 md:mb-12">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Lo que hago</p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          Interfaces <span className="text-accent">SaaS</span> y sistemas web
        </h2>
        <p className="mt-4 max-w-3xl text-white/80">
          Full-Stack con enfoque en <b>Spring Boot</b> y <b>React + Tailwind</b>.
          Experiencia con SQL y MongoDB, despliegues en Azure y CI/CD.
        </p>
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
