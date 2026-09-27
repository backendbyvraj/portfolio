import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { projects } from "@/lib/projectsData";
import { SITE_URL } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: "Website, App & CRM Projects — Portfolio of a Surat Web Developer",
  description:
    "Case studies of websites, mobile apps, CRMs and SaaS built by Vraj Pandya for businesses in Surat, across India and worldwide — catering, real estate, textile, diamond trading, schools, healthcare and fintech.",
  keywords: [
    "web development portfolio Surat",
    "website design examples India",
    "custom CRM software case study",
    "mobile app development portfolio",
    "SaaS development India",
    ...projects.map((p) => p.tags[0]),
  ],
  alternates: { canonical: `${SITE_URL}/projects` },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Vraj Pandya",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/projects/${p.slug}`,
      name: `${p.title.split("–")[0].trim()} — ${p.tagline}`,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsClient />
    </>
  );
}
