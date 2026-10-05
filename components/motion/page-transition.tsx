import { ViewTransition, type ReactNode } from "react";

// Wraps a page so route changes fade and lift between pages.
// Lives in each page (not the layout), because layouts persist across navigations.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
