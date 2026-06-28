import { motion, useReducedMotion } from "motion/react";
import { Check, GraduationCap, HandHeart, Stethoscope } from "lucide-react";
import { fadeUp } from "./motion-helpers";

const bullets = [
  {
    icon: GraduationCap,
    title: "Atualização constante",
    desc: "Cursos e congressos contínuos para trazer o que há de mais moderno em estética e saúde.",
  },
  {
    icon: HandHeart,
    title: "Atendimento humanizado",
    desc: "Cada protocolo é construído ouvindo você, sua história, sua rotina e seus objetivos.",
  },
  {
    icon: Stethoscope,
    title: "Visão clínica integrada",
    desc: "Flebologia e estética caminhando juntas: cuidar da pele é também cuidar da saúde.",
  },
];

export function About() {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="aspect-[4/5] rounded-[2rem] overflow-hidden relative"
            style={{ boxShadow: "var(--shadow-card-hover)" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #e8f4fb 0%, #0073A9 70%, #003a55 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="font-display text-[8rem] font-bold leading-none opacity-90">CN</div>
              <div className="text-sm uppercase tracking-[0.3em] mt-2 text-white/80">Dra. Claudia Nogueira</div>
            </div>
          </div>
          <div
            className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl max-w-[220px] hidden sm:block"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 text-amber-500 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Check key={i} size={14} className="text-emerald-500" />
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              "Excelente profissional, atenciosa e cuidadosa em cada detalhe."
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={reduced ? undefined : fadeUp}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-brand)" }}
          >
            Quem cuida de você
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900 leading-tight">
            Profissional altamente qualificada, em constante evolução.
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed">
            A Dra. Claudia Nogueira une formação sólida em flebologia e estética avançada a uma busca
            permanente por novas técnicas. Aqui, cada paciente é única, e cada protocolo também.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--color-accent)", color: "var(--color-brand)" }}
                >
                  <b.icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{b.title}</div>
                  <div className="text-sm text-gray-600">{b.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}