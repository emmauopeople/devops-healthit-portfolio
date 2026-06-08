import { Link } from "react-router-dom";

const variants = {
  primary: "bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-950/30",
  secondary: "border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200",
  ghost: "text-slate-300 hover:text-white hover:bg-slate-800/80",
};

function Button({ children, to, href, variant = "primary", className = "" }) {
  const styles = `inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return <button className={styles}>{children}</button>;
}

export default Button;
