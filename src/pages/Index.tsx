import HeroSection from "@/components/HeroSection";
import VisualCore from "@/components/VisualCore";
import Marquee from "@/components/Marquee";
import StatsSection from "@/components/StatsSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";
import VideoCarouselBg from "@/components/VideoCarouselBg";

const Index = () => {
  return (
    
    // O resto do arquivo continua exatamente igual!
<main className="relative h-screen overflow-x-hidden overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <div className="film-grain" />
      
      <div className="snap-start min-h-screen relative">
        <HeroSection />

      </div>
        

      <div className="snap-start min-h-screen relative">
        
        {/* <VideoCarouselBg/> */}
      </div>

      {/* <div className="snap-start min-h-screen">
        <VisualCore />
      </div>
   
      
      

      <div className="snap-start min-h-screen">
        <StatsSection />
      </div>

      <div className="snap-start min-h-screen">
        <PortfolioGrid />
      </div>

      <div className="snap-start min-h-screen">
        <ServicesSection />
      </div>

     
      <div className="snap-start">
        <FooterSection />
      </div> */}
    </main>
  );
};

export default Index;