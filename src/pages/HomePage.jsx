import FeaturedProject from "../components/home/FeaturedProject";
import Hero from "../components/home/Hero";
import SkillsSummary from "../components/home/SkillsSummary";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { profile } from "../data/profile";

function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="About"
            title="A portfolio built around evidence, not only skill lists"
            description="This site is organized to show how each project solves a real problem, what architecture was used, how it was deployed, and how it was monitored."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {profile.highlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-sm leading-6 text-slate-300">
                {highlight}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SkillsSummary />
      <FeaturedProject />
    </>
  );
}

export default HomePage;
