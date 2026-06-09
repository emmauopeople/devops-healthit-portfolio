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

      <section id="about" className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="About"
              title="About me"
              description="A concise professional summary connecting my DevOps work with Health IT, FHIR interoperability, and EHR integration."
            />
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/70">
              <p className="text-lg leading-8 text-slate-700">{profile.about}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {profile.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium leading-6 text-slate-700">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SkillsSummary />
      <FeaturedProject />
    </>
  );
}

export default HomePage;
