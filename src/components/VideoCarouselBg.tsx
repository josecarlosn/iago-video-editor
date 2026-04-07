import { motion } from "framer-motion";

// Links do Google Drive convertidos para formato de download direto
const VIDEO_ITEMS = [
  { id: 1, url: "video.mp4" },
  { id: 2, url: "video2.mp4" },
  { id: 3, url: "video3.mp4" },
  { id: 4, url: "video4.mp4" },
  
];

const VideoCarouselBg = () => {
  return (
    <div className=" overflow-hidden pointer-events-none z-0 opacity-[0.12]">
      {/* Dark overlay to further suppress */}
      <div className=" bg-background/60 z-10" />

      {/* Row 1 - scrolls left */}
      <motion.div
        className="flex gap-10 top-[8%]"
        
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...VIDEO_ITEMS, ...VIDEO_ITEMS].map((item, i) => (
          <div
            key={`r1-${i}`}
            className="shrink-0 w-[140px] md:w-[180px] aspect-[9/16] rounded-xl border border-foreground/5 relative overflow-hidden bg-muted/20"
          >
            <video 
              src={item.url} 
              autoPlay 
              muted 
              loop 
              playsInline
              className=" inset-0 w-full h-full object-cover"
            />
            <div className=" inset-0 z-10 w-full h-full bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>

      
    </div>
  );
};




export default VideoCarouselBg;