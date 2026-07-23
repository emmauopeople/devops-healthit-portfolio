import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import ProjectMenu from "../components/projects/ProjectMenu";
import { getProjectBySlug, projects } from "../data/projects";

const sectionOrder = [
  { key: "problem", title: "Problem", type: "text" },
  { key: "solution", title: "Solution", type: "text" },
  { key: "objectives", title: "Objectives", type: "list" },
  { key: "clinicalWorkflow", title: "Clinical Workflow", type: "list", imageTitle: "Clinical Workflow" },
  { key: "functionalScope", title: "Functional Scope", type: "list" },
  { key: "architecture", title: "Architecture", type: "list", imageTitle: "Architecture Diagram" },
  { key: "dataFlow", title: "End-to-End Data Flow", type: "list", imageTitle: "Data Flow Diagram" },
  { key: "dataArchitecture", title: "Data Architecture", type: "list" },
  { key: "fhirInteroperability", title: "FHIR Interoperability", type: "list", imageTitle: "FHIR Mapping" },
  { key: "doctorPortalAi", title: "Doctor Portal and AI-Assisted Review", type: "list", imageTitle: "Doctor Portal and AI Workflow" },
  { key: "security", title: "Security, Privacy, and Governance", type: "list" },
  { key: "nonFunctionalRequirements", title: "Non-Functional Requirements", type: "list" },
  { key: "agileDelivery", title: "Agile Delivery Plan", type: "list", imageTitle: "Agile Epic Sequence" },
  { key: "backlog", title: "Initial Product Backlog", type: "list" },
  { key: "acceptanceScenarios", title: "End-to-End Acceptance Scenarios", type: "list" },
  { key: "risks", title: "Key Risks and Mitigations", type: "list" },
  { key: "implementation", title: "Implementation", type: "list" },
  { key: "deployment", title: "Deployment", type: "list" },
  { key: "monitoring", title: "Monitoring and Reliability", type: "list", imageTitle: "Monitoring Evidence" },
  { key: "results", title: "Results", type: "list" },
  { key: "successMeasures", title: "Success Measures", type: "list" },
  { key: "deliverables", title: "Project Deliverables Checklist", type: "list" },
  { key: "immediateNextSteps", title: "Immediate Next Steps", type: "list" },
  { key: "troubleshooting", title: "Troubleshooting Story", type: "text" },
  { key: "lessons", title: "Lessons Learned", type: "list" },
];

const churchAppUrl = "https://www.gestionparoissiale.org";
const linkClass = "font-black !text-blue-600 underline underline-offset-4 decoration-blue-600 hover:!text-blue-800 hover:decoration-blue-800";

