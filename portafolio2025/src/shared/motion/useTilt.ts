// src/shared/motion/useTilt.js
// @ts-check
import { useCallback, useEffect, useRef } from "react";

/**
 * @typedef {Object} TiltOpts
 * @property {number} [maxTilt]
 * @property {number} [scale]
 * @property {boolean} [glare]
 * @property {number} [transitionMs]
 */

/**
 * @param {TiltOpts} [opts]
 * @returns {(node: HTMLElement|null) => void}
 */
export function useTilt(opts) {
  /** @type {TiltOpts} */
  const options = opts ?? {}; // <- aquí TS entiende el tipo

  const {
    maxTilt = 10,
    scale = 1.02,
    glare = true,
    transitionMs = 160,
  } = options;

  /** @type {import('react').MutableRefObject<HTMLElement|null>} */
  const elRef = useRef(null);

  const setRef = useCallback((node) => { elRef.current = node; }, []);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    /** @type {HTMLElement|null} */
    const inner = el.firstElementChild;
    if (!inner) return;

    let raf = 0;

    /** @param {MouseEvent} e */
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * (maxTilt * -2);
      const ry = (px - 0.5) * (maxTilt *  2);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
        if (glare) {
          el.style.setProperty("--mx", `${px}`);
          el.style.setProperty("--my", `${py}`);
        }
      });
    };

    const onEnter = () => {
      inner.style.transition = `transform ${transitionMs}ms ease`;
      if (glare) el.style.setProperty("--glare-opacity", "0.18");
    };

    const onLeave = () => {
      inner.style.transition = `transform ${transitionMs}ms ease`;
      inner.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      if (glare) el.style.setProperty("--glare-opacity", "0");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxTilt, scale, glare, transitionMs]);

  return setRef;
}
