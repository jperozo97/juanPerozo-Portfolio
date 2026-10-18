import { Unbounded } from "next/font/google";
import type { Locale } from "@/content/i18n";
import { ui } from "@/content/ui";

const unbounded = Unbounded({ subsets: ["latin"], weight: "600", display: "swap" });

// Illustration of the Matica Estudio client app, drawn with the studio's own identity
// (cream, green for the brand, mango only for actions). Sample data only.
// Fixed colors on purpose: it depicts another product, so it ignores the site theme.
export function MaticaMock({ locale }: { locale: Locale }) {
  const t = ui[locale].case.maticaMock;

  return (
    <div
      role="img"
      aria-label={t.label}
      className="overflow-hidden rounded-2xl border border-line bg-[#FFFCF7] text-[#1A1A17]"
    >
      <div aria-hidden className="flex items-center justify-between border-b border-[#1A1A17]/10 px-5 py-3.5">
        <span className={`${unbounded.className} text-[15px] tracking-[-0.02em]`}>matica</span>
        <span className="rounded-full bg-[#8FD9B2] px-2.5 py-0.5 text-[12px] font-semibold">Pro</span>
      </div>
      <div aria-hidden className="flex flex-col gap-3 p-5 text-[14px] sm:p-6">
        <p className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-[#1A1A17] px-4 py-2.5 text-[#FFFCF7]">
          {t.request}
        </p>
        <p className="max-w-[78%] rounded-2xl rounded-bl-md bg-[#8FD9B2]/45 px-4 py-2.5">{t.assistant}</p>
        <div className="mt-2 rounded-xl border border-[#1A1A17]/10 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="grid aspect-square w-14 shrink-0 grid-cols-3 gap-0.5 overflow-hidden rounded-lg">
              {["#8FD9B2", "#FFAE00", "#1A1A17", "#FFAE00", "#8FD9B2", "#F3EEE4"].map((c, i) => (
                <span key={i} style={{ background: c }} />
              ))}
            </div>
            <div className="min-w-0">
              <p className="font-semibold">{t.piece}</p>
              <p className="mt-1 inline-block rounded-full bg-[#8FD9B2] px-2.5 py-0.5 text-[12px] font-semibold">
                {t.delivered}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#1A1A17]/20 px-3.5 py-1.5 text-[13px] font-semibold">
              {t.changes}
            </span>
            <span className="rounded-full bg-[#FFAE00] px-3.5 py-1.5 text-[13px] font-semibold text-[#1A1A17]">
              {t.approve}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
