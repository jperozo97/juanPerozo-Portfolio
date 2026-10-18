import { CaseIllustration } from "@/components/case/case-illustration";
import type { CaseImage, IllustrationKind } from "@/content/cases";
import type { Locale } from "@/content/i18n";

// Preview shown beside the work list: the cover screenshot when there is one,
// otherwise the case's drawn illustration.
export function WorkPreview({
  cover,
  illustration,
  locale,
}: {
  cover?: CaseImage;
  illustration?: IllustrationKind;
  locale: Locale;
}) {
  if (cover?.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={cover.src} alt="" className="w-full rounded-2xl border border-line" />;
  }
  if (illustration) return <CaseIllustration kind={illustration} locale={locale} />;
  return null;
}
