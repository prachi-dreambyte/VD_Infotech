'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    question: 'What services does VD Infotech provide?',
    answer:
      'We do everything under one roof—Digital & Performance Marketing (Ads, SEO, Social Media), Brand Promotion, Web & App Development, and smart AI Automation tools.',
  },
  {
    id: 2,
    question: 'Who do you work with?',
    answer:
      'We work with all types of businesses. If you are a startup, we will help you build your brand from zero, and if you are already an established brand, we will help you get maximum visibility and leads in the market.',
  },
  {
    id: 3,
    question: 'How do you work with clients?',
    answer:
      'Our work starts even before onboarding. We first do a free audit of your business and find growth opportunities. After that, without any fake promises, we focus completely on your ROI.',
  },
  {
    id: 4,
    question: 'Why should I choose VD Infotech?',
    answer:
      "Because we don't create copy-paste templates, we build custom strategies. We only have experienced professionals, so the quality and commitment you see on day one will remain consistent even after 1000 days.",
  },
  {
    id: 5,
    question: 'Will you provide support after the project is completed?',
    answer:
      "Yes, absolutely! We are not the ones who just finish the work and step away. We believe in long-term partnerships, so even after the project is completed, we are always with you for support and maintenance.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.id}`}
        id={`faq-trigger-${faq.id}`}
      >
        <h3 className={styles.question}>{faq.question}</h3>
        <span className={styles.icon} aria-hidden="true">
          <span className={styles.iconPlus} />
        </span>
      </button>

      <div
        className={styles.panel}
        id={`faq-panel-${faq.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${faq.id}`}
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <header className={styles.header}>
            <h2 className={styles.title} id="faq-title">
              Let's Clear
              <span className={styles.titleAccent}>Your Doubts.</span>
            </h2>
          </header>
        </ScrollReveal>

        <div className={styles.list} role="list">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.id} animation="fade-up" delay={index * 80}>
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}