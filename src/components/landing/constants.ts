export const FREELANCER_NAME = "Lovable Studio";
export const FREELANCER_WHATSAPP = "5511974746247";
export const CLIENT_WHATSAPP = "5511974746247";
export const CLIENT_NAME = "Turquesa";
export const CLIENT_ADDRESS = "Rua Dr Odil Campos de Saes 437, Vianelo/Bonfiglioli, Jundiaí – SP";
export const CLIENT_PHONE_DISPLAY = "(11) 97474-6247";
export const CLIENT_HOURS = "Seg–Sex 9h às 19h · Sáb 9h às 14h";

export const waLink = (msg?: string) =>
  `https://wa.me/${CLIENT_WHATSAPP}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const freelancerWaLink = (msg = "Vi o protótipo do site e quero saber mais!") =>
  `https://wa.me/${FREELANCER_WHATSAPP}?text=${encodeURIComponent(msg)}`;