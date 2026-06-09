import { NavLink } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectMenu({ activeSlug }) {
  return (
    <aside className="border-b border-slate-200 bg-slate-100 lg:sticky lg:top-16 lg:min-h-[calc(100vh-4rem)] lg:border-b-0 lg:border-r">
      <div className="px-5 py-6 lg:px-6 lg:py-8">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-sky-700">Projects</p>
        <nav className="mt-5 grid gap-3">
          {projects.map((project) => {
            const isActive = project.slug === activeSlug;

            return (
              <NavLink
                key={project.slug}
                to={`/projects/${project.slug}`}
                className={`rounded-2xl border px-4 py-4 text-left transition ${
                  isActive
                    ? "border-sky-700 bg-sky-700 text-white shadow-lg shadow-sky-200"
                    : "border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                <span className="block text-sm font-black leading-5">{project.shortName}</span>
                <span className={`mt-2 block text-xs font-semibold ${isActive ? "text-sky-100" : "text-slate-500"}`}>
                  {project.category}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default ProjectMenu;
