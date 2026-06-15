"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ServicesSection.module.css";

/* ── Inline SVG Icons ────────────────────────────── */
const Icons = {
  Rocket: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-1.5 3.5-.5 4.5s3-.5 4.5-.5"/>
      <path d="M12 2C6.5 7.5 5 11.5 5 14a7 7 0 0 0 14 0c0-2.5-1.5-6.5-7-12z"/>
      <circle cx="12" cy="14" r="2"/>
    </svg>
  ),
  ChartLine: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  Star: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Code: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  ChevronRight: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Search: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Share: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Pencil: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  Mail: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  MessageCircle: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Google: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" fill={color}/>
    </svg>
  ),
  Facebook: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Target: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Refresh: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  ),
  News: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
      <path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/>
    </svg>
  ),
  Users: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Award: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  Crown: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M5 20 3 7l4.5 4.5L12 4l4.5 7.5L21 7l-2 13"/>
    </svg>
  ),
  ShieldCheck: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  Globe: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  ShoppingCart: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  ),
  Palette: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      <circle cx="8" cy="9" r="1" fill={color} stroke="none"/>
      <circle cx="13" cy="6" r="1" fill={color} stroke="none"/>
      <circle cx="17" cy="10" r="1" fill={color} stroke="none"/>
    </svg>
  ),
  Mobile: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
};

const iconMap = {
  "ti-search": Icons.Search,
  "ti-share": Icons.Share,
  "ti-pencil": Icons.Pencil,
  "ti-mail": Icons.Mail,
  "ti-message-circle": Icons.MessageCircle,
  "ti-brand-google": Icons.Google,
  "ti-brand-facebook": Icons.Facebook,
  "ti-target": Icons.Target,
  "ti-refresh": Icons.Refresh,
  "ti-news": Icons.News,
  "ti-users": Icons.Users,
  "ti-award": Icons.Award,
  "ti-crown": Icons.Crown,
  "ti-shield-check": Icons.ShieldCheck,
  "ti-world": Icons.Globe,
  "ti-shopping-cart": Icons.ShoppingCart,
  "ti-palette": Icons.Palette,
  "ti-device-mobile": Icons.Mobile,
  "ti-rocket": Icons.Rocket,
  "ti-chart-line": Icons.ChartLine,
  "ti-star": Icons.Star,
  "ti-code": Icons.Code,
};

const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    tabIcon: "ti-rocket",
    panelIcon: "ti-rocket",
    iconColor: "#5c4cf6",
    description: "We connect your business with the right audience and turn attention into real growth.",
    services: [
      { name: "SEO", icon: "ti-search", color: "#4a9cf6", bg: "#0e1e3a" },
      { name: "Social Media Marketing", icon: "ti-share", color: "#a259f7", bg: "#1e1030" },
      { name: "Content Marketing", icon: "ti-pencil", color: "#f6c94c", bg: "#2a2010" },
      { name: "Email Marketing", icon: "ti-mail", color: "#4acf8a", bg: "#0e2a1a" },
      { name: "WhatsApp Marketing", icon: "ti-message-circle", color: "#4acf8a", bg: "#0e2a1a" },
    ],
  },
  {
    id: 2,
    title: "Performance Marketing",
    tabIcon: "ti-chart-line",
    panelIcon: "ti-chart-line",
    iconColor: "#f6854c",
    description: "Data-driven ad campaigns focused on higher returns and lower acquisition costs.",
    services: [
      { name: "Google Ads", icon: "ti-brand-google", color: "#4a9cf6", bg: "#0e1e3a" },
      { name: "Meta Ads", icon: "ti-brand-facebook", color: "#4a9cf6", bg: "#0e1e3a" },
      { name: "Lead Generation", icon: "ti-target", color: "#f6c94c", bg: "#2a2010" },
      { name: "Remarketing", icon: "ti-refresh", color: "#f6854c", bg: "#2a1a10" },
    ],
  },
  {
    id: 3,
    title: "Branding & Promotion",
    tabIcon: "ti-star",
    panelIcon: "ti-star",
    iconColor: "#f6c94c",
    description: "Not just for short-term attention — we turn your business into a trusted brand that stands out everywhere.",
    services: [
      { name: "Press Release", icon: "ti-news", color: "#a259f7", bg: "#1e1030" },
      { name: "Influencer Marketing", icon: "ti-users", color: "#f6854c", bg: "#2a1a10" },
      { name: "Brand Image Building", icon: "ti-award", color: "#f6c94c", bg: "#2a2010" },
      { name: "Celebrity Management", icon: "ti-crown", color: "#f6c94c", bg: "#2a2010" },
      { name: "Reputation Management", icon: "ti-shield-check", color: "#4acf8a", bg: "#0e2a1a" },
    ],
  },
  {
    id: 4,
    title: "Web & App Development",
    tabIcon: "ti-code",
    panelIcon: "ti-code",
    iconColor: "#4acf8a",
    description: "Modern websites and mobile apps that are fast, beautiful, and drive higher conversions.",
    services: [
      { name: "Website Development", icon: "ti-world", color: "#4a9cf6", bg: "#0e1e3a" },
      { name: "E-commerce Websites", icon: "ti-shopping-cart", color: "#f6854c", bg: "#2a1a10" },
      { name: "UI/UX Design", icon: "ti-palette", color: "#a259f7", bg: "#1e1030" },
      { name: "Mobile App Development", icon: "ti-device-mobile", color: "#4acf8a", bg: "#0e2a1a" },
    ],
  },
];

