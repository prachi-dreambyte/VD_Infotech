"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Search,
  Activity,
  Compass,
  PenTool,
  Rocket,
  TrendingUp,
  Crown,
  ChevronRight,
} from "lucide-react";
import styles from "./ProcessSection.module.css";

const processSteps = [
  {
    id: 1,
    title: "Decode",
    description: "Understand the business in depth — its model, market, and competitive position.",
    color: "#e31e24",
    glowColor: "rgba(227,30,36,0.22)",
    tag: "Discovery",
    Icon: Search,
  },
  {
    id: 2,
    title: "Diagnose",
    description: "Identify problems, performance gaps, and untapped growth levers.",
    color: "#1d6fe8",
    glowColor: "rgba(29,111,232,0.22)",
    tag: "Analysis",
    Icon: Activity,
  },
  {
    id: 3,
    title: "Direction",
    description: "Set a clear, measurable growth strategy with defined north-star goals.",
    color: "#e31e24",
    glowColor: "rgba(227,30,36,0.22)",
    tag: "Strategy",
    Icon: Compass,
  },
  {
    id: 4,
    title: "Design",
    description: "Build the structural and creative blueprint — systems, brand, and assets.",
    color: "#1d6fe8",
    glowColor: "rgba(29,111,232,0.22)",
    tag: "Creative",
    Icon: PenTool,
  },
  {
    id: 5,
    title: "Deploy",
    description: "Launch campaigns, SEO, ads, and branding across the right channels.",
    color: "#e31e24",
    glowColor: "rgba(227,30,36,0.22)",
    tag: "Launch",
    Icon: Rocket,
  },
  {
    id: 6,
    title: "Drive",
    description: "Continuously improve and optimize performance using data and feedback.",
    color: "#1d6fe8",
    glowColor: "rgba(29,111,232,0.22)",
    tag: "Optimize",
    Icon: TrendingUp,
  },
  {
    id: 7,
    title: "Dominate",
    description: "Scale operations and achieve sustained market leadership and growth.",
    color: "#e31e24",
    glowColor: "rgba(227,30,36,0.22)",
    tag: "Scale",
    Icon: Crown,
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleClick = (id) =>
    setActiveStep((prev) => (prev === id ? null : id));

  const currentStep = hoveredStep ?? activeStep;
  const trackFillPercent = currentStep
    ? Math.round((currentStep / processSteps.length) * 100)
    : 0;

  return (
    <section className={styles.processSection} aria-label="Our Growth Process">
      {/* Background image + overlay handled entirely in CSS */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Where Strategy Becomes Results</h2>
            <p className={styles.subtitle}>
              Our proven 7-step framework transforms businesses from raw insight
              to undisputed market leadership.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className={styles.desktopStrip}>
          {processSteps.map((step, index) => {
            const { Icon } = step;
            const highlighted =
              activeStep === step.id || hoveredStep === step.id;
            return (
              <div
                key={step.id}
                className={`${styles.desktopCard} ${highlighted ? styles.desktopCardActive : ""}`}
                style={{
                  "--step-color": step.color,
                  "--step-glow": step.glowColor,
                }}
                onClick={() => handleClick(step.id)}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                role="button"
                tabIndex={0}
                aria-expanded={activeStep === step.id}
                onKeyDown={(e) => e.key === "Enter" && handleClick(step.id)}
              >
                <div className={styles.desktopCardInner}>
                  <div
                    className={`${styles.iconWrap} ${highlighted ? styles.iconWrapActive : ""}`}
                  >
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className={styles.stepNum}>0{step.id}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p
                    className={`${styles.stepDesc} ${highlighted ? styles.stepDescVisible : ""}`}
                  >
                    {step.description}
                  </p>
                  <span
                    className={`${styles.stepTag} ${highlighted ? styles.stepTagVisible : ""}`}
                  >
                    {step.tag}
                  </span>
                </div>

                {index < processSteps.length - 1 && (
                  <ChevronRight
                    className={styles.chevron}
                    size={14}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={100}>
          <div className={styles.mobileTimeline}>
          <div className={styles.track}>
            <div
              className={styles.trackFill}
              style={{ height: `${trackFillPercent}%` }}
            />
          </div>

          {processSteps.map((step) => {
            const { Icon } = step;
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                className={`${styles.mobileStep} ${isActive ? styles.mobileStepActive : ""}`}
                style={{
                  "--step-color": step.color,
                  "--step-glow": step.glowColor,
                }}
                onClick={() => handleClick(step.id)}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onKeyDown={(e) => e.key === "Enter" && handleClick(step.id)}
              >
                <div className={styles.dotCol}>
                  <div
                    className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                  >
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className={styles.dotNum}>0{step.id}</span>
                </div>

                <div className={styles.mobileContent}>
                  <div className={styles.mobileRow}>
                    <h3 className={styles.mobileTitle}>{step.title}</h3>
                    <span
                      className={`${styles.mobileTag} ${isActive ? styles.mobileTagVisible : ""}`}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <p
                    className={`${styles.mobileDesc} ${isActive ? styles.mobileDescOpen : ""}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className={styles.note}>
            <p>
              This systematic approach ensures every aspect of your business gets
              the attention it deserves — turning potential into measurable,
              repeatable growth.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}