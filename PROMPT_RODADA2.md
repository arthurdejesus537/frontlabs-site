# Rodada 2: nova home da Front Labs (estrutura Ploy + Runway) e páginas de verdade

**Rodar sem o Pedro por perto.** NÃO pergunte nada: decida pelo mais razoável, anote em `PROGRESSO.md` e siga. Resumo final em português.

Leia antes: `CLAUDE.md`, `docs/DESIGN.md`, `docs/FRONTLABS-HOME.md`, `frontlabs/docs/REVISAR.md`, as últimas entradas de `PROGRESSO.md` e os arquivos novos em `docs/referencias/rodada2/`.
Trabalhe **só em `frontlabs/`** (o `default/` fica como está; se criar componente que serve para qualquer marca, anote no REVISAR §4 para devolver depois).

## O que o Pedro quer (palavras dele, resumidas)

> Clonar a **estrutura e o design** das seções da Ploy (e uma da Runway). **A copy muda depois**: pode usar texto provisório coerente, mas o importante é o web design pronto. Os links do menu abrem **páginas de verdade**, não âncoras da home.

**Regra da copy nesta rodada:** texto em inglês, curto, no tom da marca, sem inventar fato (sem número de cliente, sem depoimento, sem promessa de Google). Onde for dado ilustrativo (cards ao vivo), deixe claro no content (`illustrative: true`) e mostre o rótulo `/example`. Não precisa passar por `[CONFIRMAR]` cada frase: a copy toda é provisória.

---

## Nova ordem da home (`frontlabs/content/site.ts` → `order`)

| # | Seção | Clonar de | Componente |
|---|---|---|---|
| 1 | Herói com "vídeo" de fundo, título enorme centralizado e botões embaixo | Ploy, 1ª dobra | `HeroFilm` (novo) |
| 2 | Uma linha que preenche ao rolar | Ploy, "Your website launched. Then it stopped." | `ScrollFill` (novo) |
| 3 | O que um negócio precisa para ir bem | Ploy, card Monitor / Act / Surface | `Pillars` (adaptar para 4 colunas) |
| 4 | Três cards "ao vivo" | Ploy, cards Web / Grow / Ads | `LiveCards` (novo, substitui o uso do `ProofField`) |
| 5 | Resultados dos nossos produtos | Ploy, "Who's Ploy for" + "One platform three engines" (cards) | `Results` (novo) |
| 6 | O que faz cada etapa | Runway, painel de abas (a seção que já existe, **maior e melhor**) | `FeatureTabs` (evoluir) |
| 7 | Preço (resumo) | o que já existe, com link para `/pricing` | `Offers` modo pricing |
| 8 | Perguntas | o que já existe | `Faq` |
| 9 | Chamada final | o que já existe | `FinalCta` |
| 10 | Rodapé | o que já existe, com links para as páginas novas | `Footer` |

Desligar (`enabled: false`, sem apagar código): barra de oferta, faixa de tipos de negócio, frase de destaque antiga, `Steps`, `Timeline`, `Audience`. O nav continua o mesmo (pílula), só que com links para páginas.

---

## 1 · `HeroFilm` — clone do herói da Ploy

Medido na Ploy (1440): moldura 1376×866 a 32px das bordas, raio 12 (**na Front Labs: raio 24**), `<video autoplay muted loop playsinline>` com `object-fit: cover` e `poster`; título centralizado (144px, linha 0.86, máx. 1020px) e frase + 2 botões embaixo dele, tudo no centro da moldura; card de anúncio no canto inferior esquerdo; botão redondo play/pause no canto inferior direito.

Na Front Labs:
- **Mídia:** não temos vídeo ainda. O componente aceita `video: { src, poster } | null`; com `null`, mostra a imagem `foto-borrada-hero.jpg` com a câmera lenta que já existe (22s) + grão + véu escuro para contraste. Quando houver vídeo, é só preencher o content. O botão play/pause só aparece quando há vídeo.
- **Título:** Inter 550 (não o grito condensado), branco, centralizado, grande: `clamp(48px, 7.2vw, 112px)`, linha 0.98, tracking −0.045em, máx. ~14ch por linha, `text-wrap: balance`. Copy provisória: **"Your website should work as hard as you do."**
- Embaixo: uma frase (lead, branca 90%) **"We build it, launch it and handle it. You go run your business."** e os botões branco "Get my free preview" + contorno branco "See how it works" (52px).
- Altura: `min(100svh - nav, 866px)` no desktop; no celular ~ 640px, título 44–48px.
- O card de anúncio fica opcional no content (`card: null` agora).
- Respeitar `prefers-reduced-motion` (sem câmera lenta, vídeo pausado no poster).

