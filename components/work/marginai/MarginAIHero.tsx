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
            className="type-meta text-light/65 transition-colors hover:text-light"
          >
            ← Selected Systems
          </Link>
          <p className="type-meta text-light/55">
            Case / {marginaiMeta.caseNumber}
          </p>
        </div>

        <div className="mt-auto max-w-4xl pt-16 md:pt-24">
          <p className="hero-rise type-meta text-light/60">
            Case Study {marginaiMeta.caseNumber} — {marginaiMeta.subtitle}
          </p>

          <h1
            id="marginai-case-heading"
            className="hero-rise hero-rise-delay-1 type-case-title mt-5 text-light"
          >
            {marginaiMeta.title}
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-4 text-[clamp(1.125rem,2.5vw,1.75rem)] font-medium leading-[1.15] tracking-[-0.02em] text-balance text-light/90">
            LLM Inference
            <br />
            Optimization Infrastructure
          </p>

          <p className="hero-rise hero-rise-delay-3 type-prose-lg mt-8 text-base text-light/75 md:text-lg">
            {marginaiMeta.statement}
          </p>

          <dl className="hero-rise hero-rise-delay-4 type-meta mt-8 flex flex-wrap gap-x-8 gap-y-3 text-light/50">
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
            {marginaiMeta.scopeNote}
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
