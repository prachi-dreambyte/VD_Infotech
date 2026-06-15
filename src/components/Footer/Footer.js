"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */

const certifications = [
  { name: "DPIIT", image: "/assets/image/LOGOS/DPIIT-12-3-2024.png" },
  { name: "MSME", image: "/assets/image/LOGOS/MSME.png" },
  { name: "ROC", image: "/assets/image/LOGOS/ROC.png" },
  { name: "PAN", image: "/assets/image/LOGOS/PAN.png" },
  { name: "Ministry of AYUSH", image: "/assets/image/LOGOS/ministry_of_ayush.png" },
  { name: "Ministry of Justice", image: "/assets/image/LOGOS/MOJ.png" },
  { name: "ISO 9001", image: "/assets/image/LOGOS/ISO-9001-Logo.png" },
  { name: "ISO 27001", image: "/assets/image/LOGOS/ISO-27001-logo-eturia.png" },
  { name: "Google Certification", image: "/assets/image/LOGOS/google_certifications.png" },
  { name: "Meta Certification", image: "/assets/image/LOGOS/META CERTIFICATION.png" },
  { name: "Bing Certification", image: "/assets/image/LOGOS/Bing_logo_(2016).svg.png" },
  { name: "CIM", image: "/assets/image/LOGOS/CIM_Lockup_BLUE_RGB.png" },
  { name: "HubSpot Certification", image: "/assets/image/LOGOS/hubspot.png" },
  { name: "SEMrush Certification", image: "/assets/image/LOGOS/SEMRush-Academy.png" },
  { name: "Google Analytics Certification", image: "/assets/image/LOGOS/Logo_Google_Analytics.png" },
  { name: "Google Ads Certification", image: "/assets/image/LOGOS/google-ads-certification.png" },
  { name: "LinkedIn Marketing Certification", image: "/assets/image/LOGOS/LinkediN MARKETING.png" },
  { name: "AWS Certification", image: "/assets/image/LOGOS/AWS.png" },
  { name: "Shopify Partner Certification", image: "/assets/image/LOGOS/Shopify-Certified-Partner-Logo.png" },
  { name: "Meta Blueprint Certification", image: "/assets/image/LOGOS/Meta_Blueprint_.png" },
  { name: "YouTube Certification", image: "/assets/image/LOGOS/YouTube-Certified-.png" },
  { name: "IAB Certification", image: "/assets/image/LOGOS/IAB.png" },
  { name: "NASSCOM Membership", image: "/assets/image/LOGOS/nasscom-member.png" },
  { name: "Startup India Recognition", image: "/assets/image/LOGOS/startup-india.png" },
  { name: "PCI DSS Compliance", image: "/assets/image/LOGOS/PCI-logo.png" },
  { name: "STC", image: "/assets/image/LOGOS/stc_logo.png" },
];

const nationalLocations = [
  {
    abbr: "U K",
    name: "Uttarakhand",
    city: "Dehradun",
    image: "/assets/image/Places/NEW DELHI.png", // Head Office placeholder
    tag: "HEAD OFFICE",
    tagColor: "gold",
  },
  {
    abbr: "U P",
    name: "Uttar Pradesh",
    city: "Noida",
    image: "/assets/image/Places/NEW DELHI.png",
    tag: "ACTIVE",
    tagColor: "green",
  },
  {
    abbr: "N D",
    name: "New Delhi",
    city: "New Delhi",
    image: "/assets/image/Places/NEW DELHI.png",
    tag: "UPCOMING",
    tagColor: "blue",
  },
  {
    abbr: "M H",
    name: "Maharashtra",
    city: "Mumbai",
    image: "/assets/image/Places/MUMBAI.png",
    tag: "UPCOMING",
    tagColor: "blue",
  },
  {
    abbr: "M H",
    name: "Maharashtra",
    city: "Pune",
    image: "/assets/image/Places/PUNE.png",
    tag: "UPCOMING",
    tagColor: "blue",
  },
  {
    abbr: "K A",
    name: "Karnataka",
    city: "Bengaluru",
    image: "/assets/image/Places/BEGALURU.png",
    tag: "UPCOMING",
    tagColor: "blue",
  },
  {
    abbr: "G J",
    name: "Gujarat",
    city: "Ahmedabad",
    image: "/assets/image/Places/AHEMADBAD.png",
    tag: "UPCOMING",
    tagColor: "blue",
  },
];

