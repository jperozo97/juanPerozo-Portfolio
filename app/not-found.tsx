import { PageTransition } from "@/components/motion/page-transition";
import { PageIntro } from "@/components/page-intro";
import { PillLink } from "@/components/pill-link";

export default function NotFound() {
  return (
    <PageTransition>
    <PageIntro eyebrow="404" title="This page doesn't exist">
      <p>The link may be old or mistyped.</p>
      <div className="mt-10">
        <PillLink href="/">Back to home</PillLink>
      </div>
    </PageIntro>
    </PageTransition>
  );
}
