const items = "Engajamento · Retenção · Alcance · Autoridade · ";

const Marquee = () => {
  return (
    <section className="py-2 overflow-hidden border-y border-border/30 bg-foreground">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="font-display   text-background/60 text-[clamp(1.5rem,4vw,3rem)] font-extrabold uppercase tracking-[0.15em] mx-4"
          >
            {items}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
