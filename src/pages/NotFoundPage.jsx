import { Link } from "react-router-dom";
import Container from "../components/common/Container";

function NotFoundPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">404</p>
          <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
          <p className="mt-4 text-slate-300">The page you requested does not exist.</p>
          <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200">
            Go back home
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default NotFoundPage;
