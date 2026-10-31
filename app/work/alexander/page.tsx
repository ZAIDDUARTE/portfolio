import type { Metadata } from "next";
import { AlexanderArchitecture } from "@/components/work/alexander/AlexanderArchitecture";
import { AlexanderArchitectureDiagram } from "@/components/work/alexander/AlexanderArchitectureDiagram";
import { AlexanderClosing } from "@/components/work/alexander/AlexanderClosing";
import { AlexanderHero } from "@/components/work/alexander/AlexanderHero";
import { AlexanderOutcomes } from "@/components/work/alexander/AlexanderOutcomes";
import { AlexanderProblem } from "@/components/work/alexander/AlexanderProblem";
import { AlexanderRole } from "@/components/work/alexander/AlexanderRole";
import { AlexanderSolution } from "@/components/work/alexander/AlexanderSolution";
import { AlexanderTechnology } from "@/components/work/alexander/AlexanderTechnology";
import { alexanderAssets, alexanderMeta } from "@/content/alexander";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Alexander — AI Receptionist & Business Automation SaaS",
  description:
    "Case study: CTO and lead full-stack work on Alexander — an AI voice receptionist SaaS for U.S. plumbing businesses spanning Next.js onboarding, AWS persistence, Trillet voice, and staged integrations.",
  alternates: {
    canonical: "/work/alexander",
  },
  openGraph: {
    title: "Alexander — AI Receptionist & Business Automation SaaS | Zaid Duartee",
    description: alexanderMeta.oneLine,
    url: `${siteConfig.url}/work/alexander`,
    images: [
      {
        url: alexanderAssets.og,
        width: alexanderAssets.ogWidth,
        height: alexanderAssets.ogHeight,
        alt: alexanderAssets.dashboardAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander — AI Receptionist & Business Automation SaaS | Zaid Duartee",
    description: alexanderMeta.oneLine,
    images: [alexanderAssets.og],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: alexanderMeta.platformTitle,
  description: alexanderMeta.oneLine,
  url: `${siteConfig.url}/work/alexander`,
  about: [
    "AI receptionist",
    "Voice AI",
    "SaaS",
    "Next.js",
    "Business automation",
    "Plumbing industry",
  ],
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: alexanderMeta.role,
  },
  image: `${siteConfig.url}${alexanderAssets.og}`,
  sameAs: [alexanderMeta.website],
};

export default function AlexanderCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <AlexanderHero />
        <AlexanderProblem />
        <AlexanderSolution />
        <AlexanderRole />
        <AlexanderArchitecture />
        <AlexanderArchitectureDiagram />
        <AlexanderTechnology />
        <AlexanderOutcomes />
        <AlexanderClosing />
      </main>
    </>
  );
}
