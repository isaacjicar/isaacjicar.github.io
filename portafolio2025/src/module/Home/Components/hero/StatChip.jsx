import { useInView } from "@/shared/motion/useInView";
import CountUp from "@/shared/UI/CountUp";

export default function StatChip({ value, l1, l2, delay = "0ms" }) {
  const [ref, inView] = useInView({ threshold: 0.4, replay: true });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "inview" : ""} chip-stat`}
      style={{ "--reveal-delay": delay, "--reveal-dur": "700ms" }}
    >
      <div className="grid h-12 w-12 place-content-center rounded-xl bg-base-100 text-2xl font-extrabold text-base-content">
        <CountUp to={inView ? Number(value) : 0} duration={1200} />
      </div>
      <div className="leading-tight">
        <div className="font-semibold">{l1}</div>
        <div className="text-sm text-white/70">{l2}</div>
      </div>
    </div>
  );
}
