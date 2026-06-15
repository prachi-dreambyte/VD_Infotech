"use client";
import styles from "./ToolsMarquee.module.css";

const toolCategories = [
  {
    label: "Marketing & Analytics",
    tools: [
      { name: "Google Analytics 4", icon: "📊" },
      { name: "Search Console", icon: "🔍" },
      { name: "Tag Manager", icon: "🏷️" },
      { name: "SEMrush", icon: "📈" },
      { name: "Ahrefs", icon: "🔗" },
    ],
  },
  {
    label: "Advertising",
    tools: [
      { name: "Google Ads", icon: "🎯" },
      { name: "Meta Ads", icon: "📱" },
      { name: "LinkedIn Ads", icon: "💼" },
    ],
  },
  {
    label: "Design & Creative",
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Photoshop", icon: "🖼️" },
      { name: "Illustrator", icon: "✏️" },
      { name: "Canva", icon: "🖌️" },
    ],
  },
  {
    label: "Development",
    tools: [
      { name: "WordPress", icon: "🌐" },
      { name: "Shopify", icon: "🛒" },
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
    ],
  },
  {
    label: "AI & Automation",
    tools: [
      { name: "ChatGPT", icon: "🤖" },
      { name: "Gemini", icon: "✨" },
      { name: "Claude", icon: "🧠" },
      { name: "n8n", icon: "⚙️" },
      { name: "Make", icon: "🔄" },
      { name: "Zapier", icon: "⚡" },
    ],
  },
];

// Flatten all tools into a single list for the marquee
const allTools = toolCategories.flatMap((cat) =>
  cat.tools.map((tool) => ({ ...tool, category: cat.label }))
);

// Duplicate for seamless loop
const marqueeItems = [...allTools, ...allTools];

export default function ToolsMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <span className={styles.eyebrow}>Our Stack</span>
        <h2 className={styles.heading}>
          Powered by Industry&#8209;Leading Tools
        </h2>
      </div>

      {/* Category pills */}
      <div className={styles.categories}>
        {toolCategories.map((cat) => (
          <span key={cat.label} className={styles.categoryPill}>
            {cat.label}
          </span>
        ))}
      </div>

      {/* Marquee rows */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        {/* Row 1 — normal speed */}
        <div className={styles.marqueeTrack} aria-hidden="true">
          <div className={`${styles.marqueeInner} ${styles.row1}`}>
            {marqueeItems.map((tool, i) => (
              <div key={i} className={styles.card}>
                <span className={styles.cardIcon}>{tool.icon}</span>
                <span className={styles.cardName}>{tool.name}</span>
                <span className={styles.cardCategory}>{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — slightly slower, offset */}
        <div className={styles.marqueeTrack} aria-hidden="true">
          <div className={`${styles.marqueeInner} ${styles.row2}`}>
            {[...marqueeItems].reverse().map((tool, i) => (
              <div key={i} className={styles.card}>
                <span className={styles.cardIcon}>{tool.icon}</span>
                <span className={styles.cardName}>{tool.name}</span>
                <span className={styles.cardCategory}>{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer copy */}
      <p className={styles.tagline}>
        We combine expertise with industry&#8209;leading platforms to deliver
        smarter marketing, better insights, streamlined workflows, and measurable
        business growth.
      </p>
    </section>
  );
}