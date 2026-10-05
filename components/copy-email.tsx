"use client";

import { useState } from "react";

// Copies the email address; the mailto link stays the primary action.
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is still visible to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-[15px] font-semibold transition-[color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent active:scale-[0.98]"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
