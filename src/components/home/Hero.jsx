function Hero() {
  return (
    <section className="w-full overflow-hidden border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50">
      <div className="grid min-h-[340px] w-full lg:min-h-[38vh] lg:grid-cols-[minmax(3rem,1fr)_270px_minmax(3rem,1fr)_minmax(620px,2fr)_minmax(3rem,1fr)]">
        <div className="hidden lg:block" />

        <div className="flex h-full items-stretch justify-center px-6 py-8 lg:px-0 lg:py-0">
          <div className="h-full max-h-[420px] w-[230px] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-slate-300/80 lg:max-h-none lg:w-full">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/profile/mbimunyui-emmanuel-profile.jpg`}
              alt="Mbimunyui Emmanuel"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="hidden lg:block" />

        <div className="relative flex min-w-0 flex-col justify-center px-6 py-10 sm:px-10 lg:px-0">
          <h1 className="whitespace-nowrap text-[clamp(2rem,4vw,3.6rem)] font-black leading-tight tracking-tight text-slate-950">
            Mbimunyui Emmanuel, RN, MSIT
          </h1>

          <p className="mt-4 max-w-5xl text-lg font-bold leading-7 text-sky-800 sm:text-2xl">
            DevOps Engineer | Site Reliability Engineer | Health IT | FHIR Interoperability | EHR Integration Specialist
          </p>

          <p className="mt-5 max-w-4xl text-base font-medium leading-7 text-slate-700 sm:text-xl">
            Bridging DevOps, cloud infrastructure, healthcare systems, clinical workflows, and interoperability.
          </p>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}

export default Hero;
