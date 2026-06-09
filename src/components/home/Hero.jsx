import { profile } from "../../data/profile";
import Button from "../common/Button";
import Container from "../common/Container";
import Tag from "../common/Tag";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-emerald-50 py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/hero/infrastructure-engineering-hero-bg.png`}
              alt="Infrastructure engineering background"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <Tag>Portfolio • DevOps • Health IT • FHIR • EHR Integration</Tag>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-bold text-sky-800">{profile.title}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{profile.heroHeadline}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{profile.summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/resume">Hire Me</Button>
            <Button to="/projects" variant="secondary">View Projects</Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.targetRoles.slice(0, 4).map((role) => (
              <div key={role} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                {role}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
