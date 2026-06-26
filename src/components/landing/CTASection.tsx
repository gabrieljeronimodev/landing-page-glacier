import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink } from "./constants";

export function CTASection() {
  const reduced = useReducedMotion();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden p-10 sm:p-14 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #0073A9 0%, #005a85 60%, #003a55 100%)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-card-hover)",
          }}
        >
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20"
            style={{ background: "var(--color-secondary)" }}
            aria-hidden
          />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight relative">
            Pronta para um cuidado que enxerga você?
          </h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto relative">
            Fale agora com a equipe da Dra. Claudia e agende sua avaliação personalizada.
          </p>
          <a
            href={waLink("Olá! Quero agendar minha avaliação.")}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-2 mt-8 bg-white text-[color:var(--color-brand)] px-7 py-4 font-semibold hover:scale-[1.03] transition-transform"
            style={{ borderRadius: "var(--radius-btn)" }}
          >
            <MessageCircle size={18} />             Agendar visita
          </a>
        </motion.div>
      </div>
    </section>
  );
}