const internationalLocations = [
  {
    abbr: "U K",
    name: "United Kingdom",
    image: "/assets/image/Places/UK.png",
  },
  {
    abbr: "U S A",
    name: "United States",
    image: "/assets/image/Places/USA.png",
  },
  {
    abbr: "U A E",
    name: "United Arab Emirates",
    image: "/assets/image/Places/UAE.png",
  },
  {
    abbr: "C A",
    name: "Canada",
    image: "/assets/image/Places/CANADA.png",
  },
  {
    abbr: "S G",
    name: "Singapore",
    image: "/assets/image/Places/SINGAPORE.png",
  },
  {
    abbr: "D E",
    name: "Germany",
    image: "/assets/image/Places/GERMANY.png",
  },
];

const companyInfo = {
  description:
    "VD Infotech delivers digital marketing, web development, and IT solutions that help businesses grow across India and globally since 2014.",
  tagline: "Your Vision, Our Technology",
};

const quickLinks = [
  { label: "Company",            href: "/company" },
  { label: "Portfolio",          href: "/portfolio" },
  { label: "Packages",           href: "/packages" },
  { label: "Market Area",        href: "/market-area" },
  { label: "Blog",               href: "/blog" },
  { label: "Careers",            href: "/company/careers" },
  { label: "FAQs",               href: "/faqs" },
  { label: "How It Works",       href: "/how-it-works" },
  { label: "Case Studies",       href: "/portfolio" },
  { label: "Privacy Policy",     href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy",      href: "/refund-policy" },
];

const servicesLinks = [
  { label: "Custom Website",          href: "/services/custom-website" },
  { label: "E-Commerce Solutions",    href: "/services/ecommerce" },
  { label: "SEO Services",            href: "/services/seo" },
  { label: "Social Media Marketing",  href: "/services/smm" },
  { label: "PPC & Google Ads",        href: "/services/ppc" },
  { label: "UI/UX Design",            href: "/services/ui-ux" },
  { label: "Mobile App Development",  href: "/services/mobile" },
  { label: "Cloud Solutions",         href: "/services/cloud" },
  { label: "IT Consulting",           href: "/services/consulting" },
  { label: "View All Services",       href: "/services" },
];

const contactInfo = {
  address:   "No. 505, IT Park, Dehradun, UK 248013",
  phone:     "+91-920-573-1999",
  email:     "info@vdinfotech.in",
  hours:     "Mon–Sat: 9:00 AM – 6:00 PM",
};

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/vdinfotech" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vd-infotech" },
  { label: "X", href: "https://x.com/VdInfotech27" },
  { label: "Instagram", href: "https://www.instagram.com/vdinfotech.in/" },
];

