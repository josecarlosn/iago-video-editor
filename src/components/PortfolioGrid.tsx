import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { img: portfolio1, title: "Lumina Spaces", category: "Arquitetura · Branding" },
  { img: portfolio2, title: "Noir Essentials", category: "Packaging · Identity" },
  { img: portfolio3, title: "Forma Sculpt", category: "3D · Art Direction" },
  { img: portfolio4, title: "Horizonte", category: "Photography · Editorial" },
];

const ROTATION_RANGE = 6;
const SCALE_STEP = 0.04;
const Y_OFFSET = 12;

interface CardProps {
  project: (typeof projects)[0];
  index: number;
  total: number;
  onSwipe: () => void;
  isTop: boolean;
  xRef?: React.MutableRefObject<ReturnType<typeof useMotionValue<number>> | null>;
}

const Card = ({ project, index, total, onSwipe, isTop }: CardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0.5, 1, 1, 1, 0.5]);

  const depth = total - 1 - index;
  const scale = 1 - depth * SCALE_STEP;
  const yOffset = depth * Y_OFFSET;
  const rotationOffset = depth * (depth % 2 === 0 ? ROTATION_RANGE : -ROTATION_RANGE) * 0.4;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500) {
      const direction = info.offset.x > 0 ? 1 : -1;
      animate(x, direction * 600, {
        duration: 0.4,
        onComplete: () => {
          x.set(0);
          onSwipe();
        },
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : rotationOffset,
        scale,
        y: yOffset,
        opacity: isTop ? opacity : 1 - depth * 0.15,
        zIndex: index,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={isTop ? handleDragEnd : undefined}
      initial={false}
      animate={{
        scale,
        y: yOffset,
        rotate: isTop ? 0 : rotationOffset,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-foreground/10"
        style={{ aspectRatio: "9/16" }}
      >
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-extrabold text-foreground text-base uppercase tracking-wide">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] mt-1">
            {project.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioGrid = () => {
  const [order, setOrder] = useState(() => projects.map((_, i) => i));

  const handleSwipe = () => {
    setOrder((prev) => {
      const next = [...prev];
      const top = next.pop()!;
      next.unshift(top);
      return next;
    });
  };

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

      <div className="flex justify-center items-center">
        <div
          className="relative"
          style={{ width: "min(320px, 70vw)", height: "calc(min(320px, 70vw) * 16 / 9)" }}
        >
          {order.map((projectIndex, i) => (
            <Card
              key={projects[projectIndex].title}
              project={projects[projectIndex]}
              index={i}
              total={order.length}
              onSwipe={handleSwipe}
              isTop={i === order.length - 1}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-muted-foreground/40 text-xs uppercase tracking-[0.2em] mt-10">
        Arraste para explorar
      </p>
    </section>
  );
};

export default PortfolioGrid;
