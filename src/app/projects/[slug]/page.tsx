import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectsData";
import { SITE_URL, AUTHOR_NAME, BRAND_NAME } from "@/lib/seoConfig";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const shortName = (title: string) => title.split("–")[0].trim();

/** Search phrases a client would type, combining the project's main service
 *  with the places Vraj serves: Surat (local), India, and remote/worldwide. */
function geoKeywords(service: string) {
  const s = service.toLowerCase();
  return [
    `${s} developer in Surat`,
    `${s} company Surat`,
    `${s} development India`,
    `hire ${s} developer India`,
    `${s} developer for international clients`,
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const name = shortName(project.title);
  const url = `${SITE_URL}/projects/${slug}`;
  const description =
    `${project.tagline} — case study by ${AUTHOR_NAME}, web & app developer in Surat, India. ` +
    project.results.join(" · ");
  return {
    title: `${name} — Case Study`,
    description: description.slice(0, 300),
    keywords: [
      ...project.tags,
      ...geoKeywords(project.service),
      `${project.industry} software`,
      ...project.tech.slice(0, 4),
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${name} — ${project.tagline}`,
      description: project.description,
      images: [{ url: project.images[0], width: 1600, height: 1000, alt: `${name} — ${project.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} — ${project.tagline}`,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const name = shortName(project.title);
  const url = `${SITE_URL}/projects/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: `${name} — ${project.tagline}`,
        headline: project.tagline,
        description: project.description,
        url,
        image: project.images.map((i) => `${SITE_URL}${i}`),
        dateCreated: project.year,
        genre: project.industry,
        keywords: [...project.tags, ...geoKeywords(project.service)].join(", "),
        about: project.features,
        creator: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#studio` },
        ...(project.clientLocation ? { locationCreated: project.clientLocation } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: BRAND_NAME, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetailClient project={project} />
    </>
  );
}
