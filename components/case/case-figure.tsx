import type { CaseImage } from "@/content/cases";

// Screenshot with caption. Without a src it renders a labelled placeholder,
// so missing assets stay visible (and caught by the placeholder check).
export function CaseFigure({ image, label }: { image: CaseImage; label?: string }) {
  return (
    <figure className="min-w-0">
      {image.src ? (
        // Static export: next/image optimization needs a server, so a plain img is used.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full rounded-2xl border border-line"
        />
      ) : (
        <div className="grid aspect-[16/10] place-items-center rounded-2xl border border-dashed border-line bg-surface p-6 text-center text-sm text-muted">
          [Screenshot needed: {image.alt}]
        </div>
      )}
      <figcaption className="mt-3 text-sm text-muted">
        {label && <span className="font-semibold text-text">{label} · </span>}
        {image.caption}
      </figcaption>
    </figure>
  );
}
