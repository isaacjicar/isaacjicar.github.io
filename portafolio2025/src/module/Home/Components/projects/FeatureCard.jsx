export default function FeatureCard({ title, desc, icon, href }) {
  return (
    <div className="card bg-neutral/60 backdrop-blur border border-white/5 shadow-xl rounded-3xl">
      <div className="card-body p-7 md:p-9 gap-3">
        <div className="text-3xl text-accent">{icon}</div>
        <h3 className="card-title text-secondary">{title}</h3>
        <p className="text-white/80">{desc}</p>
        <div className="card-actions justify-end pt-2">
          <a
            href={href}
            className="btn btn-sm btn-secondary rounded-xl"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}
