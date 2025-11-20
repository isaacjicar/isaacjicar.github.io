
import { Link } from "react-router-dom";
import Reveal from "@/components/UI/Reveal";
import StatChip from "@/module/Home/Components/hero/StatChip";


export default function HeroText({ t }) {
  return (
    <Reveal
      className="md:col-span-7 space-y-6 md:space-y-8"
      delay="0ms"
      dur="750ms"
      threshold={0.35}
      rootMargin="0px 0px -12% 0px"
    >
      <p className="hero-eyebrow">{t.heroPrefix}</p>

      <h1 className="hero-title">
      
        <span className="block">{t.heroNameTop}</span>


        <span className="block text-accent">{t.heroNameBottom}</span>


        <span className="block">
          <span className="text-primary">{t.heroRoleTop}</span>
          <br />
          <span className="text-white">{t.heroRoleBottom}</span>
        </span>
      </h1>

      <p className="hero-desc">{t.heroDesc}</p>

      <div className="pt-2 md:pt-4 flex flex-wrap gap-5 md:gap-6">
        <StatChip value={5} l1={t.stat1_l1} l2={t.stat1_l2} delay="150ms" />
        <StatChip value={1} l1={t.stat2_l1} l2={t.stat2_l2} delay="250ms" />
      </div>

      <div className="pt-4 md:pt-6 flex gap-4">
        <Link to="/works" className="btn-cta-main">
          {t.heroBtnProjects}
        </Link>
        <Link to="/about" className="btn-ghost-secondary">
          {t.heroBtnAbout}
        </Link>
      </div>
    </Reveal>
  );
}
