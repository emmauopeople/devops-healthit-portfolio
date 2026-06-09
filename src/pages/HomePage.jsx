import FeaturedProject from "../components/home/FeaturedProject";
import Hero from "../components/home/Hero";
import SkillsSummary from "../components/home/SkillsSummary";
import Container from "../components/common/Container";
import { profile } from "../data/profile";

function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-sky-100 bg-sky-50/80 p-8 shadow-xl shadow-sky-100/70 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-700">About</p>
              <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">
                {profile.about}
              </p>
            </div>

            <aside className="rounded-[2rem] border border-emerald-100 bg-emerald-50/80 p-8 shadow-xl shadow-emerald-100/70 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-700">Target roles</p>
              <div className="mt-6 grid gap-3">
                {profile.targetRoles.map((role) => (
                  <div key={role} className="rounded-2xl border border-emerald-100 bg-white/90 px-4 py-3 text-sm font-bold text-slate-800 shadow-sm">
                    {role}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <SkillsSummary />
      <FeaturedProject />
    </>
  );
}

export default HomePage;
