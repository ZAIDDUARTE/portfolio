import Image from "next/image";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Reveal } from "@/components/ui/Reveal";

const PORTRAIT_WIDTH = 621;
const PORTRAIT_HEIGHT = 481;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="06" title="About" />

        <h2 id="about-heading" className="sr-only">
          About
        </h2>

        <p className="type-editorial-lg mt-12 text-ink">
          I help businesses ship and stabilize modern web products.
        </p>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-x-16">
          <div className="type-prose max-w-xl space-y-6 text-base text-ink md:col-span-5 md:text-lg">
            <p>
              My path started in commerce, moved into frontend delivery, then
              into SaaS and integration work for clients — including 459+ hours
              on Upwork across multiple 5-star frontend contracts. Alongside
              freelance delivery, I contribute to commercial software and
              AI-enabled product systems.
            </p>

            <p className="type-display-serif text-[clamp(1.375rem,2.5vw,1.75rem)] leading-snug">
              I care about clean execution.
            </p>

            <p>
              Especially when the work sits between React/Next.js interfaces,
              WordPress sites, APIs, and AI-assisted workflows that need to hold
              up in production.
            </p>

            <p className="type-display-serif text-[clamp(1.375rem,2.5vw,1.75rem)] leading-snug">
              Available for hire.
            </p>

            <p>
              Alongside client work, I continue studying Law and Data Science.
            </p>
          </div>

          <figure className="md:col-span-6 md:col-start-7">
            <ClipReveal>
              <div
                className="relative w-full overflow-hidden bg-border-subtle"
                data-cursor="about"
              >
                <Image
                  src="/images/profile/zaid.svg"
                  alt="Zaid Duartee"
                  width={PORTRAIT_WIDTH}
                  height={PORTRAIT_HEIGHT}
                  className="h-auto w-full grayscale transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none [@media(pointer:fine)]:hover:scale-[1.015]"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </ClipReveal>

            <figcaption className="type-meta mt-5 flex items-baseline justify-between gap-4 text-muted">
              <span>Fig. 02 — Zaid Duartee</span>
              <span>Islamabad / Riyadh</span>
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
