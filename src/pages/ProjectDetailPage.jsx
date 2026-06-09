import { Navigate, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import ProjectMenu from "../components/projects/ProjectMenu";
import { getProjectBySlug, projects } from "../data/projects";

const sectionOrder = [
  { key: "problem", title: "Problem", type: "text" },
  { key: "solution", title: "Solution", type: "text" },
  { key: "architecture", title: "Architecture", type: "list", imageTitle: "Architecture Diagram" },
  { key: "security", title: "Security", type: "list" },
  { key: "implementation", title: "Implementation", type: "list" },
  { key: "deployment", title: "Deployment", type: "list" },
  { key: "monitoring", title: "Monitoring and Reliability", type: "list", imageTitle: "Monitoring Evidence" },
  { key: "troubleshooting", title: "Troubleshooting Story", type: "text" },
  { key: "results", title: "Results", type: "list" },
  { key: "lessons", title: "Lessons Learned", type: "list" },
];

function ProjectImage({ image, fallbackTitle }) {
  if (!image?.src) return null;

  return (
    <figure className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
      <img src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, "")}`} alt={image.title || fallbackTitle} className="w-full object-cover" />
      <figcaption className="border-t border-slate-200 bg-white px-5 py-4">
        <p className="text-sm font-black text-slate-900">{image.title || fallbackTitle}</p>
        {image.description && <p className="mt-1 text-sm leading-6 text-slate-600">{image.description}</p>}
      </figcaption>
    </figure>
  );
}

function CaseStudySection({ project, section }) {
  const content = project[section.key];
  const image = project.sectionImages?.[section.key];

  if (!content && !image) return null;

  return (
    <section id={section.key} className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {section.type === "text" && content && <p className="mt-5 text-base leading-8 text-slate-700">{content}</p>}

      {section.type === "list" && Array.isArray(content) && (
        <ul className="mt-5 grid gap-3">
          {content.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <ProjectImage image={image} fallbackTitle={section.imageTitle || section.title} />
    </section>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const activeSlug = slug || projects[0]?.slug;
  const project = getProjectBySlug(activeSlug);

  if (!slug && projects[0]) {
    return <Navigate to={`/projects/${projects[0].slug}`} replace />;
  }

  if (!project) {
    return (
      <section className="py-20">
        <Container>
          <h1 className="text-4xl font-black text-slate-950">Project not found</h1>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[310px_minmax(0,1fr)] lg:items-start">
          <ProjectMenu activeSlug={project.slug} />

          <article>
            <header className="rounded-[2rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-slate-50 p-8 shadow-xl shadow-slate-200/70 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">{project.category}</p>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{project.name}</h1>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">{project.summary}</p>

              <div className="mt-7 grid gap-4 lg:grid-cols-[0.35fr_0.65fr]">
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Status</p>
                  <p className="mt-2 text-sm font-bold text-slate-900">{project.status}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack?.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </header>

            <div className="mt-8 grid gap-6">
              {sectionOrder.map((section) => (
                <CaseStudySection key={section.key} project={project} section={section} />
              ))}
            </div>

            {project.links && (
              <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                <h2 className="text-2xl font-black text-slate-950">Project Links</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {Object.entries(project.links).map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
                      {label}
                    </a>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </Container>
    </section>
  );
}

export default ProjectDetailPage;
