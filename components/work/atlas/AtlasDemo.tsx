"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { atlasAssets } from "@/content/atlas";
import { prefersReducedMotion } from "@/lib/motion";

export function AtlasDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (prefersReducedMotion()) {
        video.loop = false;
      }
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          11 / Demo
        </p>

        <h2
          id="demo-heading"
          className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Atlas in motion
        </h2>

        <figure className="mt-12 md:mt-16">
          <div className="relative aspect-video w-full overflow-hidden bg-dark">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={atlasAssets.demoPoster}
              preload="metadata"
              playsInline
              muted
              loop
              controls={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              <source src={atlasAssets.demoVideo} type="video/mp4" />
            </video>

            {!playing ? (
              <button
                type="button"
                onClick={toggle}
                data-cursor="play"
                className="tap-active absolute inset-0 flex items-center justify-center bg-dark/35 transition-colors hover:bg-dark/45"
                aria-label="Play ATLAS demo"
              >
                <span className="border border-light/40 bg-dark/60 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-light backdrop-blur-sm">
                  Play Demo
                </span>
              </button>
            ) : null}
          </div>
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-muted">
            <span>Fig. 05 — Product demonstration</span>
            <span>Muted preview · Controls after play</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
