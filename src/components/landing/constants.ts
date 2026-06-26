export const CLIENT_WHATSAPP = "5511925750589";
export const CLIENT_NAME = "Glacier";
export const CLIENT_ADDRESS = "Rua Dr Odil Campos de Saes 437, Vianelo/Bonfiglioli, Jundiaí – SP";
export const CLIENT_PHONE_DISPLAY = "(11) 92575-0589";
export const CLIENT_HOURS = "Seg–Sex 9h às 19h · Sáb 9h às 14h";

export const waLink = (msg?: string) =>
  `https://wa.me/${CLIENT_WHATSAPP}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;