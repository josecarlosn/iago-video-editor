import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Array único de feedbacks
const feedbacks = [
  { 
    id: 1,
    client: "Marina O.", 
    role: "Diretora Criativa", 
    quote: "O trabalho entregue superou nossas expectativas. Uma abordagem visual que realmente destacou nossa marca no mercado." 
  },
  { 
    id: 2,
    client: "Pedro S.", 
    role: "Fundador", 
    quote: "Profissionalismo impecável. O redesign completo da nossa plataforma aumentou nosso engajamento em mais de 40%." 
  },
  { 
    id: 3,
    client: "Ana L.", 
    role: "Marketing Manager", 
    quote: "A sensibilidade estética e a capacidade técnica formam uma combinação rara. O resultado final foi brilhante." 
  },
  { 
    id: 4,
    client: "Lucas F.", 
    role: "CEO", 
    quote: "Entregas no prazo e uma comunicação super transparente. O design final traduz perfeitamente a nossa visão." 
  },
];

const FeedbackSection = () => {
  return (
    <section id="feedback" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFC700]/5 rounded-full blur-[120px] opacity-70 pointer-events-none" />
      
      <div className="mb-16 md:mb-24 text-center relative z-10 w-full max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-2 md:mb-4 text-white drop-shadow-lg"
        >
          O QUE DIZEM
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold"
        >
          Histórias de nossos clientes
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl relative z-10">
        {feedbacks.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] flex flex-col p-8 md:p-10 shadow-xl transiton-colors hover:border-white/20"
          >
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <Quote className="text-[#FFC700]/30 w-10 h-10 mb-6 drop-shadow-lg" />
              
              <div className="flex-1 flex items-start mb-6">
                 <p className="text-white/95 text-[clamp(1rem,3vw,1.25rem)] font-body leading-relaxed text-left font-medium drop-shadow-md">
                   "{project.quote}"
                 </p>
              </div>
              
              <div className="mt-auto flex items-center pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-tr from-[#FFC700] via-[#f9ce34] to-[#ee2a7b] p-[2px] flex-shrink-0">
                  <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center overflow-hidden">
                    <span className="text-white font-extrabold text-base tracking-tighter">{project.client.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base uppercase tracking-wide">
                    {project.client}
                  </h3>
                  <p className="text-[#FFC700] text-[10px] uppercase tracking-[0.2em] font-semibold mt-0.5">
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;