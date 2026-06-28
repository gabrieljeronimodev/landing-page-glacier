import { motion, useReducedMotion } from "motion/react";
import { Star, Quote } from "lucide-react";
import vania from "@/assets/avatar-vania.png";
import thais from "@/assets/avatar-thais.png";
import beatriz from "@/assets/avatar-beatriz.png";
import { fadeUp, stagger } from "./motion-helpers";

const items = [
  {
    name: "Vânia Moleta",
    photo: vania,
    text:
      "Atendimento impecável da Dra. Claudia. Resultados surpreendentes no microagulhamento, minha pele nunca esteve tão saudável.",
  },
  {
    name: "Thais Andreatti",
    photo: thais,
    text:
      "Profissional atenciosa, explica cada passo e personaliza tudo. Saio de cada sessão renovada e recomendo de olhos fechados!",
  },
  {
    name: "Beatriz Nogueira",
    photo: beatriz,
    text:
      "A Dra. Claudia é diferenciada: cuidado humano de verdade e técnica de altíssimo nível. Hoje não vou em outra clínica.",
  },
];

export function Testimonials() {
  const reduced = useReducedMotion();
  return (
    <section id="testimonials" className="py-24 bg-[color:var(--color-muted-fill)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-brand)" }}
          >
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
            Quem vive a experiência, conta melhor
          </h2>
        </div>

        <motion.div
          variants={reduced ? undefined : stagger}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {items.map((t) => (
            <motion.figure
              key={t.name}
              variants={reduced ? undefined : fadeUp}
              className="bg-white p-7 flex flex-col relative"
              style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 opacity-15"
                style={{ color: "var(--color-brand)" }}
              />
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mt-4 flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-[color:var(--color-border-2)]">
                <img
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">Paciente</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}