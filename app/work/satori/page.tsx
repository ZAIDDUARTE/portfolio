import type { Metadata } from "next";
import {
  CaseStudyClosing,
  CaseStudyDemo,
  CaseStudyHero,
  CaseStudyProblem,
  CaseStudyRole,
  CaseStudyStatus,
  CaseStudyWork,
} from "@/components/work/shared/CaseStudySections";
import { atlasProject } from "@/content/projects";
import {
  satoriAssets,
  satoriMeta,
  satoriMissingAssets,
  satoriProblem,
  satoriRole,
  satoriStatus,
  satoriTechnologies,
  satoriWork,
} from "@/content/satori";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Satori — AI-Enabled SaaS Platform",
  description:
    "Case study: React frontend workflows, FastAPI backend systems, PostgreSQL, API integration, authentication, and reporting for an AI-enabled SaaS platform.",
  alternates: {
    canonical: "/work/satori",
  },
  openGraph: {
    title: "Satori — AI-Enabled SaaS Platform | Zaid Duartee",
    description:
      "SaaS application contributions across React, FastAPI, PostgreSQL, authentication, API integration, and reporting.",
    url: `${siteConfig.url}/work/satori`,
    images: [
      {
        url: satoriAssets.preview,
        width: 1600,
        height: 900,
        alt: "Satori AI-enabled SaaS platform case study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satori — AI-Enabled SaaS Platform | Zaid Duartee",
    description:
      "React, FastAPI, PostgreSQL, auth, and reporting contributions for an AI-enabled SaaS platform.",
    images: [satoriAssets.preview],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: satoriMeta.platformTitle,
  description: satoriMeta.oneLine,
  url: `${siteConfig.url}/work/satori`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: satoriMeta.role,
  },
  about: [
    "SaaS",
    "React",
    "FastAPI",
    "PostgreSQL",
    "Authentication",
    "Reporting",
  ],
};

export default function SatoriCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <CaseStudyHero meta={satoriMeta} />
        <CaseStudyProblem title={satoriProblem.title} body={satoriProblem.body} />
        <CaseStudyRole role={satoriRole} />
        <CaseStudyWork items={satoriWork} technologies={satoriTechnologies} />
        <CaseStudyDemo
          video={{
            src: satoriAssets.demoVideo,
            youtubeUrl: satoriAssets.youtubeUrl,
            vimeoUrl: satoriAssets.vimeoUrl,
            poster: satoriAssets.demoPoster,
            title: "Satori SaaS platform demo",
          }}
          missingHint={satoriMissingAssets}
        />
        <CaseStudyStatus status={satoriStatus} />
        <CaseStudyClosing
          next={{
            href: atlasProject.href,
            title: atlasProject.title,
            caseNumber: atlasProject.caseNumber,
          }}
        />
      </main>
    </>
  );
}
