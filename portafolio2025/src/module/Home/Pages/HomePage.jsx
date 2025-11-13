import { useState } from "react";

import PageIntroOverlay from "@/shared/UI/PageIntroOverlay";

import RoomHero from "@/module/Home/Components/hero/RoomHero";
import CapabilitiesSection from "@/module/Home/Components/capabilities/CapabilitiesSection";
import ProjectsSection from "@/module/Home/Components/projects/ProjectsSection";
import Footer from "@/layout/footer";


const homeImg =
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-dvh bg-baseDark text-white">
      {showIntro && (
        <PageIntroOverlay
          label="Inicio"              
          theme="primary"          
          graphicSrc={homeImg}    
          graphicVariant="orbit"   
          stayDuration={700}
          exitDuration={900}
          onDone={() => setShowIntro(false)}
        />
      )}

      <RoomHero />
      <ProjectsSection />
      <CapabilitiesSection />
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 md:px-8 pb-24 md:pb-32"
      />
      <Footer />
    </main>
  );
}
