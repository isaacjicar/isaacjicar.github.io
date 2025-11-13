import TiltCard from "@/components/UI/TiltCard.jsx";

export default function WorkCard({ project, delay }) {
  return (
    <div style={{ "--reveal-delay": delay }}>
      <TiltCard
        img={project.img}
        aspect="aspect-[4/5]"
        maxTilt={10}
        scale={1.04}
        glare={true}
        transitionMs={420}
        reveal={true}
        dur="700ms"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-white/70">{project.desc}</p>
        <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wide">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-xs text-primary hover:text-primary/80 mt-1"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  );
}
