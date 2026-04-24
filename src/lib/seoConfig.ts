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
export const GITHUB_URL   = "https://github.com/pandyavraj234";
export const LINKEDIN_URL = "https://linkedin.com/in/pandyavraj234";

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
  `${AUTHOR_NAME} | Full Stack Developer | ${BRAND_NAME} — Surat, India`;

export const META_TITLE_TEMPLATE = `%s | ${BRAND_NAME}`;

export const META_DESC =
  `${AUTHOR_NAME} — Founder of ${BRAND_NAME}. Independent Full Stack Developer based in Surat, India. ` +
  `Available worldwide for Web Apps, Mobile Apps, CRM, ERP, SaaS, Fintech & Desktop Software. ` +
  `Expert in React, Next.js, Node.js, Flutter, Python. Let's build your next project.`;

export const OG_TITLE =
  `${AUTHOR_NAME} | Full Stack Developer | ${BRAND_NAME}`;

export const OG_DESC =
  `${AUTHOR_NAME} — Full Stack Developer & Founder of ${BRAND_NAME}. ` +
  `Based in Surat, India. Available worldwide. ` +
  `CRM, ERP, Web Apps, Mobile Apps, SaaS, Fintech — built with React, Next.js, Node.js, Laravel, PHP, Flutter, Python.`;

