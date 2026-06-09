function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
      {children}
    </span>
  );
}

export default Tag;
