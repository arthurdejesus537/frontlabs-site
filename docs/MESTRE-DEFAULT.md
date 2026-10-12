# MESTRE DEFAULT — o site-base feito de duas referências

**Referências:** A = runway.com · B = ploy.ai (blueprints em `docs/referencias/`).
**O que é:** o sistema visual e a estrutura de uma home de empresa de serviço, juntando o melhor das duas. Sem marca: cores, fontes e textos são tokens e placeholders, trocados por cada marca (a primeira é a Front Labs).

---

## 1. Regra da mistura

Cada decisão diz de onde veio (A, B ou A+B) e por quê. Quando as duas brigam, ganha:

1. **A estrutura que vende melhor** → B (narrativa problema → prova → CTA).
2. **O acabamento mais calmo** → A (títulos em 400–550, botões pequenos no nav, mídia em moldura).
3. **O que já é comum às duas** entra direto: hero em moldura de 12px, faixa de logos, footer de colunas, cards brancos.

O "grito" da B (condensada caixa-alta) fica disponível como **um estilo** (`.t-shout`), usado no máximo em 2 lugares. Uma marca calma pode desligá-lo trocando o token (`--f-shout`, `--shout-case`).

## 2. Tokens (propostos; a Fase 1 confirma medindo e grava em `default/styles/tokens.css`)

### Cores
| Token | Valor | Origem |
|---|---|---|
| `--c-bg` | `#F4F4F4` | B (fundo cinza) |
| `--c-surface` | `#FFFFFF` | A+B (cards brancos) |
| `--c-ink` | `#0C0C0C` | A (título) |
| `--c-text` | `#404040` | A (corpo) |
| `--c-mute` | `#6E6E6E` | A+B (meta; escurecido de `#7C7C7C` para passar AA em 14px) |
| `--c-line` | `#E3E3E3` | B |
| `--c-btn` / `--c-btn-ink` | `#212121` / `#FFFFFF` | B |
| `--c-btn-2` | `#EAEAEA` | A (secundário cinza, neutralizado) |
| `--c-dark` | `#141414` | A+B (footer, seção escura) |
| `--c-field-1/2/3` | `#FFB8FC` `#FFFA64` `#C3DBFF` | B (campos de capítulo; trocáveis) |

### Tipografia
| Token | Valor | Origem |
|---|---|---|
| `--f-sans` | Geist | B usa; substitui a ABC Normal da A |
| `--f-shout` | Anton, caixa-alta | substitui a FK Screamer da B |
| `--f-mono` | Geist Mono | rótulos e metadados |
| `--w-title` | 500 | A usa 400; 500 dá mais presença com a Geist |

| Estilo | Desktop | Mobile | Origem |
|---|---|---|---|
| `t-shout` | 144 / 0.88 | 56 | B |
| `t-display` (H2) | 56 / 1.08, −0.025em | 34 | A |
| `t-hero` (H1 calmo) | 56 / 1.04, −0.03em | 36 | A, maior (40px da A some no desktop largo) |
| `t-title` (card) | 24 / 1.2, −0.02em | 21 | A |
| `t-lead` | 20 / 1.5 | 18 | A |
| `t-body` | 16 / 1.5, −0.01em | 16 | B |
| `t-small` | 14 / 1.5 | 14 | A |
| `t-label` | Geist Mono 12, caixa-alta, +0.04em | 12 | B (rótulo "ANNOUNCEMENT") |

### Espaço, grid e raios
- Margem lateral `--gutter`: 24px (A usa 20, B usa 24–32). Mobile: 16px.
- Container de texto `--container`: 1152px (B). Molduras ocupam a largura toda menos o gutter (A e B).
- Seções: `--section-y` = 144px desktop, 88px mobile.
- Raios: `--r-frame` 12 (hero, A+B) · `--r-field` 20 (campo colorido e footer, B) · `--r-card` 12 (B) · `--r-media` 8 (A) · `--r-pill` 999 (B).
- Botões pill (B), três alturas: 48 / 40 / 32. O nav usa 40 e 32 (pequenos, como na A).

## 3. Estrutura da home (ordem)

Cada seção é ligada/desligada em `content/site.ts` (`enabled`). Todo texto vem de lá.

| # | Seção | Componente | Origem | O que faz na venda |
|---|---|---|---|---|
| 0 | Faixa de anúncio | `AnnouncementBar` | A | novidade ou oferta com prazo |
| 1 | Nav | `Header` | A (layout) + B (pills) | marca, 4–6 links, 2 botões |
| 2 | Hero | `Hero` | A (copy embaixo à esquerda) + B (2 CTAs, card de anúncio) | promessa + ação |
| 3 | Logos | `LogoStrip` | A+B | prova rápida |
| 4 | Problema | `Statement` | B | nomeia a dor em uma frase |
| 5 | Pilares | `Pillars` | B | 3 coisas que o produto faz |
| 6 | Ofertas | `Offers` | A | os produtos, lado a lado |
| 7 | Abas | `FeatureTabs` | A | como funciona, por partes |
| 8 | Prova | `ProofField` | B | números com status ao vivo |
| 9 | Atividade | `Timeline` | B | o produto trabalhando enquanto o cliente dorme |
| 10 | Biblioteca | `Library` | B | serviços/estratégias empacotados em cards |
| 11 | Destaque | `Spotlight` | A (Research) | visão ou diferencial, com 3 links |
| 12 | Para quem | `Audience` | B | segmentos de cliente |
| 13 | Notícias | `News` | A | novidades e casos |
| 14 | CTA final | `FinalCta` | B | um campo, um botão, microcopy |
| 15 | Footer | `Footer` | B (card escuro) + A (colunas) | navegação e contato |

## 4. Componentes de UI

`Button` (primary, secondary, ghost, light, outline-light × lg/md/sm), `Label` (mono), `Media` (imagem ou placeholder no formato certo), `Frame` (moldura de 12px), `Field` (campo colorido de 20px), `Card`, `Marquee`, `Arrow`.

## 5. Movimento

Só onde as referências usam e sempre com `prefers-reduced-motion`:
- marquee dos logos (A+B);
- troca automática das abas a cada 6s (A);
- entrada dos itens da timeline ao rolar (B);
- números contando ao aparecer (B);
- hover dos botões subindo 1px.

## 6. Placeholders

- Mídia: `MediaPlaceholder` cinza no formato certo, com rótulo mono (`[foto 16:9 · mín. 1600px]`).
- Texto: placeholders entre colchetes, em português, dizendo o que escrever.
- Nada de foto de banco ou texto inventado como definitivo.

## 7. Como uma marca usa este default

1. Copiar a pasta.
2. Trocar `styles/tokens.css` pelos tokens da marca (cores, fontes, raios).
3. Trocar `content/site.ts` (textos, links, quais seções ficam ligadas).
4. Colocar as imagens em `public/`.
5. Não mexer nos componentes, a não ser para melhorar o sistema (e aí a melhoria volta para o default).
