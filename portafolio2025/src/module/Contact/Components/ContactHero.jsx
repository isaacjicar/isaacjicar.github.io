import TiltCard from "@/components/UI/TiltCard";
import { useInView } from "@/shared/motion/useInView";
import contactImg from "@/assets/ImageContact.png";

export default function ContactHero({ t }) {
  const [ref, inView] = useInView({ threshold: 0.3, replay: true });

  return (
    <header className="hero-shell pt-24 md:pt-28">
      <div className="hero-grid">
   
        <div
          ref={ref}
          className={`reveal ${inView ? "inview" : ""} md:col-span-7 space-y-6 md:space-y-8`}
          style={{ "--reveal-delay": "0ms", "--reveal-dur": "700ms" }}
        >
          <p className="hero-eyebrow">{t.heroEyebrow}</p>

          <h1 className="hero-title">{t.heroTitle}</h1>

          <p className="hero-desc">{t.heroDesc}</p>

          <div className="pt-2 md:pt-4 flex flex-wrap gap-4">
            <a href="#contact-form" className="btn-cta-main">
              {t.heroBtnPrimary}
            </a>

            <button
              type="button"
              className="btn-ghost-secondary"
              onClick={() => (window.location.href = "mailto:isaacjiemmenez@gmail.com")}
            >
              {t.heroBtnSecondary}
            </button>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs md:text-sm text-white/70">
            <div className="chip-stat">
              <div className="grid h-10 w-10 place-content-center rounded-xl bg-base-100 text-xs font-extrabold text-base-content">
                ⚡
              </div>
              <div className="leading-tight">
                <div className="font-semibold">{t.chip1}</div>
              </div>
            </div>

            <div className="chip-stat">
              <div className="grid h-10 w-10 place-content-center rounded-xl bg-base-100 text-xs font-extrabold text-base-content">
                🚀
              </div>
              <div className="leading-tight">
                <div className="font-semibold">{t.chip2}</div>
              </div>
            </div>
          </div>
        </div>

  
        <div className="md:col-span-5 mt-10 md:mt-0">
          <TiltCard
            className="z-10"
            img={contactImg}
            aspect="aspect-[4/5]"
            maxTilt={12}
            scale={1.03}
            glare
            transitionMs={420}
            reveal
            delay="150ms"
            dur="700ms"
          />
        </div>
      </div>
    </header>
  );
}
