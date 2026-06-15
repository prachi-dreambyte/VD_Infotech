"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./CtaSection3.module.css";

const systemOptions = [
  "AI Automation System",
  "Digital Marketing System",
  "Lead Generation System",
  "Website / App System",
  "Branding & Growth System",
  "Not sure (Need consultation)"
];

const stageOptions = [
  "Startup (0–1 stage)",
  "Growing Business",
  "Established Brand",
  "Scaling aggressively"
];

const budgetOptions = [
  "₹10K – ₹25K",
  "₹25K – ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹5L",
  "₹5L+",
  "Not sure yet"
];

const timelineOptions = [
  "Immediately",
  "Within 15 days",
  "Within 1 month",
  "Just exploring"
];

const contactOptions = [
  "WhatsApp",
  "Call",
  "Email"
];

export default function CTASection3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    website: "",
    systems: [],
    stage: "",
    budget: "",
    challenge: "",
    timeline: "",
    preferredContact: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      systems: checked
        ? [...prev.systems, value]
        : prev.systems.filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedSystems = formData.systems.length > 0 ? formData.systems.join(', ') : "Not selected";
      
      // Handle different contact methods
      if (formData.preferredContact === "Call") {
        // For Call - Open phone dialer
        window.location.href = `tel:9205731999`;
        
        // Show alert with form data
        alert(`Thank you ${formData.fullName}! We will call you shortly at ${formData.phone}.\n\nYour submission details have been recorded.`);
        
        // Reset form and close modal
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          businessName: "",
          website: "",
          systems: [],
          stage: "",
          budget: "",
          challenge: "",
          timeline: "",
          preferredContact: ""
        });
        setIsModalOpen(false);
        
      } else if (formData.preferredContact === "Email") {
        // For Email - Create mailto link
        const subject = encodeURIComponent("🚀 Build Your Growth System - New Application");
        const body = encodeURIComponent(
          `BASIC INFO\n` +
          `Full Name: ${formData.fullName}\n` +
          `Phone Number: ${formData.phone}\n` +
          `Email: ${formData.email || "Not provided"}\n\n` +
          `BUSINESS DETAILS\n` +
          `Business/Brand Name: ${formData.businessName}\n` +
          `Website/Instagram: ${formData.website || "Not provided"}\n\n` +
          `WHAT TO BUILD\n` +
          `${formattedSystems}\n\n` +
          `CURRENT STAGE\n` +
          `${formData.stage}\n\n` +
          `BUDGET RANGE\n` +
          `${formData.budget}\n\n` +
          `MAIN CHALLENGE\n` +
          `${formData.challenge || "Not provided"}\n\n` +
          `TIMELINE\n` +
          `${formData.timeline}\n\n` +
          `PREFERRED CONTACT\n` +
          `${formData.preferredContact}\n\n` +
          `Submitted via VD Infotech Website`
        );
        
        const mailtoUrl = `mailto:info@vdinfotech.in?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;
        
        // Reset form and close modal
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          businessName: "",
          website: "",
          systems: [],
          stage: "",
          budget: "",
          challenge: "",
          timeline: "",
          preferredContact: ""
        });
        setIsModalOpen(false);
        
        alert("Your email client will open. Please send the email to complete your submission.");
        
      } else {
        // For WhatsApp (default)
        const message = `* Build Your Growth System - New Application*\n\n` +
          `* 1. BASIC INFO*\n` +
          `*Full Name:* ${formData.fullName}\n` +
          `*Phone Number:* ${formData.phone}\n` +
          `*Email:* ${formData.email || "Not provided"}\n\n` +
          `* 2. BUSINESS DETAILS*\n` +
          `*Business/Brand Name:* ${formData.businessName}\n` +
          `*Website/Instagram:* ${formData.website || "Not provided"}\n\n` +
          `* 3. WHAT TO BUILD*\n` +
          `${formattedSystems}\n\n` +
          `* 4. CURRENT STAGE*\n` +
          `${formData.stage}\n\n` +
          `* 5. BUDGET RANGE*\n` +
          `${formData.budget}\n\n` +
          `* 6. MAIN CHALLENGE*\n` +
          `${formData.challenge || "Not provided"}\n\n` +
          `* 7. TIMELINE*\n` +
          `${formData.timeline}\n\n` +
          `* 8. PREFERRED CONTACT*\n` +
          `${formData.preferredContact}\n\n` +
          `*Submitted via VD Infotech Website*`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/9205731999?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Reset form and close modal
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          businessName: "",
          website: "",
          systems: [],
          stage: "",
          budget: "",
          challenge: "",
          timeline: "",
          preferredContact: ""
        });
        setIsModalOpen(false);
        
        alert("Thank you! Your information has been sent. You will be redirected to WhatsApp.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.ctaSection} aria-label="Call to action">
      <div className={styles.container}>
        <ScrollReveal animation="zoom-in">
          <div className={styles.content}>
            <h2 className={styles.title}>Build Your Growth System</h2>
           
            <button 
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)}
              aria-label="Apply now to get started"
            >
              Apply Now
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>🚀 Build Your Growth System</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              {/* 1. Basic Info */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>🧠 1. Basic Info</h4>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your email address"
                />
              </div>

              {/* 2. Business Details */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>🏢 2. Business Details</h4>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="businessName" className={styles.label}>
                  Business / Brand Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your business/brand name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="website" className={styles.label}>
                  Website / Instagram (optional)
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="www.example.com or @instagram_handle"
                />
              </div>

              {/* 3. What do you want to build */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>🎯 3. What do you want to build?</h4>
                <p className={styles.sectionSubtitle}>Select all that apply</p>
              </div>

              <div className={styles.checkboxGroup}>
                {systemOptions.map((option, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.systems.includes(option)}
                      onChange={handleCheckboxChange}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxText}>{option}</span>
                  </label>
                ))}
              </div>

              {/* 4. Current Stage */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>📊 4. Current Stage</h4>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your current stage</option>
                  {stageOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. Budget Range */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>💰 5. Budget Range</h4>
                <p className={styles.sectionSubtitle}>Important for filtering</p>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your budget range</option>
                  {budgetOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 6. Main Challenge */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>🧩 6. Main Challenge</h4>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="challenge" className={styles.label}>
                  What problem are you currently facing in your business?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="4"
                  placeholder="Describe your main challenge..."
                />
              </div>

              {/* 7. Timeline */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>⏳ 7. Timeline</h4>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your timeline</option>
                  {timelineOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 8. Preferred Contact */}
              <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>📞 8. Preferred Contact</h4>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select preferred contact method</option>
                  {contactOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : 
                    formData.preferredContact === "Call" ? "📞 Call Us" :
                    formData.preferredContact === "Email" ? "📧 Submit to Email" :
                    formData.preferredContact === "WhatsApp" ? "💬 Submit to WhatsApp" :
                    "Submit"
                  }
                </button>
              </div>

              <p className={styles.note}>
                {formData.preferredContact === "Call" && (
                  <>After clicking &quot;Call Us&quot;, you will be connected to our team at <strong>9205731999</strong>.</>
                )}
                {formData.preferredContact === "Email" && (
                  <>After clicking &quot;Submit to Email&quot;, your email client will open with a pre-filled message to <strong>info@vdinfotech.in</strong>.</>
                )}
                {formData.preferredContact === "WhatsApp" && (
                  <>After clicking &quot;Submit to WhatsApp&quot;, you will be redirected to WhatsApp where your information will be ready to send to our team.</>
                )}
                {!formData.preferredContact && (
                  <>Please select your preferred contact method above to continue.</>
                )}
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}