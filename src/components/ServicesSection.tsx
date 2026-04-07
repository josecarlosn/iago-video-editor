import { motion } from "framer-motion";

const services = [
  { name: "Branding & Identidade", description: "Construção de marca do zero ao posicionamento visual completo." },
  { name: "Design Digital", description: "Interfaces, websites e experiências interativas de alta performance." },
  { name: "Motion Design", description: "Animações e vídeos que amplificam a narrativa visual da marca." },
  { name: "Estratégia Criativa", description: "Planejamento e direção criativa para campanhas e lançamentos." },
  { name: "Direção de Arte", description: "Curadoria visual e storytelling para conteúdo editorial e digital." },
];

const ServicesSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-extrabold text-foreground uppercase text-[clamp(1.5rem,4vw,3rem)] tracking-[-0.02em] mb-16"
      >
        Serviços
      </motion.h2>

      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group border-t border-border/40 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 cursor-pointer transition-colors duration-300 hover:border-foreground/20"
          >
            <h3 className="font-display font-extrabold text-foreground text-xl md:text-2xl lg:text-3xl uppercase tracking-wide transition-colors duration-300 group-hover:text-primary">
              {service.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
        <div className="border-t border-border/40" />
      </div>
    </section>
  );
};

export default ServicesSection;
