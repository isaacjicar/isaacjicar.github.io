
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import PageIntroOverlay from "@/shared/UI/PageIntroOverlay";
import ContactHero from "../Components/ContactHero";
import ContactFormSection from "../Components/ContactFormSection";
import { contactTexts } from "../i18n/contactTexts";

const contactImgOverlay =
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg"; 

export default function PageContact() {
  const { lang } = useOutletContext();      
  const [showIntro, setShowIntro] = useState(true);
  const t = contactTexts[lang] ?? contactTexts.es;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="relative min-h-dvh bg-baseDark text-white">
      {showIntro && (
        <PageIntroOverlay
          label={t.overlayLabel}
          theme="primary"
          graphicSrc={contactImgOverlay}
          graphicVariant="orbit"
          stayDuration={700}
          exitDuration={900}
          onDone={() => setShowIntro(false)}
        />
      )}

      <ContactHero t={t} />
      <ContactFormSection t={t} />
    </main>
  );
}
