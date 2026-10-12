# Comparação lado a lado — default × referências

Screenshots do default: `qa/default/{1440,768,390}-full.png` e `qa/default/secoes/`.
Referências: `qa/refs/runway/`, `qa/refs/ploy/`, `docs/referencias/*-full.png`.
Comparação de proporção, espaçamento, peso e ritmo — não de conteúdo (o default só tem placeholders).

| # | Seção | Origem | Igual à origem | Diferente de propósito |
|---|---|---|---|---|
| 0 | Faixa de anúncio | A | 48px, texto 14 centralizado, link sublinhado, botão contornado pequeno com chevron | cor neutra (`--c-bar` #141414) em vez do azul da marca Runway |
| 1 | Nav | A + B | 68px, marca à esquerda, links no centro, botões pequenos à direita | 2 botões (não 3), pills (B) em vez de botões de raio 6 (A); links sem chevron (não há submenus) |
| 2 | Hero | A + B | moldura raio 12 a 24px da borda; copy embaixo à esquerda a 40px da moldura; card de anúncio branco raio 8 (B); 2 CTAs (B) | 720px de altura (A 600, B 865); H1 56px (A usa 40px, que some no desktop largo — MESTRE §2) |
| 3 | Logos | A + B | frase cinza 14 centralizada + marquee com bordas esmaecidas | placeholders cinza no lugar dos logos |
| 4 | Problema | B | grito cinza centralizado em 2–3 linhas + frase pequena embaixo | Anton no lugar da FK Screamer; 112px (grito médio) em vez de 144 porque a Anton é mais larga; cinza `#8A8A8A` (mais escuro que o da Ploy) para passar 3:1; sem objeto 3D |
| 5 | Pilares | B | card branco, 3 colunas com linha vertical, ícone escuro quadrado, título bem abaixo do ícone, texto 14 | ícones de traço próprios |
| 6 | Ofertas | A | título centralizado 56, 3 colunas iguais de largura total com gap 16, nome 24/400, mídia 16:9 raio 8, frase 24, texto 14, botões pequenos, meta 12 | botões pill (B); modo `pricing` extra |
| 7 | Abas | A | rótulos de grupo com linha entre eles, painel branco raio 16 com borda, lista à esquerda (ativa escura), mídia à direita raio 12, fade | inativas em `#6E6E6E` (AA) em vez do cinza claro da Runway; frase curta embaixo da aba ativa; botão pausar (acessibilidade) |
| 8 | Prova | B | campo rosa raio 20 a 24px da borda; título à esquerda / texto à direita; 3 cards brancos raio 12 com número grande, gráfico, nota cinza, 3 mini-stats e status com pulso | título calmo (`t-display`) no lugar do grito; cards dentro do campo (a Ploy deixa os cards vazarem para o campo seguinte) |
| 9 | Atividade | B | campo amarelo encostado no anterior (24px); começo do título em cima à esquerda, coluna central de cards com horário + tag colorida, fim do título embaixo à direita; entrada em sequência | título calmo; sem objeto 3D |
| 10 | Biblioteca | B | campo azul, título à esquerda, texto + setas à direita, carrossel que começa no container e sangra até a borda, card com topo tingido e base branca | sem marca/avatares reais |
| 11 | Destaque | A (Research) | moldura raio 12 com fundo borrado em movimento lento, parágrafo grande à esquerda + botão contornado, lista de 3 itens com linha branca e ↗ à direita | fundo é um gradiente neutro de placeholder; véu de 28% para AA |
| 12 | Para quem | B | etiqueta pill escura + título calmo à esquerda; cards empilhados à direita com pontos nos cantos; o aberto em azul | nome do segmento calmo (a Ploy usa o grito); título fixo (sticky) enquanto os cards rolam |
| 13 | Notícias | A | título à esquerda; 2×2 com imagem à esquerda (~342px) e título 24 / texto 14 / "saiba mais ›" | — |
| 14 | CTA final | B | grito centralizado, frase, card branco com input pill + botão preto dentro, microcopy 12/600 | 112px (grito médio); validação e estado de sucesso sem backend |
| 15 | Footer | B + A | card escuro raio 20; frase + contato; "versão curta" com pills de IA; colunas (A); linha legal em mono pequeno caixa-alta e ícones sociais (A) | 4 colunas em 1 linha (A tem 8 em 2 linhas; B tem 5); marca 40px |

## Responsivo (Fase 4)

- 1440 / 768 / 390: sem rolagem horizontal (`tools/qa-check.mjs`).
- Toque ≥ 44px no celular em todos os links e botões (botões pequenos ampliam a área com pseudo-elemento; links do rodapé e da faixa com área vertical extra).
- 768: ofertas mantêm 3 colunas (frase cai para 20px); prova e atividade em 1 coluna; nav vira menu abaixo de 1024px.

## Seções desligáveis

Teste com `enabled: false` em faixa de anúncio, problema, prova, biblioteca e notícias (`qa/default/desligadas/`): a página fecha sem buracos, os pilares recuperam o respiro de cima (o "colar no problema" só vale quando o problema vem antes) e os campos coloridos que sobram ficam com o espaçamento normal.
