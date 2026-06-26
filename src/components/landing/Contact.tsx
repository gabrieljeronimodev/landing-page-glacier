import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { CLIENT_ADDRESS, CLIENT_HOURS, CLIENT_PHONE_DISPLAY, CLIENT_WHATSAPP } from "./constants";

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("Rua Dr Odil Campos de Saes 437 - Vianelo/Bonfiglioli, Jundiaí - SP, 13202-475") +
  "&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Nome: ${form.name}%0ATelefone: ${form.phone}%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/${CLIENT_WHATSAPP}?text=${text}`, "_blank");
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-[color:var(--color-border-2)] focus:outline-none focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 text-sm transition-all";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-brand)" }}
          >
            Contato
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
            Vamos conversar sobre você
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {[
                { icon: MapPin, label: "Endereço", value: CLIENT_ADDRESS },
                { icon: Phone, label: "Telefone", value: CLIENT_PHONE_DISPLAY },
                { icon: Clock, label: "Atendimento", value: CLIENT_HOURS },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--color-accent)", color: "var(--color-brand)" }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {label}
                    </div>
                    <div className="text-gray-900 mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">
              <div>
                <label htmlFor="name" className="sr-only">Nome</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Telefone</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Seu telefone (WhatsApp)"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Como podemos ajudar?"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full text-white py-3.5 font-semibold hover:scale-[1.01] transition-transform"
                style={{ background: "var(--color-brand)", borderRadius: "var(--radius-btn)" }}
              >
                Enviar Mensagem <ArrowRight size={16} />
              </button>
            </form>
          </div>

          <div
            className="rounded-2xl overflow-hidden min-h-[400px] h-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <iframe
              title="Localização da Clínica Glacier"
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}