"use client";
import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from '../../components/homepage/GrowthEcosystemSection.module.css';
import LeadForm from './LeadForm';

/* ── Data ─────────────────────────────────────────────── */
const circles = [
  {
    id: 'creative',
    label: 'Creative',
    sub: 'Build Trust & Recognition',
    icon: '💡',
    items: ['Branding', 'Creative Design', 'Content Creation', 'Video Production'],
    cls: styles.circleCreative,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    sub: 'Drive Visibility & Leads',
    icon: '📣',
    items: ['SEO', 'Performance Marketing', 'Social Media Marketing', 'Lead Generation'],
    cls: styles.circleMarketing,
  },
  {
    id: 'tech',
    label: 'Technology',
    sub: 'Build, Automate & Scale',
    icon: '⚙️',
    items: ['Website Development', 'App Development', 'Business Automation', 'Software Solutions'],
    cls: styles.circleTech,
  },
];

const cards = [
  {
    id: 'creative',
    label: 'Creative',
    sub: 'Build Trust & Recognition',
    icon: '💡',
    items: ['Branding', 'Creative Design', 'Content Creation', 'Video Production'],
    cls: styles.cardCreative,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    sub: 'Drive Visibility & Leads',
    icon: '📣',
    items: ['SEO', 'Performance Marketing', 'Social Media Marketing', 'Lead Generation'],
    cls: styles.cardMarketing,
  },
  {
    id: 'tech',
    label: 'Technology',
    sub: 'Build, Automate & Scale',
    icon: '⚙️',
    items: ['Website Development', 'App Development', 'Business Automation', 'Software Solutions'],
    cls: styles.cardTech,
  },
];

const leftBadges = [
  { label: 'AI-Powered SEO', icon: '🔍', bg: 'rgba(168,85,247,0.1)', color: '#a855f7' },
  { label: 'AI-Enhanced Ad Optimization', icon: '🎯', bg: 'rgba(99,102,241,0.1)', color: '#6366f1' },
  { label: 'AI Analytics & Insights', icon: '📊', bg: 'rgba(59,130,246,0.1)', color: '#3b82f6' },
];

const rightBadges = [
  { label: 'AI Automation Systems', icon: '🤖', bg: 'rgba(20,184,166,0.1)', color: '#14b8a6' },
  { label: 'AI Content Assistance', icon: '✏️', bg: 'rgba(16,185,129,0.1)', color: '#10b981' },
];

const aiPills = [
  { label: 'AI-Powered SEO', icon: '🔍', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' },
  { label: 'AI-Enhanced Ad Optimization', icon: '🎯', bg: 'rgba(99,102,241,0.12)', color: '#6366f1' },
  { label: 'AI Analytics & Insights', icon: '📊', bg: 'rgba(59,130,246,0.12)', color: '#3b82f6' },
  { label: 'AI Automation Systems', icon: '🤖', bg: 'rgba(20,184,166,0.12)', color: '#14b8a6' },
  { label: 'AI Content Assistance', icon: '✏️', bg: 'rgba(16,185,129,0.12)', color: '#10b981' },
];

/* ── Component ─────────────────────────────────────────── */
export default function GrowthEcosystem() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.wrapper}>

      {/* ── Video Background Section (Hero + Venn) ── */}
      <div className={styles.videoSection}>

        {/* Shared background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/assets/video/backgroundImage.mp4" type="video/mp4" />
        </video>

        {/* ── Hero ── */}
        <ScrollReveal animation="fade-up">
          <section className={styles.heroSection}>
            <div className={styles.content}>
              <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>
                  AI + Creative + Technology + Marketing
                  <span className={styles.headingAccent}>Under One Roof</span>
                </h2>
              </div>
              <p className={styles.subheading}>
                Modern business growth needs more than just marketing...
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={150}>
          <section className={styles.vennSection}>
          <div className={styles.vennGrid}>

            {/* Left badges */}
            <div className={styles.sideLeft}>
              {leftBadges.map((b) => (
                <div className={styles.sideBadge} key={b.label}>
                  <span
                    className={styles.badgeIcon}
                    style={{ background: b.bg, color: b.color }}
                  >
                    {b.icon}
                  </span>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Venn Diagram */}
            <div className={styles.vennDiagram}>
              {circles.map((c) => (
                <div
                  key={c.id}
                  className={`${styles.circle} ${c.cls}`}
                >
                  <span className={styles.circleLabel}>{c.label}</span>
                  <span className={styles.circleSub}>{c.sub}</span>
                  <ul className={styles.bulletList}>
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Center Core */}
              <div className={styles.coreBadge}>
                <span className={styles.coreIcon}>📈</span>
                <span className={styles.coreTitle}>Business<br />Growth</span>
              </div>
            </div>

            {/* Right badges */}
            <div className={styles.sideRight}>
              {rightBadges.map((b) => (
                <div className={styles.sideBadge} key={b.label}>
                  <span
                    className={styles.badgeIcon}
                    style={{ background: b.bg, color: b.color }}
                  >
                    {b.icon}
                  </span>
                  {b.label}
                </div>
              ))}
            </div>

          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={250}>
          <div className={styles.banner}>
            <span className={styles.bannerRocket}></span>
            <span className={styles.bannerText}>We are a Business Growth Ecosystem</span>
          </div>
        </ScrollReveal>

      </div>{/* end videoSection */}

      {/* ── Cards ── */}


      {/* ── Banner ── */}
      

      {/* Lead Form Modal */}
      <LeadForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />

    </div>
  );
}