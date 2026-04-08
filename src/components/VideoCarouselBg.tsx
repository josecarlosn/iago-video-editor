import { useState, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { X, Play } from "lucide-react";

const VIDEO_ITEMS = [
  { id: 1, url: "video.mp4", category: "Motion Design", title: "Campanha Nike" },
  { id: 2, url: "video2.mp4", category: "Web Design", title: "App Financeiro" },
  { id: 3, url: "video3.mp4", category: "Branding", title: "Studio X" },
  { id: 4, url: "video4.mp4", category: "Social Media", title: "Festival de Verão" },
];

const VideoCard = ({ item, isDragging, setSelectedVideo }) => {
  const videoRef = useRef(null);
  const hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => console.log("Play interrompido:", error));
      }
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 , backgroundColor: "rgb(255, 204, 0)"}}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (!isDragging.current) {
          setSelectedVideo(item.url);
        }
      }}
      className="bg-background group shrink-0 w-[200px] md:w-[200px] aspect-[9/16] rounded-xl border border-white/10 relative overflow-hidden shadow-xl transition-all cursor-pointer"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
      
      <video 
        ref={videoRef}
        src={item.url} 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <Play className="text-white fill-white ml-1" size={24} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col pointer-events-none translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1">
          {item.category}
        </span>
        <h3 className="text-white font-display text-lg md:text-xl font-bold leading-none">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
};

const VideoCarouselBg = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const isDragging = useRef(false);
  const trackRef = useRef(null); // Ref para medir o tamanho da pista
  
  // 1. O MOTOR DE MOVIMENTO: Guarda a posição exata em pixels
  const xTranslation = useMotionValue(0);

  // 2. LOOP INFINITO INTELIGENTE
  useAnimationFrame(() => {
    // Se estiver arrastando ou com o modal aberto, o motor pausa
    if (isDragging.current || selectedVideo) return;
    
    let currentX = xTranslation.get();
    
    // VELOCIDADE (Aumente o número para ir mais rápido, ex: 1.5 ou 2.0)
    currentX -= 0.5; 
    
    // Lógica mágica que teletransporta o carrossel invisivelmente para criar o loop
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      const halfWidth = totalWidth / 2; // Metade do conteúdo (já que duplicamos os itens)
      
      // Se puxou muito para a esquerda, recua invisivelmente
      if (currentX <= -halfWidth) {
        currentX += halfWidth;
      } 
      // Se puxou para a direita, avança invisivelmente
      else if (currentX > 0) {
        currentX -= halfWidth;
      }
    }
    
    xTranslation.set(currentX);
  });

  const carouselItems = [...VIDEO_ITEMS, ...VIDEO_ITEMS, ...VIDEO_ITEMS, ...VIDEO_ITEMS];

  return (
    <section id="portfolio" className="relative w-full  min-h-screen overflow-hidden bg-foreground flex flex-col justify-center ">
      
      <div className=" top-24 left-10 md:left-20 z-10 pointer-events-none">
        <h2 className="text-background font-display text-2xl uppercase tracking-widest opacity-80">
          Projetos Recentes
        </h2>
      </div>

      <motion.div
        ref={trackRef}
        style={{ x: xTranslation }} // Conectamos a pista direto no motor físico
        className="flex gap-6 md:gap-10 px-10 items-center cursor-grab active:cursor-grabbing w-max mt-12"
        drag="x"
        // REMOVIDO: dragConstraints e animate (não precisamos mais engessar)
        onDragStart={() => {
          isDragging.current = true;
        }}
        onDragEnd={() => {
          setTimeout(() => {
            isDragging.current = false;
          }, 150);
        }}
      >
        {carouselItems.map((item, i) => (
          <VideoCard 
            key={`video-${i}`} 
            item={item} 
            isDragging={isDragging} 
            setSelectedVideo={setSelectedVideo} 
          />
        ))}
      </motion.div>

      {/* MODAL CINEMA */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-6"
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-8 right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative w-full max-w-[280px] md:max-w-[320px] max-h-[85vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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

    </section>
  );
};

export default VideoCarouselBg;