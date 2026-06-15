import HeroCarousel from "@/components/HeroCarousel";
import { 
  StatsSection, 
  ServicesSection, 
  IndustriesSection, 
  CaseStudiesSection, 
  CTASection, 
  WhyChooseSection,
  ProcessSection,
  GrowthEcosystemSection,
  ToolsPlatformsSection,
  CTASection2,
  FAQ,
} from "@/components/homepage";
import styles from "./page.module.css";
import CTASection3 from "@/components/homepage/CtaSection3";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroCarousel />
       <StatsSection />
      <ServicesSection />
      <CTASection/>
      <CaseStudiesSection />
       <WhyChooseSection />
      <IndustriesSection />
       
      <GrowthEcosystemSection />
     
      <ToolsPlatformsSection />
       <CTASection3/>
      <ProcessSection />
      <FAQ/>
      <CTASection2/>   
      </div>
  );
}