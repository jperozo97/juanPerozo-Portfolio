"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { WorkItem } from "@/content/work";

// Numbered list of work. On wide screens a preview beside the list swaps
// to the hovered or focused project.
export function WorkList({ items, previews }: { items: WorkItem[]; previews: ReactNode[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
      <ol className="border-t border-line">
        {items.map((item, i) => {
          const content = (
            <div className="grid gap-2 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2
                  className={`text-[28px] transition-colors sm:text-[32px] ${
                    item.href ? "group-hover:text-accent" : ""
                  }`}
                >
                  {item.title}
                  {item.href && <span aria-hidden> →</span>}
                </h2>
                <p className="mt-3 max-w-[620px] text-secondary">{item.summary}</p>
              </div>
              <span className="text-[15px] text-muted">{item.year}</span>
            </div>
          );

          return (
            <li
              key={item.title}
              className="border-b border-line"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              {item.href ? (
                <Link href={item.href} className="group block">
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:block" aria-hidden>
        <div className="sticky top-8">{previews[active]}</div>
      </div>
    </div>
  );
}
