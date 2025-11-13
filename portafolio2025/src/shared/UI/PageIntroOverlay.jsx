import { useEffect, useState } from "react";

export default function PageIntroOverlay({
  label,                // texto grande: "WORK", "HOME", "SERVICES"
  theme = "primary",    // "primary" | "secondary" | "accent" | "custom"
  bg = "#05051a",                   // si mandas bg/fg, override del theme
  fg = "#ffffff",
  stayDuration = 600,
  exitDuration = 900,
  graphicSrc,           // opcional: imagen que vuela
  graphicVariant = "fly", // "fly" | "orbit" | "wiggle"
  onDone,
}) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), stayDuration);
    const t2 = setTimeout(() => onDone?.(), stayDuration + exitDuration);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [stayDuration, exitDuration, onDone]);

  const style = {
    "--intro-duration": `${exitDuration}ms`,
  };

  // Colores por theme (usando DaisyUI/Tailwind CSS vars)
  if (!bg || !fg) {
    switch (theme) {
      case "primary":
        style["--intro-bg"] = "var(--p)";
        style["--intro-fg"] = "var(--pc)";
        break;
      case "secondary":
        style["--intro-bg"] = "var(--s)";
        style["--intro-fg"] = "var(--sc)";
        break;
      case "accent":
        style["--intro-bg"] = "var(--a)";
        style["--intro-fg"] = "var(--ac)";
        break;
      default:
        break;
    }
  }
  if (bg) style["--intro-bg"] = bg;
  if (fg) style["--intro-fg"] = fg;

  const graphicClass =
    graphicSrc && graphicVariant
      ? `page-intro__graphic page-intro__graphic--${graphicVariant}`
      : "";

  return (
    <div
      className={`page-intro ${exit ? "page-intro--exit" : ""}`}
      style={style}
    >
      {label && <span className="page-intro__label">{label}</span>}

      {graphicSrc && (
        <div
          className={graphicClass}
          style={{ backgroundImage: `url(${graphicSrc})` }}
        />
      )}

      <div className="page-intro__curve" />
    </div>
  );
}