// ─── SEO Keywords ────────────────────────────────────────────────────────────
// Covers: Personal brand · Roles · Tech stack · Services · LOCAL · GLOBAL
export const SEO_KEYWORDS: string[] = [
  // ── Personal Brand ──────────────────────────────────────────────────────
  AUTHOR_NAME,
  `${AUTHOR_NAME} developer`,
  `${AUTHOR_NAME} portfolio`,
  BRAND_NAME,
  `hire ${AUTHOR_NAME}`,
  "pandyavraj234",
  "Vraj Dev Studio",

  // ── Roles ────────────────────────────────────────────────────────────────
  "Full Stack Developer",
  "Full Stack Web Developer",
  "Full Stack Developer India",
  "Independent Developer",
  "Founder Developer",
  "Freelance Full Stack Developer",
  "Freelance Web Developer",
  "Remote Full Stack Developer",
  "Hire Full Stack Developer",
  "Software Developer for Hire",
  "IT Freelancer",
  "Offshore Developer India",

  // ── Frontend Tech ────────────────────────────────────────────────────────
  "React Developer",
  "React.js Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "JavaScript Developer",
  "Frontend Developer",
  "Tailwind CSS Developer",
  "HTML CSS Developer",
  "Vue.js Developer",
  "UI Developer",

  // ── Backend Tech ─────────────────────────────────────────────────────────
  "Node.js Developer",
  "Node.js Backend Developer",
  "Express.js Developer",
  "Laravel Developer",
  "Laravel PHP Developer",
  "PHP Developer",
  "PHP Web Developer",
  "PHP Laravel Developer",
  "Backend Developer",
  "Backend Web Developer",
  "Python Developer",
  "Python Web Developer",
  "FastAPI Developer",
  "Django Developer",
  "REST API Developer",
  "GraphQL Developer",

  // ── Mobile Tech ──────────────────────────────────────────────────────────
  "Flutter Developer",
  "Flutter App Developer",
  "Dart Developer",
  "Flutter Mobile App Developer",
  "React Native Developer",
  "Mobile App Developer",
  "Cross Platform App Developer",
  "iOS App Developer",
  "Android App Developer",
  "Progressive Web App Developer",
  "PWA Developer",

  // ── Database Tech ─────────────────────────────────────────────────────────
  "MongoDB Developer",
  "PostgreSQL Developer",
  "MySQL Developer",
  "Firebase Developer",
  "Redis Developer",
  "Database Developer",
  "Database Design",

  // ── DevOps / Cloud ────────────────────────────────────────────────────────
  "Docker Developer",
  "AWS Developer",
  "Vercel Developer",
  "CI/CD Developer",
  "DevOps Engineer",
  "Cloud Developer",

  // ── Web Development Services ─────────────────────────────────────────────
  "Web Developer",
  "Web Application Development",
  "Custom Website Development",
  "Custom Web Application Developer",
  "Dynamic Website Developer",
  "Static Website Developer",
  "SEO Optimized Web Apps",
  "Responsive Web Design",
  "E-commerce Website Developer",
  "Admin Panel Development",
  "Dashboard Development",
  "UI UX Developer",

  // ── Desktop ───────────────────────────────────────────────────────────────
  "Desktop App Developer",
  "Desktop Application Development",
  "Electron.js Developer",
  "Windows App Developer",

  // ── CRM / ERP ─────────────────────────────────────────────────────────────
  "CRM Developer",
  "CRM Development",
  "Custom CRM Software",
  "ERP Developer",
  "ERP Development",
  "Business Software Development",
  "Enterprise Software Developer",
  "CRM Software India",
  "Custom ERP India",

  // ── Fintech ───────────────────────────────────────────────────────────────
  "Fintech Developer",
  "Payment Gateway Integration",
  "Razorpay Developer",
  "Stripe Developer",
  "HDFC Payment Integration",
  "Trading Bot Developer",
  "Python Trading Bot",
  "Algorithmic Trading Developer",
  "Stock Trading Bot Python",

  // ── SaaS / Product ───────────────────────────────────────────────────────
  "SaaS Developer",
  "SaaS Application Developer",
  "Multi-tenant SaaS Developer",
  "SaaS Product Development",
  "Software as a Service Developer",

  // ── Other Services ────────────────────────────────────────────────────────
  "IT Solutions",
  "API Development",
  "API Integration Developer",
  "WhatsApp API Integration",
  "Firebase Developer",
  "OpenAI API Integration",
  "Chatbot Developer",

  // ── LOCAL: Surat — Tech-specific ─────────────────────────────────────────
  "React Developer Surat",
  "Next.js Developer Surat",
  "Flutter Developer Surat",
  "PHP Developer Surat",
  "Laravel Developer Surat",
  "Python Developer Surat",
  "Node.js Developer Surat",
  "Full Stack Developer Surat",
  "Web Developer Surat",
  "Software Developer Surat",
  "App Developer Surat",
  "CRM Developer Surat",
  "Mobile App Developer Surat",
  "IT Company Surat",
  "IT Services Surat",
  "Website Development Surat",
  "Software Development Surat",
  "Web Design Surat",
  "IT Solutions Surat",
  "Freelance Developer Surat",
  "E-commerce Developer Surat",
  "ERP Software Surat",
  "CRM Software Surat",
  "Custom Software Surat",

  // ── LOCAL: Gujarat ────────────────────────────────────────────────────────
  "Full Stack Developer Gujarat",
  "React Developer Gujarat",
  "Flutter Developer Gujarat",
  "PHP Developer Gujarat",
  "Laravel Developer Gujarat",
  "Python Developer Gujarat",
  "Web Developer Gujarat",
  "Software Developer Gujarat",
  "IT Solutions Gujarat",
  "App Developer Gujarat",
  "Mobile App Developer Gujarat",

  // ── LOCAL: India ──────────────────────────────────────────────────────────
  "CRM Developer India",
  "Web Developer India",
  "Hire Developer India",
  "React Developer India",
  "Next.js Developer India",
  "Flutter Developer India",
  "Laravel Developer India",
  "PHP Developer India",
  "Python Developer India",
  "Node.js Developer India",
  "Software Development India",
  "IT Outsourcing India",
  "Affordable Web Development India",
  "Best Developer India",
  "Full Stack Developer India",

  // ── GLOBAL — Tech-specific ────────────────────────────────────────────────
  "Hire Developer Worldwide",
  "Remote Software Developer",
  "Global IT Solutions",
  "Offshore Software Development",
  "React Developer USA",
  "Flutter Developer USA",
  "Laravel PHP Developer USA",
  "Next.js Developer USA",
  "React Developer UK",
  "Flutter Developer UK",
  "PHP Laravel Developer UK",
  "React Developer Australia",
  "Flutter Developer Australia",
  "Node.js Developer Australia",
  "React Developer Canada",
  "PHP Developer Canada",
  "React Developer UAE",
  "Flutter Developer UAE",
  "Laravel Developer UAE",
  "React Developer Singapore",
  "Flutter Developer Singapore",
  "Freelance React Developer",
  "Freelance Flutter Developer",
  "Freelance Laravel Developer",
  "Freelance PHP Developer",
  "Freelance Python Developer",
  "Freelance Node.js Developer",
  "Hire React Developer",
  "Hire Flutter Developer",
  "Hire Laravel Developer",
  "Hire PHP Developer",
  "Hire Python Developer",
  "Hire Node.js Developer",
  "Hire Next.js Developer",
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
      "image": `${SITE_URL}/og-image.png`,
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
      "logo": `${SITE_URL}/og-image.png`,
      "image": `${SITE_URL}/og-image.png`,
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
        {
          "@type": "Place",
          "name": `${LOCATION.city}, ${LOCATION.state}, ${LOCATION.country}`,
        },
        {
          "@type": "Place",
          "name": "Worldwide",
        },
      ],
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
