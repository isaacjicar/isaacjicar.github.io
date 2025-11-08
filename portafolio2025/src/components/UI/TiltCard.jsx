import { useTilt } from "@/shared/motion/useTilt";
import { useInView } from "@/shared/motion/useInView";

export default function TiltCard({
  className = "",
  img,
  children,
  // tamaño
  aspect = "aspect-[4/5]",   // o pasa height="h-[460px]"
  height,
  // motion
  maxTilt = 12,
  scale = 1.03,
  glare = true,
  transitionMs = 420,
  // reveal
  reveal = true,
  delay = "0ms",
  dur = "700ms",
}) {
  const setTiltRef = useTilt({ maxTilt, scale, glare, transitionMs });
  const [setInViewRef, inView] = useInView({ threshold: 0.3, replay: true });
  const composedRef = (node) => { setTiltRef(node); setInViewRef(node); };

  const sizeClass = height ? height : aspect;

  return (
    <div
      ref={composedRef}
      className={`tilt-wrap rounded-[2.5rem] soft-shadow ring-1 ring-white/10 overflow-hidden bg-base-200/20
                  ${reveal ? "tilt-intro" : ""} ${reveal && inView ? "inview" : ""} ${className}`}
      style={reveal ? { "--reveal-delay": delay, "--reveal-dur": dur } : undefined}
    >
      <div
        className={`tilt-inner ${sizeClass} w-full bg-cover bg-center`}
        style={img ? { backgroundImage: `url(${img})` } : undefined}
      >
        {!img && children}
      </div>
    </div>
  );
}
