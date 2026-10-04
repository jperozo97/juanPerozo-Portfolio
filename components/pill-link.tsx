import Link from "next/link";
import type { ComponentProps } from "react";

// Primary call to action: black pill with white text (inverted in dark mode).
export function PillLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex items-center rounded-full bg-pill px-[22px] py-3 text-[15px] font-semibold text-pill-text transition-opacity hover:opacity-85 ${className}`}
      {...props}
    />
  );
}
