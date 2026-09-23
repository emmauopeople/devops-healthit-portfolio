import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { profile } from "../data/profile";
import { imagePath } from "../utils/imagePath";

const contactItems = [
  { label: "Primary Email", value: "mbimunyui87@yahoo.com", href: "mailto:mbimunyui87@yahoo.com" },
  { label: "Secondary Email", value: "mbimunyui_gethub@yahoo.com", href: "mailto:mbimunyui_gethub@yahoo.com" },
  { label: "Phone", value: "405-551-1960", href: "tel:+14055511960" },
];

function ResumePage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Resume"
          title="Resume and professional profile"
          description="Contact information for resume requests, interviews, and professional opportunities."
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

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Contact</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm transition hover:border-emerald-300 hover:bg-slate-800"
                >
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{item.label}</span>
                  <span className="mt-2 block font-bold text-white">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ResumePage;
