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
        <SectionLabel number="05" title="About" />

        <h2 id="about-heading" className="sr-only">
          About
        </h2>

        <p className="mt-12 max-w-4xl font-serif text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.14] tracking-[-0.02em] text-ink">
          I didn&rsquo;t follow a conventional route into technology.
        </p>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-x-16">
          <div className="max-w-xl space-y-6 text-base leading-[1.7] text-ink md:col-span-5 md:text-lg">
            <p>
              It started with commerce — ecommerce and affiliate work, the
              unglamorous business of making something actually sell. Frontend
              leadership came next, then full-stack delivery, then technical
              leadership across AI, data, SaaS and geospatial systems.
            </p>

            <p className="font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] leading-snug tracking-[-0.01em]">
              I like complex systems.
            </p>

            <p>
              Especially when the problem lives somewhere between product,
              engineering, data and business.
            </p>

            <p className="font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] leading-snug tracking-[-0.01em]">
              I care about execution.
            </p>

            <p>
              Alongside technology, I am studying Law and Data Science.
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

            <figcaption className="mt-5 flex items-baseline justify-between gap-4 text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>Fig. 02 — Zaid Duartee</span>
              <span>Islamabad / Riyadh</span>
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
