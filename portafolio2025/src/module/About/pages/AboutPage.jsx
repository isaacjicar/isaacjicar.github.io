import AboutSection from "@/module/About/Components/AboutSection";
import Footer from "@/layout/footer";
import { useState } from "react";
import PageIntroOverlay from "@/shared/UI/PageIntroOverlay";


export default function AboutPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-dvh bg-baseDark text-white">
      {showIntro && (
        <PageIntroOverlay
              label="About Me"              
              theme="primary"           
              graphicVariant="orbit"   
              stayDuration={700}
              exitDuration={900}
              onDone={() => setShowIntro(false)}
            />
          )}
      <AboutSection />
      <Footer />
    </main>
  );
}