function projectSearchText(project) {
  return [
    project.slug,
    project.name,
    project.shortName,
    project.category,
    project.summary,
    ...(Array.isArray(project.focus) ? project.focus : []),
    ...(Array.isArray(project.stack) ? project.stack : []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function referencesChurch(project) {
  const text = projectSearchText(project);
  return text.includes("church") || text.includes("parish") || text.includes("paroissiale");
}

function isLocalKubernetesChurchAppProject(project) {
  const text = projectSearchText(project);
  const hasLocalKubernetes =
    text.includes("local kubernetes") ||
    text.includes("local-kubernetes") ||
    text.includes("local k8s") ||
    (text.includes("local") && (text.includes("kubernetes") || text.includes("k8s")));

  return hasLocalKubernetes;
}

function isChurchEksProject(project) {
  const text = projectSearchText(project);
  const hasEks = text.includes("eks") || text.includes("amazon eks") || text.includes("aws eks");

  return referencesChurch(project) && (project.slug === "church-management-kubernetes" || hasEks);
}

function isAnyChurchKubernetesProject(project) {
  const text = projectSearchText(project);
  return (
    isLocalKubernetesChurchAppProject(project) ||
    isChurchEksProject(project) ||
    (referencesChurch(project) && (text.includes("kubernetes") || text.includes("k8s") || text.includes("gitops")))
  );
}

function renderPlainTextWithUrls(text, keyPrefix) {
  return String(text)
    .split(/(https?:\/\/[^\s)]+)/g)
    .map((part, index) =>
      part.startsWith("http") ? (
        <a key={`${keyPrefix}-url-${index}`} href={part} target="_blank" rel="noreferrer" className={linkClass}>
          {part}
        </a>
      ) : (
        part
      )
    );
}

function LinkedText({ text }) {
  const source = String(text);
  const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const output = [];
  let lastIndex = 0;
  let match;

  while ((match = markdownLinkPattern.exec(source)) !== null) {
    const [fullMatch, label, url] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      output.push(...renderPlainTextWithUrls(source.slice(lastIndex, matchIndex), `text-${lastIndex}`));
    }

    output.push(
      <a key={`${url}-${matchIndex}`} href={url} target="_blank" rel="noreferrer" className={linkClass}>
        {label}
      </a>
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < source.length) {
    output.push(...renderPlainTextWithUrls(source.slice(lastIndex), `text-${lastIndex}`));
  }

  return output;
}

function ProjectImage({ image, fallbackTitle, compact = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!image?.src) return null;

  const isFull = image.layout === "full";
  const isPhone = image.layout === "phone";
  const figureClass = compact
    ? "mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
    : isFull
      ? "mx-auto mt-6 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
      : "mx-auto mt-6 max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:max-w-[70%]";
  const imgClass = isPhone ? "mx-auto max-h-[560px] w-auto max-w-full object-contain" : "w-full object-contain";

  return (
    <figure className={figureClass}>
      <div className="bg-slate-100">
        <img
          src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, "")}`}
          alt={image.title || fallbackTitle}
          loading={image.priority ? "eager" : "lazy"}
          decoding={image.priority ? "sync" : "async"}
          fetchPriority={image.priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={`${imgClass} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <figcaption className="border-t border-slate-200 bg-white px-5 py-4">
        <p className="text-sm font-black text-slate-900">{image.title || fallbackTitle}</p>
        {image.description && <p className="mt-1 text-sm leading-6 text-slate-600">{image.description}</p>}
      </figcaption>
    </figure>
  );
}

function SectionImages({ images, fallbackTitle }) {
  const imageList = Array.isArray(images) ? images : images ? [images] : [];

  if (!imageList.length) return null;

  const fullWidthImages = imageList.filter((image) => image.layout === "full");
  const groupedImages = imageList.filter((image) => image.layout !== "full");

  return (
    <>
      {fullWidthImages.map((image) => (
        <ProjectImage key={image.src} image={image} fallbackTitle={fallbackTitle} />
      ))}

      {groupedImages.length > 1 && (
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {groupedImages.map((image) => (
            <ProjectImage key={image.src} image={image} fallbackTitle={fallbackTitle} compact />
          ))}
        </div>
      )}

      {groupedImages.length === 1 && <ProjectImage image={groupedImages[0]} fallbackTitle={fallbackTitle} />}
    </>
  );
}

