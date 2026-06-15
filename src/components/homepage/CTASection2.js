"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./CTASection2.module.css";

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

export default function CTASection2() {
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
      const message = `*New Application Submission*\n\n` +
        `*Name:* ${formData.fullName}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || "Not provided"}\n` +
        `*Business/Company Name:* ${formData.businessName}\n` +
        `*Service Needed:* ${formData.serviceNeeded}\n\n` +
        `*Submitted via VD Infotech Website*`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/9205731999?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        businessName: "",
        serviceNeeded: ""
      });
      setIsModalOpen(false);
      
      alert("Thank you! Your information has been sent. You will be redirected to WhatsApp.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.ctaSection} aria-label="Second call to action">
      {/* Video Background */}
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/backVideo.mp4" type="video/mp4" />
      </video>

      {/* Particle Effect Background */}
      <div className={styles.particleContainer}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      <div className={styles.container}>
        <ScrollReveal animation="fade-right">
          <div className={styles.leftContent}>
            <div className={styles.iconWrapper}>
              <div className={styles.glowingOrb}></div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={150}>
          <div className={styles.rightContent}>
            <h2 className={styles.title}>
              Your Business Has More Potential Than You Think
            </h2>
            <p className={styles.description}>
              Your competitors are already building their digital presence. Don&apos;t get left behind. 
              Not just websites. Not just ads. But a complete system that brings consistent growth to your business.
            </p>
            <button 
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)}
              aria-label="Start your growth journey"
            >
              <span className={styles.buttonContent}>
                <span className={styles.buttonText}>Start My Growth Journey</span>
                <span className={styles.buttonArrow}>
                  <span>→</span>
                  <span>→</span>
                </span>
              </span>
              <div className={styles.buttonBg}></div>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Start Your Growth Journey</h3>
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
                <label htmlFor="fullName2" className={styles.label}>
                  1. Name 👉 Full Name *
                </label>
                <input
                  type="text"
                  id="fullName2"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone2" className={styles.label}>
                  2. Contact 👉 Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone2"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email2" className={styles.label}>
                  2. Contact 👉 Email (optional but recommended)
                </label>
                <input
                  type="email"
                  id="email2"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your email address"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="businessName2" className={styles.label}>
                  3. Business Info 👉 Business / Company Name *
                </label>
                <input
                  type="text"
                  id="businessName2"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Enter your business/company name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="serviceNeeded2" className={styles.label}>
                  4. Service Needed (Dropdown) *
                </label>
                <select
                  id="serviceNeeded2"
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
