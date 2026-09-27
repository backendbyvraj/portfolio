import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollAnimations from "@/components/ScrollAnimations";
import { META_TITLE, META_DESC, SITE_URL, yearsOfExperience } from "@/lib/seoConfig";
import { projects } from "@/lib/projectsData";

// Home uses the root title/description from seoConfig (no template suffix).
export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESC,
  alternates: {
    canonical: SITE_URL,
  },
};

// Re-render daily so the experience count rolls over without a redeploy.
export const revalidate = 86400;

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Hero years={yearsOfExperience()} caseStudies={projects.length} />
      <FeaturedProjects />
      <WhyWorkWithMe />
      <Skills />
      <Contact />
    </>
  );
}
