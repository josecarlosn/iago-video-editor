import HeroSection from "@/components/HeroSection";
import VisualCore from "@/components/VisualCore";
import Marquee from "@/components/Marquee";
import StatsSection from "@/components/StatsSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";
import VideoCarouselBg from "@/components/VideoCarouselBg";
import { motion } from "framer-motion";

const FadeInSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <main className="relative h-screen overflow-x-hidden overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <div className="film-grain" />
      
      <FadeInSection className="snap-start min-h-screen relative">
        <HeroSection />
      </FadeInSection>
        
      <FadeInSection className="snap-start min-h-screen relative">
        <VideoCarouselBg/>
        
      </FadeInSection>

      <FadeInSection className="snap-start min-h-screen">
        <Marquee/>
        <StatsSection />
        <VisualCore />
      </FadeInSection>

      <FadeInSection className="snap-start min-h-screen">
        <PortfolioGrid />
      </FadeInSection>

      <FadeInSection className="snap-start min-h-screen">
        <ServicesSection />
      </FadeInSection>
     
      <FadeInSection className="snap-start">
        <FooterSection />
      </FadeInSection>
    </main>
  );
};

export default Index;