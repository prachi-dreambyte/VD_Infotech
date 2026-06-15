"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ToolsPlatformsSection.module.css";

// Row 1: Marketing & Analytics
const row1Tools = [
  { name: "Ahrefs", path: "/assets/image/Tools & Platforms/marketing and analytics/ahrefs logo.png" },
  { name: "Google Tag Manager", path: "/assets/image/Tools & Platforms/marketing and analytics/gogle tag manager.png" },
  { name: "Google Search Console", path: "/assets/image/Tools & Platforms/marketing and analytics/google_search_console_.png" },
  { name: "Google Analytics", path: "/assets/image/Tools & Platforms/marketing and analytics/Logo_Google_Analytics.png" },
  { name: "SEMrush", path: "/assets/image/Tools & Platforms/marketing and analytics/semrush_ogo-.png" },
];

// Row 2: Advertising
const row2Tools = [
  { name: "Google Ads", path: "/assets/image/Tools & Platforms/ADVERTISING/google-ads-icon.png" },
  { name: "LinkedIn Ads", path: "/assets/image/Tools & Platforms/ADVERTISING/linkedin-ads.png" },
  { name: "Meta Ads", path: "/assets/image/Tools & Platforms/ADVERTISING/meta-ads.webp" },
];

// Row 3: Design, Development & AI
const row3Tools = [
  { name: "Adobe Photoshop", path: "/assets/image/Tools & Platforms/DESIGN AND CREATIVE/Adobe-Photoshop-Logo.png" },
  { name: "Adobe Illustrator", path: "/assets/image/Tools & Platforms/DESIGN AND CREATIVE/Adobe_Illustrator_CC_icon.svg.png" },
  { name: "Canva", path: "/assets/image/Tools & Platforms/DESIGN AND CREATIVE/Canva-Emblem.png" },
  { name: "Figma", path: "/assets/image/Tools & Platforms/DESIGN AND CREATIVE/figma.png" },
  { name: "HTML", path: "/assets/image/Tools & Platforms/DEVELOPMENT/html.png" },
  { name: "MongoDB", path: "/assets/image/Tools & Platforms/DEVELOPMENT/mongodb.png" },
  { name: "Next.js", path: "/assets/image/Tools & Platforms/DEVELOPMENT/nextjs-icon.png" },
  { name: "Node.js", path: "/assets/image/Tools & Platforms/DEVELOPMENT/nodejs-logo.png" },
  { name: "React", path: "/assets/image/Tools & Platforms/DEVELOPMENT/React-icon.svg.png" },
  { name: "Shopify", path: "/assets/image/Tools & Platforms/DEVELOPMENT/shopify logo.png" },
  { name: "WordPress", path: "/assets/image/Tools & Platforms/DEVELOPMENT/word press.png" },
  { name: "ChatGPT", path: "/assets/image/Tools & Platforms/AI and automation/ChatGPT-Logo.png" },
  { name: "Claude", path: "/assets/image/Tools & Platforms/AI and automation/Claude_AI_logo.svg.png" },
  { name: "Gemini", path: "/assets/image/Tools & Platforms/AI and automation/gemini logo.png" },
  { name: "Make", path: "/assets/image/Tools & Platforms/AI and automation/make-logo.png" },
  { name: "n8n", path: "/assets/image/Tools & Platforms/AI and automation/n8n-logo.png" },
  { name: "Zapier", path: "/assets/image/Tools & Platforms/AI and automation/Zapier_full.png" },
];

export default function ToolsPlatformsSection() {
  return (
    <section className={styles.toolsSection} aria-label="Tools and platforms we use">
      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Powered by Industry-Leading Tools</h2>
            <p className={styles.subtitle}>
              We combine expertise with industry-leading platforms to deliver smarter marketing, 
              better insights, streamlined workflows, and measurable business growth.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-right" delay={100}>
          <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {[...row1Tools, ...row1Tools].map((tool, index) => (
                <div key={index} className={styles.logoCard}>
                  <Image
                    src={tool.path}
                    alt={tool.name}
                    width={120}
                    height={60}
                    className={styles.logoImage}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={150}>
          <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {[...row2Tools, ...row2Tools, ...row2Tools].map((tool, index) => (
                <div key={index} className={styles.logoCard}>
                  <Image
                    src={tool.path}
                    alt={tool.name}
                    width={120}
                    height={60}
                    className={styles.logoImage}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-right" delay={200}>
          <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {[...row3Tools, ...row3Tools].map((tool, index) => (
                <div key={index} className={styles.logoCard}>
                  <Image
                    src={tool.path}
                    alt={tool.name}
                    width={120}
                    height={60}
                    className={styles.logoImage}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
