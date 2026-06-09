import Button from "../common/Button";

function Hero() {
  return (
    <section className="w-full overflow-hidden border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50">
      <div className="grid min-h-[360px] w-full lg:min-h-[40vh] lg:grid-cols-[38%_62%]">
        <div className="flex items-stretch justify-center bg-white/35 px-6 pt-8 lg:justify-end lg:px-10 lg:pt-10">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/profile/mbimunyui-emmanuel-profile.jpg`}
            alt="Mbimunyui Emmanuel"
            className="h-full max-h-[420px] w-auto object-contain object-bottom"
          />
        </div>

        <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-16">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Mbimunyui Emmanuel, RN, MSIT
          </h1>

          <p className="mt-4 max-w-5xl text-lg font-bold leading-7 text-sky-800 sm:text-2xl">
            DevOps Engineer | Health IT | FHIR Interoperability | EHR Integration Specialist
          </p>

          <p className="mt-5 max-w-4xl text-base font-medium leading-7 text-slate-700 sm:text-xl">
            Bridging DevOps, cloud infrastructure, healthcare systems, clinical workflows, and interoperability.
          </p>

          <div className="absolute bottom-8 right-8">
            <Button to="/resume" className="px-7 py-3">
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
