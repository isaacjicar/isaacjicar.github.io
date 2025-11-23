
import Reveal from "@/components/UI/Reveal";

export default function ToolboxGroup({
  title,
  items,
  accentColor = "var(--color-secondary)",
  pillBg = "var(--color-primary)",
  dotColor = "var(--color-accent)",
}) {
  return (
    <Reveal as="div" className="space-y-4" dur="700ms">
      <h4
        className="text-sm md:text-base font-bold tracking-[0.18em] uppercase"
        style={{ color: accentColor }}
      >
        {title}
      </h4>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs md:text-sm font-medium text-white shadow-[0_8px_0_rgba(0,0,0,0.6)]"
            style={{ backgroundColor: pillBg }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: dotColor }}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
