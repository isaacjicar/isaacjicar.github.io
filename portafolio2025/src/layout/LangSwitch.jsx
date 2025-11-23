export default function LangSwitch({ lang, setLang, compact = false }) {
  return (
    <div
      className={
        "inline-flex items-center rounded-full bg-white/10 p-1 shadow-[0_8px_0_rgba(0,0,0,0.5)]" +
        (compact ? " text-[10px]" : " text-xs")
      }
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        className={
          "px-2 py-[2px] rounded-full font-semibold transition " +
          (lang === "es"
            ? "bg-white text-slate-900"
            : "text-white/70 hover:text-white")
        }
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={
          "px-2 py-[2px] rounded-full font-semibold transition " +
          (lang === "en"
            ? "bg-white text-slate-900"
            : "text-white/70 hover:text-white")
        }
      >
        EN
      </button>
    </div>
  );
}
