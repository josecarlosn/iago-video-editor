import { motion } from "framer-motion";
import { 
  MonitorPlay, 
  Clapperboard, 
  Building2, 
  Calendar 
} from "lucide-react";

const stats = [
  { value: "500M+", label: "Views Geradas", icon: <MonitorPlay size={20} strokeWidth={1.5} /> },
  { value: "250+", label: "Vídeos Editados", icon: <Clapperboard size={20} strokeWidth={1.5} /> },
  { value: "40+", label: "Marcas Atendidas", icon: <Building2 size={20} strokeWidth={1.5} /> },
  { value: "8", label: "Anos de Experiência", icon: <Calendar size={20} strokeWidth={1.5} /> },
];

const StatsSection = () => {
  return (
    <section className="bg-background px-6 py-20 flex flex-col items-center justify-center">
      
      {/* Título */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3">
          Performance
        </h2>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-2 md:mb-4 text-white drop-shadow-lg">
          RESULTADOS
        </h2>
      </motion.div>

      {/* Container agrupado e centralizado */}
      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-2 group"
            >
              {/* Ícone sutil que destaca ao passar o mouse */}
              <div className="mb-3 text-foreground opacity-30 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                {stat.icon}
              </div>
              
              {/* Número mais próximo do rótulo */}
              <span className="block font-display text-foreground font-semibold text-3xl md:text-4xl tracking-tighter mb-1">
                {stat.value}
              </span>
              
              {/* Rótulo compacto */}
              <span className="block text-muted-foreground text-[9px] md:text-[10px] uppercase tracking-widest font-medium opacity-80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StatsSection;