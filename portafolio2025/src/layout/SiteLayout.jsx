// src/layout/SiteLayout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { uiTexts } from "./i18n/uiTexts";

export default function SiteLayout() {
  const [lang, setLang] = useState("es");
  const texts = uiTexts[lang];

  return (
    <div className="min-h-dvh bg-baseDark text-white flex flex-col">
      {/* NavBar recibe lang, setLang y texts */}
      <NavBar lang={lang} setLang={setLang} texts={texts} />

      <main className="flex-1">
        {/* pasamos lang al resto de páginas */}
        <Outlet context={{ lang }} />
      </main>

      <Footer texts={texts} />
    </div>
  );
}
