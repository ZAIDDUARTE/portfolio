import Image from "next/image";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Reveal } from "@/components/ui/Reveal";
import { atlasAssets, atlasMicroExposureCopy } from "@/content/atlas";

export function AtlasMicroExposure() {
  return (
    <section
      id="local-context"
      aria-labelledby="micro-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          06 / Local Context
        </p>

        <h2
          id="micro-heading"
          className="mt-8 type-h2"
        >
          {atlasMicroExposureCopy.headline}
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          {atlasMicroExposureCopy.body}
        </p>

        <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          <div className="border border-border p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Broader Scientific Signal
            </p>
            <div
              aria-hidden="true"
              className="relative mt-6 aspect-[4/3] overflow-hidden bg-dark"
            >
              <svg
                viewBox="0 0 400 300"
                className="h-full w-full"
                role="img"
                aria-label="Abstract contour field representing regional environmental conditions"
              >
                <rect width="400" height="300" fill="#15171A" />
                {[40, 70, 100, 130, 160].map((r, i) => (
                  <ellipse
                    key={r}
                    cx="180"
                    cy="150"
                    rx={r * 1.4}
                    ry={r}
                    fill="none"
                    stroke="#2457FF"
                    strokeOpacity={0.55 - i * 0.08}
                    strokeWidth="1"
                    transform="rotate(-12 180 150)"
                  />
                ))}
                <path
                  d="M0 200 C 80 160, 160 220, 240 170 S 340 140, 400 160"
                  fill="none"
                  stroke="#2457FF"
                  strokeOpacity="0.7"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Regional environmental conditions form the broader scientific
              signal.
            </p>
          </div>

          <div className="border border-border p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Controlled Local Context
            </p>
            <div
              aria-hidden="true"
              className="relative mt-6 aspect-[4/3] overflow-hidden bg-border-subtle"
            >
              <svg
                viewBox="0 0 400 300"
                className="h-full w-full"
                role="img"
                aria-label="Abstract grid representing bounded place-based context"
              >
                <rect width="400" height="300" fill="#E8E6E0" />
                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 6 }).map((_, col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={40 + col * 55}
                      y={40 + row * 45}
                      width="48"
                      height="38"
                      fill="none"
                      stroke="#171717"
                      strokeOpacity="0.2"
                    />
                  )),
                )}
                <rect
                  x="150"
                  y="130"
                  width="100"
                  height="80"
                  fill="none"
                  stroke="#2457FF"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Bounded context from the surrounding physical and built
              environment — without enumerating proprietary variables.
            </p>
          </div>
        </div>

        <p className="mt-12 max-w-3xl border-l-2 border-accent pl-6 font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug tracking-[-0.01em] md:mt-16">
          Localization adds context.
          <br />
          It does not invent atmospheric precision.
        </p>

        <figure className="mt-16 md:mt-24">
          <ClipReveal>
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-dark md:aspect-[21/9]">
              <Image
                src={atlasAssets.tech02}
                alt="Urban skyline under dense atmospheric haze — environmental context"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
            </div>
          </ClipReveal>
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted">
            Fig. 03 — Environmental context
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
