
import Reveal from "@/components/UI/Reveal";

export function SocialOrbIcon({ href, label, Icon, color, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex flex-col items-center gap-3 focus:outline-none"
      >
        <div
          className="
            float-soft relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center
            rounded-[28px] bg-neutral/80 backdrop-blur
            border border-white/10 shadow-[0_0_0_rgba(0,0,0,0)]
            transition group-hover:-translate-y-1
            group-hover:shadow-[0_0_40px_rgba(76,159,179,0.9)]
            group-hover:border-white/30
          "
        >
          <div
            className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 blur-2xl transition"
            style={{ backgroundColor: color }}
          />
          <Icon className="relative z-[1]" size={28} style={{ color }} />
        </div>

        <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition">
          {label}
        </span>
      </a>
    </Reveal>
  );
}
