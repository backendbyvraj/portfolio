import type { Metadata } from "next";

// The site has launched; keep this placeholder out of search results.
export const metadata: Metadata = {
  title: "Coming Soon",
  robots: { index: false, follow: false },
};

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
