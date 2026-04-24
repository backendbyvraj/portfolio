import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = "AIzaSyBrTIqjIT2ZY46Kzq6NxBmxFOvDxA0Gyn8";
const ai = new GoogleGenAI({ apiKey: API_KEY });
const OUT_DIR = path.join(__dirname, "public", "projects");

const images = [

  // ══════════════════════════════════════════════════════
  // PROJECT 8 — CaterEase: Catering & Food Order Platform
  // Theme: Warm orange-yellow (#f83600 → #f9d423), rich food photography style
  // ══════════════════════════════════════════════════════
  {
    filename: "caterease.png",
    prompt: `Ultra high quality UI screenshot of a professional catering business website homepage called "CaterEase". 
Warm orange-to-yellow gradient (#f83600 to #f9d423) hero section. White body background with warm amber accents.
Hero section: Full-width banner with a beautifully styled food spread background (biriyani, paneer, sweets), overlay text "Premium Catering for Every Occasion" with subtitle "Weddings · Corporate Events · Parties", and two CTA buttons: "View Menu" (orange gradient) and "Get a Quote via WhatsApp" (green with WhatsApp icon).
Below hero: Four service category cards — Wedding Catering, Corporate Lunch, Birthday Party, Bulk Tiffin — each with a food icon and orange accent border.
Menu section preview: Horizontal scrollable category chips (Starters, Main Course, Thali, Desserts, Beverages), below showing dish cards with food photo placeholder, dish name, per-plate price in INR, and "Order on WhatsApp" green button.
Testimonials strip at bottom with star ratings. Clean appetizing food website design, Inter font, warm color palette. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "caterease-2.png",
    prompt: `Ultra high quality UI screenshot of a catering website's dynamic menu management admin panel. 
Dark sidebar navigation on left (Dashboard, Menu Items, Categories, Orders, Quotations, Pricing, Reports). Selected: "Menu Items".
Main area: A data table listing food items — columns: Photo (small thumbnail), Dish Name, Category, Per Plate Price (INR editable inline), Veg/Non-Veg badge (green leaf / red icon), Status (Active/Hidden toggle switch), Actions (Edit/Delete).
Top of table: "Add New Dish" orange button, search bar, category filter dropdown.
Side panel (right): "Quick Price Update" panel showing vegetables and grocery items with current prices and editable fields — e.g., "Potato ₹25/kg", "Tomato ₹40/kg" — with "Update Live Prices" button in orange gradient.
Bottom: a banner "All price changes reflect live on website instantly". Warm orange-amber admin UI design, professional SaaS dashboard aesthetic. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "caterease-3.png",
    prompt: `Ultra high quality UI screenshot of a catering platform's quotation builder and order management screen.
Warm orange-yellow theme (#f83600 to #f9d423) accents on white background.
LEFT HALF — Quotation Builder form: Fields — Event Type (dropdown: Wedding/Birthday/Corporate), Event Date (date picker), Number of Guests (number input), Venue (text), Menu Selection (multi-select checkboxes for dishes grouped by category). 
Below form: a live price summary card showing selected items, per-plate rate, total guests, sub-total, GST, and GRAND TOTAL in bold orange.
"Generate PDF Quote" orange button and "Send via WhatsApp" green button at bottom.
RIGHT HALF — Active Orders panel: A kanban-style board with columns: Confirmed, In Preparation, Dispatched, Delivered. Each order card shows: client name, event date, guest count, total value, and a colored status chip. 
Bottom: Revenue chart bar graph showing monthly catering bookings. Food-themed professional UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 9 — BeatStream: Music Channel App
  // Theme: Deep dark (#0d0d0d), electric blue-teal & purple neon accents
  // ══════════════════════════════════════════════════════
  {
    filename: "beatstream.png",
    prompt: `Ultra high quality UI screenshot of a premium music streaming app called "BeatStream" — built for an independent music creator. 
Very dark background (#0d0d0d) with electric teal (#0b8793) and deep purple (#360033) gradient accents. Glassmorphism card style.
Top navigation: "BeatStream" logo with sound wave icon, menu: Home, Categories, My Library, Premium.
Hero section: Artist spotlight banner with dark abstract music waveform artwork, "New Release: Midnight Lo-Fi Vol. 3" title, play button with teal glow.
Below: Music category cards in a horizontal row — Lo-Fi Beats (moon icon), Hip-Hop (fire icon), Classical Fusion (sitar icon), EDM (lightning icon), Meditation (lotus icon), Cinematic (film icon) — each card has dark glass background, category thumbnail, and track count.
Featured tracks section: Track list rows showing track artwork (small square), track title, duration, a lock icon on premium tracks (gold), free preview tag on free tracks, and play button.
Bottom: Mini player bar showing currently playing track with progress bar, teal waveform animation, and premium upgrade prompt. Dark music app aesthetic, glassmorphism UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "beatstream-2.png",
    prompt: `Ultra high quality UI screenshot of a music streaming app's premium subscription and track detail page. 
Very dark (#0d0d0d) background with teal-purple neon gradient accents.
LEFT HALF — Premium Subscription Plans page: Two plan cards side by side.
Monthly plan card: "₹99/month", features list (Unlimited tracks, HD audio, Offline download, No ads), "Subscribe Now" teal button.
Annual plan card: "₹799/year (Save 33%)" — highlighted with glowing teal border, "BEST VALUE" badge, same features + "Priority new releases". "Get Annual Plan" button in teal gradient.
Payment powered by Razorpay badge. "Cancel anytime" reassurance text.
RIGHT HALF — Track Detail page: Large album art square with abstract waveform art, track title "Midnight Rain — Lo-Fi Beat", artist name, duration 3:42, play/pause controls, progress bar with waveform visualization in teal, Like button, Download button (premium only, gold lock icon for free users), Share button. 
"You're listening to a 30-second preview. Upgrade to Premium for full access." banner at bottom. Dark aesthetic, premium music UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "beatstream-3.png",
    prompt: `Ultra high quality UI screenshot of a music channel app's admin panel for content management. 
Dark sidebar on left: Dashboard, Upload Track, Categories, Subscribers, Analytics, Notifications. Selected: Analytics.
Main area: 
Top row — 4 KPI cards: "Total Subscribers: 847" in teal, "Premium: 623" in purple, "Monthly Revenue: ₹61,677" in green, "Tracks Live: 94" neutral.
Center: Two charts side by side — Left: Line chart "Subscriber Growth" over 6 months with teal filled area. Right: Donut chart "Revenue by Plan" showing Monthly vs Annual split in teal/purple.
Bottom: "Top Played Tracks" table showing rank number, track name, category, play count, and a small bar showing relative popularity.
Right panel: "Send Push Notification" form with message field, target audience dropdown (All/Premium/Free), and "Send Now" teal button.
Dark professional admin dashboard with teal-purple accents. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 10 — PropVista: Real Estate Platform
  // Theme: Deep navy blue (#1a3a5c → #2196f3), clean professional white cards
  // ══════════════════════════════════════════════════════
  {
    filename: "propvista.png",
    prompt: `Ultra high quality UI screenshot of a professional real estate website homepage called "PropVista". 
Deep navy-to-blue gradient (#1a3a5c to #2196f3) hero section. Clean white body background with blue accents.
Hero: Full-width section with a modern city skyline/apartment building background, overlay search bar with property type dropdown (Buy/Rent), location input, BHK selector, price range slider, and "Search Properties" blue button.
Stats strip below hero: "500+ Properties Listed", "150+ Happy Buyers", "12 Years Experience", "₹200Cr+ Transactions" in four columns with blue icons.
Featured Properties section: 3 property cards in a row — each showing property image placeholder, "2 BHK Apartment" title, location "Vesu, Surat", area "1,100 sq ft", price "₹65 Lakhs", amenities icons (parking, elevator, gym), "View Details" button and "Enquire Now" button in blue.
"Why Choose Us" section with icons: Verified Properties, Transparent Pricing, End-to-End Support. Professional real estate website aesthetic, Inter font. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "propvista-2.png",
    prompt: `Ultra high quality UI screenshot of a real estate website's property detail and listing filter page.
Deep navy-blue (#1a3a5c to #2196f3) accents on white background.
LEFT — Advanced Filter sidebar: Filters stacked vertically — Property Type (checkboxes: Apartment, Villa, Plot, Commercial), BHK (1/2/3/4+ toggle buttons in blue), Price Range slider (₹20L to ₹2Cr), Area (sq ft slider), Possession (Ready to Move / Under Construction toggle), Amenities (checkboxes: Parking, Gym, Swimming Pool, Lift, CCTV, Garden).
CENTER/RIGHT — Property listing grid (2 columns): Property cards each with a banner showing "RERA Approved" badge, property image placeholder, BHK-type label, price in large bold, location with map pin icon, area, key amenities icons row, "Interested" heart icon and "View Details" blue button. 
Top of listing: "124 properties found in Surat" with Sort by dropdown (Price, Date, Area). 
Google Maps embed at the top right showing property markers as blue pins on Surat city map. Professional real estate UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "propvista-3.png",
    prompt: `Ultra high quality UI screenshot of a real estate CRM admin panel for lead management and property management.
Deep navy blue (#1a3a5c) sidebar, white main area with blue accent buttons.
LEFT SIDEBAR: Navigation — Dashboard, Properties, Leads, Agents, Analytics, Reports.
MAIN AREA (Dashboard selected):
Top row: KPI cards — "Total Properties: 124", "New Leads Today: 18" in blue, "Site Visits Scheduled: 7" in amber, "Deals Closed: 23" in green.
Center: Lead pipeline Kanban board — columns: New Inquiry, Contacted, Site Visit, Negotiation, Closed (Won/Lost). Lead cards showing client name, property interest, lead source (Website/Walk-in), assigned agent name, last contact date.
Bottom: Two charts — Monthly leads bar chart (blue bars) and Leads by source donut chart (Website, Referral, Social Media, Walk-in).
Right: "Today's Follow-ups" list showing agent name, client name, time, and action (Call/Visit) buttons. Professional real estate admin dashboard. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 11 — FitZone: Gym Management Platform
  // Theme: Very dark (#0f2027), energetic orange (#ff6a00) accent
  // ══════════════════════════════════════════════════════
  {
    filename: "fitzone.png",
    prompt: `Ultra high quality UI screenshot of a modern gym website homepage called "FitZone". 
Very dark background (#0f2027) with vibrant orange (#ff6a00) gradient accents. High energy fitness aesthetic.
Hero: Full-width dark section with a muscular silhouette/gym equipment background, dramatic orange glow overlay. Bold headline "Transform Your Body. Transform Your Life." with subtitle "Join Surat's Premier Fitness Center". Two CTA buttons: "Join Now" (orange gradient, glowing) and "View Membership Plans" (outlined orange).
Membership Plans section: 3 plan cards — Basic (₹999/month), Pro (₹1,499/month highlighted with orange border and "MOST POPULAR" badge), Annual Elite (₹9,999/year). Each shows: plan name, price, feature list (Classes, Personal Training, Nutrition Plan checkmarks).
Trainers section: 3 trainer profile cards with photo circle placeholder, name, specialty (Weight Training, Yoga, HIIT), experience years, and "Book a Session" button.
Class schedule mini-preview strip showing today's classes with time and type. Dark energy gym website, bold typography. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "fitzone-2.png",
    prompt: `Ultra high quality UI screenshot of a gym management member portal and class booking interface.
Very dark (#0f2027) background with orange (#ff6a00) accents.
LEFT HALF — Member Dashboard: Circular member avatar, member name "Rahul Sharma", plan "Pro Member", membership expiry "Valid till: 30 Jun 2025" with orange countdown "22 days left" warning.
Stats row: Attendance this month (18/26 sessions), Classes booked (3), Streak (5 days).
Trainer info card: assigned trainer photo, name, "Your Trainer: Vikram Patel", contact button.
Diet Plan card: "Download this week's diet plan" PDF button in orange.
RIGHT HALF — Class Booking interface: A weekly schedule grid (Mon–Sun columns, time rows 6AM–8PM). Classes shown as colored blocks: Zumba (pink), CrossFit (orange), Yoga (green), HIIT (red). Clicking a slot shows "Book Class" modal with trainer name, duration, current capacity (18/20 spots). "Book Now" orange button.
Dark fitness app UI, motivational and energetic. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "fitzone-3.png",
    prompt: `Ultra high quality UI screenshot of a gym management admin dashboard for owner/manager.
Dark (#0f2027) sidebar navigation, white/dark card main area with orange (#ff6a00) accents.
Top KPI row: "Active Members: 340" orange card, "Expiring This Week: 28" amber card, "Revenue This Month: ₹3.4L" green card, "Classes Today: 8" blue card.
Center LEFT: Attendance heatmap calendar showing daily attendance density for the current month (color intensity from light to dark orange).
Center RIGHT: "Membership Renewal Alerts" list — members with expiry in next 7 days, name, plan, expiry date, and "Send WhatsApp Reminder" green button per row.
Bottom LEFT: Revenue breakdown donut chart — Monthly / Quarterly / Annual / Day Pass in orange shades.
Bottom RIGHT: QR Code attendance scanner UI mockup — a QR scan frame with orange corners and "Scan Member QR to Mark Attendance" instruction below. "Manual Entry" fallback button. Dark gym admin dashboard, professional and functional. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 12 — FabricSurat: Cloth & Textile Marketplace
  // Theme: Rich crimson-purple (#c94b4b → #4b134f), Surat textile market inspired
  // ══════════════════════════════════════════════════════
  {
    filename: "fabricsurat.png",
    prompt: `Ultra high quality UI screenshot of a Surat cloth and textile marketplace website called "FabricSurat". 
Rich crimson-to-purple gradient (#c94b4b to #4b134f) hero section. Cream/white body background with crimson accents.
Hero: Banner with a vibrant Indian textile fabric pattern background (colorful sarees/silk), overlay text "India's Premium Fabric Hub — Direct from Surat" with subtitle "Silk · Georgette · Cotton · Chiffon · Wedding Fabrics", two buttons: "Browse Catalogue" (crimson) and "Order via WhatsApp" (green WhatsApp icon).
Fabric category chips row: Saree Fabric, Suit Material, Lehenga Fabric, Running Fabric, Dupatta, Dress Material — colorful pill buttons.
Product grid: 4 product cards each showing fabric swatch image placeholder, fabric name "Pure Georgette Silk", color variants as small colored circles, "From ₹280/meter" retail price, "Wholesale: ₹195/meter" B2B price in smaller text, minimum order "MOQ: 10 meters", "Order on WhatsApp" green button.
"Verified Surat Manufacturer" trust badge strip at bottom. Vibrant Indian textile e-commerce design. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "fabricsurat-2.png",
    prompt: `Ultra high quality UI screenshot of a textile marketplace product detail page and sample request system.
Cream-white background with crimson-purple (#c94b4b to #4b134f) accents.
LEFT — Product Detail: Large fabric swatch display area showing a vibrant silk georgette fabric pattern. Thumbnail strip below with 4 color variants (each a different colored swatch). 
Product info panel: Fabric name "Pure Silk Georgette — Floral Print", Material composition "100% Polyester Georgette", Width "44 inches", GSM "75 GSM", Available Colors (8 color dots), Retail Price "₹320/meter", Wholesale Price "₹220/meter (Min 10m)" in smaller text, GSTIN badge "GST 5% included".
"Order via WhatsApp" green button (large, prominent), "Request Sample" outlined crimson button below.
RIGHT — Sample Request Form: Compact form — Select Fabric (dropdown), Color Preference, Delivery Address, Mobile Number. Sample fee note "₹99 sample fee (adjusted in bulk order)". "Submit Sample Request" crimson button. 
Below: "Bulk Order Inquiry" section with MOQ, delivery time, and customization options. Indian textile market UI, rich and vibrant. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "fabricsurat-3.png",
    prompt: `Ultra high quality UI screenshot of a textile marketplace admin panel for product and pricing management.
Dark crimson-purple sidebar (#4b134f), white main area with crimson accents.
LEFT SIDEBAR: Navigation — Dashboard, Products, Categories, Wholesale Buyers, Sample Requests, Orders, Analytics.
MAIN AREA (Products selected):
Top: "Add New Product" crimson button, search bar, category filter, fabric type filter.
Product table: Columns — Fabric Image (small swatch thumbnail), Product Name, Category, Retail Price/meter (editable), Wholesale Price/meter (editable), MOQ, Stock Status (In Stock green / Low Stock amber / Out of Stock red badge), Actions.
One row selected/expanded showing: price edit inputs for retail and wholesale with "Save" button. Note: "Price updated instantly on live website".
Bottom section: "Wholesale Buyer Verification" panel showing pending B2B registration requests with business name, GSTIN field, and "Verify & Approve" or "Reject" buttons. Textile business admin UI, professional and functional. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },

  // ══════════════════════════════════════════════════════
  // PROJECT 13 — DiamondCRM: Surat Trader CRM & Accounting Software
  // Theme: Dark charcoal (#373b44), electric blue (#4286f4), diamond shine silver accents
  // ══════════════════════════════════════════════════════
  {
    filename: "diamondcrm.png",
    prompt: `Ultra high quality UI screenshot of a professional CRM software called "DiamondCRM" for diamond and textile printing traders in Surat. 
Dark charcoal (#373b44) background with electric blue (#4286f4) accents. Silver/diamond shimmer accent on logo and headers.
Top navigation: "DiamondCRM" logo with small diamond icon, menu: Dashboard, Clients, Stock, Accounts, Quotations, Reports.
Dashboard main view:
Top KPI cards row: "Total Clients: 284" blue, "Outstanding Receivable: ₹18.4L" amber (warning), "Today's Collection: ₹2.1L" green, "Active Lots (Diamond): 47" silver.
CENTER LEFT: "Aging Report" table — Client Name, Total Outstanding, 0-30 Days, 31-60 Days, 61-90 Days, 90+ Days. Cells color-coded: green (current), yellow (30-60), orange (60-90), red (90+ overdue). "Send Reminder" button per row.
CENTER RIGHT: Line chart "Monthly Cash Flow" — receivables vs. collections over 6 months in blue.
BOTTOM: "Today's Follow-ups" — 5 client cards with name, outstanding amount, last contact date, and "Call" / "WhatsApp" action buttons. Dark professional CRM design with blue accents. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "diamondcrm-2.png",
    prompt: `Ultra high quality UI screenshot of a diamond trader stock management and client 360 view in DiamondCRM software.
Dark charcoal (#373b44) background, electric blue (#4286f4) accents, silver highlights.
LEFT HALF — Diamond Stock Lot Table: 
Table title "Diamond Inventory — Current Lots". Columns: Lot ID, Shape (Round/Princess/Oval), Carat Weight, Color Grade (D/E/F/G), Clarity (IF/VVS1/VS1), Cut (Excellent/Very Good), Price/Carat (USD), Total Value, Status (In Stock / On Memo / Sold). 
Filter bar: Shape dropdown, Carat range slider, Color/Clarity checkboxes.
"Add New Lot" blue button at top. Each row has "View Cert" link and "Create Memo" button.
RIGHT HALF — Client 360 View for a selected client: 
Client profile header: Business name "Shah Diamond Traders", city "Surat", credit limit ₹50L, current outstanding ₹12.3L shown with a progress bar.
Timeline below: Recent activity log — "Memo issued: Lot #DT-2041 (2.3ct)", "Payment received: ₹3.5L", "Call logged: discussed new lot", "Invoice #INV-0234 sent". Each with timestamp and blue dot.
"View Full Ledger" blue button at bottom. Professional B2B trading software UI. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "diamondcrm-3.png",
    prompt: `Ultra high quality UI screenshot of CRM accounting module showing GST invoice generation and account ledger for DiamondCRM.
Dark charcoal (#373b44) sidebar, clean white main area with blue (#4286f4) accents.
LEFT HALF — GST Invoice Generator:
Form fields: Client Name (autocomplete dropdown), Invoice Date, Due Date, Line Items table (Description, HSN Code, Qty, Rate, Amount — addable rows), GST calculation auto-fill (CGST 1.5% + SGST 1.5% for intra-state, IGST 3% for inter-state based on client state).
Invoice preview card on the right side of form showing a professional branded invoice with DiamondCRM letterhead, all items listed, tax breakup, total in bold, and payment terms.
"Generate PDF Invoice" blue button, "Mark as Sent" outlined button, "Record Payment" green button.
RIGHT HALF — Account Ledger view: Client "Patel Textile Traders" ledger table — Date, Narration (Invoice/Payment/Debit Note), Debit, Credit, Running Balance. Closing balance highlighted in amber showing ₹4.2L outstanding. "Export Ledger PDF" and "Email to Client" buttons. Professional accounting software design with blue accents. Photorealistic UI mockup, 16:9 aspect ratio.`,
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
      const buffer = Buffer.isBuffer(imgData) ? imgData : Buffer.from(imgData, "base64");
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Saved: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } else {
      console.warn(`⚠️  No image bytes for ${filename}`);
    }
  } catch (err) {
    console.error(`❌ Error for ${filename}:`, (err?.message ?? String(err)).slice(0, 300));
  }
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`🚀 Generating 18 images for 6 new projects using imagen-4.0...\n`);
  for (let i = 0; i < images.length; i++) {
    await generateImage(images[i].prompt, images[i].filename);
    if (i < images.length - 1) {
      process.stdout.write("   ⏱  Waiting 5s...\r");
      await sleep(5000);
    }
  }
  console.log("\n🎉 Done! All 18 images saved to public/projects/");
}

main();
