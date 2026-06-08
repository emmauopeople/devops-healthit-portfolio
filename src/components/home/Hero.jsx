import { profile } from "../../data/profile";
import Button from "../common/Button";
import Container from "../common/Container";
import Tag from "../common/Tag";

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <Tag>DevOps Portfolio • Real systems • Health IT direction</Tag>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            Building production-ready systems with DevOps, cloud, monitoring, and healthcare technology.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/projects/one-community-docker-compose">View One Community Case Study</Button>
            <Button to="/projects" variant="secondary">Browse Projects</Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-emerald-950/20">
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Target roles</p>
            <div className="mt-6 space-y-3">
              {profile.targetRoles.map((role) => (
                <div key={role} className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
