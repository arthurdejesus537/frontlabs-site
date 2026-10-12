# Ploy · texto que preenche ao rolar (medido em 12/10/2026, 1440×900)

HTML real:
```html
<h2 class="... uppercase text-center" data-scrollfill="true" data-scrollstart="top 80%" data-scrollend="bottom center"
    aria-label="Your website launched. Then it stopped.">
  <div class="word" aria-hidden="true" style="position:relative;display:inline-block;--progress:0%">Your</div>
  <div class="word" aria-hidden="true" style="...;--progress:0%">website</div>
  ...
</h2>
```
Estilo computado de cada `.word`:
- `color: transparent`
- `background-clip: text`
- `background-image: linear-gradient(90deg, rgb(33,33,33), rgb(33,33,33) var(--progress), <cinza claro> var(--progress))`

Progresso observado (palavra por palavra, em sequência) rolando a página:
| topo do h2 em relação à janela | palavras |
|---|---|
| ~900px abaixo | todas 0% |
| ~700px | 1ª 23%, resto 0% |
| ~500px | 1ª e 2ª 100%, 3ª 54% |
| ~300px | 4 cheias, 5ª 86% |
| ~100px | quase todas 100% |

Início: topo do título a 80% da altura da janela. Fim: base do título no meio da janela.
Screenshot no meio do preenchimento: `ploy-scrollfill-meio.png`.
