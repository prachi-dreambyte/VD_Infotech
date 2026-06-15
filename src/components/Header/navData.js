export const navItems = [
  { label: "Home", href: "/", active: true },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        title: "Web Development",
        links: [
          { label: "Custom Website", href: "/services/custom-website" },
          { label: "E-Commerce Solutions", href: "/services/ecommerce" },
          { label: "WordPress Development", href: "/services/wordpress" },
          { label: "Web Application", href: "/services/web-app" },
        ],
      },
      {
        title: "Digital Marketing",
        links: [
          { label: "SEO Services", href: "/services/seo" },
          { label: "Social Media Marketing", href: "/services/smm" },
          { label: "PPC & Google Ads", href: "/services/ppc" },
          { label: "Content Marketing", href: "/services/content" },
        ],
      },
      {
        title: "Design & Branding",
        links: [
          { label: "UI/UX Design", href: "/services/ui-ux" },
          { label: "Logo & Brand Identity", href: "/services/branding" },
          { label: "Graphic Design", href: "/services/graphic" },
        ],
      },
      {
        title: "Technology",
        links: [
          { label: "Mobile App Development", href: "/services/mobile" },
          { label: "Cloud Solutions", href: "/services/cloud" },
          { label: "IT Consulting", href: "/services/consulting" },
        ],
      },
    ],
    featured: {
      stat: "500+",
      text: "projects delivered across India",
      cta: "View Our Work",
      href: "/portfolio",
    },
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    columns: [
      {
        title: "By Industry",
        links: [
          { label: "Healthcare", href: "/portfolio/healthcare" },
          { label: "Education", href: "/portfolio/education" },
          { label: "Real Estate", href: "/portfolio/real-estate" },
          { label: "E-Commerce", href: "/portfolio/ecommerce" },
        ],
      },
      {
        title: "By Service",
        links: [
          { label: "Websites", href: "/portfolio/websites" },
          { label: "Mobile Apps", href: "/portfolio/apps" },
          { label: "Branding", href: "/portfolio/branding" },
        ],
      },
    ],
    featured: {
      stat: "98%",
      text: "client satisfaction rate",
      cta: "See Case Studies",
      href: "/portfolio",
    },
  },
  {
    label: "Packages",
    href: "/packages",
    columns: [
      {
        title: "Website Packages",
        links: [
          { label: "Starter Package", href: "/packages/starter" },
          { label: "Business Package", href: "/packages/business" },
          { label: "Enterprise Package", href: "/packages/enterprise" },
        ],
      },
      {
        title: "Marketing Packages",
        links: [
          { label: "SEO Package", href: "/packages/seo" },
          { label: "SMM Package", href: "/packages/smm" },
          { label: "Complete Digital", href: "/packages/digital" },
        ],
      },
    ],
    featured: {
      stat: "30%",
      text: "average growth for our clients",
      cta: "Compare Packages",
      href: "/packages",
    },
  },
  {
    label: "Company",
    href: "/company",
    columns: [
      {
        title: "About Us",
        links: [
          { label: "Who We Are", href: "/company/about" },
          { label: "Our Team", href: "/company/team" },
          { label: "Careers", href: "/company/careers" },
          { label: "Testimonials", href: "/company/testimonials" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "FAQs", href: "/faqs" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
    featured: {
      stat: "10+",
      text: "years of digital excellence",
      cta: "About VD Infotech",
      href: "/company/about",
    },
  },
  {
    label: "Market Area",
    href: "/market-area",
    columns: [
      {
        title: "Locations",
        links: [
          { label: "Noida", href: "/market-area/noida" },
          { label: "Delhi NCR", href: "/market-area/delhi" },
          { label: "Ghaziabad", href: "/market-area/ghaziabad" },
          { label: "Greater Noida", href: "/market-area/greater-noida" },
        ],
      },
      {
        title: "Industries",
        links: [
          { label: "Startups", href: "/market-area/startups" },
          { label: "SMEs", href: "/market-area/smes" },
          { label: "Enterprise", href: "/market-area/enterprise" },
        ],
      },
    ],
    featured: {
      stat: "Pan India",
      text: "serving clients nationwide",
      cta: "Explore Markets",
      href: "/market-area",
    },
  },
  
];
