import Button from "../common/Button";
import Container from "../common/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <Container className="py-8 sm:py-10">
        <div
          className="relative grid min-h-[330px] overflow-hidden rounded-[2rem] border border-slate-200 bg-cover bg-center shadow-xl shadow-slate-200/70 lg:min-h-[40vh] lg:grid-cols-[0.42fr_0.58fr]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.9) 42%, rgba(255,255,255,0.72) 68%, rgba(255,255,255,0.3) 100%), url(${import.meta.env.BASE_URL}assets/images/hero/infrastructure-engineering-hero-bg.png)`,
          }}
        >
          <div className="flex items-center justify-center p-6 sm:p-8">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-slate-300/80 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/profile/mbimunyui-emmanuel-profile.jpg`}
                alt="Mbimunyui Emmanuel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex flex-col justify-center px-6 pb-20 pt-2 sm:px-10 lg:px-12 lg:py-10">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Mbimunyui Emmanuel, RN, MSIT
            </h1>
            <p className="mt-4 text-lg font-bold leading-7 text-sky-800 sm:text-2xl">
              DevOps Engineer | Health IT | FHIR Interoperability | EHR Integration Specialist
            </p>
            <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-slate-700 sm:text-xl">
              Bridging DevOps, cloud infrastructure, healthcare systems, clinical workflows, and interoperability.
            </p>

            <div className="absolute bottom-6 right-6">
              <Button to="/resume" className="px-6 py-3">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
