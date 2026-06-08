import { imagePath } from "../../utils/imagePath";

function ScreenshotGallery({ screenshots = [] }) {
  if (!screenshots.length) return null;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {screenshots.map((screenshot) => (
        <figure key={screenshot.src} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
          <div className="aspect-video bg-slate-950">
            <img src={imagePath(screenshot.src)} alt={screenshot.title} className="h-full w-full object-cover" />
          </div>
          <figcaption className="p-5">
            <p className="font-semibold text-white">{screenshot.title}</p>
            <p className="mt-2 text-sm text-slate-400">{screenshot.description}</p>
            <p className="mt-3 text-xs text-slate-600">{screenshot.src}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ScreenshotGallery;
