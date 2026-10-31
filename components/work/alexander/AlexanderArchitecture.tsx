import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  alexanderArchitecture,
  alexanderAssets,
  alexanderQuestionnaire,
} from "@/content/alexander";

export function AlexanderArchitecture() {
  return (
    <section
      aria-labelledby="alexander-architecture-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">04 / Architecture</p>
        <h2
          id="alexander-architecture-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Platform architecture and onboarding model
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-muted md:text-lg">
          WordPress owns acquisition. Next.js owns business workflows.
          PostgreSQL owns canonical state. Trillet runs the voice experience.
          Integrations remain permission-bound and only claim success after
          confirmation.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alexanderArchitecture.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-canvas p-6 transition-colors duration-200 hover:border-ink/30"
            >
              <h3 className="text-lg font-medium tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]">
              {alexanderQuestionnaire.title}
            </h3>
            <p className="type-prose mt-4 text-base text-ink md:text-lg">
              {alexanderQuestionnaire.body}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-5">
              {alexanderQuestionnaire.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="type-eyebrow text-muted">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-[-0.03em] text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {alexanderQuestionnaire.note}
            </p>
          </div>

          <figure className="lg:col-span-7">
            <div className="group relative overflow-hidden border border-border bg-border-subtle">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={alexanderAssets.card}
                  alt={alexanderAssets.dashboardAlt}
                  width={alexanderAssets.cardWidth}
                  height={alexanderAssets.cardHeight}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out motion-reduce:transition-none [@media(pointer:fine)]:group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted">
              Fig. 02 — Service-request dashboard surface used for operational review
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
