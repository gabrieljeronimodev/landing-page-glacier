import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, ArrowRight, Sparkles, Star } from "lucide-react";
import { waLink } from "./constants";
import heroImg from "@/assets/hero-doctor.png";
import avatarVania from "@/assets/avatar-vania.png";
import avatarThais from "@/assets/avatar-thais.png";
import avatarBeatriz from "@/assets/avatar-beatriz.png";

export function Hero() {
  const reduced = useReducedMotion();
  const anim = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <section id="top" className="relative pt-32 lg:pt-36 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,244,251,0.6) 0%, #ffffff 55%, rgba(200,167,124,0.10) 100%)",
          }}
        />
        <div
          className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--color-brand)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            {...anim(0)}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--color-accent)", color: "var(--color-brand)" }}
          >
            <Sparkles size={14} /> Estética avançada · Jundiaí–SP
          </motion.div>

          <motion.h1
            {...anim(0.12)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mt-5 text-gray-900"
          >
            Sua beleza natural realçada com{" "}
            <span style={{ color: "var(--color-brand)" }}>ciência</span> e cuidado humano.
          </motion.h1>

          <motion.p {...anim(0.22)} className="mt-5 text-lg text-gray-600 max-w-xl leading-relaxed">
            Tratamentos personalizados com a Dra. Claudia Nogueira. Protocolos modernos,
            resultados visíveis e o acolhimento que você merece em cada consulta.
          </motion.p>

          <motion.div {...anim(0.32)} className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Olá Dra. Claudia! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white px-6 py-3.5 text-sm font-semibold shadow-lg shadow-[color:rgba(0,115,169,0.25)] hover:scale-[1.02] transition-transform"
              style={{ background: "var(--color-brand)", borderRadius: "var(--radius-btn)" }}
            >
              <MessageCircle size={18} />               Agendar visita
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold border-2 hover:bg-gray-50 transition-colors"
              style={{
                borderColor: "var(--color-border-2)",
                borderRadius: "var(--radius-btn)",
                color: "var(--color-fg)",
              }}
            >
              Ver tratamentos <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div {...anim(0.42)} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[avatarVania, avatarThais, avatarBeatriz].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Paciente ${i + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
                <span className="ml-1 font-semibold text-gray-900">5.0</span>
              </div>
              <span className="text-gray-500">Avaliação Google · pacientes reais</span>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          {...anim(0.18)}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
          style={{ boxShadow: "var(--shadow-card-hover)" }}
        >
          <img
            src={heroImg}
            alt="Dra. Claudia Nogueira — Estética Avançada"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,58,85,0.85) 0%, rgba(0,115,169,0.3) 40%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <div className="font-display text-2xl font-semibold leading-tight">
              Dra. Claudia Nogueira
            </div>
            <div className="text-sm text-white/80 mt-1">
              Flebologia · Estética Avançada
            </div>
            <div className="mt-4 flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <div className="text-xs">
                <div className="font-semibold">Tecnologia + cuidado</div>
                <div className="text-white/70">protocolos exclusivos para cada pele</div>
              </div>
            </div>
          </div>
          {/* decorative ring */}
          <div
            className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border-[24px] border-white/10"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}