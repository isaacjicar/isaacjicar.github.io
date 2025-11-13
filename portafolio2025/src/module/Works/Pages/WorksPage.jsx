import { useState } from "react";
import PageIntroOverlay from "@/shared/ui/PageIntroOverlay";
import WorksHero from "../Components/hero/WorksHero";
import WorksGrid from "../Components/hero/WorksGrid";
import workImg from "@/assets/Works.png";
import Footer from "@/layout/footer";

export default function PageWorks() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-dvh bg-[#05051a] text-white">
      {showIntro && (
        <PageIntroOverlay
          label="Proyectos"
          theme="primary"
          graphicSrc={workImg}
          graphicVariant="fly"
          stayDuration={800}
          exitDuration={900}
          onDone={() => setShowIntro(false)}
        />
      )}

      <WorksHero />
      <WorksGrid />
      <Footer />
    </main>
  );
}
