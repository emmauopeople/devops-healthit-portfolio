import { skillGroups } from "../../data/skills";
import Card from "../common/Card";
import Container from "../common/Container";

function SkillsSummary() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <div className="mb-10 flex items-center gap-5">
          <h2 className="whitespace-nowrap text-2xl font-black uppercase tracking-[0.25em] text-slate-950 sm:text-3xl">
            Technical Skills
          </h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-sky-100">
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

        <div className="mt-12 h-px w-full bg-slate-200" />
      </Container>
    </section>
  );
}

export default SkillsSummary;
