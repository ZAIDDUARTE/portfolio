import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function ProfessionalSnapshot() {
  return (
    <section aria-labelledby="snapshot-heading" className="section-y">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="snapshot-heading" className="sr-only">
          Professional Snapshot
        </h2>

        <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4 md:grid-rows-3">
          <div className="col-span-2 row-span-2 flex min-h-[220px] flex-col justify-end bg-canvas p-6 md:min-h-[280px] md:p-8">
            <p className="type-eyebrow text-muted">
              Role
            </p>
            <p className="mt-3 text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-tight tracking-[-0.02em]">
              React & Next.js Developer
            </p>
            <p className="mt-3 text-sm text-muted md:text-base">
              SaaS, WordPress & AI Integrations
            </p>
          </div>

          <div className="flex min-h-[120px] flex-col justify-between bg-canvas p-5 md:p-6">
            <p className="type-eyebrow text-muted">
              Upwork
            </p>
            <p className="text-sm leading-snug md:text-base">
              {siteConfig.upworkHours} hours
            </p>
          </div>

          <div className="flex min-h-[120px] flex-col justify-between bg-canvas p-5 md:p-6">
            <p className="type-eyebrow text-muted">
              Rate
            </p>
            <p className="text-sm leading-snug md:text-base">
              {siteConfig.rateLabel}
            </p>
          </div>

          <div className="col-span-2 flex min-h-[140px] flex-col justify-between bg-canvas p-5 md:col-span-2 md:min-h-[160px] md:p-6">
            <p className="type-eyebrow text-muted">
              Focus
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base">
              <li>React / Next.js</li>
              <li>WordPress</li>
              <li>APIs & AI</li>
            </ul>
          </div>

          <div className="flex min-h-[120px] flex-col justify-between bg-canvas p-5 md:p-6">
            <p className="type-eyebrow text-muted">
              Base
            </p>
            <p className="text-sm leading-snug md:text-base">
              {siteConfig.location}
            </p>
          </div>

          <div className="flex min-h-[120px] flex-col justify-between bg-canvas p-5 md:p-6">
            <p className="type-eyebrow text-muted">
              Connect
            </p>
            <a
              href={siteConfig.linkedin}
              data-cursor="visit"
              className="text-sm link-underline md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
