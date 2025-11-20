import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function RoomHero({ t }) {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-vignette" />

      <div className="hero-shell">
        <div className="hero-grid">
          <HeroText t={t} />
          <HeroImage />
        </div>
      </div>

      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-base-100 to-transparent" />
    </header>
  );
}
