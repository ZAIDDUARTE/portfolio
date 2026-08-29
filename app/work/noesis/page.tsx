import type { Metadata } from "next";
import { NoesisArchitecture } from "@/components/work/noesis/NoesisArchitecture";
import { NoesisClosing } from "@/components/work/noesis/NoesisClosing";
import { NoesisDemandRandom } from "@/components/work/noesis/NoesisDemandRandom";
import { NoesisGovernance } from "@/components/work/noesis/NoesisGovernance";
import { NoesisHero } from "@/components/work/noesis/NoesisHero";
import { NoesisHiddenChain } from "@/components/work/noesis/NoesisHiddenChain";
import { NoesisMissingContext } from "@/components/work/noesis/NoesisMissingContext";
import { NoesisProcessingFlow } from "@/components/work/noesis/NoesisProcessingFlow";
import { NoesisReflection } from "@/components/work/noesis/NoesisReflection";
import { NoesisRelatedReading } from "@/components/work/noesis/NoesisRelatedReading";
import { NoesisResolution } from "@/components/work/noesis/NoesisResolution";
import { NoesisRole } from "@/components/work/noesis/NoesisRole";
import { NoesisSignalLayers } from "@/components/work/noesis/NoesisSignalLayers";
import { NoesisStatus } from "@/components/work/noesis/NoesisStatus";
import { NoesisTechnology } from "@/components/work/noesis/NoesisTechnology";
import { NoesisTradeoffs } from "@/components/work/noesis/NoesisTradeoffs";
import { NoesisValidation } from "@/components/work/noesis/NoesisValidation";
import { NoesisWhatItIs } from "@/components/work/noesis/NoesisWhatItIs";
import { noesisAssets, noesisMeta } from "@/content/noesis";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Noesis — Environmental Health Intelligence",
  description:
    "A technical case study on Noesis: confidence-aware geospatial environmental-health intelligence, pediatric demand context, and honest boundaries between engineering evidence and clinical claims.",
  alternates: {
    canonical: "/work/noesis",
  },
  openGraph: {
    title: "Noesis — Environmental Health Intelligence | Zaid Duartee",
    description:
      "Technical case study: hyperlocal environmental-health intelligence, spatial-temporal data engineering, and decision-support boundaries.",
    url: `${siteConfig.url}/work/noesis`,
    images: [
      {
        url: noesisAssets.og,
        width: noesisAssets.heroWidth,
        height: noesisAssets.heroHeight,
        alt: "Noesis environmental health intelligence — atmospheric context",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noesis — Environmental Health Intelligence | Zaid Duartee",
    description:
      "Technical case study on environmental-health intelligence and operational healthcare demand context.",
    images: [noesisAssets.og],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Noesis — Environmental Health Intelligence Platform",
  description: noesisMeta.oneLine,
  url: `${siteConfig.url}/work/noesis`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: noesisMeta.role,
  },
  about: [
    "Environmental health intelligence",
    "Geospatial systems",
    "Time-series engineering",
    "Healthcare operational context",
  ],
  image: `${siteConfig.url}${noesisAssets.og}`,
};

export default function NoesisCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <NoesisHero />
        <NoesisMissingContext />
        <NoesisDemandRandom />
        <NoesisHiddenChain />
        <NoesisWhatItIs />
        <NoesisRole />
        <NoesisArchitecture />
        <NoesisSignalLayers />
        <NoesisProcessingFlow />
        <NoesisResolution />
        <NoesisValidation />
        <NoesisGovernance />
        <NoesisTechnology />
        <NoesisTradeoffs />
        <NoesisStatus />
        <NoesisReflection />
        <NoesisRelatedReading />
        <NoesisClosing />
      </main>
    </>
  );
}
