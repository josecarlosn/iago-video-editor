const items = "Engajamento · Retenção · Alcance · Autoridade · ";

const Marquee = () => {
  return (
    <section className="py-1 overflow-hidden border-y border-border/30 bg-background/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-foreground/20 text-[clamp(1rem,2vw,2rem)] font-extrabold uppercase tracking-[0.15em] mx-2"
          >
            {items}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
