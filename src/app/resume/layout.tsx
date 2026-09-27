import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seoConfig";

// Re-render daily so the experience count rolls over without a redeploy.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Resume — Vraj Pandya, Full Stack Developer",
  description:
    "Resume of Vraj Pandya, freelance full stack developer from Surat, India: skills, key client projects, education and availability.",
  alternates: { canonical: `${SITE_URL}/resume` },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
