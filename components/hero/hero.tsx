import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { site } from "@/content/site";
import { HeroBackground } from "./hero-background";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", display: "swap" });

// Hero v1, ported from reference/hero/hero-motion-blur.html.
// Text is server-rendered so the heading (LCP) never waits for the canvas.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate mx-3 overflow-hidden rounded-[28px] text-white sm:mx-5"
      style={{
        // Same palette as the procedural scene: shown before and instead of WebGL.
        background:
          "radial-gradient(60% 60% at 62% 45%, #E9893B 0%, rgba(233,137,59,0) 70%), linear-gradient(100deg, #2F6C80 0%, #5D95A8 38%, #B58FA0 72%, #8E5C6B 100%)",
      }}
    >
      <div className="relative h-[min(calc(100svh-120px),820px)] min-h-[560px]">
        <HeroBackground photo={site.heroPhoto} />

        {/* Keeps white text readable over bright areas of the scene. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.28)_100%)]" />

        <p
          aria-hidden
          className="hero-word pointer-events-none absolute right-0 -bottom-[0.07em] left-[3vw] m-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.14)_100%)] bg-clip-text text-[clamp(120px,25vw,520px)] leading-[0.82] font-semibold tracking-[-0.065em] whitespace-nowrap text-transparent select-none"
        >
          Perozo
        </p>

        <h1
          id="hero-title"
          className={`${serif.className} hero-rise absolute top-10 left-6 m-0 text-[clamp(52px,14vw,76px)] leading-[0.94] font-normal tracking-[-0.015em] sm:left-10 md:top-1/2 md:right-[6vw] md:left-auto md:-translate-y-[38%] md:text-right md:text-[clamp(56px,6.6vw,108px)]`}
        >
          <span className="block">Product</span>
          <span className="block">Designer</span>
          <span className="block text-[#FFD2AE]">&amp; builder</span>
        </h1>

        <div className="hero-fade absolute bottom-[32%] left-6 max-w-[360px] sm:left-10 md:bottom-[30%] md:left-[6vw]">
          <p className="text-[16px] leading-[1.5] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:text-[17px]">
            {site.statement} Landing pages, admin panels and MVPs, built with Claude Code.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Link
              href="/work/"
              className="inline-flex items-center rounded-full bg-white px-[22px] py-3 text-[15px] font-semibold text-[#111111] transition-opacity hover:opacity-90 focus-visible:outline-white"
            >
              See my work
            </Link>
            <Link href="/about/" className="text-[15px] font-medium hover:underline focus-visible:outline-white">
              About me →
            </Link>
          </div>
        </div>


        <p className="absolute right-6 bottom-5 hidden text-sm [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] md:block">
          Move your cursor to smear the light.
        </p>
      </div>
    </section>
  );
}
