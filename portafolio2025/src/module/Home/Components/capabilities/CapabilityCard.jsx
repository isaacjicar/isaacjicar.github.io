export default function CapabilityCard({ icon, title, items = [] }) {
  return (
    <div className="card bg-neutral/60 backdrop-blur border border-white/5 shadow-xl rounded-3xl">
      <div className="card-body p-7 md:p-9">
        <div className="text-3xl">{icon}</div>
        <h3 className="card-title text-secondary">{title}</h3>

        <ul className="mt-3 space-y-1 text-white/80">
          {items.map((txt) => (
            <li key={txt} className="flex gap-2">
              <span>•</span><span>{txt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
