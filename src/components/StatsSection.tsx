import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Projetos Entregues" },
  { value: "8", label: "Anos de Experiência" },
  { value: "40+", label: "Clientes Globais" },
  { value: "15", label: "Prêmios" },
];

const StatsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <span className="block font-display text-foreground font-thin text-[clamp(2.5rem,6vw,5rem)] leading-none">
              {stat.value}
            </span>
            <span className="block mt-3 text-muted-foreground text-xs uppercase tracking-[0.2em]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
