import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { Reveal } from "@/components/ui/Reveal";
import { isConfiguredUrl, siteConfig } from "@/content/site";

type MetaBlock = {
  caseNumber: string;
  title: string;
  subtitle: string;
  role: string;
  domain: string;
  statement: string;
  scopeNote: string;
};

type RoleBlock = {
  title: string;
  body: string;
  columns: readonly { title: string; body: string }[];
};

type StatusBlock = {
  title: string;
  body: string;
  outcomes: readonly string[];
};

type VideoBlock = {
  src?: string | null;
  youtubeUrl?: string | null;
  vimeoUrl?: string | null;
  poster?: string | null;
  title: string;
};

type NextLink = {
  href: string;
  title: string;
  caseNumber: string;
};

export function CaseStudyHero({ meta }: { meta: MetaBlock }) {
  return (
    <section
      aria-labelledby="case-hero-heading"
      className="section-pad mx-auto max-w-[1400px] pb-10 pt-24 md:pt-32"
    >
      <p className="type-eyebrow text-muted">
        Case / {meta.caseNumber}
      </p>
      <h1
        id="case-hero-heading"
        className="mt-5 text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em]"
      >
        {meta.title}
      </h1>
      <p className="mt-4 text-sm uppercase tracking-[0.12em] text-muted md:text-base">
        {meta.subtitle}
      </p>
      <p className="mt-8 max-w-3xl text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] tracking-[-0.02em] text-ink">
        {meta.statement}
      </p>
      <dl className="mt-10 grid gap-6 sm:grid-cols-2 md:max-w-2xl">
        <div>
          <dt className="type-eyebrow text-muted">Role</dt>
          <dd className="mt-2 text-base text-ink">{meta.role}</dd>
        </div>
        <div>
          <dt className="type-eyebrow text-muted">Domain</dt>
          <dd className="mt-2 text-base text-ink">{meta.domain}</dd>
        </div>
      </dl>
      <p className="mt-8 max-w-2xl type-meta text-muted">{meta.scopeNote}</p>
    </section>
  );
}

export function CaseStudyProblem({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section aria-labelledby="problem-heading" className="section-y editorial-rule">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">01 / Problem</p>
        <h2
          id="problem-heading"
          className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]"
        >
          {title}
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-ink md:text-lg">
          {body}
        </p>
      </Reveal>
    </section>
  );
}

export function CaseStudyRole({ role }: { role: RoleBlock }) {
  return (
    <section aria-labelledby="role-heading" className="section-y editorial-rule">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">02 / Role</p>
        <h2
          id="role-heading"
          className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]"
        >
          {role.title}
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-ink md:text-lg">
          {role.body}
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {role.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-accent">
                {column.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {column.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function CaseStudyWork({
  items,
  technologies,
}: {
  items: readonly string[];
  technologies: readonly string[];
}) {
  return (
    <section aria-labelledby="work-heading" className="section-y editorial-rule">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">03 / Work performed</p>
        <h2
          id="work-heading"
          className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]"
        >
          What was delivered
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="border-l border-border pl-5 text-base leading-relaxed text-ink md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <h3 className="type-eyebrow text-muted">Technologies</h3>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm uppercase tracking-[0.1em] text-ink">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export function CaseStudyDemo({
  video,
  missingHint,
}: {
  video: VideoBlock;
  missingHint?: readonly string[];
}) {
  const hasSource = Boolean(
    video.src || video.youtubeUrl || video.vimeoUrl,
  );

  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">04 / Demonstration</p>
        <h2
          id="demo-heading"
          className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]"
        >
          Product demonstration
        </h2>

        {hasSource ? (
          <ProjectVideo
            className="mt-12 md:mt-16"
            src={video.src}
            youtubeUrl={video.youtubeUrl}
            vimeoUrl={video.vimeoUrl}
            poster={video.poster}
            title={video.title}
          />
        ) : (
          <div className="mt-10 max-w-3xl border border-border bg-canvas p-6 md:p-8">
            <p className="text-base text-ink md:text-lg">
              A public demo video is not configured yet. Broken embeds are
              intentionally omitted.
            </p>
            {missingHint && missingHint.length > 0 ? (
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {missingHint.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </Reveal>
    </section>
  );
}

export function CaseStudyStatus({ status }: { status: StatusBlock }) {
  return (
    <section aria-labelledby="status-heading" className="section-y editorial-rule">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">05 / Status</p>
        <h2
          id="status-heading"
          className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]"
        >
          {status.title}
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-ink md:text-lg">
          {status.body}
        </p>
        <ul className="mt-8 grid max-w-3xl gap-3">
          {status.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="border border-border px-4 py-3 text-sm text-ink md:text-base"
            >
              {outcome}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function CaseStudyClosing({ next }: { next: NextLink }) {
  return (
    <section
      aria-labelledby="closing-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="closing-heading" className="sr-only">
          Next steps
        </h2>

        <div className="flex flex-col gap-10 border-b border-light/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Continue
            </p>
            <p className="mt-3 text-[clamp(1.5rem,4vw,2.25rem)] font-medium tracking-[-0.02em]">
              Explore related work
            </p>
          </div>
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-light/45">
              Case Study {next.caseNumber}
            </p>
            <Link
              href={next.href}
              data-cursor="next"
              data-cursor-label="NEXT"
              className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
            >
              Next case study
              <br />
              {next.title} →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href="/#work"
              data-cursor="back"
              className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
            >
              ← Back to Selected Work
            </Link>
            <Link
              href="/connect"
              className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
            >
              Contact Me →
            </Link>
            {isConfiguredUrl(siteConfig.upwork) ? (
              <a
                href={siteConfig.upwork}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="visit"
                className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
              >
                Hire on Upwork ↗
              </a>
            ) : null}
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Ready to discuss a project?
            </p>
            <Magnetic maxOffset={5}>
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor="talk"
                className="mt-3 inline-flex min-h-12 items-center text-lg text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
              >
                {siteConfig.email} ↗
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
