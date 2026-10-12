# REVISAR — Front Labs (rodada da noite, 12/10/2026)

O que o Pedro precisa conferir. Cada `[CONFIRMAR]` no site está listado aqui.

## 1. [CONFIRMAR] — fatos que precisam de fonte

| Onde | O que está no site | Pergunta |
|---|---|---|

## 2. Decisões tomadas sozinho

| Decisão | Por quê |
|---|---|
| Símbolo `|/` do logo desenhado em SVG na mão (barra reta + barra inclinada) | O kit da marca (`logo/` com o SVG) não está nesta pasta. Trocar pelo SVG oficial quando houver: `components/ui/Logo.tsx` |
| Horizonte 16:9 gerado reamostrando o 4:5 (1200×1500 → 2400×1350), sem corte | Cortar perdia o céu ou a grama; reamostrar mantém todas as cores. O grão original fica um pouco achatado, mas por cima vai o `grao.png` |
| Campos de cor (`--c-field-*`) viram branco/cinza na Front Labs | DESIGN §4.2: campos são "legado, em aberto" e a interface é preto e branco; a cor da página fica no Horizonte |

## 3. Diferenças em relação ao DESIGN.md

| DESIGN.md diz | No site | Por quê |
|---|---|---|
| `--soft` #9A9792 na frase de destaque (preto + soft, §9.3) | `#8A8782` | #9A9792 sobre #F4F3F1 dá ~2.6:1 e não passa AA nem para texto grande (3:1). #8A8782 dá ~3.2:1 e quase não muda o tom |

## 4. Vale devolver ao default?

| Componente / mudança | Recomendação |
|---|---|
