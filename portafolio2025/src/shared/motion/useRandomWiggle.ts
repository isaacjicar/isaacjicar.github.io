// src/shared/motion/useRandomWiggle.ts
import { useCallback, useEffect, useRef } from "react";

type WiggleOptions = {
  ampX?: number;
  ampY?: number;
  ampRot?: number;
  speed?: number;
  hoverScale?: number;
  rotateScale?: number;
  enabled?: boolean;
};

export function useRandomWiggle<T extends HTMLElement>(opts: WiggleOptions = {}) {
  const nodeRef = useRef<T | null>(null);

  const setRef = useCallback((node: T | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el || opts.enabled === false) return;


    const cs = getComputedStyle(el);
    const baseAmpX = (opts.ampX ?? parseFloat(cs.getPropertyValue("--amp-x"))) || 22;
    const baseAmpY = (opts.ampY ?? parseFloat(cs.getPropertyValue("--amp-y"))) || 14;
    const baseAmpR = (opts.ampRot ?? parseFloat(cs.getPropertyValue("--amp-rot"))) || 1.2;
    const speed    = (opts.speed ?? parseFloat(cs.getPropertyValue("--speed"))) || 0.55;

    let ampX = baseAmpX, ampY = baseAmpY, ampR = baseAmpR;


    let px = 0, py = 0, vx = 0, vy = 0;
    let tx = (Math.random()*2-1)*ampX;
    let ty = (Math.random()*2-1)*ampY;


    let stiffness = 14 * speed; 
    let damping   = 0.90;      
    let nextTargetAt = performance.now() + 900 + Math.random()*1600;


    const jitterSeed = Math.random()*Math.PI*2;
    const mqr = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prev = performance.now();
    let raf = 0;

    const step = (now: number) => {
      if (mqr.matches) { raf = requestAnimationFrame(step); return; }
      const dt = Math.min(0.05, (now - prev)/1000);
      prev = now;


      if (now >= nextTargetAt || Math.hypot(tx - px, ty - py) < 3) {
        tx = (Math.random()*2-1)*ampX;
        ty = (Math.random()*2-1)*ampY;

        stiffness = (12 + Math.random()*6) * speed;
        damping   = 0.88 + Math.random()*0.05;
        nextTargetAt = now + 800 + Math.random()*1800;
      }

    
      const fx = (tx - px) * stiffness;
      const fy = (ty - py) * stiffness;

  
      vx = (vx + fx * dt) * Math.pow(damping, dt*60);
      vy = (vy + fy * dt) * Math.pow(damping, dt*60);
      px += vx * 60 * dt;
      py += vy * 60 * dt;

   
      const t = now * 0.001 * speed;
      const jx = Math.sin(t*3.7 + jitterSeed) * 0.6;
      const jy = Math.cos(t*3.1 + jitterSeed*1.3) * 0.6;
      const s  = 1 + Math.sin(t*1.3 + jitterSeed)*0.006;


      const rot = (vx*0.02 + vy*0.01) * ampR;


      el.style.setProperty("--tw-translate-x", `${(px + jx).toFixed(2)}px`);
      el.style.setProperty("--tw-translate-y", `${(py + jy).toFixed(2)}px`);
      el.style.setProperty("--tw-rotate", `${rot.toFixed(3)}deg`);
      el.style.setProperty("--tw-scale-x", s.toFixed(4));
      el.style.setProperty("--tw-scale-y", s.toFixed(4));

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);


    const hoverScale  = opts.hoverScale ?? 1.6;
    const rotateScale = opts.rotateScale ?? 1.3;
    const onEnter = () => { ampX = baseAmpX * hoverScale; ampY = baseAmpY * hoverScale; ampR = baseAmpR * rotateScale; };
    const onLeave = () => { ampX = baseAmpX; ampY = baseAmpY; ampR = baseAmpR; };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [opts.ampX, opts.ampY, opts.ampRot, opts.speed, opts.hoverScale, opts.rotateScale, opts.enabled]);

  return setRef; 
}
