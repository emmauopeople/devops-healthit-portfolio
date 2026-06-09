import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/resume" },
];

function Header() {
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-100 hover:text-sky-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-lg font-black text-white">ME</div>
          <div>
            <p className="text-sm font-black text-slate-950">Mbimunyui Emmanuel, MSIT</p>
            <p className="text-xs text-slate-500">DevOps | Health IT | FHIR | EHR Integration</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/resume" variant="secondary">
            Hire Me
          </Button>
        </div>

        <nav className="flex items-center gap-1 lg:hidden">
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