const legalLinks = [
  { label: "Terms of Use",   href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy",  href: "/refund-policy" },
  { label: "Sitemap",        href: "/sitemap" },
];

/* ══════════════════════════════════════════════════════
   SVG ICONS
══════════════════════════════════════════════════════ */

function ContactIcon({ type }) {
  const icons = {
    location: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />,
    phone:    <path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.2.8.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.1 21.2 2.8 13.9 2.8 4.2 2.8 3.5 3.3 3 4 3h3.5c.7 0 1.2.5 1.2 1.2 0 1.5.3 2.9.8 4.2.1.4 0 .9-.3 1.2L6.6 10.8z" />,
    email:    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
    clock:    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 11h-2V7h2v6zm0 4h-2v-2h2v2z" />,
  };
  return (
    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {icons[type]}
    </svg>
  );
}

function SocialIcons() {
  const icons = [
    { label: "Facebook", href: "https://www.facebook.com/vdinfotech", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/vd-infotech", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 00-6-6 6 6 0 00-6 6v7h4v-7a2 2 0 012-2 2 2 0 012 2z" },
    { label: "X", href: "https://x.com/VdInfotech27", path: "M4 4l6.5 8L4 20h2.5l5.3-6.5L16.5 20H20l-6.8-8.3L19.5 4h-2.5l-4.8 5.8L9.2 4H4z" },
    { label: "Instagram", href: "https://www.instagram.com/vdinfotech.in/", path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" },
  ];

  return (
    <div className={styles.socialIcons}>
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          className={styles.socialLink}
          aria-label={icon.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   LOCATION CARD — shared for national & international
══════════════════════════════════════════════════════ */

function LocationCard({ abbr, name, city, image, tag, tagColor }) {
  return (
    <div className={styles.locCard}>
      <div className={styles.locImgWrap}>
        <Image
          src={image}
          alt={city || name}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 200px"
          className={styles.locImg}
        />
        {tag && (
          <span className={`${styles.locTag} ${styles[`locTag_${tagColor}`]}`}>
            {tag}
          </span>
        )}
      </div>
      <div className={styles.locInfo}>
        <span className={styles.locAbbr}>{abbr}</span>
        <span className={styles.locName}>{city || name}</span>
        {city && <span className={styles.locState}>{name}</span>}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   FOOTER COMPONENT
══════════════════════════════════════════════════════ */

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>

      {/* ── Certifications ── */}
      <section className={styles.certTier} aria-labelledby="footer-cert-heading">
        <div className={styles.contain}>
          <h2 id="footer-cert-heading" className={styles.certHeading}>
            Certifications &amp; Registrations
          </h2>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.name} className={styles.certLogoCard}>
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={120}
                  height={80}
                  className={styles.certLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── National Presence ── */}
      <section className={styles.locationsTier} aria-labelledby="footer-india-heading">
        <div className={styles.container}>

          {/* Section header */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <svg className={styles.pillIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span id="footer-india-heading" className={styles.pillText}>National Presence</span>
            </div>
            <p className={styles.sectionSubtitle}>Serving clients across India with on-ground support</p>
          </div>

          {/* Location grid */}
          <div className={styles.locGrid}>
            {nationalLocations.map((loc) => (
              <LocationCard key={`${loc.city}-${loc.abbr}`} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── International Presence ── */}
      <section className={styles.intlTier} aria-labelledby="footer-intl-heading">
        <div className={styles.container}>

          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill} style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.25)" }}>
              <svg className={styles.pillIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "#f59e0b" }} aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              <span id="footer-intl-heading" className={styles.pillText} style={{ color: "#f59e0b" }}>International Presence</span>
            </div>
            <p className={styles.sectionSubtitle}>Target markets &amp; global delivery</p>
          </div>

          <div className={styles.locGrid}>
            {internationalLocations.map((loc) => (
              <LocationCard key={loc.abbr} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Links ── */}
      <section className={styles.mainTier} aria-label="Footer navigation">
        <div className={styles.container}>
          <div className={styles.mainGrid}>

            {/* Brand column */}
            <div className={styles.brandCol}>
              <div className={styles.logoWrap}>
                <Link href="/" aria-label="VD Infotech home">
                  <Image
                    src="/assets/image/vd infotech white RED FINAL.png"
                    alt="VD Infotech"
                    width={160}
                    height={50}
                    style={{ height: "auto", width: "auto", maxWidth: "160px" }}
                    priority
                  />
                </Link>
              </div>
              <p className={styles.companyDesc}>{companyInfo.description}</p>
              <p className={styles.companyTagline}>{companyInfo.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linkList}>
                {servicesLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <ContactIcon type="location" /><span>{contactInfo.address}</span>
                </li>
                <li className={styles.contactItem}>
                  <ContactIcon type="phone" /><a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                </li>
                <li className={styles.contactItem}>
                  <ContactIcon type="email" /><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
                <li className={styles.contactItem}>
                  <ContactIcon type="clock" /><span>{contactInfo.hours}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom bar ── */}
      <section className={styles.bottomTier}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>

            <div className={styles.bottomLeft}>
              <p className={styles.copyright}>© 2014–{year} VD Infotech. All rights reserved.</p>
              <p className={styles.rights}>Your Vision, Our Technology.</p>
              <nav aria-label="Legal">
                <ul className={styles.legalLinks}>
                  {legalLinks.map((link) => (
                    <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className={styles.bottomRight}>
              <span className={styles.socialLabel}>Follow us</span>
              <nav className={styles.socialLinks} aria-label="Social media">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href}>{link.label}</a>
                ))}
              </nav>
              <button
                type="button"
                className={styles.backToTop}
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>
    </footer>
  );
}