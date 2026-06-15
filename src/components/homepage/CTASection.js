"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./CTASection.module.css";

const serviceOptions = [
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Web Development",
  "App Development",
  "Branding",
  "AI / Automation",
  "Not sure (Need guidance)"
];

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    serviceNeeded: ""
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
      // Format the message for WhatsApp
      const message = `*New Application Submission*\n\n` +
        `*Name:* ${formData.fullName}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || "Not provided"}\n` +
        `*Business/Company Name:* ${formData.businessName}\n` +
        `*Service Needed:* ${formData.serviceNeeded}\n\n` +
        `*Submitted via VD Infotech Website*`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL with the phone number
      const whatsappUrl = `https://wa.me/9205731999?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form and close modal
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        businessName: "",
        serviceNeeded: ""
      });
      setIsModalOpen(false);
      
      // Show success message (optional)
      alert("Thank you! Your information has been sent. You will be redirected to WhatsApp.");
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
        <ScrollReveal animation="fade-up">
          <div className={styles.content}>
            <h2 className={styles.title}>Discuss Your Project</h2>
           
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
              <h3 className={styles.modalTitle}>Apply Now</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  1. Name: Full Name *
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
                  2. Contact:  Phone Number *
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
                  2. Contact:  Email (optional but recommended)
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

              <div className={styles.formGroup}>
                <label htmlFor="businessName" className={styles.label}>
                  3. Business Info: Business / Company Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your business/company name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="serviceNeeded" className={styles.label}>
                  4. Service Needed (Dropdown) *
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
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
                  {isSubmitting ? "Sending..." : "Submit to WhatsApp"}
                </button>
              </div>

              <p className={styles.note}>
                After clicking &quot;Submit to WhatsApp&quot;, you will be redirected to WhatsApp 
                where your information will be ready to send to our team.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}