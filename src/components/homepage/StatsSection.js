"use client";

import ScrollReveal from "@/components/ScrollReveal";
import styles from "./StatsSection.module.css";

const statsData = [
  {
    id: 1,
    value: "200+",
    label: "Projects Delivered",
    description: "Successful projects across various industries"
  },
  {
    id: 2,
    value: "159+",
    label: "Happy Clients",
    description: "Satisfied customers who trust our services"
  },
  {
    id: 3,
    value: "10+",
    label: "Industries Served",
    description: "Diverse sectors we've worked with"
  },
  {
    id: 4,
    value: "7+",
    label: "Years Experience",
    description: "Years of expertise in digital solutions"
  }
];

export default function StatsSection() {
  return (
    <section className={styles.statsSection} aria-label="Company achievements and statistics">
      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Our Achievements</h2>
            <p className={styles.subtitle}>
              Trusted by businesses across industries for delivering exceptional results
            </p>
          </div>
        </ScrollReveal>
        
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <ScrollReveal key={stat.id} animation="zoom-in" delay={index * 100}>
              <div className={styles.statCard}>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statDescription}>{stat.description}</p>
                </div>
                <div className={styles.statDecoration} aria-hidden="true">
                  <div className={styles.statCircle} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}