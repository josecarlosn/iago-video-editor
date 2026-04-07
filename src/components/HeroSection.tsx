import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-24 pb-10 overflow-hidden">
      {/* Ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
      </div>

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
        className="flex-1 flex items-center justify-center relative z-10"
      >
        <h1 className="font-display font-extrabold text-foreground uppercase text-center text-[clamp(2rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em] max-w-[1200px]">
          Transformando
          <br />
          ideias em conteúdo
          <br />
          <span className="text-primary">visual</span> de impacto
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-muted-foreground font-body text-sm md:text-base tracking-wide leading-relaxed max-w-md mx-auto mb-12 relative z-10"
      >
        Design, estratégia e experiência digital para marcas que desejam deixar uma marca inesquecível.
      </motion.p>

      {/* Bottom buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex items-end justify-between relative z-10"
      >
        <a href="#portfolio" className="btn-pill text-xs">
          Portfólio
        </a>
        <a href="#contato" className="btn-pill text-xs">
          Trabalhar juntos
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
