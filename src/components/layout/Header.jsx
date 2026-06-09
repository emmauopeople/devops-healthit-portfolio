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
    `px-3 py-2 text-sm font-semibold transition ${
      isActive ? "text-sky-700" : "text-slate-700 hover:text-sky-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-100">
      <Container className="flex h-16 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-700 text-sm font-black text-white">ME</div>
          <span className="text-base font-black text-slate-950">Mbimunyui Emmanuel</span>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button to="/resume" variant="primary" className="shrink-0 px-4 py-2">
          Hire Me
        </Button>
      </Container>
    </header>
  );
}

export default Header;
