import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/resume" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-semibold transition ${
      isActive ? "text-sky-700" : "text-slate-700 hover:text-sky-700"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-bold transition ${
      isActive ? "bg-sky-50 text-sky-700" : "text-slate-800 hover:bg-sky-50 hover:text-sky-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-100">
      <div className="flex h-16 w-full items-center justify-between px-6 sm:px-10 lg:px-16">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-sm font-black text-white">ME</div>
          <span className="truncate text-base font-black text-slate-950">Mbimunyui Emmanuel</span>
        </NavLink>

        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/resume" variant="primary" className="hire-me-wave hidden shrink-0 px-5 py-2 text-white hover:text-white md:inline-flex">
            <span className="relative z-10 text-white">Hire Me</span>
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-slate-100 px-6 py-3 shadow-lg shadow-slate-200/50 md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
