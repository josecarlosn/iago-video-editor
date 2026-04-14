import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

// Array único para o deck central
const feedbacks = [
  { img: portfolio1, title: "Lumina Spaces", category: "Arquitetura · Branding" },
  { img: portfolio2, title: "Noir Essentials", category: "Packaging · Identity" },
  { img: portfolio3, title: "Forma Sculpt", category: "3D · Art Direction" },
  { img: portfolio4, title: "Horizonte", category: "Photography · Editorial" },
];

const ROTATION_RANGE = 6;
const SCALE_STEP = 0.04;
const Y_OFFSET = 12;

interface CardProps {
  project: any;
  index: number;
  total: number;
  onSwipe: () => void;
  isTop: boolean;
  xRef?: React.MutableRefObject<ReturnType<typeof useMotionValue<number>> | null>;
}

const Card = ({ project, index, total, onSwipe, isTop, xRef }: CardProps) => {
  const x = useMotionValue(0);
  if (isTop && xRef) xRef.current = x;
  const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0.5, 1, 1, 1, 0.5]);

  const depth = total - 1 - index;
  const scale = 1 - depth * SCALE_STEP;
  const yOffset = depth * Y_OFFSET;
  const rotationOffset = depth * (depth % 2 === 0 ? ROTATION_RANGE : -ROTATION_RANGE) * 0.4;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500) {
      const direction = info.offset.x > 0 ? 1 : -1;
      animate(x, direction * 400, {
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
      {/* Aspect Ratio ajustado para 10/16 */}
      <div 
        className="relative w-full h-full rounded-2xl overflow-hidden border border-background/20 bg-muted"
        style={{ aspectRatio: "10/16" }}
      >
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-extrabold text-white text-base uppercase tracking-wide">
            {project.title}
          </h3>
          <p className="text-white/70 text-xs uppercase tracking-[0.15em] mt-1">
            {project.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeedbackDeck = ({ items }: { items: any[] }) => {
  const [order, setOrder] = useState(() => items.map((_, i) => i));
  const topCardX = useRef<ReturnType<typeof useMotionValue<number>> | null>(null);

  const handleSwipe = () => {
    setOrder((prev) => {
      const next = [...prev];
      const top = next.pop()!;
      next.unshift(top);
      return next;
    });
  };

  return (
    // Aspect Ratio 10/16 aplicado ao container principal do deck
    <div 
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto"
      style={{ aspectRatio: "10/16" }}
    >
      {order.map((itemIndex, i) => (
        <Card
          key={items[itemIndex].title + i}
          project={items[itemIndex]}
          index={i}
          total={order.length}
          onSwipe={handleSwipe}
          isTop={i === order.length - 1}
          xRef={i === order.length - 1 ? topCardX : undefined}
        />
      ))}
    </div>
  );
};

const FeedbackSection = () => {
  return (
    <section id="feedback" className="px-6 md:px-12 lg:px-20 py-24 bg-foreground overflow-hidden">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-background uppercase text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em]"
        >
          FEEDBACK
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-background/50 text-xs uppercase tracking-[0.2em] mt-4"
        >
          Arraste os cards para ler
        </motion.p>
      </div>

      {/* Container centralizado para um único deck */}
      <div className="flex justify-center items-center">
        <FeedbackDeck items={feedbacks} />
      </div>
    </section>
  );
};

export default FeedbackSection;