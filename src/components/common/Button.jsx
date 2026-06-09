import { Link } from "react-router-dom";

const variants = {
  primary: "bg-sky-700 text-white hover:bg-sky-800 shadow-lg shadow-sky-200/70",
  secondary: "border border-slate-300 bg-white text-slate-800 hover:border-sky-500 hover:text-sky-700",
  ghost: "text-slate-700 hover:text-sky-700 hover:bg-sky-50",
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