function AnimatedBackground() {
  return (
    <div className={styles.bgCanvas} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
      <svg className={styles.gridSvg} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100}
            stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.05"/>
        ))}
        {[...Array(13)].map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="700"
            stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.05"/>
        ))}
        <line x1="-100" y1="200" x2="1300" y2="200" stroke="#5c4cf6" strokeWidth="1.5" strokeOpacity="0.3">
          <animate attributeName="stroke-dasharray" values="0,1400;500,900;0,1400" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" values="0;-1400" dur="4s" repeatCount="indefinite"/>
        </line>
        <line x1="-100" y1="400" x2="1300" y2="400" stroke="#4acf8a" strokeWidth="1.2" strokeOpacity="0.25">
          <animate attributeName="stroke-dasharray" values="0,1400;350,1050;0,1400" dur="5.5s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" values="0;-1400" dur="5.5s" repeatCount="indefinite"/>
        </line>
        <line x1="-100" y1="560" x2="1300" y2="560" stroke="#f6854c" strokeWidth="1" strokeOpacity="0.2">
          <animate attributeName="stroke-dasharray" values="0,1400;280,1120;0,1400" dur="7s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" values="0;-1400" dur="7s" repeatCount="indefinite"/>
        </line>
        <circle r="4" fill="#5c4cf6" fillOpacity="0.9">
          <animateMotion path="M0,200 L1210,200" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle r="3" fill="#4acf8a" fillOpacity="0.8">
          <animateMotion path="M1210,400 L0,400" dur="5.5s" repeatCount="indefinite"/>
        </circle>
        <circle r="2.5" fill="#f6c94c" fillOpacity="0.7">
          <animateMotion path="M0,560 L1210,560" dur="7s" repeatCount="indefinite"/>
        </circle>
        <g stroke="#5c4cf6" strokeWidth="1.5" strokeOpacity="0.25" fill="none">
          <path d="M24,24 L24,64 M24,24 L64,24"/>
          <path d="M1176,24 L1176,64 M1176,24 L1136,24"/>
          <path d="M24,676 L24,636 M24,676 L64,676"/>
          <path d="M1176,676 L1176,636 M1176,676 L1136,676"/>
        </g>
      </svg>
      <div className={styles.particles}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`${styles.particle} ${styles[`p${i + 1}`]}`} />
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(1);
  const active = servicesData.find((s) => s.id === activeId);

  return (
    <section className={styles.servicesSection} aria-label="Our core services">
      <AnimatedBackground />
      <div className={styles.container}>
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Everything You Need to Grow Online</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={120}>
          <nav className={styles.tabs} aria-label="Service categories">
          {servicesData.map((service) => {
            const TabIcon = iconMap[service.tabIcon];
            return (
              <button
                key={service.id}
                className={`${styles.tabBtn} ${activeId === service.id ? styles.tabBtnActive : ""}`}
                onClick={() => setActiveId(service.id)}
                aria-pressed={activeId === service.id}
              >
                {TabIcon && <TabIcon size={18} />}
                <span>{service.title}</span>
              </button>
            );
          })}
          </nav>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelMeta}>
              <div className={styles.panelTitle}>
                {(() => {
                  const PanelIcon = iconMap[active.panelIcon];
                  return PanelIcon ? <PanelIcon size={26} color={active.iconColor} /> : null;
                })()}
                <span>{active.title}</span>
              </div>
              <p className={styles.panelDesc}>{active.description}</p>
            </div>
            <button className={styles.viewAll}>
              View All
              <Icons.ChevronRight size={15} />
            </button>
          </div>

          <div className={styles.servicesGrid}>
            {active.services.map((svc, idx) => {
              const SvcIcon = iconMap[svc.icon];
              return (
                <ScrollReveal key={idx} animation="zoom-in" delay={idx * 80}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIconWrap} style={{ background: svc.bg }}>
                      {SvcIcon && <SvcIcon size={22} color={svc.color} />}
                    </div>
                    <p className={styles.serviceName}>{svc.name}</p>
                    <div className={styles.learnMore}>
                      Learn more
                      <Icons.ChevronRight size={12} color="#5c6070" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}