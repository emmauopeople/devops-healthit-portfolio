import Button from "../common/Button";

const credibilityBadges = ["RN background", "MSIT", "CKA", "Kubernetes", "Health IT / FHIR"];

function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="absolute inset-x-0 top-0 h-32 bg-white/50" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[520px] w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center lg:px-8 lg:py-16">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[235px] overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-300/80 sm:w-[275px] lg:w-[300px]">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-sky-100" aria-hidden="true" />
            <div className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-emerald-100" aria-hidden="true" />
            <img
              src={`${import.meta.env.BASE_URL}assets/images/profile/mbimunyui-emmanuel-profile.jpg`}
              alt="Mbimunyui Emmanuel"
              className="relative h-[330px] w-full rounded-[1.5rem] object-cover object-top sm:h-[380px] lg:h-[420px]"
            />
          </div>
        </div>

        <div className="min-w-0 text-center lg:text-left">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-700">DevOps · SRE · Health IT</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Mbimunyui Emmanuel, RN, MSIT
          </h1>

          <p className="mt-5 max-w-3xl text-xl font-black leading-8 text-sky-800 sm:text-2xl">
            DevOps Engineer | Site Reliability Engineer | Health IT Systems
          </p>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-700 sm:text-xl">
            Building reliable cloud, Kubernetes, monitoring, and healthcare technology platforms that connect infrastructure engineering with real clinical workflow experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button to="/projects" variant="primary" className="px-6 py-3 text-white hover:text-white">
              View Featured Projects
            </Button>
            <Button to="/resume" variant="secondary" className="px-6 py-3">
              Download Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {credibilityBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;