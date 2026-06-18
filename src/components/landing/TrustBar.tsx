import { Star, Users, Award, Heart } from "lucide-react";
import { CountUp } from "./CountUp";

const items = [
  { icon: Star, label: "Avaliação Google", value: 5.0, decimals: 1, suffix: "" },
  { icon: Users, label: "Pacientes atendidas", value: 500, decimals: 0, suffix: "+" },
  { icon: Award, label: "Anos de experiência", value: 8, decimals: 0, suffix: "+" },
  { icon: Heart, label: "Recomendariam", value: 98, decimals: 0, suffix: "%" },
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-[color:var(--color-border-2)] bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ icon: Icon, label, value, decimals, suffix }) => (
          <div key={label} className="text-center">
            <div
              className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center mb-3"
              style={{ background: "var(--color-accent)", color: "var(--color-brand)" }}
            >
              <Icon size={20} />
            </div>
            <div className="font-display text-3xl font-bold text-gray-900">
              <CountUp to={value} decimals={decimals} suffix={suffix} />
            </div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}