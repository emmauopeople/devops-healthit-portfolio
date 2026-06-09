function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/70 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export default Card;