## 2 · `ScrollFill` — a linha que preenche

Mecânica medida na Ploy (`docs/referencias/rodada2/ploy-scrollfill.md`): o título é quebrado em palavras (`<span class="word" aria-hidden>`), o `<h2>` tem `aria-label` com a frase inteira; cada palavra tem `--progress` de 0% a 100% e o texto é pintado com `background: linear-gradient(90deg, var(--ink) var(--progress), var(--fill-ghost) var(--progress)); background-clip: text; color: transparent`. O progresso total vai de 0 quando o topo do título passa 80% da janela até 1 quando o fim do título passa o meio da janela, e é distribuído palavra por palavra em sequência.

Na Front Labs:
- Uma linha só (pode quebrar em 2 no desktop), Inter 550, tamanho de Display (72) a `clamp(40px, 6vw, 96px)`, centralizada. Cor fantasma `#D9D7D3` (o fundo é `#F4F3F1`), cor cheia `--ink`.
- Copy provisória: **"Most local websites launch. Then they stop working."**
- Uma frase pequena embaixo, cor `--mute`: "Front Labs keeps yours working."
- JS mínimo: um `requestAnimationFrame` no scroll (passivo) que escreve `--progress` em cada palavra. Com `prefers-reduced-motion`, tudo já cheio.
- Componente genérico (texto vem do content). Anotar para devolver ao default.

## 3 · O que um negócio precisa para ir bem (`Pillars`, 4 colunas)

Fonte: o guia do cliente da Front Labs ("Found. Loved. Booked."). Card branco raio 24 com 4 colunas separadas por linha (no celular, uma embaixo da outra), cada uma com círculo de ícone 44, número mono (`/01`), título de card e uma frase:

| # | Título | Frase (provisória) |
|---|---|---|
| 01 | Found | When someone nearby searches for what you do, your site is built to show up. |
| 02 | Loved | The first look shows your business as it really is, not a template. |
| 03 | Working | Every page fast, every button where it should go, on any phone. |
| 04 | Booked | A clear path from "just looking" to a call, a visit or a booking. |

Título da seção acima do card (Título 48, à esquerda): **"What a local business needs online."** Virada: "Four things. We handle all of them."

## 4 · `LiveCards` — três cards em tempo real

Clone dos cards Web / Grow / Ads da Ploy (`docs/referencias/rodada2/ploy-livecards.png`). Medido: 3 cards brancos raio 12 (**Front Labs: raio 24**), 373px, gap 16, sobre um campo de cor (Ploy: rosa). Cada card tem:
1. topo: marca + pill escura com o nome do produto;
2. número grande (72/700 na Ploy → **Inter 550, 72px**) com **odômetro** (cada dígito é uma coluna 0–9 que rola até o valor) e um **sparkline** à direita (SVG, área clara + linha);
3. rótulo do número (`pages built`);
4. uma "linha de log" num retângulo cinza claro que **troca a cada ~5s** com fade (lista de mensagens no content);
5. três mini-stats (rótulo pequeno + número 20px);
6. rodapé com ponto pulsando + status ("Building case study").

Na Front Labs:
- Fundo: o **gradiente Horizonte** com grão (no lugar do rosa), raio 24, título branco à esquerda e frase branca à direita, como na Ploy.
- Os três cards (dados **ilustrativos**, a definir depois; rótulo `/example` no topo da seção):

| Pill | Número | Rótulo | Mini-stats | Status | Log (rodízio) |
|---|---|---|---|---|---|
| Site | 3 | previews built this week | Pages · Speed score · Fixes | Building a preview | "New preview → plumbing company in Houston", "Hours updated → studio site", "Photos color-graded → venue site" |
| Booking | 12 | visits booked | Replies · Reminders · Reschedules | Answering a new request | "New request → auto-reply sent in 1 min", "Tour booked → added to calendar", "Reminder sent → tomorrow 10am" |
| Reviews | 8 | review requests sent | Sent · Opened · New reviews | Waiting for replies | "Job finished → review request sent", "New 5-star review → thank-you sent", "Follow-up → 3 days later" |

