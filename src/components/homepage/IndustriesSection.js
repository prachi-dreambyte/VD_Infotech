"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./IndustriesSection.module.css";

const industries = [
  {
    id: 1,
    name: "Real Estate",
    icon: "ti-building-estate",
    desc: "Property marketing, lead generation & digital presence",
    accent: "blue",
  },
  {
    id: 2,
    name: "IT & SaaS",
    icon: "ti-cpu",
    desc: "Tech company marketing & B2B lead acquisition",
    accent: "red",
  },
  {
    id: 3,
    name: "Hospitality",
    icon: "ti-bed",
    desc: "Hotel, restaurant & tourism promotion",
    accent: "blue",
  },
  {
    id: 4,
    name: "Manufacturing",
    icon: "ti-tools",
    desc: "Industrial marketing & B2B manufacturing promotion",
    accent: "red",
  },
  {
    id: 5,
    name: "Automobiles",
    icon: "ti-car",
    desc: "Automotive marketing & dealership promotion",
    accent: "blue",
  },
  {
    id: 6,
    name: "Healthcare",
    icon: "ti-stethoscope",
    desc: "Medical practice marketing & patient acquisition",
    accent: "red",
  },
  {
    id: 7,
    name: "Travel",
    icon: "ti-plane",
    desc: "Travel agency marketing & vacation package sales",
    accent: "blue",
  },
  {
    id: 8,
    name: "FMCG",
    icon: "ti-shopping-cart",
    desc: "Fast-moving consumer goods & retail promotion",
    accent: "red",
  },
  {
    id: 9,
    name: "Beauty & Salon",
    icon: "ti-sparkles",
    desc: "Beauty industry marketing & salon brand building",
    accent: "blue",
  },
  {
    id: 10,
    name: "Fashion",
    icon: "ti-hanger",
    desc: "Fashion brand marketing & clothing retail strategies",
    accent: "red",
  },
  {
    id: 11,
    name: "Education",
    icon: "ti-school",
    desc: "Educational institution marketing & student enrollment",
    accent: "blue",
  },
  {
    id: 12,
    name: "Local Businesses",
    icon: "ti-map-pin",
    desc: "Local business marketing & community engagement",
    accent: "red",
  },
  {
    id: 13,
    name: "Startups",
    icon: "ti-rocket",
    desc: "Startup marketing & early-stage growth strategies",
    accent: "blue",
  },
];

export default function IndustriesSection() {
  const tickerRef = useRef(null);

  useEffect(() => {
    // Load Tabler Icons if not already loaded
    if (!document.querySelector('link[href*="tabler-icons"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className={styles.section} aria-label="Industries We Empower">
      <ScrollReveal animation="fade-up">
        <div className={styles.header}>
          <div className={styles.heroRow}>
            <h2 className={styles.title}>
              Industries We <span className={styles.titleRed}>Empower</span>
            </h2>
            <p className={styles.subtitle}>
              Every industry is different. That&apos;s why we create strategies
              according to your business and goals — not a copy-paste plan.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-in" delay={100}>
        <div className={styles.tickerWrap} aria-hidden="true">
        <div className={styles.tickerTrack} ref={tickerRef}>
          {[...industries, ...industries].map((ind, i) => (
            <span key={i} className={styles.tickerItem}>
              <i className={`ti ${ind.icon}`} aria-hidden="true" />
              {ind.name}
              <span className={styles.tickerDot} />
            </span>
          ))}
        </div>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {industries.map((ind, i) => (
          <ScrollReveal key={ind.id} animation="zoom-in" delay={i * 50}>
            <div
              className={`${styles.card} ${
                ind.accent === "red" ? styles.cardRed : styles.cardBlue
              }`}
            >
            <div className={styles.iconBox}>
              <i className={`ti ${ind.icon}`} aria-hidden="true" />
            </div>
            <h3 className={styles.cardName}>{ind.name}</h3>
            <p className={styles.cardDesc}>{ind.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

  
    </section>
  );
}