import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { isConfiguredUrl, siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="section-pad mx-auto grid max-w-[1400px] grid-rows-[auto_1fr_auto] pb-10 pt-20 md:min-h-[calc(100svh-4rem)] md:pt-[clamp(4.5rem,27svh,14rem)]"
    >
      <div className="md:grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <p className="hero-rise type-eyebrow text-muted">
            01 / Intro
          </p>

          <h1
            id="hero-heading"
            className="hero-rise hero-rise-delay-1 mt-5 text-[clamp(2.75rem,9vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-balance text-ink"
          >
            ZAID DUARTEE
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-5 type-meta text-muted">
            {siteConfig.positioning}
          </p>

          <p className="hero-rise hero-rise-delay-3 mt-8 max-w-3xl text-[clamp(1.625rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-balance text-ink md:mt-[clamp(1.75rem,4svh,2.75rem)]">
            I build and fix React, Next.js, and WordPress products
            <br />
            <span className="type-serif-italic">
              with clean integrations that actually ship.
            </span>
          </p>

          <p className="hero-rise hero-rise-delay-4 mt-6 type-meta text-muted">
            SaaS frontends · API integrations · AI-assisted web apps · {siteConfig.rateLabel}
          </p>

          <div className="hero-rise hero-rise-delay-5 mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <Magnetic>
              <Link
                href="#work"
                data-cursor="view"
                data-cursor-label="PROJECTS"
                className="tap-active inline-flex min-h-12 items-center text-base font-medium text-accent link-underline md:text-lg"
              >
                View Projects →
              </Link>
            </Magnetic>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink md:text-base">
              <Link href="#services" className="link-underline">
                Services
              </Link>
              <Link href="/connect" className="link-underline">
                Contact Me
              </Link>
              {isConfiguredUrl(siteConfig.upwork) ? (
                <a
                  href={siteConfig.upwork}
                  data-cursor="visit"
                  className="link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire on Upwork
                </a>
              ) : null}
              <a
                href={siteConfig.cv}
                data-cursor="open"
                className="link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        <aside
          aria-label="Availability"
          className="hero-rise hero-rise-delay-2 hidden md:col-span-3 md:col-start-10 md:block"
        >
          <p className="type-meta text-muted">
            Currently
          </p>
          <p className="mt-3 flex items-center gap-2 type-meta text-ink">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            Available for projects
          </p>
          <p className="mt-1 pl-[14px] type-meta text-muted">
            {siteConfig.currentLocation} · {siteConfig.year}
          </p>
          <p className="mt-6 type-meta text-muted">
            {siteConfig.upworkHours} Upwork hours
          </p>
        </aside>
      </div>

      <div aria-hidden="true" />

      <div className="mt-16 flex items-baseline justify-between gap-4 md:mt-10">
        <Link
          href="#work"
          className="text-[11px] uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-ink md:tracking-[0.18em]"
        >
          ↓ Featured Case Studies
        </Link>
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted md:tracking-[0.18em]">
          Rev / 2026.10
        </p>
      </div>
    </section>
  );
}
