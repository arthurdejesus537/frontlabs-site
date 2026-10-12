# Ploy · medidas da rodada 2 (Playwright, 1440×900, 12/10/2026)

Script: `tools/measure-r2.mjs` (saída bruta em `medidas.txt`). Screenshots por seção: `home/` e `pricing/` (1440 e 390).

## Cards ao vivo (Web / Grow / Ads)
- Card: 373×372, padding 24, raio 12, fundo branco; gap entre cards 16; faixa dos cards 1152px.
- Pill do produto: 14px/600, fundo #212121, raio pill, 22px de altura.
- Número: 72px/700, linha 1 (cada dígito é uma coluna 0–9 de 72px que rola: **odômetro**).
- Rótulo do número: 14px/600, 16px abaixo do número.
- Linha de log: caixa #F5F5F5 raio 4, 64px de altura (transição de min-height 0.3s), texto 12.16px/500 a 60% de opacidade.
- **Rodízio do log: troca a cada ~4s** (amostras em 1.0 → 5.0 → 9.0 → 13/17 → 21 → 25 → 29s), fade de **0.4s** em opacidade + transform.
- Mini-stats: rótulo 12.16px/400, número 20.8px/700 (também odômetro).
- Status: ponto pulsando + texto 14/600.

## Página de preço (/pricing)
- Herói: etiqueta pill "Pricing" (y 148), h1 144px/700 em 2 linhas (550px de largura, centrado), lead 18px a 72% (578px), 2 botões.
- Planos: 4 cards de 305×782, padding 32, raio 14, borda 1px rgba(33,33,33,.08); destacado com borda colorida; gap 20.
- "How credits work": bloco cinza #E5E5E5, raio 20, padding 112/96, 1392px (24px das bordas); título 36/600 à esquerda, linhas à direita (título da linha 16/600).
- "Every plan, side by side.": h2 64px, tabela 1152px, linhas de 65px, coluna destacada com fundo de cor.
- "Pricing, answered.": h2 64px/600 −2.56px; itens de acordeão com padding 32/0 (94px por linha fechada).
- CTA final "Ship your site." 144px sobre campo amarelo; rodapé escuro.
- Vazio entre seções: 24px entre blocos com fundo (seções com padding 24).
