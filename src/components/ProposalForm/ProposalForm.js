"use client";

import { useState } from "react";
import styles from "./ProposalForm.module.css";

const SERVICES = [
  "SEO",
  "PPC / Google Ads",
  "Social Media Marketing",
  "Web Design",
  "Web Development",
  "E-Commerce",
  "Mobile Apps",
  "UI/UX Design",
  "Content Marketing",
  "Branding",
  "IT Consulting",
  "Cloud Solutions",
];

export default function ProposalForm({
  title = "Experience Real Results",
  titleAs: TitleTag = "h2",
  titleId,
  idPrefix = "",
}) {
  const [submitted, setSubmitted] = useState(false);
  const prefix = idPrefix ? `${idPrefix}-` : "";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <>
      {title ? (
        <TitleTag id={titleId} className={styles.formTitle}>
          {title}
        </TitleTag>
      ) : null}
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={`${prefix}firstName`}>
              First Name *
            </label>
            <input
              className={styles.input}
              id={`${prefix}firstName`}
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={`${prefix}lastName`}>
              Last Name *
            </label>
            <input
              className={styles.input}
              id={`${prefix}lastName`}
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={`${prefix}company`}>
              Company / Organization
            </label>
            <input
              className={styles.input}
              id={`${prefix}company`}
              name="company"
              type="text"
              autoComplete="organization"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={`${prefix}website`}>
              Website
            </label>
            <input
              className={styles.input}
              id={`${prefix}website`}
              name="website"
              type="url"
              placeholder="https://"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${prefix}email`}>
            Email Address *
          </label>
          <input
            className={styles.input}
            id={`${prefix}email`}
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${prefix}phone`}>
            Phone Number *
          </label>
          <input
            className={styles.input}
            id={`${prefix}phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={`${prefix}budget`}>
              Monthly Marketing Budget
            </label>
            <select className={styles.select} id={`${prefix}budget`} name="budget" defaultValue="">
              <option value="" disabled>
                Select budget
              </option>
              <option value="under-5k">Under ₹25,000</option>
              <option value="5k-15k">₹25,000 – ₹75,000</option>
              <option value="15k-50k">₹75,000 – ₹2,50,000</option>
              <option value="50k-plus">₹2,50,000+</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={`${prefix}companySize`}>
              Company Size
            </label>
            <select
              className={styles.select}
              id={`${prefix}companySize`}
              name="companySize"
              defaultValue=""
            >
              <option value="" disabled>
                Select size
              </option>
              <option value="1-10">1–10 employees</option>
              <option value="11-50">11–50 employees</option>
              <option value="51-200">51–200 employees</option>
              <option value="200-plus">200+ employees</option>
            </select>
          </div>
        </div>

        <span className={styles.servicesLabel}>Services Interested In</span>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <label key={service} className={styles.checkboxLabel}>
              <input type="checkbox" name="services" value={service} />
              {service}
            </label>
          ))}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${prefix}referral`}>
            How did you hear about VD Infotech?
          </label>
          <input className={styles.input} id={`${prefix}referral`} name="referral" type="text" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${prefix}message`}>
            Tell us about your business
          </label>
          <textarea className={styles.textarea} id={`${prefix}message`} name="message" rows={4} />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send My Free Proposal
        </button>

        {submitted && (
          <p className={styles.successMsg} role="status">
            Thank you! We received your request and will contact you shortly.
          </p>
        )}
      </form>
    </>
  );
}
