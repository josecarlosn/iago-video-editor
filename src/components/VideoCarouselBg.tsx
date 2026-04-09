import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

const VIDEO_ITEMS = [
  { id: 1, url: "video.mp4", category: "Produto", title: "Tênis Running" },
  { id: 2, url: "video2.mp4", category: "UI Design", title: "App Financeiro" },
  { id: 3, url: "video3.mp4", category: "3D Art", title: "Formas Abstratas" },
  { id: 4, url: "video4.mp4", category: "Social", title: "Festival Vibes" },
  { id: 5, url: "video.mp4", category: "Branding", title: "Identidade Visual" },
  { id: 6, url: "video2.mp4", category: "Motion", title: "Explosão de Cores" },
  { id: 7, url: "video3.mp4", category: "3D Art", title: "Escultura Digital" },
  { id: 8, url: "video4.mp4", category: "Social", title: "Campanha Verão" },
];

const ProjectCard = ({ item, setSelectedVideo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => setSelectedVideo(item.url)}
      // w-[280px] a w-[320px] define a largura fixa para manter o 9:16 no carrossel
      className="relative group cursor-pointer overflow-hidden bg-[#111] rounded-xl flex-shrink-0 w-[260px] md:w-[320px] aspect-[9/16] border border-white/5 hover:border-white/20 transition-all duration-500 snap-center shadow-xl"
    >
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Play size={20} fill="white" className="text-white drop-shadow-md" />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 md:p-6 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">
          {item.category}
        </span>
        <h3 className="text-white text-lg md:text-xl font-black uppercase leading-tight">
          {item.title}
        </h3>
      </div>

      <video
        src={item.url}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
      />
    </motion.div>
  );
};

const PortfolioCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      // Rola a largura aproximada de um card + gap
      const scrollAmount = window.innerWidth < 768 ? 280 : 350; 
      const { scrollLeft } = carouselRef.current;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#050505] to-black min-h-screen relative scroll-mt-20 overflow-hidden text-white flex flex-col justify-center">
      
      {/* Fundo Granulado */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.20] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }} 
      />

      {/* Header */}
      <div className="mb-12 text-center px-4 relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
          Portfólio
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Uma curadoria de projetos onde estética encontra funcionalidade. 
          Explorando fronteiras visuais através de design de interface, animação 3D e motion graphics 
          para criar experiências digitais com impacto e propósito.
        </p>
      </div>

      {/* Carrossel de Vídeos (Uma linha só) */}
      <div className="relative w-full max-w-[1400px] mx-auto z-10 px-4 sm:px-12">
        
        {/* Setas Flutuantes */}
        <button 
          onClick={() => scroll("left")} 
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-white transition-all hidden sm:flex"
        >
          <ChevronLeft size={28} />
        </button>

        <button 
          onClick={() => scroll("right")} 
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-white transition-all hidden sm:flex"
        >
          <ChevronRight size={28} />
        </button>

        {/* Container que rola horizontalmente */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory no-scrollbar"
        >
          {VIDEO_ITEMS.map((item) => (
            <ProjectCard 
              key={item.id} 
              item={item} 
              setSelectedVideo={setSelectedVideo} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-md p-6"
          >
            <button className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] max-h-[90vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            >
              <video 
                src={selectedVideo} 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Esconde a barra de rolagem mas mantém a funcionalidade */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default PortfolioCarousel;