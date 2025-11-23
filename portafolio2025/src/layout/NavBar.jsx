
import { NavLink } from "react-router-dom";

export default function NavBar({ lang, setLang, texts }) {

  if (!texts) return null;

  const links = texts.nav.links;
  const ctaLabel = texts.nav.cta;

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-base-100/70 border-b border-white/5">
      <div className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start">
  
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      isActive ? "text-primary font-semibold" : ""
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>


          <NavLink
            to="/"
            className="btn btn-ghost text-xl font-bold tracking-wide"
          >
            <span className="text-primary">Isaac</span>
            <span className="text-accent">Jimenez</span>
          </NavLink>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    [
                      "px-3 py-2 rounded-xl transition-colors",
                      isActive
                        ? "text-primary border border-primary/40 bg-white/5"
                        : "hover:text-secondary",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


        <div className="navbar-end flex items-center gap-3">
          <div className="flex gap-1">
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-2 py-1 text-xs font-semibold border
                ${lang === "es" ? "bg-white text-black" : "border-white/40 text-white/70"}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 text-xs font-semibold border
                ${lang === "en" ? "bg-white text-black" : "border-white/40 text-white/70"}`}
            >
              EN
            </button>
          </div>

          <NavLink
            to="/contacto"
            className="btn btn-primary rounded-2xl px-5 normal-case"
          >
            {ctaLabel}
          </NavLink>
        </div>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-accent" />
    </div>
  );
}
