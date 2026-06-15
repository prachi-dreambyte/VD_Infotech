"use client";

import { useState } from "react";
import styles from "./digitalMarketing.module.css";
import { 
  Search,
  Megaphone,
  Users,
  TrendingUp,
  Mail,
  MessageCircle,
  ShoppingCart,
  MapPin,
  Eye,
  Magnet,
  Target,
  Trophy,
  CheckCircle,
  Plus,
  Minus
} from "lucide-react";

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: <Search />,
      title: "Search Engine Optimization",
      description: "SEO helps your website get visitors from search engines without spending money on advertising and is a way to grow your business in the long term."
    },
    {
      icon: <Megaphone />,
      title: "Google Ads & PPC Management",
      description: "Reach customers at the right moment with targeted ads. These ads help get leads, make more sales and give a better return on investment."
    },
    {
      icon: <Users />,
      title: "Social Media Marketing",
      description: "You can use social media to sell your products or services by encouraging people to engage with your business. This is what it means to boost business growth through social media campaigns."
    },
    {
      icon: <TrendingUp />,
      title: "Social Media Optimization (SMO)",
      description: "Strengthen your social media presence through profile optimization. You can adopt strategies that will attract more people, enhance your profile's appeal, and increase your followers."
    },
    {
      icon: <MapPin />,
      title: "Local SEO & Google Business Profile",
      description: "People can also search for your product or services in your area, through local SEO and Google Business Profile optimization you get customers near your business."
    },
    {
      icon: <Mail />,
      title: "Email Marketing",
      description: "We use targeted email campaigns to build relationships with customers, attract potential customers and get repeat business from them by sending them emails that are specifically for them."
    },
    {
      icon: <MessageCircle />,
      title: "WhatsApp Marketing",
      description: "Connect with customers in a way, send them messages that're just for them, this can include offers, news and updates. You can also set up automated messages to save time and build a relationship with them."
    },
    {
      icon: <ShoppingCart />,
      title: "E-commerce Marketing",
      description: "E-commerce marketing strategies are all about finding ways to get visitors, turn them into customers and keep them coming back."
    }
  ];

  const benefits = [
    { icon: <Eye />, title: "Increase Online Visibility" },
    { icon: <Magnet />, title: "Generate Qualified Leads" },
    { icon: <Megaphone />, title: "Build Brand Awareness" },
    { icon: <Target />, title: "Reach the Right Audience" },
    { icon: <Users />, title: "Improve Customer Engagement" },
    { icon: <TrendingUp />, title: "Track & Measure Performance" },
    { icon: <Trophy />, title: "Maximize Marketing ROI" },
    { icon: <CheckCircle />, title: "Support Long-Term Business Growth" }
  ];

  const businessTypes = [
    {
      title: "Small and Local Businesses",
      description: "Connect with customers in your area and build a strong local presence."
    },
    {
      title: "Startups and Growing Businesses",
      description: "Scale rapidly with cost-effective digital strategies that drive growth."
    },
    {
      title: "E-Commerce and Retail Brands",
      description: "Increase online sales and customer retention with targeted campaigns."
    },
    {
      title: "Business-to-Business (B2B) Companies",
      description: "Generate high-quality leads and build lasting business relationships."
    },
    {
      title: "Enterprises",
      description: "Maintain market leadership with comprehensive digital strategies."
    }
  ];

  const whyChoose = [
    "Customized Strategies for Every Business",
    "Focus on Leads, Growth & ROI",
    "Data-Driven Decision Making",
    "Multi-Channel Marketing Expertise",
    "Transparent Communication & Reporting",
    "No One-Size-Fits-All Marketing Plans",
    "Long-Term Growth Focus",
    "Dedicated Support & Consultation"
  ];

  const faqs = [
    {
      question: "How can digital marketing help my business?",
      answer: "Digital marketing can increase visibility, attract qualified leads, build brand awareness, and generate measurable business growth."
    },
    {
      question: "Which digital marketing service is right for my business?",
      answer: "The right service depends on your goals, industry, target audience, and budget. Some businesses benefit more from SEO, while others may see faster results from Google Ads or social media marketing."
    },
    {
      question: "How long does digital marketing take to show results?",
      answer: "Results vary by strategy. Paid advertising can generate results quickly, while SEO and content marketing typically require a longer-term approach."
    },
    {
      question: "Do I need SEO and Google Ads together?",
      answer: "Not always. Some businesses do well when they use search engine optimization and Google Ads together but other businesses can achieve what they want with a simpler strategy that focuses on one thing."
    },
    {
      question: "How do you measure digital marketing success?",
      answer: "Success is measured using key performance indicators (KPIs) such as website traffic, leads, conversions, engagement, and return on investment (ROI)."
    },
    {
      question: "Do you provide digital marketing services across India?",
      answer: "Yes, we work with businesses across India and help them grow through customized digital marketing strategies."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact our team for a consultation, and we'll discuss your business goals and recommend the most suitable strategy."
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Digital Marketing Services in India
          </h1>
          <p className={styles.heroSubtitle}>
            Increase visibility, generate qualified leads, and grow your business with digital marketing strategies tailored to your goals.
          </p>
          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.primaryButton}>
              Let&apos;s Discuss Your Goals
            </a>
          </div>
        </div>
      </section>

      {/* What Is Digital Marketing */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Is Digital Marketing?</h2>
          <p className={styles.sectionText}>
            Digital marketing is the process of promotion used to find customers, leads, and sales for products and services using online methods such as search engines, social media, web, e-mail, and paid marketing.
          </p>
          <p className={styles.sectionText}>
            Digital marketing is different from traditional marketing in that it enables businesses to connect with the right audience, measuring results, and constantly optimizing based on real data. Digital marketing services enable you to engage with individuals actively searching for your products or services online.
          </p>
        </div>
      </section>

      {/* Why Businesses Need Digital Marketing */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Businesses Need Digital Marketing</h2>
          <p className={styles.sectionText}>
            Digital marketing helps businesses connect with potential customers throughout their buying journey and turn online visibility into measurable growth.
          </p>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <Eye className={styles.whyIcon} />
              <p className={styles.whyCardText}>Increase online visibility on search engines and social media</p>
            </div>
            <div className={styles.whyCard}>
              <Target className={styles.whyIcon} />
              <p className={styles.whyCardText}>Connect with the proper target audience based on interests, location, and intent</p>
            </div>
            <div className={styles.whyCard}>
              <Magnet className={styles.whyIcon} />
              <p className={styles.whyCardText}>Get qualified leads and sales opportunities</p>
            </div>
            <div className={styles.whyCard}>
              <Megaphone className={styles.whyIcon} />
              <p className={styles.whyCardText}>Build trust and brand awareness</p>
            </div>
            <div className={styles.whyCard}>
              <TrendingUp className={styles.whyIcon} />
              <p className={styles.whyCardText}>Monitor in real time with performance data and insights</p>
            </div>
            <div className={styles.whyCard}>
              <Trophy className={styles.whyIcon} />
              <p className={styles.whyCardText}>Enhance marketing ROI with ongoing optimization</p>
            </div>
          </div>
          <p className={styles.sectionText} style={{ marginTop: '2rem' }}>
            Your goal is brand awareness, lead generation, customer acquisition, or business growth, digital marketing provides measurable ways to reach and engage your target audience.
          </p>
        </div>
      </section>

      {/* Services We Offer */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Digital Marketing Services We Offer</h2>
          <p className={styles.sectionSubtitle}>
            Our digital marketing services are designed to help businesses improve visibility, attract qualified leads, and achieve sustainable growth through the right mix of channels and strategies.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.benefitsSectionTitle}`}>Benefits of Digital Marketing</h2>
          <p className={`${styles.sectionSubtitle} ${styles.benefitsSectionSubtitle}`}>
            Digital marketing helps businesses reach the right audience, generate measurable results, and grow more effectively in today&apos;s digital world.
          </p>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is Digital Marketing For */}
      <section className={styles.whoSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who Is Digital Marketing For?</h2>
          <p className={styles.sectionSubtitle}>
            Digital marketing can help businesses of all sizes attract customers, generate leads, and grow online.
          </p>
          <div className={styles.whoGrid}>
            {businessTypes.map((type, index) => (
              <div key={index} className={styles.whoCard}>
                <h3 className={styles.whoTitle}>{type.title}</h3>
                <p className={styles.whoDescription}>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Approach to Digital Growth</h2>
          <div className={styles.approachContent}>
            <p className={styles.approachText}>
              Every business is different, which is why we don&apos;t believe in one-size-fits-all marketing plans.
            </p>
            <p className={styles.approachText}>
              Before recommending any service, we take the time to understand your business, goals, products or services, target audience, and market. We identify where your potential customers are most active and which channels are most likely to generate results.
            </p>
            <p className={styles.approachText}>
              For some businesses, SEO may deliver the best long-term growth. For others, Google Ads, social media marketing, local SEO, or a combination of channels may be more effective. Our approach is focused on choosing the right strategy for your business—not selling services you don&apos;t need.
            </p>
            <p className={styles.approachHighlight}>
              The goal is simple: invest in the channels that can deliver the greatest impact for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose VD Infotech */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Businesses Choose VD Infotech</h2>
          <div className={styles.whyChooseGrid}>
            {whyChoose.map((item, index) => (
              <div key={index} className={styles.whyChooseCard}>
                <CheckCircle className={styles.whyChooseIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {openFaq === index ? <Minus /> : <Plus />}
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="contact">
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Grow Your Business Online?</h2>
          <p className={styles.ctaSubtitle}>
            Let&apos;s discuss your goals and build a digital marketing strategy tailored to your business.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.ctaPrimaryButton}>
              Get a Free Consultation
            </a>
            <a href="/contact" className={styles.ctaSecondaryButton}>
              Request a Custom Strategy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
