import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import PageIntroOverlay from "@/shared/UI/PageIntroOverlay";
import RoomHero from "@/module/Home/Components/hero/RoomHero";
import CapabilitiesSection from "@/module/Home/Components/capabilities/CapabilitiesSection";
import ProjectsSection from "@/module/Home/Components/projects/ProjectsSection";
import ScrollTopButton from "@/components/UI/ScrollTopButton";
import { homeTexts } from "@/module/Home/i18n/homeTexts";

const homeImg =
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg";

export default function HomePage() {
  const { lang } = useOutletContext();        
  const [showIntro, setShowIntro] = useState(true);
  const t = homeTexts[lang];

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); // o "smooth" si lo quieres animado
    }, []);

  return (
    <main className="relative min-h-dvh bg-baseDark text-white">


      {showIntro && (
        <PageIntroOverlay
          label={t.overlayLabel}
          theme="primary"
          graphicSrc={homeImg}
          graphicVariant="orbit"
          stayDuration={700}
          exitDuration={900}
          onDone={() => setShowIntro(false)}
        />
      )}

      <RoomHero t={t} />
      <ProjectsSection t={t} lang={lang} />
      <CapabilitiesSection t={t} lang={lang} />
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 md:px-8 pb-24 md:pb-32"
      />

    
      <ScrollTopButton />
    </main>
  );
}
