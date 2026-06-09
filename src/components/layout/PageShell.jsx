import Header from "./Header";
import Footer from "./Footer";

function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PageShell;
