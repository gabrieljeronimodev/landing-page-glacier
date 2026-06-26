import { motion, useReducedMotion } from "motion/react";
import { Sparkles, Zap, Heart, Smile, ArrowRight } from "lucide-react";
import { waLink } from "./constants";
import { fadeUp, stagger } from "./motion-helpers";

const services = [
  {
    icon: Sparkles,
    name: "Microagulhamento",
    desc:
      "Estímulo natural de colágeno para uniformizar o tom, suavizar cicatrizes e devolver firmeza com resultados visíveis em poucas sessões.",
    featured: true,
  },
  {
    icon: Zap,
    name: "Jato de Plasma",
    desc:
      "Tecnologia de precisão que remove pequenas lesões, manchas e renova a pele sem cirurgia, com recuperação rápida e segura.",
  },
  {
    icon: Heart,
    name: "Tratamentos Corporais",
    desc:
      "Protocolos personalizados para flacidez, gordura localizada e bem-estar. Uma rotina pensada para o seu objetivo real.",
  },
  {
    icon: Smile,
    name: "Tratamentos Faciais",
    desc:
      "Limpeza profunda, hidratação e protocolos antienvelhecimento que valorizam sua beleza natural com toque humanizado.",
  },
];

export function Services() {
  const reduced = useReducedMotion();
  return (
    <section id="services" className="py-24 bg-[color:var(--color-muted-fill)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-brand)" }}
          >
            Tratamentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
            Cuidado especializado para <span style={{ color: "var(--color-brand)" }}>cada etapa</span> da sua pele
          </h2>
          <p className="text-gray-600 mt-4">
            Protocolos modernos combinados com avaliação individualizada, porque ninguém é igual.
          </p>
        </div>

        <motion.div
          variants={reduced ? undefined : stagger}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.article
              key={s.name}
              variants={reduced ? undefined : fadeUp}
              className="group relative bg-white p-7 flex flex-col transition-all hover:-translate-y-1"
              style={{
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {s.featured && (
                <span
                  className="absolute -top-3 left-7 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                  style={{ background: "var(--color-secondary)" }}
                >
                  Mais procurado
                </span>
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--color-accent)", color: "var(--color-brand)" }}
              >
                <s.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900">{s.name}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed flex-1">{s.desc}</p>
              <a
                href={waLink(`Olá! Tenho interesse em ${s.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                style={{ color: "var(--color-brand)" }}
              >
                Saber mais <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}