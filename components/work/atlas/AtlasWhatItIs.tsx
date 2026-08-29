import Image from "next/image";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Reveal } from "@/components/ui/Reveal";
import { atlasAssets, atlasLayers, atlasMeta } from "@/content/atlas";

export function AtlasWhatItIs() {
  return (
    <section
      id="what-atlas-is"
      aria-labelledby="what-atlas-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          02 / What Atlas Is
        </p>

        <h2
          id="what-atlas-heading"
          className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          From scientific evidence
          <br />
          to usable risk intelligence
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          ATLAS is not positioned as a replacement for an insurer&rsquo;s
          actuarial model. It is an additional environmental covariate designed
          to be tested inside existing models — with value demonstrated through
          reproducible validation rather than marketing claims.
        </p>

        <ol className="mt-14 grid gap-0 border-t border-border md:mt-20 md:grid-cols-4">
          {atlasLayers.map((layer, index) => (
            <li
              key={layer.index}
              className={`border-border py-8 md:border-t-0 md:px-5 md:py-10 ${
                index === 0 ? "md:pl-0" : "border-t md:border-l md:border-t-0"
              } ${index === atlasLayers.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {layer.index}
              </p>
              <h3 className="mt-4 text-lg font-medium leading-snug tracking-[-0.02em] md:text-xl">
                {layer.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                {layer.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-3xl text-base leading-[1.7] text-ink md:mt-16 md:text-lg">
          {atlasMeta.modelExplanation}
        </p>

        <figure className="mt-16 md:mt-24">
          <ClipReveal>
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-dark md:aspect-[21/9]">
              <Image
                src={atlasAssets.tech01}
                alt="Suburban street at dusk with visible atmospheric particles — environmental exposure context"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
            </div>
          </ClipReveal>
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted">
            Fig. 02 — Environmental intelligence context
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
