import Image from "next/image";
import Link from "next/link";
import { noesisAssets, noesisMeta } from "@/content/noesis";

export function NoesisHero() {
  return (
    <section
      aria-labelledby="noesis-case-heading"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#e8eef4] text-ink"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={noesisAssets.hero}
          alt="Atmospheric environmental context — abstract landscape for Noesis case study"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8eef4]/90 via-[#e8eef4]/55 to-canvas/95" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 50%), radial-gradient(circle at 80% 70%, color-mix(in srgb, #5a9fd4 10%, transparent) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col pt-28 pb-10 md:pt-36">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Link
            href="/#work"
            data-cursor="back"
            className="text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
          >
            ← Selected Systems
          </Link>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Case / {noesisMeta.caseNumber}
          </p>
        </div>

        <div className="mt-auto max-w-4xl pt-16 md:pt-24">
          <p className="hero-rise text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Case Study {noesisMeta.caseNumber} — {noesisMeta.subtitle}
          </p>

          <h1
            id="noesis-case-heading"
            className="hero-rise hero-rise-delay-1 mt-5 text-[clamp(3.5rem,12vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em]"
          >
            {noesisMeta.title}
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-4 text-[clamp(1.25rem,3vw,2rem)] leading-[1.15] tracking-[-0.02em] text-ink/90">
            Environmental Health
            <br />
            Intelligence Platform
          </p>

          <p className="hero-rise hero-rise-delay-3 mt-8 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
            {noesisMeta.statement}
          </p>

          <dl className="hero-rise hero-rise-delay-4 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-muted">
            <div className="flex gap-2">
              <dt>Role /</dt>
              <dd className="text-ink/85">{noesisMeta.role}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Domain /</dt>
              <dd className="text-ink/85">{noesisMeta.domain}</dd>
            </div>
          </dl>

          <p className="hero-rise hero-rise-delay-5 mt-8 max-w-2xl border-l-2 border-accent/60 pl-4 text-sm leading-relaxed text-muted">
            {noesisMeta.disclaimer}
          </p>
        </div>

        <div className="mt-16 flex items-end justify-between gap-4 md:mt-20">
          <a
            href="#missing-context"
            data-cursor="explore"
            data-cursor-label="SCROLL"
            className="text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
          >
            ↓ Explore the System
          </a>
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
            Fig. 01 — Atmospheric context
          </p>
        </div>
      </div>
    </section>
  );
}
