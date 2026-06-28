# Clínica Glacier — Landing Page

Landing page de conversão para a **Clínica Glacier**, especializada em estética avançada e saúde em Jundiaí–SP. Desenvolvida para capturar e converter novos pacientes via WhatsApp com design premium, animações suaves e experiência mobile-first.

## Sobre o Projeto

Esta é uma single-page application (SPA) focada em **prospecção de pacientes** para a Dra. Claudia Nogueira. A estrutura guia o visitante por uma jornada de confiança — desde a primeira impressão (Hero) até o contato direto via WhatsApp, passando por serviços, depoimentos e informações da clínica.

## Stack Tecnológica

- **Framework**: [React](https://react.dev/) 19 + [TanStack Start](https://tanstack.com/start) (Vite-based)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) v4 + `tw-animate-css`
- **Animações**: [`motion`](https://motion.dev) (Framer Motion v12)
- **Ícones**: [`lucide-react`](https://lucide.dev)
- **Fontes**: Google Fonts (Playfair Display + Inter)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (disponível para expansão)

## Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+ (LTS recomendado)
- [npm](https://www.npmjs.com/) ou [Bun](https://bun.sh/) (ambos são suportados pelo lockfile)

### Instalação e Desenvolvimento

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>.git
cd landing-page-glacier

# 2. Instale as dependências (escolha uma)
npm install
# ou
bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
bun run dev
# --> Acesse http://localhost:5173 (ou a porta indicada no terminal)
```

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` / `bun run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` / `bun run build` | Build de produção otimizado |
| `npm run build:dev` / `bun run build:dev` | Build em modo development |
| `npm run preview` / `bun run preview` | Preview do build de produção local |
| `npm run lint` / `bun run lint` | Análise de código com ESLint |
| `npm run format` / `bun run format` | Formatação com Prettier |

## Estrutura do Projeto

```text
src/
├── main.tsx              # Ponto de entrada (StrictMode + RouterProvider)
├── router.tsx            # TanStack Router (configuração minimal)
├── routes/
│   └── index.tsx         # Landing page — monta todas as seções
├── components/
│   ├── landing/          # Seções da landing page
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx              # Headline + CTA + prova social
│   │   ├── TrustBar.tsx          # Métricas com count-up
│   │   ├── Services.tsx          # 4 tratamentos oferecidos
│   │   ├── About.tsx             # Perfil da Dra. Claudia
│   │   ├── Testimonials.tsx      # Depoimentos de pacientes
│   │   ├── CTASection.tsx        # Call-to-action final
│   │   ├── Contact.tsx           # Formulário + mapa Google
│   │   ├── Footer.tsx
│   │   ├── FloatingElements.tsx  # WhatsApp float + CTA mobile
│   │   ├── CountUp.tsx           # Utilitário de animação numérica
│   │   ├── motion-helpers.ts     # Variantes reutilizáveis (Framer Motion)
│   │   └── constants.ts          # Dados do cliente (WhatsApp, endereço, etc.)
│   └── ui/               # shadcn/ui (biblioteca de 40+ componentes)
├── lib/
│   └── utils.ts          # Helper cn() (clsx + tailwind-merge)
├── hooks/
│   └── use-mobile.tsx    # Hook responsivo para mobile/desktop
├── assets/               # Imagens dos depoimentos, hero e about
└── styles.css            # Design tokens, fontes e keyframes
```

## Configuração do Cliente

As informações da clínica são gerenciadas centralmente em `src/components/landing/constants.ts`:

| Constante | Valor | Descrição |
|-----------|-------|-----------|
| `CLIENT_WHATSAPP` | `5511925750589` | Número do WhatsApp para redirecionamento |
| `CLIENT_NAME` | `"Glacier"` | Nome exibido na página |
| `CLIENT_ADDRESS` | `"Rua Dr Odil Campos de Saes 437, Vianelo/Bonfiglioli, Jundiaí – SP"` | Endereço da clínica |
| `CLIENT_PHONE_DISPLAY` | `"(11) 92575-0589"` | Telefone formatado para exibição |
| `CLIENT_HOURS` | `"Seg–Sex 9h às 19h · Sáb 9h às 14h"` | Horário de atendimento |

> **Para personalizar a landing page para outro cliente**, edite esse arquivo antes do build.

## Design System

### Tipografia

| Função | Fonte | Uso |
|--------|-------|-----|
| **Display** | Playfair Display | Títulos, headings, marca |
| **Body** | Inter | Corpo de texto, descrições, CTAs |

### Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| **Primária** | `#0073A9` | CTAs, links, headings de destaque, botões |
| **Secundária (Sand)** | `#c8a77c` | Badges, acentos premium |
| **Destaque (Accent)** | `#e8f4fb` | Backgrounds de apoio, ícones |

### Animações (motion/Framer Motion)

As seções principais usam um efeito de entrada padrão para manter consistência visual:

- **Variante padrão**: `opacity: 0, y: 28` → `opacity: 1, y: 0`
- **Duração**: 0.5s–0.6s
- **Easing**: `[0.22, 1, 0.36, 1]` (ease-out cúbico suave)
- **Stagger**: 0.08s entre filhos de uma lista
- **CountUp**: contadores animam de 0 até o valor final em 1.8s ao entrar na viewport

A acessibilidade é respeitada: `useReducedMotion()` desativa todas as animações automaticamente se o usuário preferir redução de movimento.

## Detalhes da Experiência do Usuário

### Estrutura da Jornada

| Seção | Propósito |
|-------|-----------|
| **Navbar** | Navegação fixa com links âncora para todas as seções |
| **Hero** | Capturar atenção com prova social (avatares + rating 5.0) |
| **TrustBar** | Métricas de credibilidade (pacientes atendidas, anos de experiência) |
| **Services** | Apresentar os 4 tratamentos principais (Microagulhamento em destaque) |
| **About** | Humanizar a marca com perfil da profissional e diferenciais |
| **Testimonials** | Depoimentos de pacientes reais para construir confiança |
| **CTASection** | Último impulso para conversão antes do formulário |
| **Contact** | Formulário de contato + localização no mapa |
| **FloatingElements** | WhatsApp flutuante (todos os dispositivos) + CTA sticky mobile |

### Conversão via WhatsApp

A estratégia de conversão é **centrada no WhatsApp** com múltiplos pontos de contato:

1. **Hero** → CTA primário com mensagem pré-preenchida: *"Olá Dra. Claudia! Gostaria de agendar uma avaliação."*
2. **Services** → Cada card leva ao WhatsApp mencionando o tratamento: *"Olá! Tenho interesse em Microagulhamento."*
3. **CTASection** → CTA de conversão final
4. **Contact** → Formulário que abre WhatsApp com nome, telefone e mensagem preenchidos
5. **WhatsApp Float** → Disponível em todas as telas (botão flutuante)
6. **Mobile CTA Bar** → Barra sticky na parte inferior para mobile

## Compilação para Produção

```bash
# Gera os arquivos estáticos em dist/
npm run build
# ou
bun run build

# Teste o build localmente
npm run preview
```

O diretório `dist/` será gerado com o SPA pronto para deploy em qualquer plataforma de hosting de arquivos estáticos (Cloudflare Pages, Vercel, Netlify, etc.).

## Dependências Principais

- [`react`](https://react.dev/) & `react-dom` — UI library
- [`@tanstack/react-router`](https://tanstack.com/router) — Roteamento para SPA
- [`motion`](https://motion.dev) — Animações declarativas
- [`tailwindcss`](https://tailwindcss.com/) — Estilização utilitária
- [`lucide-react`](https://lucide.dev) — Ícones SVG
- [`react-hook-form`](https://react-hook-form.com/) — Gerenciamento de formulários
- [`zod`](https://zod.dev/) — Validação de schemas

## Notas

- Sem dark mode (projeto em light mode único)
- Sem backend — toda comunicação é via WhatsApp direto
- A página possui `noindex, nofollow` no meta robots (modo demo/protótipo)
- Conectada à plataforma [Lovable.dev](https://lovable.dev) para edições visuais

## Licença

[MIT](LICENSE) — Livre para uso, modificação e distribuição. Personalize o `constants.ts` para adaptar a qualquer cliente ou projeto.
