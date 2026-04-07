import HeroSection from "@/components/HeroSection";
import VisualCore from "@/components/VisualCore";
import Marquee from "@/components/Marquee";
import StatsSection from "@/components/StatsSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Film grain overlay */}
      <div className="film-grain" />

      <HeroSection />
      <VisualCore />
      <Marquee />
      <StatsSection />
      <PortfolioGrid />
      <ServicesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
