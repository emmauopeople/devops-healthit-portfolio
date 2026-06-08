import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
];

function Header() {
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? "bg-emerald-400/10 text-emerald-200" : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-slate-950">ME</div>
          <div>
            <p className="text-sm font-bold text-white">Mbimunyui Emmanuel</p>
            <p className="text-xs text-slate-400">DevOps + Health IT</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/projects/one-community-docker-compose" variant="secondary">
            View Case Study
          </Button>
        </div>

        <nav className="flex items-center gap-1 md:hidden">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
