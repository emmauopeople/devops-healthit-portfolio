import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { profile } from "../data/profile";
import { imagePath } from "../utils/imagePath";

function ResumePage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Resume"
          title="Resume and professional profile"
          description="Place your resume PDF in public/assets/documents using the filename below. The download button is already wired to that path."
        />

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h1 className="text-3xl font-black text-white">{profile.name}</h1>
          <p className="mt-2 text-lg text-emerald-300">{profile.title}</p>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={imagePath(profile.links.resume)}>Download Resume</Button>
            <Button href={profile.links.github} variant="secondary">GitHub</Button>
            <Button to="/projects" variant="secondary">View Projects</Button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-400">
            Expected file path: public/assets/documents/mbimunyui-emmanuel-resume.pdf
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ResumePage;
