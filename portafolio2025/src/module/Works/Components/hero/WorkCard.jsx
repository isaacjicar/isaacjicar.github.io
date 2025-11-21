import { Link } from "react-router-dom";
import TiltCard from "@/components/UI/TiltCard.jsx";

export default function WorkCard({
  project,
  delay,
  ctaLabel = "Ver proyecto →",
  ctaClassName = "btn-section-secondary",
}) {
  return (
    <div style={{ "--reveal-delay": delay }}>
      <TiltCard
        img={project.img}
        aspect="aspect-[4/5]"
        maxTilt={10}
        scale={1.04}
        glare
        transitionMs={420}
        reveal
        dur="700ms"
      />

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-white/70">{project.desc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip-tag">
              {tag}
            </span>
          ))}
        </div>

        <Link to={`/works/${project.id}`} className={ctaClassName}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
