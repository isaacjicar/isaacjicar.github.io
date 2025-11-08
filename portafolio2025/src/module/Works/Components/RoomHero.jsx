import { useRandomWiggle } from "../../../shared/motion/useRandomWiggle";
import roomImg from "@/assets/Works.png";

export default function RoomHero() {
  const setWiggleRef = useRandomWiggle({
    speed: 0.0100,
  });

  return (
    <header className="relative isolate overflow-hidden">
      <div
        ref={setWiggleRef}
        className="random-wiggle h-[72vh] w-full bg-contain bg-center bg-no-repeat transform-gpu will-change-transform
                  [--amp-x:30] [--amp-y:20] [--amp-rot:2] [--speed:0.9]"
        style={{ backgroundImage: `url(${roomImg})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tu <span className="text-primary">Setup</span>, tu <span className="text-accent">Home</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Contraste oscuro con acentos de tu paleta 60-30-10.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#features" className="btn btn-primary normal-case rounded-2xl px-6">Empezar</a>
            <button className="btn btn-outline border-secondary/50 text-secondary hover:border-secondary">
              Ver demo
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-base-100 to-transparent" />
    </header>
  );
}