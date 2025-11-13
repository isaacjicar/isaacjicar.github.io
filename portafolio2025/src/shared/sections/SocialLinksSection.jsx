// src/shared/sections/SocialLinksSection.jsx
import { SocialOrbIcon } from "@/shared/UI/SocialOrbIcon";
import { defaultSocials } from "@/shared/data/socials";

export default function SocialLinksSection({
  id = "contact",
  eyebrow = "Conectemos",
  title = "¿Listo para construir algo juntos?",
  description = "Estoy abierto a proyectos freelance, colaboraciones y oportunidades laborales. Puedes escribirme por correo o contactarme en mis redes.",
  items = defaultSocials,
}) {
  return (
    <section id={id} className="bg-baseDark text-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-black">{title}</h2>
        <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto text-white/80">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {items.map((item, idx) => (
            <SocialOrbIcon
              key={item.id}
              href={item.href}
              label={item.label}
              Icon={item.icon}
              color={item.color}
              delay={`${120 * idx}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
