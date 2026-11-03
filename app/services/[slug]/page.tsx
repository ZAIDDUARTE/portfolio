import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/services/ServicePageView";
import {
  getServicePage,
  servicePageSlugs,
} from "@/content/service-pages";
import { siteConfig } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.metaTitle} — ${siteConfig.name}`,
      description: service.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} — ${siteConfig.name}`,
      description: service.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  return <ServicePageView service={service} />;
}
