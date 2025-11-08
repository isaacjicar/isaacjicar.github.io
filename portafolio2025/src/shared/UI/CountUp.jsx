// src/shared/ui/CountUp.jsx
import { useEffect, useState } from "react";

export default function CountUp({ to = 10, duration = 900 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf = 0, start = 0;

    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <span>{val}</span>;
}
