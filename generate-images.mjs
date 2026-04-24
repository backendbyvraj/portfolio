import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = "AIzaSyBrTIqjIT2ZY46Kzq6NxBmxFOvDxA0Gyn8";
const ai = new GoogleGenAI({ apiKey: API_KEY });
const OUT_DIR = path.join(__dirname, "public", "projects");

// ─────────────────────────────────────────────────────────────
// Each project has ONE consistent visual theme across all 3 images
// ─────────────────────────────────────────────────────────────
const images = [

  // ══════════════════════════════════════════════════════
  // PROJECT 4 — Payment Gateway Suite
  // Theme: Dark navy background, warm orange-amber-gold gradient accents
  // ══════════════════════════════════════════════════════
  {
    filename: "payments.png",
    prompt: `Ultra high quality UI screenshot of a professional fintech payment gateway dashboard. 
Dark navy (#0a0f1e) background. Warm amber-gold gradient (#f7971e → #ffd200) accents throughout. 
Top navigation bar with logo "PaySuite". 
Four KPI stat cards in a row: "Total Volume ₹2.3 Cr" with upward arrow, "Success Rate 99.99%" in gold, "Gateways Active 5" with colored dots, "Transactions Today 4,812". 
Center: a smooth area line chart titled "Monthly Transaction Trend" with amber gradient fill under the line, X-axis showing Jan–Dec, Y-axis in crores. 
Bottom row: small gateway status chips — Razorpay (orange dot), Apple Pay (silver dot), HDFC (blue dot), Amex (blue dot), Fasthub (green dot) all showing "Active". 
Clean flat UI, subtle card shadows, rounded corners, Inter font, pixel-perfect modern SaaS design. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "payments-2.png",
    prompt: `Ultra high quality UI screenshot of a dark navy fintech transaction history page. 
Dark navy (#0a0f1e) background. Warm amber-gold (#f7971e → #ffd200) gradient page header bar titled "Transactions". 
A clean data table with columns: #ID, Gateway, Amount (INR), Status, Date & Time. 
Gateway column uses colored mini-badges: "Razorpay" orange, "Apple Pay" silver/dark, "HDFC" blue, "Amex" blue-grey, "Fasthub" green. 
Status column: green pill "Success" or red pill "Failed". 
Amounts like ₹4,999, ₹12,500, ₹899, ₹34,000 etc. 
Top-right: search bar and filter dropdowns. 
Pagination at bottom. Even rows slightly lighter navy. 
Modern flat SaaS table design, amber accent on hover rows, Inter font, sharp crisp UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "payments-3.png",
    prompt: `Ultra high quality UI screenshot of a dark navy developer webhook monitoring panel for a payment gateway. 
Dark navy (#0a0f1e) background with amber-gold (#f7971e → #ffd200) accents. 
Left sidebar: list of gateways with icons — Razorpay, Apple Pay, HDFC, Amex, Fasthub — each with green "Active" indicator. Selected item highlighted in amber. 
Main area: live webhook event feed. Each event row shows: event type tag (e.g. "payment.captured" in orange pill, "refund.processed" in teal pill), transaction ID, gateway name, timestamp, and a green checkmark or red X icon. 
Top-right: a small JSON payload preview panel showing formatted JSON with syntax highlighting (keys in amber, values in white/green). 
"All events verified • Idempotency ON" status bar at bottom in green. 
Clean developer dashboard aesthetic, monospace code font for JSON, Inter font for UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 5 — AlgoTrade Python Trading Bot
  // Theme: Very dark charcoal/black, teal-green (#134e5e → #71b280) accents
  // ══════════════════════════════════════════════════════
  {
    filename: "algotrade.png",
    prompt: `Ultra high quality UI screenshot of a professional algorithmic stock trading bot dashboard. 
Very dark background (#0d1117), teal-green gradient (#134e5e → #71b280) accents. 
Top status bar: "AlgoTrade" logo left, center badges — "BOT STATUS: RUNNING" in pulsing green, "Market: NSE OPEN" in teal, "Today P&L: +₹4,280" in bright green. 
Center: a large real-time candlestick chart for "RELIANCE" stock. Green candles going up, red candles going down, volume bars below, moving average lines in teal, current price label. 
Right panel: "Active Strategies" list — 3 rows each showing: stock name (RELIANCE, HDFC, INFY), entry price, target, stop-loss, status chip (Watching/Triggered). 
Bottom row: 3 stat cards — "Open Positions: 3", "Capital Used: ₹85,000", "Bot Uptime: 6h 42m". 
Fintech trading terminal aesthetic, monospace numbers, teal glow effects. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "algotrade-2.png",
    prompt: `Ultra high quality UI screenshot of a dark trading bot strategy configuration panel. 
Very dark background (#0d1117), teal-green (#134e5e → #71b280) accents. 
Left side: "Add New Strategy" form panel with labeled input fields — Stock Scrip (dropdown showing NSE stocks: RELIANCE, TCS, INFY, HDFC), Entry Price, Target Price, Stop-Loss, Quantity, Strategy Type (toggle: Intraday / Positional). 
Bottom of form: a large teal gradient "Add Strategy" button with subtle glow. 
Right side: "Running Strategies" cards stacked vertically — each card shows stock name ticker, entry/target/SL values, a colored status indicator dot (green = Watching, amber = Near Target, red = Stop-Loss Hit), and a "Remove" icon. 
Teal accent borders on active cards. Dark card backgrounds with slightly lighter surface. Clean professional trading bot UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "algotrade-3.png",
    prompt: `Ultra high quality UI screenshot of a dark algorithmic trading P&L analytics report screen. 
Very dark background (#0d1117), teal-green (#134e5e → #71b280) accents. 
Top: 4 summary stat cards — "Total Trades: 142" teal, "Win Rate: 68%" green, "Net P&L: +₹31,500" bright green, "Avg Trade Duration: 47min" neutral. 
Center: a grouped bar chart titled "Daily P&L — Last 30 Days", bars in green for profit days and red for loss days, teal grid lines on dark background. 
Bottom: a completed trades table — columns: Date, Stock, Buy Price, Sell Price, Qty, P&L (green positive ₹ / red negative ₹), Duration. 
Top-right: "Export CSV" and "Export Excel" buttons in teal outline style. 
Trading analytics dashboard, monospace font for numbers, clean and data-dense layout. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 6 — SportHub Club Management
  // Theme: White/light background, purple-pink gradient (#a18cd1 → #fbc2eb) accents
  // ══════════════════════════════════════════════════════
  {
    filename: "sporthub.png",
    prompt: `Ultra high quality UI screenshot of a modern sports club management SaaS dashboard. 
Clean white background with soft light grey cards. Purple-to-pink gradient (#a18cd1 → #fbc2eb) as primary accent color. 
Top navigation: "SportHub" logo in purple, menu items: Dashboard, Coaches, Students, Fees, Shop, Bookings. 
Hero stats row: "Active Students 1,240" purple card, "Coaches 48" pink card, "Monthly Revenue ₹3.2L" gradient card, "Clubs Managed 8" lavender card — all with upward trend arrows. 
Sport category cards in a grid: Cricket (bat icon), Football (ball icon), Swimming (wave icon), Tennis (racket icon) — each showing enrolled count and a mini sparkline. 
Right side: "Upcoming Batches" mini calendar showing next 7 days with color-coded sport sessions. 
Friendly, vibrant, modern SaaS UI. Rounded cards with soft shadows, Inter font. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "sporthub-2.png",
    prompt: `Ultra high quality UI screenshot of a sports club parent and coach browsing portal. 
Clean white/light background, purple-pink gradient (#a18cd1 → #fbc2eb) accents. 
Top: horizontal filter bar with sport type pills — All, Cricket, Football, Swimming, Tennis — selected in purple gradient. 
Main area: coach profile cards grid (3 columns) — each card has a circular avatar placeholder, coach name, sport badge colored chip, star rating (4.5 stars), "Available" green dot, and a "Book Session" button in purple gradient. 
Right panel (sidebar): "Register Your Child" form — Child Name input, Age, Sport selection dropdown, Preferred Batch (Morning/Evening radio), Submit button in pink-purple gradient. 
Friendly colorful UI, rounded corners, soft card shadows, sports iconography. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "sporthub-3.png",
    prompt: `Ultra high quality UI screenshot of a sports club website builder and fee management split-screen. 
Clean white background, purple-pink gradient (#a18cd1 → #fbc2eb) accents. 
LEFT HALF — Drag-and-drop website builder: Canvas preview showing a sports club website being built. Section blocks panel on the left side (Hero Block, Programs Block, Coaches Block, Testimonials, Contact Form) with drag handles. The canvas shows a simple colorful sports club landing page taking shape with purple gradient hero section. 
RIGHT HALF — Fee Management panel: Table with student name, sport, fee plan (Monthly/Quarterly), amount, and status badge (green "Paid", amber "Pending", red "Overdue"). Below each row: installment breakdown. Bottom: bulk "Send WhatsApp Reminder" button in green with WhatsApp icon. 
Divider line between both panels. Purple-pink accent throughout. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 7 — MediGlobal Telemedicine Platform
  // Theme: Deep dark galaxy purple (#0f0c29 → #302b63 → #24243e), blue-indigo accents
  // ══════════════════════════════════════════════════════
  {
    filename: "mediglobal.png",
    prompt: `Ultra high quality UI screenshot of a global telemedicine doctor discovery platform. 
Deep dark galaxy purple background gradient (#0f0c29 to #302b63), subtle star particle effect in background. Blue and indigo accent colors (#6c63ff, #4dabf7). 
Top navigation: "MediGlobal" logo in white with blue glow, menu: Find Doctors, Webinars, My Appointments, Profile. 
Search bar row: Country dropdown (with small flags — India, USA, UK, Germany, UAE), Specialty dropdown (Cardiology, Neurology, etc.), Language dropdown, "Search" button in blue gradient. 
Below: doctor profile cards grid (3 columns). Each card: circular doctor avatar, name "Dr. Sarah Miller", specialty badge "Cardiologist" in blue pill, country flag + name, star rating 4.8, consultation fee "$45 / ₹1200", "Book Now" button in indigo gradient. 
Faint world map outline watermark in background. Premium dark healthcare UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "mediglobal-2.png",
    prompt: `Ultra high quality UI screenshot of a telemedicine slot booking and video consultation interface. 
Deep dark purple background (#0f0c29 to #302b63), blue-indigo (#6c63ff, #4dabf7) accent colors. 
LEFT HALF — Appointment booking panel: Doctor profile summary at top (avatar, Dr. James Wilson, Neurologist, UK flag). Below: weekly calendar slot grid showing Mon–Sun with time slots (9:00 AM, 10:30 AM etc.) — available slots highlighted in indigo/blue, booked slots greyed out. Timezone label "Your timezone: IST (UTC+5:30)" in small text. "Instant Consultation" button glowing in blue at bottom. 
RIGHT HALF — Active video call interface: Split screen video call UI showing two video feed rectangles (Doctor video top, Patient video bottom-right corner smaller). Bottom control bar: mute button, camera button, screen share, red end-call button. "Encrypted • WebRTC" security badge at top. Call duration timer "00:12:34". 
Premium dark medical app design. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "mediglobal-3.png",
    prompt: `Ultra high quality UI screenshot of a medical webinar platform and doctor admin panel. 
Deep dark galaxy purple (#0f0c29 to #302b63) background, blue and indigo accents. 
TOP SECTION — Live webinar view: Full-width banner showing "LIVE" red badge, webinar title "Understanding Heart Health in 2025" by Dr. Priya Sharma (Cardiologist), "342 watching" viewer count, a blurred presentation slide as background. Right side: live Q&A chat panel with patient questions scrolling — chat bubbles in dark glass-morphism style with blue accents. 
MIDDLE — Upcoming webinars row: 3 webinar cards showing doctor name, specialty, date/time, price, and "Register" button in indigo gradient. 
BOTTOM — Admin strip: doctor verification status chips (Verified/Pending), payout summary showing USD $1,240, INR ₹45,000, GBP £380, "Process Payouts" button. 
Polished dark telemedicine SaaS design. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
];

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function generateImage(prompt, filename) {
  const outputPath = path.join(OUT_DIR, filename);
  console.log(`\n⏳ Generating: ${filename}`);
  try {
    const response = await ai.models.generateImages({
      model: "imagen-4.0-generate-001",
      prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/png",
        aspectRatio: "16:9",
      },
    });

    const imgData = response?.generatedImages?.[0]?.image?.imageBytes;
    if (imgData) {
      const buffer = Buffer.isBuffer(imgData)
        ? imgData
        : Buffer.from(imgData, "base64");
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Saved: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } else {
      console.warn(`⚠️  No image bytes returned for ${filename}`);
      console.warn("   Response:", JSON.stringify(response, null, 2).slice(0, 400));
    }
  } catch (err) {
    const msg = err?.message ?? String(err);
    console.error(`❌ Error for ${filename}:`, msg.slice(0, 300));
  }
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`🚀 Generating ${images.length} images using imagen-4.0-generate-001...\n`);

  for (let i = 0; i < images.length; i++) {
    const { filename, prompt } = images[i];
    await generateImage(prompt, filename);
    if (i < images.length - 1) {
      process.stdout.write("   ⏱  Waiting 5s...\r");
      await sleep(5000);
    }
  }

  console.log("\n🎉 Done! Check public/projects/ folder.");
}

main();
