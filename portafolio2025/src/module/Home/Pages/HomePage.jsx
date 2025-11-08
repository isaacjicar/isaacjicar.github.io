import RoomHero from "@/module/Home/Components/hero/RoomHero";
import CapabilitiesSection from "@/module/Home/Components/capabilities/CapabilitiesSection";
import ProjectsSection from "@/module/Home/Components/projects/ProjectsSection";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-baseDark text-white">
      <RoomHero />
      <ProjectsSection />
      <CapabilitiesSection />   
      <section id="about" className="mx-auto max-w-7xl px-6 md:px-8 pb-24 md:pb-32" />
    </main>
  );
}
