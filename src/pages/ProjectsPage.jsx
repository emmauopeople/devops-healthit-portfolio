import ProjectCard from "../components/projects/ProjectCard";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Case studies organized by real-world engineering problems"
          description="Each project is structured to explain the problem, solution, architecture, implementation, deployment, monitoring, troubleshooting, results, and lessons learned."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsPage;
