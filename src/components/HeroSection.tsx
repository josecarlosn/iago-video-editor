import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";


const HeroSection = () => {
  // Estado para controlar o hover no portfólio (usado para o brilho e para parar a seta)
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-24 pb-10 overflow-hidden bg-background">
      
      {/* EFEITO DE BRILHO (Ambient Glow) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isPortfolioHovered ? 1 : 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.1] blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[100px]" />
      </motion.div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-between relative z-10"
      >
        <span className="font-display text-foreground text-lg font-extrabold tracking-[0.2em] uppercase">
          Studio
        </span>
        <a href="#contato" className="btn-pill text-xs">
          Contato
        </a>
      </motion.nav>

      {/* Hero heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 flex flex-col items-center justify-center relative z-10"
      >
        <h1 className="font-display font-extrabold text-foreground uppercase text-center text-[clamp(2rem,9vw,6.5rem)] leading-[0.95] tracking-[-0.02em] max-w-[1200px]">
          iago <br />gama
        </h1>
         <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-muted-foreground font-body text-sm md:text-base tracking-wide leading-relaxed max-w-md mx-auto mb-12 relative z-10"
        >
          Transformo ideias em vídeos que engajam, retêm e convertem — do roteiro ao corte final.
        </motion.p>
      </motion.div>

      {/* Subtitle */}
     

      {/* Bottom section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex items-end justify-between relative z-10 w-full"
      >
        <div className="flex-1 hidden md:block"></div>

        {/* Componente Portfólio Centralizado */}
        <a 
          href="#portfolio" 
          onMouseEnter={() => setIsPortfolioHovered(true)}
          onMouseLeave={() => setIsPortfolioHovered(false)}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-pointer"
        >
          {/* Seta e Texto com Lógica de Pausa no Animate */}
          <motion.div
            className="flex flex-col items-center"
            // Se estiver em hover, vai para y:0 e opacidade 1. Caso contrário, faz o loop.
            animate={isPortfolioHovered 
              ? { y: 0, opacity: 1 } 
              : { y: [0, 6, 0], opacity: [0.3, 1, 1, 0.3] }
            }
            transition={{ 
              duration: isPortfolioHovered ? 0.3 : 1.5, 
              repeat: isPortfolioHovered ? 0 : Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="flex items-center gap-2">
              <Briefcase strokeWidth={1.5} size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                Portfólio
              </span>
            </div>
            <ArrowDown strokeWidth={1} size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </a>

        {/* Botão Trabalhar juntos */}
        <div className="flex-1 flex justify-end">
          <a href="#contato" className="btn-pill text-xs">
            Trabalhar juntos
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;