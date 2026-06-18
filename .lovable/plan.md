
# Landing Page — Clínica Turquesa (Protótipo Demo)

Single-page de prospecção em pt-BR para a Clínica de Estética e Saúde da Dra. Claudia Nogueira (Vianelo/Bonfiglioli, Jundiaí–SP). Conversão via WhatsApp.

## Stack e dependências
- TanStack Start (já configurado) + React + Tailwind + TypeScript
- Adicionar: `motion` (framer-motion v12), `lucide-react` já existe
- Google Fonts via `<link>` no `__root.tsx` head (Playfair Display + Inter/Outfit)
- Sem TanStack Query, sem dark mode, sem libs extras

> Obs.: o brief pediu "React + Vite". O projeto já está em TanStack Start (também Vite + React). Vou manter a stack do projeto e organizar a landing como uma rota única (`/`), o que é equivalente em prática.

## Design tokens (src/styles.css)
Adicionar variáveis no `:root`:
- `--color-primary: #0073A9` (+ RGB), `--color-secondary: #c8a77c`, `--color-accent: #e8f4fb`
- `--color-bg/fg/muted/muted-fg/border/card`
- `--shadow-card`, `--shadow-card-hover`
- `--radius-card`, `--radius-btn`
- `--font-display` (Playfair Display), `--font-body` (Inter)
- Keyframe `wa-pulse`
- `html { scroll-behavior: smooth }`

Estética: "professional & trustworthy" — limpo, confiável, humano. Azul primário com acentos em areia/dourado para remeter à estética premium das referências.

## Estrutura de arquivos

```
src/routes/index.tsx              → monta todas as seções
src/components/landing/
  DemoBanner.tsx                  → barra topo (prospecção)
  Navbar.tsx                      → nav fixa
  Hero.tsx                        → headline + CTA + trust strip
  TrustBar.tsx                    → métricas count-up
  Services.tsx                    → 4 cards (Microagulhamento destaque)
  About.tsx                       → Dra. Claudia + diferenciais
  Testimonials.tsx                → 3 depoimentos com fotos enviadas
  CTA.tsx                         → seção pré-contato
  Contact.tsx                     → form + mapa Google
  Footer.tsx                      → 3 colunas + bottom bar
  WhatsAppFloat.tsx               → botão flutuante
  MobileCTABar.tsx                → barra sticky mobile
  CountUp.tsx                     → utilitário animação
src/assets/                       → 3 fotos de depoimentos (via lovable-assets)
```

## Conteúdo (auto, pt-BR)

**Constantes do freelancer** (topo do `index.tsx`):
- `FREELANCER_NAME = "Lovable Studio"` (placeholder — pedir ao usuário se quiser trocar)
- `FREELANCER_WHATSAPP = "5511974746247"` (usar o mesmo do brief até o usuário fornecer um próprio)

**Cliente:**
- WhatsApp: `5511974746247`
- Endereço: Rua Dr Odil Campos de Saes 437, Vianelo/Bonfiglioli, Jundiaí–SP
- Google rating: 5.0 (review count omitido — auto/oculto)
- Tempo de mercado: "auto" → "Anos de experiência" sem número específico

**Serviços (descrições auto, benefício-focadas):**
1. Microagulhamento (carro-chefe, badge "Mais procurado") — ícone `Sparkles`
2. Jato de Plasma — ícone `Zap`
3. Tratamentos Corporais — ícone `Heart`
4. Tratamentos Faciais — ícone `Smile`

**Hero headline (pt-BR):** "Sua beleza natural realçada com ciência e cuidado humano."

**Trust bar:** rating 5.0 ⭐, +500 atendimentos, +X anos de experiência, atendimento humanizado.

**Depoimentos:** Vânia Moleta, Thais Andreatti, Beatriz Nogueira (fotos enviadas, copy auto positiva sobre a Dra. Claudia).

## Seções (detalhe)

1. **Demo Banner + Navbar** — wrapper `fixed top-0` único. Banner slate-900 "🚀 Protótipo criado para Turquesa — gostou? Vamos deixar assim!" + CTA. Navbar abaixo: nome marca, links (Serviços/Sobre/Depoimentos/Contato), CTA "Falar no WhatsApp". Mobile: sheet menu.
2. **Hero** — split layout, headline display, subtítulo, dois CTAs (WhatsApp + scroll Serviços), trust strip com avatares + rating. Imagem/gradient lateral com paleta da marca.
3. **TrustBar** — 4 métricas, count-up ao entrar em view.
4. **Services** — grid 4 cards, primeiro com badge "Mais procurado". Hover eleva.
5. **About** — foto/iniciais da Dra. Claudia + parágrafo sobre atendimento personalizado + 3 bullets de diferenciais.
6. **Testimonials** — 3 cards com foto, nome, depoimento, 5 estrelas.
7. **CTA** — banner com gradiente primário, headline "Pronta para começar?", botão WhatsApp.
8. **Contact** — esquerda: ícones (endereço, telefone, horário auto "Seg–Sex 9h–19h | Sáb 9h–14h") + form (Nome/Telefone/Mensagem → abre WhatsApp pré-preenchido). Direita: iframe Google Maps do endereço completo.
9. **Footer** — 3 colunas (marca + tagline + redes, links rápidos, contato) + bottom bar com crédito do freelancer linkado.
10. **WhatsApp Float** — círculo verde 56px, pulse, tooltip hover.
11. **Mobile Sticky CTA** — barra inferior só mobile.

## Animações (framer-motion)
- `useReducedMotion()` desativa tudo se preferido
- Variante padrão `{ opacity:0, y:28 } → { opacity:1, y:0 }` 0.5s easeOut customizado
- Stagger 0.08s em listas
- Hero: stagger ordenado (badge → h1 → p → buttons → trust)
- CTA: scale 0.97 → 1
- TrustBar: count-up 1.8s via `animate()` quando in-view

## SEO (index.tsx head)
- `<title>` "Clínica Turquesa — Estética e Saúde em Jundiaí | Dra. Claudia Nogueira"
- meta description em pt-BR, benefício + localização
- `<meta name="robots" content="noindex, nofollow">` (modo demo)
- og:title, og:description, og:type=website
- Preconnect Google Fonts no `__root.tsx`

## Acessibilidade
- HTML semântico (`header/main/section/footer`), `aria-label` em ícones, labels em inputs, focus-visible, contraste WCAG AA.
- `pb-16 md:pb-0` no wrapper raiz para não esconder footer atrás da barra mobile.

## Notas
- Sem dark mode, sem modais, sem popups.
- Sem placeholders cinza — usar gradientes da paleta.
- Tudo em pt-BR.
- Imagens de depoimento via `lovable-assets create` a partir de `/mnt/user-uploads/`.

Pronto para implementar ao aprovar.
