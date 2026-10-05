"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MotionBlurCanvas = dynamic(() => import("./motion-blur-canvas"), { ssr: false });

// Skip WebGL on low-end devices; the CSS gradient stays as the background.
function canRunWebGL() {
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
