import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = "AIzaSyBrTIqjIT2ZY46Kzq6NxBmxFOvDxA0Gyn8";
const ai = new GoogleGenAI({ apiKey: API_KEY });
const OUT_DIR = path.join(__dirname, "public", "projects");

// ══════════════════════════════════════════════════════
// PROJECT 3 — EduSphere School Management SaaS
// Theme: Deep teal-to-emerald green (#11998e → #38ef7d), clean white cards
// ══════════════════════════════════════════════════════
const images = [
  {
    filename: "edusphere.png",
    prompt: `Ultra high quality UI screenshot of a modern school management SaaS dashboard called "EduSphere". 
Clean white background with teal-to-emerald green gradient (#11998e to #38ef7d) as the primary accent color. 
Top navigation bar: "EduSphere" logo in teal, menu items: Dashboard, Schools, Students, Teachers, Exams, Fees, Reports. Role badge "Global Super Admin" in green pill. 
Hero stats row (4 cards): "Schools Managed: 15" with school building icon in teal, "Active Students: 5,000+" with graduation cap in green, "Teachers: 320" with teacher icon, "Exams Today: 8" with paper icon — all white cards with teal accent borders and upward trend arrows. 
Center: A multi-school list table showing school names, city, student count, active status (green badge), and quick action buttons (View / Manage). 
Right sidebar: "Today's Activity" feed showing recent logins, exam completions, fee payments as timeline items with teal dots. 
Bottom: Two mini charts — student enrollment trend (line chart, teal) and fee collection bar chart (green bars). 
Clean modern SaaS design, Inter font, rounded cards, soft shadows. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "edusphere-2.png",
    prompt: `Ultra high quality UI screenshot of a school exam module and MCQ gamification screen for "EduSphere" school management platform. 
Teal-to-emerald green (#11998e to #38ef7d) accent theme on white background. 
LEFT PANEL — Exam Builder: A form for creating a new exam — fields: Exam Title, Subject (dropdown), Class (dropdown), Date & Time picker, Duration (minutes), Question Type toggle (MCQ / Descriptive). Below: a question bank panel showing 5 MCQ questions with radio options, edit and delete icons per question. Green "Add Question" button. "Generate Paper" button in teal gradient at bottom. 
RIGHT PANEL — MCQ Practice Game Mode: A colorful gamified quiz interface. A question card in the center showing a math question. Four answer option buttons in colored cards (teal, green, amber, coral). Top bar: student avatar, username, score "240 pts", a countdown timer ring showing "00:28". Leaderboard sidebar showing top 5 students with avatars, names and scores with trophy icons for top 3. 
Vibrant, engaging edu-tech design. Photorealistic UI mockup, 16:9 aspect ratio.`,
  },
  {
    filename: "edusphere-3.png",
    prompt: `Ultra high quality UI screenshot of a student tracking and parent portal dashboard for "EduSphere" school management SaaS. 
Teal-to-emerald green (#11998e to #38ef7d) accents on clean white background. 
TOP SECTION — Student Profile page: Student photo avatar (circle), name "Aryan Sharma", Class 10-A, School name, Attendance badge "92% Present" in green, GPA "8.7 / 10". 
Below profile: 4 stat cards — Attendance %, Assignments Submitted, Upcoming Exams, Fee Status (Paid — green badge). 
CENTER — Performance chart: A radar/spider chart showing scores in 6 subjects (Math, Science, English, Hindi, History, Computer) with teal filled polygon. Below: recent exam results table with subject, date, marks obtained / total, grade (A+/B) colored chips. 
BOTTOM — Parent Portal section: A mobile-style preview card showing "Parent View" with push notification samples — "Aryan scored 95/100 in Math exam", "Fee due: ₹4,500 for April", "Attendance below 85% warning". A "Send WhatsApp Alert" button in green. 
Clean professional edu-tech SaaS design, rounded UI, soft card shadows. Photorealistic UI mockup, 16:9 aspect ratio.`,
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
      console.warn(`⚠️  No image bytes for ${filename}`);
    }
  } catch (err) {
    console.error(`❌ Error for ${filename}:`, (err?.message ?? String(err)).slice(0, 300));
  }
}

async function main() {
  console.log(`🚀 Generating EduSphere (School Management) images...\n`);
  for (let i = 0; i < images.length; i++) {
    await generateImage(images[i].prompt, images[i].filename);
    if (i < images.length - 1) {
      process.stdout.write("   ⏱  Waiting 5s...\r");
      await sleep(5000);
    }
  }
  console.log("\n🎉 Done! edusphere.png, edusphere-2.png, edusphere-3.png saved.");
}

main();
