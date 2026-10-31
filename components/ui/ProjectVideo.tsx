"use client";

import { useMemo, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export type ProjectVideoSource = {
  /** Local path under /public, e.g. /videos/atlas/atlas-demo.mp4 */
  src?: string | null;
  /** Full YouTube watch or share URL */
  youtubeUrl?: string | null;
  /** Full Vimeo URL */
  vimeoUrl?: string | null;
  /** Poster / thumbnail for local video or as iframe title context */
  poster?: string | null;
  title: string;
  /** Optional figcaption left label */
  caption?: string;
  /** Optional figcaption right hint */
  hint?: string;
  className?: string;
  /** Prefer muted autoplay-style local preview controls */
  mutedPreview?: boolean;
};

function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "") || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

function extractVimeoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("vimeo.com")) return null;
    const parts = parsed.pathname.split("/").filter(Boolean);
    const id = parts.find((part) => /^\d+$/.test(part));
    return id ?? null;
  } catch {
    return null;
  }
}

/**
 * Reusable project media: local MP4, YouTube, or Vimeo.
 * Renders nothing when no valid source is configured (avoids broken embeds).
 */
export function ProjectVideo({
  src,
  youtubeUrl,
  vimeoUrl,
  poster,
  title,
  caption = "Product demonstration",
  hint,
  className = "",
  mutedPreview = true,
}: ProjectVideoSource) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const youtubeId = useMemo(
    () => (youtubeUrl ? extractYouTubeId(youtubeUrl) : null),
    [youtubeUrl],
  );
  const vimeoId = useMemo(
    () => (vimeoUrl ? extractVimeoId(vimeoUrl) : null),
    [vimeoUrl],
  );

  const hasLocal = Boolean(src);
  const hasYouTube = Boolean(youtubeId);
  const hasVimeo = Boolean(vimeoId);

  if (!hasLocal && !hasYouTube && !hasVimeo) {
    return null;
  }

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
    <figure className={className}>
      <div className="relative aspect-video w-full overflow-hidden bg-dark">
        {hasLocal ? (
          <>
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={poster ?? undefined}
              preload="metadata"
              playsInline
              muted={mutedPreview}
              loop={mutedPreview}
              controls={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label={title}
            >
              <source src={src!} type="video/mp4" />
            </video>
            {!playing ? (
              <button
                type="button"
                onClick={toggle}
                data-cursor="play"
                className="tap-active absolute inset-0 flex items-center justify-center bg-dark/35 transition-colors hover:bg-dark/45"
                aria-label={`Play ${title}`}
              >
                <span className="border border-light/40 bg-dark/60 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-light backdrop-blur-sm">
                  Play Demo
                </span>
              </button>
            ) : null}
          </>
        ) : null}

        {hasYouTube && !hasLocal ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : null}

        {hasVimeo && !hasLocal && !hasYouTube ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://player.vimeo.com/video/${vimeoId}`}
            title={title}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : null}
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-muted">
        <span>{caption}</span>
        <span>
          {hint ??
            (hasLocal
              ? "Muted preview · Controls after play"
              : hasYouTube
                ? "YouTube embed"
                : "Vimeo embed")}
        </span>
      </figcaption>
    </figure>
  );
}
