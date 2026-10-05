"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MotionBlurCanvas = dynamic(() => import("./motion-blur-canvas"), { ssr: false });

// The live effect only runs where it adds something: a mouse to move, motion allowed,
// and enough power. Everywhere else the pre-rendered still behind it is the background.
function canRunWebGL() {
  if (!window.matchMedia("(pointer: fine)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const nav = navigator as Navigator & { deviceMemory?: number };
  if ((nav.hardwareConcurrency ?? 8) <= 2) return false;
  if ((nav.deviceMemory ?? 8) <= 2) return false;
  return true;
}

export function HeroBackground({ photo }: { photo?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Client-only capability check; runs once after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(canRunWebGL());
  }, []);

  return enabled ? <MotionBlurCanvas photo={photo} /> : null;
}
