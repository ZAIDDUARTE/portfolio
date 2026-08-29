"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { atlasAssets, atlasMeta } from "@/content/atlas";
import { prefersReducedMotion } from "@/lib/motion";

export function AtlasHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion()) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    void video.play().catch(() => {
      /* Autoplay may be blocked; poster remains visible underneath. */
    });
  }, []);

  return (
    <section
      aria-labelledby="atlas-case-heading"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-dark text-light"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {/* Poster always present for LCP + reduced-motion fallback */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={atlasAssets.heroPoster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          className="atlas-hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={atlasAssets.heroPoster}
        >
          <source src={atlasAssets.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/55 to-dark/90" />
        <div className="absolute inset-0 bg-dark/25" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col pt-28 pb-10 md:pt-36">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Link
            href="/#work"
            data-cursor="back"
            className="text-[11px] uppercase tracking-[0.18em] text-light/70 transition-colors hover:text-light"
          >
            ← Selected Systems
          </Link>
          <p className="text-[11px] uppercase tracking-[0.18em] text-light/60">
            Case / {atlasMeta.caseNumber}
          </p>
        </div>

        <div className="mt-auto max-w-4xl pt-16 md:pt-24">
          <p className="hero-rise text-[11px] font-medium uppercase tracking-[0.22em] text-light/65">
            {atlasMeta.subtitle}
          </p>

          <h1
            id="atlas-case-heading"
            className="hero-rise hero-rise-delay-1 mt-5 text-[clamp(3.5rem,12vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em]"
          >
            {atlasMeta.title}
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-4 text-[clamp(1.25rem,3vw,2rem)] leading-[1.15] tracking-[-0.02em] text-light/90">
            Environmental Risk
            <br />
            Intelligence Platform
          </p>

          <p className="hero-rise hero-rise-delay-3 mt-8 max-w-xl text-base leading-relaxed text-light/75 md:text-lg">
            {atlasMeta.statement}
          </p>

          <dl className="hero-rise hero-rise-delay-4 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-light/55">
            <div className="flex gap-2">
              <dt>Role /</dt>
              <dd className="text-light/85">{atlasMeta.role}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Domain /</dt>
              <dd className="text-light/85">{atlasMeta.domain}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 flex items-end justify-between gap-4 md:mt-20">
          <a
            href="#problem"
            data-cursor="explore"
            data-cursor-label="SCROLL"
            className="text-[11px] uppercase tracking-[0.18em] text-light/70 transition-colors hover:text-light"
          >
            ↓ Explore the System
          </a>
          <p className="text-[10px] uppercase tracking-[0.16em] text-light/45">
            Fig. 01 — Opening field
          </p>
        </div>
      </div>
    </section>
  );
}
