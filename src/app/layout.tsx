import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScroll from "@/components/SmoothScroll";
import Interactions from "@/components/Interactions";
import {
  SITE_URL,
  BRAND_NAME,
  AUTHOR_NAME,
  META_TITLE,
  META_TITLE_TEMPLATE,
  META_DESC,
  OG_TITLE,
  OG_DESC,
  SEO_KEYWORDS,
  JSON_LD,
} from "@/lib/seoConfig";

// Body/UI: Geist · Display accents: Instrument Serif · Labels: Geist Mono
const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-code" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META_TITLE,
    template: META_TITLE_TEMPLATE,
  },
  description: META_DESC,
  keywords: SEO_KEYWORDS,
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${AUTHOR_NAME} - ${BRAND_NAME}`,
    title: OG_TITLE,
    description: OG_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "chybMc83QnIjIdfBYMCyOspibXAgrq8uWVwrZndVtqE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <SmoothScroll />
        <Interactions />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
