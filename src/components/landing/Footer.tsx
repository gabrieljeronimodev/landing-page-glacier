import { MessageCircle } from "lucide-react";
import {
  CLIENT_ADDRESS,
  CLIENT_HOURS,
  CLIENT_NAME,
  CLIENT_PHONE_DISPLAY,
  waLink,
} from "./constants";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="pt-12 pb-6 px-6" style={{ background: "var(--color-fg)", color: "white" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <div className="font-display text-[1.375rem] font-bold">{CLIENT_NAME}</div>
          <p className="text-sm text-white/55 mt-1 max-w-xs">
            Estética avançada e cuidado humanizado em Jundiaí.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/gabrieljeronimodeveloper/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[color:var(--color-brand)] transition-colors flex items-center justify-center"
            >
              <InstagramIcon />
            </a>
            <a
              href="#top"
              aria-label="Voltar ao topo"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[color:var(--color-brand)] transition-colors flex items-center justify-center"
            >
              <FacebookIcon />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[color:var(--color-brand)] transition-colors flex items-center justify-center"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-sm">Links Rápidos</div>
          <div className="flex flex-col gap-2 mt-3 text-sm text-white/60">
            {[
              { l: "Serviços", h: "#services" },
              { l: "Sobre", h: "#about" },
              { l: "Depoimentos", h: "#testimonials" },
              { l: "Contato", h: "#contact" },
            ].map((i) => (
              <a key={i.h} href={i.h} className="hover:text-white transition-colors">{i.l}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold text-sm">Contato</div>
          <div className="flex flex-col gap-2 mt-3 text-sm text-white/60">
            <span>{CLIENT_ADDRESS}</span>
            <span>{CLIENT_PHONE_DISPLAY}</span>
            <span>{CLIENT_HOURS}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 flex justify-between flex-wrap gap-4 max-w-5xl mx-auto">
        <span className="text-xs text-white/40">
          © 2026 {CLIENT_NAME}. Todos os direitos reservados.
        </span>
        <span className="text-xs text-white/40">
          Desenvolvido com Tecnologia moderna
        </span>
      </div>
    </footer>
  );
}