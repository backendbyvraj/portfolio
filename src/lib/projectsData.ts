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
  /** Client industry, shown as a label and used in page SEO. */
  industry: string;
  /** Search-intent phrases a client would type; rendered as tags and meta keywords. */
  tags: string[];
  /** Short result chips — must only restate facts from `outcome`. */
  results: string[];
  /** Key capabilities, taken from `fullDescription`. */
  features: string[];
  /** What was delivered: website, app, SaaS… */
  platform: string;
  /** The service in plain words ("catering website"), used in copy and geo keywords. */
  service: string;
  /** Only set when the project description states where the client is. */
  clientLocation?: string;
}

/** Shown on every case study: the work is real, the client's identity is not disclosed. */
export const NDA_NOTE =
  "Client names and branding are withheld under NDA — the features, tech stack and my role are real.";

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-content-writing-platform",
    title: "AI Content Writing Platform",
    tagline: "An AI writing studio that turns one topic into SEO-ready articles",
    category: "Web App",
    description:
      "A content platform where a business types a topic and gets a publish-ready, SEO-optimised blog post or report in minutes — with an admin dashboard to edit, schedule and track what performs.",
    fullDescription: `This is a production-grade AI content platform designed to help businesses automate their content strategy. The platform uses OpenAI's API to generate SEO-optimized blog posts, detailed reports, and marketing copy — all from a single admin dashboard.

The admin panel provides a complete content management system with rich text editing, AI prompt customization, post scheduling, and category management. Each piece of content is automatically optimized for search engines with meta tags, structured data, and keyword density analysis built in.

The backend is built on Node.js with Express, connecting to MongoDB for content storage and Redis for caching. The frontend is a Next.js App Router application with server-side rendering ensuring every page is indexable by search engines from the first request.

Key features include: real-time AI content generation with streaming responses, multi-user role management (Super Admin / Editor / Viewer), analytics dashboard showing traffic, engagement, and content performance, automated sitemap generation, image optimization via Cloudinary, and a REST API for third-party integrations.`,
    challenges: `The biggest challenge was managing AI response streaming in a Next.js server component architecture while keeping the UX smooth. We solved this using React Suspense with streaming APIs. Another challenge was ensuring generated content was always SEO-ready — we built a post-processing pipeline that scores and rewrites content based on readability, keyword density, and semantic relevance before saving.`,
    outcome: `The client's team moved from writing every article by hand to reviewing AI drafts that are already SEO-checked, so they now publish far more consistently with the same people. Scheduling, sitemaps and image optimisation run automatically, which removed most of the manual publishing work.`,
    tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Redis", "Cloudinary", "TypeScript", "Tailwind CSS"],
    images: ["/projects/ai-content-cover.webp", "/projects/ai-content-app.webp"],
    gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
    industry: "Media & Marketing",
    tags: ["AI content platform", "OpenAI integration", "SEO blog automation", "Admin dashboard", "Next.js SaaS"],
    results: ["Publish-ready posts in minutes", "SEO checks built in"],
    service: "AI content platform",
    platform: "Web app + admin panel",
    features: [
      "AI blog & report generation with live streaming output",
      "Built-in SEO scoring: meta tags, schema and keyword density",
      "Role-based access for Super Admin, Editor and Viewer",
      "Traffic and content-performance analytics dashboard",
      "Post scheduling, auto sitemap and Cloudinary image optimisation"
    ],
  },
  {
    id: 2,
    slug: "on-demand-towing-app",
    title: "On-Demand Towing App",
    tagline: "An Uber-style towing app that dispatches the nearest truck in seconds",
    category: "Mobile App",
    description:
      "Stranded drivers drop a pin and the request reaches every nearby tow truck instantly — the first to accept gets the job, and the customer tracks it live on the map. iOS & Android apps plus a fleet admin panel.",
    fullDescription: `This is an Uber-like on-demand towing application built for the roadside assistance industry. When a user's vehicle breaks down, they open the app, drop a pin, and the system instantly broadcasts their request to all available towing providers within a configurable radius.

The driver app and user app are both built in Flutter, sharing a common component library for UI consistency. The backend is a Laravel REST API with real-time WebSocket communication handled by Laravel Echo and Pusher, ensuring sub-second delivery of requests to drivers.

Location tracking is powered by Google Maps SDK with real-time route drawing, showing the user exactly where their driver is and the estimated arrival time. The system handles edge cases like driver cancellation (auto-reassigns to the next available driver), connection drops (WebSocket reconnection with missed event replay), and surge pricing during high demand.

Additional features include: in-app chat between user and driver, ride history, driver rating system, admin dashboard for fleet management, automated invoicing via PDF generation, and SMS/push notifications via Firebase.`,
    challenges: `Real-time driver matching at scale was the core challenge. We implemented a geospatial query system using MySQL's spatial indexes and a pub/sub queue to ensure no two users get the same driver simultaneously. Flutter's isolates were used to keep the location tracking running even when the app is backgrounded.`,
    outcome: `Dispatch moved from phone calls to the app: every request now reaches all nearby drivers at once, customers watch their truck arrive live, and invoices are generated automatically. Towing companies manage their whole fleet from one dashboard.`,
    tech: ["Flutter", "Laravel", "Google Maps API", "WebSocket", "Firebase", "Pusher", "MySQL", "PHP"],
    images: ["/projects/towing-app-cover.webp", "/projects/towing-app-app.webp"],
    gradient: "linear-gradient(135deg, #f7971e 0%, #e53935 100%)",
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
    role: "Full Stack Developer (Flutter + Laravel)",
    industry: "Automotive & Roadside Assistance",
    tags: ["On-demand app development", "Towing app", "Real-time GPS tracking", "Flutter app", "Uber-like app"],
    results: ["Requests reach every nearby truck instantly", "Live tracking replaced phone calls"],
    service: "on-demand towing app",
    platform: "Android & iOS apps + admin panel",
    features: [
      "One-tap request broadcast to every tow truck nearby",
      "Live driver tracking with route and ETA on Google Maps",
      "Auto-reassign when a driver cancels, with surge pricing",
      "In-app chat, ratings and automatic PDF invoices",
      "Fleet management dashboard for towing companies"
    ],
  },
  {
    id: 3,
    slug: "school-management-saas",
    title: "Multi-School Management SaaS",
    tagline: "One SaaS to run many schools — exams, results, fees and parents",
    category: "SaaS",
    description:
      "A multi-school management system where one super admin runs every branch: admissions, teachers, auto-generated exam papers, instant MCQ grading, fee collection and a parent portal.",
    fullDescription: `This is a comprehensive school management SaaS platform built for educational institutions at any scale — from single schools to large multi-school groups managed by a global super admin.

The platform operates on a three-tier role hierarchy: Global Super Admin (manages all schools, billing, and platform settings), School Admin (manages their school's teachers, students, and curriculum), and Teachers/Parents (day-to-day use for classes, assignments, and progress tracking).

The exam module is particularly powerful — teachers can build question banks, generate randomized MCQ papers, set time limits, and the system auto-grades and generates performance reports. There's also a gamified MCQ practice mode where students earn points and compete on leaderboards, increasing engagement significantly.

Student tracking covers attendance, grades, assignments, fee payments, and behavioral notes. The parent portal gives real-time visibility into their child's performance, upcoming exams, and fee dues. The fee management module handles multi-installment plans, automated reminders, and generates payment receipts.`,
    challenges: `Multi-tenancy architecture was the critical design challenge — ensuring complete data isolation between schools while keeping infrastructure costs manageable. We used a shared database with school_id-based row-level security and Redis-based session scoping to achieve this efficiently.`,
    outcome: `Schools replaced manual paper checking with automatic grading, so results are available as soon as an exam ends. Parents follow attendance, marks and fee dues from the parent portal, and the group's super admin runs every branch from one login.`,
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Redis", "Socket.io", "JWT", "Razorpay"],
    images: ["/projects/school-saas-cover.webp", "/projects/school-saas-app.webp"],
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    github: "#",
    live: "#",
    featured: true,
    year: "2023",
    role: "Full Stack Developer & System Architect",
    industry: "Education",
    tags: ["School management software", "School ERP", "Multi-tenant SaaS", "Online exam system", "Parent portal"],
    results: ["Exam results graded instantly", "Parents see progress in real time"],
    service: "school management software",
    platform: "Multi-tenant SaaS (web)",
    clientLocation: "Multi-school groups, global",
    features: [
      "Global super admin → school admin → teacher/parent roles",
      "Question banks with randomised MCQ papers and auto-grading",
      "Gamified MCQ practice with points and leaderboards",
      "Attendance, grades, assignments and behaviour tracking",
      "Fee instalments, automatic reminders and receipts"
    ],
  },
  {
    id: 4,
    slug: "payment-gateway-integrations",
    title: "Payment Gateway Integrations",
    tagline: "Checkouts that just work — Razorpay, Apple Pay, Amex & HDFC",
    category: "Fintech",
    description:
      "Secure payment integrations across client projects: one-tap checkouts, subscriptions, refunds and bulletproof webhooks, so every payment is captured and no customer is ever charged twice.",
    fullDescription: `Across multiple client projects, I have built and integrated a comprehensive suite of payment gateway solutions handling everything from simple one-time payments to complex recurring subscription billing.

Razorpay integration spans UPI, net banking, cards, and EMI options with Razorpay Subscriptions for automated recurring billing. Apple Pay was integrated for iOS-first e-commerce clients using the Payment Request API with server-side session validation compliant with Apple's merchant verification requirements.

HDFC SmartGateway integration was built for enterprise clients needing bank-grade payment infrastructure with 3D Secure authentication, multi-currency support, and NPCI compliance. Amex integration covers corporate card acceptance with enhanced data Level 2/3 for B2B clients.

Fasthub (fast checkout) was integrated as a one-click checkout solution reducing cart abandonment. Each gateway integration includes: secure server-side signature verification, idempotent webhook processing to prevent duplicate transactions, automatic retry logic for failed payments, and a unified transaction dashboard reconciling payments across all gateways.`,
    challenges: `The hardest part was building a single abstraction layer that works consistently across all gateways — each has different webhook formats, signature algorithms, and error codes. We built a gateway adapter pattern that normalizes all events into a unified transaction object, so the business logic never needs to know which gateway was used.`,
    outcome: `Each integration captures payments reliably across UPI, cards, wallets and subscriptions. Idempotent webhooks and automatic retries prevent duplicate charges, and a single dashboard reconciles transactions from every gateway.`,
    tech: ["Node.js", "Razorpay SDK", "Apple Pay JS", "HDFC API", "Amex API", "Fasthub", "Express", "PostgreSQL"],
    images: ["/projects/payments-cover.webp", "/projects/payments-app.webp"],
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2023–2024",
    role: "Backend Developer",
    industry: "Fintech & Payments",
    tags: ["Payment gateway integration", "Razorpay integration", "Apple Pay integration", "HDFC payment gateway", "Subscription billing"],
    results: ["No duplicate charges", "One dashboard for every gateway"],
    service: "payment gateway integration",
    platform: "Payment integrations (web & mobile)",
    clientLocation: "India & international",
    features: [
      "Razorpay: UPI, cards, net banking, EMI and subscriptions",
      "Apple Pay with server-side merchant validation",
      "HDFC SmartGateway with 3D Secure and multi-currency",
      "Amex corporate cards with Level 2/3 data for B2B",
      "Idempotent webhooks, retries and one reconciliation dashboard"
    ],
  },
  {
    id: 5,
    slug: "algo-trading-bot-python",
    title: "Algo Trading Bot for NSE/BSE",
    tagline: "A Python bot that trades your strategy on NSE/BSE, hands-free",
    category: "Fintech",
    description:
      "Set your stock, entry, target and stop-loss — the bot watches live AngelOne market data and places orders the moment your rules are met, with daily loss limits and auto square-off built in.",
    fullDescription: `This is a fully automated algorithmic trading system built entirely in Python, integrated with the AngelOne SmartAPI for live NSE/BSE market data and order execution.

Users configure their trading strategy through a clean web interface — selecting stocks, setting entry price, target price, stop-loss, and quantity. The bot then runs continuously during market hours, monitoring real-time tick data via WebSocket, and executes buy/sell orders automatically when the configured conditions are met.

The system supports multiple concurrent strategies across different scrips. Each strategy runs in its own Python thread, and a central order manager ensures position limits and capital allocation rules are respected across all simultaneous strategies.

Risk management is built in: maximum loss per day (auto-shuts trading for the day if hit), position sizing based on available capital, and automatic square-off of all open positions at 3:20 PM. A detailed trade log with P&L calculation is maintained and exportable as CSV/Excel.

The backend is a FastAPI server with a React dashboard showing live portfolio value, open positions, today's P&L, trade history, and bot status per strategy.`,
    challenges: `WebSocket tick data arrives at extremely high frequency during volatile markets. Python's GIL was a constraint — we solved this using asyncio for the data ingestion layer and multiprocessing for strategy execution, keeping the delay from market tick to order very low.`,
    outcome: `Traders set their rules once and the bot executes them during market hours without manual order entry. Built-in risk limits and the auto square-off remove the most common costly mistakes, and every trade is logged for review.`,
    tech: ["Python", "FastAPI", "AngelOne SmartAPI", "WebSocket", "asyncio", "Pandas", "NumPy", "React", "PostgreSQL"],
    images: ["/projects/algo-trading-cover.webp", "/projects/algo-trading-app.webp"],
    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer (Python + React)",
    industry: "Stock Market & Trading",
    tags: ["Algo trading bot", "Python trading bot", "AngelOne SmartAPI", "Automated stock trading", "FastAPI dashboard"],
    results: ["Rules executed without manual clicks", "Daily loss limits enforced automatically"],
    service: "algo trading bot",
    platform: "Python bot + React dashboard",
    clientLocation: "India (NSE / BSE)",
    features: [
      "Live NSE/BSE ticks via AngelOne SmartAPI WebSocket",
      "Entry, target, stop-loss and quantity per strategy",
      "Multiple strategies running in parallel with capital limits",
      "Daily max-loss cut-off and auto square-off at 3:20 PM",
      "Live P&L dashboard and exportable trade log"
    ],
  },
  {
    id: 6,
    slug: "sports-club-management-platform",
    title: "Sports Club Management Platform",
    tagline: "Everything a sports club needs — members, coaches, fees and its own website",
    category: "SaaS",
    description:
      "An all-in-one platform for sports academies: parent & child registration, coach scheduling, monthly fee collection, in-app chat, a merchandise shop, ground booking and a drag-and-drop website builder.",
    fullDescription: `This is an all-in-one sports club management platform designed to digitize and streamline every aspect of running a sports club — from registrations to revenue.

The platform connects four types of users: Club Admins, Training Centers, Coaches, and Parents. A club can have multiple training centers, each center has coaches assigned to specific sports (cricket, football, swimming, etc.), and parents browse and register their children for specific sport programs under specific coaches.

The chat module enables direct communication between parents and coaches, with group chat channels per sport batch. Monthly fee management supports installment plans, automated WhatsApp/SMS payment reminders, and generates branded receipts. A built-in shop lets clubs sell sports equipment, jerseys, and merchandise directly to members.

The garden/ground booking module allows clubs to rent out their facilities — members can see real-time slot availability and book specific courts or grounds by the hour. The crown feature is the drag-and-drop website builder that lets clubs create their own professional website within minutes, fully customizable with their branding, program listings, and contact forms.`,
    challenges: `Designing a permission system flexible enough to handle the club → training center → coach → parent/child hierarchy while keeping the UX simple for non-technical club managers was the core challenge. We iterated through 3 permission model designs before settling on a policy-based approach using Casbin.`,
    outcome: `Clubs moved registrations, fee collection and ground bookings online, with reminders going out automatically instead of by hand. Non-technical admins launch and update their club website themselves with the built-in builder.`,
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Razorpay", "TypeScript", "Casbin", "AWS S3"],
    images: ["/projects/sports-club-cover.webp", "/projects/sports-club-app.webp"],
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & Product Designer",
    industry: "Sports & Academies",
    tags: ["Sports club management software", "Academy management", "Online fee collection", "Booking system", "Website builder"],
    results: ["Fee collection fully online", "Clubs build their own website"],
    service: "sports club management software",
    platform: "Web platform + website builder",
    features: [
      "Clubs, training centres, coaches and parents in one system",
      "Parent–coach chat with group channels per batch",
      "Monthly fees with WhatsApp/SMS reminders and receipts",
      "Online shop for jerseys, equipment and merchandise",
      "Hourly ground/court booking and a drag-and-drop website builder"
    ],
  },
  {
    id: 7,
    slug: "telemedicine-platform",
    title: "Global Telemedicine Platform",
    tagline: "A telemedicine platform connecting patients with specialist doctors worldwide",
    category: "Web App",
    description:
      "Patients find doctors by country and speciality, book a slot, chat in real time and join video consultations or paid webinars — while doctors manage their calendar and earnings from one dashboard.",
    fullDescription: `This is a global telemedicine platform designed to break down geographical barriers in healthcare, connecting patients with specialist doctors from any country in the world.

Patients browse doctors filtered by country, specialty, language, and availability. Each doctor has a detailed profile with credentials, specialties, consultation fees, patient reviews, and available time slots displayed in the patient's local timezone (automatic timezone conversion powered by Intl API).

The slot booking system supports both instant consultations (join a waiting queue) and scheduled appointments (book a future slot). Video consultations are powered by WebRTC with a custom signaling server, providing end-to-end encrypted video calls without any third-party dependency.

The webinar module allows doctors to host live medical education sessions for up to 500 concurrent viewers. Patients can register, join via browser with no app install, ask questions via live chat, and access the recording afterwards. This was a major differentiator — doctors monetize their expertise beyond 1-on-1 consultations.

Additional features: in-app chat (pre and post consultation), prescription generation as PDF, appointment reminders via email/WhatsApp, admin panel for managing doctors, payouts to doctors in multiple currencies, and HIPAA-conscious data architecture with encrypted patient records.`,
    challenges: `Multi-timezone slot management was extremely tricky — a doctor in London can have a patient in Tokyo, and both need to see slots in their own timezone with no confusion. We built a timezone-aware calendar engine that stores all slots in UTC and renders them client-side in the viewer's local timezone, with edge case handling for DST changes.`,
    outcome: `Patients book doctors in other countries at times shown in their own time zone and consult over secure video without installing an app. The webinar module gave doctors a way to earn from their expertise beyond one-to-one consultations.`,
    tech: ["React", "Node.js", "WebRTC", "Socket.io", "PostgreSQL", "TypeScript", "Stripe", "AWS", "Redis"],
    images: ["/projects/telemedicine-cover.webp", "/projects/telemedicine-app.webp"],
    gradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & System Architect",
    industry: "Healthcare",
    tags: ["Telemedicine platform", "Doctor appointment booking", "Video consultation app", "Healthcare web app", "Webinar platform"],
    results: ["Consultations across countries and time zones", "Webinars opened a new income stream"],
    service: "telemedicine platform",
    platform: "Web app (patients, doctors, admin)",
    clientLocation: "Global",
    features: [
      "Find doctors by country, speciality, language and availability",
      "Slots shown in the patient's own time zone",
      "Encrypted WebRTC video consultations, no app install",
      "Live webinars for up to 500 viewers with recordings",
      "PDF prescriptions, reminders and multi-currency doctor payouts"
    ],
  },
  {
    id: 8,
    slug: "catering-website-whatsapp-ordering",
    title: "Catering Website with WhatsApp Ordering",
    tagline: "A catering website that turns visitors into WhatsApp orders",
    category: "Web App",
    description:
      "A fast, mobile-first catering site with a live menu the owner updates in seconds, instant PDF quotations and one-tap WhatsApp ordering — so enquiries keep coming in while the kitchen is busy.",
    fullDescription: `This is a dynamic catering business platform built to modernize how catering companies manage their menu, pricing, and client orders. The entire menu — including dish prices, vegetable rates, and grocery items — is controlled in real time through the admin panel, so price changes reflect instantly on the live website without any developer involvement.

Clients visiting the website can browse the full food menu organized by category (Starters, Main Course, Desserts, Beverages, Thali Packages), see per-person or per-dish pricing, and directly place inquiries or orders. Each menu item links to a WhatsApp chat with the caterer, pre-filling the order details so the caterer never misses a lead.

The quotation module is the core business feature — clients fill in their event details (event type, number of guests, venue, date, menu selection) and the system instantly generates a branded PDF quotation with itemized pricing. Caterers can accept, revise, or reject quotations from the admin panel, and the client receives automated WhatsApp/email notifications at each stage.

Order management tracks active catering orders from confirmation to delivery, with status updates (Confirmed → Preparation → Dispatch → Delivered). The admin panel also manages staff assignments per order, inventory tracking for raw materials, and a revenue dashboard showing monthly earnings, popular dishes, and repeat clients.

SEO-optimized pages for every cuisine category and service area ensure the caterer ranks on Google for local searches like "catering service near me" and "wedding catering Surat".`,
    challenges: `The dynamic pricing system required real-time sync between the admin panel and the live website without page reloads. We used a combination of server-sent events (SSE) for price broadcasting and Redis caching so the website always serves fresh prices with near-instant responses. The PDF quotation engine handles complex multi-tier pricing (per-plate vs. per-dish vs. package pricing) dynamically based on admin configuration.`,
    outcome: `The caterer now updates menus and prices without a developer, sends a professional quotation the moment a customer asks, and receives orders directly on WhatsApp — so far fewer enquiries are missed while the kitchen is busy.`,
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay", "WhatsApp Business API", "Redis", "Puppeteer (PDF)", "Tailwind CSS"],
    images: ["/projects/catering-website-cover.webp", "/projects/catering-website-app.webp"],
    gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer",
    industry: "Food & Catering",
    tags: ["Catering website", "Restaurant website", "WhatsApp ordering", "Online quotation system", "Food business website"],
    results: ["Instant PDF quotations", "Orders straight to WhatsApp"],
    service: "catering website",
    platform: "Website + admin panel",
    features: [
      "Live menu and ingredient prices controlled from the admin",
      "Menu by category with per-plate or per-dish pricing",
      "One-tap WhatsApp enquiry with the order details pre-filled",
      "Instant branded PDF quotations from event details",
      "Order tracking from confirmation to delivery, plus revenue dashboard"
    ],
  },
  {
    id: 9,
    slug: "music-subscription-app",
    title: "Music Subscription App for an Independent Artist",
    tagline: "A subscription music app that lets an independent artist earn every month",
    category: "Web App",
    description:
      "A category-wise music library with free previews and premium unlock, recurring subscriptions and an admin panel where the artist uploads tracks and sees who's listening — no developer needed.",
    fullDescription: `This is a branded music streaming application built for an independent music producer who creates tracks across multiple genres. The app gives the artist a direct-to-fan distribution channel — no Spotify middleman — with full control over pricing, content, and subscriber relationships.

The music library is organized into categories (Lo-Fi Beats, Hip-Hop, Classical Fusion, EDM, Meditation, Cinematic) with each category having a thumbnail, description, and track list. Free users can preview the first 30 seconds of any track; premium subscribers get unlimited full-track streaming and offline download access.

Subscription management is handled via Razorpay Subscriptions with monthly and annual plan options. The system auto-revokes access on payment failure and sends renewal reminders 3 days before expiry. Subscribers receive a welcome email with their login credentials and a personalized "Your Music Dashboard" showing their listening history and favorites.

The admin panel gives the artist complete control: upload new tracks (auto-compressed and stored on AWS S3), create/edit categories, set featured tracks, view subscriber analytics (new vs. churned, revenue by plan, most-played tracks), and send broadcast push notifications to all premium users.

The app is built as a Progressive Web App (PWA), meaning users can install it on their phone from the browser without going through an app store — reducing friction and cost significantly for the creator.`,
    challenges: `Audio streaming required careful implementation to prevent content piracy — we serve audio via signed time-limited S3 URLs that expire every 15 minutes, making direct URL sharing useless. The offline download feature for premium users encrypts the audio file locally using AES-256 with a device-bound key, so downloaded tracks can only play within the app on the original device.`,
    outcome: `The artist gained a direct-to-fan channel with recurring subscription income and full control over pricing and content. Uploading tracks, managing plans and messaging subscribers are all done from the admin panel, with no developer needed after launch.`,
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "Razorpay Subscriptions", "PWA", "Firebase FCM", "TypeScript", "FFmpeg"],
    images: ["/projects/music-app-cover.webp", "/projects/music-app-app.webp"],
    gradient: "linear-gradient(135deg, #360033 0%, #0b8793 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer",
    industry: "Music & Media",
    tags: ["Music streaming app", "Subscription app", "Razorpay subscriptions", "PWA", "Creator platform"],
    results: ["Direct-to-fan monthly income", "Artist runs it without a developer"],
    service: "music streaming app",
    platform: "Installable PWA + admin panel",
    features: [
      "Genre-wise library with 30-second free previews",
      "Monthly and annual plans via Razorpay Subscriptions",
      "Automatic access control and renewal reminders",
      "Track uploads to AWS S3 with auto-compression",
      "Subscriber analytics and push notifications for the artist"
    ],
  },
  {
    id: 10,
    slug: "real-estate-website-lead-management",
    title: "Real Estate Website with Lead Management",
    tagline: "A real estate website built to rank on Google and capture buyer leads",
    category: "Web App",
    description:
      "An SEO-first property portal with smart search filters, map view, virtual tours and a lead inbox — every enquiry is tagged to a property and agent so no buyer slips through.",
    fullDescription: `This is a full-featured dynamic real estate platform built for a property dealer/agency. Every aspect of the site — properties, pricing, amenities, agent profiles, testimonials — is managed through the admin panel, making it completely self-sufficient without developer intervention.

Property listings support rich content: multiple high-resolution images per property, 360° virtual tour embed support, detailed specifications (BHK, area, floor, facing direction, furnishing status), location map embed, nearby facilities (schools, hospitals, malls), RERA registration number, and EMI calculator. Each listing is individually SEO-optimized with unique meta titles, descriptions, and structured data (JSON-LD) for Google Rich Results.

The advanced search and filter system lets buyers filter by property type (Apartment, Villa, Plot, Commercial), city/locality, price range, BHK configuration, ready-to-move vs. under-construction, and possession date. Search results are paginated and sortable by price, date, and popularity.

The lead management system captures every inquiry with source tracking (which property page, which CTA button). Leads are automatically assigned to agents based on property location, and follow-up reminders are set. The admin dashboard shows a full lead funnel — New → Contacted → Site Visit Scheduled → Negotiation → Closed.

Agent profiles, testimonials, blog/news section, and a neighborhood guide for each area improve organic search rankings and build buyer trust.`,
    challenges: `SEO for real estate requires hyper-local targeting — we generated unique dynamic pages for every locality, property type, and BHK combination (e.g., "2BHK Flats in Vesu Surat"), creating hundreds of targeted landing pages automatically from the database. The EMI calculator required integrating live interest rate data from an RBI API feed.`,
    outcome: `Each property page is optimised to appear in local Google searches, and every enquiry is captured with its source and assigned to an agent automatically. The agency tracks each buyer from first enquiry to closing in one funnel.`,
    tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "TypeScript", "Tailwind CSS", "Google Maps API", "Schema.org JSON-LD"],
    images: ["/projects/real-estate-cover.webp", "/projects/real-estate-app.webp"],
    gradient: "linear-gradient(135deg, #1a3a5c 0%, #2196f3 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & SEO Architect",
    industry: "Real Estate",
    tags: ["Real estate website", "Property listing portal", "Lead management", "Local SEO", "Next.js website"],
    results: ["Every listing built to rank on Google", "No enquiry slips through"],
    service: "real estate website",
    platform: "Website + CRM-style admin",
    features: [
      "Listings with photos, 360° tours, RERA number and EMI calculator",
      "Filters by type, locality, budget, BHK and possession",
      "Per-listing SEO titles and JSON-LD for Google rich results",
      "Lead capture with source tracking and auto agent assignment",
      "Lead funnel: New → Contacted → Site visit → Negotiation → Closed"
    ],
  },
  {
    id: 11,
    slug: "gym-website-membership-system",
    title: "Gym Website & Membership System",
    tagline: "A gym website with online memberships, classes and renewal reminders",
    category: "Web App",
    description:
      "Members join and pay online, book classes and check in by QR code; the owner sees attendance, renewals and revenue in one dashboard — no more paper registers.",
    fullDescription: `This is a dynamic gym management platform that combines a public-facing marketing website with a fully functional gym management backend — built specifically for fitness centers that want to move beyond WhatsApp groups and paper registers.

The public website showcases the gym's facilities, transformation stories, trainer profiles, membership plans, and class schedule. Visitors can sign up for a membership online, choose their plan (Monthly/Quarterly/Annual), and complete payment through Razorpay — the membership card is emailed to them instantly.

The member portal lets gym members view their attendance history, remaining membership days, assigned trainer, current diet plan (uploaded as PDF by trainer), and upcoming classes they're booked for. Push notifications remind members about upcoming class bookings and membership renewal.

The class scheduling module allows admins to create classes (Zumba, CrossFit, Yoga, Cardio), assign trainers, set capacity limits, and open booking slots. Members book classes online; the system auto-waitlists when a class is full and notifies members if a spot opens up.

The admin panel handles everything: member registration and renewals, payment records and dues, attendance marking via QR code (members scan at entrance), trainer management, diet plan assignment, and a revenue dashboard tracking monthly membership revenue, new enrollments, and churn.`,
    challenges: `The QR code attendance system needed to work reliably even with poor internet connectivity in the gym. We built an offline-first PWA for the reception desk that queues attendance scans locally and syncs to the server when connectivity resumes, ensuring zero data loss during network outages.`,
    outcome: `The gym replaced paper registers and WhatsApp groups with online sign-ups, QR check-ins and automatic renewal reminders. Members book classes themselves, and the owner sees attendance and revenue in one dashboard.`,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Firebase FCM", "QR Code", "PWA", "Tailwind CSS", "Chart.js"],
    images: ["/projects/gym-website-cover.webp", "/projects/gym-website-app.webp"],
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #ff6a00 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer",
    industry: "Gym & Fitness",
    tags: ["Gym website", "Gym management software", "Online membership", "Class booking", "QR attendance"],
    results: ["Memberships sold online", "No more paper registers"],
    service: "gym management software",
    platform: "Website + member portal + admin",
    features: [
      "Online membership sign-up and Razorpay payment",
      "Member portal with attendance, diet plans and bookings",
      "Class scheduling with capacity limits and auto-waitlist",
      "QR-code attendance at the gym entrance",
      "Revenue dashboard for renewals and new enrolments"
    ],
  },
  {
    id: 12,
    slug: "surat-textile-wholesale-website",
    title: "Textile Wholesale Website for a Surat Trader",
    tagline: "An online fabric catalogue that brings Surat traders buyers from across India",
    category: "Web App",
    description:
      "An SEO-optimised wholesale catalogue for Surat's fabric market with retail & bulk pricing, sample requests and WhatsApp ordering — turning a static brochure site into a lead machine.",
    fullDescription: `This is a dynamic digital storefront built for a Surat-based cloth and textile trader, targeting both wholesale buyers (other businesses) and retail customers searching for fabrics online. Surat is India's largest textile hub, and this platform is designed to capture the growing demand for online fabric sourcing.

The product catalog is organized by fabric type (Saree, Suit Material, Lehenga Fabric, Dress Material, Running Fabric, Dupatta), material (Silk, Georgette, Chiffon, Cotton, Linen, Net), and occasion (Casual, Wedding, Party, Ethnic). Each product has multiple images, fabric specifications (GSM, width, composition), available colors, minimum order quantity (MOQ), and both wholesale and retail pricing.

The pricing system differentiates between B2B and B2C customers — registered wholesale buyers see trade prices after verification, while retail customers see MRP. Sample requests allow buyers to request fabric swatches (with a small sample fee) before placing bulk orders.

WhatsApp ordering is the primary checkout flow: clicking "Order via WhatsApp" opens a pre-filled message with product name, variant, and quantity, connecting the buyer directly with the sales team. For larger orders, the platform generates formal quotation PDFs.

The admin panel manages the full product catalog — add/edit/delete products, update prices, manage stock availability, handle sample requests, and view inquiry analytics. The website is fully SEO-optimized targeting keywords like "wholesale fabric Surat", "saree material online Surat", and "cloth manufacturer Gujarat".`,
    challenges: `The dual pricing system (wholesale vs. retail) required a robust user verification flow for B2B buyers without creating friction for retail customers. We implemented a quick business verification form that checks GSTIN via the government's API, automatically unlocking wholesale pricing for verified businesses within minutes.`,
    outcome: `A static brochure site became a searchable wholesale catalogue that buyers outside Surat can find on Google. Sample requests and WhatsApp orders arrive with product, variant and quantity already filled in, so the sales team replies faster.`,
    tech: ["Next.js", "Node.js", "MongoDB", "WhatsApp Business API", "Cloudinary", "GSTIN API", "Razorpay", "Tailwind CSS"],
    images: ["/projects/textile-wholesale-cover.webp", "/projects/textile-wholesale-app.webp"],
    gradient: "linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & SEO Specialist",
    industry: "Textile & Wholesale",
    tags: ["Textile website Surat", "Fabric marketplace", "B2B wholesale catalogue", "WhatsApp ordering", "Local SEO Surat"],
    results: ["Buyers from outside Surat can order", "Enquiries arrive pre-filled on WhatsApp"],
    service: "textile e-commerce website",
    platform: "Website + catalogue admin",
    clientLocation: "Surat, Gujarat",
    features: [
      "Catalogue by fabric type, material and occasion",
      "Specs per product: GSM, width, composition, colours and MOQ",
      "Separate wholesale (verified) and retail pricing",
      "Paid sample requests before bulk orders",
      "Pre-filled WhatsApp ordering and PDF quotations"
    ],
  },
  {
    id: 13,
    slug: "diamond-textile-trader-crm-surat",
    title: "CRM & Accounting Software for Diamond and Textile Traders",
    tagline: "CRM & accounting software built for Surat's diamond and textile traders",
    category: "CRM",
    description:
      "Clients, stock, ledgers, quotations, GST invoices and outstanding payments in one place — with ageing reports that show exactly who owes what, from any device.",
    fullDescription: `This is a purpose-built CRM and accounting software designed for two of Surat's most prominent industries: diamond trading and dying/printing textile trading. Both industries share a common operational challenge — managing hundreds of client relationships, complex stock transactions, credit-based trading, and scattered account records across WhatsApp and physical ledgers.

The CRM module centralizes all client data: contact details, trading history, credit limit, outstanding balance, and communication logs. Relationship managers can log every client interaction (call, meeting, order) and set follow-up reminders. The client 360° view shows everything about a client — all past orders, payments received, pending dues, and a relationship health score.

The stock management module tracks inventory in real time. For diamond traders, it handles lots with 4C specifications (Cut, Color, Clarity, Carat), pricing per carat, and memo/consignment tracking. For dying/printing traders, it tracks fabric rolls by design code, color, weight, and GSM with a visual sample image.

The accounting module replaces physical ledgers with a digital double-entry bookkeeping system. It generates account statements, tracks receivables and payables, records payments against invoices, and calculates outstanding balances per client. Aging reports show which clients have dues past 30, 60, and 90 days.

Quotations are generated as professional branded PDFs with one click, converting to tax invoices upon acceptance. GST-compliant invoicing with automatic CGST/SGST/IGST calculation based on the buyer's state. The dashboard shows daily collection targets, pending follow-ups, top clients by revenue, and cash flow projections.`,
    challenges: `Diamond trading uses industry-specific terminology and workflows that don't map to generic CRM systems. We conducted extensive discovery sessions with the client to map their exact workflow — from memo issuance to consignment return to sale confirmation — and built a custom pipeline that mirrors their physical process exactly, ensuring zero learning curve for the team.`,
    outcome: `The firm moved its client records, stock and ledgers out of paper books and WhatsApp into one system that works on any device. Ageing reports show exactly which clients are overdue, which made following up on pending payments much easier.`,
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript", "Razorpay", "Puppeteer (PDF)", "Chart.js", "JWT", "Express"],
    images: ["/projects/trader-crm-cover.webp", "/projects/trader-crm-app.webp"],
    gradient: "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
    github: "#",
    live: "#",
    featured: false,
    year: "2024",
    role: "Full Stack Developer & Business Analyst",
    industry: "Diamond & Textile Trading",
    tags: ["CRM software Surat", "Diamond trading software", "Textile accounting software", "Custom CRM development", "Billing & ledger software"],
    results: ["Paper ledgers replaced", "Overdue payments visible at a glance"],
    service: "custom CRM software",
    platform: "Web software (any device)",
    clientLocation: "Surat, Gujarat",
    features: [
      "Client 360° view: orders, payments, dues and follow-ups",
      "Diamond lots with 4C specs, per-carat pricing and memo tracking",
      "Fabric roll stock by design code, colour, weight and GSM",
      "Digital double-entry ledger replacing paper books",
      "Ageing reports for dues past 30, 60 and 90 days"
    ],
  },
];

