import { MessageCircle } from "lucide-react";
import { waLink } from "./constants";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Quero saber mais.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed right-6 bottom-20 md:bottom-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white animate-wa-pulse"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
      }}
    >
      <MessageCircle size={26} />
      <span className="hidden md:block absolute right-[68px] top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs font-medium px-3 py-1.5 rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Falar no WhatsApp
      </span>
    </a>
  );
}

export function MobileCTABar() {
  return (
    <a
      href={waLink("Olá! Quero agendar.")}
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-14 flex items-center justify-center text-white font-semibold text-sm border-t border-white/15"
      style={{ background: "var(--color-brand)" }}
    >
      Falar no WhatsApp
    </a>
  );
}