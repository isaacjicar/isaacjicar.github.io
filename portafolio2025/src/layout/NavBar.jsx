// src/layout/MainNavbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LangSwitch from "./LangSwitch";

export default function MainNavbar({ lang, setLang, texts }) {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = texts?.nav?.links ?? [];

  return (
    <header className="sticky top-0 z-40 bg-baseDark/95 border-b border-white/10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
   
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-[0.18em] uppercase text-xs md:text-sm"
          >
            <span className="text-primary">Isaac</span>
            <span className="text-accent">Jiménez</span>
          </Link>

  
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-4 text-xs md:text-sm text-white/80">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      "transition hover:text-accent " +
                      (isActive ? "text-accent font-semibold" : "")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <LangSwitch lang={lang} setLang={setLang} />


            <Link
              to="/contacto" 
              className="btn-cta-main hidden lg:inline-flex"
            >
              {texts.nav.cta}
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LangSwitch lang={lang} setLang={setLang} compact />
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-[3px]">
                <span className="block h-[2px] w-5 bg-white rounded-full" />
                <span className="block h-[2px] w-5 bg-white rounded-full" />
                <span className="block h-[2px] w-5 bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>


        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <nav className="rounded-2xl bg-neutral/80 border border-white/10 p-4 space-y-4">
              <ul className="space-y-2 text-sm text-white/90">
                {navLinks.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        "block rounded-lg px-3 py-2 transition " +
                        (isActive
                          ? "bg-white/10 text-accent"
                          : "hover:bg-white/5")
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/contacto" 
                onClick={() => setIsOpen(false)}
                className="btn-cta-main w-full justify-center text-xs"
              >
                {texts.nav.cta}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
