import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { noesisRelatedArticles } from "@/content/noesis";

export function NoesisRelatedReading() {
  return (
    <section
      id="related-reading"
      aria-labelledby="related-reading-heading"
      className="section-y bg-[#1a2332] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-light/55">
          16 / Related Intelligence
        </p>

        <h2
          id="related-reading-heading"
          className="mt-8 type-h2"
        >
          Supporting reading from
          <br />
          Beyond Intelligence.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/70">
          These articles informed the operational and clinical framing around
          pediatric respiratory context. They are external sources — not
          portfolio claims.
        </p>

        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {noesisRelatedArticles.map((article) => (
            <li key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="group flex h-full flex-col overflow-hidden border border-light/15 bg-light/[0.03] transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-light/5">
                  <Image
                    src={article.image}
                    alt={`${article.title} — article preview`}
                    width={article.imageWidth}
                    height={article.imageHeight}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-light/50">
                    {article.attribution} — External article
                  </p>
                  <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-0.02em] group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-light/65">
                    {article.description}
                  </p>
                  <span className="mt-6 text-sm font-medium text-accent">
                    Read article ↗
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
