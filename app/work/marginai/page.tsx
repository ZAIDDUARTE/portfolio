import type { Metadata } from "next";
import { MarginAIArchitecture } from "@/components/work/marginai/MarginAIArchitecture";
import { MarginAIClosing } from "@/components/work/marginai/MarginAIClosing";
import { MarginAICostOfInference } from "@/components/work/marginai/MarginAICostOfInference";
import { MarginAIDecisionModel } from "@/components/work/marginai/MarginAIDecisionModel";
import { MarginAIGovernance } from "@/components/work/marginai/MarginAIGovernance";
import { MarginAIHero } from "@/components/work/marginai/MarginAIHero";
import { MarginAIOptimizationGap } from "@/components/work/marginai/MarginAIOptimizationGap";
import { MarginAIOptimizationStrategies } from "@/components/work/marginai/MarginAIOptimizationStrategies";
import { MarginAIPlatform } from "@/components/work/marginai/MarginAIPlatform";
import { MarginAIReflection } from "@/components/work/marginai/MarginAIReflection";
import { MarginAIRequestFlow } from "@/components/work/marginai/MarginAIRequestFlow";
import { MarginAIRole } from "@/components/work/marginai/MarginAIRole";
import { MarginAISafety } from "@/components/work/marginai/MarginAISafety";
import { MarginAIStatus } from "@/components/work/marginai/MarginAIStatus";
import { MarginAITechnology } from "@/components/work/marginai/MarginAITechnology";
import { MarginAITradeoffs } from "@/components/work/marginai/MarginAITradeoffs";
import { MarginAIWhatItIs } from "@/components/work/marginai/MarginAIWhatItIs";
import { marginaiAssets, marginaiMeta } from "@/content/marginai";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "MarginAI — LLM Inference Optimization",
  description:
    "A technical case study on MarginAI: a completed OpenAI-compatible inference optimization system with fail-open controls — no customer adoption or cost outcomes claimed.",
  alternates: {
    canonical: "/work/marginai",
  },
  openGraph: {
    title: "MarginAI — LLM Inference Optimization | Zaid Duartee",
    description:
      "Technical case study: OpenAI-compatible inference optimization with independent safety gates and fail-open request handling.",
    url: `${siteConfig.url}/work/marginai`,
    images: [
      {
        url: marginaiAssets.og,
        width: marginaiAssets.ogWidth,
        height: marginaiAssets.ogHeight,
        alt: "MarginAI — LLM inference optimization case study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarginAI — LLM Inference Optimization | Zaid Duartee",
    description:
      "Technical case study on a completed OpenAI-compatible inference optimization system.",
    images: [marginaiAssets.og],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "MarginAI — LLM Inference Optimization Infrastructure",
  description: marginaiMeta.oneLine,
  url: `${siteConfig.url}/work/marginai`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: marginaiMeta.role,
  },
  about: [
    "LLM inference optimization",
    "API proxy architecture",
    "Inference economics",
    "SaaS infrastructure",
  ],
  image: `${siteConfig.url}${marginaiAssets.og}`,
};

export default function MarginAICaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <MarginAIHero />
        <MarginAICostOfInference />
        <MarginAIOptimizationGap />
        <MarginAIWhatItIs />
        <MarginAIRole />
        <MarginAIDecisionModel />
        <MarginAIArchitecture />
        <MarginAIOptimizationStrategies />
        <MarginAISafety />
        <MarginAIRequestFlow />
        <MarginAIPlatform />
        <MarginAIGovernance />
        <MarginAITechnology />
        <MarginAITradeoffs />
        <MarginAIStatus />
        <MarginAIReflection />
        <MarginAIClosing />
      </main>
    </>
  );
}
