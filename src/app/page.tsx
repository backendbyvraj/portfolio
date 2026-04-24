import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Vraj Pandya | Full Stack Developer – Web, App, CRM, AI & Trading Solutions Worldwide",
  description:
    "Hire Vraj Pandya – Full Stack Developer worldwide. Portfolio includes AI content platform, real-time towing app, school management SaaS, Python trading bot, global telemedicine, sports club management, and payment gateway integrations. React, Next.js, Flutter, Laravel, Python, Node.js expert.",
  keywords: [
    "Vraj Pandya",
    "AI content platform developer",
    "school management system developer",
    "towing app developer",
    "Flutter Laravel developer",
    "Python trading bot developer",
    "AngelOne trading bot",
    "sports club management software",
    "telemedicine platform developer",
    "global doctor appointment app",
    "CRM developer for hire",
    "payment gateway integration Razorpay",
    "Apple Pay integration developer",
    "HDFC payment gateway developer",
    "multi school management SaaS",
    "real-time app developer",
    "web app developer worldwide",
    "Next.js Node.js developer",
    "full stack developer portfolio",
    "hire remote developer",
  ],
  alternates: {
    canonical: "https://vrajpandya.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Hero />
      <Stats />
      <FeaturedProjects />
      <WhyWorkWithMe />
      <Skills />
      <Contact />
    </>
  );
}
