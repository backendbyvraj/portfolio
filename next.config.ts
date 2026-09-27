import type { NextConfig } from "next";

// Project pages were renamed from placeholder brand names to descriptive,
// NDA-safe names; keep the old URLs working (and passing SEO value).
const RENAMED_PROJECTS: [string, string][] = [
  ["insight-ai-content-platform", "ai-content-writing-platform"],
  ["roadrescue-towing-app", "on-demand-towing-app"],
  ["edusphere-school-management", "school-management-saas"],
  ["payment-gateway-suite", "payment-gateway-integrations"],
  ["algotrade-python-bot", "algo-trading-bot-python"],
  ["sporthub-club-management", "sports-club-management-platform"],
  ["mediglobal-doctor-platform", "telemedicine-platform"],
  ["caterease-catering-platform", "catering-website-whatsapp-ordering"],
  ["beatstream-music-channel-app", "music-subscription-app"],
  ["propvista-real-estate-platform", "real-estate-website-lead-management"],
  ["fitzone-gym-management", "gym-website-membership-system"],
  ["fabricsurat-cloth-marketplace", "surat-textile-wholesale-website"],
  ["diamondcrm-surat-trader-software", "diamond-textile-trader-crm-surat"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return RENAMED_PROJECTS.map(([from, to]) => ({
      source: `/projects/${from}`,
      destination: `/projects/${to}`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, max-age=0, must-revalidate",
          },
          {
            key: "CDN-Cache-Control",
            value: "no-store",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "no-store",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
