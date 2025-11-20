// src/module/Works/Pages/ProjectDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ScrollTopButton from "@/components/UI/ScrollTopButton";
import Footer from "@/layout/footer";

// Info extra por proyecto
const caseStudyExtra = {
  wallet: {
    category: "Fintech · UX · Seguridad",
    subtitle:
      "Prototipo de billetera digital pensada para pagos presenciales en Costa Rica, con foco en seguridad y experiencia de usuario.",
    brief: `
      La Billetera Digital CR nace de una necesidad real: reducir el uso de efectivo
      en comercios pequeños sin obligar al usuario a usar tarjetas físicas. El proyecto
      explora cómo combinar QR, validaciones biométricas y un flujo de pago simple.
    `,
    role: [
      "Arquitectura de la solución",
      "Diseño de experiencia de usuario (UX)",
      "Desarrollo fullstack",
    ],
    deliverables: [
      "Prototipo funcional",
      "API REST en Spring Boot",
      "UI en React + Tailwind",
      "Documentación técnica",
    ],
    sections: [
      {
        id: "ux-flow",
        label: "UX / Flujo",
        title: "Flujo de pago pensado para cero fricción",
        body: `
          El objetivo principal fue que el usuario pudiera pagar en menos de 10 segundos
          desde que escanea el código. Se diseñó un flujo con confirmación visual clara,
          estados de error específicos y un resumen final de la transacción.
        `,
        image:
          "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg",
      },
      {
        id: "security",
        label: "Seguridad",
        title: "Capas de seguridad sin sacrificar experiencia",
        body: `
          Se plantearon validaciones por PIN, biometría (cuando el dispositivo lo permite)
          y verificación de identidad con cédula costarricense. La arquitectura separa
          claramente los servicios de autenticación y los de pagos.
        `,
        image:
          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      },
    ],
  },
  // muebleria-service, pokemon-game, etc. los agregas aquí igual
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const baseProject = projects.find((p) => p.id === projectId);
  const extra = caseStudyExtra[projectId];

  if (!baseProject) {
    return (
      <main className="min-h-dvh bg-baseDark text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-sm text-white/60">Proyecto no encontrado.</p>
          <Link to="/works" className="btn btn-secondary rounded-xl">
            Volver a proyectos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-baseDark text-white">
      {/* HERO / BRIEF */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          {extra?.category || "Case study"}
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-black">
          {baseProject.title}
        </h1>

        <p className="mt-4 text-base md:text-lg max-w-2xl text-white/70">
          {extra?.subtitle || baseProject.desc}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          {/* Brief */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
              Brief
            </h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line">
              {extra?.brief || baseProject.desc}
            </p>
          </div>

          {/* Columna derecha: Rol / Entregables */}
          <div className="space-y-6 text-sm md:text-base">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
                Rol
              </h3>
              <ul className="mt-2 space-y-1 text-white/80">
                {extra?.role?.map((item) => (
                  <li key={item}>• {item}</li>
                )) || <li>• Desarrollo fullstack</li>}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
                Entregables
              </h3>
              <ul className="mt-2 space-y-1 text-white/80">
                {extra?.deliverables?.map((d) => (
                  <li key={d}>• {d}</li>
                )) || <li>• Prototipo funcional</li>}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEN PRINCIPAL GRANDE */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] bg-neutral/80">
          <img
            src={baseProject.img}
            alt={baseProject.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* SECCIONES EXTRA */}
      {extra?.sections?.map((section) => (
        <section
          key={section.id}
          className="mx-auto max-w-6xl px-4 py-12 border-t border-white/10"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                {section.label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line">
                {section.body}
              </p>
            </div>

            {section.image && (
              <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-neutral/80">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* BOTÓN VOLVER */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Link
          to="/works"
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 underline underline-offset-4"
        >
          ← Volver a proyectos
        </Link>
      </section>
      <ScrollTopButton />

      <Footer />
    </main>
  );
}
