import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "All Projects | Vraj Pandya – Full Stack Developer",
  description:
    "Explore all projects by Vraj Pandya — AI platforms, real-time apps, SaaS systems, Python trading bots, telemedicine, school management, and payment gateway integrations.",
  alternates: { canonical: "https://vrajpandya.vercel.app/projects" },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
