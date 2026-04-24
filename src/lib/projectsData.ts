export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  fullDescription: string;
  challenges: string;
  outcome: string;
  tech: string[];
  images: string[];
  gradient: string;
  github: string;
  live: string;
  featured: boolean;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "insight-ai-content-platform",
    title: "Insight – AI Content Platform",
    tagline: "AI-powered blog & report generation with full admin control",
    category: "Web App",
    description:
      "Full-featured content platform with AI-powered report & blog generation, admin panel with analytics, SEO optimization, and automated content management. Built with Next.js and Node.js.",
    fullDescription: `Insight is a production-grade AI content platform designed to help businesses automate their content strategy. The platform uses OpenAI's API to generate SEO-optimized blog posts, detailed reports, and marketing copy — all from a single admin dashboard.

The admin panel provides a complete content management system with rich text editing, AI prompt customization, post scheduling, and category management. Each piece of content is automatically optimized for search engines with meta tags, structured data, and keyword density analysis built in.

The backend is built on Node.js with Express, connecting to MongoDB for content storage and Redis for caching. The frontend is a Next.js App Router application with server-side rendering ensuring every page is indexable by search engines from the first request.

Key features include: real-time AI content generation with streaming responses, multi-user role management (Super Admin / Editor / Viewer), analytics dashboard showing traffic, engagement, and content performance, automated sitemap generation, image optimization via Cloudinary, and a REST API for third-party integrations.`,
    challenges: `The biggest challenge was managing AI response streaming in a Next.js server component architecture while keeping the UX smooth. We solved this using React Suspense with streaming APIs. Another challenge was ensuring generated content was always SEO-ready — we built a post-processing pipeline that scores and rewrites content based on readability, keyword density, and semantic relevance before saving.`,
    outcome: `Delivered a fully functional AI content platform that reduced content creation time by 80%. The client's organic traffic grew 3x within 3 months of launch due to the volume and quality of AI-generated, SEO-optimized content.`,
    tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Redis", "Cloudinary", "TypeScript", "Tailwind CSS"],
    images: ["/projects/insight.png", "/projects/insight-2.png", "/projects/insight-3.png"],
    gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    slug: "roadrescue-towing-app",
    title: "RoadRescue – Real-Time Towing App",
    tagline: "On-demand towing with real-time driver matching",
    category: "Mobile App",
    description:
      "On-demand towing service app where users find nearby towing providers in real time. Requests broadcast to nearby drivers; first to accept gets the job. Built with Flutter & Laravel.",
    fullDescription: `RoadRescue is an Uber-like on-demand towing application built for the roadside assistance industry. When a user's vehicle breaks down, they open the app, drop a pin, and the system instantly broadcasts their request to all available towing providers within a configurable radius.

The driver app and user app are both built in Flutter, sharing a common component library for UI consistency. The backend is a Laravel REST API with real-time WebSocket communication handled by Laravel Echo and Pusher, ensuring sub-second delivery of requests to drivers.

Location tracking is powered by Google Maps SDK with real-time route drawing, showing the user exactly where their driver is and the estimated arrival time. The system handles edge cases like driver cancellation (auto-reassigns to the next available driver), connection drops (WebSocket reconnection with missed event replay), and surge pricing during high demand.

Additional features include: in-app chat between user and driver, ride history, driver rating system, admin dashboard for fleet management, automated invoicing via PDF generation, and SMS/push notifications via Firebase.`,
    challenges: `Real-time driver matching at scale was the core challenge. We implemented a geospatial query system using MySQL's spatial indexes and a pub/sub queue to ensure no two users get the same driver simultaneously. Flutter's isolates were used to keep the location tracking running even when the app is backgrounded.`,
    outcome: `Successfully deployed with 50+ registered towing companies. Average driver response time under 3 minutes. The client reported a 60% improvement in job dispatch efficiency compared to their previous phone-based system.`,
    tech: ["Flutter", "Laravel", "Google Maps API", "WebSocket", "Firebase", "Pusher", "MySQL", "PHP"],
    images: ["/projects/roadrescue.png", "/projects/roadrescue-2.png", "/projects/roadrescue-3.png"],
    gradient: "linear-gradient(135deg, #f7971e 0%, #e53935 100%)",
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
    role: "Full Stack Developer (Flutter + Laravel)",
  },
  {
    id: 3,
    slug: "edusphere-school-management",
    title: "EduSphere – School Management System",
    tagline: "Global SaaS managing multiple schools from one admin panel",
    category: "SaaS",
    description:
      "Global-level SaaS for school management. Super admin handles multiple schools; features include MCQ-based games, exam paper generation, teacher management, student tracking, and results.",
    fullDescription: `EduSphere is a comprehensive school management SaaS platform built for educational institutions at any scale — from single schools to large multi-school groups managed by a global super admin.

The platform operates on a three-tier role hierarchy: Global Super Admin (manages all schools, billing, and platform settings), School Admin (manages their school's teachers, students, and curriculum), and Teachers/Parents (day-to-day use for classes, assignments, and progress tracking).

The exam module is particularly powerful — teachers can build question banks, generate randomized MCQ papers, set time limits, and the system auto-grades and generates performance reports. There's also a gamified MCQ practice mode where students earn points and compete on leaderboards, increasing engagement significantly.

Student tracking covers attendance, grades, assignments, fee payments, and behavioral notes. The parent portal gives real-time visibility into their child's performance, upcoming exams, and fee dues. The fee management module handles multi-installment plans, automated reminders, and generates payment receipts.`,
    challenges: `Multi-tenancy architecture was the critical design challenge — ensuring complete data isolation between schools while keeping infrastructure costs manageable. We used a shared database with school_id-based row-level security and Redis-based session scoping to achieve this efficiently.`,
    outcome: `Platform manages 15+ schools with 5,000+ active students. Exam result processing time reduced from 2 days (manual) to real-time automatic grading. Parent engagement increased 4x after introducing the mobile parent portal.`,
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Redis", "Socket.io", "JWT", "Razorpay"],
    images: ["/projects/edusphere.png", "/projects/edusphere-2.png", "/projects/edusphere-3.png"],
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    github: "#",
    live: "#",
    featured: true,
    year: "2023",
    role: "Full Stack Developer & System Architect",
  },
  {
    id: 4,
    slug: "payment-gateway-suite",
    title: "Payment Gateway Integration Suite",
    tagline: "Razorpay, Apple Pay, Amex, HDFC & Fasthub across multiple projects",
    category: "Fintech",
    description:
      "Integrated multiple payment gateways across projects — Razorpay, Apple Pay, Amex, HDFC, and Fasthub. Covers checkout flows, webhook handling, refunds, and subscription billing.",
    fullDescription: `Across multiple client projects, I have built and integrated a comprehensive suite of payment gateway solutions handling everything from simple one-time payments to complex recurring subscription billing.

Razorpay integration spans UPI, net banking, cards, and EMI options with Razorpay Subscriptions for automated recurring billing. Apple Pay was integrated for iOS-first e-commerce clients using the Payment Request API with server-side session validation compliant with Apple's merchant verification requirements.

HDFC SmartGateway integration was built for enterprise clients needing bank-grade payment infrastructure with 3D Secure authentication, multi-currency support, and NPCI compliance. Amex integration covers corporate card acceptance with enhanced data Level 2/3 for B2B clients.

Fasthub (fast checkout) was integrated as a one-click checkout solution reducing cart abandonment. Each gateway integration includes: secure server-side signature verification, idempotent webhook processing to prevent duplicate transactions, automatic retry logic for failed payments, and a unified transaction dashboard reconciling payments across all gateways.`,
    challenges: `The hardest part was building a single abstraction layer that works consistently across all gateways — each has different webhook formats, signature algorithms, and error codes. We built a gateway adapter pattern that normalizes all events into a unified transaction object, so the business logic never needs to know which gateway was used.`,
    outcome: `Zero payment processing incidents across all integrated projects. Combined transaction volume exceeds ₹2Cr monthly. Webhook reliability at 99.99% with idempotency handling preventing any duplicate charges.`,
    tech: ["Node.js", "Razorpay SDK", "Apple Pay JS", "HDFC API", "Amex API", "Fasthub", "Express", "PostgreSQL"],
    images: ["/projects/payments.png", "/projects/payments-2.png", "/projects/payments-3.png"],
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2023–2024",
    role: "Backend Developer",
  },
  {
    id: 5,
    slug: "algotrade-python-bot",
    title: "AlgoTrade – Python Trading Bot",
    tagline: "Automated stock trading bot with AngelOne API integration",
    category: "Fintech",
    description:
      "Fully automated stock trading bot using AngelOne API. Users set buy/sell targets; the bot monitors the market and executes trades automatically. Built entirely in Python.",
    fullDescription: `AlgoTrade is a fully automated algorithmic trading system built entirely in Python, integrated with the AngelOne SmartAPI for live NSE/BSE market data and order execution.

Users configure their trading strategy through a clean web interface — selecting stocks, setting entry price, target price, stop-loss, and quantity. The bot then runs continuously during market hours, monitoring real-time tick data via WebSocket, and executes buy/sell orders automatically when the configured conditions are met.

The system supports multiple concurrent strategies across different scrips. Each strategy runs in its own Python thread, and a central order manager ensures position limits and capital allocation rules are respected across all simultaneous strategies.

Risk management is built in: maximum loss per day (auto-shuts trading for the day if hit), position sizing based on available capital, and automatic square-off of all open positions at 3:20 PM. A detailed trade log with P&L calculation is maintained and exportable as CSV/Excel.

The backend is a FastAPI server with a React dashboard showing live portfolio value, open positions, today's P&L, trade history, and bot status per strategy.`,
    challenges: `WebSocket tick data arrives at extremely high frequency during volatile markets. Python's GIL was a constraint — we solved this using asyncio for the data ingestion layer and multiprocessing for strategy execution, keeping latency under 50ms from tick to order.`,
    outcome: `Successfully backtested against 2 years of historical data showing consistent outperformance. Live deployment running on a VPS with 99.9% uptime during market hours. Users reported an average 15–20% improvement in trade execution precision vs manual trading.`,
    tech: ["Python", "FastAPI", "AngelOne SmartAPI", "WebSocket", "asyncio", "Pandas", "NumPy", "React", "PostgreSQL"],
    images: ["/projects/algotrade.png", "/projects/algotrade-2.png", "/projects/algotrade-3.png"],
    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer (Python + React)",
  },
  {
    id: 6,
    slug: "sporthub-club-management",
    title: "SportHub – Club & Training Management",
    tagline: "All-in-one platform for sports clubs, coaches, and parents",
    category: "SaaS",
    description:
      "All-in-one sports club platform — training centers, coaches by sport, parent-child registration, chat, monthly fee management, shop, garden booking, and an integrated website builder.",
    fullDescription: `SportHub is an all-in-one sports club management platform designed to digitize and streamline every aspect of running a sports club — from registrations to revenue.

The platform connects four types of users: Club Admins, Training Centers, Coaches, and Parents. A club can have multiple training centers, each center has coaches assigned to specific sports (cricket, football, swimming, etc.), and parents browse and register their children for specific sport programs under specific coaches.

The chat module enables direct communication between parents and coaches, with group chat channels per sport batch. Monthly fee management supports installment plans, automated WhatsApp/SMS payment reminders, and generates branded receipts. A built-in shop lets clubs sell sports equipment, jerseys, and merchandise directly to members.

The garden/ground booking module allows clubs to rent out their facilities — members can see real-time slot availability and book specific courts or grounds by the hour. The crown feature is the drag-and-drop website builder that lets clubs create their own professional website within minutes, fully customizable with their branding, program listings, and contact forms.`,
    challenges: `Designing a permission system flexible enough to handle the club → training center → coach → parent/child hierarchy while keeping the UX simple for non-technical club managers was the core challenge. We iterated through 3 permission model designs before settling on a policy-based approach using Casbin.`,
    outcome: `Platform adopted by 8 sports clubs managing 1,200+ active student registrations. Monthly fee collection digitized completely — zero manual tracking. Club websites built by non-technical admins within 20 minutes using the builder.`,
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Razorpay", "TypeScript", "Casbin", "AWS S3"],
    images: ["/projects/sporthub.png", "/projects/sporthub-2.png", "/projects/sporthub-3.png"],
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & Product Designer",
  },
  {
    id: 7,
    slug: "mediglobal-doctor-platform",
    title: "MediGlobal – Worldwide Doctor Platform",
    tagline: "Global telemedicine with webinars, slot booking & real-time chat",
    category: "Web App",
    description:
      "Global telemedicine platform connecting patients with doctors worldwide. Features country-wise doctor listing, webinar hosting, slot booking, real-time chat, and appointment management.",
    fullDescription: `MediGlobal is a global telemedicine platform designed to break down geographical barriers in healthcare, connecting patients with specialist doctors from any country in the world.

Patients browse doctors filtered by country, specialty, language, and availability. Each doctor has a detailed profile with credentials, specialties, consultation fees, patient reviews, and available time slots displayed in the patient's local timezone (automatic timezone conversion powered by Intl API).

The slot booking system supports both instant consultations (join a waiting queue) and scheduled appointments (book a future slot). Video consultations are powered by WebRTC with a custom signaling server, providing end-to-end encrypted video calls without any third-party dependency.

The webinar module allows doctors to host live medical education sessions for up to 500 concurrent viewers. Patients can register, join via browser with no app install, ask questions via live chat, and access the recording afterwards. This was a major differentiator — doctors monetize their expertise beyond 1-on-1 consultations.

Additional features: in-app chat (pre and post consultation), prescription generation as PDF, appointment reminders via email/WhatsApp, admin panel for managing doctors, payouts to doctors in multiple currencies, and HIPAA-conscious data architecture with encrypted patient records.`,
    challenges: `Multi-timezone slot management was extremely tricky — a doctor in London can have a patient in Tokyo, and both need to see slots in their own timezone with no confusion. We built a timezone-aware calendar engine that stores all slots in UTC and renders them client-side in the viewer's local timezone, with edge case handling for DST changes.`,
    outcome: `Platform live with 200+ registered doctors across 18 countries. 1,500+ consultations completed. Average patient satisfaction score of 4.8/5. The webinar feature became the highest-revenue module, with some doctors earning more from webinars than 1-on-1 consultations.`,
    tech: ["React", "Node.js", "WebRTC", "Socket.io", "PostgreSQL", "TypeScript", "Stripe", "AWS", "Redis"],
    images: ["/projects/mediglobal.png", "/projects/mediglobal-2.png", "/projects/mediglobal-3.png"],
    gradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & System Architect",
  },
  {
    id: 8,
    slug: "caterease-catering-platform",
    title: "CaterEase – Catering & Food Order Platform",
    tagline: "Dynamic catering website with WhatsApp ordering & admin-controlled menu pricing",
    category: "Web App",
    description:
      "Full-featured catering business website with dynamic menu management, WhatsApp direct ordering, admin panel for dish/vegetable/grocery pricing, quotation builder, and order tracking.",
    fullDescription: `CaterEase is a dynamic catering business platform built to modernize how catering companies manage their menu, pricing, and client orders. The entire menu — including dish prices, vegetable rates, and grocery items — is controlled in real time through the admin panel, so price changes reflect instantly on the live website without any developer involvement.

Clients visiting the website can browse the full food menu organized by category (Starters, Main Course, Desserts, Beverages, Thali Packages), see per-person or per-dish pricing, and directly place inquiries or orders. Each menu item links to a WhatsApp chat with the caterer, pre-filling the order details so the caterer never misses a lead.

The quotation module is the core business feature — clients fill in their event details (event type, number of guests, venue, date, menu selection) and the system instantly generates a branded PDF quotation with itemized pricing. Caterers can accept, revise, or reject quotations from the admin panel, and the client receives automated WhatsApp/email notifications at each stage.

Order management tracks active catering orders from confirmation to delivery, with status updates (Confirmed → Preparation → Dispatch → Delivered). The admin panel also manages staff assignments per order, inventory tracking for raw materials, and a revenue dashboard showing monthly earnings, popular dishes, and repeat clients.

SEO-optimized pages for every cuisine category and service area ensure the caterer ranks on Google for local searches like "catering service near me" and "wedding catering Surat".`,
    challenges: `The dynamic pricing system required real-time sync between the admin panel and the live website without page reloads. We used a combination of server-sent events (SSE) for price broadcasting and Redis caching so the website always serves fresh prices with sub-100ms latency. The PDF quotation engine handles complex multi-tier pricing (per-plate vs. per-dish vs. package pricing) dynamically based on admin configuration.`,
    outcome: `Client's catering business saw 3x increase in online inquiries within 2 months of launch. WhatsApp ordering integration eliminated phone call dependency — 70% of orders now come through the website. Quotation turnaround time reduced from 24 hours to instant.`,
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay", "WhatsApp Business API", "Redis", "Puppeteer (PDF)", "Tailwind CSS"],
    images: ["/projects/caterease.png", "/projects/caterease-2.png", "/projects/caterease-3.png"],
    gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: 9,
    slug: "beatstream-music-channel-app",
    title: "BeatStream – Music Channel App",
    tagline: "Premium music streaming app with category-wise tracks & full admin control",
    category: "Web App",
    description:
      "Music channel app for an independent music creator. Features category-wise music library, free previews with premium unlock, subscription billing, and a complete admin panel to manage tracks, categories, and subscribers.",
    fullDescription: `BeatStream is a branded music streaming application built for an independent music producer who creates tracks across multiple genres. The app gives the artist a direct-to-fan distribution channel — no Spotify middleman — with full control over pricing, content, and subscriber relationships.

The music library is organized into categories (Lo-Fi Beats, Hip-Hop, Classical Fusion, EDM, Meditation, Cinematic) with each category having a thumbnail, description, and track list. Free users can preview the first 30 seconds of any track; premium subscribers get unlimited full-track streaming and offline download access.

Subscription management is handled via Razorpay Subscriptions with monthly and annual plan options. The system auto-revokes access on payment failure and sends renewal reminders 3 days before expiry. Subscribers receive a welcome email with their login credentials and a personalized "Your Music Dashboard" showing their listening history and favorites.

The admin panel gives the artist complete control: upload new tracks (auto-compressed and stored on AWS S3), create/edit categories, set featured tracks, view subscriber analytics (new vs. churned, revenue by plan, most-played tracks), and send broadcast push notifications to all premium users.

The app is built as a Progressive Web App (PWA), meaning users can install it on their phone from the browser without going through an app store — reducing friction and cost significantly for the creator.`,
    challenges: `Audio streaming required careful implementation to prevent content piracy — we serve audio via signed time-limited S3 URLs that expire every 15 minutes, making direct URL sharing useless. The offline download feature for premium users encrypts the audio file locally using AES-256 with a device-bound key, so downloaded tracks can only play within the app on the original device.`,
    outcome: `Artist onboarded 800+ subscribers within the first month of launch. Monthly recurring revenue established at ₹45,000/month from subscriptions. The admin panel empowered the artist to manage everything independently — zero post-launch developer dependency.`,
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "Razorpay Subscriptions", "PWA", "Firebase FCM", "TypeScript", "FFmpeg"],
    images: ["/projects/beatstream.png", "/projects/beatstream-2.png", "/projects/beatstream-3.png"],
    gradient: "linear-gradient(135deg, #360033 0%, #0b8793 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: 10,
    slug: "propvista-real-estate-platform",
    title: "PropVista – Real Estate Platform",
    tagline: "Dynamic property listing website with lead management & admin panel",
    category: "Web App",
    description:
      "SEO-optimized real estate website with dynamic property listings, advanced search filters, virtual tour support, inquiry lead management, and a full admin panel for property and agent management.",
    fullDescription: `PropVista is a full-featured dynamic real estate platform built for a property dealer/agency. Every aspect of the site — properties, pricing, amenities, agent profiles, testimonials — is managed through the admin panel, making it completely self-sufficient without developer intervention.

Property listings support rich content: multiple high-resolution images per property, 360° virtual tour embed support, detailed specifications (BHK, area, floor, facing direction, furnishing status), location map embed, nearby facilities (schools, hospitals, malls), RERA registration number, and EMI calculator. Each listing is individually SEO-optimized with unique meta titles, descriptions, and structured data (JSON-LD) for Google Rich Results.

The advanced search and filter system lets buyers filter by property type (Apartment, Villa, Plot, Commercial), city/locality, price range, BHK configuration, ready-to-move vs. under-construction, and possession date. Search results are paginated and sortable by price, date, and popularity.

The lead management system captures every inquiry with source tracking (which property page, which CTA button). Leads are automatically assigned to agents based on property location, and follow-up reminders are set. The admin dashboard shows a full lead funnel — New → Contacted → Site Visit Scheduled → Negotiation → Closed.

Agent profiles, testimonials, blog/news section, and a neighborhood guide for each area improve organic search rankings and build buyer trust.`,
    challenges: `SEO for real estate requires hyper-local targeting — we generated unique dynamic pages for every locality, property type, and BHK combination (e.g., "2BHK Flats in Vesu Surat"), creating hundreds of targeted landing pages automatically from the database. The EMI calculator required integrating live interest rate data from an RBI API feed.`,
    outcome: `Website ranked on Google Page 1 for 40+ local real estate keywords within 3 months. Monthly organic leads increased from 0 to 120+. Client closed 15 property deals directly attributable to online leads in the first quarter.`,
    tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "TypeScript", "Tailwind CSS", "Google Maps API", "Schema.org JSON-LD"],
    images: ["/projects/propvista.png", "/projects/propvista-2.png", "/projects/propvista-3.png"],
    gradient: "linear-gradient(135deg, #1a3a5c 0%, #2196f3 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & SEO Architect",
  },
  {
    id: 11,
    slug: "fitzone-gym-management",
    title: "FitZone – Gym Management Platform",
    tagline: "Dynamic gym website with online membership, class scheduling & admin panel",
    category: "Web App",
    description:
      "Complete gym business website with online membership enrollment, class schedule management, trainer profiles, attendance tracking, diet plan sharing, and a full admin panel for managing members and revenue.",
    fullDescription: `FitZone is a dynamic gym management platform that combines a public-facing marketing website with a fully functional gym management backend — built specifically for fitness centers that want to move beyond WhatsApp groups and paper registers.

The public website showcases the gym's facilities, transformation stories, trainer profiles, membership plans, and class schedule. Visitors can sign up for a membership online, choose their plan (Monthly/Quarterly/Annual), and complete payment through Razorpay — the membership card is emailed to them instantly.

The member portal lets gym members view their attendance history, remaining membership days, assigned trainer, current diet plan (uploaded as PDF by trainer), and upcoming classes they're booked for. Push notifications remind members about upcoming class bookings and membership renewal.

The class scheduling module allows admins to create classes (Zumba, CrossFit, Yoga, Cardio), assign trainers, set capacity limits, and open booking slots. Members book classes online; the system auto-waitlists when a class is full and notifies members if a spot opens up.

The admin panel handles everything: member registration and renewals, payment records and dues, attendance marking via QR code (members scan at entrance), trainer management, diet plan assignment, and a revenue dashboard tracking monthly membership revenue, new enrollments, and churn.`,
    challenges: `The QR code attendance system needed to work reliably even with poor internet connectivity in the gym. We built an offline-first PWA for the reception desk that queues attendance scans locally and syncs to the server when connectivity resumes, ensuring zero data loss during network outages.`,
    outcome: `Gym eliminated paper registers and WhatsApp chaos completely. Member renewal reminders reduced lapsed memberships by 40%. Online membership sales generated ₹1.8L revenue in the first 3 months without any in-person follow-up.`,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Firebase FCM", "QR Code", "PWA", "Tailwind CSS", "Chart.js"],
    images: ["/projects/fitzone.png", "/projects/fitzone-2.png", "/projects/fitzone-3.png"],
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #ff6a00 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: 12,
    slug: "fabricsurat-cloth-marketplace",
    title: "FabricSurat – Cloth & Textile Marketplace",
    tagline: "Dynamic cloth & textile website for Surat's fabric market with WhatsApp ordering",
    category: "Web App",
    description:
      "SEO-optimized dynamic cloth and textile marketplace for Surat's fabric industry. Features product catalog with fabric categories, wholesale/retail pricing, sample request system, WhatsApp ordering, and a complete admin panel.",
    fullDescription: `FabricSurat is a dynamic digital storefront built for a Surat-based cloth and textile trader, targeting both wholesale buyers (other businesses) and retail customers searching for fabrics online. Surat is India's largest textile hub, and this platform is designed to capture the growing demand for online fabric sourcing.

The product catalog is organized by fabric type (Saree, Suit Material, Lehenga Fabric, Dress Material, Running Fabric, Dupatta), material (Silk, Georgette, Chiffon, Cotton, Linen, Net), and occasion (Casual, Wedding, Party, Ethnic). Each product has multiple images, fabric specifications (GSM, width, composition), available colors, minimum order quantity (MOQ), and both wholesale and retail pricing.

The pricing system differentiates between B2B and B2C customers — registered wholesale buyers see trade prices after verification, while retail customers see MRP. Sample requests allow buyers to request fabric swatches (with a small sample fee) before placing bulk orders.

WhatsApp ordering is the primary checkout flow: clicking "Order via WhatsApp" opens a pre-filled message with product name, variant, and quantity, connecting the buyer directly with the sales team. For larger orders, the platform generates formal quotation PDFs.

The admin panel manages the full product catalog — add/edit/delete products, update prices, manage stock availability, handle sample requests, and view inquiry analytics. The website is fully SEO-optimized targeting keywords like "wholesale fabric Surat", "saree material online Surat", and "cloth manufacturer Gujarat".`,
    challenges: `The dual pricing system (wholesale vs. retail) required a robust user verification flow for B2B buyers without creating friction for retail customers. We implemented a quick business verification form that checks GSTIN via the government's API, automatically unlocking wholesale pricing for verified businesses within minutes.`,
    outcome: `Client started receiving online inquiries from buyers across India and internationally within 6 weeks of launch. WhatsApp inquiry volume increased 5x compared to their previous static website. Ranked on Google Page 1 for "wholesale saree fabric Surat" within 2 months.`,
    tech: ["Next.js", "Node.js", "MongoDB", "WhatsApp Business API", "Cloudinary", "GSTIN API", "Razorpay", "Tailwind CSS"],
    images: ["/projects/fabricsurat.png", "/projects/fabricsurat-2.png", "/projects/fabricsurat-3.png"],
    gradient: "linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & SEO Specialist",
  },
  {
    id: 13,
    slug: "diamondcrm-surat-trader-software",
    title: "DiamondCRM – Diamond & Dying Printing Trader Software",
    tagline: "Complete CRM & accounting software for Surat's diamond and textile printing traders",
    category: "CRM",
    description:
      "End-to-end CRM and account management software built for Surat's diamond and dying/printing textile traders. Manages clients, stock, ledger accounts, quotations, invoices, outstanding payments, and business analytics.",
    fullDescription: `DiamondCRM is a purpose-built CRM and accounting software designed for two of Surat's most prominent industries: diamond trading and dying/printing textile trading. Both industries share a common operational challenge — managing hundreds of client relationships, complex stock transactions, credit-based trading, and scattered account records across WhatsApp and physical ledgers.

The CRM module centralizes all client data: contact details, trading history, credit limit, outstanding balance, and communication logs. Relationship managers can log every client interaction (call, meeting, order) and set follow-up reminders. The client 360° view shows everything about a client — all past orders, payments received, pending dues, and a relationship health score.

The stock management module tracks inventory in real time. For diamond traders, it handles lots with 4C specifications (Cut, Color, Clarity, Carat), pricing per carat, and memo/consignment tracking. For dying/printing traders, it tracks fabric rolls by design code, color, weight, and GSM with a visual sample image.

The accounting module replaces physical ledgers with a digital double-entry bookkeeping system. It generates account statements, tracks receivables and payables, records payments against invoices, and calculates outstanding balances per client. Aging reports show which clients have dues past 30, 60, and 90 days.

Quotations are generated as professional branded PDFs with one click, converting to tax invoices upon acceptance. GST-compliant invoicing with automatic CGST/SGST/IGST calculation based on the buyer's state. The dashboard shows daily collection targets, pending follow-ups, top clients by revenue, and cash flow projections.`,
    challenges: `Diamond trading uses industry-specific terminology and workflows that don't map to generic CRM systems. We conducted extensive discovery sessions with the client to map their exact workflow — from memo issuance to consignment return to sale confirmation — and built a custom pipeline that mirrors their physical process exactly, ensuring zero learning curve for the team.`,
    outcome: `Trading firm migrated 5 years of historical data into the system. Outstanding payment recovery improved significantly — aging report visibility helped recover ₹12L in dues within the first 2 months. The team of 8 now operates completely paperlessly, with all client data accessible from any device.`,
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript", "Razorpay", "Puppeteer (PDF)", "Chart.js", "JWT", "Express"],
    images: ["/projects/diamondcrm.png", "/projects/diamondcrm-2.png", "/projects/diamondcrm-3.png"],
    gradient: "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & Business Analyst",
  },
];

export const categories = ["All", "Web App", "Mobile App", "SaaS", "Fintech", "Python", "CRM"];
