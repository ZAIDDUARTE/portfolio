import Image from "next/image";
import Link from "next/link";
import { marginaiAssets, marginaiMeta } from "@/content/marginai";

export function MarginAIHero() {
  return (
    <section
      aria-labelledby="marginai-case-heading"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#12141a] text-light"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={marginaiAssets.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12141a]/85 via-[#12141a]/60 to-[#12141a]/95" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col pt-28 pb-10 md:pt-36">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Link
            href="/#work"
            data-cursor="back"
            className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
          >
            ← Selected Systems
          </Link>
          <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
            Case / {marginaiMeta.caseNumber}
          </p>
        </div>

        <div className="mt-auto max-w-4xl pt-16 md:pt-24">
          <p className="hero-rise text-[11px] font-medium uppercase tracking-[0.22em] text-light/60">
            Case Study {marginaiMeta.caseNumber} — {marginaiMeta.subtitle}
          </p>

          <p
            className="hero-rise hero-rise-delay-1 mt-5 inline-block border border-accent/50 bg-accent/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-accent"
            role="status"
          >
            {marginaiMeta.status}
          </p>

          <h1
            id="marginai-case-heading"
            className="hero-rise hero-rise-delay-1 mt-5 text-[clamp(3.5rem,12vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em]"
          >
            {marginaiMeta.title}
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-4 text-[clamp(1.25rem,3vw,2rem)] leading-[1.15] tracking-[-0.02em] text-light/90">
            LLM Inference
            <br />
            Optimization Infrastructure
          </p>

          <p className="hero-rise hero-rise-delay-3 mt-8 max-w-xl text-base leading-relaxed text-light/75 md:text-lg">
            {marginaiMeta.statement}
          </p>

          <p className="hero-rise hero-rise-delay-4 mt-6 max-w-xl border-l-2 border-accent/70 pl-4 text-sm font-medium leading-relaxed text-light/80">
            {marginaiMeta.evidenceNotice}
          </p>

          <dl className="hero-rise hero-rise-delay-4 mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-light/50">
            <div className="flex gap-2">
              <dt>Role /</dt>
              <dd className="text-light/85">{marginaiMeta.role}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Domain /</dt>
              <dd className="text-light/85">{marginaiMeta.domain}</dd>
            </div>
          </dl>

          <p className="hero-rise hero-rise-delay-5 mt-6 max-w-2xl text-sm leading-relaxed text-light/55">
            {marginaiMeta.disclaimer}
          </p>
        </div>

        <div className="mt-16 flex items-end justify-between gap-4 md:mt-20">
          <a
            href="#cost"
            data-cursor="explore"
            data-cursor-label="SCROLL"
            className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
          >
            ↓ Explore the System
          </a>
          <p className="text-[10px] uppercase tracking-[0.16em] text-light/40">
            Fig. 01 — Request path
          </p>
        </div>
      </div>
    </section>
  );
}
