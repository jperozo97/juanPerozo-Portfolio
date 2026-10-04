import { PanelMock } from "@/components/case/panel-mock";
import type { CaseImage } from "@/content/cases";

// Preview shown beside the work list. Falls back to the panel illustration
// or a labelled placeholder until real cover images exist.
export function WorkPreview({ cover, fallback }: { cover?: CaseImage; fallback: "panel" | "empty" }) {
  if (cover?.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={cover.src} alt="" className="w-full rounded-2xl border border-line" />;
  }
  if (fallback === "panel") return <PanelMock />;
  return (
    <div className="grid aspect-[16/10] place-items-center rounded-2xl border border-dashed border-line bg-surface text-sm text-muted">
      [Cover image]
    </div>
  );
}
