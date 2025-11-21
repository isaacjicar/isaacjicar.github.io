import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import PageIntroOverlay from "@/shared/UI/PageIntroOverlay";
import ScrollTopButton from "@/components/UI/ScrollTopButton";
import WorksHero from "../Components/hero/WorksHero";
import WorksGrid from "../Components/hero/WorksGrid";
import { worksTexts } from "../i18n/worksTexts";

export default function WorksPage() {
  const { lang } = useOutletContext();         
  const [showIntro, setShowIntro] = useState(true);

  const t = worksTexts[lang] ?? worksTexts.es; 
 
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); 
    }, []);
  return (
    <main className="relative min-h-dvh bg-baseDark text-white">
      {showIntro && (
        <PageIntroOverlay
          label={lang === "es" ? "Proyectos" : "Projects"}
          theme="primary"
          graphicVariant="orbit"
          stayDuration={700}
          exitDuration={900}
          onDone={() => setShowIntro(false)}
        />
      )}

    
      <WorksHero t={t} />
      <WorksGrid t={t} lang={lang} />

      <ScrollTopButton />
    </main>
  );
}
