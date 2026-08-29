import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="section-pad mx-auto grid max-w-[1400px] grid-rows-[auto_1fr_auto] pb-10 pt-20 md:min-h-[calc(100svh-4rem)] md:pt-[clamp(4.5rem,27svh,14rem)]"
    >
      <div className="md:grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <p className="hero-rise text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            01 / Intro
          </p>

          <h1
            id="hero-heading"
            className="hero-rise hero-rise-delay-1 mt-5 text-[clamp(3rem,9vw,6.875rem)] font-medium leading-[0.95] tracking-[-0.03em] text-ink"
          >
            ZAID DUARTEE
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            CTO / Technical Lead
          </p>

          <p className="hero-rise hero-rise-delay-3 mt-10 max-w-4xl text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.12] tracking-[-0.02em] text-ink md:mt-[clamp(2rem,5svh,3rem)]">
            I turn complex technical ideas
            <br />
            <span className="font-serif tracking-[-0.02em]">
              into systems that can actually ship.
            </span>
          </p>

          <p className="hero-rise hero-rise-delay-4 mt-7 text-base tracking-wide text-muted md:text-lg">
            Product • Engineering • Data Systems
          </p>

          <div className="hero-rise hero-rise-delay-5 mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <Magnetic>
              <Link
                href="#work"
                data-cursor="view"
                data-cursor-label="SYSTEMS"
                className="tap-active inline-flex min-h-12 items-center text-base font-medium text-accent link-underline md:text-lg"
              >
                View Selected Work →
              </Link>
            </Magnetic>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink md:text-base">
              <a
                href={siteConfig.cv}
                data-cursor="open"
                className="link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              <a
                href={siteConfig.linkedin}
                data-cursor="visit"
                className="link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <Link href="/connect" className="link-underline">
                Connect
              </Link>
            </div>
          </div>
        </div>

        <aside
          aria-label="Current base"
          className="hero-rise hero-rise-delay-2 hidden md:col-span-3 md:col-start-10 md:block"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Currently
          </p>
          <p className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            {siteConfig.currentLocation}
          </p>
          <p className="mt-1 pl-[14px] text-[11px] uppercase tracking-[0.16em] text-muted">
            {siteConfig.year}
          </p>
        </aside>
      </div>

      <div aria-hidden="true" />

      <div className="mt-16 flex items-baseline justify-between gap-4 md:mt-10">
        <Link
          href="#work"
          className="text-[11px] uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-ink md:tracking-[0.18em]"
        >
          ↓ Selected Systems
        </Link>
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted md:tracking-[0.18em]">
          Rev / 2026.08
        </p>
      </div>
    </section>
  );
}