function SectionDetailList({ title, items }) {
  if (!title || !items?.length) return null;

  return (
    <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" />
            <span><LinkedText text={item} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArchitectureStack({ project, sectionKey }) {
  if (sectionKey !== "architecture" || isAnyChurchKubernetesProject(project) || !project.stack?.length) {
    return null;
  }

  return (
    <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">Technology Stack</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseStudySection({ project, section }) {
  const content = project[section.key];
  const images = project.sectionImages?.[section.key];
  const detailTitle = project[`${section.key}DetailsTitle`];
  const detailItems = project[`${section.key}Details`];
  const sectionTitle = section.key === "architecture" && isAnyChurchKubernetesProject(project) ? "Application Architecture" : section.title;

  if (!content && !images && !detailItems?.length) return null;

  return (
    <section id={section.key} className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-slate-950">{sectionTitle}</h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {section.type === "text" && content && <p className="mt-5 text-base leading-8 text-slate-700"><LinkedText text={content} /></p>}
      <SectionDetailList title={detailTitle} items={detailItems} />

      {section.type === "list" && Array.isArray(content) && (
        <ul className="mt-5 grid gap-3">
          {content.map((item) => {
            const itemText = typeof item === "string" ? item : item.text;
            const itemImages = typeof item === "string" ? null : item.images;

            return (
              <li key={itemText} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" />
                  <span><LinkedText text={itemText} /></span>
                </div>
                <SectionImages images={itemImages} fallbackTitle={section.imageTitle || section.title} />
              </li>
            );
          })}
        </ul>
      )}

      <ArchitectureStack project={project} sectionKey={section.key} />
      <SectionImages images={images} fallbackTitle={section.imageTitle || section.title} />
    </section>
  );
}

function ProjectLinksSection({ showChurchAppDemo, projectLinks }) {
  if (!projectLinks.length) return null;

  return (
    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <h2 className="text-2xl font-black text-slate-950">Project Links</h2>
      {showChurchAppDemo && (
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          Live software demo for this Local Kubernetes church app project: the Church Management application currently runs on Docker Swarm on OVHcloud and is included here to demonstrate software development skills.
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        {projectLinks.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
            {label}
          </a>
        ))}
      </div>
      {showChurchAppDemo && (
        <div className="mt-5 rounded-2xl border border-sky-200 bg-white p-4 text-sm leading-6 text-slate-700">
          <p className="font-black text-slate-950">Recruiter demo credentials</p>
          <p className="mt-2"><span className="font-bold">Username:</span> recruiter@gmail.com</p>
          <p><span className="font-bold">Password:</span> recruiter2026</p>
        </div>
      )}
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

  const isOneCommunity = project.slug === "one-community-docker-compose";
  const showChurchAppDemo = isLocalKubernetesChurchAppProject(project);
  const showInProgressNotice = isChurchEksProject(project);
  const heroTitle = isOneCommunity ? "One Community" : project.name;
  const heroSubtitle = isOneCommunity ? "Skill visibility and data platform." : String(project.summary || "").replace(/^In Progress -\s*/, "");
  const heroSubtitleClass = showChurchAppDemo
    ? "mt-4 max-w-4xl text-base font-semibold leading-7 text-sky-800 sm:text-lg"
    : "mt-4 max-w-4xl text-lg font-bold leading-8 text-sky-800 sm:text-xl";
  const heroTitleClass = showChurchAppDemo
    ? "text-xl font-black tracking-tight text-slate-950 sm:text-2xl lg:text-3xl"
    : "text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl";
  const heroDeployment = isOneCommunity ? "Deployed with Docker Compose." : project.status;
  const liveLink = isOneCommunity ? project.links?.publicSite : null;
  const baseProjectLinks = Object.entries(project.links || {}).map(([label, href]) => ({ label, href }));
  const hasChurchAppLink = baseProjectLinks.some(({ href }) => href === churchAppUrl);
  const projectLinks = [
    ...baseProjectLinks,
    ...(showChurchAppDemo && !hasChurchAppLink ? [{ label: "Church App Live Link", href: churchAppUrl }] : []),
  ];

  return (
    <section className="h-[calc(100vh-4rem)] overflow-hidden bg-slate-50">
      <div className="grid h-full w-full lg:grid-cols-[320px_minmax(0,1fr)]">
        <ProjectMenu activeSlug={project.slug} />

        <main className="min-w-0 overflow-y-auto py-10 lg:py-12">
          <Container>
            <article>
              <header className="relative rounded-[2rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-slate-50 p-8 pb-24 shadow-xl shadow-slate-200/70 sm:p-10 sm:pb-24">
                <h1 className={heroTitleClass}>{heroTitle}</h1>
                {showInProgressNotice && (
                  <p className="mt-4 inline-flex rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-black text-sky-800 shadow-sm">
                    this project is in progress
                  </p>
                )}
                <p className={heroSubtitleClass}>{heroSubtitle}</p>
                <p className="mt-3 max-w-4xl text-base font-semibold leading-7 text-slate-700 sm:text-lg">{heroDeployment}</p>

                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-8 right-8 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-sky-200 transition hover:bg-sky-800"
                  >
                    Click: One Community Live!
                  </a>
                )}
              </header>

              <ProjectLinksSection showChurchAppDemo={showChurchAppDemo} projectLinks={projectLinks} />

              <div className="mt-8 grid gap-6">
                {sectionOrder.map((section) => (
                  <CaseStudySection key={section.key} project={project} section={section} />
                ))}
              </div>
            </article>
          </Container>
        </main>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
