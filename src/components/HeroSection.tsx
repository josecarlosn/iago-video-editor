import { useState, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, Clapperboard } from "lucide-react"; // Novo ícone

const backgroundImage = "/download.png"; 

const HeroSection = () => {
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (event) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = event;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(smoothMouseX, [0, 1], ["1%", "-1%"]);
  const bgY = useTransform(smoothMouseY, [0, 1], ["1%", "-1%"]);
  const rotateX = useTransform(smoothMouseY, [0, 1], [0.5, -0.5]); 
  const rotateY = useTransform(smoothMouseX, [0, 1], [-0.5, 0.5]);

  const iconFloatLeft = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const iconFloatRight = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const iconFloatUp = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const iconFloatDown = useTransform(smoothMouseY, [0, 1], [-15, 15]);

  const floatingElements = [
    { id: "premiere", src: "/logos/premiere.png", className: "top-[-15%] left-[0%] md:top-[5%] md:left-[-35%] lg:left-[-45%]", parallax: { x: iconFloatLeft, y: iconFloatUp }, animate: { y: [0, -10, 0], rotate: [-4, 4, -4] }, duration: 4.5 },
    { id: "instagram", src: "/logos/instagram.png", className: "top-[45%] left-[-10%] md:left-[-45%] lg:left-[-60%]", parallax: { x: iconFloatLeft, y: iconFloatDown }, animate: { y: [0, 8, 0], rotate: [5, -5, 5] }, duration: 5.8 },
    { id: "capcut", src: "/logos/capcut.jpg", className: "bottom-[-15%] left-[0%] md:bottom-[10%] md:left-[-30%] lg:left-[-40%]", parallax: { x: iconFloatLeft, y: iconFloatDown }, animate: { y: [0, -12, 0], rotate: [-6, 6, -6] }, duration: 4.8 },
    { id: "tiktok", src: "/logos/tiktok.avif", className: "top-[-15%] right-[0%] md:top-[0%] md:right-[-35%] lg:right-[-45%]", parallax: { x: iconFloatRight, y: iconFloatUp }, animate: { y: [0, 15, 0], rotate: [5, -8, 5] }, duration: 5.2 },
    { id: "ae", src: "/logos/ae.png", className: "top-[45%] right-[-10%] md:right-[-45%] lg:right-[-60%]", parallax: { x: iconFloatRight, y: iconFloatUp }, animate: { y: [0, -15, 0], rotate: [8, -4, 8] }, duration: 6 },
    { id: "shorts", src: "/logos/shorts.png", className: "bottom-[-15%] right-[0%] md:bottom-[10%] md:right-[-35%] lg:right-[-45%]", parallax: { x: iconFloatRight, y: iconFloatDown }, animate: { y: [0, 10, 0], rotate: [0, 8, 0] }, duration: 5.5 },
  ];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-12 pb-10 overflow-hidden bg-background"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* BACKGROUND E BRILHOS (Mantidos conforme original) */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ width: "104%", height: "104%", left: "-2%", top: "-2%", x: bgX, y: bgY, rotateX, rotateY, WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)", maskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}>
        <motion.img src={backgroundImage} alt="Background" className="w-full h-full object-cover opacity-20" initial={{ scale: 1.1 }} animate={{ scale: [1.1, 1.05, 1.1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </motion.div>

      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between relative z-50 w-full">
        <span className="font-display text-foreground text-lg font-extrabold tracking-[0.2em] uppercase">Studio</span>
        <a href="#contato" className="btn-pill text-[10px] md:text-xs py-2 px-4">Contato</a>
      </motion.nav>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="flex-1 flex flex-col items-center justify-center relative z-40 w-full py-12">
        <div className="relative w-full max-w-[500px] md:max-w-[600px] flex flex-col justify-center items-center">
          {floatingElements.map((el) => (
            <motion.div key={el.id} className={`absolute z-30 ${el.className}`} style={{ ...el.parallax, transformStyle: "preserve-3d" }}>
              <motion.div animate={el.animate} transition={{ duration: el.duration, repeat: Infinity, ease: "easeInOut" }} className="flex items-center justify-center">
                <img src={el.src} alt={el.id} className={`opacity-6 mx-10 md:mx-40 lg:mx-28 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ${el.id === "capcut" || el.id === "tiktok" ? "rounded-lg md:rounded-2xl object-cover" : "object-contain"}`} />
              </motion.div>
            </motion.div>
          ))}

          <h1 className="font-display font-extrabold text-foreground uppercase text-center text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] leading-[0.85] tracking-tight relative z-40 pointer-events-none select-none drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            iago <br />gama
          </h1>

          <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="font-display text-foreground/80 tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs sm:text-sm md:text-lg mt-6 relative z-40">
            Video Editor
          </motion.h2>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="text-center text-muted-foreground font-body text-sm md:text-base tracking-wide leading-relaxed max-w-[280px] md:max-w-md mx-auto mt-10 relative z-20">
          Transformo ideias em vídeos que engajam, retêm e convertem — do roteiro ao corte final.
        </motion.p>

        {/* BOTÃO PORTFÓLIO: DESTAQUE NOVO E ANIMAÇÃO CORRIGIDA */}
        <motion.a 
          href="#portfolio" 
          onMouseEnter={() => setIsPortfolioHovered(true)}
          onMouseLeave={() => setIsPortfolioHovered(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center group cursor-pointer mt-14 relative z-20"
        >
          {/* Brilho radial que aparece apenas no Hover para dar destaque sem bordas */}
          <div className={`absolute inset-0 bg-primary/20 blur-[30px] rounded-full scale-150 transition-opacity duration-500 ${isPortfolioHovered ? 'opacity-100' : 'opacity-0'}`} />

          <motion.div
            className="flex flex-col items-center gap-2 relative z-10"
            animate={{ 
              y: [0, 10, 0],
              scale: isPortfolioHovered ? 1.1 : 1 
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 }
            }}
          >
            <div className="flex items-center gap-2.5">
              <Clapperboard 
                strokeWidth={1.5} 
                size={18} 
                className={`transition-all duration-300 ${isPortfolioHovered ? 'text-foreground scale-110' : 'text-muted-foreground opacity-60'}`}
              />
              <span className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${isPortfolioHovered ? 'text-foreground' : 'text-muted-foreground opacity-60'}`}>
                Portfólio
              </span>
            </div>
            
            <ArrowDown 
              strokeWidth={1.2} 
              size={28} 
              className={`transition-all duration-300 ${isPortfolioHovered ? 'text-foreground translate-y-1' : 'text-muted-foreground opacity-40'}`}
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;