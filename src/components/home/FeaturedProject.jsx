import { getFeaturedProject } from "../../data/projects";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

function FeaturedProject() {
  const project = getFeaturedProject();

  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Featured case study"
          title="One strong project, documented deeply"
          description="The first portfolio case study focuses on a live production deployment and demonstrates system ownership from application deployment to monitoring and troubleshooting."
        />

        <Card className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{project.status}</p>
            <h3 className="mt-4 text-3xl font-black text-white">{project.name}</h3>
            <p className="mt-5 text-slate-300 leading-7">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button to={`/projects/${project.slug}`}>Read Full Case Study</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm font-semibold text-slate-400">Technical proof points</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {project.results.slice(0, 5).map((result) => (
                <li key={result} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default FeaturedProject;
