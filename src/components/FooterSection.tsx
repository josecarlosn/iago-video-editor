import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "LinkedIn", href: "#" },
];

const FooterSection = () => {
  return (
    <footer id="contato" className="px-6 md:px-12 lg:px-20 py-24 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4">
              Vamos criar algo juntos
            </p>
            <h2 className="font-display font-extrabold text-foreground uppercase text-[clamp(1.5rem,4vw,3rem)] tracking-[-0.02em] leading-[0.95]">
              ola@studio.com
            </h2>
          </div>
          <a href="mailto:ola@studio.com" className="btn-pill text-xs self-start md:self-auto">
            Enviar mensagem
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-0">
            {socials.map((social, i) => (
              <a
                key={social.name}
                href={social.href}
                className={`text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs uppercase tracking-[0.15em] px-4 ${
                  i > 0 ? "border-l border-border/40" : ""
                }`}
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground/50 text-xs tracking-wide">
            © 2026 Studio. Todos os direitos reservados.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
