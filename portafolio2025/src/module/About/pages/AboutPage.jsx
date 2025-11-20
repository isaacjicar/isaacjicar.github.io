import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import PageIntroOverlay from "@/shared/UI/PageIntroOverlay";
import ScrollTopButton from "@/components/UI/ScrollTopButton";
import AboutSection from "../components/AboutSection";
import { aboutTexts } from "@/module/About/i18n/aboutTexts";

export default function AboutPage() {
  const { lang } = useOutletContext();       
  const [showIntro, setShowIntro] = useState(true);

  const t = aboutTexts[lang] ?? aboutTexts.es;

  return (
    <main className="relative min-h-dvh bg-baseDark text-white">
      {showIntro && (
        <PageIntroOverlay
          label={t.overlayLabel}
          theme="primary"
          graphicVariant="orbit"
          stayDuration={700}
          exitDuration={900}
          onDone={() => setShowIntro(false)}
        />
      )}

      <AboutSection t={t} />
      <ScrollTopButton />
    </main>
  );
}
