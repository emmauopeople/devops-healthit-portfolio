import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>{new Date().getFullYear()} Mbimunyui Emmanuel. Built with React, Vite, and Tailwind CSS.</p>
        <p>Portfolio focused on real-world DevOps, cloud, monitoring, and Health IT systems.</p>
      </Container>
    </footer>
  );
}

export default Footer;
