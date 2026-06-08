import { skillGroups } from "../../data/skills";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

function SkillsSummary() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Technical skills"
          title="Skills grouped by real engineering work"
          description="The portfolio presents skills by how they are used in production: deployment, backend systems, observability, security, and healthcare technology direction."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSummary;
