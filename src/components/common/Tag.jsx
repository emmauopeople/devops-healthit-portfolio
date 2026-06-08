function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
      {children}
    </span>
  );
}

export default Tag;
