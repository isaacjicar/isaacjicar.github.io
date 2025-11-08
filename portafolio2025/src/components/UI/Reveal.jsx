import { useInView } from "@/shared/motion/useInView";

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = "0ms",
  dur = "700ms",
  threshold = 0.25,
  rootMargin = "0px",
  once = false,
  replay = true,
}) {
  const [ref, inView] = useInView({ threshold, rootMargin, once, replay });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "inview" : ""} ${className}`}
      style={{ "--reveal-delay": delay, "--reveal-dur": dur }}
    >
      {children}
    </Tag>
  );
}
