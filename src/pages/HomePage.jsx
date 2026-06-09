import Hero from "../components/home/Hero";
import SkillsSummary from "../components/home/SkillsSummary";
import Container from "../components/common/Container";
import { profile } from "../data/profile";

const educationItems = [
  "Master of Science in Information Technology - University of the People",
  "Associate Degree in Nursing Science - Oklahoma State University",
  "Practical Nursing - Francis Tuttle Technology Center",
  "Bachelor's Degree in Education and Computer Science - University of Bamenda",
  "Certified Kubernetes Administrator (CKA)",
];

const quickLinks = [
  { label: "Projects", href: "/projects", internal: true },
  { label: "Resume", href: "/resume", internal: true },
  { label: "One Community", href: "https://www.cameroonskills.org" },
  { label: "One Community Admin", href: "https://admin.cameroonskills.org" },
  { label: "GitHub", href: "https://github.com/emmauopeople" },
];

function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-sky-100 bg-sky-50/80 p-8 shadow-xl shadow-sky-100/70 sm:p-10 lg:-ml-4">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-700">About</p>
              <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">
                {profile.about}
              </p>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/70 sm:p-10 lg:-mr-4">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-700">Target roles</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {profile.targetRoles.map((role) => (
                  <div key={role} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm">
                    {role}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <SkillsSummary />

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">Educational Summary</p>
              <p className="mt-5 text-base leading-7 text-slate-600">
                My education combines information technology, nursing, computer science education, and cloud-native operations. This background supports my focus on DevOps, site reliability, Health IT systems, FHIR interoperability, and EHR integration.
              </p>
              <div className="mt-6 grid gap-3">
                {educationItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-sky-100 bg-sky-50/70 p-8 shadow-xl shadow-sky-100/70 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">Quick Links</p>
              <div className="mt-6 grid gap-3">
                {quickLinks.map((link) =>
                  link.internal ? (
                    <a key={link.label} href={link.href} className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700">
                      {link.label}
                    </a>
                  ) : (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700">
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
