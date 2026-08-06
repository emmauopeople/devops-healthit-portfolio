import { Link } from "react-router-dom";
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

const featuredProjects = [
  {
    title: "Local Kubernetes Church App",
    route: "/projects/local-kubernetes-church-microservices",
    status: "Kubernetes / GitOps / CI/CD",
    summary:
      "Local Kubernetes deployment case study for a real church management application, focused on GitOps delivery, CI/CD, monitoring, and logging.",
    tags: ["Kubernetes", "GitOps", "CI/CD", "Monitoring", "Logging"],
    liveLabel: "Live App",
    liveUrl: "https://www.gestionparoissiale.org",
  },
  {
    title: "One Community Production Platform",
    route: "/projects/one-community-docker-compose",
    status: "Production / Running",
    summary:
      "Production Docker Compose deployment with NGINX, HTTPS, PostgreSQL, object storage, Prometheus, Grafana, and backup automation.",
    tags: ["Docker", "NGINX", "PostgreSQL", "Prometheus", "Grafana"],
    liveLabel: "Live Site",
    liveUrl: "https://www.cameroonskills.org",
  },
  {
    title: "Health Screening / FHIR Planning",
    route: "/projects/health-screening-application-planning",
    status: "Health IT / Planning",
    summary:
      "Offline-first community screening design with referral tracking, central sync, FHIR R4 mapping, and clinician-facing AI-assisted review planning.",
    tags: ["Health IT", "FHIR R4", "Offline-first", "Clinical Workflow", "AI Review"],
  },
];

const quickLinks = [
  { label: "Projects", href: "/projects", internal: true },
  { label: "Resume", href: "/resume", internal: true },
  { label: "One Community", href: "https://www.cameroonskills.org" },
  {
    label: "One Community Admin",
    href: "https://admin.cameroonskills.org",
    note: "Contact me to get login credentials.",
  },
  { label: "GitHub", href: "https://github.com/emmauopeople" },
];

function FeaturedProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-sky-100 sm:p-7">
      <div>
        <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
          {project.status}
        </span>
        <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <Link to={project.route} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-black text-white shadow-lg shadow-sky-200 transition hover:bg-sky-800">
          View Case Study
        </Link>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
            {project.liveLabel}
          </a>
        )}
      </div>
    </article>
  );
}

function FeaturedProjectsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-700">Featured Projects</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Production, Kubernetes, and Health IT proof of work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Recruiter-facing case studies showing software development, deployment, monitoring, and healthcare technology planning across real and production-like systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function QuickLink({ link }) {
  const className = "rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700";

  if (link.internal) {
    return (
      <Link key={link.label} to={link.href} className={className}>
        <span>{link.label}</span>
        {link.note && <span className="mt-1 block text-xs font-semibold text-slate-500">{link.note}</span>}
      </Link>
    );
  }

  return (
    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={className}>
      <span>{link.label}</span>
      {link.note && <span className="mt-1 block text-xs font-semibold text-slate-500">{link.note}</span>}
    </a>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjectsSection />

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
                {quickLinks.map((link) => (
                  <QuickLink key={link.label} link={link} />
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HomePage;