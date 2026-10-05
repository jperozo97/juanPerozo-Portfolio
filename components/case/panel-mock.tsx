import type { Locale } from "@/content/i18n";
import { ui } from "@/content/ui";

// Illustrative lead panel UI with sample data. Stand-in until real screenshots exist.
export function PanelMock({ locale }: { locale: Locale }) {
  const t = ui[locale].case.mock;
  const rows = [
    { source: t.form, ready: false },
    { source: t.manual, ready: true },
    { source: t.form, ready: true },
  ];

  return (
    <div
      role="img"
      aria-label={ui[locale].case.illustrationLabel}
      className="overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="flex gap-1.5 border-b border-line bg-bg px-[18px] py-3.5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-2.5 rounded-full bg-line" />
        ))}
      </div>
      <div className="overflow-x-auto p-4 sm:p-6" aria-hidden>
        <div className="flex min-w-[400px] flex-col gap-2.5">
          <div className="flex gap-4 px-3.5 text-[13px] font-semibold text-muted">
            <span className="flex-[2]">{t.lead}</span>
            <span className="flex-[2]">{t.source}</span>
            <span className="flex-[2]">{t.status}</span>
            <span className="flex-1">{t.landing}</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-4 rounded-[10px] bg-bg px-3.5 py-3 text-[15px]">
              <span className="flex-[2] font-semibold">{t.leadName}</span>
              <span className="flex-[2] text-secondary">{r.source}</span>
              <span className="flex-[2]">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[13px] font-semibold whitespace-nowrap ${
                    r.ready ? "bg-success/15 text-success" : "bg-accent/15 text-accent"
                  }`}
                >
                  {r.ready ? t.ready : t.fresh}
                </span>
              </span>
              <span className="flex-1 font-semibold text-accent">{r.ready ? t.view : t.generate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
