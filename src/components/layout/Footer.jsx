import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>{new Date().getFullYear()} Mbimunyui Emmanuel. DevOps, Cloud, Health IT, FHIR, and EHR integration portfolio.</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}

export default Footer;
