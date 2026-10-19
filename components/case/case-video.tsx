"use client";

import { useEffect, useRef, useState } from "react";

// Muted product clip (an .mp4 with a .webm sibling, tried first) that plays
// only while on screen. With reduced motion it stays on its poster until the
// visitor presses play. The button also lets anyone pause it (moving content
// longer than 5 seconds needs a pause control).
export function CaseVideo({
  src,
  poster,
  label,
  labels,
}: {
  src: string;
  poster?: string;
  label: string;
  labels: { play: string; pause: string };
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);
  // Posters load lazily too, so they don't compete with the page's first paint.
  const [near, setNear] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) pausedByUser.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByUser.current) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        nearObserver.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(video);
    nearObserver.observe(video);
    return () => {
      observer.disconnect();
      nearObserver.disconnect();
    };
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  }

  return (
    <div className="relative">
      <video
        ref={ref}
        poster={near ? poster : undefined}
        aria-label={label}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="block aspect-video w-full rounded-2xl border border-line bg-surface object-cover"
      >
        <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-[#111111]/75 text-white transition-colors hover:bg-[#111111]"
      >
        <span className="sr-only">{playing ? labels.pause : labels.play}</span>
        {playing ? (
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
            <path d="M4 2.5v11a.75.75 0 0 0 1.13.65l9-5.5a.75.75 0 0 0 0-1.3l-9-5.5A.75.75 0 0 0 4 2.5Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
