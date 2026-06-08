import { Link } from "react-router-dom";
import Card from "../common/Card";

function ProjectCard({ project }) {
  return (
    <Card className="transition hover:-translate-y-1 hover:border-emerald-400/40">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">{project.status}</p>
      <h3 className="mt-4 text-xl font-bold text-white">{project.shortName}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((item) => (
          <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>
      <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200">
        View case study →
      </Link>
    </Card>
  );
}

export default ProjectCard;
