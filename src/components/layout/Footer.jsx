import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="text-sm text-slate-600">
        <p>{new Date().getFullYear()} Mbimunyui Emmanuel. DevOps, Cloud, Health IT, FHIR, and EHR integration portfolio.</p>
      </Container>
    </footer>
  );
}

export default Footer;
