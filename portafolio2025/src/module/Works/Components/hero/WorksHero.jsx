import { useRandomWiggle } from "@/shared/motion/useRandomWiggle";
import worksHero from "@/assets/Works.png"; 
export default function WorksHero() {
  const setWiggleRef = useRandomWiggle({ speed: 0.01 });

  return (
    <header className="relative isolate overflow-hidden">
      <div
        ref={setWiggleRef}
        className="random-wiggle h-[60vh] w-full bg-contain bg-center bg-no-repeat transform-gpu will-change-transform
                  [--amp-x:26] [--amp-y:18] [--amp-rot:1.4] [--speed:0.8]"
        style={{ backgroundImage: `url(${worksHero})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
            Selected Work · 2023 — 2025
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
            Proyectos que nacen de{" "}
            <span className="text-primary">necesidades reales</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Mueblería física, marca personal, gaming y fintech en un solo
            portafolio sólido.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-base-100 to-transparent" />
    </header>
  );
}
