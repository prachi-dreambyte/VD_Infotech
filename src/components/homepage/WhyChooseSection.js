"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./WhyChooseSection.module.css";

const reasonsData = [
  {
    id: 1,
    icon: "🔍",
    chips: ["Analysis", "Strategy", "Planning"],
    title: "The Work Starts Before Onboarding",
    description:
      "We start working on your business even before we shake hands. First, we analyze your current position and identify growth opportunities for your business. Only when you feel confident that the plan aligns with your goals do we move forward.",
    bullets: [],
  },
  {
    id: 2,
    icon: "🤝",
    chips: ["Consistency", "Quality", "Commitment"],
    title: 'Long-Term Partnership "No Compromise on Quality"',
    description:
      "We do not chase short-term projects. Many agencies show great enthusiasm in the beginning, but their quality drops over time. Our promise is simple: the same quality, consistency, and commitment from day one to day 1000. Quality always comes before quantity.",
    bullets: [],
  },
  {
    id: 3,
    icon: "👥",
    chips: ["Experts", "Startups", "Brands"],
    title: "Professionals Behind Your Growth",
    description:
      "Your business is your dream, and we respect that. At VD Infotech, your dream is in safe hands — we hire only experienced professionals.",
    bullets: [
      "If you are a Startup: We stand with you to help build your brand from zero.",
      "If you are an Established Brand: We work to increase your visibility, authority, and generate even more leads in the market.",
    ],
  },
  {
    id: 4,
    icon: "📈",
    chips: ["ROI", "Results", "Transparency"],
    title: "No Fake Promises, Only ROI and Results",
    description:
      "We do not sell unrealistic dreams that cannot be delivered. We ensure that every rupee you invest in marketing is utilized in the right place and comes back to your business in the form of actual business growth.",
    bullets: [],
  },
  {
    id: 5,
    icon: "🏢",
    chips: ["Marketing", "Branding", "AI Solutions", "Development"],
    title: "More Than a Digital Marketing Agency",
    description:
      "The biggest advantage for you is that you do not have to run to multiple vendors. From marketing, branding to AI solutions, website development, software development, to business automation, everything is available under one roof.",
    bullets: [],
  },
  {
    id: 6,
    icon: "🎯",
    chips: ["Custom Plan", "Unique Strategy", "Tailored"],
    title: "Custom Strategies, Not Templates",
    description:
      "We do not apply a copy-paste plan from another business to yours. Every business has a unique audience. That is why we create a completely customized marketing strategy based on your goals — one that is designed specifically for your business.",
    bullets: [],
  },
];

export default function WhyChooseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const active = reasonsData[activeTab];

  return (
    <section
      className={styles.whyChooseSection}
      aria-label="Why businesses choose VD Infotech"
    >
      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Why Businesses Choose VD Infotech</h2>
            <p className={styles.subtitle}>
              We are not just another digital marketing agency that you hire,
              complete a project with, and never hear from again. We are your
              business growth partner. Businesses choose to work with us and
              continue working with us because our approach is completely
              different.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className={styles.desktopLayout}>
          {/* Sidebar Tabs */}
          <div className={styles.sidebar} role="tablist">
            {reasonsData.map((reason, index) => (
              <button
                key={reason.id}
                className={`${styles.tab} ${
                  activeTab === index ? styles.tabActive : ""
                }`}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`panel-${index}`}
                onClick={() => setActiveTab(index)}
              >
                <div className={styles.tabNumber}>{reason.id}</div>
                <span className={styles.tabLabel}>{reason.title}</span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div
            className={styles.panel}
            id={`panel-${activeTab}`}
            role="tabpanel"
          >
            <div className={styles.panelBanner}>
              {/* Dark gradient overlay — sits between image and content */}
              <div className={styles.panelOverlay} />

              {/* Faint big number watermark */}
              <div className={styles.panelBigNumber}>
                {String(active.id).padStart(2, "0")}
              </div>

              {/* Content on top of overlay */}
              <div className={styles.panelContent}>
                <h3 className={styles.panelTitle}>{active.title}</h3>
                <p className={styles.panelDescription}>{active.description}</p>
                {active.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {active.bullets.map((bullet, i) => (
                      <li key={i} className={styles.bulletItem}>
                        <span className={styles.bulletIcon}>✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className={styles.accordion}>
          {reasonsData.map((reason, index) => (
            <div
              key={reason.id}
              className={`${styles.accItem} ${
                openAccordion === index ? styles.accItemOpen : ""
              }`}
            >
              <button
                className={styles.accHeader}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
              >
                <div className={styles.accNumber}>{reason.id}</div>
                <span className={styles.accTitle}>{reason.title}</span>
                <span className={styles.accChevron}>
                  {openAccordion === index ? "▲" : "▼"}
                </span>
              </button>
              {openAccordion === index && (
                <div className={styles.accBody}>
                  <p className={styles.accDescription}>{reason.description}</p>
                  {reason.bullets.length > 0 && (
                    <ul className={styles.bulletList}>
                      {reason.bullets.map((bullet, i) => (
                        <li key={i} className={styles.bulletItem}>
                          <span className={styles.bulletIcon}>✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}