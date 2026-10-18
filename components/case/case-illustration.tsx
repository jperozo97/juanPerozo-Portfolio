import { MaticaMock } from "@/components/case/matica-mock";
import { PanelMock } from "@/components/case/panel-mock";
import type { IllustrationKind } from "@/content/cases";
import type { Locale } from "@/content/i18n";

// Drawn stand-in for a case cover, used until a real screenshot exists.
export function CaseIllustration({ kind, locale }: { kind: IllustrationKind; locale: Locale }) {
  return kind === "matica-app" ? <MaticaMock locale={locale} /> : <PanelMock locale={locale} />;
}
