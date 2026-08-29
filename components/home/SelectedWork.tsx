"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, type ReactNode } from "react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type Project } from "@/content/projects";

function isProjectPublished(project: Project): boolean {
  return project.availability === "published";
}

function ComingSoonLabel() {
  return (
    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
      Coming Soon
    </span>
  );
}

function ProjectPreview({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  const published = isProjectPublished(project);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-300 ease-out ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isActive}
      {...(published ? { "data-cursor": "explore" } : {})}
    >
      <div
        className={`relative h-full w-full overflow-hidden ${project.world.frameClass}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          className={`h-full w-full object-cover transition-[transform,clip-path] duration-500 ease-out motion-reduce:transition-none ${
            isActive
              ? "scale-[1.015] [clip-path:inset(0_0_0_0)]"
              : "scale-100 [clip-path:inset(0_100%_0_0)]"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

function ProjectCardDetails({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  const published = isProjectPublished(project);

  return (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          {project.index}
        </p>
        <div className="flex items-baseline gap-3">
          {!published ? <ComingSoonLabel /> : null}
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
            Case / {project.caseNumber}
          </p>
        </div>
      </div>

      <h3
        className={`mt-3 font-medium leading-none tracking-[-0.02em] transition-colors duration-200 ${
          project.dominant
            ? "text-[clamp(3rem,5vw,4.5rem)]"
            : "text-[clamp(2.25rem,4vw,3.5rem)]"
        } group-hover:text-accent group-focus-visible:text-accent`}
      >
        {project.title}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.12em] text-muted">
        {project.subtitle}
      </p>

      {isActive ? (
        <div className="mt-8 max-w-md">
          <div
            key={project.id}
            aria-hidden="true"
            className="project-rule-draw mb-6 h-px bg-border"
          />
          <p className="text-base leading-relaxed text-ink">{project.hook}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.1em] text-muted">
            {project.domains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
          {published ? (
            <Magnetic maxOffset={5}>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">
                Explore {project.title} ↗
              </span>
            </Magnetic>
          ) : (
            <p
              className="mt-6 text-sm leading-relaxed text-muted"
              aria-label={`${project.title} case study coming soon`}
            >
              Case study in preparation.
            </p>
          )}
        </div>
      ) : null}
    </>
  );
}

function DesktopProjectCard({
  project,
  isActive,
  onActivate,
}: {
  project: Project;
  isActive: boolean;
  onActivate: (id: string) => void;
}) {
  const published = isProjectPublished(project);
  const cardClassName = "group block";

  const cardContent = (
    <ProjectCardDetails project={project} isActive={isActive} />
  );

  let interactiveCard: ReactNode;

  if (published) {
    interactiveCard = (
      <Link
        href={project.href}
        data-cursor="view"
        data-cursor-label={`VIEW ${project.index}`}
        className={cardClassName}
        onFocus={() => onActivate(project.id)}
      >
        {cardContent}
      </Link>
    );
  } else {
    interactiveCard = (
      <div
        role="group"
        tabIndex={0}
        aria-label={`${project.title}: ${project.subtitle}. Case study coming soon.`}
        className={cardClassName}
        onFocus={() => onActivate(project.id)}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <article
      className={`border-t border-border py-10 transition-opacity duration-200 ease-out first:border-t-0 first:pt-0 ${
        isActive ? "opacity-100" : "opacity-[0.35]"
      }`}
      onMouseEnter={() => onActivate(project.id)}
    >
      {interactiveCard}
    </article>
  );
}

function MobileProjectCard({ project }: { project: Project }) {
  const published = isProjectPublished(project);

  return (
    <article className="project-tap border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          {project.index}
        </p>
        <div className="flex items-baseline gap-3">
          {!published ? <ComingSoonLabel /> : null}
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
            Case / {project.caseNumber}
          </p>
        </div>
      </div>
      <h3 className="mt-3 text-[clamp(2rem,8vw,3.25rem)] font-medium leading-none tracking-[-0.02em]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">
        {project.subtitle}
      </p>
      <p className="mt-6 text-base leading-relaxed text-ink">{project.hook}</p>

      <div
        className={`relative mt-8 aspect-[3/2] w-full overflow-hidden ${project.world.frameClass}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          className="h-full w-full object-cover"
          sizes="100vw"
        />
      </div>

      {published ? (
        <Link
          href={project.href}
          className="tap-active mt-6 inline-flex min-h-12 items-center text-base font-medium text-accent link-underline active:translate-x-0.5"
        >
          Explore {project.title} ↗
        </Link>
      ) : (
        <p
          className="mt-6 flex min-h-12 items-center"
          aria-label={`${project.title} case study coming soon`}
        >
          <ComingSoonLabel />
        </p>
      )}
    </article>
  );
}

export function SelectedWork() {
  const [activeId, setActiveId] = useState(projects[0].id);

  const handleActivate = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const activeProject =
    projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="02" title="Selected Systems" />

        <h2 id="work-heading" className="sr-only">
          Selected Systems
        </h2>

        {/* Desktop: editorial index with a single large preview environment */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex flex-col">
            {projects.map((project) => (
              <DesktopProjectCard
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onActivate={handleActivate}
              />
            ))}
          </div>

          <div
            className="relative sticky top-24 h-[min(70vh,640px)]"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="sr-only">
              Previewing {activeProject.title}: {activeProject.subtitle}
              {!isProjectPublished(activeProject) ? " — coming soon" : ""}
            </p>
            {projects.map((project) => (
              <ProjectPreview
                key={project.id}
                project={project}
                isActive={activeId === project.id}
              />
            ))}
          </div>
        </div>

        {/* Mobile: single column, no hover dependency */}
        <div className="mt-10 lg:hidden">
          {projects.map((project) => (
            <MobileProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