- Os valores vêm de `content/site.ts` com `illustrative: true`. Estrutura pronta para um dia ler dados reais: o componente recebe `cards: LiveCard[]` e não sabe de onde vêm.
- Odômetro e sparkline só animam quando o card entra na tela; `prefers-reduced-motion` mostra o valor final parado.
- No celular, um card embaixo do outro, largura total.

## 5 · `Results` — resultados dos nossos produtos

Clone de estrutura: título calmo à esquerda + grade de cards de benefício (mistura de "Who's Ploy for" e do card "Build. Optimize. Convert." da Ploy). Desktop: título e frase na coluna da esquerda (sticky), grade 2×3 de cards brancos raio 24 à direita. Cada card: círculo de ícone 44, título de card, frase curta, e embaixo o produto que entrega (pill contornada mono: `Launch`, `Signature`, `Front Cinematic`).

Cards provisórios (benefício, nunca número):
1. More people find you — *code built for Google* — `Launch`
2. More calls and visits — *every page leads to one action* — `Launch`
3. More booked meetings — *instant booking with automatic replies* — `Signature`
4. More reviews — *automatic Google review requests* — `Signature`
5. A site that looks like you — *6 cinematic films + color-graded photos* — `Front Cinematic`
6. Nothing to manage — *6 months of edits and updates, no monthly fee* — `Signature`

Título: **"What changes when it's handled."** Virada: "Less chasing. More booked."

## 6 · `FeatureTabs` evoluído — o que faz cada etapa (Runway)

É a seção atual "Everything a local business site should do" (print do Pedro). Manter o painel branco raio 24 com a lista à esquerda e a mídia à direita, e melhorar:
- **Itens maiores:** cada etapa com número mono (`01`) + título em Título de card **28–32px** (hoje está pequeno) + a descrição só na etapa ativa (abre com altura animada). Inativas em `--mute`, ativa em `--ink` com uma barra de progresso fina embaixo enquanto o tempo da troca automática corre (como a Runway).
- **Cada etapa mostra uma imagem diferente** à direita (troca com fade de 250ms). Hoje todas usam o mesmo fundo borrado: cada etapa ganha seu próprio visual (fundo + card de preview em estado diferente). Enquanto não houver fotos novas, variar o fundo entre `foto-borrada-hero.jpg`, Horizonte, `foto-cadeiras.jpg` borrada e uma versão borrada de `foto-noiva-notebook.jpg` (gerar com sharp: reduzir para ~120px, blur, ampliar, blur, como no DESIGN §4.2.2), e mudar o conteúdo do card em cada uma.
- Mídia maior: a coluna da direita ocupa ~62% e a moldura tem proporção 4:3 no desktop.
- Etapas (provisórias), na ordem do processo:
  1. **Code** — clean code built for Google, fast on every phone. (card: `/code` Clean · `/speed` Fast · `/pages` Easy to read)
  2. **Design** — your business as it really is, from your photos and your words. (card: o mini site do negócio)
  3. **Booking** — every page leads to a call, a visit or a booking. (card: botão "Book a visit" + horários)
  4. **Launch** — live on your domain, in your name. (card: pílula do domínio + "Live.")
  5. **Care** — edits and updates handled for 6 months with Signature. (card: lista de pedidos "done")
- Título da seção: **"What we do at every step."**
- Teclado (setas, Home, End), pausa, `aria` de abas e troca automática que para ao interagir: manter o que já existe.
- No celular: as etapas viram um acordeão; a imagem aparece dentro da etapa aberta.

## 7 · Páginas de verdade (estrutura da Ploy)

Os links do nav e do rodapé passam a abrir páginas (App Router), não âncoras:

