import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { img: portfolio1, title: "Lumina Spaces", category: "Arquitetura · Branding", tall: true },
  { img: portfolio2, title: "Noir Essentials", category: "Packaging · Identity", tall: false },
  { img: portfolio3, title: "Forma Sculpt", category: "3D · Art Direction", tall: true },
  { img: portfolio4, title: "Horizonte", category: "Photography · Editorial", tall: false },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="px-6 md:px-12 lg:px-20 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-extrabold text-foreground uppercase text-[clamp(1.5rem,4vw,3rem)] tracking-[-0.02em] mb-16"
      >
        Trabalhos Selecionados
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-lg cursor-pointer ${
              project.tall ? "md:row-span-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ minHeight: project.tall ? "500px" : "280px" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
              <h3 className="font-display font-extrabold text-foreground text-xl uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] mt-1">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
