# SITE MESTRE · Referência A — runway.com

**Medido em:** 12/10/2026, Playwright (Chromium), 1440×900 e 390×844.
**Arquivos de apoio nesta pasta:** `runway-d-full.png`, `runway-m-full.png`, `runway-1440.json`, `runway-390.json` (estilos computados).

> Legenda: ✅ medido no site · 🔶 estimado olhando o screenshot

---

## 1. DNA

1. **Calma de laboratório.** Branco puro, texto quase preto, nenhuma cor de marca na interface. A cor vem só da mídia (vídeo no hero, foto borrada na seção Research).
2. **Tipografia de um peso só.** Grotesk neutra em 400 nos títulos (ABC Normal), 500/600 só em botões e rótulos. Títulos grandes mas nunca pesados.
3. **Mídia em moldura.** O hero não encosta na borda: fica numa moldura de 12px de raio com 20px de margem lateral.
4. **Hierarquia por blocos de produto.** Três colunas iguais (imagem, frase, texto, botões) explicam o que a empresa vende.
5. **Botões pequenos.** Botão de 32px de altura e 6px de raio em quase todo lugar; só o CTA do hero é maior (40px).

## 2. Cores ✅

| Papel | Valor | Onde |
|---|---|---|
| Fundo | `#FFFFFF` | página |
| Título | `#0C0C0C` | H2, frases de produto |
| Texto | `#404040` | corpo, H3 |
| Meta | `#7C7C7C` | rodapé de card ("Used by 60m+…") |
| Botão primário | `#262626` texto `#FFF` | "Try now", "Try Runway" |
| Botão secundário | `#EEF1F5` texto `#1A1A1A` | "Learn more", "Login" |
| Botão sobre mídia | `#F7F7F7` texto `#0C0C0C` | "Try Runway for free" |
| Rodapé | `#0C0C0C` | footer em largura total |
| Faixa de anúncio | gradiente azul-violeta 🔶 | topo |

## 3. Tipografia ✅

Família: **ABC Normal** (Dinamo, paga) em tudo; `timesNow` declarada mas não carrega. Substituta gratuita: **Geist** ou **Inter Tight**.

| Uso | Tamanho / altura | Peso | Tracking |
|---|---|---|---|
| H1 do hero | 40 / 46 | 400 | −0.5px |
| H2 de seção | 56 / 61.6 | 400 | −0.84px (−0.015em) |
| H3 (nome do produto) | 24 / 27.6 | 500 | −0.18px |
| Frase de produto | 24 / 30 | 400 | −0.18px |
| Lead do hero | 20 / 31 | 400 | −0.1px |
| Corpo de card | 14 / 21.7 | 400 | normal |
| Meta | 12 / 16.8 | 400 | normal |
| Link do menu | 16 | 500 | normal |
| Botão | 14 | 600 | normal |
| Item de lista em fundo escuro (H4) | 20 / 20 | 400 | normal |

Mobile (390): H2 cai para ~32px, centralizado; H1 do hero ~26px.

## 4. Espaço e grid ✅

- Margem lateral: **20px** (desktop e mobile).
- Largura útil: 1400px a 1440 (sem container fixo; a página usa a largura toda menos 20+20).
- Grid de produto: 3 colunas de 456px, gap 16px.
- Distância entre seções: ~120–160px 🔶.
- Altura do nav: 68px; faixa de anúncio: 48px.

## 5. Raios ✅

| Elemento | Raio |
|---|---|
| Moldura do hero | 12px |
| Painel de abas | 16px (borda 1px `#E5E7EB`) |
| Mídia de card e notícia | 8px |
| Mídia dentro do painel | 12px |
| Botão | 6px (CTA do hero: 8px) |

## 6. Estrutura da home (ordem exata) ✅

| # | Seção | Como é |
|---|---|---|
| 0 | Faixa de anúncio | 48px, texto + link sublinhado + botão contornado pequeno |
| 1 | Nav | logo à esquerda, links com chevron no centro, 3 botões pequenos à direita (2 cinza, 1 preto) |
| 2 | Hero | moldura 1400×600, vídeo de fundo, H1 + lead + 1 CTA no canto inferior esquerdo |
| 3 | Logos | frase cinza centralizada + linha de logos em marquee |
| 4 | Três plataformas | H2 centralizado em 2 linhas; 3 colunas: nome, imagem 16:9, frase, texto, 2–3 botões, meta |
| 5 | Abas | 3 rótulos com linha entre eles no topo; painel branco com lista de abas à esquerda (ativa escura, inativas cinza claro) e mídia à direita |
| 6 | Research | moldura com foto borrada em movimento; rótulo + parágrafo grande à esquerda, botão contornado; à direita lista de 3 itens com linha em cima, título, texto e seta ↗ |
| 7 | Notícias | H2 à esquerda; grade 2×2: imagem 342×180 + título 24 + texto 14 + "Learn more ›" |
| 8 | Footer | preto em largura total; 8 colunas de links em 2 linhas de 4; logo grande embaixo à esquerda, legal em mono pequeno, ícones sociais |

## 7. Movimento 🔶

- Hero em vídeo em loop.
- Abas trocam sozinhas a cada ~5s, com fade na mídia.
- Fundo da Research: vídeo borrado em movimento lento.
- Hover dos botões: escurece levemente.

## 8. O que levar para o default

Moldura do hero, calma tipográfica (400 nos títulos), 3 colunas de oferta, painel de abas, bloco Research com lista à direita, notícias 2×2, footer de colunas, faixa de anúncio.

## 9. O que NÃO copiar

Logo, vídeos, fotos, textos, a fonte ABC Normal (paga) e os nomes de produto.
