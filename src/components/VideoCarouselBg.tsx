import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Video, BadgeCheck } from "lucide-react";

// Mock de dados englobando as "métricas" falsas (ou reais) de cada vídeo
const VIDEO_ITEMS = [
  { id: 1, url: "video.mp4", category: "Produto", title: "Tênis Running", views: "12K", comments: "34" },
  { id: 2, url: "video2.mp4", category: "UI Design", title: "App Financeiro", views: "8K", comments: "12" },
  { id: 3, url: "video3.mp4", category: "3D Art", title: "Formas Abstratas", views: "24K", comments: "105" },
  { id: 4, url: "video4.mp4", category: "Social", title: "Festival Vibes", views: "15K", comments: "45" },
  { id: 5, url: "video.mp4", category: "Branding", title: "Identidade Visual", views: "9K", comments: "22" },
  { id: 6, url: "video2.mp4", category: "Motion", title: "Explosão de Cores", views: "41K", comments: "210" },
  { id: 7, url: "video3.mp4", category: "3D Art", title: "Escultura Digital", views: "6K", comments: "8" },
  { id: 8, url: "video4.mp4", category: "Social", title: "Campanha Verão", views: "33K", comments: "89" },
  { id: 9, url: "video.mp4", category: "Vlog", title: "Cinematic Travel", views: "50K", comments: "312" },
];

const ProjectCard = ({ item, setSelectedVideo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onClick={() => setSelectedVideo(item.url)}
      className="relative group cursor-pointer overflow-hidden bg-[#111] aspect-[9/16] transition-all hover:opacity-90"
    >
      {/* Ícone de Reel Nativo no Canto superior direito */}
      <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10 opacity-90 drop-shadow-md">
        <Play size={16} fill="white" className="text-white" />
      </div>

      {/* Hover Overlay Clean */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Play fill="white" className="text-white drop-shadow-2xl scale-110" size={48} />
      </div>

      {/* Videos renderizados com saturação, brilho e contraste elevados (Filtros Vivos) */}
      <video
        src={item.url}
        muted
        loop
        autoPlay
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[1.08] contrast-[1.15] saturate-[1.3]"
      />
    </motion.div>
  );
};

const PortfolioCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 w-full bg-background min-h-screen relative flex flex-col items-center">
      
      {/* Título Principal da Seção */}
      <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-2 md:mb-28 text-white drop-shadow-lg">
          PORTFÓLIO
        </h2>

      {/* Header do Perfil Instagram MOCK */}
      <div className="w-full max-w-[935px] px-4 md:px-8 mb-8 md:mb-12 flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
        
        {/* Mobile Top Row: PFP + Username/Buttons & Desktop PFP */}
        <div className="flex items-center md:items-start gap-5 md:gap-0 w-full md:w-auto">
          {/* Foto de Perfil */}
          <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-full p-[3px] bg-gradient-to-tr from-[#FFC700] via-[#f9ce34] to-[#ee2a7b] flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
            <div className="w-full h-full rounded-full border-[3px] border-black bg-[#111] flex items-center justify-center overflow-hidden">
               <img src="/iago.jpg" alt="Logo" className="text-2xl md:text-5xl font-black text-white tracking-tighter" />
            </div>
          </div>

          {/* User Name & Action Buttons Mobile ONLY */}
          <div className="flex flex-col md:hidden flex-1 gap-2.5">
            <div className="flex items-center gap-1">
              <h2 className="text-lg text-white font-medium tracking-wide ">iagogamaeditor</h2>
              <BadgeCheck className="text-blue-500" size={16} />
            </div>
            <div className="flex gap-2">
              <a href="#contatos" className="bg-blue-500 flex-1 text-center text-foreground px-3 py-1.5 rounded-lg text-xs font-bold active:bg-blue-800">
                Seguir
              </a>
              <button className="bg-[#262626] active:bg-[#363636] border border-white/5 flex-1 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                Mensagem
              </button>
            </div>
          </div>
        </div>

        {/* Bio e Infos Desktop + Mobile */}
        <div className="flex flex-col w-full max-w-lg mt-1 md:mt-2">
          
          {/* Header Superior (Nome de usuário e botões) Desktop ONLY */}
          <div className="hidden md:flex flex-row items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl text-white font-medium tracking-wide">iagogamaeditor</h2>
              <BadgeCheck className="text-blue-500" size={24} />
            </div>
            <div className="flex gap-2">
              <a href="#contatos" className="bg-blue-500 text-foreground px-6 py-1.5 rounded-lg text-sm font-bold hover:bg-yellow-500 transition-colors">
                 Seguir
              </a>
              <button className="bg-[#262626] hover:bg-[#363636] border border-white/5 text-white px-6 py-1.5 rounded-lg text-sm font-semibold transition-colors">
                Mensagem
              </button>
            </div>
          </div>

          {/* Bio Text (Mobile and Desktop) */}
          <div className="text-white text-[13px] md:text-sm font-normal flex flex-col md:items-start text-left">
            <span className="font-bold text-[14px] md:text-base mb-1">Items Selecionados</span>
            <span className="text-neutral-100">Projetos focados em retenção e edição dinâmica 🔥</span>
            <span className="text-neutral-100">Trabalhos de destaque para marcas e criadores.</span>
            <span className="text-neutral-100">👇 Orce seu próximo vídeo</span>
            <a href="https://wa.me/77999358938" className="text-blue-200 mt-0.5 hover:text-blue-100 font-semibold">
              wa.me/77999358938
            </a>
          </div>

        </div>
      </div>

      {/* Tabs Menu */}
      <div className="w-full max-w-[935px] border-t border-white/15 flex justify-center mb-1">
        <div className="flex gap-12 text-xs md:text-sm font-bold tracking-widest uppercase">
          <div className="flex items-center gap-1.5 border-t-[1.5px] md:border-t-2 border-white md:px-2 py-3 md:py-4 text-white cursor-pointer -mt-[1px]">
            <Video size={16} /> REELS
          </div>
        </div>
      </div>

      {/* Reels Grid (Feed View: 3 colunas no Mobile, 5 no PC) */}
      <div className="w-full max-w-[1200px] grid grid-cols-3 md:grid-cols-5 gap-[2px] md:gap-2 px-[2px] md:px-0">
        {VIDEO_ITEMS.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            setSelectedVideo={setSelectedVideo}
          />
        ))}
      </div>

      {/* Modal / Visualizador do Vídeo (Estilo "Visualizar Reel") */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-6"
          >
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-all hover:rotate-90 hover:scale-110 z-50">
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] max-h-[90vh] aspect-[9/16] bg-[#111] md:rounded-xl overflow-hidden border-0 md:border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col"
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

    </section>
  );
};

export default PortfolioCarousel;