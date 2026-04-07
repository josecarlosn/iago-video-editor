import { motion } from "framer-motion";
import visualCoreImg from "@/assets/visual-core.jpg";

const VisualCore = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-3xl aspect-[16/9] rounded-[50%/30%] overflow-hidden"
      >
        <img
          src={visualCoreImg}
          alt="Atmosfera visual abstrata"
          className="w-full h-full object-cover"
          width={1280}
          height={720}
        />
      </motion.div>
    </section>
  );
};

export default VisualCore;
