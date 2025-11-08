import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mí" },
  { to: "/works", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
  { to: "/servicios", label: "Servicios" }
];

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-base-100/70 border-b border-white/5">
      <div className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start">
          {/* Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
              {links.map(l => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="btn btn-ghost text-xl font-bold tracking-wide">
            <span className="text-primary">Isaac</span>
            <span className="text-accent">Jimenez</span>
          </NavLink>
        </div>

        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    [
                      "px-3 py-2 rounded-xl transition-colors",
                      isActive
                        ? "text-primary border border-primary/40 bg-white/5"
                        : "hover:text-secondary"
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="navbar-end">
          <NavLink to="/contact" className="btn btn-primary rounded-2xl px-5 normal-case">
            Cotizar ahora
          </NavLink>
        </div>
      </div>

      {/* línea 60-30-10 */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-accent" />
    </div>
  );
}
