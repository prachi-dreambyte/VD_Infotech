"use client";

import { Scissors, Landmark, Sofa } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./CaseStudiesSection.module.css";

const caseStudiesData = [
  {
    id: 1,
    title: "The Vanity",
    description: "A growing brand with ambitious goals, The Vanity partnered with us to enhance its digital presence, expand audience reach, and create stronger visibility across online channels.",
    stats: [
      { label: "Monthly Organic Traffic", value: "6K+" },
      { label: "Ranking Keywords", value: "900+" },
      { label: "Local Visibility", value: "Improved" }
    ],
    Icon: Scissors,
  },
  {
    id: 2,
    title: "Mera Gaon Mera Desh",
    description: "From a growing content platform to a destination visited by thousands every month, Mera Gaon Mera Desh continues to expand its reach and connect with a wider audience online.",
    stats: [
      { label: "Monthly Visitors", value: "6.6K+" },
      { label: "Audience Reach", value: "Growing" },
      { label: "Digital Presence", value: "Strong" }
    ],
    Icon: Landmark,
  },
  {
    id: 3,
    title: "SS Interiors Hub",
    description: "Transformed the brand's online presence with a modern, responsive website designed and developed to deliver a smooth and engaging user experience across every device.",
    stats: [
      { label: "Design", value: "Responsive" },
      { label: "Optimization", value: "Mobile" },
      { label: "Experience", value: "Fast & Friendly" }
    ],
    Icon: Sofa,
  }
];

export default function CaseStudiesSection() {
  return (
    <section className={styles.caseStudiesSection} aria-label="Real results and case studies">
      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <h2 className={styles.title}>
              Turning Goals Into <span>Growth</span>
            </h2>
            <p className={styles.intro}>
              As a growth-focused digital marketing company, we&apos;ve helped businesses strengthen
              their online presence, reach more customers, and achieve meaningful business growth
              through marketing, branding, and web development solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.caseStudiesGrid}>
          {caseStudiesData.map((study, index) => (
            <ScrollReveal key={study.id} animation="fade-up" delay={index * 120}>
              <div className={styles.caseStudyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <study.Icon size={22} color="#fff" strokeWidth={1.75} />
                </div>
                <h3 className={styles.caseStudyTitle}>{study.title}</h3>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.caseStudyDescription}>{study.description}</p>

                <div className={styles.statsGrid}>
                  {study.stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.successBadge}>Success Story</span>
              </div>

              <div className={styles.cardDecoration} aria-hidden="true">
                <div className={styles.cardCircle} />
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}