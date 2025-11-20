// FeatureCard.jsx
import { Link } from "react-router-dom";

export default function FeatureCard({ title, desc, icon, to, ctaLabel }) {
  return (
    <div className="card-feature">
      <div className="card-feature-body">
        <div className="text-3xl text-accent">{icon}</div>
        <h3 className="card-title text-secondary">{title}</h3>
        <p className="text-white/80">{desc}</p>
        <div className="card-actions justify-end pt-2">
          <Link to={to} className="btn-card-secondary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

FeatureCard.defaultProps = {
  ctaLabel: "Ver más",
};
