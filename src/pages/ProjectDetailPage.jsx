import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import ProjectMenu from "../components/projects/ProjectMenu";
import { getProjectBySlug, projects } from "../data/projects";

const sectionOrder = [
  { key: "problem", title: "Problem", type: "text" },
  { key: "solution", title: "Solution", type: "text" },
  { key: "architecture", title: "Architecture", type: "list", imageTitle: "Architecture Diagram" },
  { key: "security", title: "Security", type: "list" },
  { key: "implementation", title: "Implementation", type: "list" },
  { key: "deployment", title: "Deployment", type: "list" },
  { key: "monitoring", title: "Monitoring and Reliability", type: "list", imageTitle: "Monitoring Evidence" },
  { key: "troubleshooting", title: "Troubleshooting Story", type: "text" },
  { key: "results", title: "Results", type: "list" },
  { key: "lessons", title: "Lessons Learned", type: "list" },
];

const linkClass = "font-black !text-blue-600 underline underline-offset-4 decoration-blue-600 hover:!text-blue-800 hover:decoration-blue-800";
const inProgressNotice = "this project is in progress, these are place holders";

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
  if (
    sectionKey !== "architecture" ||
    project.slug === "church-management-kubernetes" ||
    !project.stack?.length
  ) {
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

  if (!content && !images && !detailItems?.length) return null;

  return (
    <section id={section.key} className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
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
  const heroTitle = isOneCommunity ? "One Community" : project.name;
  const heroSubtitle = isOneCommunity ? "Skill visibility and data platform." : project.summary;
  const heroDeployment = isOneCommunity ? "Deployed with Docker Compose." : project.status;
  const liveLink = isOneCommunity ? project.links?.publicSite : null;

  return (
    <section className="h-[calc(100vh-4rem)] overflow-hidden bg-slate-50">
      <div className="grid h-full w-full lg:grid-cols-[320px_minmax(0,1fr)]">
        <ProjectMenu activeSlug={project.slug} />

        <main className="min-w-0 overflow-y-auto py-10 lg:py-12">
          <Container>
            <article>
              <header className="relative rounded-[2rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-slate-50 p-8 pb-24 shadow-xl shadow-slate-200/70 sm:p-10 sm:pb-24">
                <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{heroTitle}</h1>
                {!isOneCommunity && (
                  <p className="mt-4 inline-flex rounded-xl border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-yellow-900 shadow-sm">
                    {inProgressNotice}
                  </p>
                )}
                <p className="mt-4 max-w-4xl text-xl font-bold leading-8 text-sky-800 sm:text-2xl">{heroSubtitle}</p>
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

              <div className="mt-8 grid gap-6">
                {sectionOrder.map((section) => (
                  <CaseStudySection key={section.key} project={project} section={section} />
                ))}
              </div>

              {project.links && (
                <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                  <h2 className="text-2xl font-black text-slate-950">Project Links</h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {Object.entries(project.links).map(([label, href]) => (
                      <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
                        {label}
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </Container>
        </main>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
