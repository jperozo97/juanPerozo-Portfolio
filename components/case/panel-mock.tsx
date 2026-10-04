// Illustrative lead panel UI with sample data. Stand-in until real screenshots exist.
const rows = [
  { lead: "Lead name", source: "Contact form", status: "New" },
  { lead: "Lead name", source: "Manual entry", status: "Landing ready" },
  { lead: "Lead name", source: "Contact form", status: "Landing ready" },
] as const;

export function PanelMock() {
  return (
    <div
      role="img"
      aria-label="Illustration of the lead panel: a list of leads with source, status and landing page actions"
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
            <span className="flex-[2]">Lead</span>
            <span className="flex-[2]">Source</span>
            <span className="flex-[2]">Status</span>
            <span className="flex-1">Landing</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-4 rounded-[10px] bg-bg px-3.5 py-3 text-[15px]">
              <span className="flex-[2] font-semibold">{r.lead}</span>
              <span className="flex-[2] text-secondary">{r.source}</span>
              <span className="flex-[2]">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[13px] font-semibold ${
                    r.status === "New" ? "bg-accent/15 text-accent" : "bg-success/15 text-success"
                  }`}
                >
                  {r.status}
                </span>
              </span>
              <span className="flex-1 font-semibold text-accent">
                {r.status === "New" ? "Generate" : "View"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
