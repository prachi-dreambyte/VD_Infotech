"use client";

import { useState } from "react";
import styles from "./LeadForm.module.css";

const serviceOptions = [
  "Digital Marketing",
  "SEO",
  "Website Design",
  "Social Media Marketing",
  "Paid Ads (Google/Facebook)",
  "Other"
];

const budgetOptions = [
  "₹10k–₹25k",
  "₹25k–₹50k",
  "₹50k+"
];

const timelineOptions = [
  "ASAP",
  "1 Month",
  "Flexible"
];

export default function LeadForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    website: "",
    serviceNeeded: "",
    projectDetails: "",
    budgetRange: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build WhatsApp message
      let message = `*🚀 New Lead Inquiry - VD Infotech*\n\n`;
      
      message += `*📋 BASIC DETAILS*\n`;
      message += `👤 Full Name: ${formData.fullName}\n`;
      message += `📧 Email: ${formData.email}\n`;
      message += `📱 Phone: ${formData.phoneNumber}\n\n`;
      
      message += `*🏢 BUSINESS INFO*\n`;
      message += `🏪 Company Name: ${formData.companyName}\n`;
      message += `🌐 Website: ${formData.website || "Not provided"}\n\n`;
      
      message += `*🎯 SERVICE NEEDED*\n`;
      message += `📦 Service: ${formData.serviceNeeded}\n\n`;
      
      message += `*📝 PROJECT DETAILS*\n`;
      message += `${formData.projectDetails}\n\n`;
      
      if (formData.budgetRange) {
        message += `*💰 BUDGET RANGE*\n${formData.budgetRange}\n\n`;
      }
      
      if (formData.timeline) {
        message += `*⏰ TIMELINE*\n${formData.timeline}\n\n`;
      }
      
      message += `_Submitted via VD Infotech Lead Form_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919205731999?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        website: "",
        serviceNeeded: "",
        projectDetails: "",
        budgetRange: "",
        timeline: ""
      });
      
      // Show success message
      alert("Thank you! Your inquiry has been prepared. Please send the message on WhatsApp to complete your submission.");
      
      // Close modal after short delay
      setTimeout(() => {
        onClose();
      }, 1000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Get Started with Your Growth Journey</h2>
            <p className={styles.modalSubtitle}>Fill in the details and we&apos;ll reach out to you on WhatsApp</p>
          </div>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close form"
          >
            <span>&times;</span>
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Section 1: Basic Details */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>1</span>
              Basic Details
            </h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name <span className={styles.required}>*</span>
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
              <label htmlFor="email" className={styles.label}>
                Email Address <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="+91 98765 43210"
                pattern="[0-9+\s\-()]+"
              />
            </div>
          </div>

          {/* Section 2: Business Info */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>2</span>
              Business Info
            </h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="companyName" className={styles.label}>
                Company Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Your company name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="website" className={styles.label}>
                Website <span className={styles.optional}>(if any)</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="https://www.yourwebsite.com"
              />
            </div>
          </div>

          {/* Section 3: Service Needed - MOST IMPORTANT */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>3</span>
              What You Need
              <span className={styles.importantBadge}>MOST IMPORTANT</span>
            </h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="serviceNeeded" className={styles.label}>
                Service Needed <span className={styles.required}>*</span>
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">-- Select a Service --</option>
                {serviceOptions.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 4: Project Details */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>4</span>
              Project Details
            </h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="projectDetails" className={styles.label}>
                Tell us about your requirement <span className={styles.required}>*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                className={styles.textarea}
                required
                placeholder="Describe your project needs, goals, and any specific requirements..."
                rows="5"
              />
            </div>
          </div>

          {/* Section 5: Optional Details */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>5</span>
              Additional Info
              <span className={styles.optionalTag}>Optional (for better leads)</span>
            </h3>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="budgetRange" className={styles.label}>
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">-- Select Budget --</option>
                  {budgetOptions.map((budget, index) => (
                    <option key={index} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="timeline" className={styles.label}>
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">-- Select Timeline --</option>
                  {timelineOptions.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                <>
                  <span>📱</span>
                  Send via WhatsApp
                </>
              )}
            </button>
          </div>

          <p className={styles.privacyNote}>
            🔒 Your information is secure. By submitting, you&apos;ll be redirected to WhatsApp 
            where you can review and send your inquiry to our team.
          </p>
        </form>
      </div>
    </div>
  );
}
