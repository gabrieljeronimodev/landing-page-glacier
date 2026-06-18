import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { CLIENT_NAME, FREELANCER_NAME, freelancerWaLink, waLink } from "./constants";

const NAV = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];

export function DemoBannerNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Demo banner */}
      <div className="h-9 bg-slate-900 text-white flex items-center justify-center gap-3 px-4 text-xs sm:text-sm">
        <span className="hidden sm:inline">🚀 Protótipo criado para {CLIENT_NAME} — gostou? Vamos deixar assim!</span>
        <span className="sm:hidden">🚀 Protótipo demo</span>
        <a
          href={freelancerWaLink()}
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 hover:bg-white/20 rounded-full px-3 py-0.5 font-semibold transition-colors"
        >
          Falar com {FREELANCER_NAME}
        </a>
      </div>

      {/* Navbar */}
      <nav
        className={`flex items-center justify-between px-6 lg:px-12 h-16 transition-all duration-300 ${
          scrolled ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "bg-white/95 backdrop-blur"
        }`}
      >
        <a href="#top" className="font-display text-xl font-bold" style={{ color: "var(--color-brand)" }}>
          {CLIENT_NAME}
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-gray-600 hover:text-[color:var(--color-brand)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Olá! Gostaria de saber mais sobre os tratamentos.")}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-white px-5 py-2 text-sm font-semibold transition-transform hover:scale-[1.02]"
            style={{ background: "var(--color-brand)", borderRadius: "var(--radius-btn)" }}
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[color:var(--color-border-2)] shadow-lg px-6 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 py-2"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}