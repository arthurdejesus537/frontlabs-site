# SITE MESTRE · Referência B — ploy.ai

**Medido em:** 12/10/2026, Playwright (Chromium), 1440×900 e 390×844.
**Arquivos de apoio nesta pasta:** `ploy-d-full.png`, `ploy-m-full.png`, `ploy-1440.json`, `ploy-390.json`.

> Legenda: ✅ medido no site · 🔶 estimado olhando o screenshot

---

## 1. DNA

1. **Grito + calma.** Títulos enormes em fonte condensada caixa-alta (FK Screamer), contra corpo pequeno e calmo em Geist.
2. **Fundo cinza, cards brancos.** Página `#F4F4F4`; conteúdo em cards brancos com raio 8–12px.
3. **Campos de cor como capítulos.** Rosa, amarelo e azul claros em blocos de raio 20px, cada um um capítulo da história.
4. **Narrativa de venda.** Problema → o que o produto faz → prova (números e atividade) → biblioteca → para quem → CTA.
5. **Produto trabalhando.** Cards com número grande, gráfico e "status ao vivo"; timeline com horário do que foi feito.
6. **Microcopy que tira atrito.** "Free tier · No card · 60-second slurp".

## 2. Cores ✅ (tokens reais do site)

| Token Ploy | Valor | Uso |
|---|---|---|
| `--ploy-background-primary` | `#F4F4F4` | página |
| `--ploy-background-secondary` | `#FFFFFF` | cards |
| `--ploy-text-primary` | `#212121` | títulos e texto |
| `--ploy-text-secondary` | `#555555` | texto de apoio |
| `--ploy-border-primary` | `#E3E3E3` | linhas e bordas |
| `--ploy-button-primary-background` | `#212121` | botão preto |
| `--ploy-button-secondary-border` | `#B3B3B3` | botão contornado |
| `--ploy-brand-pink` | `#FFB8FC` | campo "You slept 8 hours" |
| `--ploy-brand-yellow` | `#FFFA64` | campo "An employee" |
| `--ploy-brand-blue` | `#C3DBFF` | campo PloyBooks e card Enterprise |
| Footer | `#212121` | card escuro com raio 20 |

## 3. Tipografia ✅

| Uso | Família | Tamanho / altura | Peso | Outros |
|---|---|---|---|---|
| Grito (H1/H2) | FK Screamer | 144 / 123.8 (0.86) | 700 | caixa-alta |
| Grito médio | FK Screamer | 96 / 82.6 e 72 / 61.9 | 700 | caixa-alta |
| Título de card | Geist | 20.8 / 27.7 | 600 | −0.832px (−0.04em) |
| Título de seção calmo | Geist | 36 / 38.9 | 600 | −1.44px (−0.04em) |
| Corpo | Geist | 16 / 24 | 400 | −0.32px (−0.02em) |
| Rótulo | Geist | 14 / 20 | 600 | — |
| Número de card | Geist | 72 / 62 | 700 | — |
| Link do menu | Geist | 16 | 500 | cor 70% |

Substituta gratuita da FK Screamer: **Anton** (Google Fonts). Geist é gratuita.

Mobile (390): grito do hero ~56px, 5 linhas; corpo continua 16px.

## 4. Espaço e grid ✅

- Campos de cor e hero: 24px da borda (hero 32px), largura 1392 a 1440.
- Conteúdo dentro dos campos: container de **1152px** (x = 144).
- Cards de stats: 3 × 373px, gap 16px.
- Nav: 48px de altura, botões pill de 48px.
- Seções separadas: ✅ vazio entre blocos de seções vizinhas = **136–255px** a 1440 e **97–220px** a 390 (medido 12/10); campos coloridos encostados (gap 24px).

## 5. Raios ✅

Raios presentes na página (12/10): 4, 6, 8, 12, 16, 20, 24, 44 e pill (1600px).

| Elemento | Raio |
|---|---|
| Hero | 12px |
| Campo colorido / footer | 20px |
| Card de stats | 12px |
| Card de timeline e de biblioteca | 8px |
| Card de anúncio no hero | 8px |
| Botão | pill (999px), 46–48px de altura, padding 16×24, texto 14/600 |

## 6. Estrutura da home (ordem exata) ✅

| # | Seção | Como é |
|---|---|---|
| 1 | Nav | logo, 6 links, "Log in" (pill branca) e "Start Free" (pill preta) |
| 2 | Hero | moldura com vídeo; grito centralizado em 3 linhas; subtítulo; 2 pills (branca e contornada); card de anúncio no canto inferior esquerdo; botão play redondo no canto inferior direito |
| 3 | Logos | "Trusted by…" + marquee de logos cinza |
| 4 | Problema | grito cinza claro "Your website launched. Then it stopped." com objeto 3D na frente; frase pequena embaixo |
| 5 | Pilares | card branco com 3 colunas separadas por linha: ícone, título, texto (Monitor / Act / Surface) |
| 6 | Prova | campo rosa: grito à esquerda, texto à direita; 3 cards de número com gráfico, nota e mini-stats |
| 7 | Atividade | campo amarelo: "An employee… that never sleeps" com timeline de cards (horário, tag colorida, título, texto) |
| 8 | Biblioteca | campo azul: grito, texto, setas; carrossel de cards (marca, título, autor, descrição) |
| 9 | Plataforma | "One platform three engines" em palavras gigantes espalhadas; card de 3 colunas com lista |
| 10 | Para quem | etiqueta pill escura, título calmo à esquerda; à direita cards empilhados (o primeiro em azul, aberto) |
| 11 | CTA final | grito centralizado, frase, card branco com input pill + botão, microcopy |
| 12 | Footer | card escuro raio 20: frase + "Contact us"; "Want the short version?" com pills de IA; 5 colunas; integrações; linha legal |

## 7. Movimento

Medido 12/10 ✅: hover de cor `150–200ms cubic-bezier(0.4, 0, 0.2, 1)`; entrada do hero `homeHeroIntroIn 720ms cubic-bezier(0.22, 1, 0.36, 1)`; pulso de status ao vivo `pcPulse/pcRing 2.8s ease-in-out` em loop; transform com mola de 450ms nos cards.
Estimado 🔶 (só visível com rolagem humana):

- Números dos cards rolam como odômetro.
- Objetos 3D (balões) flutuam e passam por trás/na frente dos títulos.
- Timeline aparece em sequência ao rolar.
- Palavras de "One platform three engines" entram de lados opostos.

## 8. O que levar para o default

A narrativa (problema → pilares → prova → biblioteca → para quem → CTA), cards brancos sobre fundo cinza, campos de cor como capítulos, card de anúncio no hero, cards de número com status, timeline com horário, CTA final com input e microcopy, footer em card escuro com "Ask AI".

## 9. O que NÃO copiar

Logo, balões 3D, vídeos, textos, a fonte FK Screamer (paga) e as cores de marca exatas (no default viram tokens de campo trocáveis).
