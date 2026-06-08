function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export default Card;
