/**
 * ─── Global SEO Configuration ───────────────────────────────────────────────
 * Single source of truth for all metadata, keywords, and structured data.
 * Targets both LOCAL (Surat, Gujarat, India) and GLOBAL (worldwide remote).
 *
 * To update brand / contact info, edit the constants at the top.
 * Layout and pages import from here — one change reflects everywhere.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Brand & Contact Constants ───────────────────────────────────────────────
export const SITE_URL     = "https://vrajpandya.vercel.app";
export const BRAND_NAME   = "Vraj Dev Studio";
export const AUTHOR_NAME  = "Vraj Pandya";
export const AUTHOR_TITLE = "Full Stack Developer & Founder";
export const AUTHOR_EMAIL = "pandyavraj234@gmail.com";
export const WHATSAPP_NUM = "+919726053886";
export const GITHUB_URL   = "https://github.com/backendbyvraj";
export const LINKEDIN_URL = "https://www.linkedin.com/in/pandya-vraj-b800b819b";

/** Year Vraj started working professionally; experience is counted from here. */
export const CAREER_START_YEAR = 2022;

/** Whole years since CAREER_START_YEAR, shown as "N+ years". */
export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR;
}

export const LOCATION = {
  city:        "Surat",
  state:       "Gujarat",
  postalCode:  "395001",
  country:     "India",
  countryCode: "IN",
  lat:         "21.1702",
  lng:         "72.8311",
};

// ─── Meta Title & Description ────────────────────────────────────────────────
export const META_TITLE =
  `Web Developer in Surat | Website, App & CRM Development — ${AUTHOR_NAME}`;

export const META_TITLE_TEMPLATE = `%s | ${BRAND_NAME}`;

export const META_DESC =
  `Freelance full stack developer in Surat, India. I build business websites, web apps, ` +
  `mobile apps and custom CRM software with Next.js, React, Laravel & Flutter. Free quote within 24 hours.`;

export const OG_TITLE =
  `${AUTHOR_NAME} | Full Stack Developer | ${BRAND_NAME}`;

export const OG_DESC =
  `${AUTHOR_NAME} — Full Stack Developer & Founder of ${BRAND_NAME}. ` +
  `Based in Surat, India. Available worldwide. ` +
  `CRM, ERP, Web Apps, Mobile Apps, SaaS, Fintech — built with React, Next.js, Node.js, Laravel, PHP, Flutter, Python.`;

// ─── SEO Keywords ────────────────────────────────────────────────────────────
// Covers: Personal brand · Roles · Tech stack · Services · LOCAL · GLOBAL
// Google ignores the keywords meta tag for ranking, so this list is kept short
// and only mirrors the phrases the page copy actually targets. Rankings come
// from titles, headings, body text and backlinks — not from this array.
export const SEO_KEYWORDS: string[] = [
  AUTHOR_NAME,
  BRAND_NAME,
  "web developer in Surat",
  "website development Surat",
  "website designer Surat",
  "app developer Surat",
  "CRM software developer Surat",
  "custom CRM development India",
  "freelance full stack developer India",
  "hire Next.js developer India",
  "hire React developer India",
  "Laravel developer India",
  "Flutter app developer India",
  "business website development",
  "ecommerce website development",
  "school management software developer",
  "payment gateway integration Razorpay",
  "AI chatbot integration for business",
  // Worldwide / remote clients
  "hire web developer in India",
  "offshore web development India",
  "remote full stack developer India",
  "freelance Next.js developer for startups",
];

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
// Google reads this to understand: who you are, where you're based, what you do.
// Person schema  → personal brand / author credibility
// ProfessionalService schema → local business + worldwide service area
export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": AUTHOR_NAME,
      "jobTitle": AUTHOR_TITLE,
      "description": META_DESC,
      "url": SITE_URL,
      "telephone": WHATSAPP_NUM,
      "email": AUTHOR_EMAIL,
      "image": `${SITE_URL}/opengraph-image`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": LOCATION.city,
        "addressRegion": LOCATION.state,
        "postalCode": LOCATION.postalCode,
        "addressCountry": LOCATION.countryCode,
      },
      "sameAs": [
        GITHUB_URL,
        LINKEDIN_URL,
        `https://wa.me/91${WHATSAPP_NUM.replace("+91", "")}`,
      ],
      "knowsAbout": [
        "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
        "Flutter", "Dart", "PHP", "Laravel",
        "Python", "FastAPI",
        "MongoDB", "PostgreSQL", "MySQL", "Redis",
        "CRM Development", "ERP Systems", "SaaS", "Fintech",
        "REST API", "GraphQL", "WebRTC", "Socket.io",
        "Docker", "AWS", "Vercel", "Tailwind CSS",
        "Razorpay", "Stripe", "Firebase", "OpenAI API",
      ],
      "worksFor": { "@id": `${SITE_URL}/#studio` },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "City",
          "name": "Surat",
        },
        "skills": "React, Next.js, Node.js, Flutter, Python, CRM, ERP",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#studio`,
      "name": BRAND_NAME,
      "description":
        `${BRAND_NAME} — independent software development studio by ${AUTHOR_NAME}. ` +
        `Delivering web apps, mobile apps, CRM, ERP, SaaS, fintech solutions to clients in Surat, India, and worldwide.`,
      "founder": { "@id": `${SITE_URL}/#person` },
      "url": SITE_URL,
      "telephone": WHATSAPP_NUM,
      "email": AUTHOR_EMAIL,
      "logo": `${SITE_URL}/icon.png`,
      "image": `${SITE_URL}/opengraph-image`,
      "priceRange": "$$",
      "currenciesAccepted": "INR, USD, GBP, AUD, EUR",
      "paymentAccepted": "Bank Transfer, PayPal, Razorpay, Wise",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Surat",
        "addressLocality": LOCATION.city,
        "addressRegion": LOCATION.state,
        "postalCode": LOCATION.postalCode,
        "addressCountry": LOCATION.countryCode,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": LOCATION.lat,
        "longitude": LOCATION.lng,
      },
      "hasMap": `https://maps.google.com/?q=${LOCATION.city},${LOCATION.state},${LOCATION.country}`,
      "openingHours": "Mo-Sa 09:00-19:00",
      "areaServed": [
        { "@type": "City", "name": LOCATION.city },
        { "@type": "State", "name": LOCATION.state },
        { "@type": "Country", "name": LOCATION.country },
        { "@type": "Place", "name": "Worldwide (remote)" },
      ],
      "knowsLanguage": ["English", "Hindi", "Gujarati"],
      "serviceType": [
        "Full Stack Web Development",
        "Mobile App Development",
        "CRM Development",
        "ERP Development",
        "SaaS Development",
        "Fintech Solutions",
        "Desktop Application Development",
        "API Development & Integration",
        "UI/UX Design & Development",
      ],
      "sameAs": [GITHUB_URL, LINKEDIN_URL],
    },
  ],
};
