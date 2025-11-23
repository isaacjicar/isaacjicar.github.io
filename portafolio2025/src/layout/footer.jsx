
import Reveal from "@/components/UI/Reveal";
import { Link } from "react-router-dom";

export default function Footer({ texts }) {
  const year = new Date().getFullYear();
  const t = texts.footer;

  return (
    <footer className="bg-baseDark text-slate-100 pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal
          as="section"
          className="rounded-[32px] bg-[#4C6CB3] text-white px-6 py-12 md:px-12 md:py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          delay="120ms"
          dur="700ms"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] mb-2 text-blue-100">
            {t.leadSmall}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            {t.headingMain}{" "}
            <span className="text-[#4CB393]">{t.headingAccent}</span>?
          </h2>

          <p className="mt-4 text-sm md:text-base text-blue-100 max-w-xl mx-auto">
            {t.subtitle}
          </p>

        <Link
          to="/contacto"
          className="
            mt-8 inline-flex items-center justify-center
            rounded-full bg-[#4CB393] px-8 py-3
            text-sm md:text-base font-semibold uppercase tracking-[0.18em]
            text-[#0b1020]
            shadow-[0_10px_0_rgba(0,0,0,0.35)]
            transition
            hover:translate-y-[2px] hover:shadow-[0_6px_0_rgba(0,0,0,0.35)]
            focus:outline-none focus:ring-2 focus:ring-[#4C9FB3] focus:ring-offset-2 focus:ring-offset-[#4C6CB3]
          "
        >
          {t.contactBtn}
        </Link>
        </Reveal>

        <Reveal
          as="div"
          className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs md:text-sm"
          delay="260ms"
          dur="700ms"
        >
 
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="mailto:isaacijiemmenez@gmail.com"
              className="hover:text-[#4C9FB3] transition"
            >
              {t.email}
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-jimenez-a5b143197"
              className="hover:text-[#4C9FB3] transition"
            >
              {t.linkedin}
            </a>
            <a
              href="https://github.com/isaacjicar"
              className="hover:text-[#4C9FB3] transition"
            >
              {t.github}
            </a>
          </div>

          
          <p className="text-center text-slate-400">
            {year} · {t.rights} · Diseño &amp; código por{" "}
            <span className="font-semibold text-[#4C9FB3]">
              Isaac Jiménez
            </span>
          </p>

          <div className="flex items-center justify-center md:justify-end gap-6 text-slate-400">
            <a
              href="#legal"
              className="underline-offset-4 hover:underline hover:text-[#4C9FB3] transition"
            >
              {t.legal}
            </a>
            <a
              href="#dont-click"
              className="underline-offset-4 hover:underline hover:text-[#4C9FB3] transition"
            >
              {t.dontClick}
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
