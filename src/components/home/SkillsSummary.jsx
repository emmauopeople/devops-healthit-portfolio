import { skillGroups } from "../../data/skills";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

function SkillsSummary() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Technical skills"
          title="Technical skills"
          description="Grouped around infrastructure engineering, cloud platforms, backend systems, monitoring, and healthcare interoperability."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="hover:-translate-y-1 hover:border-sky-200 hover:shadow-sky-100 transition">
              <h3 className="text-lg font-black text-slate-950">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
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
