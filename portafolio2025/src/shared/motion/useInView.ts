// @ts-check
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * @typedef {Object} InViewOpts
 * @property {number|number[]} [threshold]   // 0..1
 * @property {string} [rootMargin]           // CSS margin (p.ej. "0px 0px -20% 0px")
 * @property {boolean} [once]                // true = se ejecuta 1 sola vez
 * @property {boolean} [replay]              // true = quita/pone clase al entrar/salir (default)
 */
const defaultOpts = { threshold: 0.3, rootMargin: "0px 0px -10% 0px", once: false, replay: true };

/**
 * Devuelve: refCallback + boolean inView
 * @param {InViewOpts} [opts]
 */
export function useInView(opts = {}) {
  const options = { ...defaultOpts, ...opts };
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  const setRef = useCallback((node) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once) io.unobserve(entry.target);
      } else {
        if (options.replay) setInView(false);
      }
    }, { threshold: options.threshold, rootMargin: options.rootMargin });

    io.observe(node);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin, options.once, options.replay]);

  return [setRef, inView];
}