| Rota | Conteúdo | Estrutura clonada |
|---|---|---|
| `/how-it-works` | as etapas (versão longa da seção 6, uma seção por etapa, alternando mídia à esquerda/direita) + passos do processo (preview → call → plano → no ar) + CTA final | página de feature da Ploy |
| `/what-you-get` | tudo que vem no Launch e no Signature, Front Cinematic, Booking System, Care; cards + lista com setas (DESIGN §6.4) | página de feature da Ploy |
| `/pricing` | **clone da página de preço da Ploy** (`docs/referencias/rodada2/ploy-pricing.png`): etiqueta "Pricing" + título enorme centralizado + frase + 2 botões; cards de plano lado a lado (Launch, Signature e o add-on Front Cinematic), o destacado com pill "Most chosen" **só se for verdade → use "Everything handled"**; bloco cinza "How payment works" (título à esquerda, linhas à direita); tabela "Every plan, side by side" com ✓/–; FAQ "Pricing, answered." em acordeão; CTA final no Horizonte | página `/pricing` da Ploy |
| `/questions` | FAQ completo (componente `Faq`) + card do Arch | — |

- Componentes compartilhados entre home e páginas (não duplicar): `PageHero` (etiqueta pill + título grande + frase + botões), `FeatureRow`, `CompareTable`, `PlanCard`, `Faq`, `FinalCta`.
- Cada página tem `metadata` própria (title, description) e continua `noindex`.
- Preços (da apresentação da oferta, 10/10/2026): **Launch $600** (2 × $300: metade ao aprovar o preview, metade no lançamento); **Signature $999** (3 × $333: na aprovação, no lançamento e 30 dias depois); **Front Cinematic +$197** para o Launch. Sem mensalidade; depois dos 6 meses o site continua no ar e é do cliente. Atualizar o REVISAR (esses dois `[CONFIRMAR]` de preço saem).
- O nav marca a página atual (`aria-current="page"`).
- 404 no estilo da marca (`app/not-found.tsx`).

---

## Fases

**Fase A — Medir e preparar.** `tools/sections.mjs` em https://ploy.ai/ e https://ploy.ai/pricing (1440 e 390) → `qa/refs/ploy-r2/`. Medir com Playwright o que faltar (tempo do rodízio do log, tamanhos dos cards, espaçamento da página de preço). Gerar os fundos borrados novos em `frontlabs/public/img/`. Commit `frontlabs: r2 fase A`.

**Fase B — Home, uma seção por vez, na ordem acima.** Para cada uma: construir, screenshot 1440 e 390, comparar com a seção de origem (estrutura, proporção, ritmo; o visual segue o DESIGN.md: Inter 550, preto e branco, raio 24, pill, Horizonte como única cor), corrigir, uma linha no `PROGRESSO.md`. Commit a cada 2 seções.

**Fase C — Páginas.** `/pricing` primeiro (é o clone mais fiel), depois `/how-it-works`, `/what-you-get`, `/questions`, 404. Nav e rodapé apontando para elas. Commit por página.

**Fase D — QA.** `tools/qa-check.mjs`, `tools/gap-audit.mjs` e `tools/contrast-media.mjs` em todas as rotas, 1440/768/390. Teste de interação: abas (clique, setas, troca automática, pausa), acordeões, formulário, menu mobile, navegação entre páginas. Subagente revisor sem contexto, com a mesma tarefa da Fase 7 da noite, agora em todas as rotas. Corrigir. `npm run build` + `npm run lint`.

**Fase E — Fechar e publicar.**
1. Screenshots finais em `qa/frontlabs-r2/` (home e cada página, 1440 e 390) e `qa/RESUMO-R2.png` (home 1440 + 390 lado a lado).
2. Atualizar `frontlabs/docs/REVISAR.md` (seção nova "Rodada 2": copy provisória por seção, dados ilustrativos dos cards ao vivo, o que vale devolver ao default).
3. Commit `frontlabs: rodada 2` e tag `v2.0-frontlabs`.
4. **Deploy:** o projeto já está ligado na Vercel (`frontlabs/.vercel/project.json`, projeto `frontlabs`). Rode `npx vercel deploy --prod` dentro de `frontlabs/` (se pedir login ou falhar, não insista: anote no PROGRESSO e deixe só o build local). Escreva a URL no resumo.
5. Resumo final em até 10 linhas: o que mudou, URL da Vercel, e o que ficou para o Pedro decidir (copy, dados dos cards, vídeo do herói).
