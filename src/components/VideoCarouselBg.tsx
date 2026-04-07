import { motion } from "framer-motion";

const PLACEHOLDER_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  gradient: [
    "from-muted/40 to-background",
    "from-background to-muted/30",
    "from-muted/20 via-background to-muted/40",
    "from-muted/30 to-background",
  ][i % 4],
}));

const VideoCarouselBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.12]">
      {/* Dark overlay to further suppress */}
      <div className="absolute inset-0 bg-background/60 z-10" />

      {/* Row 1 - scrolls left */}
      <motion.div
        className="flex gap-3 absolute top-[8%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...PLACEHOLDER_ITEMS, ...PLACEHOLDER_ITEMS].map((item, i) => (
          <div
            key={`r1-${i}`}
            className={`shrink-0 w-[140px] md:w-[180px] aspect-[9/16] rounded-xl bg-gradient-to-b ${item.gradient} border border-foreground/5`}
          >
            <div className="w-full h-full rounded-xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Row 2 - scrolls right */}
      <motion.div
        className="flex gap-3 absolute top-[38%]"
        initial={{ x: "-50%" }}
        animate={{ x: ["−50%", "0%"] }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      >
        {[...PLACEHOLDER_ITEMS, ...PLACEHOLDER_ITEMS].map((item, i) => (
          <div
            key={`r2-${i}`}
            className={`shrink-0 w-[140px] md:w-[180px] aspect-[9/16] rounded-xl bg-gradient-to-b ${item.gradient} border border-foreground/5`}
          >
            <div className="w-full h-full rounded-xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Row 3 - scrolls left slower */}
      <motion.div
        className="flex gap-3 absolute top-[68%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        {[...PLACEHOLDER_ITEMS, ...PLACEHOLDER_ITEMS].map((item, i) => (
          <div
            key={`r3-${i}`}
            className={`shrink-0 w-[140px] md:w-[180px] aspect-[9/16] rounded-xl bg-gradient-to-b ${item.gradient} border border-foreground/5`}
          >
            <div className="w-full h-full rounded-xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoCarouselBg;
