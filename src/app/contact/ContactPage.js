"use client";

import Image from "next/image";
import Link from "next/link";
import { ProposalForm } from "@/components/ProposalForm";
import styles from "./contact.module.css";

const RESULTS = [
  {
    stat: "+218%",
    label: "Construction Company",
    bg: "linear-gradient(135deg, #1a5fb4 0%, #0b0d17 100%)",
    labelVariant: "red",
  },
  {
    stat: "+343%",
    label: "Healthcare Practice",
    bg: "linear-gradient(135deg, #e31e24 0%, #0d3d7a 100%)",
    labelVariant: "blue",
  },
  {
    stat: "+512%",
    label: "E-Commerce Brand",
    bg: "linear-gradient(135deg, #0b0d17 0%, #1a5fb4 100%)",
    labelVariant: "red",
  },
];

const STEPS = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Share your goals and challenges. Our team reviews your needs and crafts a tailored digital strategy.",
  },
  {
    num: 2,
    title: "Launch Targeted Campaigns",
    desc: "We build and execute SEO, ads, web, and branding solutions aligned with your market and budget.",
  },
  {
    num: 3,
    title: "Achieve Lasting Growth",
    desc: "Track measurable results with transparent reporting and ongoing optimization for long-term success.",
  },
];

const AWARDS = [
  "Google Partner",
  "Clutch Top Agency",
  "Forbes Council",
  "ISO Certified",
  "10+ Years",
  "500+ Projects",
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.formCard}>
              <ProposalForm
                title="Experience Real Results"
                titleAs="h1"
                idPrefix="contact"
              />
            </div>

            <aside className={styles.heroAside}>
              <h2 className={styles.heroHeading}>Ready to Dominate Your Market?</h2>
              <ol className={styles.steps}>
                {STEPS.map((step) => (
                  <li key={step.num} className={styles.step}>
                    <span className={styles.stepNum}>{step.num}</span>
                    <div>
                      <p className={styles.stepTitle}>{step.title}</p>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className={styles.contactBlock}>
                <h3>Headquarters</h3>
                <p>
                  VD Infotech, H-112, Sector 63 Rd,
                  <br />
                  Noida, Uttar Pradesh
                </p>
              </div>
              <div className={styles.contactBlock}>
                <h3>Office Hours</h3>
                <p>Mon–Sat: 9:00 AM to 7:00 PM</p>
              </div>
              <div className={styles.contactBlock}>
                <h3>Main Phone</h3>
                <p>
                  <a href="tel:+918218080679">+91 821-8080-679</a>
                  <br />
                  <a href="mailto:info@vdinfotech.in">info@vdinfotech.in</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.results} aria-labelledby="results-heading">
        <div className={styles.container}>
          <h2 id="results-heading" className={styles.sectionTitle}>
            Our Clients Get Results
          </h2>
          <div className={styles.resultsGrid}>
            {RESULTS.map((item) => (
              <article key={item.label} className={styles.resultCard}>
                <div
                  className={styles.resultBg}
                  style={{ background: item.bg }}
                  aria-hidden
                />
                <div className={styles.resultOverlay} aria-hidden />
                <span className={styles.resultStat}>{item.stat}</span>
                <span
                  className={
                    item.labelVariant === "blue"
                      ? styles.resultLabelBlue
                      : styles.resultLabel
                  }
                >
                  {item.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonials} aria-labelledby="stories-heading">
        <div className={styles.container}>
          <h2 id="stories-heading" className={styles.sectionTitle}>
            Join Our Success Stories
          </h2>
          <div className={styles.testimonialsGrid}>
            <article className={styles.testimonialCard}>
              <div className={styles.testimonialIcon} aria-hidden>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h6v12H4V4zm10 0h6v12h-6V4z" />
                </svg>
              </div>
              <blockquote className={styles.testimonialQuote}>
                VD Infotech transformed our online presence. Organic traffic grew over 200% in
                six months, and our lead quality improved dramatically.
              </blockquote>
              <Link href="/portfolio" className={styles.testimonialLink}>
                Multi-Location Property Restoration Company →
              </Link>
            </article>
            <article className={styles.testimonialCard}>
              <div className={styles.testimonialIcon} aria-hidden>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h6v12H4V4zm10 0h6v12h-6V4z" />
                </svg>
              </div>
              <blockquote className={styles.testimonialQuote}>
                From website redesign to PPC, the team delivered on time and on budget. We saw a
                clear ROI within the first quarter of launch.
              </blockquote>
              <Link href="/portfolio" className={styles.testimonialLink}>
                Regional Healthcare &amp; Wellness Group →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.awards} aria-label="Awards and recognition">
        <div className={styles.container}>
          <div className={styles.awardsRow}>
            {AWARDS.map((name) => (
              <span key={name} className={styles.awardItem}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
