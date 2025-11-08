import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function RoomHero() {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-vignette" />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-16 lg:gap-20 py-20 md:py-28">
          <HeroText />
          <HeroImage />
        </div>
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-base-100 to-transparent" />
    </header>
  );
}
