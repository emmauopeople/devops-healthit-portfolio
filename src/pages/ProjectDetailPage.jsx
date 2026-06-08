import { Link, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import ScreenshotGallery from "../components/projects/ScreenshotGallery";
import { getProjectBySlug } from "../data/projects";

function BulletSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TextSection({ title, children }) {
  if (!children) return null;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-5 text-sm leading-7 text-slate-300">{children}</p>
    </section>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="py-20">
        <Container>
          <h1 className="text-4xl font-black text-white">Project not found</h1>
          <Link to="/projects" className="mt-6 inline-flex text-emerald-300">Back to projects</Link>
        </Container>
      </section>
    );
  }

  return (
    <article className="py-20">
      <Container>
        <Link to="/projects" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">Back to projects</Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.35fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{project.category}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{project.name}</h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{project.summary}</p>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold text-slate-400">Status</p>
            <p className="mt-2 font-bold text-white">{project.status}</p>
            <p className="mt-6 text-sm font-semibold text-slate-400">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{item}</span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-6">
          <TextSection title="Problem">{project.problem}</TextSection>
          <TextSection title="Solution">{project.solution}</TextSection>
          <BulletSection title="Architecture" items={project.architecture} />
          <BulletSection title="Security" items={project.security} />
          <BulletSection title="Implementation" items={project.implementation} />
          <BulletSection title="Deployment" items={project.deployment} />
          <BulletSection title="Monitoring and Reliability" items={project.monitoring} />
          <TextSection title="Troubleshooting Story">{project.troubleshooting}</TextSection>
          <BulletSection title="Results" items={project.results} />
          <BulletSection title="Lessons Learned" items={project.lessons} />
        </div>

        {project.links && (
          <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-bold text-white">Project Links</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {Object.entries(project.links).map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-200">
                  {label}
                </a>
              ))}
            </div>
          </section>
        )}

        {project.screenshots && (
          <section className="mt-16">
            <SectionHeader eyebrow="Evidence" title="Screenshots and visual proof" description="Screenshots will be added as the case study is polished. Missing images show exactly which filename should be placed in the assets folder." />
            <div className="mt-10">
              <ScreenshotGallery screenshots={project.screenshots} />
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}

export default ProjectDetailPage;
